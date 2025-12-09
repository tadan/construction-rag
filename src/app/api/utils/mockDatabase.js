// Mock database for construction product sustainability chatbot demo

// In-memory storage
let documents = [
  {
    id: 1,
    filename: "Rockwool_Stone_Wool_Insulation_EPD.pdf",
    file_url: "/mock/rockwool.pdf",
    status: "ready",
    uploaded_at: new Date("2024-01-15"),
    metadata: { manufacturer: "Rockwool", category: "Insulation" }
  },
  {
    id: 2,
    filename: "Kingspan_PIR_Insulation_EPD.pdf",
    file_url: "/mock/kingspan.pdf",
    status: "ready",
    uploaded_at: new Date("2024-01-16"),
    metadata: { manufacturer: "Kingspan", category: "Insulation" }
  },
  {
    id: 3,
    filename: "Holcim_ECOPact_Concrete_EPD.pdf",
    file_url: "/mock/holcim.pdf",
    status: "ready",
    uploaded_at: new Date("2024-01-17"),
    metadata: { manufacturer: "Holcim", category: "Concrete" }
  },
  {
    id: 4,
    filename: "Stora_Enso_CLT_EPD.pdf",
    file_url: "/mock/stora.pdf",
    status: "ready",
    uploaded_at: new Date("2024-01-18"),
    metadata: { manufacturer: "Stora Enso", category: "Timber" }
  },
  {
    id: 5,
    filename: "Kebony_Modified_Wood_EPD.pdf",
    file_url: "/mock/kebony.pdf",
    status: "ready",
    uploaded_at: new Date("2024-01-19"),
    metadata: { manufacturer: "Kebony", category: "Cladding" }
  },
  {
    id: 6,
    filename: "CemEx_Vertua_Concrete_EPD.pdf",
    file_url: "/mock/cemex.pdf",
    status: "ready",
    uploaded_at: new Date("2024-01-20"),
    metadata: { manufacturer: "CemEx", category: "Concrete" }
  }
];

