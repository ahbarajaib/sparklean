import { Product } from '@/types';

/**
 * Authentic Sparklean Global commercial product catalog.
 * Sourced directly from sparkleanglobal.com
 * No invented specifications, prices, or claims.
 */
export const COMMERCIAL_PRODUCTS: Product[] = [
  {
    id: 'spk-brewclean-espresso-machine-cleaner',
    slug: 'spk-brewclean-espresso-machine-cleaner',
    name: 'SPK-BrewClean Espresso Machine Cleaner',
    category: 'kitchen-and-catering',
    categoryName: 'Kitchen and Catering',
    image: '/images/products/spk-brewclean.webp',
    images: ['/images/products/spk-brewclean.webp'],
    shortDescription:
      'Specially formulated cleaning powder for commercial coffee and espresso machines.',
    fullDescription:
      'Keep your espresso machine performing at its best with SparKlean BrewClean Powder — a trusted and tested professional cleaning solution specially formulated for coffee machines. This powerful 500g powder quickly dissolves to remove stubborn coffee oils, grounds, mineral deposits, limescale, and residue from group heads and portafilters, helping to maintain optimal brewing performance with every use. Regular cleaning with BrewClean noticeably improves the taste and aroma of your espresso whilst extending the life of your equipment. The formula leaves absolutely no residue or odour behind, and is completely free from phosphates, GMOs, and chlorine, making it safe for all internal machine parts and components. Formulated to NSF protocol for coffee machine cleaners, BrewClean is ideal for both routine cleaning and ongoing maintenance of your espresso machine.',
    availableSizes: ['500g'],
    specifications: {
      'Product Type': 'Cleaning Powder',
      'Net Weight': '500g',
      'Protocol Compliance': 'Formulated to NSF Protocol for Coffee Cleaners',
      'Safe Internal Parts': 'Group Heads, Portafilters, Steam Valves',
      'Environmental': 'Phosphate Free, GMO Free, Chlorine Free',
      'Residue / Odour': 'Zero Residual Odour or Film',
    },
    features: [
      'Removes stubborn coffee oils, grounds, and limescale',
      'NSF protocol compliant formulation',
      '100% phosphate, GMO, and chlorine free',
      'Leaves zero residue or lingering odor on equipment',
      'Extends the lifespan of commercial espresso machines',
    ],
    brand: 'SPARKLEAN',
    priceAED: 55.0,
  },
  {
    id: 'spk-oven-cleaner-plus',
    slug: 'spk-oven-cleaner-plus',
    name: 'SPK-Oven Cleaner Plus',
    category: 'kitchen-and-catering',
    categoryName: 'Kitchen and Catering',
    image: '/images/products/spk-oven-cleaner.webp',
    images: ['/images/products/spk-oven-cleaner.webp'],
    shortDescription:
      'Heavy-duty alkaline degreaser for commercial ovens, grills, and fryers.',
    fullDescription:
      'Rapidly saponifies baked-on carbon deposits, polymerized grease, and heavy cooking residues in high-volume commercial catering and restaurant kitchens. Engineered to cling to vertical surfaces for enhanced dwell time and thorough grease dissolution.',
    availableSizes: ['5L', '20L'],
    specifications: {
      'Product Form': 'Concentrated Liquid',
      'Primary Action': 'Alkaline carbon and polymerized grease breakdown',
      'Applications': 'Commercial ovens, griddles, grills, rotisseries, smokehouses',
      'Packaging Volumes': '5 Litres, 20 Litres',
    },
    features: [
      'Rapidly penetrates heavy baked-on grease and carbon',
      'Thickened formulation clings to vertical oven walls',
      'Restores commercial cooking equipment to sanitary condition',
      'Reduces manual scrubbing time in professional kitchens',
    ],
    brand: 'SPARKLEAN',
  },
  {
    id: 'spk-oil-grease-stain-remover',
    slug: 'spk-oil-grease-stain-remover',
    name: 'SPK-Oil & Grease Stain Remover',
    category: 'laundry-products',
    categoryName: 'Laundry Products',
    image: '/images/products/spk-oil-out.webp',
    images: ['/images/products/spk-oil-out.webp'],
    shortDescription:
      'Professional laundry stain remover for stubborn cooking oils, grease, and grime.',
    fullDescription:
      'Say goodbye to stubborn oil and grease stains with the Sparklean SPK Oil Out — a professional-grade laundry stain remover built for tough, everyday challenges. Whether it is cooking grease, industrial grime on workwear, body oils, or food and dining spills, this powerful formula tackles them all quickly and effectively. Featuring innovative micro-encapsulation technology, it penetrates 5x deeper than standard pretreaters, ensuring total fibre coverage and lifting oily residues right from the core of the fabric. Simply apply and allow it to work in as little as 30 seconds before washing. The formula breaks down and emulsifies fat particles whilst carefully maintaining the original texture and colour of your fabrics.',
    availableSizes: ['2x 100ml Pack', '5L Institutional'],
    specifications: {
      'Product Form': 'Liquid Pre-Treater',
      'Action Time': 'Works in as little as 30 seconds',
      'Fabric Compatibility': 'Cotton, Linen, Uniforms, Workwear, Synthetics',
      'Technology': 'Deep fiber micro-penetration',
      'Packaging': '2x 100ml Twin Pack, 5L Canister',
    },
    features: [
      'Fast-acting action in 30 seconds before laundering',
      'Penetrates 5x deeper than standard pre-spotters',
      'Preserves original textile color and structural softness',
      'Proven performance on chefs uniforms and hotel dining linen',
    ],
    brand: 'SPARKLEAN',
    priceAED: 10.0,
  },
  {
    id: 'spk-coffee-tea-stain-remover',
    slug: 'spk-coffee-tea-stain-remover',
    name: 'SPK-Coffee & Tea Stain Remover',
    category: 'laundry-products',
    categoryName: 'Laundry Products',
    image: '/images/products/spk-coffee-out.webp',
    images: ['/images/products/spk-coffee-out.webp'],
    shortDescription:
      'Advanced tannin stain remover formulated for commercial textiles and linens.',
    fullDescription:
      'Sparklean SPK Coffee Out is an advanced tannin stain removal formula specially developed for professional laundries, hotels, dry cleaning facilities, and commercial textile care applications. This powerful stain remover effectively tackles stubborn coffee, tea, and other tannin-based stains from washable fabrics, targeting them at the source for a deep and thorough clean. Its professional-grade formula helps preserve the colour, texture, and overall quality of fabrics, ensuring garments and linens maintain their appearance after treatment. The eco-conscious formula is both safe and effective, making it an ideal choice for high-volume textile care environments.',
    availableSizes: ['100ml', '5L Institutional'],
    specifications: {
      'Product Form': 'Liquid Pre-Spotter',
      'Target Soils': 'Coffee, Tea, Red Wine, Fruit Tannins',
      'Fabric Suitability': 'Hospitality whites, Tablecloths, Bed Linens, Cotton, Synthetics',
      'Environmental': 'Eco-conscious formulation',
      'Volume': '100ml Bottle, 5L Commercial Container',
    },
    features: [
      'Targeted oxidation and extraction of tannin molecules',
      'Safe on fine hospitality cottons, linens, and colored fabrics',
      'Saves textile replacement costs in high-turnover hotels',
      'Easy application prior to standard wash cycles',
    ],
    brand: 'SPARKLEAN',
    priceAED: 10.0,
  },
  {
    id: 'spk-rust-out',
    slug: 'spk-rust-out',
    name: 'SPK-Rust Out Laundry Rust Stain Remover',
    category: 'laundry-products',
    categoryName: 'Laundry Products',
    image: '/images/products/spk-rust-out.webp',
    images: ['/images/products/spk-rust-out.webp'],
    shortDescription:
      'Professional strength rust stain remover safe for white and colored fabrics.',
    fullDescription:
      'Say goodbye to stubborn rust stains with SparKlean Spark Rust Out Laundry Rust Stain Remover! Developed in consultation with professional cleaners, this powerful formula delivers professional-strength results that ordinary washing or bleaching simply cannot match. It penetrates deep into fibres to lift and remove tough brown rust marks quickly and effectively, restoring fabrics to clean condition. Safe on both whites and colours, it works brilliantly on shirts, uniforms, towels, and more — without causing damage to fabric fibers. Fast-acting and hassle-free, it contains no chlorine bleach and emits no harsh fumes.',
    availableSizes: ['100ml', '5L Institutional'],
    specifications: {
      'Product Form': 'Liquid Rust Eliminator',
      'Target Contaminants': 'Iron stains, brown rust oxidation, mineral marks',
      'Chemical Restrictions': 'Bleach-free, non-corrosive to textile threads',
      'Volume': '100ml, 5L Commercial Pack',
    },
    features: [
      'Dissolves tough metallic rust stains without bleach',
      'Safe on both white linens and dyed uniforms',
      'Prevents irreversible chemical burns caused by chlorine',
      'Fast-acting commercial application',
    ],
    brand: 'SPARKLEAN',
    priceAED: 10.0,
  },
  {
    id: 'spk-laundry-detergent',
    slug: 'spk-laundry-detergent',
    name: 'SPK-Laundry Detergent (Delicate & Color-Safe)',
    category: 'laundry-products',
    categoryName: 'Laundry Products',
    image: '/images/products/spk-laundry-detergent.webp',
    images: ['/images/products/spk-laundry-detergent.webp'],
    shortDescription:
      'Premium liquid detergent providing powerful soil removal with fiber protection.',
    fullDescription:
      'Experience the perfect balance of gentle care and powerful cleaning with our premium laundry detergent, specially formulated for delicate fabrics and vibrant colors. Designed with advanced cleaning technology, this liquid detergent effectively removes dirt, stains, and odors while preserving the softness, texture, and original brilliance of your garments. High-efficiency commercial washing machine compatible.',
    availableSizes: ['5L', '20L'],
    specifications: {
      'Product Form': 'Concentrated Liquid Detergent',
      'Technology': 'Color-Protect Surfactant Blend',
      'Machine Compatibility': 'Industrial Extractors, Front-Load & Commercial Washers',
      'Packaging': '5 Litres, 20 Litres',
    },
    features: [
      'Color-safe surfactant system prevents fading',
      'Heavy-duty soil removal in cold and hot wash cycles',
      'Leaves commercial linens soft without stiff residue',
      'Concentrated formula provides superior dilution economy',
    ],
    brand: 'SPARKLEAN',
    priceAED: 15.0,
  },
  {
    id: 'sparkle-suds-lavender',
    slug: 'sparkle-suds-lavender',
    name: 'Sparkle Suds Lavender Hand Soap',
    category: 'housekeeping',
    categoryName: 'Housekeeping',
    image: '/images/products/spk-suds-lavender.webp',
    images: ['/images/products/spk-suds-lavender.webp'],
    shortDescription:
      'Gentle liquid hand wash enriched with calming lavender fragrance.',
    fullDescription:
      'Sparklean Global’s Sparkle Suds Lavender hand soap is formulated for commercial washrooms, hotels, executive offices, and guest suites. The calming botanical lavender fragrance leaves hands feeling clean and soft without drying the skin or leaving harsh chemical film.',
    availableSizes: ['500ml Pump', '5L Refill'],
    specifications: {
      'Product Form': 'Pearlized Viscous Liquid Soap',
      'Fragrance': 'Natural Botanical Lavender',
      'Skin Compatibility': 'Dermatologically Balanced pH',
      'Application': 'Refillable dispensers, luxury guest amenities',
    },
    features: [
      'Calming botanical fragrance creates an upscale washroom experience',
      'Moisturizing formula safe for frequent daily use',
      'Economical 5L bulk containers reduce plastic consumption',
    ],
    brand: 'SPARKLEAN',
  },
  {
    id: 'rational-active-green-tablets',
    slug: 'rational-active-green-tablets',
    name: 'Cleaning Tablets for Rational Ovens',
    category: 'rational-and-mkn',
    categoryName: 'Rational and MKN',
    image: '/images/products/spk-rational-tabs.webp',
    images: ['/images/products/spk-rational-tabs.webp'],
    shortDescription:
      'Specialized active cleaning tablets for commercial combi-steamer ovens.',
    fullDescription:
      'Concentrated solid cleaning chemicals formulated to dissolve heavy grease and cooking scale during automatic cleaning cycles in Rational and MKN combi-steamer ovens. Ensures hygienic cooking cavity standards and prevents costly heating element failure.',
    availableSizes: ['100 Tablets Tub'],
    specifications: {
      'Product Form': 'Solid Water-Soluble Tablets',
      'Oven Compatibility': 'Rational iCombi, SelfCookingCenter, MKN SpaceCombi',
      'Function': 'Automatic Self-Cleaning System',
      'Quantity': '100 Tablets per Sealed Tub',
    },
    features: [
      'Formulated specifically for automatic commercial combi oven wash cycles',
      'Cuts through polymerized grease and carbon residue',
      'Maintains equipment warranty and operational hygiene standards',
    ],
    brand: 'SPARKLEAN',
  },
  {
    id: 'single-bucket-janitorial-trolley',
    slug: 'single-bucket-janitorial-trolley',
    name: 'Single Bucket Janitorial Trolley',
    category: 'janitorial-products',
    categoryName: 'Janitorial Products',
    image: '/images/products/spk-janitorial-trolley.webp',
    images: ['/images/products/spk-janitorial-trolley.webp'],
    shortDescription:
      'Heavy-duty facility mop trolley equipped with ergonomic downward-pressure wringer.',
    fullDescription:
      'Designed for durable commercial floor maintenance in hospitals, hotels, shopping centers, and commercial kitchens. Features non-marking swivel casters and impact-resistant polypropylene body with a high-leverage downward-pressure wringer.',
    availableSizes: ['25L Capacity'],
    specifications: {
      'Chassis Material': 'Impact-Resistant Polypropylene',
      'Fluid Capacity': '25 Litres',
      'Wringer Mechanism': 'Downward-Pressure Lever System',
      'Mobility': '4x Non-Marking 360-Degree Swivel Casters',
    },
    features: [
      'Heavy-duty wringer extracts water with minimal operator fatigue',
      'Smooth non-marking wheels preserve polished commercial flooring',
      'Compact footprint ideal for elevators, corridors, and tight spaces',
    ],
    brand: 'SPARKLEAN',
  },
  {
    id: 'vinyl-powder-free-gloves',
    slug: 'vinyl-powder-free-gloves',
    name: 'Vinyl Powder-Free Protective Gloves',
    category: 'disposables-and-packaging',
    categoryName: 'Disposables and Packaging',
    image: '/images/products/spk-vinyl-gloves.webp',
    images: ['/images/products/spk-vinyl-gloves.webp'],
    shortDescription:
      'Food-grade and hygiene examination disposable vinyl gloves.',
    fullDescription:
      'Comfortable powder-free vinyl gloves designed for food preparation, catering operations, and light sanitation duties. 100% latex-free to prevent allergic reactions in food handlers and guests.',
    availableSizes: ['Box of 100 (S, M, L, XL)'],
    specifications: {
      'Material Composition': '100% Latex-Free Polyvinyl Chloride (PVC)',
      'Powder Type': 'Powder-Free',
      'Certification': 'Food Contact Sanitation Compliant',
      'Quantity': '100 Gloves per Dispenser Box',
    },
    features: [
      'Latex-free and powder-free construction eliminates allergen risks',
      'Food-safe certified for culinary prep and handling',
      'Tactile sensitivity with comfortable beaded cuff',
    ],
    brand: 'SPARKLEAN',
  },
];

// 4 Diverse Flagship Formulations for Homepage
export const FEATURED_PRODUCTS: Product[] = [
  COMMERCIAL_PRODUCTS[0], // SPK-BrewClean Espresso Machine Cleaner (Kitchen & Catering)
  COMMERCIAL_PRODUCTS[2], // SPK-Oil & Grease Stain Remover (Laundry Products)
  COMMERCIAL_PRODUCTS[6], // Sparkle Suds Lavender Hand Soap (Housekeeping)
  COMMERCIAL_PRODUCTS[7], // Cleaning Tablets for Rational Ovens (Rational & MKN)
];
