// Mock AI responses for demo when Gemini API is unavailable
// These are pre-generated intelligent responses for common construction sustainability queries

const responses = {
  // Insulation queries
  'insulation.*embodied carbon.*below.*2': `Based on the environmental product documentation, here are insulation materials with embodied carbon below 2 kg CO2e/kg:

<p><strong>Rockwool Stone Wool Insulation</strong></p>
<ul>
<li><strong>Embodied Carbon:</strong> 1.2 kg CO2e/kg</li>
<li><strong>Thermal Performance:</strong> λ = 0.035 W/mK</li>
<li><strong>Fire Rating:</strong> Class A1 (non-combustible)</li>
<li><strong>Recycled Content:</strong> 37%</li>
<li><strong>Certifications:</strong> EPD certified (EN 15804), BREEAM Excellent, LEED compliant</li>
</ul>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
      <th style="padding: 8px; text-align: left; font-weight: 600;">Property</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Embodied Carbon</td>
      <td style="padding: 8px;">1.2 kg CO2e/kg</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Thermal Conductivity</td>
      <td style="padding: 8px;">0.035 W/mK</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Fire Rating</td>
      <td style="padding: 8px;">Class A1</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Recyclability</td>
      <td style="padding: 8px;">100%</td>
    </tr>
  </tbody>
</table>

<p><strong>Key Advantage:</strong> Excellent fire resistance and durability, making it ideal for high-performance buildings and passive house construction.</p>`,

  // Concrete comparison
  'concrete.*compare|compare.*concrete': `Here's a detailed comparison of low-carbon concrete products from the product documentation:

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
      <th style="padding: 8px; text-align: left; font-weight: 600;">Product</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Embodied Carbon</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Reduction</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Strength Class</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;"><strong>Holcim ECOPact</strong></td>
      <td style="padding: 8px;">180 kg CO2e/m³</td>
      <td style="padding: 8px;">40% reduction</td>
      <td style="padding: 8px;">C30/37</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;"><strong>CemEx Vertua</strong></td>
      <td style="padding: 8px;">200 kg CO2e/m³</td>
      <td style="padding: 8px;">30-70% reduction</td>
      <td style="padding: 8px;">C20-C50</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;"><em>Standard Concrete</em></td>
      <td style="padding: 8px;"><em>300 kg CO2e/m³</em></td>
      <td style="padding: 8px;"><em>Baseline</em></td>
      <td style="padding: 8px;"><em>C30/37</em></td>
    </tr>
  </tbody>
</table>

<p><strong>Key Technologies:</strong></p>
<ul>
<li><strong>Holcim ECOPact:</strong> Uses optimized cement content, SCMs (fly ash, GGBS), and carbon capture technology</li>
<li><strong>CemEx Vertua:</strong> Contains up to 30% recycled aggregates with clinker substitution</li>
</ul>

<p><strong>Certifications:</strong> Both products are EPD certified (EN 15804), LEED and BREEAM compliant, meeting EN 206 structural concrete standards.</p>`,

  // Passive house
  'passive house|timber.*passive': `<p>For passive house construction with timber, the Cross-Laminated Timber (CLT) from Stora Enso offers excellent performance:</p>

<p><strong>Carbon Storage &amp; Environmental Performance</strong></p>
<ul>
<li><strong>Embodied Carbon:</strong> -350 kg CO2e/m³ (negative = carbon storage)</li>
<li><strong>Carbon Sequestration:</strong> 0.8 tonnes CO2 per m³</li>
<li><strong>Renewable:</strong> 100% with FSC/PEFC certification</li>
</ul>

<p><strong>Passive House Performance</strong></p>
<ul>
<li><strong>Thermal Conductivity:</strong> λ = 0.13 W/mK</li>
<li><strong>Airtightness:</strong> Achieves n50 &lt; 0.6 h⁻¹ when properly detailed</li>
<li><strong>U-value:</strong> With 250-400mm external insulation, walls can achieve &lt; 0.15 W/m²K</li>
</ul>

<p><strong>Structural Properties</strong></p>
<ul>
<li><strong>Bending Strength:</strong> 24 MPa</li>
<li><strong>Compression:</strong> 21 MPa parallel to grain</li>
<li><strong>Fire Resistance:</strong> Up to REI 90 when protected</li>
</ul>

<p><strong>Recommendations:</strong></p>
<ol>
<li>Use CLT panels with external continuous insulation layer (250-400mm stone wool or PIR)</li>
<li>Ensure careful detailing at panel joints for airtightness</li>
<li>CLT provides thermal mass benefits while maintaining low thermal bridging</li>
</ol>

<p><strong>Certification:</strong> EPD certified, Passive House certified</p>`,

  // Rockwool specific
  'rockwool': `<p><strong>Rockwool Stone Wool Insulation</strong> is a high-performance mineral wool insulation made from volcanic rock (basalt).</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
      <th style="padding: 8px; text-align: left; font-weight: 600;">Property</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Embodied Carbon</td>
      <td style="padding: 8px;">1.2 kg CO2e/kg</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Thermal Conductivity (λ)</td>
      <td style="padding: 8px;">0.035 W/mK</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Fire Rating</td>
      <td style="padding: 8px;">Class A1 (non-combustible)</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Recycled Content</td>
      <td style="padding: 8px;">37%</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Recyclability</td>
      <td style="padding: 8px;">100%</td>
    </tr>
  </tbody>
</table>

<p><strong>Key Benefits:</strong></p>
<ul>
<li><strong>Fire Safety:</strong> Non-combustible Class A1 rating - does not contribute to fire spread</li>
<li><strong>Sustainability:</strong> EPD certified (EN 15804), BREEAM Excellent, LEED compliant</li>
<li><strong>Durability:</strong> Does not settle or degrade over time, maintaining thermal performance</li>
<li><strong>Sound Absorption:</strong> Excellent acoustic properties with high density options available</li>
<li><strong>Water Repellent:</strong> Maintains insulation performance even in humid conditions</li>
</ul>

<p><strong>Applications:</strong> External walls, roofs, floors, passive house construction, fire barriers</p>`,

  // BREEAM
  'breeam': `<p><strong>BREEAM (Building Research Establishment Environmental Assessment Method)</strong> is the world's leading sustainability assessment method for buildings, first launched in 1990.</p>

<p><strong>BREEAM Excellent Rating:</strong></p>
<p>BREEAM Excellent requires achieving 55-70% of available credits across these categories:</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
      <th style="padding: 8px; text-align: left; font-weight: 600;">Category</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Weighting</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Key Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Energy</td>
      <td style="padding: 8px;">19%</td>
      <td style="padding: 8px;">Low carbon design, renewable energy</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Materials</td>
      <td style="padding: 8px;">12.5%</td>
      <td style="padding: 8px;">EPDs, responsible sourcing, lifecycle impact</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Water</td>
      <td style="padding: 8px;">6%</td>
      <td style="padding: 8px;">Water efficiency, monitoring</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Waste</td>
      <td style="padding: 8px;">7.5%</td>
      <td style="padding: 8px;">Construction & operational waste reduction</td>
    </tr>
  </tbody>
</table>

<p><strong>Products with EPD certifications (like Rockwool)</strong> contribute to BREEAM credits in the Materials category by:</p>
<ul>
<li>Providing transparent lifecycle environmental data</li>
<li>Supporting informed material selection</li>
<li>Demonstrating responsible manufacturing practices</li>
<li>Enabling accurate whole-building carbon calculations</li>
</ul>

<p><strong>Rating Levels:</strong> Pass (30%), Good (45%), Very Good (55%), Excellent (70%), Outstanding (85%)</p>`,

  // LEED
  'leed': `<p><strong>LEED (Leadership in Energy and Environmental Design)</strong> is a globally recognized green building certification system developed by the U.S. Green Building Council.</p>

<p>Products with EPDs contribute to LEED v4 credits in several categories:</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
      <th style="padding: 8px; text-align: left; font-weight: 600;">Credit Category</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Points Available</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">EPD Contribution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Building Product Disclosure</td>
      <td style="padding: 8px;">1-2 points</td>
      <td style="padding: 8px;">EPDs count toward disclosure requirements</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">EPD Optimization</td>
      <td style="padding: 8px;">1-2 points</td>
      <td style="padding: 8px;">Products with lower environmental impact</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Sourcing of Raw Materials</td>
      <td style="padding: 8px;">1-2 points</td>
      <td style="padding: 8px;">Responsible extraction/harvesting</td>
    </tr>
  </tbody>
</table>

<p><strong>Available Products:</strong></p>
<ul>
<li>Rockwool Stone Wool: LEED compliant with EPD certification</li>
<li>Holcim ECOPact: Contributes to Materials &amp; Resources credits</li>
<li>Stora Enso CLT: FSC certified, contributes multiple credits</li>
</ul>

<p><strong>Certification Levels:</strong> Certified (40-49 points), Silver (50-59), Gold (60-79), Platinum (80+)</p>`,

  // Kingspan
  'kingspan': `<p><strong>Kingspan Insulation PIR (Polyisocyanurate)</strong> is a rigid foam insulation board offering high thermal performance.</p>

<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
      <th style="padding: 8px; text-align: left; font-weight: 600;">Property</th>
      <th style="padding: 8px; text-align: left; font-weight: 600;">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Embodied Carbon</td>
      <td style="padding: 8px;">3.8 kg CO2e/kg</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Thermal Conductivity (λ)</td>
      <td style="padding: 8px;">0.022 W/mK</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Fire Rating</td>
      <td style="padding: 8px;">Class B-s1, d0</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 8px;">Recycled Content</td>
      <td style="padding: 8px;">15%</td>
    </tr>
  </tbody>
</table>

<p><strong>Key Benefits:</strong></p>
<ul>
<li><strong>Superior Thermal Performance:</strong> 37% better λ-value than Rockwool, allowing thinner construction</li>
<li><strong>Space Efficiency:</strong> Achieves same U-value with less thickness</li>
<li><strong>Moisture Resistance:</strong> Closed-cell structure prevents water absorption</li>
<li><strong>Certifications:</strong> EPD certified (EN 15804), BRE Green Guide A+ rating</li>
</ul>

<p><strong>Trade-offs vs Rockwool:</strong></p>
<ul>
<li>Higher embodied carbon (3.8 vs 1.2 kg CO2e/kg)</li>
<li>Lower fire rating (Class B vs A1)</li>
<li>Better thermal performance per mm of thickness</li>
</ul>

<p><strong>Best Applications:</strong> Space-constrained projects, flat roofs, below-grade insulation</p>`,

  // General/default
  'default': `<p>Based on the environmental product documentation available, I can help you compare construction products across several sustainability metrics:</p>

<p><strong>Available Product Categories:</strong></p>
<ul>
<li><strong>Insulation:</strong> Rockwool stone wool (1.2 kg CO2e/kg), Kingspan PIR (3.8 kg CO2e/kg)</li>
<li><strong>Concrete:</strong> Holcim ECOPact (180 kg CO2e/m³), CemEx Vertua (200 kg CO2e/m³)</li>
<li><strong>Timber:</strong> Stora Enso CLT (-350 kg CO2e/m³ with carbon storage)</li>
<li><strong>Cladding:</strong> Kebony modified wood (0.4 kg CO2e/kg)</li>
</ul>

<p><strong>Key Sustainability Metrics:</strong></p>
<ul>
<li>Embodied carbon (kg CO2e per functional unit)</li>
<li>Recycled content and recyclability</li>
<li>EPD certifications (EN 15804)</li>
<li>BREEAM, LEED, Passive House compliance</li>
<li>Fire performance and durability</li>
</ul>

<p>Please ask a specific question about any of these products or comparisons between them.</p>`
};

/**
 * Generate a mock AI response based on the query
 * Returns a readable stream that mimics Gemini's streaming behavior
 */
export function generateMockResponse(query) {
  const queryLower = query.toLowerCase();

  // Find matching response pattern
  let response = responses.default;
  for (const [pattern, text] of Object.entries(responses)) {
    if (pattern !== 'default' && new RegExp(pattern, 'i').test(queryLower)) {
      response = text;
      break;
    }
  }

  // Create a streaming response that simulates AI typing
  return new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const words = response.split(' ');

      for (let i = 0; i < words.length; i++) {
        const word = words[i] + (i < words.length - 1 ? ' ' : '');
        controller.enqueue(encoder.encode(word));

        // Simulate typing delay (faster for demo)
        await new Promise(resolve => setTimeout(resolve, 15));
      }

      controller.close();
    }
  });
}

/**
 * Check if mock responses should be used
 * Returns true if Gemini API is unavailable or quota exceeded
 */
export function shouldUseMockResponse() {
  // For demo purposes, always use mock if GEMINI_API_KEY is not set
  // or if we detect quota issues
  return !process.env.GEMINI_API_KEY || process.env.USE_MOCK_AI === 'true';
}