let documentChunks = [
  // Rockwool Stone Wool Insulation
  {
    id: 1,
    document_id: 1,
    chunk_text: "Rockwool stone wool insulation has an embodied carbon of 1.2 kg CO2e/kg. The product is made from volcanic rock (basalt) and recycled slag. It provides excellent fire resistance (Class A1 non-combustible) and thermal performance with λ-value of 0.035 W/mK. The product contains 37% recycled content and is 100% recyclable at end of life.",
    page_number: 3,
    metadata: { section: "Environmental Performance" }
  },
  {
    id: 2,
    document_id: 1,
    chunk_text: "Rockwool insulation achieves BREEAM Excellent rating and contributes to LEED certification. The product has third-party verified EPD certification (EN 15804). It is suitable for passive house construction with excellent airtightness properties. Thermal conductivity: 0.035 W/mK, Density: 30-200 kg/m³.",
    page_number: 5,
    metadata: { section: "Certifications" }
  },

  // Kingspan PIR Insulation
  {
    id: 3,
    document_id: 2,
    chunk_text: "Kingspan Therma PIR insulation features embodied carbon of 3.8 kg CO2e/kg. The rigid polyisocyanurate (PIR) foam core provides superior thermal performance with λ-value of 0.022 W/mK. The product uses low Global Warming Potential (GWP) blowing agents and achieves an A+ rating for thermal efficiency.",
    page_number: 2,
    metadata: { section: "Product Overview" }
  },
  {
    id: 4,
    document_id: 2,
    chunk_text: "Kingspan PIR insulation is BRE certified and contributes to BREEAM and LEED projects. The product has EPD certification to EN 15804+A2 standard. Fire classification: Class B-s1,d0 (Euro class). The insulation board is manufactured with renewable energy (80% of production energy) and contains recycled aluminum facings.",
    page_number: 4,
    metadata: { section: "Sustainability Data" }
  },

  // Holcim ECOPact Concrete
  {
    id: 5,
    document_id: 3,
    chunk_text: "Holcim ECOPact low-carbon concrete reduces embodied carbon by up to 40% compared to standard concrete. Embodied carbon: 180 kg CO2e/m³ for C30/37 grade (vs 300 kg CO2e/m³ for standard). Achieves this through optimized cement content, supplementary cementitious materials (SCMs) including fly ash and ground granulated blast furnace slag (GGBS), and carbon capture technology.",
    page_number: 1,
    metadata: { section: "Carbon Reduction" }
  },
  {
    id: 6,
    document_id: 3,
    chunk_text: "ECOPact concrete maintains equivalent structural performance to standard concrete. Compressive strength: 30-60 MPa. Contains 35% SCMs replacing Portland cement. EPD certified to EN 15804. Suitable for structural applications, foundations, and slabs. LEED and BREEAM compliant. Water permeability: <10mm at 28 days.",
    page_number: 3,
    metadata: { section: "Technical Performance" }
  },

  // Stora Enso CLT
  {
    id: 7,
    document_id: 4,
    chunk_text: "Stora Enso Cross-Laminated Timber (CLT) stores atmospheric carbon, resulting in negative embodied carbon of -350 kg CO2e/m³ (carbon storage included). Made from sustainably sourced spruce with FSC and PEFC certification. Each m³ of CLT sequesters approximately 0.8 tonnes of CO2 from the atmosphere. The product is 100% renewable and biodegradable.",
    page_number: 2,
    metadata: { section: "Carbon Storage" }
  },
  {
    id: 8,
    document_id: 4,
    chunk_text: "CLT panels achieve structural performance comparable to concrete and steel. Bending strength: 24 MPa, Compression parallel to grain: 21 MPa. Fire resistance up to REI 90 when protected. EPD certified, Passive House certified. Typical panel dimensions: 3-16m length, 2.4-3.0m width, 60-300mm thickness. Lambda value: 0.13 W/mK.",
    page_number: 4,
    metadata: { section: "Structural Properties" }
  },

  // Kebony Modified Wood
  {
    id: 9,
    document_id: 5,
    chunk_text: "Kebony modified wood cladding has embodied carbon of 0.4 kg CO2e/kg. The patented Kebonisation process uses bio-based furfuryl alcohol derived from agricultural waste to permanently modify softwood, giving it properties similar to tropical hardwood. The modification process is non-toxic and the wood remains fully recyclable.",
    page_number: 1,
    metadata: { section: "Production Process" }
  },
  {
    id: 10,
    document_id: 5,
    chunk_text: "Kebony cladding offers 30+ year durability without chemical treatment. Hardness: 5-6 on Brinell scale. Dimensional stability coefficient: 0.11. FSC certified, Cradle to Cradle Silver certified, EPD available. Suitable for external cladding, decking, and outdoor furniture. Requires no maintenance beyond natural weathering to silver-grey patina.",
    page_number: 3,
    metadata: { section: "Performance Data" }
  },

  // CemEx Vertua Concrete
  {
    id: 11,
    document_id: 6,
    chunk_text: "CemEx Vertua concrete achieves 30-70% carbon reduction compared to conventional concrete. Embodied carbon: 200 kg CO2e/m³ for standard grade. Uses recycled aggregates (up to 30%), clinker substitution with SCMs, and optimized mix design. Available in grades C20 to C50.",
    page_number: 2,
    metadata: { section: "Environmental Impact" }
  },
  {
    id: 12,
    document_id: 6,
    chunk_text: "Vertua concrete meets EN 206 standard for structural concrete. Compressive strength classes: C20/25 to C50/60. Exposure classes: XC1 to XF4. Contains Portland cement CEM I and CEM II with GGBS. EPD certified. Suitable for foundations, columns, beams, and slabs. Chloride content: <0.4% for reinforced concrete.",
    page_number: 5,
    metadata: { section: "Technical Specifications" }
  },

  // Additional context chunks for common queries
  {
    id: 13,
    document_id: 1,
    chunk_text: "Insulation materials comparison: Stone wool (1.2 kg CO2e/kg) offers excellent fire performance but higher embodied carbon than some alternatives. PIR foam (3.8 kg CO2e/kg) has superior thermal performance per mm but higher carbon footprint. Natural materials like wood fiber typically range 0.5-1.0 kg CO2e/kg.",
    page_number: 7,
    metadata: { section: "Comparative Analysis" }
  },
  {
    id: 14,
    document_id: 3,
    chunk_text: "Concrete carbon reduction strategies: Replace Portland cement with SCMs (30-70% reduction), use recycled aggregates (5-10% reduction), optimize mix design (10-20% reduction), carbon curing (5-10% reduction). Total potential: 40-70% carbon reduction vs baseline.",
    page_number: 8,
    metadata: { section: "Best Practices" }
  },
  {
    id: 15,
    document_id: 4,
    chunk_text: "Timber construction for passive house: CLT provides excellent airtightness (n50 < 0.6 h⁻¹ achievable), thermal mass benefits, and low thermal bridging when properly detailed. Lambda: 0.13 W/mK. Requires external insulation layer (250-400mm) to meet passive house U-values (walls <0.15 W/m²K).",
    page_number: 6,
    metadata: { section: "Passive House Applications" }
  }
];

let messages = [];
let conversations = [{ id: 1, created_at: new Date() }];

// Mock SQL query function that mimics postgres-neon API
export function createMockSQL() {
  return async function sql(strings, ...values) {
    // Simple template literal parser
    let query = strings[0];
    for (let i = 0; i < values.length; i++) {
      query += String(values[i]) + (strings[i + 1] || '');
    }

    const queryLower = query.toLowerCase().trim();

    // SELECT queries
    if (queryLower.startsWith('select')) {
      // Documents query
      if (queryLower.includes('from documents')) {
        return [...documents];
      }

      // Document chunks query with JOIN
      if (queryLower.includes('from document_chunks') && queryLower.includes('join documents')) {
        return documentChunks.map(chunk => {
          const doc = documents.find(d => d.id === chunk.document_id);
          return {
            ...chunk,
            filename: doc?.filename,
            doc_metadata: doc?.metadata
          };
        });
      }

      // Messages query
      if (queryLower.includes('from messages')) {
        const conversationId = values[0] || 1;
        return messages.filter(m => m.conversation_id === conversationId);
      }
    }

    // INSERT queries
    if (queryLower.startsWith('insert')) {
      if (queryLower.includes('into messages')) {
        const newMessage = {
          id: messages.length + 1,
          conversation_id: values[0],
          role: values[1],
          content: values[2],
          sources: values[3] ? JSON.parse(values[3]) : [],
          created_at: new Date()
        };
        messages.push(newMessage);
        return [newMessage];
      }
    }

    // DELETE queries
    if (queryLower.startsWith('delete')) {
      if (queryLower.includes('from messages')) {
        const conversationId = values[0];
        messages = messages.filter(m => m.conversation_id !== conversationId);
        return [];
      }
    }

    return [];
  };
}

export default createMockSQL();
