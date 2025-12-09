"use client";

import { useState, useEffect, useRef } from "react";
import {
  FileText,
  Send,
  Loader2,
  Trash2,
  Upload,
  MessageSquare,
  FileCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import useHandleStreamResponse from "@/utils/useHandleStreamResponse";

export default function SustainabilityChatbot() {
  const [documents, setDocuments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [streamingMessage, setStreamingMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [documentsLoading, setDocumentsLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const conversationId = 1; // Default conversation

  // Example queries for quick access
  const exampleQueries = [
    "What insulation materials have embodied carbon below 5 kg CO2e/kg?",
    "Compare three concrete products on sustainability metrics",
    "What products are suitable for passive house construction?",
    "Show me timber cladding options with EPD certifications",
  ];

  // Fetch documents on mount
  useEffect(() => {
    fetchDocuments();
    fetchMessages();
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingMessage]);

  const fetchDocuments = async () => {
    try {
      setDocumentsLoading(true);
      const response = await fetch("/api/documents");
      if (!response.ok) throw new Error("Failed to fetch documents");
      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setDocumentsLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `/api/messages?conversationId=${conversationId}`,
      );
      if (!response.ok) throw new Error("Failed to fetch messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleFinish = (message) => {
    // Add completed streaming message to local state
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: message, sources: [] },
    ]);
    setStreamingMessage("");
  };

  const handleStreamResponse = useHandleStreamResponse({
    onChunk: setStreamingMessage,
    onFinish: handleFinish,
  });

  const handleSendMessage = async (messageText) => {
    const text = messageText || inputMessage.trim();
    if (!text || loading) return;

    setInputMessage("");
    setLoading(true);

    try {
      // Add user message to display
      const userMessage = { role: "user", content: text, sources: [] };
      setMessages((prev) => [...prev, userMessage]);

      // Send to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          message: text,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      // Handle streaming response
      await handleStreamResponse(response);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error processing your request.",
          sources: [],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearConversation = async () => {
    try {
      const response = await fetch(`/api/conversation/clear`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId }),
      });
      if (!response.ok) throw new Error("Failed to clear conversation");
      setMessages([]);
      setStreamingMessage("");
    } catch (error) {
      console.error("Error clearing conversation:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-white text-sm">
      {/* Top Bar */}
      <header className="h-14 flex items-center justify-between border-b border-gray-200 px-4 md:px-8 bg-white relative">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-semibold text-gray-800">
            Construction Sustainability Advisor
          </h1>
        </div>
        <a
          href="/about"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#2E7D32] transition focus:outline-none focus:ring-2 focus:ring-[#2E7D32] rounded px-3 py-1.5"
        >
          <HelpCircle className="w-4 h-4" />
          <span className="hidden sm:inline">About</span>
        </a>
      </header>

      {/* Main content area with sidebar */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 shrink-0 border-r border-gray-200 bg-gray-50 hidden md:flex flex-col">
          <div className="p-6 flex-1 overflow-y-auto">
            {/* Documents Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Documents
                </h2>
                <button className="p-1.5 hover:bg-gray-200 rounded transition focus:outline-none focus:ring-2 focus:ring-[#2E7D32]">
                  <Upload className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {documentsLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                </div>
              ) : (
                <div className="space-y-2">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#2E7D32] transition"
                    >
                      <div className="mt-0.5">
                        {doc.status === "ready" ? (
                          <FileCheck className="w-4 h-4 text-[#2E7D32]" />
                        ) : doc.status === "error" ? (
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        ) : (
                          <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700 truncate">
                          {doc.filename}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {doc.metadata?.manufacturer || "Unknown"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Example Queries */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                Try Example Queries
              </h2>
              <div className="space-y-2">
                {exampleQueries.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(query)}
                    disabled={loading}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#2E7D32] hover:bg-[#2E7D32]/5 transition text-xs text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Conversation */}
            <button
              onClick={handleClearConversation}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-[#2E7D32] text-sm"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Conversation</span>
            </button>
          </div>
        </aside>

        {/* Main Chat Area */}
        <section className="flex-1 flex flex-col bg-white">
          {/* Messages Container */}
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            {messages.length === 0 && !streamingMessage ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-16 h-16 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-[#2E7D32]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Welcome to the Construction Sustainability Advisor
                </h2>
                <p className="text-gray-600 max-w-md mb-6">
                  Ask questions about construction product sustainability,
                  compare materials, and get data-driven answers from
                  environmental product declarations.
                </p>
                <p className="text-sm text-gray-500">
                  Try one of the example queries or ask your own question below.
                </p>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user"
                          ? "bg-[#1976D2] text-white"
                          : "bg-gray-50 border border-gray-200 text-gray-800"
                      }`}
                    >
                      <div
                        className="text-sm leading-relaxed whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: message.content }}
                      />

                      {/* Sources */}
                      {message.sources && message.sources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-300">
                          <p className="text-xs font-semibold text-gray-600 mb-2">
                            Sources:
                          </p>
                          <div className="space-y-1">
                            {message.sources.map((source, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-xs text-gray-600"
                              >
                                <FileText className="w-3 h-3" />
                                <span>{source.filename}</span>
                                {source.page && (
                                  <span>(Page {source.page})</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Streaming message */}
                {streamingMessage && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-4 bg-gray-50 border border-gray-200 text-gray-800">
                      <div
                        className="text-sm leading-relaxed whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: streamingMessage }}
                      />
                    </div>
                  </div>
                )}

                {/* Loading indicator */}
                {loading && !streamingMessage && (
                  <div className="flex justify-start">
                    <div className="rounded-lg p-4 bg-gray-50 border border-gray-200">
                      <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </main>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 md:p-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end gap-3">
                <div className="flex-1 relative">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about construction product sustainability..."
                    disabled={loading}
                    rows={1}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent resize-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ minHeight: "48px", maxHeight: "120px" }}
                  />
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={loading || !inputMessage.trim()}
                  className="px-6 py-3 bg-[#2E7D32] text-white rounded-lg hover:bg-[#1B5E20] transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:ring-offset-2 flex items-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span className="hidden sm:inline">Send</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
