"use client";

import {
  ArrowLeft,
  Database,
  Brain,
  FileText,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#2E7D32] transition focus:outline-none focus:ring-2 focus:ring-[#2E7D32] rounded px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Chat
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          About Construction Sustainability Advisor
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          An AI-powered chatbot that helps construction professionals make
          informed, sustainable product decisions using Retrieval-Augmented
          Generation (RAG).
        </p>

        {/* What is RAG */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is RAG?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Retrieval-Augmented Generation (RAG)</strong> is an AI
            architecture that combines the power of large language models with
            your own document database. Instead of relying solely on the AI's
            training data, RAG retrieves relevant information from your uploaded
            documents before generating responses.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This means you get accurate, source-backed answers specific to your
            construction product documentation, not generic AI responses.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#2E7D32]/10 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#2E7D32]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  1. Document Upload & Processing
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Upload your Environmental Product Declarations (EPDs), product
                  datasheets, and sustainability reports. The system extracts
                  text and breaks documents into smaller chunks for efficient
                  retrieval.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#1976D2]/10 rounded-full flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#1976D2]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2. Vector Storage & Indexing
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Document chunks are stored in a searchable database. When you
                  ask a question, the system finds the most relevant chunks
                  using semantic similarity matching.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#FF9800]/10 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#FF9800]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  3. Context Retrieval
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The most relevant document sections are retrieved and provided
                  as context to the AI, ensuring responses are grounded in your
                  actual product data.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#9C27B0]/10 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#9C27B0]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  4. AI Response Generation
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The AI generates a comprehensive answer using both its
                  knowledge and the retrieved context, complete with source
                  citations showing which documents the information came from.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use the App
          </h2>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  <strong>Ask natural language questions</strong> about
                  construction products, sustainability metrics, or material
                  comparisons.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  <strong>Use example queries</strong> in the sidebar to get
                  started quickly with common questions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  <strong>Review source citations</strong> at the bottom of AI
                  responses to verify information and explore original
                  documents.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  <strong>Ask follow-up questions</strong> - the conversation
                  maintains context so you can dig deeper into topics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  <strong>Clear conversation</strong> when starting a new topic
                  to reset the context and get fresh responses.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sample Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Sample Data Included
          </h2>
          <p className="text-gray-700 mb-4">
            This demo includes Environmental Product Declarations (EPDs) for:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">
                Insulation Materials
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Rockwool Stone Wool Insulation</li>
                <li>• Kingspan PIR Insulation</li>
                <li>• Knauf Glass Mineral Wool</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">
                Concrete Products
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Holcim ECOPact Low-Carbon Concrete</li>
                <li>• CemEx Vertua Concrete</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">
                Timber Products
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Stora Enso Cross-Laminated Timber (CLT)</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">
                Cladding Systems
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Kebony Modified Wood Cladding</li>
                <li>• Trespa HPL Facade Panels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Data Sources & Limitations
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • This is a demonstration system with synthetic product data for
                illustration purposes.
              </li>
              <li>
                • Responses are based on the documents uploaded to the system -
                accuracy depends on document quality.
              </li>
              <li>
                • The AI may occasionally make errors or inferences - always
                verify critical data with source documents.
              </li>
              <li>
                • Embodied carbon values are product-specific and may vary by
                region, manufacturing process, and calculation methodology.
              </li>
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Technical Architecture
          </h2>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold">Frontend</span>
                <span>React with Next.js</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold">Backend</span>
                <span>Node.js API Routes</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold">Database</span>
                <span>PostgreSQL</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold">LLM</span>
                <span>OpenAI GPT-4 / Claude / Gemini</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Retrieval Method</span>
                <span>Text similarity matching</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E7D32] text-white rounded-lg hover:bg-[#1B5E20] transition focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:ring-offset-2"
          >
            Start Asking Questions
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </a>
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
