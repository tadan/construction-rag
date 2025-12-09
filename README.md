# Construction Sustainability Advisor

An AI-powered RAG (Retrieval-Augmented Generation) chatbot that helps construction professionals make informed, sustainable product decisions using Environmental Product Declarations (EPDs) and technical documentation.

![Construction Sustainability Advisor](https://img.shields.io/badge/Status-Demo-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Gemini AI](https://img.shields.io/badge/AI-Gemini%202.0-purple)

## 🎯 Project Overview

This application demonstrates a production-ready RAG system designed for the construction industry, specifically focused on sustainability metrics and product comparison. It showcases:

- **Retrieval-Augmented Generation (RAG)** architecture
- **Real-time streaming AI responses**
- **Semantic search** through construction product documentation
- **Source citation** for transparency and verification
- **Mock database** with realistic EPD data for demonstration

## 🏗️ Use Cases

- Compare embodied carbon across different material categories
- Find products that meet specific sustainability certifications (BREEAM, LEED, Passive House)
- Identify suitable materials for low-carbon construction
- Verify technical specifications from EPD documentation
- Make data-driven product selection decisions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Installation

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# (Optional) Add your Gemini API key to .env
# Note: The app works with mock AI responses by default
```

### Running the App

```bash
# Start development server
npm run dev

# Open browser to http://localhost:4000
```

The application will automatically use intelligent mock AI responses if no API key is provided, making it perfect for demonstrations and testing.

## 🎨 Features

### 1. RAG-Based Product Search
- Keyword-based retrieval from construction product database
- Context-aware responses using relevant document chunks
- Streaming responses for better UX

### 2. Mock Data System
- **6 realistic EPD documents** covering:
  - Insulation (Rockwool, Kingspan)
  - Concrete (Holcim ECOPact, CemEx Vertua)
  - Timber (Stora Enso CLT)
  - Cladding (Kebony)
- **15 document chunks** with technical specifications
- Realistic embodied carbon data and certifications

### 3. AI Response System
- **Primary:** Gemini 2.0 Flash API for production use
- **Fallback:** Intelligent mock responses for demos
- Automatic fallback on API quota/errors
- HTML-formatted tables for data comparison

### 4. Professional UI
- Clean, modern interface inspired by professional tools
- Responsive design (mobile & desktop)
- Real-time streaming message display
- Source citations with document references
- Example queries for quick testing

## 🏛️ Architecture

```
┌─────────────┐
│   Frontend  │ React + React Router
│   (UI/UX)   │
└──────┬──────┘
       │
┌──────▼──────┐
│  API Layer  │ Node.js + Hono
│  (Routes)   │
└──────┬──────┘
       │
   ┌───┴───┐
   │       │
┌──▼───┐ ┌─▼────────┐
│ Mock │ │  Gemini  │
│  DB  │ │ API/Mock │
└──────┘ └──────────┘
```

### Tech Stack

- **Frontend:** React 18, React Router 7, Tailwind CSS
- **Backend:** Node.js, Hono framework
- **AI:** Gemini 2.0 Flash (with smart mock fallback)
- **Database:** In-memory mock (easily swappable for PostgreSQL/Neon)

## 📊 Sample Queries

Try these example queries to see the system in action:

1. "What insulation materials have embodied carbon below 2 kg CO2e/kg?"
2. "Compare three concrete products on sustainability metrics"
3. "What products are suitable for passive house construction?"
4. "Show me timber cladding options with EPD certifications"

## 🔧 Configuration

### Using Real Gemini API

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to `.env`:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. Remove `USE_MOCK_AI` flag if present

### Using Mock AI (Default)

The application automatically uses mock responses when:
- No `GEMINI_API_KEY` is set
- API quota is exceeded
- Network errors occur

This ensures the demo always works reliably.

## 📁 Project Structure

```
construction-product-chatbot/
├── src/
│   ├── app/
│   │   ├── page.jsx              # Main chat interface
│   │   ├── about/page.jsx        # About page explaining RAG
│   │   └── api/
│   │       ├── chat/route.js     # Chat endpoint with RAG logic
│   │       ├── documents/route.js # Documents API
│   │       ├── messages/route.js  # Message history API
│   │       └── utils/
│   │           ├── mockDatabase.js # In-memory product data
│   │           ├── mockAI.js      # Intelligent fallback responses
│   │           ├── gemini.js      # Gemini API integration
│   │           └── sql.js         # Database abstraction
│   └── utils/
│       └── useHandleStreamResponse.js # Stream handling hook
├── .env.example
├── package.json
└── README.md
```

## 🎓 For BIM AI Engineer Role

This project demonstrates:

### AI/ML Skills
- ✅ RAG system architecture
- ✅ Prompt engineering for construction domain
- ✅ Streaming LLM responses
- ✅ Context management and retrieval

### BIM/Construction Knowledge
- ✅ Understanding of EPDs and embodied carbon
- ✅ Familiarity with sustainability certifications (BREEAM, LEED, Passive House)
- ✅ Material properties and technical specifications
- ✅ Construction industry data formats

### Software Engineering
- ✅ Modern React application architecture
- ✅ RESTful API design
- ✅ Error handling and fallback systems
- ✅ Clean, maintainable code structure
- ✅ Production-ready patterns

## 🚦 Future Enhancements

- Vector embeddings for semantic search
- Real PostgreSQL/Neon database integration
- PDF upload and parsing
- Multi-project conversation management
- Export comparison reports
- Integration with BIM software (Revit, IFC)

## 📝 License

This project is a demonstration for job application purposes.

## 👤 Author

**Daniele Tatasciore**
- Applying for: AI Engineer @ BIM
- LinkedIn: [Your Profile]
- Portfolio: [Your Website]

---

Built with ❤️ using React, Gemini AI, and modern web technologies
