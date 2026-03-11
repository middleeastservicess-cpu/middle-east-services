export interface Service {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  features: string[];
  commonProblems: string[];
  serviceBenefits: string[];
  relatedTerms: string[];
  // Expanded for 650-900 word human content
  expertiseSection: string;
  solutionsIntro: string;
  detailedProblems: { title: string; text: string }[];
  technicalApproach: string;
}

export interface City {
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  description: string;
  image: string;
  population: string;
  timezone: string;
  nearbyAreas: string[];
  localContext: string; // Specifics about climate, buildings, or lifestyle
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  city: string;
  service: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
}

export const SITE_CONFIG = {
  name: 'Middle East Services',
  domain: 'middleeastservices.com',
  url: 'https://middleeastservices.com',
  email: 'info@middleeastservices.com',
  phone: '+966 56 948 7569',
  whatsapp: '966569487569',
  description: 'Your trusted marketplace for professional home & business services across the Middle East. Book AC repair, plumbing, cleaning, pest control & more.',
  socialMedia: {
    facebook: 'https://facebook.com/middleeastservices',
    instagram: 'https://instagram.com/middleeastservices',
    twitter: 'https://twitter.com/middleeastservices',
    linkedin: 'https://linkedin.com/company/middleeastservices',
  },
};

export const services: Service[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    description: 'Professional air conditioning repair, maintenance, and installation services.',
    shortDescription: 'Expert AC repair and cooling system maintenance.',
    icon: '❄️',
    image: '/images/services/ac-repair.jpg',
    features: ['inspection', 'repair', 'maintenance', 'troubleshooting', 'installation'],
    commonProblems: [
      'AC unit blowing warm air during peak summer',
      'Strange grinding or whistling noises from the compressor',
      'Water leakage from the indoor unit onto walls',
      'Thermostat sensor failures and connectivity issues',
      'Clogged filters reducing airflow and cooling efficiency'
    ],
    serviceBenefits: [
      'Rapid door-to-door assistance',
      'Highly trained HVAC specialists',
      'Genuine factory-approved replacement parts',
      'Advanced diagnostic and troubleshooting tools'
    ],
    relatedTerms: ['cooling system repair', 'thermostat problems', 'compressor issues', 'air conditioning maintenance', 'HVAC troubleshooting', 'split unit installation'],
    expertiseSection: `Our expertise in air conditioning systems has been developed over years of managing cooling requirements in some of the hottest urban environments on earth. We understand that an AC unit in the Middle East isn't just a home appliance; it is a life-sustaining system that requires high-precision engineering and regular professional oversight. Our technicians are trained to handle everything from basic split units to complex VRF and central cooling systems, ensuring that every component from the motor to the electrical circuitry is functioning at peak efficiency.`,
    solutionsIntro: `We provide a comprehensive A-to-Z solution for all your cooling needs. Whether you are moving into a new villa and need a full system installation or simply require a seasonal check-up to ensure your unit can handle the upcoming heat wave, our team is equipped to handle every technical detail.`,
    detailedProblems: [
      { title: 'Compressor Malfunctions', text: 'The compressor is the heart of your AC. In extreme heat, it can often overheat or fail due to electrical surges. Our experts can troubleshoot these failures and determine if a repair or replacement is necessary.' },
      { title: 'Refrigerant Leaks', text: 'Low cooling performance is often caused by tiny punctures in the refrigerant lines. We use advanced sensors to find these leaks and seal them effectively.' },
      { title: 'Thermostat and Sensor Issues', text: 'Sometimes the cooling unit is fine, but the brain isn\'t working. We calibrate and repair digital thermostats to ensure your home reaches the exact temperature you desire.' }
    ],
    technicalApproach: `Our technical approach focuses on both immediate fixes and long-term reliability. We use industrial-grade cleaning agents and high-pressure steam to clear coils, and we test electrical components for resistance and continuity to prevent future short circuits. This thoroughness is what separates a quick fix from a professional repair.`
  },
  {
    slug: 'plumber',
    name: 'Plumbing',
    description: 'Licensed plumbing services for residential and commercial properties.',
    shortDescription: 'Licensed plumbers for all your repair and maintenance needs.',
    icon: '🔧',
    image: '/images/services/plumber.jpg',
    features: ['inspection', 'repair', 'maintenance', 'troubleshooting', 'installation'],
    commonProblems: [
      'Blocked drainage pipes leading to kitchen flooding',
      'Hidden water leaks causing structural dampness',
      'Faulty water heaters and low warm water pressure',
      'Running toilets and dripping faucets wasting water',
      'Underground pipe bursts and sewage line back-ups'
    ],
    serviceBenefits: [
      'Quick response to prevent water damage',
      'Non-invasive leak detection technology',
      'Licensed and background-checked technicians',
      'Guaranteed workmanship and clean job sites'
    ],
    relatedTerms: ['pipe leaks', 'water pressure issues', 'drainage problems', 'pipe repair', 'plumbing maintenance'],
    expertiseSection: `Plumbing systems in modern Middle Eastern cities are complex and integrated. Our plumbing professionals bring a wealth of experience in both traditional piping and modern smart-water systems. We prioritize the integrity of your home's water supply, ensuring that every connection is secure and every drain is clear. From the high-pressure needs of skyscrapers to the intricate layouts of private villas, our expertise ensures your plumbing remains invisible and efficient.`,
    solutionsIntro: `From the moment you notice a damp spot on your wall or a slow-running sink, our team is ready to intervene. We cover everything from initial inspection and emergency troubleshooting to the complete installation of new sanitary ware and water heaters.`,
    detailedProblems: [
      { title: 'Hidden Leak Detection', text: 'Water leaks can happen behind walls or under floors for months before they are noticed. We use acoustic and thermal imaging tools to catch these early and prevent expensive structural damage.' },
      { title: 'Drainage and Clogging', text: 'Sand and grease are the enemies of local drainage systems. We use high-pressure jetting to clear pipes and restore perfect flow to your kitchen and bathroom drains.' },
      { title: 'Water Heater Safety', text: 'A faulty heater isn\'t just an inconvenience; it can be dangerous. Our plumbers test safety valves and electrical grounding to ensure your hot water supply is safe for the whole family.' }
    ],
    technicalApproach: `We follow strict international plumbing standards while adapting to local building codes. Our use of high-quality copper and PPR pipes, combined with precision welding and sealing techniques, ensures that your repair lasts for years, not just days.`
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    description: 'Professional installation of split, window, and central AC systems.',
    shortDescription: 'Expert AC installation for homes and offices.',
    icon: '🏗️',
    image: '/images/services/ac-installation.jpg',
    features: ['site assessment', 'unit sizing', 'mounting', 'piping', 'testing'],
    commonProblems: [
      'Incorrect unit sizing leading to high humidity',
      'Poorly insulated piping causing energy waste',
      'Unstable mounting leading to vibration noise',
      'Refrigerant leaks due to improper sealing',
      'Electrical mismatches causing frequent tripping'
    ],
    serviceBenefits: [
      'Precision system engineering',
      'Energy-efficient installation standards',
      'Minimal structural disruption',
      'Manufacturer-compliant setup'
    ],
    relatedTerms: ['new ac setup', 'hvac installation', 'split unit mounting', 'central air setup'],
    expertiseSection: `Installing a new air conditioning system in the GCC region requires more than just mounting a unit. It demands a technical understanding of heat load calculations, airflow dynamics, and the specific insulation needs of desert architecture. Our installation teams are trained to ensure that every unit is positioned for maximum efficiency, minimizing hot spots and ensuring a perfectly balanced climate throughout your property.`,
    solutionsIntro: `We provide a complete turnkey installation service. From helping you select the right BTU capacity for your room size to the final pressure testing of the refrigerant lines, we handle everything to ensure your new system starts its life at peak performance.`,
    detailedProblems: [
      { title: 'Heat Load Mismatch', text: 'Installing an undersized unit leads to constant operation and early failure. We perform detailed space audits to match the unit capacity perfectly to your room\'s sun exposure and volume.' },
      { title: 'Vibration Control', text: 'Poorly installed units can create resonant noise through walls. We use industrial-grade anti-vibration mountings and secure anchoring to ensure silent operation.' },
      { title: 'Drainage Planning', text: 'Improperly sloped drain lines are the #1 cause of indoor leaks. We use laser-levels to ensure perfect condensate drainage, protecting your interior paint and flooring.' }
    ],
    technicalApproach: `Our technical protocol includes nitrogen pressure testing of all copper joints and vacuum dehydration of the lines before charging. This ensures a 100% moisture-free system, preventing internal corrosion and ensuring long-term cooling stability.`
  },
  {
    slug: 'ac-maintenance',
    name: 'AC Maintenance',
    description: 'Scheduled preventive maintenance and deep cleaning for cooling systems.',
    shortDescription: 'Keep your cooling system running at peak efficiency.',
    icon: '🧼',
    image: '/images/services/ac-maintenance.jpg',
    features: ['filter cleaning', 'coil washing', 'gas check', 'amp testing', 'drain flushing'],
    commonProblems: [
      'Reduced airflow due to clogged filters',
      'Ice formation on coils from lack of gas',
      'Foul odors from microbial growth in ducts',
      'Increased energy consumption from dirty coils',
      'Water leaks caused by dust-clogged drain lines'
    ],
    serviceBenefits: [
      'Extended appliance lifespan',
      'Improved indoor air quality',
      'Lower energy bills through efficiency',
      'Prevention of unexpected breakdowns'
    ],
    relatedTerms: ['ac servicing', 'hvac cleaning', 'ac coil washing', 'gas top up'],
    expertiseSection: `In the Middle East, AC maintenance is not optional—it is essential for health and efficiency. Dust and sand are constant threats that clog delicate aluminum fins and strain compressor motors. Our maintenance approach is preventative, focusing on deep chemical cleaning and electrical auditing to catch minor issues before they become expensive failures in the middle of summer.`,
    solutionsIntro: `Our maintenance packages are designed to give you peace of mind year-round. We perform a multi-point inspection that covers everything from refrigerant levels to the integrity of the motor bearings and electrical contacts.`,
    detailedProblems: [
      { title: 'Microbial Growth', text: 'The dark, damp environment of an AC coil is perfect for mold. We use non-toxic, hospital-grade biocides to sanitize your system, ensuring the air you breathe is clean and healthy.' },
      { title: 'Electrical Contact Wear', text: 'The high start-up currents of AC motors can pit and burn electrical contractors. We inspect and clean these points to prevent the system from failing to start during a heatwave.' },
      { title: 'Efficiency Loss', text: 'Just 1mm of dust on a coil can reduce heat exchange by 20%. Our high-pressure coil washing restores your unit to its factory-rated efficiency, significantly reducing your cooling carbon footprint.' }
    ],
    technicalApproach: `We go beyond the "filter wash." We use pressure-bag systems to deep-clean indoor blowers and industrial coils without mess, and we use digital manifolds to precisely audit gas levels according to manufacturer specifications.`
  },
  {
    slug: 'electrician',
    name: 'Electrician',
    description: 'Professional electrical repairs, wiring, and panel maintenance.',
    shortDescription: 'Certified electricians for all your power and lighting needs.',
    icon: '⚡',
    image: '/images/services/electrician.jpg',
    features: ['fault finding', 'wiring', 'panel repair', 'lighting', 'socket install'],
    commonProblems: [
      'Frequent circuit breaker tripping',
      'Flickering lights indicating loose wiring',
      'Burnt smell from sockets or DB boxes',
      'Faulty earthing causing minor shocks',
      'Overloaded circuits from high-power appliances'
    ],
    serviceBenefits: [
      'Emergency fault detection',
      'Certified technical specialists',
      'Adherence to local safety codes',
      'High-quality replacement materials'
    ],
    relatedTerms: ['electrical repair', 'short circuit fix', 'db box repair', 'light installation'],
    expertiseSection: `Electrical safety is paramount in any residential or commercial property. Our certified electricians understand the load requirements of modern GCC homes, where high-power ACs and luxury appliances put significant stress on the distribution board (DB). We specialize in precision fault-finding and high-standard rewiring to ensure your property is protected from fire hazards and power surges.`,
    solutionsIntro: `From a simple socket replacement to the complete overhaul of a residential electrical panel, we provide a structured approach to every job. Our team ensures that all work is labeled, grounded, and tested for continuity before we leave the site.`,
    detailedProblems: [
      { title: 'Loose Connections', text: 'Heat-related expansion and contraction can loosen wire terminals in the DB box. This leads to arcing and potential fires. We perform thermal audits and tightening to ensure every connection is rock-solid.' },
      { title: 'Earthing Failures', text: 'If your earth leakage circuit breaker (ELCB) doesn\'t trip during a fault, it\'s a major safety risk. We test your grounding system resistance to ensure you and your family are safe from electrical shock.' },
      { title: 'Circuit Overloading', text: 'Adding new appliances to old circuits is dangerous. We calculate total load and, if necessary, pull new dedicated lines with secondary breakers to handle the demand safely.' }
    ],
    technicalApproach: `We use digital multimeters and insulation resistance testers for every diagnostic. By providing a technical report of the fault and the fix, we ensure transparency and long-term electrical reliability for your property.`
  },
  {
    slug: 'handyman',
    name: 'Handyman',
    description: 'General home repairs, furniture assembly, and odd jobs.',
    shortDescription: 'Versatile home repair experts for everything on your to-do list.',
    icon: '🛠️',
    image: '/images/services/handyman.jpg',
    features: ['furniture assembly', 'shelf mounting', 'door repair', 'curtain hanging', 'tv mounting'],
    commonProblems: [
      'Sticking doors due to humidity expansion',
      'Loose hinges on kitchen cabinets',
      'Difficulty assembling complex flat-pack furniture',
      'Improperly mounted TVs lacking wall support',
      'Damaged gypsum partitions and drywall cracks'
    ],
    serviceBenefits: [
      'Wide range of technical skills',
      'All tools provided on-site',
      'Fast and efficient job completion',
      'Multi-tasking on a single visit'
    ],
    relatedTerms: ['home fixing', 'furniture specialist', 'odd jobs', 'shelf installation'],
    expertiseSection: `A high-quality handyman is a master of many trades. Our team consists of skilled technicians who specialize in the finishing touches that make a house a home. Whether it's the precision required for hanging heavy mirrors in a high-rise or the technical knowledge needed to repair concealed door closers, we bring a level of professionalism that goes beyond basic "fixing."`,
    solutionsIntro: `We help you clear your home maintenance "to-do" list in a single visit. Our professionals are equipped with high-grade drills, anchors suited for local wall types (gypsum vs. block), and the technical patience required for complex assemblies.`,
    detailedProblems: [
      { title: 'Wall Mounting Failures', text: 'Mounting heavy items on Arabian block or hollow gypsum requires specific anchors. We ensure your TV or heavy mirror stays exactly where it should, using weight-rated fastening systems.' },
      { title: 'Aligning Woodwork', text: 'Humidity can cause doors and cabinets to sag. We specialize in precision hinge adjustment and planer work to restore smooth, silent operation to all your woodwork.' },
      { title: 'Appliance Leveling', text: 'Vibration from washing machines or fridges often stems from uneven flooring. We use precision levels and adjustable mounts to stabilize your appliances, preventing noise and internal wear.' }
    ],
    technicalApproach: `We prioritize a "clean-finish" approach. This means using dust-collection during drilling and ensuring all mounts are perfectly level. We treat every property with the care it deserves, ensuring no traces are left behind except for a job well done.`
  },
  {
    slug: 'water-heater-repair',
    name: 'Water Heater Repair',
    description: 'Repair and replacement of domestic water heaters/geysers.',
    shortDescription: 'Restore your hot water supply quickly and safely.',
    icon: '🔥',
    image: '/images/services/water-heater.jpg',
    features: ['thermostat check', 'element replacement', 'leak repair', 'safety valve', 'tank flush'],
    commonProblems: [
      'No hot water despite power being on',
      'Water leaking from the bottom of the tank',
      'Overheating leading to steam from taps',
      'Tripping the electricity when switched on',
      'Slow recovery time and low water temperature'
    ],
    serviceBenefits: [
      'Emergency replacement service',
      'Safety-first technical approach',
      'Genuine replacement elements',
      'Pressure-valve certification'
    ],
    relatedTerms: ['geyser repair', 'hot water fix', 'heater installation', 'boiler servicing'],
    expertiseSection: `Water heaters in the Middle East are often installed in ceiling voids or concealed closets. This makes professional maintenance critical to prevent water damage from leaks. Our technicians are specialized in both the electrical heating elements and the plumbing pressure systems, ensuring your unit operates safely without risk of bursting or electrical short-circuits.`,
    solutionsIntro: `When your hot water stops, our diagnostic team is ready. We quickly identify whether the issue is a burnt-out element, a faulty thermostat, or a structural failure of the tank itself. We provide a clear path to repair or a seamless replacement if the unit is beyond its safe life.`,
    detailedProblems: [
      { title: 'Sacrificial Anode Wear', text: 'Hard water can eat through a tank from the inside. We inspect and replace sacrificial anodes to extend the life of your heater and prevent tank corrosion.' },
      { title: 'Safety Valve Failure', text: 'The pressure relief valve is the most important safety feature. If it fails, the tank can over-pressurize. We test and replace these valves to ensure your family\'s safety.' },
      { title: 'Heating Element Scale', text: 'Mineral buildup on elements reduces efficiency and leads to burn-outs. We perform tank flushes and element cleaning to restore rapid heating and lower power consumption.' }
    ],
    technicalApproach: `We follow strict electrical grounding protocols during every heater repair. By checking the continuity between the tank shell and the home's earth, we ensure that there is no risk of electrification through your taps.`
  },
  {
    slug: 'appliance-repair',
    name: 'Appliance Repair',
    description: 'Expert repair for washing machines Master, fridges, and ovens.',
    shortDescription: 'Get your essential home appliances back in working order.',
    icon: '🧺',
    image: '/images/services/appliance-repair.jpg',
    features: ['diagnostics', 'part replacement', 'motor repair', 'leak fixing', 'door seal check'],
    commonProblems: [
      'Washing machine not draining or spinning',
      'Refrigerator not cooling or leaking gas',
      'Dishwasher failing to clean properly',
      'Electric oven not reaching temperature',
      'Dryer failing to heat or tumbling loudly'
    ],
    serviceBenefits: [
      'Home-visit diagnostics',
      'Expertise in major global brands',
      'Stock of common replacement parts',
      'Workmanship guarantee'
    ],
    relatedTerms: ['fridge repair', 'washing machine fix', 'oven repair', 'home appliance specialist'],
    expertiseSection: `Modern appliances are sophisticated pieces of hardware that require specialized electronic and mechanical knowledge. Our repair specialists are trained to handle the complex circuit boards and high-torque motors found in luxury brands common in the Middle East. We focus on restoring your essential home systems to factory specifications, using precise diagnostic tools to pinpoint the exact failure point.`,
    solutionsIntro: `Don't let a broken fridge or washing machine disrupt your day. Our on-site repair teams arrive with a fully equipped mobile workshop to handle the most common issues immediately, from replacing drain pumps to recalibrating cooling sensors.`,
    detailedProblems: [
      { title: 'Drum Bearing Failures', text: 'A screaming noise during a wash cycle usually means the bearings are gone. We perform precision bearing and seal replacements to restore silent, smooth operation to your machine.' },
      { title: 'Compressor Gas Levels', text: 'If your fridge is running constantly but isn\'t cold, it may have a micro-leak. We use sensitive sniffers to find leaks and perform high-purity gas recharging according to spec.' },
      { title: 'Control Board Glitches', text: 'Power surges can scramble an appliance\'s brain. We specialize in PCB diagnostics and modular replacements to get your smart appliances back online without the need for a full replacement.' }
    ],
    technicalApproach: `We use factory-approved diagnostic sequences for all modern appliances. By performing a post-repair soak test, we ensure that the problem is fully resolved and that all safety sensors are operating correctly before we certify the repair.`
  },
  {
    slug: 'home-cleaning',
    name: 'Home Cleaning',
    description: 'Professional residential cleaning for a spotless living space.',
    shortDescription: 'Reliable cleaners for your daily or weekly home tidying.',
    icon: '🏠',
    image: '/images/services/home-cleaning.jpg',
    features: ['dusting', 'mopping', 'vacuuming', 'kitchen cleaning', 'bathroom sanitizing'],
    commonProblems: [
      'Accumulation of desert dust on high surfaces',
      'Stubborn stains on marble or tiled flooring',
      'Grease buildup in kitchen ventilation areas',
      'Limescale deposits on bathroom fixtures',
      'Dust mites in hard-to-reach corners'
    ],
    serviceBenefits: [
      'Customized cleaning schedules',
      'Vetted and trained cleaning staff',
      'Environmentally friendly products',
      'Consistent quality standards'
    ],
    relatedTerms: ['housekeeping', 'maid service', 'residential cleaning', 'flat cleaning'],
    expertiseSection: `Maintaining a clean home in a sandy environment like the Middle East requires more than a simple wipe-down. Our home cleaning professionals are trained in the specific chemistry of local surfaces—from Italian marble to high-gloss cabinetry. We focus on a deep-dusting protocol that addresses the microscopic particles that regular cleaning often misses, ensuring your home is not just visually clean, but a healthy environment for your family.`,
    solutionsIntro: `Whether you need a one-time intensive cleaning or a recurring weekly service, we adapt to your household's needs. Our team arrives with all necessary supplies, focusing on a systematic room-by-room approach that ensures every inch of your property is sanitized.`,
    detailedProblems: [
      { title: 'Fine Dust Ingress', text: 'Sandstorm residue can penetrate even the tightest window seals. We use high-filtration vacuums and microfiber technology to trap dust rather than just moving it around.' },
      { title: 'Surface Cross-Contamination', text: 'Using the same cloth for different rooms is a health risk. We follow a strict color-coded cloth system to ensure that your kitchen, bathroom, and living areas remain hygienically separated.' },
      { title: 'Marble Care', text: 'Common acidic cleaners can ruin local stone floors. Our team uses pH-neutral, stone-safe agents that preserve the natural shine and integrity of your marble and granite surfaces.' }
    ],
    technicalApproach: `We follow a 50-point cleaning checklist for every home visit. By using industrial-grade steamers for bathroom sanitization and specialized floor polishers for tiles, we achieve a level of cleanliness that manual scrubbing simply cannot match.`
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    description: 'Intensive sanitization for move-in, move-out, or seasonal needs.',
    shortDescription: 'Thorough cleaning of every corner, including hidden areas.',
    icon: '✨',
    image: '/images/services/deep-cleaning.jpg',
    features: ['cabinet interiors', 'behind appliances', 'grout scrubbing', 'detailed dusting', 'window tracks'],
    commonProblems: [
      'Heavy grease layer on top of kitchen cabinets',
      'Black mold in bathroom grout and seals',
      'Dust accumulation inside AC vents and tracks',
      'Construction dust after home renovations',
      'Odor retention in rarely cleaned closets'
    ],
    serviceBenefits: [
      'Total property sanitization',
      'Industrial-grade cleaning equipment',
      'Expertise in post-tenant cleaning',
      'Focus on hard-to-reach areas'
    ],
    relatedTerms: ['move-in cleaning', 'post-renovation cleaning', 'intensive house wash', 'end of lease cleaning'],
    expertiseSection: `Deep cleaning is a technical project, not just a chore. It involves the restorative cleaning of surfaces that have been neglected or exposed to heavy use. Our specialists use high-pressure steam and specialized rotary tools to lift years of buildup from floor grout, cabinet tops, and appliance exteriors. This service is essential for ensuring a hygienic start in a new property or for a total seasonal reset of your current home.`,
    solutionsIntro: `Our deep cleaning protocol takes your property back to its "showroom" condition. We move large appliances to clean the floor and walls behind them, scrub every inch of tile grout, and perform a detailed technical dusting of all architectural elements including moldings and light fixtures.`,
    detailedProblems: [
      { title: 'Grout Porosity', text: 'Tile grout naturally absorbs liquid and dirt, turning black over time. We use specialized alkaline cleaners and mechanical scrubbing to lift deep-seated grime, restoring the original look of your floors.' },
      { title: 'Kitchen Degreasing', text: 'The top of kitchen cabinets often holds a sticky layer of oil and dust. We use heavy-duty, food-safe degreasers to dissolve this layer, preventing pests and improving air quality.' },
      { title: 'Post-Construction Silica', text: 'Renovation dust is fine and abrasive. We use HEPA-certified industrial vacuums and damp-wiping techniques to ensure all construction-related particulates are safely removed from your home.' }
    ],
    technicalApproach: `We utilize a multi-technician team approach for deep cleaning, where each individual specializes in a specific zone. By using UV-sanitization tools in bathrooms and multi-stage steamers 140°C+, we kill 99.9% of bacteria without the excessive use of harsh chemicals.`
  },
  {
    slug: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    description: 'Professional upholstery cleaning for fabric and leather sofas.',
    shortDescription: 'Restore the look and hygiene of your living room furniture.',
    icon: '🛋️',
    image: '/images/services/sofa-cleaning.jpg',
    features: ['shampooing', 'steam extraction', 'stain removal', 'deodorizing', 'fabric protection'],
    commonProblems: [
      'Embedded dust and allergens in fabric fibers',
      'Food and drink stains from daily use',
      'Fading and drying of leather upholstery',
      'Dull appearance due to skin oils and sweat',
      'Lingering odors from pets or tobacco smoke'
    ],
    serviceBenefits: [
      'Revived fabric colors and texture',
      'Elimination of deep-seated allergens',
      'Fast drying times with professional tech',
      'Safe for all delicate textiles'
    ],
    relatedTerms: ['upholstery cleaning', 'couch shampooing', 'furniture sanitizing', 'leather sofa care'],
    expertiseSection: `Sofas are the centerpiece of any living room, but they act as giant filters for dust and skin cells. In the Middle East, the high usage of indoor spaces means upholstered furniture requires professional maintenance to prevent the buildup of allergens. Our technicians are specialized in textile chemistry, ensuring the correct balance of heat, moisture, and cleaning agents for everything from delicate silk and velvet to durable synthetics and premium leather.`,
    solutionsIntro: `We bring the cleaning factory to your living room. Our mobile units use industrial-grade hot water extraction (steam cleaning) and dry-chemical methods to lift dirt from deep within the cushioning, ensuring your sofa is both visually stunning and hygienically safe.`,
    detailedProblems: [
      { title: 'Deep Fiber Soilage', text: 'Surface vacuuming only removes 20% of the dirt. We use high-pressure extraction to flush out the other 80% that lives deep in the padding, extending the life of your furniture.' },
      { title: 'Stubborn Protein Stains', text: 'Coffee, ink, or juice stains require specific enzyme treatments. We identify the stain type and use targeted, fabric-safe solvents that dissolve the bond between the stain and the fiber.' },
      { title: 'Leather Desiccation', text: 'Air conditioning dries out leather, leading to cracks. We use premium lanolin-based conditioners to restore the natural oils, keeping your leather supple and preventing premature aging.' }
    ],
    technicalApproach: `Our technical protocol begins with a fiber-identification test to ensure safety. We use powerful dual-vacuum motors during extraction to remove 95% of the moisture, allowing your sofa to dry in just a few hours rather than days.`
  },
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    description: 'Deep cleaning for area rugs and wall-to-wall carpeting.',
    shortDescription: 'Industrial-grade cleaning for a fresher, cleaner carpet.',
    icon: '🧶',
    image: '/images/services/carpet-cleaning.jpg',
    features: ['vacuuming', 'shampooing', 'steam cleaning', 'fringe care', 'drying'],
    commonProblems: [
      'Traffic lane darkening in hallways',
      'Deeply embedded sand and grit causing fiber wear',
      'Pet urine stains and associated odors',
      'Flattened pile due to heavy furniture',
      'Dust mite colonies deep within the rug'
    ],
    serviceBenefits: [
      'Restored pile height and softness',
      'Removal of toxic indoor pollutants',
      'Vibrant color restoration',
      'Prevention of permanent fiber matting'
    ],
    relatedTerms: ['rug cleaning', 'carpet shampoo', 'steam rug wash', 'area rug specialist'],
    expertiseSection: `Carpets in the Middle East often trap significant amounts of fine desert sand, which acts like sandpaper against the fibers every time you walk on it. Our carpet cleaning methodology focuses on the "wash and flush" principle. By using high-capacity suction and controlled heat, we remove the abrasive particles that cut into your carpet's lifespan, while simultaneously neutralizing odors and brightening the colors.`,
    solutionsIntro: `From delicate Persian silk rugs to heavy-duty office carpeting, we provide a customized cleaning approach. We use specialized agitators to loosen the "locked-in" dirt before performing a full-depth steam extraction that cleans as deep as the primary backing.`,
    detailedProblems: [
      { title: 'Abrasive Grit Accumulation', text: 'Microscopic sand particles act like tiny saws at the base of carpet fibers. Our high-vibration brushing technique brings these to the surface for total extraction.' },
      { title: 'Tannin and Oil Stains', text: 'Oil-based dirt from skin or shoes acts as a magnet for more dust. We use specialized pre-sprays that emulsify these oils, allowing them to be rinsed away easily.' },
      { title: 'Odors in the Backing', text: 'Moisture trapped in the carpet backing can lead to a musty smell. We use rapid air-movers and antimicrobial rinses to ensure your carpet is dry and fresh-smelling from top to bottom.' }
    ],
    technicalApproach: `We follow the IICRC standards for carpet cleaning. This includes adjusting the pH of the carpet after cleaning (acidic rinse) to prevent "browning" or "wicking" and to ensure that no sticky residue is left to attract future dirt.`
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    description: 'Sanitization and allergen removal for a healthy sleep.',
    shortDescription: 'Scientific cleaning to remove dust mites and bacteria.',
    icon: '🛏️',
    image: '/images/services/mattress-cleaning.jpg',
    features: ['uv sanitization', 'steam extraction', 'spot cleaning', 'allergen removal', 'deodorizing'],
    commonProblems: [
      'Concentrated dust mite populations in memory foam',
      'Skin cell accumulation leading to bacterial growth',
      'Yellow sweat stains and body oil marks',
      'Unpleasant odors from long-term use',
      'Allergy triggers like pollen or dander'
    ],
    serviceBenefits: [
      'Clinical-level sanitization',
      'Reduced nighttime allergy symptoms',
      'Chemical-free cleaning options',
      'Extended mattress comfort and life'
    ],
    relatedTerms: ['mattress sanitizing', 'bed cleaning', 'dust mite treatment', 'pillow top care'],
    expertiseSection: `You spend a third of your life on your mattress, making it one of the most important items to keep clean. In our local climate, sweat and humidity can create a breeding ground for bacteria and dust mites within your bedding. Our mattress cleaning service is a multi-stage technical process that goes beyond the surface, using UVC light to kill pathogens and high-power vacuuming to extract biological waste.`,
    solutionsIntro: `We provide a deep-health reset for your bed. Our team uses specialized equipment designed specifically for mattresses, combining high-frequency vibration to loosen debris with medical-grade UVC rays that neutralize bacteria, mold, and allergens.`,
    detailedProblems: [
      { title: 'Allergen Saturation', text: 'A single second-hand mattress can house up to 10 million dust mites. We use 18,000 RPM vacuums to physically remove these from the mattress core.' },
      { title: 'Organic Salt Buildup', text: 'Body salts from sweat can make the mattress surface stiff and yellowed. We use gentle steam and biological cleaners to dissolve these salts and restore the original softness of the ticking.' },
      { title: 'Hidden Mold Spores', text: 'Lack of ventilation under a mattress can lead to mildew. Our deep-dry steam technology kills spores and dries instantly, ensuring no moisture is left to start new growth.' }
    ],
    technicalApproach: `Our approach is primarily dry and chemical-free, ensuring you can sleep on the mattress the same day. By using a post-cleaning hypoallergenic spray, we create a barrier that inhibits the re-entry of dust mites for up to six months.`
  },
  {
    slug: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    description: 'On-site or off-site cleaning for drapes and sheers.',
    shortDescription: 'Revive your window treatments without the hassle of removal.',
    icon: '🧣',
    image: '/images/services/curtain-cleaning.jpg',
    features: ['steaming', 'dry cleaning', 'dusting', 'pleat alignment', 'scenting'],
    commonProblems: [
      'Heavy dust accumulation in pleats and headers',
      'Fading and brittleness from sunlight exposure',
      'Odors trapped in thick fabric layers',
      'Graying of white sheers due to AC air intake',
      'Wrinkles and loss of "drape" in high-end fabrics'
    ],
    serviceBenefits: [
      'On-track cleaning (no dismantling needed)',
      'Safe for blackout and velvet drapes',
      'Immediate results with no downtime',
      'Improved indoor air quality'
    ],
    relatedTerms: ['drapery cleaning', 'blind cleaning', 'steam curtain wash', 'window treatment care'],
    expertiseSection: `Curtains act as a secondary filter for your home, catching dust from both the open windows and the AC system. Over time, these fine particulates can damage the delicate fibers of high-end drapes. Our specialized curtain cleaning service uses vertical steam technology and dry-cleaning solvents to refresh your window treatments while they are still hanging, preserving their shape and the integrity of your blackout linings.`,
    solutionsIntro: `We take the stress out of curtain maintenance. Most high-end drapes are difficult to remove and even harder to re-hang. Our technicians perform a thorough on-site rejuvenation that cleans and de-wrinkles your curtains in place, saving you time and ensuring your home looks perfect.`,
    detailedProblems: [
      { title: 'Accumulated Airborne Dust', text: 'Curtain headers are notorious dust traps. We use specialized soft-brush vacuum attachments and low-moisture steam to remove dust without stressing the fabric hooks or tracks.' },
      { title: 'Atmospheric Soilage', text: 'Cooking oils and outdoor smoke can yellow light-colored drapes. Our dry-solvent wiping technique removes these pollutants, restoring the original brightness of your sheers.' },
      { title: 'Fiber Brittleness', text: 'GCC sun exposure makes fabric fragile. We apply a protective UV conditioner that helps keep the fibers flexible, preventing them from shredding or tearing during regular use.' }
    ],
    technicalApproach: `We use industrial-grade vertical steamers that operate at a precise temperature to avoid fabric shrinkage. For delicate silks or beaded drapes, we utilize a specialized dry-foam method that lifts dirt without the weight of water.`
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    description: 'Professional exterior and interior window washing.',
    shortDescription: 'Crystal clear views with streak-free professional washing.',
    icon: '🪟',
    image: '/images/services/window-cleaning.jpg',
    features: ['glass washing', 'frame cleaning', 'track brushing', 'screen rinsing', 'streak removal'],
    commonProblems: [
      'Salt spray and sand buildup on exterior glass',
      'Hard water spots from irrigation systems',
      'Sticky residue from old window stickers',
      'Dust and dead insects in window tracks',
      'Hazy finish from improper DIY cleaning'
    ],
    serviceBenefits: [
      'Increased natural light in your home',
      'Enhanced curb appeal and interior look',
      'Prevention of glass etching from sand',
      'Professional-grade results on all heights'
    ],
    relatedTerms: ['glass cleaning', 'exterior window wash', 'window frame care', 'reach-and-wash'],
    expertiseSection: `In the dusty Middle East environment, windows can become hazy and coated in sand in just a few days. Professional window cleaning is about more than just glass; it is about maintaining the frames, tracks, and seals that keep your home insulated. Our teams use pure-water technology and professional squeegee techniques to provide a streak-free finish that actually stays clean longer by removing the sticky residues that attract dust.`,
    solutionsIntro: `We offer a comprehensive window service that covers both the inside and outside of your property. Our technicians are specialized in safely reaching high windows and ensuring that your frames and sills are cleaned as thoroughly as the glass itself.`,
    detailedProblems: [
      { title: 'Calcium Etching', text: 'When hard water dries on glass in the sun, it leaves a white crust that can permanently etch the surface. We use mild acidic glass restorers to safely dissolve these minerals and restore clarity.' },
      { title: 'Track Debris', text: 'Sand in the sliding tracks can damage the rollers of your windows. We use high-suction vacuums and specialized track brushes to ensure your windows slide effortlessly.' },
      { title: 'Static Attraction', text: 'Common spray-and-wipe cleaners leave a static charge that pulls dust back. We use de-ionized water and anti-static agents that leave the glass neutral and cleaner for longer.' }
    ],
    technicalApproach: `For taller villas, we use "Reach-and-Wash" carbon-fiber poles with de-ionized water. This allows us to scrub and rinse windows up to three stories high without ladders, ensuring a perfect rinse that dries spotless without any chemical residue.`
  },
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    description: 'Commercial cleaning services for a productive workspace.',
    shortDescription: 'Professional cleaning for offices, clinics, and showrooms.',
    icon: '🏢',
    image: '/images/services/office-cleaning.jpg',
    features: ['desk sanitization', 'carpet vacuuming', 'pantry cleaning', 'trash removal', 'glass partition cleaning'],
    commonProblems: [
      'Germ transmission in high-touch shared areas',
      'Keyboard and mouse dust accumulation',
      'Coffee stains and crumbs in meeting rooms',
      'Fingerprints on glass office partitions',
      'Overloaded trash bins in workstations'
    ],
    serviceBenefits: [
      'Healthier workspace for employees',
      'Professional image for clients',
      'Customized evening or weekend hours',
      'Trained staff specializing in office tech'
    ],
    relatedTerms: ['commercial cleaning', 'workspace sanitizing', 'business maintenance', 'janitorial services'],
    expertiseSection: `A clean office is directly linked to employee productivity and professional reputation. Commercial cleaning requires a different technical approach than residential work, focusing on high-touch surfaces like elevator buttons, door handles, and communal pantry areas. Our team is specialized in managing office environments without disturbing sensitive equipment or business documents, ensuring your team arrives every morning to a fresh, sanitized space.`,
    solutionsIntro: `We provide tailor-made cleaning contracts that fit your business schedule. From daily evening maintenance to intensive weekend deep-cleans, our crews move efficiently through your workspace, addressing everything from floor care to the detailed sanitization of computer peripherals.`,
    detailedProblems: [
      { title: 'Cross-Contamination in Pantries', text: 'Communal kitchens are hot spots for bacteria. We use food-safe sanitizers on all surfaces and perform an intensive cleaning of fridges and microwaves to maintain high hygiene standards.' },
      { title: 'Glass Partition Hazing', text: 'Fingerprints on glass walls look unprofessional. We use industrial-grade, streak-free cleaners that leave glass invisible, maintaining the modern aesthetic of your office.' },
      { title: 'Upholstered Task Chairs', text: 'Office chairs trap significant dust and oils. We perform regular steam extraction of desk chairs to remove allergens and maintain the look and longevity of your office furniture.' }
    ],
    technicalApproach: `We follow a strict "No-Disturb" protocol in office environments. This means using low-noise vacuums and ensuring all desks are returned to their exact setup. We provide a post-cleaning report of any maintenance issues we spot (like leaky taps or flickering lights) to help you manage your facility.`
  },
  {
    slug: 'pest-control',
    name: 'Pest Control',
    description: 'General residential and commercial pest management.',
    shortDescription: 'Professional elimination of household pests and insects.',
    icon: '🦟',
    image: '/images/services/pest-control.jpg',
    features: ['inspection', 'spraying', 'gel baiting', 'fogging', 'trapping'],
    commonProblems: [
      'Ant infestations in kitchen cabinets',
      'Mosquito breeding in garden standing water',
      'Silverfish damage to books and stored items',
      'Fly problems in residential and dining areas',
      'General insect intrusion during seasonal changes'
    ],
    serviceBenefits: [
      'Municipality-approved eco-friendly chemicals',
      'Safe for children and household pets',
      'Long-term prevention strategies',
      'Discreet and rapid service'
    ],
    relatedTerms: ['insect control', 'pest management', 'home spraying', 'extermination services'],
    expertiseSection: `Pest management in the Middle East is a continuous requirement due to the warm climate that allows insects to thrive year-round. Our pest control specialists are trained in the specific biology of local species, from desert ants to urban flies. We prioritize an Integrated Pest Management (IPM) approach, which combines targeted chemical application with exclusion techniques to ensure that once pests are gone, they cannot find a way back into your home.`,
    solutionsIntro: `We provide a comprehensive shield for your property. Our technicians perform a thorough audit of your home\'s entry points and moisture levels before applying a customized treatment plan that addresses the specific pests active in your neighborhood.`,
    detailedProblems: [
      { title: 'Entry Point Vulnerability', text: 'Small cracks around door frames or AC conduits are highways for insects. We identify these and recommend sealing solutions that provide a physical barrier against intrusion.' },
      { title: 'Nesting Site Identification', text: 'Spraying surface insects only solves 10% of the problem. We use technical knowledge to find the nests behind walls or under floors, ensuring the source of the infestation is neutralized.' },
      { title: 'Gardening and Moisture Links', text: 'Over-irrigation in gardens creates a paradise for mosquitoes and ants. We provide expert advice on moisture management to make your external property less attractive to local pests.' }
    ],
    technicalApproach: `We use only odors-free, water-based chemicals that are certified for indoor use. By focusing on gel-baiting in sensitive areas like kitchens, we eliminate pests without the need for you to empty your cabinets or leave your home.`
  },
  {
    slug: 'termite-control',
    name: 'Termite Control',
    description: 'Specialized termite detection and elimination.',
    shortDescription: 'Protect your property from structural timber damage.',
    icon: '🐜',
    image: '/images/services/termite-control.jpg',
    features: ['drilling', 'soil treatment', 'baiting systems', 'thermal imaging', 'wood treatment'],
    commonProblems: [
      'Hollow-sounding wooden door frames',
      'Mud tubes along walls or floorboards',
      'Damaged gypsum partitions and ceilings',
      'Discarded wings near windows or doors',
      'Blistered paint that looks like water damage'
    ],
    serviceBenefits: [
      'Structural integrity protection',
      'Long-term multi-year guarantees',
      'Non-toxic baiting options',
      'Advanced detection technology'
    ],
    relatedTerms: ['white ant treatment', 'anti-termite piping', 'soil poisoning', 'termite protection'],
    expertiseSection: `Subterranean termites are a silent threat to Middle Eastern properties, especially in newly developed desert areas. They can consume the wood and gypsum inside your walls for years without being noticed. Our termite specialists use advanced acoustic and thermal detection tools to "see" inside your walls, providing a technical diagnosis before any damage becomes structural. We specialize in both pre-construction soil treatment and post-construction chemical barriers.`,
    solutionsIntro: `Protecting your investment requires a scientific defense. We offer a variety of termite solutions, from the installation of monitoring stations around your villa to the precise injection of specialized termiticides into the foundation through discreet technical drilling.`,
    detailedProblems: [
      { title: 'Subterranean Tunnelling', text: 'Termites build mud tubes to stay hydrated while they travel from the soil to your wood. We use these as diagnostic trails to map the infestation and apply targeted elimination.' },
      { title: 'Cellulose Consumption', text: 'Termites don\'t just eat wood; they eat the paper lining of gypsum boards. We provide restorative treatment for architectural elements, ensuring the hidden colonies are fully eradicated.' },
      { title: 'Pre-Construction Gaps', text: 'Termites often enter through expansion joints or pipe penetrations in the slab. We create a continuous chemical barrier that blocks these microscopic entryways for 5-10 years.' },
    ],
    technicalApproach: `We use "Transfer Technology" termiticides. These chemicals are undetectable by termites—they walk through the treated zone and carry the active agent back to the queen, ensuring the entire colony is eliminated, not just the workers.`
  },
  {
    slug: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    description: 'Intensive elimination for bed bug infestations.',
    shortDescription: 'Professional help to restore your peaceful, bite-free sleep.',
    icon: '🛌',
    image: '/images/services/bed-bugs.jpg',
    features: ['steaming', 'residual spraying', 'inspection', 'laundry advice', 'follow-up'],
    commonProblems: [
      'Red, itchy bite marks in a line or cluster',
      'Small blood spots on sheets and pillowcases',
      'Dark fecal spots in mattress seams',
      'Sweet, musty odor in the bedroom',
      'Visible bugs in headboards or bedside furniture'
    ],
    serviceBenefits: [
      'Total elimination of all life stages (eggs)',
      'Human-safe chemical protocols',
      'Detailed preparation guide provided',
      'Discreet service in unmarked vehicles'
    ],
    relatedTerms: ['bed bug extermination', 'sleep hygiene rest', 'pest-free bedroom', 'insect removal'],
    expertiseSection: `Bed bugs are one of the most difficult pests to eradicate due to their resistance to common chemicals and their ability to hide in microscopic cracks. Our Bed Bug specialists follow a rigorous technical protocol that combines chemical treatments with high-temperature steam. We understand the stress an infestation causes, and we focus on a systematic room-by-room eradication that targets not only the adult bugs but also the eggs that cause re-infestations.`,
    solutionsIntro: `We provide a multi-visit guarantee for all bed bug treatments. Our approach begins with a high-intensity inspection of your furniture and walls, followed by a combination of residual sprays and 180°C steam that penetrates deep into your mattress and upholstery.`,
    detailedProblems: [
      { title: 'Egg Survival', text: 'Common sprays don\'t kill bed bug eggs. We use specialized Heat-Shock technology (Steam) that kills eggs on contact, breaking the life cycle once and for all.' },
      { title: 'Cracks and Crevices', text: 'Bed bugs hide during the day behind wallpaper, electrical sockets, and headboards. We use precision flushing agents and dusts to reach these hidden bunkers.' },
      { title: 'Furniture Integration', text: 'Often, an infestation spreads through luggage or second-hand items. We provide technical advice on how to isolate and treat your belongings to prevent the bugs from moving with you.' }
    ],
    technicalApproach: `We follow the "Flush-Kill-Residual" method. We first drive the bugs out of hiding, then neutralize them with non-toxic contact agents, and finally leave a safe residual barrier that continues to work for 30 days.`
  },
  {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    description: 'Eradication of German, American, and Oriental cockroaches.',
    shortDescription: 'Keep your kitchen and home free from disease-carrying roaches.',
    icon: '🪳',
    image: '/images/services/cockroach-control.jpg',
    features: ['gel baiting', 'chemical spraying', 'monitoring', 'sanitation advice'],
    commonProblems: [
      'Small "pepper" spots (droppings) in cabinets',
      'Cockroaches seen in the kitchen at night',
      'Unpleasant oily odor in storage areas',
      'Egg cases found behind fridges or ovens',
      'Damage to food packaging'
    ],
    serviceBenefits: [
      'Food-safe kitchen treatments',
      'Targeted baiting for nesting colonies',
      'Elimination of the source colony',
      'Guidance on long-term prevention'
    ],
    relatedTerms: ['roach killing', 'kitchen pest fix', 'insect baiting', 'extermination roach'],
    expertiseSection: `Cockroaches are master survivors that thrive in the plumbing and kitchens of Middle Eastern properties. German cockroaches, in particular, reproduce rapidly and can contaminate your food and surfaces with bacteria. Our technical approach focuses on gel-baiting technology, which leverages the cockroach's social behavior to distribute the treatment back to the hidden nest, providing a faster and more thorough elimination than traditional spraying alone.`,
    solutionsIntro: `We focus on "Total Colony Elimination." By placing attractive, technical baits in the specific micro-cracks where roaches hide, we ensure that the entire population—including those you don't see—is neutralized.`,
    detailedProblems: [
      { title: 'Resistance to Sprays', text: 'Local roach populations have developed immunity to many common sprays. We use rotating chemical formulas and high-grade baits that the insects have no resistance to.' },
      { title: 'Plumbing and Shared Vents', text: 'Roaches often travel through the vertical drainage pipes of apartment buildings. We apply "Barrier Treatments" to your drains and vents to stop neighbors\' pests from entering your home.' },
      { title: 'Nesting in Appliances', text: 'Roaches love the warmth of fridge motors and coffee machines. We use specialized safe-dusts and gels to treat these sensitive electronics without causing damage.' }
    ],
    technicalApproach: `Our technical baiting strategy uses "Secondary-Kill" logic. The insect eats the bait, returns to the nest, and dies; the rest of the colony then consumes the carcass and is also eliminated, leading to a total collapse of the infestation.`
  },
  {
    slug: 'painting-services',
    name: 'Painting Services',
    description: 'Professional interior and exterior painting for any property.',
    shortDescription: 'High-quality painting and wall-finishing for your home.',
    icon: '🎨',
    image: '/images/services/painting.jpg',
    features: ['wall preparation', 'sanding', 'priming', 'top coating', 'accent walls'],
    commonProblems: [
      'Cracks appearing in villa exterior walls',
      'Peeling paint due to interior humidity',
      'Uneven finish from poor previous workmanship',
      'Fading colors from intense GCC sunlight',
      'Stubborn stains and marks on living room walls'
    ],
    serviceBenefits: [
      'Professional preparation and masking',
      'Use of premium, low-VOC paints',
      'Precise edge cutting and smooth finish',
      'Clean and efficient project management'
    ],
    relatedTerms: ['wall painting', 'house repainting', 'interior designer look', 'exterior coating'],
    expertiseSection: `Painting in our region is as much about protection as it is about aesthetics. The extreme external heat and internal air conditioning create thermal stress that can cause paint to crack and peel. Our painting specialists are experts in surface physics, ensuring that walls are properly sanded, moisture-tested, and primed before any color is applied. We use only high-grade, low-VOC (low odor) paints that provide a durable finish while maintaining your indoor air quality.`,
    solutionsIntro: `We bring a new life to your space with professional color application. Our team handles the entire process, from moving and protecting your furniture to the final technical touch-ups that ensure every corner is perfect.`,
    detailedProblems: [
      { title: 'Substrate Thermal Cracking', text: 'Concrete and block walls move with the temperature. We use elastomeric fillers and fiber-reinforced tapes to repair cracks before painting, ensuring they don\'t reappear.' },
      { title: 'Humidity Blistering', text: 'Moisture trapped behind paint causes it to bubble. We use digital moisture meters to ensure your walls are dry and use breathable primers that allow vapor to escape safely.' },
      { title: 'GCC UV Fading', text: 'Exterior paint survives intense sunlight. We only use high-performance coatings with high-quality pigments that resist UV degradation, keeping your villa looking new for years.' }
    ],
    technicalApproach: `We follow the "5-Stage Painting Protocol": Protect, Prepare, Prime, Paint, and Perfect. This includes the use of industrial sanders with vacuum attachments to keep your home dust-free during the preparation phase.`
  },
  {
    slug: 'tile-installation',
    name: 'Tile Installation',
    description: 'Professional floor and wall tiling for kitchens and bathrooms.',
    shortDescription: 'Expert tile laying and grout finishing for a perfect floor.',
    icon: '🧱',
    image: '/images/services/tiling.jpg',
    features: ['levelling', 'tile cutting', 'adhesive choice', 'grouting', 'silicon sealing'],
    commonProblems: [
      'Hollow-sounding tiles due to poor adhesive',
      'Uneven "lippage" between adjacent tiles',
      'Cracked tiles from subfloor movement',
      'Discolored and crumbling grout lines',
      'Poorly aligned patterns at wall edges'
    ],
    serviceBenefits: [
      'Perfectly level and aligned finish',
      'Use of high-standard polymer adhesives',
      'Expertise in large-format porcelain',
      'Durable and waterproof results'
    ],
    relatedTerms: ['floor tiling', 'bathroom wall tile', 'backsplash installation', 'tile replacement'],
    expertiseSection: `Modern residences in the Middle East often feature large-format porcelain and intricate marble tiling. These materials require technical precision and the correct choice of high-performance adhesives that can handle the structural movements common in local buildings. Our master tilers are specialized in ensuring a 100% flat "lippage-free" finish, using advanced leveling systems and water-cooled precision saws to create clean, factory-quality edges.`,
    solutionsIntro: `From a small bathroom refresh to the complete flooring of a new villa, we provide a structured tiling service. We focus on the foundation, ensuring your subfloor is perfectly level before we lay the first tile, guaranteeing a result that is both beautiful and structurally sound.`,
    detailedProblems: [
      { title: 'Adhesive Debonding', text: 'In our climate, standard cement "dots" lead to hollow, cracking tiles. We use full-bed polymer adhesives that create a permanent, flexible bond across the entire tile surface.' },
      { title: 'Grout Maintenance', text: 'Grout is the weakest point of a floor. 我们 use epoxy or high-polymer grouts that are resistant to water and stains, ensuring your floor stays looking clean and new.' },
      { title: 'Expansion Management', text: 'Large tiled areas need to breathe. We technically calculate and install discreet expansion joints that prevent your tiles from "tenting" or cracking as the building moves.' }
    ],
    technicalApproach: `We use mechanical leveling clips during the installation of all large-format tiles. This technically guarantees a flat surface and identical grout widths, while our use of dust-controlled cutting tools keeps your home clean during the process.`
  },
  {
    slug: 'marble-polishing',
    name: 'Marble Polishing',
    description: 'Restoration and shining of marble and natural stone floors.',
    shortDescription: 'Restore the factory shine and elegance of your marble.',
    icon: '💎',
    image: '/images/services/marble-polishing.jpg',
    features: ['honing', 'polishing', 'crystallization', 'sealing', 'stain removal'],
    commonProblems: [
      'Dull and scratched appearance from foot traffic',
      'Acid etch marks from household cleaners',
      'Deep stains from spills or moisture',
      'Worn and dirty grout between marble slabs',
      'Loss of reflectivity in high-traffic areas'
    ],
    serviceBenefits: [
      'Mirror-like reflective finish',
      'Removal of surface scratches and lippage',
      'Protective sealing against future stains',
      'Enhanced natural color and stone depth'
    ],
    relatedTerms: ['stone restoration', 'marble shining', 'floor crystallization', 'granite polishing'],
    expertiseSection: `Marble is a natural, porous stone that requires specialized technical care. Common cleaners can chemically burn the surface, leading to a dull, hazy finish. Our marble restoration specialists use a multi-stage diamond-abrasive process that physically resurfaces the stone, removing scratches and leveling uneven joints. We then follow this with "Crystallization"—a technical chemical reaction that hardens the surface and creates the iconic high-gloss mirror finish.`,
    solutionsIntro: `We provide a comprehensive "Stone Reset" for your property. Our restoration teams move through the property systematically, using industrial-grade planetary floor machines and varying grits of diamond pads to bring back the natural beauty of your marble, granite, or travertine.`,
    detailedProblems: [
      { title: 'Physical Surface Etching', text: 'Scratches acts like small shadows on the floor, making it look dark. We "hone" the stone to remove these microscopically, allowing light to bounce off the surface perfectly.' },
      { title: 'Grout Restoration', text: 'Dirty grout can ruin the look of a premium marble floor. We use specialized stone-safe grout cleaners and, if necessary, re-grout with color-matched resins that blend seamlessly with the stone.' },
      { title: 'Porosity and Staining', text: 'Natural stone absorbs liquids. We apply military-grade "Impregnating Sealers" that sink into the stone pores, creating an invisible barrier that prevents future juice or oil stains.' }
    ],
    technicalApproach: `Our technical protocol is a "Wet-Polishing" process, which prevents any dust from entering your home. By using varying grades of diamond-impregnated resin pads (from 50 to 3000 grit), we achieve a clarity of finish that no chemical "wax" can replicate.`
  },
  {
    slug: 'wallpaper-installation',
    name: 'Wallpaper Installation',
    description: 'Professional wallpaper hanging and removal services.',
    shortDescription: 'Expert installation for a perfect, seam-free wall finish.',
    icon: '🎞️',
    image: '/images/services/wallpaper.jpg',
    features: ['wall priming', 'pattern matching', 'pasting', 'smoothing', 'edge trimming'],
    commonProblems: [
      'Visible seams or overlapping edges',
      'Air bubbles or creases under the paper',
      'Pattern mismatching at eye level',
      'Peeling corners due to humidity',
      'Adhesive stains on the wallpaper face'
    ],
    serviceBenefits: [
      'Perfect pattern alignment',
      'Invisible, seamless finish',
      'Specialized technical adhesives',
      'Professional removal of old paper'
    ],
    relatedTerms: ['wall covering', 'paper hanging', 'wall decor', 'vinyl installation'],
    expertiseSection: `Wallpaper installation is a craft that requires patience and high-precision technical skills. In our region, where humidity can fluctuate, the choice of adhesive and the preparation of the wall substrate are critical to ensure the paper doesn't peel or bubble over time. Our installation specialists are experts in handling everything from heavy vinyl and textured fabrics to luxury silk and delicate hand-painted Chinoiserie.`,
    solutionsIntro: `We provide a flawless finish for your interior design. Our team ensures that your walls are smooth and primed before installation, and uses laser-levels to guarantee that the first drop is perfectly vertical, ensuring the entire room is balanced and beautifully aligned.`,
    detailedProblems: [
      { title: 'Substrate Incompatibility', text: 'Applying wallpaper to common oil-based paints will cause failure. We use technical primers that create a "mechanical bond," ensuring the adhesive stays secure for years.' },
      { title: 'Pattern Creep', text: 'In large rooms, paper can "drift." We use precision measuring and constant laser-monitoring to ensure your patterns align perfectly at every corner and around every window.' },
      { title: 'Bubble and Crease Management', text: 'Air trapped under paper can ruin the look. 我们 use specialized smoothing tools and humidity-controlled adhesives that allow for a perfectly flat, hand-finished appearance.' }
    ],
    technicalApproach: `We follow the "Center-Out" installation protocol. This involves starting from the most visible point in the room and working outwards, ensuring that any necessary trims are hidden in the most inconspicuous areas, resulting in a professional, custom-made look.`
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    description: 'Design and installation of gardens, patios, and outdoor spaces.',
    shortDescription: 'Professional landscape design and construction for your property.',
    icon: '🎋',
    image: '/images/services/landscaping.jpg',
    features: ['garden design', 'hardscaping', 'planting', 'lighting', 'water features'],
    commonProblems: [
      'Poor drainage leading to soil erosion and plant death',
      'Inadequate plant selection for the desert climate',
      'Cracking and sinking of patio pavers over time',
      'High water consumption from inefficient designs',
      'Lack of privacy from neighboring properties'
    ],
    serviceBenefits: [
      'Custom luxury outdoor designs',
      'Expertise in desert-friendly flora',
      'Enhanced property market value',
      'Professional project management'
    ],
    relatedTerms: ['garden design', 'hardscape installation', 'outdoor living', 'backyard renovation'],
    expertiseSection: `Landscaping in the Middle East is a technical challenge that balances aesthetic beauty with environmental reality. Our landscape architects are specialized in creating "Oasis" environments that thrive in extreme heat while minimizing water usage. We focus on the structural integrity of hardscaping—ensuring foundations are correctly prepared for the local soil—and on the precise selection of salt-tolerant and drought-resistant plants that provide year-round greenery.`,
    solutionsIntro: `From a modern minimalist courtyard to a lush tropical family garden, we handle the entire transformation. Our team manages everything from initial 3D conceptualization to the technical installation of irrigation, lighting, and high-quality stone finishes.`,
    detailedProblems: [
      { title: 'Subsoil Salinity', text: 'High salt levels in local soil can kill expensive plants. 我们 use soil-replacement techniques and specialized root-zone filters to ensure your garden has the healthy foundation it needs to thrive.' },
      { title: 'Paving Settlement', text: 'Shifting sand under patios causes uneven stones. We use high-standard sub-base compaction and geotextile membranes to ensure your outdoor flooring stays perfectly flat for years.' },
      { title: 'Micro-Climate Management', text: 'Intense sun can burn delicate foliage. We technically design shade structures and use strategic planting hierarchies where larger trees protect smaller, more sensitive plants.' }
    ],
    technicalApproach: `We prioritize "Smart-Landscaping" which involves the integration of automated weather-sensing irrigation and low-voltage LED lighting. By using permeable paving systems, we allow for natural water replenishment while preventing surface pooling.`
  },
  {
    slug: 'garden-maintenance',
    name: 'Garden Maintenance',
    description: 'Regular care for lawns, plants, and irrigation systems.',
    shortDescription: 'Keep your outdoor space healthy and beautiful year-round.',
    icon: '🏡',
    image: '/images/services/garden-maintenance.jpg',
    features: ['mowing', 'pruning', 'fertilizing', 'irrigation check', 'pest control'],
    commonProblems: [
      'Yellowing of grass during peak summer months',
      'Clogged irrigation nozzles leading to dry spots',
      'Overgrowth of weeds and invasive species',
      'Plant diseases and fungal infections',
      'Insufficient nutrient levels in sandy soil'
    ],
    serviceBenefits: [
      'Consistent garden health and look',
      'Proactive irrigation system audits',
      'Professional-grade fertilizers and tools',
      'Expert seasonal planting advice'
    ],
    relatedTerms: ['lawn care', 'plant maintenance', 'irrigation repair', 'gardener services'],
    expertiseSection: `Maintaining a green space in a desert climate requires constant, technical oversight. Our garden maintenance teams are specialized in the horticultural needs of the Arabian Peninsula, focusing on soil nutrient balancing and precise irrigation scheduling. We don't just "cut and trim"; we monitor the health of every plant, adjusting water levels to match seasonal fluctuations and applying specialized organic fertilizers that rebuild the soil structure.`,
    solutionsIntro: `We provide professional care that ensures your garden is a stress-free extension of your home. Our team visits on a regular schedule to handle everything from precision lawn mowing and artistic pruning to the deep-cleaning of your outdoor hardscapes and water features.`,
    detailedProblems: [
      { title: 'Irrigation Inefficiency', text: 'An out-of-balance irrigation system can waste thousands of liters of water. We perform monthly pressure tests and nozzle clean-outs to ensure every drop reaches the roots where it\'s needed.' },
      { title: 'Soil Compaction', text: 'Frequent walking or heavy watering can "suffocate" plant roots. We perform mechanical aeration to allow oxygen and nutrients to reach the root zone, promoting rapid and healthy growth.' },
      { title: 'Seasonal Pest Stress', text: 'Warm weather attracts specific garden pests. We use biological controls and safe-sprays to protect your roses, palms, and lawn from infestations without harming the local ecosystem.' }
    ],
    technicalApproach: `We follow a "Nutrition-Based Control" protocol. By performing regular soil pH and moisture tests, we can predict plant stress before it happens, allowing us to prevent issues rather than reacting to them.`
  },
  {
    slug: 'tree-cutting',
    name: 'Tree Cutting',
    description: 'Professional tree trimming, removal, and palm care.',
    shortDescription: 'Safe and expert tree management for your property.',
    icon: '🌲',
    image: '/images/services/tree-cutting.jpg',
    features: ['pruning', 'felling', 'stump grinding', 'palm skinning', 'branch removal'],
    commonProblems: [
      'Overgrown branches touching electrical wires',
      'Dead or diseased trees posing a falling risk',
      'Palm trees with heavy, dangerous dry fronds',
      'Structural damage to walls from invasive roots',
      'Trees blocking views or natural light'
    ],
    serviceBenefits: [
      'Safe removal of dangerous trees',
      'Specialized care for Middle Eastern palms',
      'Professional disposal of all green waste',
      'Equipment for all tree heights'
    ],
    relatedTerms: ['arborist services', 'palm trimming', 'tree removal', 'branch lopping'],
    expertiseSection: `Tree management in an urban environment requires technical precision to protect both the tree and the surrounding property. Our arborists are experts in the weight-load dynamics of large desert trees and the specific pruning requirements of local palms. We prioritize safety, using industrial-grade rigging and cutting equipment to ensure that even large removals are handled without risk to your home or utility lines.`,
    solutionsIntro: `We provide a structured approach to tree health and safety. Whether you need a seasonal palm "skinning" to keep your garden looking sharp or the complex removal of an old, unstable tree, our team handles the task with high-technical standards and full insurance coverage.`,
    detailedProblems: [
      { title: 'Unstable Weight Distribution', text: 'Trees that grow unevenly can collapse during a shamal windstorm. We perform technical thinning and weight-reduction pruning to ensure your trees remain balanced and wind-resistant.' },
      { title: 'Palm Weevil Infestations', text: 'This invasive pest can kill a palm from the inside out. 我们 specialize in the technical treatment and early detection of weevils, preserving these iconic symbols of the region.' },
      { title: 'Stump Regrowth and Decay', text: 'Leaving a stump allows pests to thrive. 我们 use industrial stump grinders to transform the root-base into mulch, allowing you to replant or pave over the area immediately.' }
    ],
    technicalApproach: `We follow the ANSI A300 standards for tree care. This includes using "spikeless" climbing techniques for pruning to avoid damaging the tree's living tissue, and employing controlled lowering systems for large branches.`
  },
  {
    slug: 'swimming-pool-cleaning',
    name: 'Swimming Pool Cleaning',
    description: 'Expert pool maintenance, chemistry, and equipment care.',
    shortDescription: 'Keep your pool water crystal clear and hygienically safe.',
    icon: '🏊',
    image: '/images/services/pool-cleaning.jpg',
    features: ['water testing', 'cleaning', 'filter backwash', 'brushing', 'skimming'],
    commonProblems: [
      'Algae growth during high summer temperatures',
      'Cloudy water due to poor chemical balance',
      'Sand accumulation at the bottom of the pool',
      'Faulty pumps and noisy filtration systems',
      'Chemical imbalances causing skin or eye irritation'
    ],
    serviceBenefits: [
      'Guaranteed water hygiene and clarity',
      'Extended life for pumps and filters',
      'Peace of mind for family swimming',
      'All chemicals included in service'
    ],
    relatedTerms: ['pool maintenance', 'water chemistry', 'pool filter fix', 'swimming pool service'],
    expertiseSection: `A swimming pool in our climate is under constant environmental attack from heat, dust, and heavy usage. Maintenance is a technical science of balancing pH, chlorine, and alkalinity to ensure the water is not just clear, but biologically safe. Our pool specialists are trained in the fluid dynamics of filtration systems and the precise chemistry required to combat local algae strains that thrive in the intense Arabian sun.`,
    solutionsIntro: `We take the work out of pool ownership. Our team visits twice-weekly to perform a multi-point technical audit that covers everything from vacuuming the floor to checking the electrical safety of underwater lighting and pump systems.`,
    detailedProblems: [
      { title: 'Total Dissolved Solids (TDS)', text: 'Evaporation in our heat leaves minerals behind, making water "hard" and difficult to balance. We technically monitor TDS levels and advise on "partial-drains" to keep your water fresh.' },
      { title: 'Sand Filter Channeling', text: 'Over time, filter sand clumps together, allowing dirty water to bypass the filtration. We perform technical "sand-changes" and filter deep-cleans to restore 100% clarity.' },
      { title: 'Pump Seal Failures', text: 'Heat can dry out rubber seals in the pump room, leading to leaks and motor damage. 我们 perform preventative lubrication and seal testing to ensure your circulation never stops.' }
    ],
    technicalApproach: `We use digital colorimeters for water testing to ensure 100% accuracy in chemical dosing. By maintaining a perfect Saturation Index (LSI), we ensure your pool water is neither corrosive to your equipment nor scale-forming on your tiles.`
  },
  {
    slug: 'cctv-installation',
    name: 'CCTV Installation',
    description: 'Professional security camera setup for homes and businesses.',
    shortDescription: 'State-of-the-art security systems for your property.',
    icon: '📹',
    image: '/images/services/cctv.jpg',
    features: ['camera mounting', 'cabling', 'dvr setup', 'remote view', 'storage config'],
    commonProblems: [
      'Blind spots in camera coverage',
      'Poor night-vision clarity due to reflection',
      'Difficulty accessing remote view on mobile',
      'Hard drive failures and data loss',
      'Cabling damage from garden pests or sun'
    ],
    serviceBenefits: [
      'High-definition security monitoring',
      'Remote access from anywhere in the world',
      'Licensed technical installers',
      'Custom coverage design'
    ],
    relatedTerms: ['security cameras', 'home monitoring', 'surveillance system', 'ip camera setup'],
    expertiseSection: `Modern security systems require a deep understanding of network engineering and optical physics. Our CCTV specialists focus on the technical "Golden Triangle" of security: Resolution, Storage, and Connectivity. We don't just "hang cameras"; we design a comprehensive surveillance network that eliminates blind spots, utilizes AI-based human detection to reduce false alarms, and ensures your data is securely stored and accessible from your smartphone 24/7.`,
    solutionsIntro: `We provide a complete security consultation and installation. From selecting the right IP cameras for your villa perimeter to configuring the remote-viewing software on all your family's devices, we handle the entire technical journey for you.`,
    detailedProblems: [
      { title: 'Infrared (IR) Bounce-Back', text: 'Cameras mounted too close to walls can "blind" themselves at night. 我们 use technical positioning and offset-bracketry to ensure your night vision is crystal clear.' },
      { title: 'Network Congestion', text: 'High-res cameras can slow down your home Wi-Fi. We use dedicated VLANs and high-quality Cat6 cabling to ensure your security system operates independently and smoothly.' },
      { title: 'HDD Write-Cycles', text: 'Security recording is constant and kills regular hard drives. We use only industrial-grade "Purple" drives designed for 24/7 technical write-loads, preventing data loss.' }
    ],
    technicalApproach: `We follow local regulatory standards for security installations. This includes the use of weather-proof junction boxes and UV-resistant conduits to protect your system from the harsh environmental conditions of the Middle East.`
  },
  {
    slug: 'intercom-installation',
    name: 'Intercom Installation',
    description: 'Repair and setup of video and audio door entry systems.',
    shortDescription: 'Secure and convenient communication for your entry gate.',
    icon: '📞',
    image: '/images/services/intercom.jpg',
    features: ['wiring', 'handset install', 'gate release', 'camera check', 'mobile sync'],
    commonProblems: [
      'Static or no sound in the intercom handset',
      'No video display on the indoor monitor',
      'Gate lock failing to release remotely',
      'Poor outdoor unit weather resistance',
      'Difficulty syncing with modern smart-home apps'
    ],
    serviceBenefits: [
      'Enhanced home entry security',
      'One-touch gate and door control',
      'High-clarity video and audio',
      'Integration with existing locks'
    ],
    relatedTerms: ['door phone', 'video entry system', 'gate communication', 'smart doorbell'],
    expertiseSection: `The intercom is the primary gatekeeper for your property. In our region, where many homes have external entrance gates, a reliable communication system is essential for both security and convenience. Our technicians are specialized in both legacy analog systems and modern IP-based video door phones. We focus on ensuring high-fidelity audio and crystal-clear video, even in the glare of the desert sun, and specialize in integrating gate-release mechanisms with your existing heavy-duty locks.`,
    solutionsIntro: `Refresh your home entry with a modern intercom. We help you transition from old buzzing handsets to sleek high-definition video monitors that allow you to see and speak with visitors and release the gate from your kitchen, bedroom, or even your mobile phone while you are away.`,
    detailedProblems: [
      { title: 'Audio Feedback and Noise', text: 'Poor grounding or low-quality cable causes buzzing. We use shielded technical wiring and balanced audio circuits to ensure your conversations are clear and professional.' },
      { title: 'Gate Strike Failures', text: 'The electrical signal to open a heavy gate often fails over long distances. 我们 install power-boosters and high-current relays to ensure the lock releases every time you press the button.' },
      { title: 'Exterior Unit Corrosion', text: 'Sand and salt can damage outdoor speaker membranes. We use only IP65-rated stainless steel and aluminum units with specialized moisture-sealed internal boards.' }
    ],
    technicalApproach: `We follow the "Reliability-First" protocol. For wireless systems, we perform internal signal audits to ensure 100% connectivity, while for wired systems, we use armored data cabling to prevent accidental damage during gardening or construction.`
  },
  {
    slug: 'access-control-installation',
    name: 'Access Control Installation',
    description: 'Specialized lock and entry management for homes and offices.',
    shortDescription: 'Advanced keyless entry and security management.',
    icon: '🔑',
    image: '/images/services/access-control.jpg',
    features: ['smart locks', 'fingerprint entry', 'card readers', 'magnetic locks', 'app config'],
    commonProblems: [
      'Electronic locks failing to engage or release',
      'Fingerprint readers struggling in humid air',
      'Lost administrative access for card systems',
      'Battery failures on wireless door locks',
      'Software sync issues between multiple doors'
    ],
    serviceBenefits: [
      'Keyless convenience and security',
      'Audit logs of who entered and when',
      'Remote door management via app',
      'Professional enterprise-grade hardware'
    ],
    relatedTerms: ['biometric entry', 'smart lock setup', 'card access system', 'electronic door security'],
    expertiseSection: `Access control is the transition from traditional keys to managed secure entry. In modern Middle Eastern buildings, this involves the technical integration of biometrics, RFID technology, and high-strength electromagnetic locks. Our specialists design systems that provide both high security and "fail-safe" emergency exits, ensuring that your property is secure from intruders while remaining easily accessible for authorized family members or employees.`,
    solutionsIntro: `Take total control of your property's entry points. From installing a single fingerprint lock on your master suite to a multi-door card access system for your business suite, we provide the technical architecture and hardware installation that keeps your space private and manageable.`,
    detailedProblems: [
      { title: 'Magnetic Lock Alignment', text: 'Even a 2mm misalignment can reduce a lock\'s holding force by 500kg. We use technical mounting brackets and precision leveling to ensure 100% surface-to-surface contact for maximum security.' },
      { title: 'Biometric Sensor Error', text: 'Dust and humidity can make fingerprint sensors unreliable. We use industrial-grade optical and capacitive scanners with high false-rejection immunity for consistent performance.' },
      { title: 'Emergency Egress Safety', text: 'Security should never trap you inside. We technically integrate your access control with fire alarm systems to ensure that all doors automatically unlock in an emergency.' }
    ],
    technicalApproach: `We use only specialized security cabling and encrypted communication protocols (like OSDP) to ensure your system cannot be "hacked" or bypassed by manipulating the wiring. Every installation includes a technical tutorial for the administrator.`
  },
  {
    slug: 'house-movers',
    name: 'House Movers',
    description: 'Complete residential moving and packing services.',
    shortDescription: 'Professional apartment and villa relocation specialist.',
    icon: '🚛',
    image: '/images/services/house-movers.jpg',
    features: ['packing', 'disassembling', 'transport', 'assembling', 'unpacking'],
    commonProblems: [
      'Damage to fragile items during transit',
      'Scratched walls and floors in the new property',
      'Lost or incorrectly labeled boxes',
      'Furniture not fitting through new doorways',
      'Delays causing logistical stress for families'
    ],
    serviceBenefits: [
      'Stress-free relocation experience',
      'High-quality packing materials',
      'Insured and experienced crew',
      'Complete furniture reassembly on-site'
    ],
    relatedTerms: ['home relocation', 'movers and packers', 'villa moving', 'apartment shift'],
    expertiseSection: `Moving an entire household in the Middle East requires logistical expertise and technical care for delicate items. Our moving specialists are trained in the "Safe-Transit" methodology, which involves bespoke packing for everything from massive crystal chandeliers and fine-art to heavy kitchen appliances. We focus on protecting both your belongings and your properties, using specialized floor and wall protectors to ensure that the moving process leaves no mark on your previous or future home.`,
    solutionsIntro: `We provide a turnkey "Shift-and-Stay" moving service. Our team arrives with a fleet of specialized closed-body trucks and a professional crew that handles the entire process: from technical furniture disassembly to the final placement and reassembly in your new space.`,
    detailedProblems: [
      { title: 'Structural Fragility during Transit', text: 'Vibration from long-haul trucks can damage loose joints. We use double-wall corrugated boxing and technical foam-padding to isolate your valuables from the stresses of the road.' },
      { title: 'Furniture Disassembly Physics', text: 'Modern flat-pack furniture is easily damaged if taken apart incorrectly. Our crew uses specialized tools and technical manuals to ensure your beds and cabinets are handled with precision.' },
      { title: 'Spatial Logistics', text: 'Moving large villas into high-rise apartments requires elevator and corridor planning. 我们 coordinate all building access and use specialized hoisting equipment if necessary for oversized items.' }
    ],
    technicalApproach: `We follow a "Zone-to-Zone" inventory system. Every box is color-coded to its destination room and scanned at both locations, ensuring a 100% arrival rate and making your unpacking process fast and organized.`
  },
  {
    slug: 'furniture-movers',
    name: 'Furniture Movers',
    description: 'Safe transport and assembly for office and home furniture.',
    shortDescription: 'Expert handling and relocation of your heavy furniture.',
    icon: '🏢',
    image: '/images/services/furniture-movers.jpg',
    features: ['wrapping', 'lifting', 'van transport', 'reassembly', 'furniture protection'],
    commonProblems: [
      'Scratched wood and torn upholstery on sofas',
      'Structural weakening from improper reassembly',
      'Missing screws and hardware after the move',
      'Back injuries from improper DIY lifting',
      'Difficulty navigating narrow staircases'
    ],
    serviceBenefits: [
      'Heavy-item specialist handling',
      'High-grade furniture blankets and wrap',
      'Tools for all furniture hardware types',
      'Rapid same-city transport'
    ],
    relatedTerms: ['sofa movers', 'wardrobe moving', 'heavy item transport', 'furniture packers'],
    expertiseSection: `Moving premium furniture requires more than just muscle; it requires a technical understanding of furniture joinery and protective material science. Our furniture moving specialists use specialized heavy-duty transit blankets and "Stretch-Wrap" technology to create a protective cocoon around every piece. We are specialized in the technical handling of heavy items like solid wood tables, bulky leather sets, and delicate mirrored dressers, ensuring they arrive in the same condition as they started.`,
    solutionsIntro: `From moving a single heavy armoire to a complete living room update, we treat every piece of furniture as an asset. Our professional loaders use specialized dollies and lifting straps to ensure smooth, damage-free transport even through the most challenging hallways and elevators.`,
    detailedProblems: [
      { title: 'Surface Finish Vulnerability', text: 'A single grain of sand under a moving blanket can scratch a high-gloss finish. 我们 perform a technical "pre-wipe" before wrapping to ensure no abrasive particulates are trapped against the furniture.' },
      { title: 'Hardware Retention', text: 'The most common moving headache is a missing bolt. 我们 use technical "hardware-pockets" attached directly to the furniture piece, ensuring every screw and shelf-pin arrives with its parent item.' },
      { title: 'Loading Dynamics', text: 'Improper weight distribution in a truck causes furniture to shift. 我们 use industrial "E-Track" tie-down systems inside our vehicles to securely lock every item in place regardless of the road conditions.' }
    ],
    technicalApproach: `We use a "Blanket-Wrap & Shrink-Seal" protocol. This dual-layer approach provides both impact padding and a moisture/dust barrier, keeping your upholstery clean and your wood surfaces protected from humidity and sand during transit.`
  },
  {
    slug: 'office-relocation',
    name: 'Office Relocation',
    description: 'Commercial moving services for businesses and corporations.',
    shortDescription: 'Professional, efficient business moving with minimal downtime.',
    icon: '💼',
    image: '/images/services/office-relocation.jpg',
    features: ['it packing', 'file management', 'desk dismantling', 'after-hours move', 'system setup'],
    commonProblems: [
      'Mismatched workstations in the new office',
      'Damage to sensitive IT servers and monitors',
      'Loss of critical business documents',
      'Extended business downtime due to poor planning',
      'Confusion among staff during the move'
    ],
    serviceBenefits: [
      'Weekend and evening relocation available',
      'Specialized IT and electronics handling',
      'Numbered tagging for workstation continuity',
      'Efficient, high-speed commercial crews'
    ],
    relatedTerms: ['business move', 'commercial relocation', 'corporate movers', 'office shift'],
    expertiseSection: `Commercial relocation is a project management challenge centered on "Zero Downtime." Unlike residential moving, office relocation requires technical expertise in handling expensive electronics, complex modular workstations, and confidential file systems. Our team is specialized in the logistical synchronization needed to move your business overnight or over a weekend, ensuring your employees can log in and resume work from their new desks on Monday morning without missing a beat.`,
    solutionsIntro: `Streamline your business transition with our professional corporate moving service. We provide a dedicated Move Manager to coordinate the entire project, from the technical dismantling of your server racks to the labeled distribution of individual staff crates at the new location.`,
    detailedProblems: [
      { title: 'IT Infrastructure Fragility', text: 'Servers and monitors are the lifeblood of your company. We use specialized "Anti-Static" bubble-wrap and custom-sized crates to ensure your technology is isolated from shock and static during the move.' },
      { title: 'Modular System Complexity', text: 'Modern desk systems come in hundreds of pieces. We use a technical "Alpha-Numeric" tagging system that maps every desk component to its exact location in the new floor plan.' },
      { title: 'Confidential File Integrity', text: 'Maintaining order in a filing system is critical. We use specialized "Sequential Pack" methodologies that ensure your documents remain in their exact archival order throughout the move.' }
    ],
    technicalApproach: `We follow a "Workstation-Unity" protocol. Every staff member's equipment is treated as a single technical unit, moved in a secure, labeled "IT-Crate" that includes all cables and peripherals, ensuring a seamless "Plug-and-Play" experience at the new office.`
  },
  {
    slug: 'car-towing',
    name: 'Car Towing',
    description: 'Emergency roadside assistance and vehicle recovery.',
    shortDescription: 'Reliable 24/7 towing and recovery for any vehicle.',
    icon: '🛻',
    image: '/images/services/towing.jpg',
    features: ['flatbed towing', 'roadside recovery', 'battery jump', 'fuel delivery', 'lockout help'],
    commonProblems: [
      'Mechanical breakdown in high traffic or desert heat',
      'Flat tire with a missing or damaged spare',
      'Accidental lockout with keys inside the car',
      'Dead battery after leaving lights on',
      'Empty fuel tank far from a service station'
    ],
    serviceBenefits: [
      '24/7 rapid emergency response',
      'Safe flatbed transport for luxury cars',
      'Experienced roadside technicians',
      'Coverage across all remote highways'
    ],
    relatedTerms: ['breakdown help', 'vehicle recovery', 'tow truck service', 'roadside assistance'],
    expertiseSection: `Roadside emergencies in our region require a technical understanding of the stress heat puts on vehicle components. Our towing specialists are equipped with high-standard flatbed trucks designed to handle everything from grounded luxury sports cars to heavy 4x4s. We focus on safe vehicle securement and rapid response, ensuring that you and your car are moved out of the sun and to a place of safety or repair with the highest regard for vehicle integrity.`,
    solutionsIntro: `We provide a safety net for every journey. From a simple jump-start in your driveway to a full flatbed recovery after a mechanical failure on the highway, our mobile units are strategically positioned to provide help whenever and wherever you need it.`,
    detailedProblems: [
      { title: 'All-Wheel Drive (AWD) Towing Risk', text: 'Dragging an AWD vehicle can destroy the transmission. 我们 only use flatbed trucks and specialized dollies to ensure that all wheels are off the ground, preserving your car\'s mechanical health.' },
      { title: 'Ground Clearance for Luxury Cars', text: 'Modern lower-trim cars can easily scrape during loading. 我们 use specialized long-ramp systems and soft-strap wheel ties that protect your bumpers and expensive alloy rims from any mark.' },
      { title: 'Off-Road Sand Recovery', text: 'Getting stuck in the desert requires specialized winching and recovery boards. 我们 bring the technical knowledge of tire-pressure management and pull-angles to recover your vehicle without damage.' }
    ],
    technicalApproach: `We follow the "Zero-Surface Contact" towing protocol. By only touching the tires with our soft-synthetic straps and never the chassis or body, we guarantee a finish-protected transit to your chosen destination.`
  },
  {
    slug: 'mobile-car-wash',
    name: 'Mobile Car Wash',
    description: 'Professional car cleaning at your home or office.',
    shortDescription: 'Convenient, high-quality car wash delivered to your doorstep.',
    icon: '🚿',
    image: '/images/services/car-wash.jpg',
    features: ['exterior wash', 'interior vacuuming', 'tire dressing', 'window cleaning', 'waxing'],
    commonProblems: [
      'Paint scratches from traditional brush-washes',
      'Dust accumulation in hard-to-reach vents',
      'Water spots and salt residue on paintwork',
      'Faded dashboards from sun exposure',
      'Lingering odors inside the cabin'
    ],
    serviceBenefits: [
      'Ultimate convenience (no driving to the mall)',
      'Water-saving eco-friendly technology',
      'Attention to detail by trained staff',
      'Premium waxes and interior conditioners'
    ],
    relatedTerms: ['home car wash', 'car cleaning', 'auto detailing', 'mobile valeting'],
    expertiseSection: `Professional car care in the Middle East is about more than just remove sand; it is about building a barrier against the sun and humidity. Our mobile car wash specialists use "Three-Bucket" scratch-free methods and pH-balanced chemicals specifically formulated for the high temperatures of the region. We focus on a technical deep-clean of your vehicle's exterior and interior, ensuring your investment is protected from the abrasive effects of sand and the bleaching effects of UV rays.`,
    solutionsIntro: `Refresh your vehicle while you work or relax. Our fully equipped mobile units bring their own premium water and power supplies to your location, providing a level of cleanliness and detail that typical garage washes simply cannot match.`,
    detailedProblems: [
      { title: 'Swirl-Mark Prevention', text: 'Dirty sponges are the cause of swirl marks on dark cars. 我们 use only clean, deep-pile microfiber mitts and grit-guards to ensure your paint stays mirror-smooth and scratch-free.' },
      { title: 'Dashboard UV Decay', text: 'The desert sun can crack your leather and plastic. 我们 technically apply UV-blockers and non-greasy conditioners that nourish the materials and prevent premature aging and fading.' },
      { title: 'Brake Dust Corrosiveness', text: 'Dust from brakes can chemically bond to your rims. 我们 use acid-free wheel cleaners that safely dissolve iron particles, keeping your alloys looking factory-new.' }
    ],
    technicalApproach: `We utilize a "Waterless or Low-Moisture" protocol for home visits. This high-lubricity technical wash encapsulate dirt and lifts it away without the mess of traditional hose washes, providing a deeper shine while respecting local water conservation.`
  },
  {
    slug: 'car-detailing',
    name: 'Car Detailing',
    description: 'Deep cleaning, polishing, and ceramic coating for vehicles.',
    shortDescription: 'High-end restorative care for a "better than new" finish.',
    icon: '✨',
    image: '/images/services/car-detailing.jpg',
    features: ['paint correction', 'interior shampooing', 'engine cleaning', 'ceramic coating', 'leather care'],
    commonProblems: [
      'Oxidized and dull-looking paintwork',
      'Deep scratches and swirl marks',
      'Stained upholstery and carpets',
      'Faded and dusty engine bay components',
      'Hazy and yellowed headlights'
    ],
    serviceBenefits: [
      'Showroom-quality finish and shine',
      'Years of protection with ceramic tech',
      'Total interior sanitization',
      'Maximized vehicle resale value'
    ],
    relatedTerms: ['paint restoration', 'ceramic protection', 'interior detailing', 'auto polishing'],
    expertiseSection: `Car detailing is the technical science of restorative vehicle care. It goes beyond washing, involving the physical resurfacing of the clear coat and the chemical bonding of protective layers. Our detailing specialists are experts in paint-depth auditing and multi-stage machine polishing. We specialize in the application of Ceramic and Graphene coatings—high-tech permanent layers that create a super-hydrophobic surface, making your car repellent to dust, water, and bird droppings while providing an incredible depth of color.`,
    solutionsIntro: `Transform your vehicle into a masterpiece. Our detailing service provides an intensive 20-hour technical makeover that addresses every square millimeter of your car, from the under-seat carpeting to the delicate internal plastics of your engine bay.`,
    detailedProblems: [
      { title: 'Clear-Coat Oxidation', text: 'Sun exposure makes paint look cloudy. 我们 use digital thickness gauges to ensure safety and apply precision abrasives to "delete" the oxidized layer, revealing the deep shine beneath.' },
      { title: 'Textile Fiber Odor Retention', text: 'Spills lead to bacterial odors deep in the seats. 我们 use antimicrobial steam extraction and ozone treatment to physically eliminate odors and kill 99.9% of cabin bacteria.' },
      { title: 'Hydrophobic Failure', text: 'When water doesn\'t "bead" on your paint, it means it\'s vulnerable. 我们 apply military-grade ceramic coatings that provide a 9H hardness layer, acting as a secondary shield for your car.' }
    ],
    technicalApproach: `We follow the "Total-Isolation" detailing protocol. This includes a 3-stage decontamination (Chemical, Clay, and Iron) before any polishing begins, ensuring that no microscopic grit is ground into your paint during the restoration phase.`
  },
  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    description: 'Mobile on-site car battery testing and replacement.',
    shortDescription: 'Fast, professional car battery help anywhere you are.',
    icon: '🔋',
    image: '/images/services/battery.jpg',
    features: ['diagnostics', 'battery swap', 'alternator check', 'terminal cleaning', 'warranty registration'],
    commonProblems: [
      'Car won\'t start or only makes a clicking sound',
      'Difficulty starting the engine in extreme heat',
      'Dimming of headlights and dashboard console',
      'Corrosion buildup on battery terminals',
      'Aging battery beyond its 18-24 month life'
    ],
    serviceBenefits: [
      'On-site delivery and installation',
      'Testing of your charging system included',
      'High-quality GCC-spec batteries',
      'Professional recycling of old units'
    ],
    relatedTerms: ['dead battery help', 'car power fix', 'mobile battery shop', 'alternator test'],
    expertiseSection: `The intense heat of the Middle East is the #1 enemy of car batteries, often causing them to fail without warning. Our battery specialists provide a mobile diagnostic service that determines if your problem is a dead battery, a faulty alternator, or a parasitic power drain. We stock only high-performance, desert-spec batteries with high Cold Cranking Amps (CCA), ensuring your vehicle starts reliably even after being parked in the sun for hours.`,
    solutionsIntro: `Don't be stranded by a dead battery. Our mobile units arrive within minutes to test your vehicle\'s electrical health and, if necessary, provide a seamless on-site replacement with the correct battery for your specific vehicle make and model.`,
    detailedProblems: [
      { title: 'Internal Sulfation from Heat', text: 'High temperatures speed up chemical reactions inside the battery, leading to early failure. 我们 use digital conductance testers to measure the actual health of your battery, not just the voltage.' },
      { title: 'Alternator Charging Inefficiency', text: 'A new battery will die if your car isn\'t charging it. 我们 perform a technical load-test on your alternator with every battery swap to ensure your entire charging system is healthy.' },
      { title: 'Terminal Resistance', text: 'Acid corrosion on terminals blocks power flow. 我们 use technical steel cleaning and apply "Corrosion-Inhibitor" gel to all new installations, ensuring 100% conductivity for every start.' }
    ],
    technicalApproach: `We follow the "Continuous-Power" protocol during replacement. By using a memory-saver during the swap, we ensure your car\'s computer, radio settings, and security systems never lose power, preventing annoying resets or technical glitches.`
  },
  {
    slug: 'hvac-repair',
    name: 'HVAC Repair',
    description: 'Expert diagnostics and repair for complex heating, ventilation, and air conditioning systems.',
    shortDescription: 'Restore your home\'s climate control with expert HVAC troubleshooting.',
    icon: '🌡️',
    image: '/images/services/hvac-repair.jpg',
    features: ['system diagnostics', 'refrigerant balance', 'circuit board repair', 'motor replacement', 'ductwork inspection'],
    commonProblems: [
      'Total system failure during extreme temperature peaks',
      'Inconsistent cooling across different rooms or zones',
      'Frozen evaporator coils causing airflow blockage',
      'Faulty control boards leading to erratic system behavior',
      'Compressor short-cycling and thermal overload'
    ],
    serviceBenefits: [
      'Specialized engineering-level diagnostics',
      'Precision cooling restoration',
      'Energy consumption optimization',
      'Emergency rapid-response availability'
    ],
    relatedTerms: ['central ac fix', 'hvac troubleshooting', 'air handler repair', 'packaged unit service'],
    expertiseSection: `HVAC systems in the Middle East represent peak engineering for extreme environments. Unlike standard air conditioners, these integrated systems manage large-scale ventilation, humidity, and temperature across entire buildings. Our HVAC specialists are trained in the physics of thermal transfer and the complexities of variable refrigerant flow (VRF). We treat your HVAC system as a singular, living organism, ensuring that every sensor, motor, and relay is perfectly calibrated to maintain a stable, healthy indoor climate regardless of the external desert conditions.`,
    solutionsIntro: `We provide a technical lifecycle approach to your home's climate. From the initial multi-point diagnostic test to the precise repair of multi-stage compressors and electronic expansion valves, our mission is to restore factory-spec performance to your system.`,
    detailedProblems: [
      { title: 'Electronic Expansion Valve (EEV) Failure', text: 'When the EEV fails, the cooling cycle is disrupted. We use digital manometers and manufacturer-level software to recalibrate or replace these valves, ensuring perfect refrigerant flooding of the coils.' },
      { title: 'Variable Frequency Drive (VFD) Glitches', text: 'VFDs control motor speeds to save energy. Electrical surges can damage these sensitive drives. Our team specializes in VFD diagnostics and modular component replacement to restore smooth, silent energy-efficient operation.' },
      { title: 'Duct Static Pressure Issues', text: 'Hidden leaks or blockages in ductwork can "choke" your HVAC system. We perform static pressure audits to identify airflow resistance, ensuring every room in your property receives the exact volume of cooled air it was designed for.' }
    ],
    technicalApproach: `Our technical protocol involves a "Total-System Load Analysis." We measure the amperage of every motor and the temperature differential across every coil. By documenting these specs before and after repair, we provide a technical guarantee that your system is operating at its maximum thermodynamic efficiency.`
  },
  {
    slug: 'hvac-installation',
    name: 'HVAC Installation',
    description: 'Engineering-grade installation for central and industrial HVAC systems.',
    shortDescription: 'Professional setup of high-capacity climate control systems.',
    icon: '🏗️',
    image: '/images/services/hvac-installation.jpg',
    features: ['heat load calculation', 'ductwork design', 'unit positioning', 'control wiring', 'system commissioning'],
    commonProblems: [
      'Undersized systems failing to reach set temperatures',
      'Excessive duct noise due to poor airflow design',
      'Inadequate insulation leading to condensation in ceilings',
      'Improper commissioning leading to high utility bills',
      'Unit vibration causing structural resonance noise'
    ],
    serviceBenefits: [
      'Custom-engineered system sizing',
      'Enhanced long-term energy efficiency',
      'Silent and balanced airflow',
      'Full manufacturer warranty compliance'
    ],
    relatedTerms: ['central cooling setup', 'ductwork installation', 'hvac engineering', 'new build ac system'],
    expertiseSection: `Installing a modern HVAC system is a complex integration of mechanical, electrical, and structural engineering. In the GCC, getting the installation right is the difference between a comfortable home and a constant maintenance headache. Our installation teams focus on the "Aero-Thermal" balance of your property. We don't just put boxes on roofs; we calculate the cubic-feet-per-minute (CFM) needs of every room, design low-resistance duct paths, and ensure that the primary units are mounted with industrial-grade vibration isolation to protect your building's structural integrity.`,
    solutionsIntro: `From a luxury villa to a commercial office floor, we manage the entire HVAC journey. Our process begins with a technical heat-load audit and ends with a comprehensive commissioning report, ensuring every component from the thermostats to the dampeners is functioning as a unified system.`,
    detailedProblems: [
      { title: 'Incorrect Return-Air Ratios', text: 'If your system can\'t breathe in, it can\'t blow out. We technically size all return-air plenums to ensure there is no stress on the blower motor, extending your system\'s life by years.' },
      { title: 'Condensate Management Failures', text: 'Large HVAC units produce liters of water every hour. We install redundant, primary, and secondary drain systems with water-level safety switches to ensure your interior ceilings never suffer from leaks.' },
      { title: 'Refrigerant Line Sizing', text: 'Incorrect pipe diameters cause oil-return issues and compressor burnouts. We technically calculate every pipe run and use nitrogen-purged brazing to ensure a "clean-bore" internal finish for maximum reliability.' }
    ],
    technicalApproach: `We follow the SMACNA standards for all ductwork and ASHRAE guidelines for system commissioning. Every installation includes a "Performance-Validation" test, where we measure the actual airflow at every vent using a calibrated air-balancing hood, guaranteeing uniform comfort in every corner of your property.`
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    description: 'Advanced blockage removal and restorative pipeline cleaning.',
    shortDescription: 'Clear deep-seated blockages and restore full flow to your drains.',
    icon: '🌊',
    image: '/images/services/drain-cleaning.jpg',
    features: ['hydro-jetting', 'camera inspection', 'snaking', 'grease removal', 'root cutting'],
    commonProblems: [
      'Sluggish drainage in kitchens and bathrooms',
      'Foul sewage odors emanating from floor drains',
      'Recurrent blockages despite previous snake attempts',
      'Backflow of wastewater during heavy appliance use',
      'Accumulation of calcified sand and grease in pipes'
    ],
    serviceBenefits: [
      'Total restoration of pipe diameter',
      'Non-invasive diagnostic technology',
      'Removal of biological and mineral odors',
      'Prevention of expensive pipe bursts'
    ],
    relatedTerms: ['pipe jetting', 'sewer cleaning', 'drain unblocking', 'clogged pipe fix'],
    expertiseSection: `Drainage systems in the Middle East face unique challenges, specifically from fine desert sand and the high-fat content typical of local residential usage. Standard "unblocking" often only creates a small hole in a clog. Our drain cleaning specialists use "Total-Clearance" technology, including high-pressure hydro-jetting that scours the internal walls of your pipes, removing the scale, grease, and sand that standard tools leave behind. We view drainage as a critical infrastructure that requires technical cleaning to prevent structural contamination.`,
    solutionsIntro: `We provide a forensic approach to your plumbing. Our team uses fiber-optic CCTV cameras to see inside your walls and floors, identifying the exact location and nature of a blockage before deploying high-capacity cleaning equipment to restore your system to factory-fresh flow rates.`,
    detailedProblems: [
      { title: 'Saponified Grease Buildup', text: 'Cooking oils cool and turn to rock-hard soap inside pipes. We use technical degreasing agents and high-temperature jetting to liquefy these deposits, flushing them through to the main sewer line.' },
      { title: 'Sand and Silt Intrusion', text: 'Desert sand enters drains through patio washing or minor pipe cracks. This grit is heavy and settles in bends. We use high-flow "Scouring Nozzles" that lift these heavy particles and carry them out of your system.' },
      { title: 'Biological Biofilm Odors', text: 'Bacteria thrive in the sludge on pipe walls. Our cleaning process doesn\'t just move the clog; it sanitizes the pipe interior, eliminating the source of unpleasant gas and smells in your home.' }
    ],
    technicalApproach: `We follow the "Visual-Verification" protocol. Every deep-clean begins and ends with a CCTV inspection. This allows us to prove that the pipe is 100% clear of debris and to identify any structural weaknesses or cracks that might cause future issues, providing you with total transparency.`
  },
  {
    slug: 'water-leak-detection',
    name: 'Water Leak Detection',
    description: 'Precision non-invasive identification of hidden water leaks.',
    shortDescription: 'Find hidden leaks behind walls and under floors without breaking tiles.',
    icon: '🔍',
    image: '/images/services/leak-detection.jpg',
    features: ['acoustic testing', 'thermal imaging', 'trace-gas detection', 'pressure testing', 'moisture mapping'],
    commonProblems: [
      'Unexplained increase in water monthly utility bills',
      'Peeled paint or damp spots on walls and ceilings',
      'Mold growth in closets or behind furniture',
      'Hissing sounds behind walls when everything is off',
      'Low water pressure throughout the entire property'
    ],
    serviceBenefits: [
      'Saves money on water and repair costs',
      'Prevents structural damage and wood rot',
      'Avoids unnecessary "guesswork" demolition',
      'High-precision pinpointing technology'
    ],
    relatedTerms: ['hidden leak fix', 'dampness detection', 'pipe leak finder', 'water loss audit'],
    expertiseSection: `Hidden leaks are the "silent killer" of property value in our region. Water escaping behind a wall can rot wood, short-circuit electrical lines, and attract pests long before it becomes visible. Our leak detection specialists are trained in the physics of sound and thermal radiation. We use medical-grade technology—from ultrasonic sensors that hear the "hiss" of a pinhole leak to high-resolution thermography that sees the "cold-shadow" of water where it shouldn't be—ensuring we find the problem with zero original damage to your home.`,
    solutionsIntro: `We provide a detective-level audit of your property's water system. Our technicians perform a logical "Isolation-Test" of every plumbing loop, narrowing down the search area until our high-frequency sensors can pinpoint the exact tile or wall section that needs attention.`,
    detailedProblems: [
      { title: 'Slab-Leak Propagation', text: 'Leaks under the concrete floor can wash away the foundation. We use acoustic "Ground-Mics" to hear through 30cm of concrete, finding the leak before it causes structural settling.' },
      { title: 'HVAC Condensate Secondary Leaks', text: 'Hidden drain lines for AC units often crack behind walls. We use flexible borescope cameras to inspect these secondary lines, preventing mold and drywall destruction.' },
      { title: 'Pressure-Drop Failures', text: 'Tiny leaks in the main supply line won\'t show as "wet" immediately but will waste thousands of liters. We perform precision "Static-Pressure" tests to give you a definitive health check of your entire system.' }
    ],
    technicalApproach: `We follow the "Pinpoint-Before-Pulse" protocol. We never start a repair until we have verified the leak's location using at least two different technical methods (e.g., Acoustic + Thermal). This cross-verification ensures that we only open the wall exactly where the problem lives, minimizing your restoration needs.`
  },
  {
    slug: 'water-heater-installation',
    name: 'Water Heater Installation',
    description: 'Professional setup and replacement of electric and solar water heaters.',
    shortDescription: 'Expert installation of safe and energy-efficient water heaters.',
    icon: '🚿',
    image: '/images/services/water-heater-install.jpg',
    features: ['unit selection', 'pressure valve setup', 'electrical grounding', 'safe mounting', 'system testing'],
    commonProblems: [
      'Illegal electrical wiring causing short-circuit risks',
      'Inadequate support for heavy ceiling-mounted tanks',
      'Corroded connections leading to early leaks',
      'Low hot water pressure due to air locks',
      'Incorrect thermostat calibration causing scaling'
    ],
    serviceBenefits: [
      'Certified and safe electrical integration',
      'Long-term tank structural security',
      'Adherence to local water safety codes',
      'Zero-leak technical guarantee'
    ],
    relatedTerms: ['new geyser setup', 'boiler installation', 'hot water system', 'heater replacement'],
    expertiseSection: `In the Middle East, water heaters are often pressurized systems installed in ceiling voids, making professional installation a matter of both safety and property protection. Our installation specialists understand the fluid-dynamics and electrical requirements of these units. We focus on "Secure-Anchoring"—ensuring that a 100kg tank is safely supported—and on the technical integration of Pressure Relief Valves (PRV). An incorrectly installed heater is a potential hazard; a professionally installed one is a silent, safe part of your home infrastructure.`,
    solutionsIntro: `We provide a full-cycle installation service, from the technical selection of the right tank capacity for your family to the final electrical certification. Our team manages the plumbing connections with high-grade flexible hoses and ensuring every joint is vacuum-sealed for long-term performance.`,
    detailedProblems: [
      { title: 'Scaling and Sediment Control', text: 'Hard water kills heaters. We technically set the thermostat to the "Golden Zone" (60°C) which prevents rapid calcium scaling while ensuring any bacteria (like Legionella) are killed.' },
      { title: 'Thermal Expansion Risk', text: 'As water heats, it expands. We install high-calibration expansion valves and, where necessary, expansion tanks to ensure your pipes don\'t "ping" or burst under the increased pressure.' },
      { title: 'Electrical Load Mismatch', text: 'Heaters draw significant current. We ensure your circuit breaker and wire gauge are perfectly matched to the unit\'s wattage, preventing the risk of cable overheating behind your walls.' }
    ],
    technicalApproach: `We follow the "Safety-Triangle" protocol for every installation: Mechanical Mounting, Electrical Grounding, and Pressure Venting. Every new unit is pressure-tested for 30 minutes at 1.5x working pressure before we sign off, ensuring zero leaks for years to come.`
  },
  {
    slug: 'lighting-installation',
    name: 'Lighting Installation',
    description: 'Professional installation of indoor, outdoor, and smart lighting systems.',
    shortDescription: 'Transform your home with expert lighting design and setup.',
    icon: '💡',
    image: '/images/services/lighting.jpg',
    features: ['chandelier mounting', 'led strip setup', 'outdoor lighting', 'dimmer install', 're-wiring'],
    commonProblems: [
      'Flickering LEDs due to driver incompatibility',
      'Overloaded circuits from high-power lighting arrays',
      'Improperly anchored heavy chandeliers posing a risk',
      'Short-circuits in outdoor lighting due to moisture',
      'Uneven light distribution and poor shadow design'
    ],
    serviceBenefits: [
      'Enhanced home atmosphere and look',
      'Energy-saving LED technology',
      'Safe handling of delicate fixtures',
      'Seamless smart-dimmer integration'
    ],
    relatedTerms: ['light fixture setup', 'garden lighting', 'smart light install', 'chandelier hung'],
    expertiseSection: `Lighting is the most powerful element of interior design, but it requires a deep technical understanding of electrical loads and color temperatures. Our lighting specialists are trained in "Luminaire-Physics." Whether you are hanging a 50kg crystal chandelier in a high-ceiling foyer or installing subtle, heat-sinked LED strips in kitchen cabinetry, we focus on the integrity of the connection and the balance of the load. We specialize in the modern transition to "Smart-Lighting," ensuring your dimmers are technically compatible with your bulbs to prevent the "buzzing" or "strobe-effects" common in amateur installations.`,
    solutionsIntro: `We provide a professional "Bright-Home" service. From the initial measurement of your ceiling's load-bearing capacity to the final technical calibration of your wall dimmers, we handle every detail to ensure your lighting is both beautiful and safe.`,
    detailedProblems: [
      { title: 'Driver and Dimmer Conflict', text: 'Most homeowners struggle with flickering LED lights. We technically audit your dimmer hardware to ensure it matches the "Leading-Edge" or "Trailing-Edge" electronics of your lamps for smooth, silent dimming.' },
      { title: 'Structural Weight Management', text: 'Hanging a heavy fixture in modern Arabian gypsum board requires back-mounting to the primary concrete slab. We use industrial-grade bolt systems that ensure your chandelier is a permanent, safe feature of your home.' },
      { title: 'Outdoor IP-Rating Failure', text: 'Garden lights die because of dew and irrigation water. 我们 use only IP65+ rated connections and specialized resin-filled junction boxes that guarantee your outdoor lights stay on throughout the humid months.' }
    ],
    technicalApproach: `We follow the "Clean-Logic" wiring protocol. This means all wiring is hidden, all fixtures are perfectly level, and all circuits are tested for "Leakage-Current" to ensure no tripping. We use specialized soft-grip tools to handle delicate glass and metal finishes, ensuring your lights are fingerprint-free and perfectly hung.`
  },
  {
    slug: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    description: 'Expert installation and balancing of indoor and outdoor ceiling fans.',
    shortDescription: 'Professional fan setup for silent and efficient air movement.',
    icon: '🌀',
    image: '/images/services/ceiling-fan.jpg',
    features: ['ceiling mounting', 'blade balancing', 'remote control setup', 'wiring', 'speed calibration'],
    commonProblems: [
      'Wobbly fans causing structural vibration noise',
      'Clicking or humming sounds from the motor',
      'Incorrect ceiling bracket support for heavy fans',
      'Low airflow due to incorrect blade pitch or height',
      'Remote control sync issues and wall switch failure'
    ],
    serviceBenefits: [
      'Silent and wobble-free operation',
      'Enhanced cooling and lower AC bills',
      'Secure mounting for high ceilings',
      'Professional electrical integration'
    ],
    relatedTerms: ['fan setup', 'electric fan install', 'wobble-free fan', 'outdoor fan expert'],
    expertiseSection: `A ceiling fan is a dynamic piece of machinery that moves thousands of times per hour. In the Middle East, they are essential for supplemental cooling, but an incorrectly installed fan can be noisy and dangerous. Our specialists focus on the "Harmonic-Balance" of the unit. We use technical weights to balance the blades, and specific high-grade fasteners that isolate the motor's vibration from your ceiling. This ensures that even on the highest speed setting, your fan remains whisper-quiet and rock-steady, providing efficient air circulation for your home.`,
    solutionsIntro: `We provide a "Silent-Air" installation service. We handle the entire technical setup, from pulling new electrical lines to mounting the heavy support brackets and performing the final 3-stage balancing protocol that guarantees a vibration-free experience.`,
    detailedProblems: [
      { title: 'Vibration and Resonance', text: 'A wobbly fan is usually caused by just 1 gram of weight difference between blades. We use digital calipers to measure blade tracking and precision weights to neutralize the wobble, protecting your ceiling from cracks.' },
      { title: 'Capacitor and Hum Management', text: 'Modern fans often hum due to electrical frequency mismatches. We technically audit your speed controller to ensure it is compatible with the "Induction-Motor" of the fan, ensuring silent operation at all speeds.' },
      { title: 'Height and Flow Dynamics', text: 'Fans installed too close to the ceiling can "starve" for air. We technically calculate the correct "Downrod" length to ensure maximum air induction and cooling effect for your specific room height.' }
    ],
    technicalApproach: `We follow the "Triple-Point" safety protocol: Every fan is secured with a secondary safety cable, all wire connections use high-temperature terminals, and the mounting bracket is pull-tested to 5x the fan's weight. This engineering-first approach guarantees both comfort and absolute safety.`
  },
  {
    slug: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Expert diagnostics and repair for all luxury and standard dishwasher brands.',
    shortDescription: 'Restore your kitchen\'s efficiency with professional dishwasher troubleshooting.',
    icon: '🍽️',
    image: '/images/services/dishwasher-repair.jpg',
    features: ['pump replacement', 'control board repair', 'leak fixing', 'spray arm cleaning', 'programming'],
    commonProblems: [
      'Dishwasher not draining or leaving stagnant water',
      'Poor cleaning performance with residue on plates',
      'Leaking from the door seal onto the kitchen floor',
      'Strange grinding or high-pitched whining noises',
      'Electronic display errors and cycle interruptions'
    ],
    serviceBenefits: [
      'Rapid on-site diagnostic service',
      'Genuine factory-approved spare parts',
      'Sanitization of the internal water system',
      'Energy and water usage optimization'
    ],
    relatedTerms: ['dishwasher fix', 'kitchen appliance repair', 'miele dishwasher service', 'bosch repair'],
    expertiseSection: `Dishwashers are sophisticated machines that combine high-temperature water management with complex electronic sensors. In the GCC, the high mineral content of the water can lead to rapid scaling in internal heaters and pumps. Our dishwasher specialists are trained in the specific mechanics of premium European and American brands. We focus on the "Hydro-Dynamic" health of the machine, ensuring that the water pressure at the spray arms and the drainage efficiency are restored to factory standards, preventing future breakdowns and ensuring consistent hygiene.`,
    solutionsIntro: `Refresh your kitchen's productivity with our professional repair team. We diagnostic everything from burnt-out heating elements to faulty control boards, providing a clear technical report and a permanent fix that saves you from the inconvenience of manual washing.`,
    detailedProblems: [
      { title: 'Circulation Pump Failure', text: 'The pump is the heart of the cleaning cycle. Limescale can cause it to sieze. 我们 use ultrasonic cleaning and high-grade replacements to ensure your dishwasher has the power to remove even the toughest food residues.' },
      { title: 'Thermal Fuse and Element Issues', text: 'If your dishes are wet and cold after a cycle, the heating system is failing. 我们 technically test the resistance of the elements and recalibrate the thermostats to ensure water reaches the 70°C required for total sanitization.' },
      { title: 'Scale-Induced Spray Blockages', text: 'Small mineral deposits block the spray arm jets. 我们 perform a deep chemical descaling of the machine\'s internal waterways, ensuring 100% water coverage during the wash cycle for a spotless finish.' }
    ],
    technicalApproach: `We follow a "Flow-Audit" protocol for every repair. We measure the intake and drainage cycles to ensure they are within the manufacturer's specified duration. Every job includes a high-temperature "Test-Run" to verify that all safety sensors and seals are operating perfectly under actual working conditions.`
  },
  {
    slug: 'oven-repair',
    name: 'Oven Repair',
    description: 'Specialized repair for electric and gas ovens, ranges, and hobs.',
    shortDescription: 'Get your kitchen back in order with expert oven and stove repair.',
    icon: '🍳',
    image: '/images/services/oven-repair.jpg',
    features: ['heating element swap', 'thermostat calibration', 'door seal replacement', 'igniter repair', 'control board fix'],
    commonProblems: [
      'Oven not heating up to the set temperature',
      'Uneven baking with hot spots or uncooked areas',
      'Broken door glass or loose hinges',
      'Self-cleaning cycle failing to engage',
      'Electrical short-circuits tripping the kitchen breaker'
    ],
    serviceBenefits: [
      'Precision temperature calibration',
      'Safety-first gas and electrical testing',
      'Home-visit diagnostic convenience',
      'Minimal kitchen disruption'
    ],
    relatedTerms: ['stove repair', 'cooker fix', 'electric oven service', 'range repair'],
    expertiseSection: `Ovens and hobs are high-power appliances where technical precision is a matter of both cooking quality and safety. Our technicians are specialized in the thermal-control systems of modern ovens, where precise resistance in the heating elements and accurate feedback from the thermostats are critical. We understand the load requirements of electrical ranges in local properties, ensuring that all internal wiring and insulation can handle the high temperatures required for consistent baking and roasting.`,
    solutionsIntro: `From a faulty convection fan to a shattered door seal, we provide a comprehensive technical fix for your cooking appliances. Our team arrives with the specialized multimeters and thermal probes needed to pinpoint the exact failure point, restoring your oven's reliability.`,
    detailedProblems: [
      { title: 'Thermostat Drift', text: 'If your cakes are burning at 180°C, your thermostat has lost calibration. 我们 use digital temperature loggers to re-sync your oven\'s computer with its actual internal heat, ensuring perfect cooking results every time.' },
      { title: 'Convection Fan Imbalance', text: 'A noisy fan leads to uneven heat distribution. 我们 replace worn-out bearings and balance the fan blades, restoring silent operation and even airflow throughout the oven cavity.' },
      { title: 'Insulation Degradation', text: 'Worn door seals allow heat to escape, damaging your kitchen cabinets and increasing power use. 我们 replace seals with high-temperature silicone gaskets that lock the heat where it belongs.' }
    ],
    technicalApproach: `We follow the "Thermal-Integrity" protocol. After every repair, we perform a 30-minute burn-in test at maximum temperature to ensure all components are stable and that there are no signs of electrical arcing or gas leaks, providing absolute safety for your family.`
  },
  {
    slug: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Expert maintenance and repair for premium refrigerators and freezers.',
    shortDescription: 'Save your groceries with rapid-response fridge and freezer repair.',
    icon: '🧊',
    image: '/images/services/fridge-repair.jpg',
    features: ['compressor repair', 'gas recharging', 'fan motor swap', 'defrost system fix', 'mainboard repair'],
    commonProblems: [
      'Fridge not cooling while the freezer remains frozen',
      'Excessive ice buildup in the freezer compartment',
      'Water leaking from the bottom of the unit',
      'Constant operational noise from back of fridge',
      'Foul odors despite thorough internal cleaning'
    ],
    serviceBenefits: [
      'Same-day emergency diagnostic visits',
      'Authentic manufacturer gas and parts',
      'Technical cooling load optimization',
      'Extended appliance operational life'
    ],
    relatedTerms: ['fridge fix', 'freezer repair', 'refilling fridge gas', 'chiller maintenance'],
    expertiseSection: `A refrigerator in the Middle East works twice as hard as its counterpart in cooler climates. The high ambient temperature means the compressor rarely stops, leading to thermal stress on the motor and the refrigerant lines. Our fridge specialists focus on "Thermodynamic-Efficiency." We check the health of the insulation, the efficiency of the condenser coils, and the precise levels of R134a or R600a gas, ensuring your unit doesn't just "stay cold" but does so with minimal energy consumption.`,
    solutionsIntro: `Don't let a faulty fridge ruin your food. Our mobile repair teams are equipped with digital manifolds and leak-sniffing technology to quickly identify if your issue is a simple sensor failure or a more complex compressor blockage, providing an immediate on-site solution.`,
    detailedProblems: [
      { title: 'Evaporator Fan Failure', text: 'If the fan stops, cold air can\'t reach the fridge section. 我们 replace these motors with high-torque units designed for continuous operation, restoring the internal air rotation immediately.' },
      { title: 'Defrost Heater Malfunction', text: 'When the defrost cycle fails, ice chokes the system. 我们 technically test the defrost timers and bi-metal sensors, replacing faulty electrical components to ensure a permanent "No-Frost" experience.' },
      { title: 'Compressor Valve Wear', text: 'An aging compressor loses the ability to pump gas. 我们 specialize in identifying "High-Side" pressure drops and can perform technical compressor swaps that include total system flushing for a factory-fresh start.' }
    ],
    technicalApproach: `We follow the "Sealed-System" protocol. Any gas work is performed with high-purity nitrogen purging to prevent internal oxidation. Every repair includes an "Efficiency-Audit," where we measure the duty-cycle of the fridge to guarantee it is cycling on and off as designed.`
  },
  {
    slug: 'washing-machine-repair',
    name: 'Washing Machine Repair',
    description: 'Professional repair for front-load and top-load laundry machines.',
    shortDescription: 'Restore your laundry routine with expert washing machine maintenance.',
    icon: '🧼',
    image: '/images/services/washing-machine-repair.jpg',
    features: ['bearing replacement', 'drain pump fix', 'door seal swap', 'electronic board repair', 'shock absorber replacement'],
    commonProblems: [
      'Machine not draining or spinning at high speeds',
      'Violent shaking and thumping during the spin cycle',
      'Water leaking from the detergent drawer or door',
      'Clothes coming out dirty or smelling of mold',
      'Error codes appearing on the digital display panel'
    ],
    serviceBenefits: [
      'On-site technical troubleshooting',
      'High-grade mechanical components',
      'Noise and vibration reduction',
      'Internal drum sanitization included'
    ],
    relatedTerms: ['washer repair', 'laundry machine fix', 'washing machine service', 'drum repair'],
    expertiseSection: `Washing machines are high-vibration appliances that handle significant mechanical loads. In our region, the combination of high-usage and hard water can lead to premature failure of the drum bearings and the heating elements. Our technicians are specialized in "Centrifugal-Balance" and electronic control logic. We focus on the structural health of the machine, ensuring the suspension systems and gaskets are in peak condition to prevent cabinet damage and leaks during high-speed operation.`,
    solutionsIntro: `From a burnt-out drain pump to a complex control board glitch, we provide a definitive technical fix for your laundry appliances. Our team arrives with the specialized tools needed to handle both the digital brains and the heavy mechanical hearts of all major washing machine brands.`,
    detailedProblems: [
      { title: 'Bearing and Spider Corrosion', text: 'Constant exposure to minerals causes the drum support to fail. 我们 perform precision bearing swaps using industrial-grade seals that guarantee another 5-10 years of silent, leak-free washing.' },
      { title: 'Drive Motor Calibration', text: 'If your machine won\'t turn, the motor brushes or the inverter board are likely gone. 我们 perform technical resistance tests to find the exact electrical failure, restoring the high-torque power needed for your laundry.' },
      { title: 'Door Gasket Mold and Leaks', text: 'Humidity in the laundry room leads to mold in the rubber seal. 我们 replace these with anti-microbial gaskets and perform a technical alignment check to ensure a 100% watertight seal.' }
    ],
    technicalApproach: `We follow the "Structural-Alignment" protocol. Every repair includes a precision leveling of the machine using digital levels to minimize vibration. We perform a full "Service-Cycle" test to check for any microscopic leaks under pressure before certifying the machine for use.`
  },
  {
    slug: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'Specialized repair for vented, condenser, and heat-pump tumble dryers.',
    shortDescription: 'Fast and safe repair for all types of laundry drying machines.',
    icon: '💨',
    image: '/images/services/dryer-repair.jpg',
    features: ['heating element swap', 'belt replacement', 'sensor cleaning', 'venting audit', 'drum motor fix'],
    commonProblems: [
      'Dryer tumbling but not producing any heat',
      'Long drying times even on high-temperature settings',
      'Squealing or scraping noises during operation',
      'Dryer shutting off early before clothes are dry',
      'Burning smell coming from the rear of the machine'
    ],
    serviceBenefits: [
      'Fire hazard prevention through lint removal',
      'Improved energy efficiency and speed',
      'Silent operation restoration',
      'Expertise in heat-pump technology'
    ],
    relatedTerms: ['tumble dryer fix', 'dryer not heating', 'laundry dryer service', 'vent cleaning'],
    expertiseSection: `Tumble dryers are high-heat appliances where maintenance is critical for safety and efficiency. Lint buildup is the #1 cause of both slowed drying times and home fires. Our dryer specialists focus on "Airflow-Dynamics" and thermal safety. We perform a total internal cleaning of the machine's ductwork and heat exchangers, ensuring your dryer can breathe effectively. We are also specialized in the delicate electronics of modern heat-pump dryers, which require technical refrigerant management to operate correctly.`,
    solutionsIntro: `Keep your laundry flowing with our professional dryer repair service. We technically audit everything from the drum drive belts to the moisture sensors, providing a permanent fix that restores the speed and efficiency of your drying cycles.`,
    detailedProblems: [
      { title: 'Thermal Cut-Out Activation', text: 'Blocked vents cause dryers to overheat and trip their safety fuses. 我们 replace these fuses and, more importantly, technically clear the blockage that caused the failure, ensuring long-term safety.' },
      { title: 'Moisture Sensor Drift', text: 'If your dryer stops when clothes are damp, the sensor is likely coated in fabric softener residue. 我们 perform a technical cleaning and recalibration of the humidity sensors, ensuring the machine "sees" the dryness level accurately.' },
      { title: 'Drive Belt Tensioning', text: 'A slipping belt causes slow rotation and uneven drying. 我们 technically align the pulleys and install high-friction belts, restoring the drum\'s ability to handle heavy, wet laundry loads silently.' }
    ],
    technicalApproach: `We follow the "Fire-Prevention" protocol. Every dryer repair includes a full internal lint-path extraction using industrial vacuums. We perform a technical airflow-meter test at the exhaust to guarantee that moisture and heat are being moved out of your home as designed.`
  },
  {
    slug: 'kitchen-appliance-installation',
    name: 'Kitchen Appliance Installation',
    description: 'Professional setup and integration of built-in and freestanding kitchen hardware.',
    shortDescription: 'Expert installation of ovens, hobs, fridges, and dishwashers.',
    icon: '🍳',
    image: '/images/services/kitchen-install.jpg',
    features: ['built-in alignment', 'electrical connection', 'plumbing integration', 'gas safety check', 'cabinet adjustment'],
    commonProblems: [
      'Built-in ovens overheating cabinets due to poor venting',
      'Dishwashers leaking because of incorrect drain levels',
      'Refrigerator doors not closing because of unlevel floors',
      'Gas hobs fitted without proper high-pressure regulators',
      'Appliance faces not aligning with kitchen cabinetry'
    ],
    serviceBenefits: [
      'Perfect aesthetic cabinet integration',
      'Certified and safe utility connections',
      'Manufacturer warranty protection',
      'Optimal appliance operational safety'
    ],
    relatedTerms: ['appliance setup', 'integrated fridge install', 'oven mounting', 'kitchen tech setup'],
    expertiseSection: `Modern kitchens are wonders of integrated technology, but they require a master-level technical installation to function safely and look seamless. Built-in appliances, in particular, require a deep understanding of "Air-Gap" requirements to prevent heat-damage to your expensive cabinetry. Our installation specialists are experts in the three technical pillars of the kitchen: Electrical load management, high-integrity plumbing, and precision cabinetry adjustment. We ensure your luxury appliances are not just "placed," but engineered into your kitchen for perfect performance.`,
    solutionsIntro: `Complete your dream kitchen with our professional installation team. From the technical mounting of integrated dishwashers and fridges to the certified connection of high-power induction hobs, we handle the entire mission with high-standards and absolute care.`,
    detailedProblems: [
      { title: 'Thermal Venting Strategy', text: 'Integrated ovens fail prematurely if they can\'t "breathe." 我们 technically audit your cabinet design and install discreet ventilation paths that allow hot air to escape, protecting both the appliance and your woodwork.' },
      { title: 'Sink-to-Dishwasher Syphoning', text: 'Incorrect plumbing leads to sink-water flowing backward into your dishwasher. 我们 install technical "High-Loop" systems that ensure wastewater only moves one way—out of your kitchen.' },
      { title: 'Load-Bearing Leveling', text: 'Heavy american-style fridges can crack floor tiles if weight isn\'t distributed. 我们 use industrial equipment to level the units perfectly, ensuring smooth door operation and silent, vibration-free performance.' }
    ],
    technicalApproach: `We follow the "Triple-Check" commissioning protocol: 1. Electrical Continuity and Load Test, 2. Hydrostatic Pressure and Leak Test, and 3. Aesthetic Alignment and Leveling. Every installation includes a comprehensive walkthrough of the appliance's technical features for the user.`
  },
  {
    slug: 'bathroom-fixture-installation',
    name: 'Bathroom Fixture Installation',
    description: 'Expert installation of premium faucets, shower systems, and sanitary ware.',
    shortDescription: 'Professional setup of luxury bathroom hardware and fixtures.',
    icon: '🚿',
    image: '/images/services/bathroom-install.jpg',
    features: ['mixer installation', 'shower system setup', 'toilet mounting', 'sealant application', 'pressure testing'],
    commonProblems: [
      'Loose faucets leading to under-counter water damage',
      'Shower valves not mixing temperature correctly',
      'Toilet seals leaking at the base and causing odors',
      'Uneven mounting of luxury vanities and mirrors',
      'Low water pressure at new high-end shower heads'
    ],
    serviceBenefits: [
      'Drip-free technical guarantee',
      'Perfect cosmetic finish and sealing',
      'Expertise in luxury designer brands',
      'Reliable structural mounting for wall-hung units'
    ],
    relatedTerms: ['tap installation', 'shower fix', 'toilet setup', 'bathroom renovation helper'],
    expertiseSection: `Luxury bathroom fixtures are high-precision technical items that demand professional installation to prevent leaks and ensure a premium user experience. Wall-hung toilets and rainfall showers, common in high-end GCC properties, require specialized structural support and internal piping that must be 100% watertight before the walls are closed. Our installation team is specialized in "Precision-Plumbing," ensuring every connection is tightened to the correct torque and every seal is applied with a tool-finished edge for a perfect, museum-quality bathroom look.`,
    solutionsIntro: `Transform your daily routine with professionally installed bathroom hardware. From the technical integration of thermostatic shower valves to the secure mounting of expensive stone vanities, we provide the localized expertise needed to ensure your bathroom is as reliable as it is beautiful.`,
    detailedProblems: [
      { title: 'Galvanic Corrosion Prevention', text: 'Mixing different metals in pipes leads to rapid leaks. 我们 use technical dielectric unions to isolate different materials, ensuring your premium fixtures last for decades, not just years.' },
      { title: 'Thermostatic Valve Calibration', text: 'Modern showers can scald or run cold if incorrectly set. 我们 technically calibrate the temperature limiters on your mixers, providing a consistent, safe, and comfortable water temperature for your family.' },
      { title: 'Structural Anchor Integrity', text: 'Wall-hung toilets put massive stress on the internal frame. 我们 use industrial-grade anchoring systems into the primary concrete slab, ensuring your luxury fixtures are rock-solid and perfectly level.' }
    ],
    technicalApproach: `We follow the "Hydro-Static" testing protocol. Every connection is tested under 1.5x working pressure for 60 minutes before we complete the job. We use only high-grade, mold-resistant neutral silicone to ensure a finish that doesn't yellow or pull away from the wall over time.`
  },
  {
    slug: 'move-in-cleaning',
    name: 'Move-In Cleaning',
    description: 'Bespoke sanitization for new residential properties to ensure a healthy home.',
    shortDescription: 'Deep technical cleaning for your new home before you move in.',
    icon: '📦',
    image: '/images/services/move-in-cleaning.jpg',
    features: ['total sanitization', 'cabinet deep-clean', 'ac vent dusting', 'tile scrubbing', 'window track clearing'],
    commonProblems: [
      'Residue from previous tenants or construction dust',
      'Lingering odors in storage areas and closets',
      'Unsanitized bathrooms and kitchen surfaces',
      'Dust accumulation in the AC and ventilation tracks',
      'Old sticker marks and stains on floors and glass'
    ],
    serviceBenefits: [
      'Peace of mind in a hygienically "reset" home',
      'Immediate readiness for your furniture',
      'Elimination of allergens and biological traces',
      'Professional internal cabinet and drawer care'
    ],
    relatedTerms: ['new home cleaning', 'pre-move sanitizing', 'entry deep clean', 'residential reset'],
    expertiseSection: `Moving into a new home should be a fresh start, not a confrontation with the previous occupant's neglect. Our move-in cleaning service is a "Technical-Hygienic Reset." We understand that while a property might look "swept," it often harbors deep-seated dust and bacteria in hidden zones. Our team focuses on the primary contact points: the inside of every kitchen cabinet, the tracks of every window, and the deep pores of the bathroom tiling. We use hospital-grade sanitizers to ensure that your family enters an environment that is biologically and visually pristine.`,
    solutionsIntro: `Prepare your sanctuary with our professional move-in team. We provide a systematic top-to-bottom scrub and sanitization of your entire property, addressing everything from the heavy dust behind appliances to the microscopic allergens trapped in your new home's ventilation.`,
    detailedProblems: [
      { title: 'Concealed Biological Residue', text: 'Previous usage leaves invisible traces in bathrooms and kitchens. 我们 use 140°C dry steam to sanitize surfaces, ensuring that every handle, tile, and shelf is 99.9% free of bacteria and old organic matter.' },
      { title: 'Duct and Vent Particle Fallout', text: 'Empty properties often have dust-heavy AC vents. 我们 perform a technical vacuuming of the vent faces and replace or deep-clean all filters, preventing "black-dust" from falling on your furniture the moment you turn on the air.' },
      { title: 'Sticker and Adhesive Removal', text: 'New or refurbished properties often have tape residue on glass and frames. 我们 use specialized citrus-based solvents that lift adhesives without scratching the surface, restoring the factory clarity of your windows.' }
    ],
    technicalApproach: `We follow the "Hygienic-Seal" protocol. This means we clean from the furthest point in the room toward the exit, ensuring no area is re-contaminated. Every job includes an ultraviolet (UV) check of the kitchen and bathroom surfaces to guarantee that our sanitization standards have been met.`
  },
  {
    slug: 'move-out-cleaning',
    name: 'Move-Out Cleaning',
    description: 'Professional "End-of-Lease" cleaning to ensure a smooth handover.',
    shortDescription: 'Restore your property to handover condition for a full deposit return.',
    icon: '🚚',
    image: '/images/services/move-out-cleaning.jpg',
    features: ['surface restoration', 'stain removal', 'deep dusting', 'sanitary cleaning', 'balcony washing'],
    commonProblems: [
      'Dust and grime behind large furniture pieces',
      'Kitchen grease buildup on walls and ceilings',
      'Limescale and mineral deposits in bathrooms',
      'Hard water stains on balcony tiles and railings',
      'Debris and dust left in closets and storage rooms'
    ],
    serviceBenefits: [
      'Maximizes your security deposit return',
      'Saves time during the stress of moving',
      'Meets landlord and agent handover standards',
      'Total property clearance and sanitization'
    ],
    relatedTerms: ['handover cleaning', 'end of lease scrub', 'tenancy cleaning', 'exit deep clean'],
    expertiseSection: `The transition out of a property requires a restorative cleaning that goes beyond daily maintenance. Landlords and management companies in the GCC have high standards for property handovers. Our move-out specialists focus on "Surface-Restoration"—lifting the grease from the kitchen walls, scrubbing the mineral stains from the shower glass, and ensuring no traces of your occupancy remain. We understand the technical requirements of a successful inspection and provide the intensive manpower needed to return the property to its "original" state.`,
    solutionsIntro: `Ensure a perfect handover with our professional exit-cleaning team. Our deep-cleansing protocol covers every square inch of the property, from the high corners of the ceilings to the deep tracks of the sliding doors, ensuring you can sign off with confidence.`,
    detailedProblems: [
      { title: 'Grease and Smoke Residue', text: 'Years of cooking leave a sticky residue on kitchen surfaces. 我们 use industrial-strength, surface-safe degreasers to restore the original texture and look of your walls, cabinets, and splashbacks.' },
      { title: 'Hard Water Calcification', text: 'Bathrooms in our region develop heavy limescale. 我们 use technical descaling agents that safely dissolve mineral crusts from faucets and glass, leaving a factory-bright finish that satisfies any inspector.' },
      { title: 'Furniture-Shadow Removal', text: 'Dust outlines where furniture once stood. 我们 use multi-stage vacuuming and damp-wiping with microfiber technology to ensure that all ghost-outlines are removed from walls and floors.' }
    ],
    technicalApproach: `We follow the "Inspection-Ready" checklist. This 100-point protocol mirrors the standards used by professional property managers. Every move-out job concludes with a "Visual-Handover" audit, where we verify that every cabinet, vent, and surface is 100% compliant with handover requirements.`
  },
  {
    slug: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    description: 'Technical deep-cleaning and degreasing for high-use kitchens.',
    shortDescription: 'Restore hygiene and sparkle to your kitchen with professional degreasing.',
    icon: '🥘',
    image: '/images/services/kitchen-cleaning.jpg',
    features: ['oven degreasing', 'cabinet sanitization', 'backsplash scrub', 'floor polishing', 'drain sanitizing'],
    commonProblems: [
      'Sticky grease film on upper cabinets and walls',
      'Burnt-on food and carbon residue inside ovens',
      'Bacteria growth in hard-to-reach corner cabinets',
      'Dull and stained stone or tile countertops',
      'Foul odors from drains and under-sink areas'
    ],
    serviceBenefits: [
      'Hygienic food preparation environment',
      'Elimination of fire-hazard grease levels',
      'Removal of stubborn cooking odors',
      'Technical care for premium stone surfaces'
    ],
    relatedTerms: ['deep kitchen scrub', 'oven cleaning service', 'kitchen sanitization', 'grease removal'],
    expertiseSection: `The kitchen is the most technically challenging room to clean due to the combination of organic proteins, lipids (grease), and high-heat surfaces. Standard wiping doesn't remove the sticky residue that attracts bacteria and pests. Our kitchen specialists focus on "Chemical-Dissolution"—using specialized, food-safe alkaline and enzymatic cleaners that break down complex grease molecules. We focus on the high-contact and high-heat zones: the hoods, the range-tops, and the interior of high-use ovens, ensuring your kitchen is not just clean, but professionally sanitized.`,
    solutionsIntro: `Bring your kitchen back to life with our intensive cleaning protocol. We provide a deep-health reset of your cooking space, addressing everything from the carbon-builded trays of your oven to the hidden dust and grease traps behind your appliances and under your cabinets.`,
    detailedProblems: [
      { title: 'High-Level Grease Saturation', text: 'Grease rises with steam and cools on high cabinets. 我们 use specialized long-reach equipment and microfiber-trapping technology to remove these layers, preventing them from becoming a fire hazard or a magnet for dust.' },
      { title: 'Countertop Etch and Stain Removal', text: 'Marble and granite countertops easily stain. 我们 use stone-safe oxygenated cleaners that penetrate the pores of the stone, lifting old stains without damaging the polish of your expensive worktops.' },
      { title: 'Internal Appliance Bio-Cleaning', text: 'The seals of dishwashers and fridges house mold. 我们 use high-pressure steam (10b bar) to flush out these seals, eliminating bacteria and odors at the source for a truly hygienic kitchen environment.' }
    ],
    technicalApproach: `We follow the "Top-Down Degreasing" sequence. This involves beginning with the extractor fans and light fixtures and working down to the floor. We use only HACCP-compliant, biodegradable chemicals that are proven safe for food-preparation areas while being effective against industrial-level grease.`
  },
  {
    slug: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    description: 'High-intensity sanitization and limescale removal for bathrooms.',
    shortDescription: 'Restore your bathroom to clinical levels of hygiene and brilliance.',
    icon: '🛀',
    image: '/images/services/bathroom-cleaning.jpg',
    features: ['limescale removal', 'grout scrubbing', 'glass polishing', 'sanitization', 'mold treatment'],
    commonProblems: [
      'Black mold in silicone seals and tile grout',
      'White mineral crust (limescale) on taps and showers',
      'Hazy finish on mirrors and glass shower enclosures',
      'Slippery floor tiles from soap scum buildup',
      'Slow-running drains with related odor problems'
    ],
    serviceBenefits: [
      'Clinical-level surface sanitization',
      'Crystal-clear glass and mirror finishes',
      'Total removal of deep-seated grout grime',
      'Prevention of permanent water-spot etching'
    ],
    relatedTerms: ['bathroom deep clean', 'shower glass polish', 'grout cleaning', 'toilet sanitizing'],
    expertiseSection: `Bathrooms in the GCC are high-humidity zones where mineral-heavy water causes rapid deterioration of surfaces. Professional bathroom cleaning is a science of "Mineral-Neutralization" and "Pathogen-Eradication." Our specialists use acidic descalers to melt away calcium and hospital-grade germicides to kill the mold and bacteria that thrive in shower tracks and drains. We don't just "wipe" the surface; we physically restore the clarity of your glass and the brightness of your grout, ensuring a space that feels fresh and safe.`,
    solutionsIntro: `Step into a perfectly sanitized bathroom with our professional cleaning team. We address the technical challenges of your washroom, from the microscopic bacteria in your drains to the stubborn limescale on your luxury fixtures, providing a restorative finish that lasts.`,
    detailedProblems: [
      { title: 'Shower Glass Calcification', text: 'Water minerals can permanently etch glass. 我们 use specialized cerium-oxide polishing compounds and mild acids to restore 100% clarity to your shower panels, removing years of hazy buildup in a single visit.' },
      { title: 'Grout Porosity and Mold', text: 'Bathroom grout absorbs dirty water like a sponge. 我们 use specialized rotary brushes and high-temperature steam to blast dirt from the grout pores, followed by an antimicrobial treatment that inhibits new mold growth.' },
      { title: 'Silicone Seal Degradation', text: 'Mold often lives UNDER the silicone. 我们 specialize in the technical removal and replacement of moldy bathroom sealant, using high-grade, neutral-cure silicone that provides a perfect, watertight, and hygienic finish.' }
    ],
    technicalApproach: `We follow the "Cross-Contamination Prevention" protocol. This involve using a dedicated color-coded bucket and cloth system used ONLY for bathrooms. Every job includes an intensive "Steam-Flush" of the drainage p-traps to eliminate the organic biofilm that causes sewer odors.`
  },
  {
    slug: 'floor-cleaning',
    name: 'Floor Cleaning',
    description: 'Specialized deep-cleaning for all residential and commercial floor types.',
    shortDescription: 'Professional floor care for wood, laminate, and stone surfaces.',
    icon: '🧹',
    image: '/images/services/floor-cleaning.jpg',
    features: ['mechanical scrubbing', 'buffing', 'stain removal', 'waxing', 'sealing'],
    commonProblems: [
      'Dull and scratched wood or laminate flooring',
      'Stubborn stains and spills on textured tiles',
      'Waxy residue buildup from incorrect home cleaners',
      'Dust accumulation in the grain of natural wood',
      'Uneven finish across high-traffic transit areas'
    ],
    serviceBenefits: [
      'Restored original floor color and shine',
      'Elimination of abrasive surface particles',
      'Protective layer against future daily wear',
      'Safe and specialized care for every material'
    ],
    relatedTerms: ['hard floor scrub', 'parquet cleaning', 'vinyl care', 'tile and grout wash'],
    expertiseSection: `Floors are the largest filter in your home, trapping hair, skin, and desert sand. Standard mopping often merely redistributes this dirt into the textured grain of the material. Our floor cleaning specialists focus on "Mechanical-Extraction"—using industrial rotary scrubbers that physically lift dirt from the microscopic low-points of your floor. Whether it's the gentle phased cleaning required for luxury parquet or the high-pressure scrubbing needed for outdoor stone, we ensure your flooring is both deep-cleaned and technically protected.`,
    solutionsIntro: `Bring back the brilliance of your floors with our professional care team. We provide a customized cleaning approach for every material, from the delicate waxing of hardwood to the intensive chemical scrubbing of industrial-grade vinyl and tile.`,
    detailedProblems: [
      { title: 'Synthetic Wax Buildup', text: 'Common supermarket floor "shines" trap dirt in layers. 我们 use technical stripping agents that safely dissolve these old layers, revealing the clean, original floor beneath for a fresh, non-sticky start.' },
      { title: 'Grain Soilage in Parquet', text: 'Dust hides in the natural texture of wood. 我们 use specialized soft-bristle cylinders and pH-neutral wood soaps that lift dirt without "raising the grain," followed by a protective nourishing oil or wax.' },
      { title: 'Textured Tile Grime', text: 'Non-slip tiles act as magnets for dirt. 我们 use high-RPM rotary machines with specialized brush-heads that penetrate the "peaks and valleys" of your tile surface, extracting dirt that manual scrubbing cannot reach.' }
    ],
    technicalApproach: `We follow the "Material-Safe" protocol. Every project begins with a pH-test of the cleaning agent against a small, inconspicuous area of your floor. We use "Low-Moisture" extraction for wood and laminate to prevent warping, and "High-Flow" rinsing for stone to ensure no chemical residue is left behind.`
  },
  {
    slug: 'tile-cleaning',
    name: 'Tile Cleaning',
    description: 'Intensive mechanical cleaning for ceramic, porcelain, and terracotta tiles.',
    shortDescription: 'Professional tile and grout restoration for a "like-new" look.',
    icon: '⬜',
    image: '/images/services/tile-cleaning.jpg',
    features: ['alkaline scrubbing', 'acidic descaling', 'grout whitening', 'steam cleaning', 'stone sealing'],
    commonProblems: [
      'Black and greasy grout lines in kitchens',
      'Orange or blue staining in bathroom grout',
      'Dull finish on previously high-gloss porcelain tiles',
      'Stubborn residue after home renovation projects',
      'Shadowing on non-slip or textured flooring'
    ],
    serviceBenefits: [
      'Instant brightened look for entire rooms',
      'Hygienic removal of deep-seated dirt',
      'Protection of the grout structural integrity',
      'Streak-free and residue-free professional finish'
    ],
    relatedTerms: ['grout whitening', 'tile scrub', 'porcelain polish', 'floor deep wash'],
    expertiseSection: `Tiles are incredibly durable, but their surface texture and the porous nature of grout make them vulnerable to deep-seated staining. Professional tile cleaning is a three-stage mechanical process: 1. Chemical Emulsification to break down oils, 2. Manual Grout Agitation to lift particulates, and 3. High-Pressure Rinsing to extract the slurry. Our specialists understand the difference between ceramic and porcelain, ensuring the correct technical agents are used to brighten your floors without damaging the protective glaze or the cementitious grout.`,
    solutionsIntro: `Restore the architectural beauty of your tiled spaces with our intensive cleaning service. From the large-format porcelain of your living room to the decorative terracotta of your outdoor patio, we provide a definitive, technical deep-clean that manual mopping simply cannot match.`,
    detailedProblems: [
      { title: 'Grout Porosity Staining', text: 'Grout is a magnet for dirty water. 我们 use specialized alkaline grout-cleaners that stay "active" for 15 minutes, allowing us to scrub the dirt out of the pores and restore the original color of your line work.' },
      { title: 'Construction Residue (Haze)', text: 'New tiles often have a "foggy" look from grout residue. 我们 use technical acidic haze-removers that safely dissolve this mineral film, revealing the true color and depth of your new porcelain investment.' },
      { title: 'Textured Surface Shadowing', text: 'Sand traps in the texture of non-slip tiles. 我们 use planetary rotary machines that provide a "multi-directional" scrub, reaching the low points of the tile and clearing the shadows caused by embedded dust.' }
    ],
    technicalApproach: `We follow the "Extract-and-Neutralize" protocol. This means we never just "push" water around. We use industrial wet-vacuums to physically remove the dirty water from your home, followed by a clear-water rinse that ensures your floors aren't sticky and wont attract new dirt quickly.`
  },
  {
    slug: 'marble-cleaning',
    name: 'Marble Cleaning',
    description: 'Specialized safe cleaning for natural stone like marble, travertine, and onyx.',
    shortDescription: 'Expert, stone-safe cleaning to preserve the elegance of your marble.',
    icon: '💎',
    image: '/images/services/marble-cleaning.jpg',
    features: ['stone-safe washing', 'stain lifting', 'hand-polishing', 'impregnating sealing', 'honing'],
    commonProblems: [
      'Etch marks from acidic cleaners or fruit juices',
      'Dullness caused by improper "wax" products',
      'Yellowing of white marble due to moisture trap',
      'Oily stains from kitchen spills or skin contact',
      'Fine scratches that inhibit the natural stone depth'
    ],
    serviceBenefits: [
      'Preservaton of delicate natural stone surfaces',
      'Mirror-like reflective finish restoration',
      'Invisible protection against oil and water',
      'Professional expertise from stone specialists'
    ],
    relatedTerms: ['stone care', 'marble wash', 'travertine cleaning', 'natural stone polish'],
    expertiseSection: `Marble is a "living" material—it is porous, soft, and chemically reactive. Using a standard floor cleaner on marble is a technical error that can cause permanent "etching" (chemical burns). Our marble cleaning specialists are trained in the chemistry of calcium carbonate. We use only pH-neutral, stone-specific agents and specialized soft-pad machinery to lift dirt while protecting the stone's natural luster. We focus on the "Aesthetics of Depth," ensuring that your marble doesn't just look "clean," but transparently healthy and elegantly reflective.`,
    solutionsIntro: `Maintain the premium look of your natural stone with our specialist care team. We provide a restorative service that addresses the unique needs of marble, travertine, and granite, protecting your luxury investment while ensuring every slab shows its natural character best.`,
    detailedProblems: [
      { title: 'Chemical Etch-Mark Restoration', text: 'Acidic spills create dull spots on marble. 我们 use high-grit technical "Diamond-Pads" to gently hone the surface and restore the high-gloss polish without the use of damaging waxes or coatings.' },
      { title: 'Organic and Oil Pigmentation', text: 'Coffee and oil can sink deep into the stone. 我们 use specialized technical "Poultices"—chemical pastes that draw the stain OUT of the stone over 24 hours, restoring the purity of the marble\'s color.' },
      { title: 'Loss of Reflectivity', text: 'Dust acts as an abrasive that "hazes" the stone. 我们 perform a technical crystallization process that chemically re-hardens the top layer of the stone, creating a durable and highly reflective shield against daily traffic.' }
    ],
    technicalApproach: `We follow the "Zero-Acid" protocol. Every project includes the application of a high-standard "Impregnating Sealer." This invisible chemical sinks into the stone's pores rather than sitting on top, providing a breathable barrier that prevents liquids from soaking in and causing future stains.`
  },
  {
    slug: 'building-cleaning',
    name: 'Building Cleaning',
    description: 'Comprehensive external and internal cleaning for residential towers and villas.',
    shortDescription: 'Professional building maintenance for a prestige property appearance.',
    icon: '🏢',
    image: '/images/services/building-cleaning.jpg',
    features: ['facade washing', 'cladding cleaning', 'lobby maintenance', 'stairwell care', 'external glass wash'],
    commonProblems: [
      'Sand and environmental soot buildup on facades',
      'Bird droppings and stains on external cladding',
      'Dull and dusty public lobbies and corridors',
      'Limescale on external architectural glass',
      'Accumulation of debris in communal areas'
    ],
    serviceBenefits: [
      'Enhanced property curb appeal and value',
      'Prevention of permanent facade staining',
      'Professional environment for residents and guests',
      'Expertise in high-access cleaning technology'
    ],
    relatedTerms: ['facade cleaning', 'commercial building wash', 'tower maintenance', 'cladding wash'],
    expertiseSection: `Building cleaning in the GCC is a massive logistical and technical challenge due to high levels of airborne sand and industrial particulates. A building's facade is its primary protection, but when neglected, environmental pollutants can chemically bond with the cladding, causing permanent damage. Our building cleaning specialists are experts in "Access-Technology"—from rope access to reach-and-wash systems. We focus on the restoration of architectural surfaces, using specialized detergents that cut through desert grime while being safe for modern aluminum, glass, and stone building exteriors.`,
    solutionsIntro: `Maintain your property's prestige with our professional building care team. We provide a full-spectrum cleaning service that covers everything from the high-glamour Lobby to the technical external facade, ensuring your building reflects the high standards of its occupants.`,
    detailedProblems: [
      { title: 'Aluminum Cladding Pitting', text: 'Salt and sand create micro-craters in modern cladding. 我们 use high-standard non-abrasive detergents and soft-filament brushes to remove these pollutants, preserving the building skin and preventing expensive replacements.' },
      { title: 'External Architectural Glass Hazing', text: 'High-altitude windows collect mineral-heavy dust. 我们 utilize "Pure-Water" technology—de-ionized water that dries spotless—ensuring your building\'s glass is crystal clear without the need for manual squeegeeing.' },
      { title: 'Common Area Odor Management', text: 'Trash chutes and corridors trap smells. 我们 use industrial-grade biological odor neutralizers and deep-extraction carpet cleaning in hallways to ensure a fresh, luxury atmosphere throughout the entire property.' }
    ],
    technicalApproach: `We follow the "Safety-Height" protocol for all external works. This involves a total rigging audit and the use of specialized pulleys and harnesses. Every building project includes a technical "Surface-Assessment" to ensure that our cleaning methods are perfectly matched to the facade material, whether it is Kynar-coated metal, glass, or stone.`
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    description: 'Restorative cleaning and dust removal after renovations or new builds.',
    shortDescription: 'Remove construction dust and residue for a move-in ready home.',
    icon: '🏗️',
    image: '/images/services/post-construction-cleaning.jpg',
    features: ['silica dust removal', 'paint splatter cleaning', 'window track clearing', 'cabinet interior scrub', 'grout haze removal'],
    commonProblems: [
      'Fine white (silica) dust covering every surface',
      'Paint splatters on flooring and window frames',
      'Cement and grout residue on new tile work',
      'Stickers and protective films left on glass and appliances',
      'Debris and sawdust inside new kitchen cabinets'
    ],
    serviceBenefits: [
      'Safe removal of hazardous construction dust',
      'Reveals the true quality of your renovation',
      'Saves time for immediate move-in or handover',
      'Professional care for brand-new luxury materials'
    ],
    relatedTerms: ['builders clean', 'renovation cleaning', 'snagging clean', 'after build scrub'],
    expertiseSection: `Post-construction cleaning is a "Technical-Recovery" operation, not a standard cleaning. Construction dust is primarily made of abrasive silica and gypsum, which can scratch luxury surfaces if wiped incorrectly. Furthermore, new buildings are full of "Chemical-Residuals"—from grout haze on tiles to old adhesive on windows. Our specialists focus on "Safe-Extraction"—using HEPA-certified industrial vacuums and damp-wiping techniques that capture dust rather than spreading it. We understand how to reveals the true beauty of your new renovation while protecting your brand-new investments from abrasive damage.`,
    solutionsIntro: `Complete your building journey with our professional post-construction team. We provide a multi-stage technical clearing that takes your property from a "Work-Site" to a "Finished-Home," addressing everything from the fine dust in your AC ducts to the stubborn paint marks on your new baseboards.`,
    detailedProblems: [
      { title: 'Microscopic Silica Infiltration', text: 'Building dust penetrates every crack and vent. 我们 use industrial high-filtration vacuums (HEPA) to extract dust from walls, ceilings, and inside electrical boxes, ensuring your air quality is safe before you move in.' },
      { title: 'Grout and Cement Haze Removal', text: 'New tiles often look "foggy" because of mineral residue. 我们 use specialized technical acids that dissolve the cement haze without damaging the new tile glaze, restoring the vibrant color of your flooring.' },
      { title: 'Adhesive and Film Removal', text: 'New windows and appliances come covered in protective plastic that leaves a sticky film. 我们 use technical heat-guns and citrus solvents to safely peel and clean these surfaces, ensuring your home is crystal clear.' }
    ],
    technicalApproach: `We follow the "3-Stage Builders Clean": 1. Rough-Clear (debris removal), 2. Detail Clean (dust and splatter removal), and 3. Handover Polish (shine and sanitization). Every project includes a technical "Snag-Spotting" report, where we notify you of any scratches or damages we find while cleaning, helping you with your final contractor handover.`
  },
  {
    slug: 'rodent-control',
    name: 'Rodent Control',
    description: 'Specialized elimination and exclusion of rats and mice in residential and commercial units.',
    shortDescription: 'Professional rodent elimination and structural proofing for your property.',
    icon: '🐀',
    image: '/images/services/rodent-control.jpg',
    features: ['strategic baiting', 'mechanical trapping', 'entry-point sealing', 'activity monitoring', 'sanitization'],
    commonProblems: [
      'Gnawed electrical wires posing a fire hazard',
      'Scratching sounds in ceilings and wall voids',
      'Droppings found in food storage areas and kitchen cabinets',
      'Damage to soft furniture, upholstery, and cables',
      'Potential spread of biological pathogens and parasites'
    ],
    serviceBenefits: [
      'Total elimination of active rodent populations',
      'Structural fortification against future re-entry',
      'Prevention of expensive electrical and property damage',
      'Hygienic cleanup of contaminated nesting sites'
    ],
    relatedTerms: ['rat elimination', 'mice control', 'rodent proofing', 'pest exclusion'],
    expertiseSection: `Rodent infestations in GCC urban environments often concentrate in the cooler, hidden structural voids of villas and commercial complexes. Unlike standard insect control, rodent management is a game of "Animal-Psychology" and "Structural-Engineering." Rats and mice are highly intelligent and suspicious of new objects. Our specialists focus on "Total-Exclusion"—identifying every microscopic gap in your building's envelope—and using a combination of covert baiting and mechanical trapping that bypasses their natural caution, ensuring a rodent-free environment without damaging your property's aesthetics.`,
    solutionsIntro: `Reclaim your property's safety with our professional rodent management team. We provide a multi-phase technical response that addresses both the immediate population and the root causes of the infestation, ensuring your home or business remains secure and hygienic.`,
    detailedProblems: [
      { title: 'Electrical and Data Cable Damage', text: 'Rodents have teeth that never stop growing, forcing them to gnaw on hard plastic. 我们 specialize in identifying "Hot-Zones" in your electrical rooms and ceilings, providing professional cable-protection and non-toxic deterrents to prevent catastrophic failures.' },
      { title: 'Pathogen-Rich Nesting Sites', text: 'Rodent waste is a serious health hazard. 我们 perform technical "Bio-Cleans" of attics and laundry rooms, extracting contaminated insulation and using hospital-grade sanitizers to neutralize viruses and bacteria left behind by the pests.' },
      { title: 'Entry-Point Vulnerability', text: 'A mouse can fit through a gap the size of a pen. 我们 use industrial-grade exclusion materials—from stainless steel mesh to copper wool and specialized sealants—that rodents cannot gnaw through, creates a permanent physical barrier for your home.' }
    ],
    technicalApproach: `We follow the "Integrated-Rodent-Management" (IRM) protocol. This involve a logically phased approach: 1. Forensic Inspection to find nesting sites, 2. Knock-down of the population using safe, secure bait stations, and 3. Total-Exclusion sealing. Every job includes a 14-day follow-up to verify zero activity.`
  },
  {
    slug: 'ant-control',
    name: 'Ant Control',
    description: 'Precision elimination of ant colonies and professional baiting systems.',
    shortDescription: 'Kill the colony at its source with targeted expert ant control.',
    icon: '🐜',
    image: '/images/services/ant-control.jpg',
    features: ['colony identification', 'baiting technology', 'perimeter barrier', 'nest destruction', 'prevention advice'],
    commonProblems: [
      'Ant trails in kitchen areas and food preparation zones',
      'Damage to electrical outlets from nesting activity',
      'Painful bites from desert fire ants in gardens',
      'Structural damage from carpenter ants in wood trim',
      'Recurrent infestations despite using retail sprays'
    ],
    serviceBenefits: [
      'Elimination of the queen and the entire nest',
      'Safe application around children and pets',
      'Long-lasting residual protection barriers',
      'Expert identification of the specific ant species'
    ],
    relatedTerms: ['ant nest removal', 'kitchen ant fix', 'fire ant treatment', 'colony elimination'],
    expertiseSection: `Ants in the Middle East are highly adaptive, moving from the heat of the garden into the moisture of your kitchen. Standard "spray" treatments often only kill 5% of the ants you see, causing the rest of the colony to split and relocate (budding). Our ant control specialists focus on "Trophallaxis"—the natural food-sharing behavior of ants. We use high-precision gel baits and non-repellent liquid barriers that the ants carry back to the heart of the nest, effectively poisoning the queen and ending the colony cycle forever without the need for intensive fumes.`,
    solutionsIntro: `End the trail of ants in your home with our professional elimination team. We provide a targeted technical approach that focuses on the specific biology of your infestation, whether it's sugar-seeking ghost ants or wood-damaging carpenter ants, ensuring a permanent and safe solution.`,
    detailedProblems: [
      { title: 'Colony Splitting (Budding)', text: 'Aggressive retail sprays can make an ant problem worse. 我们 use technical "Non-Repellent" chemistry that prevents the colony from sensing danger, ensuring the treatment is shared throughout the entire social structure for a total collapse.' },
      { title: 'Moisture-Track Infiltration', text: 'Ants follow water lines behind your walls. 我们 specialize in locating these hidden "Super-Highways," injecting professional-grade dusts and gels into wall voids where they can reach the source of the infestation directly.' },
      { title: 'Garden Nest Migration', text: 'Desert ants migrate indoors during extreme heat. 我们 establish a technical "Perimeter-Shield" around your villa or building, using weather-resistant granules that neutralize nests before they can reach your doors and windows.' }
    ],
    technicalApproach: `We follow the "Identify-Target-Eliminate" protocol. We begin by identifying the specific nutritional needs of the colony (protein vs. sugar) and match our technical baits accordingly. We use "Transfer-Effect" technology, ensuring that a single treated ant can eliminate hundreds of its nest-mates, providing total control with minimal chemical exposure.`
  },
  {
    slug: 'mosquito-control',
    name: 'Mosquito Control',
    description: 'Integrated larvae management and adult mosquito reduction for gardens and pools.',
    shortDescription: 'Enjoy your outdoor space with professional mosquito reduction.',
    icon: '🦟',
    image: '/images/services/mosquito-control.jpg',
    features: ['larviciding', 'thermal fogging', 'ULV spraying', 'breeding site removal', 'natural repellents'],
    commonProblems: [
      'Painful bites and itchy welts during cooler months',
      'Mosquito breeding in stagnant water or irrigation runoff',
      'Difficulty enjoying gardens and patios at dusk',
      'Risk of mosquito-borne diseases like Dengue',
      'Infiltration of mosquitoes through open doors and windows'
    ],
    serviceBenefits: [
      'Dramatic reduction in mosquito population',
      'Safer outdoor environment for children',
      'Targeted treatment of breeding "hotspots"',
      'Eco-friendly and sustainable control methods'
    ],
    relatedTerms: ['mosquito fogging', 'mosquito larvae kill', 'garden pest spray', 'outdoor pest control'],
    expertiseSection: `Mosquito management in our region requires a dual-pronged technical approach: Biological Larviciding and Strategic Fogging. Adult mosquitoes are only the "symptom;" the real problem lives in stagnant water found in AC drainage, planter pots, and irrigation puddles. Our specialists are trained in "Hydro-Biological" control, using non-toxic bacterial agents (BTI) that kill larvae without harming pets or birds. Combined with ULV (Ultra-Low Volume) misting during peak activity hours, we significantly reduce the mosquito pressure on your property, allowing for comfortable outdoor living.`,
    solutionsIntro: `Take back your garden with our professional mosquito control service. We provide a comprehensive audit of your property to eliminate breeding sites and deploy specialized technical treatments that protect your family from the annoyance and risks of mosquito activity.`,
    detailedProblems: [
      { title: 'AC Condensate Breeding', text: 'Hidden puddles from AC units are the #1 mosquito source in cities. 我们 use technical larvicide pucks that remain active for 30 days, ensuring even the smallest water source cannot produce a new generation of pests.' },
      { title: 'Dense Foliage Harboring', text: 'Mosquitoes hide under leaves during the heat of the day. 我们 use specialized "Mist-Blowers" that coat the underside of your garden plants with a micro-thin residual barrier, neutralizing adult mosquitoes when they land to rest.' },
      { title: 'Dusk and Dawn Activity Spikes', text: 'Mosquitoes are most active when the wind drops. 我们 provide scheduled technical fogging using "Cold-Fog" technology that stays suspended in the air longer, providing a protective curtain of control during your family\'s peak outdoor hours.' }
    ],
    technicalApproach: `We follow the "Integrated Outdoor Protection" (IOP) protocol. This involving 1. Source Reduction (draining water), 2. Larviciding (killing the young), and 3. ULV Misting (killing adults). We use only WHO-approved, low-toxicity chemicals that are safely formulated for use in residential gardens and public spaces.`
  },
  {
    slug: 'fly-control',
    name: 'Fly Control',
    description: 'Specialized elimination and exclusion of houseflies and fruit flies.',
    shortDescription: 'Professional fly management for hygienic kitchens and living spaces.',
    icon: '🪰',
    image: '/images/services/fly-control.jpg',
    features: ['UV light traps', 'baiting stations', 'drain treatment', 'exclusion mesh', 'surface residual'],
    commonProblems: [
      'Constant presence of flies in kitchens and dining areas',
      'Hygiene risks in food preparation zones',
      'Fruit fly infestations in laundry and kitchen drains',
      'Unsightly fly spotting on walls and ceilings',
      'Difficulty controlling flies in large open commercial spaces'
    ],
    serviceBenefits: [
      'Improved indoor hygiene and food safety',
      'Discreet and effective electronic control',
      'Elimination of fly breeding sites in drains',
      'Prevention of fly-borne bacterial transmission'
    ],
    relatedTerms: ['housefly elimination', 'fruit fly fix', 'drain fly control', 'electric fly killer'],
    expertiseSection: `Flies are more than a nuisance; they are biological vectors for bacteria. In the Middle East, the heat can accelerate the fly lifecycle, turning a few individuals into an infestation in days. Our fly control specialists focus on "Structural-Sanitization" and "Bio-Active" control. We address the root cause—usually organic buildup in kitchen drains or waste areas—using enzymatic foam that dissolves fly breeding sites. Combined with discreet, high-attractant UV light traps and strategic pheromone baiting, we provide a 24/7 technical shield for your residential or commercial property.`,
    solutionsIntro: `Ensure a fly-free environment with our professional management team. We provide a multi-layered technical approach that targets both searching adults and developing larvae, ensuring your kitchen and living areas remain clean and professionally protected.`,
    detailedProblems: [
      { title: 'Drain-Biofilm Breeding', text: 'Fruit and drain flies live in the "slime" inside pipes. 我们 use specialized microbial foam that "eats" the organic buildup in your drains, physically removing the only place these flies can lay their eggs.' },
      { title: 'Attractant-Logic Failures', text: 'Standard traps often attract more flies IN than they kill. 我们 use technical "Interception-Mapping" to place UV traps and baits where they intercept flies BEFORE they reach your food or dining tables, ensuring effective, discreet control.' },
      { title: 'Entry-Point Pressure', text: 'Flies enter through air currents. 我们 provide technical advice and installation of "Air-Curtains" and high-grade mesh for commercial and residential exits, creating a physical barrier that works even when doors are open.' }
    ],
    technicalApproach: `We follow the "Sanitation-First" protocol. We identify the specific attractants in your environment and use a combination of residual surface treatments and discreet electronic monitors. Every service includes a technical audit of your waste management practices to ensure long-term, sustainable fly reduction.`
  },
  {
    slug: 'villa-painting',
    name: 'Villa Painting',
    description: 'High-end interior and exterior painting for luxury residential villas.',
    shortDescription: 'Transform your home with premium, professional villa painting.',
    icon: '🏠',
    image: '/images/services/villa-painting.jpg',
    features: ['exterior weather-shield', 'interior luxury finishes', 'crack repair', 'furniture protection', 'color consulting'],
    commonProblems: [
      'Fading and peeling of exterior paint due to intense sun',
      'Visible cracks in internal walls from structural settling',
      'Uneven texture and "roller-marks" from previous jobs',
      'Dust and paint splatters on floors and furniture',
      'Dampness and bubbling on lower wall sections'
    ],
    serviceBenefits: [
      'Enhanced architectural beauty and value',
      'Protection against the harsh desert climate',
      'Smooth, museum-quality wall finishes',
      'Professional protection of your personal belongings'
    ],
    relatedTerms: ['house painting', 'luxury villa decor', 'exterior wall coating', 'interior repaint'],
    expertiseSection: `Painting a luxury villa in the GCC requires a deep understanding of material science and environmental protection. For exteriors, we use "Solar-Reflective" technology—coatings that bounce UV rays away to keep your home cooler. For interiors, we focus on the "Level-5" finish: perfectly smooth walls achieved through multi-stage sanding and high-end acrylic paints. Our specialists are trained in the technicalities of "Substrate-Preparation"—ensuring that every crack is structurally filled and every surface is primed—so that your new color isn't just a layer, but a permanent, beautiful part of your home.`,
    solutionsIntro: `Your villa is your sanctuary. Our professional painting team provides a museum-grade finish for both your interior living spaces and your exterior facade, using premium, localized paint systems that stand up to the heat while providing an elegant, high-definition look.`,
    detailedProblems: [
      { title: 'Thermal Expansion Cracks', text: 'The desert heat makes buildings "move," causing hairline cracks. 我们 use technical elastomeric fillers that stretch and contract with your walls, ensuring a smooth finish that won\'t re-crack in the summer peaks.' },
      { title: 'UV-Induced Pigment Loss', text: 'Cheap paint turns yellow or chalky within a year. 我们 use high-chroma, UV-stable pigments specifically formulated for the Middle East, guaranteeing that your villa\'s color remains vibrant and rich for years to come.' },
      { title: 'Poor Surface Adhesion', text: 'Dust is the enemy of paint. 我们 follow a technical "Clean-Room" preparation protocol, washing and de-dusting every surface before applying industrial-grade primers that ensure your paint never bubbles or peels.' }
    ],
    technicalApproach: `We follow the "Total-Protection" protocol. This involves a rigorous 2-day preparation phase where all floors, furniture, and fixtures are sealed in heavy-duty plastic and specialized tape. We use "Airless-Spray" technology for high-access exterior areas and "Swiss-Grade" rollers for interiors to guarantee a streak-free, perfect finish.`
  },
  {
    slug: 'apartment-painting',
    name: 'Apartment Painting',
    description: 'Fast, professional repainting for residential apartments and penthouses.',
    shortDescription: 'Refresh your apartment with high-quality, efficient painting.',
    icon: '🏢',
    image: '/images/services/apartment-painting.jpg',
    features: ['fast-track delivery', 'low-odor paints', 'scuff removal', 'ceiling whitening', 'edge precision'],
    commonProblems: [
      'Scuffed and dirty walls from daily family life',
      'Dull and yellowed ceilings from AC condensation',
      'Visible "patching" marks on walls from old nail holes',
      'Paint smell lingering for days in enclosed spaces',
      'Messy edges around light switches and baseboards'
    ],
    serviceBenefits: [
      'Instant modernization of your living space',
      'Minimal disruption to your daily routine',
      'Breathable, low-VOC air quality for your family',
      'Professional attention to detail on edges and trim'
    ],
    relatedTerms: ['flat painting', 'home refresh', 'interior wall paint', 'room painting service'],
    expertiseSection: `Apartment painting is about precision in confined spaces and speed of execution. We understand the logistical needs of apartment living, including building management approvals and the need for a "Low-Impact" workspace. Our specialists use only low-VOC (Volatile Organic Compound), eco-friendly paints that allow you to sleep in your home the same night we finish. We focus on "Edge-Precision"—ensuring that the lines between your walls, ceilings, and expensive woodwork are razor-sharp, providing an instantly modern and high-quality feel to your home.`,
    solutionsIntro: `Transform your apartment in just 24-48 hours with our professional refresh team. We provide a systematic, clean-work experience that addresses everything from the scuff marks in your hallway to the dull finish in your bedrooms, restoring your home's brightness and style.`,
    detailedProblems: [
      { title: 'Ambient Odor and VOC Exposure', text: 'Traditional paints release gases for weeks. 我们 exclusively use technical "Green-Certified" paints that have zero odor, ensuring your apartment remains safe and comfortable for children and sensitive individuals immediately.' },
      { title: 'Ceiling "Shadow" Buildup', text: 'AC vents create gray dust patterns on ceilings. 我们 use technical high-opacity "Ceiling-White" that resists dust adhesion, ensuring your apartment feels taller and brighter for longer.' },
      { title: 'Door and Window Frame Bleed', text: 'Amateur painters often get wall color on wood trim. 我们 use professional-grade "Blue-Tape" and specialized angled brushes to achieve technical precision on all transitions, ensuring a factory-perfect look for your skirting and frames.' }
    ],
    technicalApproach: `We follow the "Rapid-Reset" protocol. Our teams are sized to finish a standard 2-bedroom apartment in a single day. This involve a logically phased workflow: 1. Morning masking and repair, 2. Mid-day high-opacity coating, and 3. Afternoon de-masking and deep-cleaning, leaving you with nothing but a beautiful new home.`
  },
  {
    slug: 'gypsum-ceiling-installation',
    name: 'Gypsum Ceiling Installation',
    description: 'Professional installation of decorative and plain gypsum board ceilings.',
    shortDescription: 'Expert gypsum ceiling design and installation for modern interiors.',
    icon: '🏗️',
    image: '/images/services/gypsum-ceiling.jpg',
    features: ['cove lighting design', 'bulkhead installation', 'moisture-resistant panels', 'acoustic treatment', 'fire-rated boards'],
    commonProblems: [
      'Sagging or wavy ceiling surfaces from poor framing',
      'Visible cracks at the joints between gypsum boards',
      'Gypsum boards damaged by humidity in bathrooms',
      'Uneven light distribution in decorative coves',
      'Inadequate support for heavy chandeliers or AC units'
    ],
    serviceBenefits: [
      'Enhanced home aesthetics with modern lighting',
      'Seamless, perfectly flat ceiling finishes',
      'Improved thermal and acoustic insulation',
      'Professional integration of AC, lights, and speakers'
    ],
    relatedTerms: ['drywall ceiling', 'pop ceiling design', 'plasterboard install', 'false ceiling fix'],
    expertiseSection: `Modern gypsum ceilings are the "Fifth Wall" of your interior design, housing critical infrastructure like lighting and AC. A poor installation leads to sagging and visible cracks that ruin a room's aesthetic. Our specialists focus on "Structural-Leveling"—using laser-aligned galvanized steel frames that ensure the ceiling is perfectly flat across any span. We use specialized moisture-resistant (Green) boards for wet areas and fire-rated (Pink) boards for kitchens, ensuring your decorative ceiling is as safe and durable as it is beautiful.`,
    solutionsIntro: `Elevate your home's architecture with our professional gypsum installation team. From the technical design of shadow-gap coves to the structural mounting of high-capacity bulkheads, we provide a precision-engineered finish that transforms your interior space.`,
    detailedProblems: [
      { title: 'Differential Expansion Cracking', text: 'Heat causes gypsum boards to expand, leading to cracks at the joints. 我们 use technical fiber-tape and high-flex jointing compounds that absorb this movement, ensuring your ceiling remains perfectly seamless for life.' },
      { title: 'Cove Light "Hot-Spotting"', text: 'Poorly built bulkheads cause uneven light "blobs" on the ceiling. 我们 technically calculate the depth and angle of every lighting cove to ensure a smooth, architectural wash of light that highlights your home\'s design.' },
      { title: 'Plenum Dust and AC Leaks', text: 'Ceiling voids can trap dust and hide water leaks. 我们 install technical "Access-Panels" exactly where your AC service points are, ensuring your beautiful ceiling never needs to be broken for future maintenance.' }
    ],
    technicalApproach: `We follow the "Grid-Stability" protocol. We use a 40cm x 40cm hanger spacing, which is 20% denser than the industry standard, to prevent any risk of sagging over time. Every ceiling is checked with a 2-meter straight-edge and a digital laser level before the first layer of paint is applied, guaranteeing a museum-quality finish.`
  },
  {
    slug: 'false-ceiling-installation',
    name: 'False Ceiling Installation',
    description: 'Expert installation of grid-based and modular ceiling systems for offices and homes.',
    shortDescription: 'Professional modular and grid ceiling setup for easy access and utility.',
    icon: '🧱',
    image: '/images/services/false-ceiling.jpg',
    features: ['60x60 grid setup', 'acoustic tile install', 'access panel mounting', 'integration of utilities', 'PVC paneling'],
    commonProblems: [
      'Misaligned grid lines that look unprofessional',
      'Stained or sagging ceiling tiles from old leaks',
      'Difficulty accessing pipes or AC units above the ceiling',
      'Poor sound insulation in noisy office environments',
      'Grid systems that are not level or well-supported'
    ],
    serviceBenefits: [
      'Easy access to electrical and plumbing systems',
      'Superior acoustic and sound-dampening qualities',
      'Fast and clean installation with minimal downtime',
      'Durable and cleanable surfaces for commercial use'
    ],
    relatedTerms: ['grid ceiling', 'suspended ceiling', 'acoustic tiles', 'office ceiling setup'],
    expertiseSection: `False ceilings (suspended ceilings) are the industry standard for commercial and high-utility residential spaces like laundry rooms and kitchens. They provide a critical "Utility-Corridor" while offering superior acoustic performance. Our specialists focus on "Grid-Precision"—using laser-guided cross-tees to ensure a perfectly rectangular and level support system. We utilize specialized acoustic tiles with high NRC (Noise Reduction Coefficient) ratings to create quiet, professional environments, ensuring that while your utilities are hidden and accessible, your space remains calm and aesthetically tidy.`,
    solutionsIntro: `Optimize your commercial or residential utility space with our professional suspended ceiling team. We provide a high-spec grid and tile system that integrates seamlessly with your lighting and AC, providing the accessibility and acoustic control your property needs.`,
    detailedProblems: [
      { title: 'Acoustic Leakage (Flanking)', text: 'Sound travels through the ceiling void between offices. 我们 install technical "Acoustic-Barriers" above the grid lines, significantly reducing noise transfer and ensuring privacy for your meetings and daily work.' },
      { title: 'Grid-System Deflection', text: 'Heavy lights can cause the ceiling grid to "dip" over time. 我们 use specialized industrial "Independent-Hangers" for all fixtures, ensuring that no weight is placed on the grid itself, keeping your ceiling lines perfectly straight.' },
      { title: 'Tile Discoloration and Moisture', text: 'Stagnant air causes standard tiles to yellow or sag. 我们 provide technical moisture-resistant "Vinyl-Faced" or "Metal" tiles for high-humidity zones like kitchens and server rooms, ensuring a permanent, wipe-clean finish that stays bright white.' }
    ],
    technicalApproach: `We follow the "Precision-Alignment" protocol. Every grid is squared using the Pythagorean theorem, ensuring exactly 90-degree corners across large areas. We use a "Double-Wire" hanger system on all perimeter tracks to provide maximum stability during building vibrations or AC startup, guaranteeing a silent and secure ceiling for years.`
  },
  {
    slug: 'lawn-mowing',
    name: 'Lawn Mowing',
    description: 'Technical lawn care and precision mowing for healthy green turf.',
    shortDescription: 'Professional lawn mowing and edge trimming for a perfect garden.',
    icon: '🚜',
    image: '/images/services/lawn-mowing.jpg',
    features: ['height-adjusted cutting', 'edge strimming', 'mulching', 'fertilization sync', 'debris removal'],
    commonProblems: [
      'Yellowing of grass from cutting too short (scalping)',
      'Uneven lawn height and "ragged" grass blade tips',
      'Overgrown edges around flower beds and walkways',
      'Thatch buildup inhibiting water penetration',
      'Increased weed growth in poorly maintained turf'
    ],
    serviceBenefits: [
      'Dense and healthy green lawn growth',
      'Enhanced curb appeal for your property',
      'Reduction in lawn diseases and pests',
      'Professional finish on all garden transitions'
    ],
    relatedTerms: ['grass cutting', 'turf care', 'lawn maintenance', 'garden mowing'],
    expertiseSection: `Lawn mowing in the Middle East is a technical discipline of "Stress-Management." Because of the high heat, cutting grass too low (below 5cm) exposes the soil and roots to the sun, causing immediate yellowing and "scalping." Our specialists focus on the "One-Third" rule—never removing more than one-third of the blade height in a single pass. We use specialized, high-lift mowers with razor-sharp blades that provide a "clean-cut" rather than a tear, preventing moisture loss and ensuring your lawn remains a vibrant, healthy green even in the peak of summer.`,
    solutionsIntro: `Maintain a championship-standard lawn with our professional mowing team. We provide a systematic care routine that addresses the biological needs of your turf, from the precise height of the cut to the technical "boxing" of the edges, ensuring your garden is always guest-ready.`,
    detailedProblems: [
      { title: 'Blade-Tear and Dehydration', text: 'Dull mower blades tear grass, creating a "white-tip" look that leads to disease. 我们 use precision-ground blades and high-RPM machines that slice cleanly, ensuring the grass heals quickly and maintains its moisture levels.' },
      { title: 'Edge Erosion and "Creep"', text: 'Grass often invades your beautiful patios and flower beds. 我们 use industrial vertical edgers to create a technical "Deep-Grove" transition, providing a sharp, permanent visual line that defines your garden\'s architecture.' },
      { title: 'Nitrogen Cycle Management', text: 'Removing all clippings can deplete soil nutrients. 我们 use "Mulching-Technology" to finely chop clippings and return them to the soil, providing a natural technical boost to your lawn\'s nitrogen levels and reducing water needs.' }
    ],
    technicalApproach: `We follow the "Variable-Height" cutting protocol. We adjust our mower settings based on the current temperature and the specific species of your grass (e.g., Paspalum vs. Bermuda). Every job includes a full "Debris-Extraction" of the pathways using high-velocity blowers, leaving your entire exterior spotless.`
  },
  {
    slug: 'tree-trimming',
    name: 'Tree Trimming',
    description: 'Expert pruning and structural trimming for health and safety of property trees.',
    shortDescription: 'Professional tree pruning and shaping for safety and beauty.',
    icon: '🌳',
    image: '/images/services/tree-trimming.jpg',
    features: ['crown thinning', 'deadwood removal', 'structural pruning', 'fruit-tree care', 'palm tree grooming'],
    commonProblems: [
      'Overgrown branches touching house walls or roofs',
      'Internal "dead-zones" attracting pests and disease',
      'Structural imbalance posing a risk during windstorms',
      'Reduced fruit yield from unpruned citrus or mango trees',
      'Palm tree fronds becoming a fire and pest hazard'
    ],
    serviceBenefits: [
      'Improved tree health and longevity',
      'Protection of property structures and AC units',
      'Enhanced sunlight penetration to garden lawns',
      'Prestige aesthetic look for your landscaping'
    ],
    relatedTerms: ['tree pruning', 'palm trimming', 'garden branch cut', 'arborist help'],
    expertiseSection: `Tree trimming is a "Correctional-Biology" service that requires an understanding of growth nodes and sap flow. In our region, palms and ornamental trees grow rapidly but can quickly become "heavy" and dangerous. Our specialists focus on "Crown-Thinning"—selectively removing branches to allow air and light to pass through the tree, which reduces the "Sail-Effect" during desert winds and prevents branch snapping. We use technical pruning tools that make clean "Collar-Cuts," ensuring the tree heals its own wounds and remains a healthy, beautiful feature of your property.`,
    solutionsIntro: `Protect your home and your landscape with our professional tree care team. We provide a structural audit of your larger greenery, addressing everything from the dead fronds on your palms to the invasive branches over your pool, ensuring your trees are both safe and symmetrical.`,
    detailedProblems: [
      { title: 'Structural "Sail-Effect"', text: 'Dense trees act like sails in the wind, pulling on the roots and damaging garden walls. 我们 use technical thinning methods to reduce the wind resistance of the canopy by up to 30%, ensuring your trees stay standing during seasonal gusts.' },
      { title: 'Pest-Harboring Deadwood', text: 'Old, dry branches are breeding grounds for borers and wasps. 我们 perform a forensic "Deadwood-Audit," removing all non-productive material back to the healthy growth, which redirecting the tree\'s energy to vibrant new leaves.' },
      { title: 'Palm-Crown Infestation', text: 'Palm trees are vulnerable to the Red Palm Weevil. 我们 perform an intensive technical grooming of the "crown" (the heart of the palm), removing the old fiber and treating it with protective agents that prevent catastrophic structural failure from the inside out.' }
    ],
    technicalApproach: `We follow the "Zero-Spike" climbing protocol to prevent wounding the trunk of your trees. We use specialized, high-reach telescoping saws and follow the ANSI A300 pruning standards. Every project includes a technical "Balance-Check" to ensure the weight of the tree is even, preventing future leaning or root-stress.`
  },
  {
    slug: 'irrigation-system-installation',
    name: 'Irrigation System Installation',
    description: 'Design and setup of high-efficiency drip and sprinkler irrigation systems.',
    shortDescription: 'Expert irrigation setup for water-saving and healthy plants.',
    icon: '💧',
    image: '/images/services/irrigation-install.jpg',
    features: ['drip line setup', 'smart controller install', 'sprinkler positioning', 'leak testing', 'zonal programming'],
    commonProblems: [
      'Uneven watering leading to "dry-spots" and plant loss',
      'High water bills from inefficient or leaky systems',
      'Manual watering taking up hours of your free time',
      'Clogged emitters from sand and mineral deposits',
      'Irrigation timers that are too complex to program'
    ],
    serviceBenefits: [
      'Up to 50% reduction in garden water usage',
      'Consistent, hands-free health for your garden',
      'Automatic adjustment for seasonal heat changes',
      'Invisible, underground technical plumbing'
    ],
    relatedTerms: ['garden watering system', 'drip irrigation', 'sprinkler setup', 'irrigation timer install'],
    expertiseSection: `Irrigation in the Middle East is the literal "Life-Support" system of your property. Without technical precision, you are either drowning your plants or burning your money. Our specialists focus on "Xeriscape-Engineering"—designing systems that deliver water directly to the root zone via pressurized emitters, minimizing evaporation. We specialize in "Smart-Irrigation"—installing controllers that connect to local weather data to skip watering during humidity spikes or rain, ensuring your garden gets exactly the volume of water it needs to thrive in the desert.`,
    solutionsIntro: `Stop wasting water and start enjoying a greener garden. Our professional installation team provides a high-efficiency plumbing network for your landscape, from the technical zonal-valves to the precision drip lines, ensuring every plant is perfectly hydrated 24/7.`,
    detailedProblems: [
      { title: 'Evaporative Loss Management', text: 'Standard sprinklers lose 40% of water to the wind and sun before it hits the ground. 我们 install technical "Sub-Surface" drip lines that deliver water under the mulch, ensuring every drop is absorbed by the roots of your hedge and flower beds.' },
      { title: 'Hydraulic Pressure Drops', text: 'Long irrigation runs often result in low pressure at the end. 我们 technically size the "Header-Pipes" and use pressure-compensating emitters that guarantee the first plant receives the same water volume as the last one, 100 meters away.' },
      { title: 'Solenoid and Valve Failures', text: 'Sand in the lines can cause valves to stick "Open," leading to flooding and massive bills. 我们 install industrial-grade filtration systems (120 mesh) at the main source, protecting the sensitive electronic valves and ensuring a zero-leak experience.' }
    ],
    technicalApproach: `We follow the "Zonal-Hydration" protocol. We separate your garden into zones based on plant water needs (Cactus vs. Grass vs. Flowers). Every installation includes a 24-hour "Pressure-Dwell" test to guarantee there are no microscopic leaks behind your walls or under your lawn before we backfill the trenches.`
  },
  {
    slug: 'artificial-grass-installation',
    name: 'Artificial Grass Installation',
    description: 'Professional supply and installation of high-standard synthetic turf systems.',
    shortDescription: 'Get a perfect green lawn all year round with no water needed.',
    icon: '⛳',
    image: '/images/services/artificial-grass.jpg',
    features: ['ground excavation', 'base layer compaction', 'weed barrier setup', 'seam joining', 'silica sand infill'],
    commonProblems: [
      'Wavy or uneven grass surfaces from poor base work',
      'Visible seams and edges that look "fake" or peel up',
      'Poor drainage leading to "puddling" and odors',
      'Grass "matting" down and losing its realistic look',
      'Weeds growing through the synthetic turf'
    ],
    serviceBenefits: [
      'Zero water costs and zero mowing needed',
      'Perfectly green look in 50°C summer heat',
      'Safe, soft surface for children and pets',
      'Durable and high-drainage technical design'
    ],
    relatedTerms: ['synthetic turf', 'fake grass install', 'astro turf garden', 'no-mow lawn'],
    expertiseSection: `A high-quality artificial lawn is actually an "Engineering-System" made of three critical layers: The Sub-Base, the Drainage Blanket, and the Synthetic Fiber. In the GCC, getting the sub-base right is the difference between a lawn that lasts 10 years and one that fails in a single season. Our specialists focus on "Multi-Stage Compaction"—using crushed aggregate and fine-dust layers to create a porous, rock-solid foundation. We use high-density, "Cool-Touch" fibers that resist UV-heat, ensuring your lawn stays up to 10 degrees cooler than standard synthetic grasses.`,
    solutionsIntro: `Transform your dusty yard into a lush green oasis that stays perfect without a single drop of water. Our professional installation team provides a complete "Ground-Up" service, ensuring your synthetic turf is perfectly level, professionally seamed, and technically drained for years of use.`,
    detailedProblems: [
      { title: 'Base-Layer Subsidence', text: 'Incorrect soil preparation causes "sink-holes" in your lawn. 我们 excavate 10cm of native soil and replace it with engineered Class-5 aggregate, compacted with industrial vibration to ensure a permanent, billiard-table-flat finish.' },
      { title: 'Thermal Fiber-Bainite', text: 'Intense sun can "melt" or flatten cheap artificial grass. 我们 use specialized "C-Shaped" and "W-Shaped" fibers with high-standard UV stabilizers that act as microscopic springs, ensuring the grass stays upright and realistic even under heavy traffic.' },
      { title: 'Seam-Failure and Tripping', text: 'Weak adhesive causes grass edges to pull apart. 我们 utilize technical high-tensile "Seaming-Tape" and 2-component weather-proof adhesive that creates a molecular bond, making your lawn a single, unified surface that won\'t shift or lift.' }
    ],
    technicalApproach: `We follow the "Vertical-Drainage" protocol. Every project includes a 1.5% gradient check and the application of a 200gsm geo-textile weed barrier. After the grass is laid, we perform a technical "Power-Brushing" with specialized silica sand infill, which protects the backing from UV rays and keeps the fibers standing perfectly upright.`
  },
  {
    slug: 'pool-maintenance',
    name: 'Pool Maintenance',
    description: 'Professional water chemistry management and technical pool system care.',
    shortDescription: 'Keep your pool crystal clear and safe with expert maintenance.',
    icon: '🏊',
    image: '/images/services/pool-maintenance.jpg',
    features: ['chemical balancing', 'filter cleaning', 'pump inspection', 'brushing & vacuuming', 'leak detection'],
    commonProblems: [
      'Cloudy or "green" water from algae outbreaks',
      'Strong chlorine smell and stinging eyes/skin',
      'Loss of water level due to hidden plumbing leaks',
      'Noisy or vibrating pool pumps and motors',
      'Visible white scale (calcium) on tiles and liners'
    ],
    serviceBenefits: [
      'Bacterially safe and balanced swimming water',
      'Extended life for your pumps and heaters',
      'Crystal-clear visual clarity for your pool',
      'Professional expertise in complex salt-water systems'
    ],
    relatedTerms: ['pool service', 'swimming pool fix', 'pool cleaning', 'chlorine balance help'],
    expertiseSection: `Pool maintenance in the Middle East is a game of "Chemical-Equilibrium" under extreme UV radiation. The sun "burns" through standard chlorine in hours, leading to dangerous bacteria growth. Our specialists are trained in "Advanced-TDS" (Total Dissolved Solids) management. We don't just "add chlorine;" we balance the pH, Alkalinity, and Cyanuric Acid levels to ensure your sanitizer is technically effective. We also specialize in the maintenance of "Salt-Chlorinators" and "Variable-Speed Pumps," ensuring your pool infrastructure is operating at maximum electrical and hydraulic efficiency.`,
    solutionsIntro: `Dive into perfection with our professional pool care team. We provide a comprehensive technical service that addresses everything from the microscopic health of your water to the mechanical integrity of your filtration plant, ensuring your pool is a safe, clear, and efficient asset to your home.`,
    detailedProblems: [
      { title: 'LSI (Langelier Saturation Index) Imbalance', text: 'Imbalanced water will either "eat" your pool pipes or "dump" calcium on your tiles. 我们 use digital titration to calculate the LSI, ensuring your water is "neutral," which protecting your expensive stone tiles and internal heating elements.' },
      { title: 'Pump Impeller Cavitation', text: 'Small leaks in the pump basket cause the motor to "choke" and overheat. 我们 perform technical vacuum-testing of the suction lines, replacing high-standard gaskets and seals to ensure a silent, powerful water flow that keeps your filters working effectively.' },
      { title: 'UV-Induced Algae Resistance', text: 'Standard treatments often fail against desert algae. 我们 use technical "Phosphate-Removers" and "Poly-Quat" algaecides that starve the algae of nutrients, providing a permanent clear finish even during the hottest summer months.' }
    ],
    technicalApproach: `We follow the "Multi-Point Safety" protocol. Every visit includes a technical backup-wash of the sand filters and a check of the electrical grounding for the pool lights. We provide a digital "Water-Quality-Report" after every service, showing you the exact levels of your pool\'s chemistry and the technical actions we took to maintain it.`
  },
  {
    slug: 'water-tank-cleaning',
    name: 'Water Tank Cleaning',
    description: 'Technical deep-cleaning and sanitization of residential water storage tanks.',
    shortDescription: 'Ensure your home\'s water is safe with professional tank sanitization.',
    icon: '🛢️',
    image: '/images/services/water-tank-cleaning.jpg',
    features: ['tank draining', 'sludge removal', 'anti-bacterial scrubbing', 'float valve check', 'UV-lamp cleaning'],
    commonProblems: [
      'Accumulation of brown sludge and sand in the tank',
      'Foul odor or metallic taste in the tap water',
      'Low water pressure from clogged booster pumps',
      'Dead insects or organic matter found inside the tank',
      'Bacterial buildup (Legionella risk) in stagnant water'
    ],
    serviceBenefits: [
      'Safe and hygienic water for bathing and cooking',
      'Prevention of blockage in your home\'s internal pipes',
      'Elimination of harmful biological pathogens',
      'Optimization of booster pump performance and life'
    ],
    relatedTerms: ['tank scrubbing', 'water storage clean', 'drinking water safety', 'tank sludge removal'],
    expertiseSection: `In the GCC, nearly all residential water passes through an overhead or underground storage tank where it is exposed to significant heat. Warm, stagnant water is the perfect breeding ground for biofilm and Legionella. Our specialists focus on "Confined-Space-Sanitization"—using high-pressure 140-bar washers to remove the mineral sludge followed by an intensive spray of food-safe biocides. We treat the tank as a "Food-Grade" vessel, ensuring that every internal surface, including the float-valves and the pump intakes, is clinically clean and free of organic contamination.`,
    solutionsIntro: `Protect your family's health with our professional water tank rejuvenation. We provide a rigorous, multi-stage technical cleaning that takes your storage system from "Contaminated" to "Certified-Clean," ensuring your home's water supply is clear, odorless, and safe.`,
    detailedProblems: [
      { title: 'Biofilm and Microbial Slime', text: 'Bacteria create a protective "slime" layer that resists standard chlorine. 我们 use technical mechanical scrubbing combined with oxidizing agents that dissolve this biofilm, ensuring 100% of the bacterial colony is removed from the tank walls.' },
      { title: 'Mineral and Silt Sedimentation', text: 'Fine sand enters the tank and settles at the bottom, where it can be sucked into your pumps. 我们 use industrial "Wet-Extraction-Vacuums" to physically remove this abrasive slurry, protecting your pump seals and tap aerators from damage.' },
      { title: 'External Contamination Entry', text: 'Loose tank lids allow birds and dust to enter. 我们 specialize in technical "Lid-Sealing" and the installation of insect-proof breather vents, ensuring that once your tank is clean, it remains protected from the external environment.' }
    ],
    technicalApproach: `We follow the "Zero-Residue" protocol. This involve a logically phased workflow: 1. Total-Drainage, 2. Sludge Extraction, 3. High-Pressure Scouring, and 4. Chemical Sanitization. Every job includes a "Clear-Water Validation," where we ensure all cleaning agents are flushed 100% before the tank is returned to service.`
  },
  {
    slug: 'solar-panel-cleaning',
    name: 'Solar Panel Cleaning',
    description: 'Specialized cleaning of solar PV systems to maintain maximum energy output.',
    shortDescription: 'Increase your solar energy output with professional panel cleaning.',
    icon: '☀️',
    image: '/images/services/solar-cleaning.jpg',
    features: ['de-ionized water wash', 'soft-brushing', 'generation audit', 'thermal check', 'safety-line usage'],
    commonProblems: [
      'Significant drop in energy production due to desert dust',
      'Burn marks or "hot-spots" from localized dirt patches',
      'Scratched glass from using improper cleaning tools',
      'Limescale buildup from using hard tap water for washing',
      'Bird droppings causing chemical etching on the panel surface'
    ],
    serviceBenefits: [
      'Immediate 15-30% increase in energy efficiency',
      'Prevention of permanent cell damage from heat',
      'Optimization of your ROI on the solar system',
      'Safe cleaning from height-qualified professionals'
    ],
    relatedTerms: ['PV panel wash', 'solar maintenance', 'energy output fix', 'solar glass cleaning'],
    expertiseSection: `Solar panels are high-sensitivity glass surfaces that act as massive heat-conductors. In our dusty environment, a thin layer of sand can "choke" your efficiency by up to 30% in a single month. Our specialists focus on "Pure-Water-Technology"—using de-ionized water that has zero minerals. Cleaning with standard tap water is a technical error, as the minerals dry on the glass, creating a "white-film" that reflects light away from the cells. We use specialized "Soft-Fiber" brushes designed for the solar industry that remove grime without creating micro-scratches, preserving your panel's long-term energy potential.`,
    solutionsIntro: `Get the most out of your solar investment with our professional cleaning team. We provide a specialized "Zero-Mineral" wash for your entire installation, addressing everything from the fine dust to the baked-on organic residue that is currently stealing your clean energy.`,
    detailedProblems: [
      { title: '"Soiling-Loss" Inefficiency', text: 'Desert dust blocks solar photons from reaching the silicon. 我们 use technical flow-wash systems that lift the sand without abrasion, instantly restoring your system\'s ability to produce peak wattage during the brightest hours.' },
      { title: 'Thermal Hot-Spot Damage', text: 'A single patch of bird poop can stop a cell from producing electricity, causing it to "heat up" and eventually burn out. 我们 perform a forensic visual check to ensure every single cell is clear, preventing permanent modular failure.' },
      { title: 'Calcium Etching and Haze', text: 'Hard water leaves a "chalky" residue that is harder to remove than dust. 我们 utilize multi-stage water filtration units on our mobile vans, delivering ASTM-spec "Type-II" pure water that evaporates 100% clean, leaving your panels with a diamond-bright finish.' }
    ],
    technicalApproach: `We follow the "Zero-Thermal-Shock" protocol. We never clean solar panels during the peak heat of the day, which can crack the glass. We operate in the early morning or evening when the glass is cool. Every service includes a "Performance-Before-and-After" report, showing you the technical increase in your system\'s amperage output.`
  },
  {
    slug: 'security-camera-repair',
    name: 'Security Camera Repair',
    description: 'Specialized troubleshooting and repair for IP and analog CCTV systems.',
    shortDescription: 'Restore your property\'s surveillance with expert CCTV repair.',
    icon: '📹',
    image: '/images/services/cctv-repair.jpg',
    features: ['camera sensor fix', 'DVR/NVR repair', 'cable continuity test', 'firmware update', 'power supply swap'],
    commonProblems: [
      'Blurred or flickering video feed at night',
      'Loss of remote viewing on mobile phone apps',
      'Hard drive failure leading to loss of recordings',
      'Corrouded outdoor connectors from humidity',
      'Intermittent power loss to individual cameras'
    ],
    serviceBenefits: [
      '24/7 peace of mind with active surveillance',
      'High-definition clarity restored to your feed',
      'Secure and encrypted remote access setup',
      'Extended life for your expensive security hardware'
    ],
    relatedTerms: ['CCTV fix', 'security system service', 'camera troubleshooting', 'NVR repair'],
    expertiseSection: `Security cameras in the GCC operate in extreme outdoor heat, which leads to sensor degradation and cable enclosure failure. Our specialists are trained in "End-to-End Surveillance Engineering." We don't just "reset" the camera; we perform a technical audit of your signal-to-noise ratios and power-over-ethernet (PoE) levels. We specialize in identifying "Heat-Induced Thermal Noise" in camera sensors and provide professional-grade replacements or recalibrations that ensure your security footage is crystal clear and reliable when you need it most.`,
    solutionsIntro: `Bring your surveillance system back to its peak efficiency with our professional repair team. We provide a specialized technical diagnostic for all major IP and analog security brands, addressed everything from the physical lens integrity to the logical configuration of your recording server.`,
    detailedProblems: [
      { title: 'IR-Cut Filter Failure', text: 'If your daytime video is purple or nighttime is dark, the mechanical IR filter is stuck. 我们 specialize in the technical repair of these microscopic actuators, restoring natural color and high-definition night vision without the cost of a new camera.' },
      { title: 'Data Corruption in NVRs', text: 'Heat often causes hard drives in security recorders to "drop frames." 我们 utilize technical disk-cloning and install industrial-grade "Purple-Class" storage that is specifically engineered for 24/7 write-cycles in high-temperature environments.' },
      { title: 'Connector Oxidation', text: 'Outdoor BNC and RJ45 ports are vulnerable to humidity. 我们 use technical dielectric greases and IP67-rated waterproof junction boxes to reseal your connections, providing a permanent shield against signal loss and "ghosting" on your monitors.' }
    ],
    technicalApproach: `We follow the "Visual-Continuity" protocol. This involve testing the signal at both the camera head and the NVR to isolate the exact point of failure. Every repair includes a technical "Firmware-Hardening" to ensure your security system is protected against the latest digital vulnerabilities and unauthorized access.`
  },
  {
    slug: 'smart-home-installation',
    name: 'Smart Home Installation',
    description: 'Professional setup of connected home devices like doorbells, locks, and lights.',
    shortDescription: 'Transform your lifestyle with a professionally integrated smart home.',
    icon: '📱',
    image: '/images/services/smart-home.jpg',
    features: ['smart doorbell setup', 'electronic lock install', 'voice assistant sync', 'smart thermostat setup', 'scene programming'],
    commonProblems: [
      'Smart devices frequently "dropping" from the WiFi network',
      'Complex apps that are difficult for the family to use',
      'Smart locks not aligning with older door frames',
      'Incompatibility between different smart brands (ecosystems)',
      'Security concerns regarding privacy and data access'
    ],
    serviceBenefits: [
      'Enhanced home convenience and automation',
      'Improved security with remote monitoring',
      'Energy savings through smart climate control',
      'Simplified one-app control for your entire house'
    ],
    relatedTerms: ['home tech setup', 'smart device install', 'google home setup', 'alexa integration'],
    expertiseSection: `A true smart home is not just a collection of "gadgets," but a unified technical ecosystem. The challenge in modern Middle Eastern properties is often the thick concrete walls that inhibit signal transmission. Our specialists focus on "Mesh-Logic"—ensuring your smart doorbells and locks have a rock-solid data backbone. We specialize in the technical integration of diverse brands (Matter/Thread, Zigbee, Z-Wave), ensuring that your lights talk to your motion sensors and your AC turns off when you leave, creating a seamless and intelligent living environment.`,
    solutionsIntro: `Future-proof your living space with our professional smart home team. We provide a complete "Digital-to-Physical" integration service, from the technical mounting of smart hardware to the logical programming of "Scenes" that match your daily family routines.`,
    detailedProblems: [
      { title: 'Protocol Fragmentation', text: 'Mixing different smart brands often leads to a "cluttered" setup. 我们 utilize technical "Smart-Hub" logic to bridge disparate devices, ensuring your entire home operates from a single, reliable interface for total family convenience.' },
      { title: 'Strike-Plate Misalignment', text: 'Smart locks fail if the bolt has any friction. 我们 perform a technical "Chiseling-and-Alignment" of your door frames, ensuring the electronic motor can engage effortlessly, providing both security and long battery life for your smart locks.' },
      { title: 'High-Bandwidth Congestion', text: 'Smart cameras can slow down your Netflix. 我们 configure technical "VLANs" for your IoT devices, isolating their traffic to ensure your smart home stays responsive while your home entertainment remains lightning-fast.' }
    ],
    technicalApproach: `We follow the "User-UX" protocol. We don't just install; we curate. Every project includes a technical "Signal-Strength Mapping" to ensure zero dead spots for your devices and a comprehensive 60-minute training session for all family members to ensure everyone is comfortable with the new technology.`
  },
  {
    slug: 'home-automation-installation',
    name: 'Home Automation Installation',
    description: 'Expert design and installation of integrated control systems for lights, AC, and curtains.',
    shortDescription: 'Professional whole-home automation for peak comfort and control.',
    icon: '🏠',
    image: '/images/services/automation-install.jpg',
    features: ['curtain motorization', 'centralized AC control', 'lighting scene design', 'multi-room audio', 'wall-tablet mounting'],
    commonProblems: [
      'Curtain motors failing to sync with wall switches',
      'Centralized AC control not reaching certain zones',
      'High complexity causing basic tasks to be difficult',
      'Wiring failures in older non-automated homes',
      'Lag in response time from the wall controller'
    ],
    serviceBenefits: [
      'Total control of your home climate and light',
      'Significant reduction in utility energy waste',
      'Luxury "Hotel-Style" automated experience',
      'Increased property market value and prestige'
    ],
    relatedTerms: ['knx automation', 'c4 installation', 'smart curtain setup', 'central home control'],
    expertiseSection: `Whole-home automation is the pinnacle of modern property technology, integrating heavy electrical loads like AC and curtain motors into a digital brain. This requires a "Master-Systems-Integrator" (MSI) approach. Our specialists are trained in the technicalities of high-voltage relay management and signal cabling. We focus on the "Human-Machine Interface" (HMI)—ensuring that your wall-mounted touchscreens are responsive and intuitive. We treat your home as a single automated entity, precisely calibrated to manage light, temperature, and audio for the ultimate luxury living experience.`,
    solutionsIntro: `Experience the ultimate in residential luxury with our professional automation team. We provide a bespoke technical design for your villa or penthouse, addressing everything from the motorization of your 6-meter drapes to the centralized "All-Off" control of your lighting and climate.`,
    detailedProblems: [
      { title: 'Solenoid and Relay Humming', text: 'Cheap automation panels often make a buzzing noise. 我们 use high-standard "Silent-Switching" components and isolated electrical enclosures, ensuring your home automation is felt through convenience but never heard through noise.' },
      { title: 'Curtain-Torque Stall', text: 'Heavy blackout curtains can burn out standard motors. 我们 technically calculate the "NM" (Newton Meter) requirements of your fabric and install high-torque, soft-start motors that glide silently and last for decades.' },
      { title: 'AC Control Logic Conflict', text: 'Automation systems often fight with the AC\'s internal computer. 我们 utilize technical "Gateway-Interfaces" that communicate directly with the AC manufacturer\'s protocols, ensuring precise temperature control without the risk of system errors.' }
    ],
    technicalApproach: `We follow the "Hardwired-Reliability" protocol. Whenever possible, we use physical KNX or Cat6 cabling for primary controls to ensure zero lag and 100% uptime. Every installation includes a specialized "Backup-Logic" layer, allowing manual control of your home in the event of a network outage, providing absolute peace of mind.`
  },
  {
    slug: 'wifi-installation',
    name: 'WiFi Installation',
    description: 'Professional setup of high-speed whole-home Mesh WiFi systems.',
    shortDescription: 'Eliminate dead spots with professional whole-home WiFi setup.',
    icon: '📶',
    image: '/images/services/wifi-install.jpg',
    features: ['mesh network setup', 'cat6 cabling', 'router optimization', 'signal mapping', 'security hardening'],
    commonProblems: [
      'Frequent "Dead-Zones" in bedrooms or basements',
      'Intermittent drops during video calls or gaming',
      'Slow internet speeds despite paying for a fast plan',
      'WiFi signal not reaching garden and pool areas',
      'Overheating routers leading to network crashes'
    ],
    serviceBenefits: [
      'Seamless 4K streaming in every room',
      'Stable connection for work-from-home needs',
      'Elimination of ugly trailing cables',
      'Secured network against neighbors and hackers'
    ],
    relatedTerms: ['mesh wifi setup', 'internet booster', 'dead spot fix', 'home network help'],
    expertiseSection: `Concrete and rebar construction in Middle Eastern homes is the primary enemy of WiFi signals, often acting as a "Faraday Cage" that blocks wireless waves. A standard router is technically incapable of covering a modern villa. Our specialists focus on "Architectural-Networking"—using a combination of wired Cat6 "Backhaul" and professional Mesh Access Points. We perform a technical "Heat-Map" of your property to identify signal reflection and absorption points, ensuring every square meter, from the kitchen to the poolside, has high-bandwidth, low-latency connectivity.`,
    solutionsIntro: `Get the internet speed you deserve in every corner of your home. Our professional networking team provides a high-spec WiFi infrastructure for your property, from the technical positioning of Mesh nodes to the hardwiring of critical areas, ensuring a 100% "Dead-Spot-Free" experience.`,
    detailedProblems: [
      { title: 'Inter-Floor Signal Decay', text: 'Floors are usually thick reinforced concrete. 我们 utilize technical "Ethernet-Backhauling"—running hidden cables between floors to link Mesh nodes—ensuring that your upstairs WiFi is just as fast as the main router downstairs.' },
      { title: '2.4GHz vs 5GHz Congestion', text: 'Older devices or microwaves can slow down your WiFi. 我们 perform a technical "Channel-Audit" and implement "Band-Steering," automatically pushing your modern phones and TVs onto the faster, clearer 5GHz bands for maximum speed.' },
      { title: 'Outdoor Signal Absorption', text: 'Heat-reflective glass in the UAE/KSA blocks WiFi. 我们 install technical IP67-rated outdoor access points, providing a "Wireless-Curtain" that covers your garden and patio without the need for open doors or windows.' }
    ],
    technicalApproach: `We follow the "Throughput-Validation" protocol. Every installation includes a "Stress-Test" where we measure actual download speeds in every room simultaneously. We provide a final "Network-Map" and a technical hardening guide to ensure your SSID is hidden and your WPA3 encryption is perfectly configured for your privacy.`
  },
  {
    slug: 'network-cabling',
    name: 'Network Cabling',
    description: 'Professional installation of CAT6 and Fiber Optic cables for homes and offices.',
    shortDescription: 'Get a reliable wired connection with professional network cabling.',
    icon: '🔌',
    image: '/images/services/network-cabling.jpg',
    features: ['cat6/cat7 pull', 'patch panel setup', 'wall port install', 'rack management', 'fluke testing'],
    commonProblems: [
      'Slow and unreliable WiFi for gaming or 4K video',
      'Messy cables visible in home offices and living rooms',
      'Broken or poorly terminated internet wall sockets',
      'Inadequate data points for smart TVs and consoles',
      'Difficulty connecting secondary offices or outbuildings'
    ],
    serviceBenefits: [
      'Maximum internet speed with zero lag',
      'Professional and tidy internal cable routing',
      'High-bandwidth backbone for smart home tech',
      'Permanent and reliable property data infrastructure'
    ],
    relatedTerms: ['cat6 wiring', 'data point install', 'ethernet cable pull', 'office cabling'],
    expertiseSection: `While wireless is convenient, "Wires-are-King" for high-bandwidth reliability. In modern Middle East properties, professional network cabling (Cat6/Cat7) is the essential foundation for both high-speed home offices and 4K media centers. Our specialists focus on "Cable-Integrity"—ensuring every run is isolated from electrical interference and terminated with precision. We use only 100% Copper (not CCA) cables that support 10Gbps speeds, providing a technical infrastructure that will be relevant for the next 20 years, ensuring your smart devices always have a fast, stable physical connection.`,
    solutionsIntro: `Power your digital life with a professional wired backbone. Our team provides an intensive "Invisible-Cabling" service, from the technical pulling of wires through existing conduits to the mounting of clean, aesthetic data ports in every room of your property.`,
    detailedProblems: [
      { title: 'EMI (Electromagnetic Interference)', text: 'Cables run too close to power lines will "drop" packets. 我们 use technical "Shielded-Twisted-Pair" (STP) cables and maintain specific distancing from electrical mains, ensuring your data stream remains pure and ultra-fast.' },
      { title: 'Conduit Blockage and Snagging', text: 'Many homes have blocked internal pipes. 我们 use specialized "Fiber-Snakes" and industrial lubricants to pull cables through difficult paths, ensuring we reach every room without the need for visible trunking or wall damage.' },
      { title: 'Termination Impedance Failures', text: 'Poorly crimped connectors are the #1 cause of slow internet. 我们 provide a technical "Fluke-Test" for every port, certifying that each connection meets international TIA/EIA standards for Gigabit-transfer speeds.' }
    ],
    technicalApproach: `We follow the "Zero-Downtime" logic. Every installation includes a professional "Patch-Panel" setup and labeling, making your home network as organized as a corporate data center. We wrap all our work with a "Future-Ready" guarantee, ensuring your cabling is technically compliant with the latest high-speed standards.`
  },
  {
    slug: 'packing-services',
    name: 'Packing Services',
    description: 'Professional multi-layered packing for safe residential and office relocation.',
    shortDescription: 'Protect your valuables with expert, multi-layer professional packing.',
    icon: '📦',
    image: '/images/services/packing-services.jpg',
    features: ['bubble wrap tech', 'custom wooden crates', 'luxury item care', 'labeled boxing', 'furniture wrapping'],
    commonProblems: [
      'Damaged furniture edges from poor corner protection',
      'Shattered glassware and mirrors due to inadequate padding',
      'Missing items due to unorganized or unlabeled boxes',
      'Scratched surfaces on high-gloss or wooden items',
      'Stress and physical exhaustion from DIY packing'
    ],
    serviceBenefits: [
      'Zero-damage relocation for your valuables',
      'Massive time savings during the moving process',
      'Organized and easy unpacking at your new home',
      'Professional protection for high-value artwork'
    ],
    relatedTerms: ['moving boxes', 'house packing', 'safe wrapping', 'storage packing'],
    expertiseSection: `Professional packing is a technical discipline of "Vibration-Isolation" and "Surface-Protection." In the high-heat environment of the GCC, adhesives can melt and materials can bond to your furniture if the wrong products are used. Our specialists use "Breathable-Wrapping" and multi-layered protection. We focus on the "Structural-Centering" of boxes—ensuring heavy items are on the bottom and fragile items are suspended in soft-fill—ensuring that whether your items are moving across the city or into storage, they remain in factory-perfect condition.`,
    solutionsIntro: `Take the stress out of your move with our expert packing team. We provide a comprehensive "White-Glove" service, addressing everything from the custom crating of your large-screen TVs to the delicate paper-wrapping of your most precious kitchenware and collectibles.`,
    detailedProblems: [
      { title: 'Micro-Abrasion Scratches', text: 'Dust trapped under bubble wrap acts like sandpaper. 我们 use a technical layer of acid-free "Silk-Paper" or specialized foam as the first contact layer, ensuring your luxury finishes are protected from the friction of transport.' },
      { title: 'Mechanical-Shock Failure', text: 'Televisions and monitors are vulnerable to sudden bumps. 我们 utilize "Hard-Shell" corrugated boxes and internal corner-guards that absorb 90% of transport vibration, providing a safe journey for your sensitive electronics.' },
      { title: 'Inventory Dissociation', text: 'Losing track of where things are is the chaos of moving. 我们 implement a technical "Color-Coded-Labeling" system that links every box to its specific room and shelf, making your new home setup as organized as a professional library.' }
    ],
    technicalApproach: `We follow the "Multi-Layer-Shield" protocol: 1. Soft-Wrap (scratch protection), 2. Hard-Guard (corner/impact protection), and 3. Seal-Wrap (moisture and dust protection). Every packing project includes a technical "Valuables-Audit," ensuring that your most critical items receive a dedicated high-security transport solution.`
  },
  {
    slug: 'storage-services',
    name: 'Storage Services',
    description: 'Secure, climate-controlled storage solutions for furniture and personal items.',
    shortDescription: 'Keep your belongings safe in our premium, climate-controlled storage.',
    icon: '🏢',
    image: '/images/services/storage.jpg',
    features: ['AC climate control', '24/7 CCTV monitor', 'pest-free environment', 'fire safety system', 'flexible sizing'],
    commonProblems: [
      'Furniture warping and cracking in non-AC storage',
      'Dust and pest damage in poor quality warehouses',
      'Safety concerns regarding theft and lack of monitoring',
      'Difficulty accessing items once they are in storage',
      'Mold growth on fabrics and books in humid units'
    ],
    serviceBenefits: [
      'Preservation of luxury items in peak condition',
      'Absolute security for your personal valuables',
      'Flexible space to declutter your current home',
      'Technical "Clean-Room" storage environment'
    ],
    relatedTerms: ['self storage', 'furniture storage', 'AC storage unit', 'safe warehouse'],
    expertiseSection: `Storing valuables in the Middle East is a game of "Atmospheric-Control." Without strict AC management, wood shrinks, leather cracks, and electronics fail. Our storage specialists focus on "Hygro-Thermal-Stability"—maintaining a constant 24°C and 45% humidity level. We treat our storage facility as a "Preservation-Vault," featuring multi-level digital security and integrated pest-management (IPM) protocols. We provide a technical solution for your household or business assets, ensuring that when you retrieve your items, they look and smell exactly as they did the day they went in.`,
    solutionsIntro: `Declutter your life with confidence in our high-spec storage facility. From the secure vaulting of your luxury leather sofas to the organized shelving of your business archives, we provide a clean, secure, and climate-perfect environment for all your storage needs.`,
    detailedProblems: [
      { title: 'Thermal-Stress Degradation', text: 'Heat at 50°C turns normal boxes into ovens. 我们 provide a technical "Dual-Cycle" AC system that ensures your storage unit never exceeds 25°C, providing the stable environment needed to preserve glue-joints, fabrics, and woods.' },
      { title: 'Biological Intrusion (Pests)', text: 'Standard warehouses are magnets for rodents and roaches. 我们 implement a technical "Zero-Pest-Boundary" around our warehouse, featuring air-curtains and 14-day cycle chemical barriers to ensure your personal items never become a nesting site.' },
      { title: 'Access-Log Transparency', text: 'Knowing who enters your storage space is critical. 我们 utilize "Biometric-Access-Logging" and link individual unit alarms to our 24/7 control center, giving you a technical guarantee of absolute privacy and security for your belongings.' }
    ],
    technicalApproach: `We follow the "Preservational-Staging" protocol. All items entering storage are inspected and sealed in industrial-grade dust-wrap. We utilize a "Vertical-Volume" strategy—using high-spec pallet racking that keeps your items off the floor and away from potential moisture, guaranteed by a monthly safety and hygiene audit.`
  },
  {
    slug: 'tire-replacement',
    name: 'Tire Replacement',
    description: 'Specialized mobile and workshop-based tire changes and balancing.',
    shortDescription: 'Professional tire replacement and balancing for your vehicle.',
    icon: '🛞',
    image: '/images/services/tire-replacement.jpg',
    features: ['mobile tire fitting', 'computerized balancing', 'nitrogen inflation', 'valve replacement', 'TPMS reset'],
    commonProblems: [
      'Visible cracks or bulging in tire sidewalls (dry rot)',
      'Vibration in the steering wheel at high speeds',
      'Uneven tread wear due to poor alignment or balancing',
      'Frequent loss of tire pressure (slow leaks)',
      'Bald tires with dangerously low tread depth'
    ],
    serviceBenefits: [
      'Maximum safety and grip in wet or sandy conditions',
      'Improved fuel efficiency and smoother ride quality',
      'Prevention of dangerous high-speed tire blowouts',
      'Professional nitrogen inflation for stable pressure'
    ],
    relatedTerms: ['new tires', 'tire fitting', 'wheel balancing', 'mobile tire service'],
    expertiseSection: `Tire management in the GCC is a critical safety discipline due to "Thermal-Fatigue." Surface temperatures on desert roads can reach 70°C, causing rubber to degrade and lose structural integrity. Our specialists focus on "Heat-index Validation"—ensuring your replacement tires have the correct temperature and speed ratings for our climate. We utilize computerized dynamic balancing that eliminates steering micro-vibrations and provide professional nitrogen-filling, which expands less than compressed air, ensuring your tire pressure remains stable during the extreme heat cycles of the Middle East.`,
    solutionsIntro: `Stay safe on the road with our professional tire replacement team. We provide a comprehensive technical service, addressing everything from the precision torque-setting of your wheel nuts to the digital recalibration of your TPMS (Tire Pressure Monitoring System), ensuring your vehicle is perfectly balanced and ready for the highway.`,
    detailedProblems: [
      { title: 'Asymmetric Tread-Wear patterns', text: 'Uneven wear is a sign of steering component issues. 我们 perform a forensic analysis of your old tires before replacement, identifying potential suspension or alignment technicalities and providing expert advice to ensure your new tires last as long as possible.' },
      { title: 'Sidewall "Heat-Cracking"', text: 'Intense UV rays literally "bake" the rubber on parked cars. 我们 only stock tires with the latest manufacturing dates (DOT), ensuring the rubber compounds are fresh and haven\'t spent months aging in a non-climate-controlled warehouse.' },
      { title: 'High-Speed Harmonic Vibration', text: 'Standard balancing often ignores "Road-Force" variations. 我们 utilize technicalized weight-placement strategies that address both static and dynamic imbalances, providing a "silky" smooth driving experience even at higher motorway speeds.' }
    ],
    technicalApproach: `We follow the "Multi-Point Safety-Hub" protocol. Every tire change includes a technical inspection of your brake pads and a computerized reset of your vehicle\'s service indicators. We use specialized low-profile jacks and torque wrenches calibrated to your manufacturer\'s exact specifications to protect your alloy wheels and ensure absolute mechanical safety.`
  },
  {
    slug: 'generator-repair',
    name: 'Generator Repair',
    description: 'Expert troubleshooting and maintenance for residential and commercial backup generators.',
    shortDescription: 'Restore your backup power with professional generator repair.',
    icon: '⚙️',
    image: '/images/services/generator-repair.jpg',
    features: ['engine overhaul', 'alternator testing', 'ATS panel repair', 'fuel system clean', 'load bank testing'],
    commonProblems: [
      'Generator failing to start during a power outage',
      'Excessive smoke or loud vibration during operation',
      'Automatic Transfer Switch (ATS) not clicking over',
      'Low voltage output preventing AC units from running',
      'Oil or fuel leaks in the generator enclosure'
    ],
    serviceBenefits: [
      'Guaranteed power backup for your family or business',
      'Extended engine life through technical maintenance',
      'Safe integration with your main electrical panel',
      'Reduction in noise and emissions during use'
    ],
    relatedTerms: ['generator fix', 'backup power service', 'diesel engine repair', 'genset maintenance'],
    expertiseSection: `Generator systems in our region are often dormant for months and then expected to work at 100% capacity in 45°C heat. This leads to "Fuel-Stagnation" and "Battery-Sulfation." Our specialists focus on "Standby-Readiness"—ensuring the diesel remains stable and the starting system has zero internal resistance. We specialize in the technical recalibration of "AVRs" (Automatic Voltage Regulators), which protect your sensitive home electronics from the surges common in aging generator sets, ensuring that when the grid fails, your transition to backup power is seamless and safe.`,
    solutionsIntro: `Ensure your property's power remains uninterrupted with our professional generator repair team. We provide a heavy-duty technical audit of your entire backup system, addressing everything from the injection pump's pressure to the logic of your automatic transfer switch.`,
    detailedProblems: [
      { title: 'AVR Voltage Fluctuations', text: 'Unstable voltage can fry your computers and TVs. 我们 utilize technical oscilloscope testing to calibrate your generator\'s output frequency and voltage to a "Clean-Sine-Wave" standard, ensuring it is safe for all modern household technology.' },
      { title: 'Fuel System Lacquering', text: 'Old diesel turns into a sticky "varnish" that blocks injectors. 我们 perform a technical "Fuel-Polishing" and high-pressure injector cleaning, restoring your generator\'s fuel atomization for a fast start and cleaner, more efficient combustion.' },
      { title: 'Dynamic Load Failure', text: 'A generator may run fine without load, but "stall" when the AC turns on. 我们 utilize technical "Load-Bank" testing, simulating your home\'s full electrical demand to ensure the generator can handle the "Inrush-Current" of your cooling systems without failing.' }
    ],
    technicalApproach: `We follow the "Fault-Tolerant-Audit" protocol. This involves a 21-point mechanical and electrical check on every visit. We specialize in the repair of major brands (Perkins, Cummins, Caterpillar) and provide a technical "System-Log-Review" to identify intermittent errors before they lead to a catastrophic failure during a real blackout.`
  },
  {
    slug: 'garage-door-repair',
    name: 'Garage Door Repair',
    description: 'Professional repair for automated sectional and roller-shutter garage doors.',
    shortDescription: 'Fix your garage door quickly with professional, expert repair.',
    icon: '🚗',
    image: '/images/services/garage-door-repair.jpg',
    features: ['spring replacement', 'motor logic fix', 'track alignment', 'safety sensor repair', 'remote programming'],
    commonProblems: [
      'Garage door stuck halfway or refusing to move',
      'Broken torsion springs making a loud "bang" sound',
      'Loud grinding or squeaking noises during travel',
      'Safety sensors preventing the door from closing',
      'Motor running but the door not lifting'
    ],
    serviceBenefits: [
      'Secure and reliable property entrance',
      'Silent and smooth operation of your door',
      'Prevention of property damage from door falls',
      'Convenient remote and smart phone control'
    ],
    relatedTerms: ['garage gate fix', 'roller shutter repair', 'gate motor service', 'door spring change'],
    expertiseSection: `Modern automated garage doors are complex systems of "Counter-Balance" and "Electronic-Torque" management. When a heavy door is misaligned, it puts massive stress on the motor, leading to premature failure. Our specialists focus on "Kinetic-Balance"—adjusting the torsion springs to the exact gram of resistance so the door can be opened with a single finger manually. This technical precision ensures your motor operates with zero load, providing a silent, smooth, and much safer experience for your daily life.`,
    solutionsIntro: `Restore the security and convenience of your home with our professional garage door team. We provide a precision mechanical service for all major European and American door systems, addressing everything from the replacement of high-tension springs to the logic-calibration of your safety sensors.`,
    detailedProblems: [
      { title: 'Torsion-Spring Fatigue', text: 'Springs lose their "lift" power after 5,000 cycles. 我们 install technical "High-Cycle" replacement springs that are oil-tempered and salt-bath galvanized, providing a significantly longer life and safer operation than standard retail parts.' },
      { title: 'Obstruction-Sensor "Ghosting"', text: 'Direct sunlight can trick infrared safety sensors. 我们 utilize technical "Sun-Shielding" and high-sensitivity alignment tools to ensure your door closes reliably without compromising the safety of your children or vehicles.' },
      { title: 'Drive-Train Gear Stripping', text: 'Plastic gears inside motors often strip if the door is heavy. 我们 provide a technical "Load-Sensing" recalibration, ensuring the motor stops instantly if it detects resistance, preventing gearbox damage and extending the life of your automation system.' }
    ],
    technicalApproach: `We follow the "Silent-Glide" protocol. Every repair includes a full lubrication of the rollers with specialized "Non-Drip" lithium grease and a structural check of the mounting brackets. We certify that your door's "Auto-Reverse" safety feature is technically compliant with international safety standards, ensuring zero risk of injury during operation.`
  },
  {
    slug: 'glass-repair',
    name: 'Glass Repair',
    description: 'Specialized repair and replacement for shattered windows, doors, and table tops.',
    shortDescription: 'Restore your home\'s glass with professional, high-standard repair.',
    icon: '🪟',
    image: '/images/services/glass-repair.jpg',
    features: ['double-glazing fix', 'tempered glass install', 'safety-film application', 'window seal repair', 'mirror custom cut'],
    commonProblems: [
      'Shattered or cracked window panes from impact',
      'Foggy appearance between double-glazed panels (seal failure)',
      'Loose or vibrating glass in sliding door frames',
      'Dangerous chips in glass table tops or shelves',
      'Drafts and noise entry due to poor window sealing'
    ],
    serviceBenefits: [
      'Safe and secure environment for your family',
      'Improved AC efficiency with airtight glass',
      'Restoration of property aesthetics and view',
      'Protection against UV rays and external noise'
    ],
    relatedTerms: ['window glass fix', 'broken glass help', 'glazier service', 'sliding door glass'],
    expertiseSection: `Glass in high-rise and villa properties in our region must handle massive "Thermal-Shifting." The temperature difference between a 22°C interior and a 45°C exterior creates structural stress in the glass. Our specialists are trained in "Glazing-Physics"—ensuring your replacement glass is correctly "Bedded" with high-standard silicone that allows for expansion. We specialize in the repair of "Insulated-Glass-Units" (IGU), where we restore the vacuum seal to prevent condensation and maximize your home's thermal insulation, effectively lowering your utility consumption.`,
    solutionsIntro: `Ensure the clarity and safety of your property with our professional glass repair team. From the technical replacement of shattered double-glazed units to the precision edge-polishing of your interior mirrors, we provide a clean, high-standard glazier service for every home.`,
    detailedProblems: [
      { title: 'Double-Glazed De-lamination', text: 'Foggy windows are caused by a failure in the structural sealant. 我们 utilize technical "Dual-Seal" technology for all replacements, using polyisobutylene and silicone to create a permanent moisture barrier that keeps your view crystal clear for years.' },
      { title: 'Structural-Stress Cracking', text: 'Glass can crack without impact if it\'s bound too tightly. 我们 perform a technical "Frame-Re-square" during every installation, ensuring the glass has the exact millimetric "edge-clearance" needed to survive the desert heat cycles without breaking.' },
      { title: 'Acoustic-Leakage in Sliders', text: 'Most noise enters through old glass gaskets. 我们 replace failing EPDM seals with technical "High-Compression" weather-stripping, blocking out street noise and dust while ensuring your sliding doors move with effortless precision.' }
    ],
    technicalApproach: `We follow the "Clean-Site" protocol. Every glass replacement includes the manual extraction of all old shards and the application of industrial-grade "Glass-Primers" to the frames to ensure a perfect 100% airtight bond. We provide "Safety-Tempered" glass as a standard for all low-level installations, ensuring compliance with building safety codes and protecting your children.`
  },
  {
    slug: 'locksmith-services',
    name: 'Locksmith Services',
    description: 'Specialized opening, repair, and replacement of residential and commercial locks.',
    shortDescription: 'Get expert help with lockouts and lock repairs anytime.',
    icon: '🔐',
    image: '/images/services/locksmith.jpg',
    features: ['emergency lockout help', 'lock re-keying', 'high-security install', 'door handle fix', 'master key setup'],
    commonProblems: [
      'Locked out of the home with keys inside',
      'Door handle becoming loose or falling off',
      'Key turning but the lock not engaging (internal failure)',
      'Key snapped or stuck inside the lock cylinder',
      'Lost keys to cabinets, safes, or external gates'
    ],
    serviceBenefits: [
      'Fast and non-destructive entry to your home',
      'Enhanced security with anti-pick lock systems',
      'Consolidation of keys (One key for all doors)',
      'Reliable operation of all property entrances'
    ],
    relatedTerms: ['lock fix', 'lost keys help', 'door bolt repair', 'emergency locksmith'],
    expertiseSection: `Locksmithing in a modern property is a game of "Non-Destructive-Entry" and "high-security Engineering." High-end Middle East villas often use European "Profile-Cylinders" that are vulnerable to snapping if not correctly installed. Our specialists are trained in "Forensic-Lock-Analysis"—we don't just "drill" the lock; we use precision tools to manipulate the pins and open your door without damage. We specialize in the installation of "Anti-Snap" and "Anti-Bump" high-security cylinders that provide a technical physical barrier against unauthorized entry, ensuring your home is truly your fortress.`,
    solutionsIntro: `Secure your world with our professional locksmith team. Whether you are facing a high-stress lockout or looking to upgrade your entire property's security to a "Master-Key" system, we provide a fast, technical, and highly discreet service for all your lock and key needs.`,
    detailedProblems: [
      { title: 'Cylinder-Snap Vulnerability', text: 'Budget locks stick out of the handle and can be snapped in seconds. 我们 install technical "Sacrificial-Cut" cylinders that break in a way that remains locked, ensuring that even under attack, your property remains inaccessible to intruders.' },
      { title: 'Internal Gear-Box Jamming', text: 'Multi-point locks on garden doors often fail due to sand buildup. 我们 perform a technical "Degreasing-and-Reset" of the internal mechanism, using specialized dry-lubricants that don\'t attract dust, ensuring your lock moves smoothly even in the desert wind.' },
      { title: 'Key-Pin Erosion', text: 'Old keys wear down the internal springs of the lock. 我们 provide a technical "Re-Cylindering" service, allowing you to keep your existing handles and hardware while replacing only the high-precision internal components for a "Brand-New-Lock" feel.' }
    ],
    technicalApproach: `We follow the "Zero-Damage" protocol. Our primary goal is to gain entry without damaging your expensive doors or handles. We use computerized key-cutting machines that read the "bitting" of your key with 0.01mm accuracy, ensuring every replacement key feels like the original factory-made item.`
  },
  {
    slug: 'key-duplication',
    name: 'Key Duplication',
    description: 'Precision duplication of home, office, and high-security laser keys.',
    shortDescription: 'Get a perfect copy of any home or office key quickly.',
    icon: '🔑',
    image: '/images/services/key-duplicate.jpg',
    features: ['laser-cut accuracy', 'dimple key copy', 'proximity card cloning', 'broken key reconstruction', 'high-volume supply'],
    commonProblems: [
      'Newly cut keys "sticking" or requiring force to turn',
      'Laser-cut or high-security keys that standard shops can\'t copy',
      'Lost keys with no original (copying from code or lock)',
      'Broken keys needing a duplicate to be made from two pieces',
      'Proximity cards or fobs not working for parking or home access'
    ],
    serviceBenefits: [
      'Perfect "first-time" fit for all your doors',
      'Durability of high-quality brass and steel materials',
      'Convenience of multiple backup sets for the family',
      'Fast service even for complex "dimple" security keys'
    ],
    relatedTerms: ['key copy', 'door key duplication', 'security key copy', 'fob cloning'],
    expertiseSection: `Modern high-security keys are "Precision-Machined" parts, not just simple metal shapes. A duplication error of even 0.05mm can cause a key to "drag" across internal pins, leading to an expensive lock failure. Our specialists utilize "Computerized-CNC" key-cutting technology. This technical approach allows us to "Decode" the original key\'s measurements, rather than just tracing it. By cutting a "New-Original" every time, we ensure that your duplicate has the exact same mechanical signature as the factory key, providing a buttery-smooth turn every single time you use it.`,
    solutionsIntro: `Get the perfect fit with our professional key duplication team. We provide a high-spec technical copying service for everything from your basic front door key to the latest high-security laser-cut and dimple keys, ensuring your backups are as reliable as the originals.`,
    detailedProblems: [
      { title: 'Trace-Hysteresis Friction', text: 'Tracing old keys creates "mechanical noise," making the copy slightly larger or smaller. 我们 use technical "Electronic-Probing" that digitalizes your key pattern, allowing us to cut a factory-spec replacement that eliminates sticking and dragging in the cylinder.' },
      { title: 'Low-Standard Material Fatigue', text: 'Cheap "Soft-Steel" keys can snap inside the lock. 我们 exclusively use high-standard Silca and JMA blanks from Europe, which have the correct tensile strength to handle the high-torque spring systems of Middle Eastern security locks without bending or breaking.' },
      { title: 'Electronic RFID De-Sync', text: 'Building access fobs often lose their code. 我们 utilize technical "Data-Cloning" devices that verify the signal frequency and bit-rate of your security tag, providing a 100% verified duplicate for your apartment or villa gate.' }
    ],
    technicalApproach: `We follow the "Micron-Accuracy" protocol. Every key is manually de-burred and polished after cutting to ensure there are no sharp metal fragments that could damage your lock\'s internal springs. We provide a technical "Fit-Guarantee"—if your key doesn't turn perfectly on the first try, we perform a forensic audit of your lock's pins to identify why.`
  },
  {
    slug: 'tv-wall-mounting',
    name: 'TV Wall Mounting',
    description: 'Professional mounting of all TV sizes with hidden cable management.',
    shortDescription: 'Get a sleek and secure TV setup with professional mounting.',
    icon: '📺',
    image: '/images/services/tv-mounting.jpg',
    features: ['laser alignment', 'cable trunking/concealing', 'bracket supply', 'soundbar mounting', 'drywall/concrete expertise'],
    commonProblems: [
      'TV not being level or centered on the wall',
      'Messy cables visible hanging down the wall',
      'TV feeling loose or "wobbly" on a drywall surface',
      'Incorrect height leading to "neck-strain" for the family',
      'Fear of the TV falling and injuring children or pets'
    ],
    serviceBenefits: [
      'Clean and minimalist living room aesthetic',
      'Safe and secure mounting that can\'t be pulled down',
      'Optimal viewing angles for the perfect cinema feel',
      'Space-saving design by removing bulky TV stands'
    ],
    relatedTerms: ['television install', 'bracket mounting', 'hidden cable TV', 'home cinema setup'],
    expertiseSection: `Mounting a modern 75" or 85" TV is a "Structural-Load-Engineering" task. In Middle East properties, the challenge is often choosing the right technical fastener for either hollow gypsum board or dense concrete. Our specialists focus on "Vibration-Dampening" and "Shear-Force" calculations. We use laser-guided alignment for a 100% level finish and specialize in the technical concealment of cables—either through professional trunking or by "Chasing" wires into the wall for a truly invisible look, creating a premium, museum-grade display for your entertainment system.`,
    solutionsIntro: `Elevate your home entertainment with our professional TV mounting team. We provide a high-spec installation service that addresses everything from the millimetric precision of the height to the invisible routing of your HDMI and power cables, ensuring your TV is a secure and stylish focal point of your room.`,
    detailedProblems: [
      { title: 'Gypsum-Board Pull-Out Failure', text: 'Standard plugs will pull out of drywall under the weight of a TV. 我们 utilize technical "Butterfly-Toggles" and "Spring-Anchors" that distribute the weight across the back of the board, allowing for 100kg+ loads even on hollow walls without any risk of failure.' },
      { title: 'Parallax Leveling Errors', text: 'Measuring from the floor often results in a crooked TV. 我们 use high-precision "Multi-Line-Lasers" to create a true horizontal datum across your entire room, ensuring your TV is perfectly level with your furniture and ceiling lines for a balanced look.' },
      { title: 'Cable-Clutter Thermal Stress', text: 'Bundling cables too tightly can cause them to overheat and fail. 我们 follow a technical "Separation-Standard"—conveying power and data cables through separate conduits where possible to reduce EMI interference and ensure the long-term life of your HDMI connections.' }
    ],
    technicalApproach: `We follow the "Zero-Gap" protocol. We specialize in the use of Ultra-Slim brackets that keep the TV flush against the wall for a "Picture-Frame" look. Every installation includes a technical "Safe-Pull Test" (3x the weight of the TV) and the configuration of your smart TV settings to ensure your network connection is stable.`
  },
  {
    slug: 'air-purifier-installation',
    name: 'Air Purifier Installation',
    description: 'Specialized setup of whole-home and room-based air purification systems.',
    shortDescription: 'Breathe cleaner air with professional air purifier setup.',
    icon: '🍃',
    image: '/images/services/air-purifier.jpg',
    features: ['HEPA filter setup', 'AQI sensor calibration', 'smart home sync', 'filter schedule alert', 'airflow optimization'],
    commonProblems: [
      'Lingering dust and cooking odors in the home',
      'Increased allergy symptoms during sandstorms',
      'Purifiers being too loud for bedroom use',
      'Visible dust buildup near AC vents',
      'Confusion over when and how to change expensive filters'
    ],
    serviceBenefits: [
      '99.97% reduction in airborne dust and allergens',
      'Fresher and healthier indoor environment',
      'Improved sleep quality with cleaner air',
      'Professional expertise in high-standard HEPA filtration'
    ],
    relatedTerms: ['HEPA filter install', 'home air clean', 'dust removal help', 'smart air purifier'],
    expertiseSection: `Indoor air quality (IAQ) in the Middle East is heavily impacted by "Micron-Dust" infiltration and AC humidity. Standard portable purifiers often underperform if not placed according to "Fluid-Dynamics." Our specialists focus on "CFM-Mapping"—calculating the exact Air Change Rate (ACR) needed for your room's volume. We technically calibrate your system's HEPA, Carbon, and UV-C stages to address the specific pollutants in your home, ensuring that the air you breathe is not just "moving," but has been biologically and physically scrubbed of desert allergens and PM2.5 particulates.`,
    solutionsIntro: `Create a clinical-grade health sanctuary in your own home with our professional air purification team. We provide a complete technical integration of high-end air scrubbers, addressed everything from the sensor-logic setup to the optimization of airflow patterns to ensure total room coverage.`,
    detailedProblems: [
      { title: 'Air-Stagnation Zones', text: 'Placing a purifier in a corner often creates "Dead-Zones" where dust remains. 我们 perform a technical "Airflow-Audit" of your room, positioning the units to work in harmony with your AC intake and exhaust, creating a "Circular-Scrubbing" effect for the entire space.' },
      { title: 'HEPA Seal Leaks', text: 'If the filter is not 100% sealed, dust bypasses it entirely. 我们 perform a technical "Smoke-Test" on the unit seals during installation, ensuring that every molecule of air passes through the medical-grade filters, providing the high-efficiency purification you paid for.' },
      { title: 'Sensor-Logic Miscalibration', text: 'Internal air sensors can "clog" with dust, causing the machine to run at the wrong speed. 我们 utilize professional external "Particulate-Counters" to calibrate your purifier\'s internal sensors, ensuring it responds instantly to sandstorms or indoor pollutants with the correct technical power level.' }
    ],
    technicalApproach: `We follow the "Clinical-Clean-Air" protocol. This involves a baseline IAQ test before and after installation to verify the technical reduction in particulates. We provide a "Smart-Filter-Dashboard" setup for your phone, ensuring you are notified based on actual sensor data rather than just a simple timer, maximizing both your air quality and filter life.`
  },
  {
    slug: 'mobile-pet-grooming',
    name: 'Mobile Pet Grooming',
    description: 'Professional pet grooming services delivered right to your doorstep in a specialized van.',
    shortDescription: 'Professional salon-style grooming for your pets at your doorstep.',
    icon: '🐕',
    image: '/images/services/pet-grooming.jpg',
    features: ['full haircut & styling', 'warm water hydro-bath', 'nail clipping & ear cleaning', 'de-shedding treatment', 'sanitary trimming'],
    commonProblems: [
      'Stress and anxiety in pets during travel to salons',
      'Long waiting times at traditional grooming centers',
      'Difficulty transporting large or senior pets',
      'Risk of infection from other animals in public grooming areas',
      'Matted fur and overgrown nails leading to skin issues'
    ],
    serviceBenefits: [
      'Stress-free grooming environment for your beloved pets',
      'Zero travel time and maximum convenience for owners',
      'One-on-one professional attention for every animal',
      'Highly hygienic, climate-controlled mobile grooming vans'
    ],
    relatedTerms: ['dog wash home', 'cat grooming van', 'pet spa at door', 'mobile vet assist'],
    expertiseSection: `Mobile pet care is a discipline of "Animal-Psychology-Informed-Grooming." In the Middle East heat, pets often suffer from thick undercoats and skin irritation. Our specialists utilize "Hydro-Surge" bathing technology and professional-grade specialized shears. We focus on "Stress-Mitigation-Workflows"—ensuring the grooming environment is temperature-regulated (essential for the GCC climate) and the tools are sterilized for every session, providing a luxury spa experience that prioritizes your pet's health and emotional well-being.`,
    solutionsIntro: `Pamper your pets without the hassle of travel. Our professional mobile grooming team brings a fully equipped, high-spec salon van to your driveway, addressed everything from the sanitary bath of your Persian cat to the professional de-shedding of your Golden Retriever.`,
    detailedProblems: [
      { title: 'Dermatological Heat Stress', text: 'Pets in the Middle East often develop hotspots and fungal infections. 我们 utilize technical "Ozone-Therapy-Baths" and medicated shampoos that soothe the skin while removing desert dust and allergens at the root.' },
      { title: 'Matting and Circulation Blocks', text: 'Poorly maintained fur can pull on the skin, affecting blood flow. 我们 provide technical "Systematic-De-matting," using specialized thinning blades and coat-protectors to carefully release knots without causing pain or skin tears.' },
      { title: 'Anxiety-Driven Behavioral Issues', text: 'Many pets become aggressive or fearful in unknown salons. 我们 utilize technical "Positive-Reinforcement" techniques and silent clippers, ensuring the grooming session is a calming and enjoyable experience for your pet.' }
    ],
    technicalApproach: `We follow the "Paws-Safety-Standard." Every mobile van is technically configured with high-standard HEPA filtration and autonomous power. We provide a "Pet-Health-Report" after every session, noting any skin abnormalities or parasite activity, ensuring your pet remains in peak physical condition.`
  },
  {
    slug: 'home-salon-services',
    name: 'Home Salon Services',
    description: 'Professional beauty, nails, and hair services delivered in the comfort of your home.',
    shortDescription: 'Luxury salon and spa experiences delivered to your home.',
    icon: '💅',
    image: '/images/services/home-salon.jpg',
    features: ['manicure & pedicure', 'professional hair styling', 'facial & skin treatments', 'waxing & threading', 'party makeup'],
    commonProblems: [
      'Finding time for beauty appointments in a busy schedule',
      'Difficulties in finding parking at popular city salons',
      'Lack of privacy in busy public beauty centers',
      'Concerns about tool sterilization and public hygiene',
      'Post-treatment travel affecting freshly styled hair or nails'
    ],
    serviceBenefits: [
      'Ultimate privacy and comfort for your beauty treatments',
      'Massive time saving by avoiding salon travel and waiting',
      'Highest standards of hygiene with personalized kits',
      'Professional results using premium international brands'
    ],
    relatedTerms: ['nails at home', 'hairdresser visit', 'home facial help', 'mobile lash tech'],
    expertiseSection: `Luxury home salon services require "Forensic-Hygiene-Standards" and "Aesthetic-Precision." High-end clients in the Middle East demand the same level of luxury in their living room as they would find in a 5-star spa. Our specialists focus on "Ergonomic-Setup"—bringing portable professional chairs, high-standard UV sterilizers for all metal tools, and premium disposable kits. We technically master the application of medical-grade skincare and high-standard pigments, ensuring your home becomes a private beauty sanctuary with zero compromise on professional results.`,
    solutionsIntro: `Experience world-class beauty without leaving your sanctuary. Our professional home beauty team provides a high-spec "Mobile-Studio" service, addressed everything from the technical precision of your gel manicure to the expert application of rejuvenating facial serums.`,
    detailedProblems: [
      { title: 'Silica-Dust Skin Clogging', text: 'The Middle East environment leads to rapid pore blockage. 我们 utilize technical "Micro-Dermabrasion" and ultrasonic skin-scrubbing, deeply extracting desert particulates before infusing your skin with high-spec hydration.' },
      { title: 'Chemical-Integrity Matching', text: 'Generic hair colors damage hair in the high-heat climate. 我们 perform a technical "Porosity-Test" during consultation, selecting high-standard, ammonia-free pigments that protect your hair shaft while delivering brilliant, lasting color.' },
      { title: 'Cross-Infection Bio-Risk', text: 'Poorly sanitized tools in salons are a major health risk. 我们 utilize technical "Single-Use-Kits" and hospital-grade sanitization protocols for all equipment, providing an absolute guarantee of hygiene and safety for your beauty routine.' }
    ],
    technicalApproach: `We follow the "Luxury-Sanitization-Audit." Every beautician arrives with a technical "Sterile-Pack" and uses high-standard international brands. We provide a customized "Skin-Health-Chart" and a personalized aftercare plan to ensure your professional glow lasts as long as possible.`
  },
  {
    slug: 'physiotherapy-at-home',
    name: 'Physiotherapy at Home',
    description: 'Expert physical therapy and rehabilitation services provided in your home.',
    shortDescription: 'Licensed physiotherapists providing recovery care at home.',
    icon: '🧘',
    image: '/images/services/physiotherapy.jpg',
    features: ['post-surgery rehab', 'sports injury care', 'geriatric mobility help', 'pain management', 'posture correction'],
    commonProblems: [
      'Difficulty traveling to clinics during the recovery phase',
      'Lack of personalized 1-on-1 attention in busy rehab centers',
      'Discomfort in performing exercises in a public clinic',
      'Inconsistent follow-up on prescribed home exercises',
      'Muscle stiffness and chronic pain from desk-bound work'
    ],
    serviceBenefits: [
      'Faster recovery in the comfort of your familiar environment',
      'Dedicated one-hour individual focus for every session',
      'Safe and professional care for home-bound or elderly patients',
      'Integration of furniture into your daily rehab exercises'
    ],
    relatedTerms: ['home physio help', 'rehab at home', 'back pain specialist', 'stroke recovery assist'],
    expertiseSection: `Home physical therapy is a discipline of "Functional-Rehabilitation-Engineering." Recovery in the GCC is often slowed by sedentary lifestyle factors. Our specialists focus on "Kinetic-Chain-Restoration"—using portable TENS (Transcutaneous Electrical Nerve Stimulation) technology and specialized manual therapy techniques. We provide a technical "Environment-Audit" of your living space to identify ergonomic triggers for your pain, ensuring that your recovery is not just a treatment, but a permanent recalibration of your physical movement and health.`,
    solutionsIntro: `Reclaim your mobility with professional clinical care. Our licensed physiotherapy team provides a high-spec "Recovery-at-Home" service, addressing everything from the post-operative rehabilitation of your joints to the technical correction of your spinal alignment.`,
    detailedProblems: [
      { title: 'Joint-Stiffness "Cold-Seizing"', text: 'Poor circulation in AC environments slows muscle healing. 我们 utilize technical "Hyper-Thermal" massage and targeted stretching that increases blood flow, ensuring your joints remain mobile and your recovery timeline is shortened.' },
      { title: 'Neuromuscular Engagement Failure', text: 'Incorrect exercise form can lead to secondary injuries. 我们 provide technical "Bio-Feedback" monitoring during your home sessions, ensuring every muscle contraction is anatomically correct and high-impact for your specific condition.' },
      { title: 'Gait and Balance Instability', text: 'Falls in the home are a major risk for recovering patients. 我们 perform a technical "Home-Safety-Mapping," adjusting your movement patterns within your own living space to provide a permanent solution for fall prevention and stability.' }
    ],
    technicalApproach: `We follow the "Progress-Measurement-Protocol." Every session starts with a digital "Range-of-Motion" (ROM) assessment and ends with a technical "Exercise-Prescription-App" update. We provide a weekly "Mobility-Health-Score" to your primary physician, ensuring a coordinated and scientific approach to your home recovery.`
  },
  {
    slug: 'business-setup-consultancy',
    name: 'Business Setup Consultancy',
    description: 'Expert guidance on company formation and trade licensing across Middle East markets.',
    shortDescription: 'Start your business in the UAE or KSA with professional experts.',
    icon: '💼',
    image: '/images/services/business-setup.jpg',
    features: ['mainland & freezone setup', 'trade license renewal', 'corporate bank account help', 'PRO services', 'legal documentation'],
    commonProblems: [
      'Complex and changing regulatory landscapes in GCC countries',
      'Difficulty in choosing between Mainland and Freezone options',
      'Delays in documentation and government approvals',
      'Challenges in navigating the multi-step visa processes',
      'Missing critical legal deadlines for renewals and audits'
    ],
    serviceBenefits: [
      '100% legal compliance with local government standards',
      'Massive reduction in company formation lead times',
      'Expert selection of the most cost-efficient license types',
      'Dedicated PRO support to handle all government interaction'
    ],
    relatedTerms: ['company formation', 'trade license UAE', 'KSA business help', 'PRO support'],
    expertiseSection: `Business formation in the Middle East is the technical discipline of "Regulatory-Architecture." Whether it's "UAE-Mainland" or "Saudi-Sagiac" licensing, the process requires millimetric precision in legal drafting. Our specialists focus on "Corporate-Structural-Optimization"—identifying the exact license category that minimizes your tax liability and maximizes your market access. We provide a technical shield for your new venture, ensuring your Articles of Association and trade license details are architecturally sound from day one, providing a solid foundation for your long-term commercial growth.`,
    solutionsIntro: `Launch your commercial vision with absolute legal certainty. Our professional business setup team provides a high-spec "Concierge-Formation" service, addressed everything from the technical submission of your license documents to the strategic coordination of your corporate banking facilities.`,
    detailedProblems: [
      { title: 'Category-Miss-Match Liquidation', text: 'Selecting the wrong business activity can lead to fines. 我们 perform a technical "Operational-Mapping" of your business model, ensuring your trade license activities perfectly match your actual operations for 100% regulatory safety.' },
      { title: 'Memorandum-of-Association Deadlocks', text: 'Poorly drafted legal documents can cause shareholding disputes. 我们 utilize technical "Corporate-Governance-Drafting," creating high-standard legal frameworks that protect your interests and provide clear exit and expansion strategies.' },
      { title: 'Visa-Quota "Bottlenecking"', text: 'Incorrect setup can limit your ability to hire staff. 我们 provide technical "Manpower-Planning" within your setup application, ensuring your company structure allows for the staff quotas needed for your projected business growth.' }
    ],
    technicalApproach: `We follow the "Compliance-First" protocol. Every setup project is managed via a dedicated "Reg-Flow" system that provides real-time updates on your application's status with government authorities. We provide a final "Governance-File" containing every original document and permit, ensuring your business is technically audit-ready from its very first day of operation.`
  },
  {
    slug: 'water-filter-installation',
    name: 'Water Filter Installation',
    description: 'Professional installation of RO and UV water filtration systems for kitchens.',
    shortDescription: 'Get pure drinking water at home with expert filter installation.',
    icon: '🚰',
    image: '/images/services/water-filter.jpg',
    features: ['RO stage setup', 'UV-sterilizer install', 'alkaline filter add', 'leak-free plumbing', 'faucet mounting'],
    commonProblems: [
      'Heavy chlorine taste and odor in tap water',
      'Visible white flakes (limescale) in kettles and glasses',
      'Sudden drop in water flow from the filter tap',
      'Water filter system leaking under the kitchen sink',
      'Noisy operation or vibration from the RO booster pump'
    ],
    serviceBenefits: [
      'Crystal-clear and healthy drinking water for the family',
      'Massive savings compared to buying bottled water',
      'Eco-friendly reduction in plastic bottle waste',
      'Professional protection against bacteria and heavy metals'
    ],
    relatedTerms: ['RO system install', 'kitchen water purifier', 'drinking filter help', 'water softener setup'],
    expertiseSection: `Water filtration in the GCC requires a technical response to "High-TDS" (Total Dissolved Solids) and desalination byproduct removal. A standard carbon filter is insufficient. Our specialists focus on "Reverse-Osmosis Dynamics"—installing multi-stage systems that include sediment pre-filters, high-rejection RO membranes, and post-carbon polishing stages. We technically calibrate the "Re-mineralization" stage to ensure your water isn't just "empty," but has the healthy balance of calcium and magnesium needed for taste and hydration, providing clinical-grade water directly from your tap.`,
    solutionsIntro: `Stop buying plastic and start drinking pure water. Our professional installation team provides a high-spec filtration setup for your kitchen, addressed everything from the technical mounting of the pressurized storage tank to the precision-drilled installation of your designer filter faucet.`,
    detailedProblems: [
      { title: 'Membrane-Scaling Failure', text: 'Hard water can "choke" an RO membrane in weeks. 我们 install technical "Flush-Valves" and high-capacity sediment filters that protect the expensive RO core, ensuring your system maintains its 98% rejection rate and high flow for much longer.' },
      { title: 'Booster-Pump Harmonic Noise', text: 'RO systems often vibrate against kitchen cabinets. 我们 utilize technical "High-Density Foam Mounting" and flexible braided connectors that isolate the vibration, ensuring your water filtration process is as silent as it is effective.' },
      { title: 'Cross-Contamination Leaks', text: 'Poorly installed drainage lines can back-flow into the filter. 我们 utilize technical "Air-Gap" faucets and professional non-return valves, providing an absolute physical barrier that ensures your pure drinking water never comes into contact with wastewater.' }
    ],
    technicalApproach: `We follow the "Purity-Validation" protocol. Every installation includes a digital TDS test before and after the filter to prove the technical efficiency of the RO membrane. We provide a specialized "Filter-Life Chart" and perform a high-pressure leak test on all John-Guest connectors to ensure your kitchen cabinets remain dry and organized.`
  },
  {
    slug: 'kitchen-appliance-installation',
    name: 'Kitchen Appliance Installation',
    description: 'Professional setup and connection of ovens, hobs, and refrigerators.',
    shortDescription: 'Get your professional kitchen appliances installed safely and correctly.',
    icon: '🍳',
    image: '/images/services/kitchen-install.jpg',
    features: ['integrated appliance fit', 'gas hob connection', 'water line plumbing', 'electrical load check', 'leveling & bracing'],
    commonProblems: [
      'Improperly leveled appliances causing noise and vibration',
      'Leakage from refrigerator ice-makers and water lines',
      'Insecure integrated doors that don\'t align with cabinets',
      'Gas hobs failing to ignite due to poor regulator setup',
      'Overheating ovens from inadequate ventilation gaps'
    ],
    serviceBenefits: [
      'Safe and certified connection for gas and electric',
      'Perfect aesthetic alignment with your kitchen cabinetry',
      'Prevention of water damage to expensive floorings',
      'Protection of appliance warranty through professional install'
    ],
    relatedTerms: ['oven setup', 'fridge water line', 'dishwater install', 'hob connection'],
    expertiseSection: `Modern kitchen appliances, especially high-end German and Italian brands, require "Precision-Clearance" and "Load-Balanced" connections. For integrated units, the challenge is millimetric alignment with your bespoke cabinetry. Our specialists focus on "Plumb-and-Level" engineering—using digital levels to ensure zero-tilt, which is critical for the long-term life of refrigerator compressors and dishwasher pumps. We provide a technical "Utility-Validation" for every unit, ensuring your electrical breakers can handle the peak load of your induction hobs and ovens without tripping.`,
    solutionsIntro: `Bring your dream kitchen to life with our professional appliance installation team. We provide a high-spec "Ready-to-Cook" service, addressing everything from the food-safe plumbing of your coffee station to the certified gas-tight connection of your professional range cooker.`,
    detailedProblems: [
      { title: 'Centrifugal Imbalance in Washers', text: 'A machine that isn\'t perfectly level will "walk" across the floor. 我们 utilize technical "Mechanical-Leveling" and high-grip dampening pads, ensuring your appliances stay perfectly in place and operate with zero noise even during high-speed cycles.' },
      { title: 'Ice-Maker "Saddle-Valve" Leaks', text: 'Generic water connections often fail under pressure. 我们 install industrial-grade "Quarter-Turn" shut-off valves and braided stainless steel lines, providing a permanent and highly secure technical solution for your smart refrigerator\'s water supply.' },
      { title: 'Thermal-Ventilation Trapping', text: 'Built-in ovens can burn out if they can\'t breathe. 我们 strictly follow manufacturer "Airflow-Mapping," ensuring your cabinetry provides the technical convection gaps needed to protect both the appliance electronics and your expensive wood finishes.' }
    ],
    technicalApproach: `We follow the "Zero-Surface-Damage" protocol. We use specialized floor-protected glides and suction-lifters for heavy units to ensure your marble or wood flooring remains perfect. Every electrical connection is verified with a "Loop-Impedance" test to certify safety and grounding before we hand over the keys to your new kitchen.`
  },
  {
    slug: 'bathroom-fixture-installation',
    name: 'Bathroom Fixture Installation',
    description: 'Specialized installation of luxury faucets, showers, and vanity units.',
    shortDescription: 'Transform your bathroom with professional, leak-free fixture setup.',
    icon: '🚿',
    image: '/images/services/bathroom-install.jpg',
    features: ['mixer tap mounting', 'rain shower install', 'vanity unit bracing', 'toilet seal replacement', 'silicone finishing'],
    commonProblems: [
      'Dripping faucets and shower heads due to poor seating',
      'Loose or wobbly vanity units and towel rails',
      'Visible silicone gaps and messy bathroom finishing',
      'Low water pressure in designer rain showers',
      'Bad odors from incorrectly sealed toilet bases'
    ],
    serviceBenefits: [
      'High-end "Hotel-Finish" look for your bathroom',
      'Absolute prevention of hidden water leaks and mold',
      'Optimal water pressure and temperature control',
      'Secure and durable mounting for all wall fixtures'
    ],
    relatedTerms: ['tap install', 'shower fix', 'toilet setup', 'bathroom vanity fit'],
    expertiseSection: `Bathroom engineering is a discipline of "Structural-Waterproofing" and "Finish-Protection." High-end gold and matte-black fixtures are easily scratched by standard tools. Our specialists use "Soft-Jaw" wrenches and follows "Pressure-Gradient" testing for all new mixers and rain showers. We focus on "Concealed-Plumbing-Integrity"—ensuring every connection behind your tiles is double-sealed with high-standard Loctite thread sealants, providing a luxury aesthetic that is backed by a technical zero-leak guarantee.`,
    solutionsIntro: `Create a spa-like retreat in your home with our professional bathroom installation team. From the millimetric alignment of your double-vanity units to the technical calibration of your thermostatic shower mixers, we provide a clean, expert service for your most private space.`,
    detailedProblems: [
      { title: 'Thermostatic-Cartridge "Chatter"', text: 'Air in the lines can cause noisy shower valves. 我们 perform a technical "Deep-Line-Purge" during installation, ensuring your water temperature remains stable and your high-end shower operate in near-total silence.' },
      { title: 'Vanity-Wall "Shear-Weight" Failure', text: 'Floating vanities are heavy and can pull tiles off the wall. 我们 utilize technical "Structural-Reinforcement" techniques, anchoring directly into the blockwork through the tiles, providing a mounting that can safely support the weight of heavy stone tops.' },
      { title: 'Epoxy-Silicone Degradation', text: 'Standard silicone turns black with mold in months. 我们 exclusively use high-standard "Antimicrobial-Epoxy" sealants that are technically formulated for the high humidity of GCC bathrooms, providing a bright, clean, and healthy finish for years.' }
    ],
    technicalApproach: `We follow the "Multi-Stage Leak-Validation" protocol. After installation, we perform a 60-minute "Static-Pressure" test on all connections. We provide a final "Symmetry-Audit" for all handles and accessories, ensuring that your bathroom not only works perfectly but looks architecturally balanced and premium.`
  },
  {
    slug: 'office-maintenance',
    name: 'Office Maintenance',
    description: 'Comprehensive electrical, plumbing, and AC care for corporate office spaces.',
    shortDescription: 'Ensure a productive workspace with expert office maintenance.',
    icon: '🏢',
    image: '/images/services/office-maintenance.jpg',
    features: ['server room AC care', 'LED lighting retrofits', 'data port testing', 'emergency light audit', 'furniture repair'],
    commonProblems: [
      'AC failures in server rooms leading to hardware crashes',
      'Flickering or dead office lights affecting staff vision',
      'Tripped breakers from too many computers on one circuit',
      'Loose floor tiles and frayed carpets causing trip hazards',
      'Non-functional electrical floor boxes and data ports'
    ],
    serviceBenefits: [
      'Uninterrupted business operations and productivity',
      'Reduced energy costs through efficient lighting and AC',
      'Healthier and more comfortable staff environment',
      'Compliance with civil defense and safety standards'
    ],
    relatedTerms: ['workplace repair', 'commercial maintenance', 'office AC fix', 'office electrician'],
    expertiseSection: `Corporate office maintenance requires a "Zero-Disruption" philosophy and a deep understanding of multi-zone FM (Facility Management) systems. The technical heart of any office is the Server Room AC and the structured cabling. Our specialists focus on "Predictive-Service"—identifying thermal hotspots in electrical panels using infrared thermography before they cause a power failure. We provide a technical shield for your business infrastructure, ensuring your lighting, power, and climate systems operate with the 99.9% uptime required by modern corporate standards.`,
    solutionsIntro: `Maintain a professional and efficient workspace with our expert office support team. We provide a comprehensive technical care package for your headquarters or branch office, addressed everything from the re-lamping of your LED panels to the emergency repair of your conference room infrastructure.`,
    detailedProblems: [
      { title: 'Phase-Imbalance Circuit Trips', text: 'Incorrectly distributed office loads trip breakers. 我们 perform a technical "Phase-Load-Balance" on your DB (Distribution Board), ensuring even electrical distribution across your workspace to prevent embarrassing power cuts during important meetings.' },
      { title: 'FCU Condensate Blockage', text: 'Office AC leaks can destroy expensive servers and carpets. 我们 utilize technical "High-Pressure Drain Purges" and install secondary safety pans with float-switches that automatically cut the AC before a leak becomes a flood.' },
      { title: 'Conference Room "Port-Death"', text: 'Worn-out VGA/HDMI and Ethernet floor boxes. 我们 provide a technical "Audit-and-Replace" service, installing industrial-grade modular inserts that handle high-frequency use, ensuring your staff can always present and connect without technical delays.' }
    ],
    technicalApproach: `We follow the "After-Hours-Precision" protocol. Our teams are available to perform heavy maintenance during nights or weekends to ensure zero noise during your business hours. Every service includes a technical "Safety-Standard-Report" that you can use for your ISO or building management compliance records.`
  },
  {
    slug: 'building-maintenance',
    name: 'Building Maintenance',
    description: 'Total facility care for residential towers, villas, and commercial complexes.',
    shortDescription: 'Protect your property asset with professional building maintenance.',
    icon: '🏗️',
    image: '/images/services/building-maintenance.jpg',
    features: ['facade inspection', 'pump room service', 'elevator foyer care', 'roof waterproofing', 'fire alarm check'],
    commonProblems: [
      'Crack formation in external facade and masonry',
      'Water seepage from roofs during rare sandstorms/rain',
      'Persistent drainage smells in building common areas',
      'Inefficient water booster pumps causing low pressure',
      'Deterioration of paint and finishes in high-traffic foyers'
    ],
    serviceBenefits: [
      'Preservation of property market value and ROI',
      'Enhanced safety and comfort for all residents',
      'Significant reduction in emergency repair costs',
      'Professional management of complex mechanical systems'
    ],
    relatedTerms: ['facility repair', 'tower maintenance', 'villa management', 'asset protection'],
    expertiseSection: `Building maintenance is the technical discipline of "Asset-Lifecycle-Management." In the GCC, buildings are subject to extreme salinity and heat which accelerates structural aging. Our specialists focus on "Preventative-Envelope-Engineering"—maintaining the integrity of roof membranes and facade seals to prevent thermal bridging and water ingress. We manage the technical heart of your building, from the VFD (Variable Frequency Drive) controllers in your pump rooms to the central extraction fans, ensuring your entire property operates as a single, efficient, and healthy environment.`,
    solutionsIntro: `Secure the future of your property investment with our professional building care team. We provide a multi-discipline technical service for commercial and residential assets, addressing everything from the structural integrity of your roof to the mechanical efficiency of your central water heating and cooling.`,
    detailedProblems: [
      { title: 'Capillary Seepage and Spalling', text: 'Moisture in concrete causes rebar to rust and expand. 我们 provide technical "Electrochemical-Realkalization" and professional carbon-fiber strengthening, addressing structural vulnerabilities before they become a risk to the building\'s integrity.' },
      { title: 'Pump-Logic "Short-Cycling"', text: 'Worn-out pressure tanks make pumps start and stop every second. 我们 provide a technical "Hydraulic-Reset," replacing industrial-grade diaphragms and calibrating digital pressure sensors to ensure your pumps run smoothly and use 40% less electricity.' },
      { title: 'Facade Seal Oxidation', text: 'The sun destroys the expansion joints between building panels. 我们 utilize technical "High-Movement" polyurethane sealants and rope-access teams to reseal your facade, preventing dust ingress and ensuring your AC remains perfectly contained within the building.' }
    ],
    technicalApproach: `We follow the "Assets-First" protocol. We create a digital "Asset-Register" for your building, tracking the age and health of every pump, fan, and panel. We provide a monthly "Technical-Health-Index," giving you a clear view of your property's maintenance status and a strategic plan for future upgrades and repairs.`
  },
  {
    slug: 'facility-management',
    name: 'Facility Management',
    description: 'Unified management of MEP, cleaning, and security for large-scale properties.',
    shortDescription: 'Professional, all-in-one management for your property facility.',
    icon: '📑',
    image: '/images/services/facility-management.jpg',
    features: ['MEP operations', 'SLA management', 'energy audits', 'vendor coordination', '24/7 helpdesk'],
    commonProblems: [
      'Fragmented maintenance leading to high operational costs',
      'Slow response times for critical emergency repairs',
      'Lack of clear data on energy and water consumption',
      'Conflict between different service vendors on site',
      'Rapid deterioration of amenities and common areas'
    ],
    serviceBenefits: [
      'Single point of contact for all property needs',
      'Documented 15-25% reduction in yearly utility waste',
      'Maximum uptime for all mission-critical systems',
      'Standardized high-quality service across the entire site'
    ],
    relatedTerms: ['FM services', 'property operations', 'MEP management', 'integrated facilities'],
    expertiseSection: `Integrated Facility Management (IFM) is the strategic combination of "Hard-Services" (MEP) and "Soft-Services" (Cleaning/Security) into a single technical workflow. Our approach is based on "Data-Driven-FM"—using IoT sensors and smart meters to monitor your building's vital signs in real-time. We focus on "OPEX-Optimization"—not just fixing what breaks, but re-engineering systems to use less power and water. Our specialists provide the technical oversight needed to manage large-scale residential towers, commercial parks, and luxury villa communities with precision and transparency.`,
    solutionsIntro: `Elevate your property's performance with our professional facility management team. We provide a full-spectrum "Total-Care" service, addressing everything from the technical maintenance of your HV (High Voltage) panels to the strategic scheduling of your landscaping and security teams.`,
    detailedProblems: [
      { title: 'Operational-Silo Inefficiency', text: 'Cleaning and Maintenance often work against each other. 我们 implement a unified technical "Work-Order-System" that coordinates all teams, ensuring that when an AC is serviced, the area is instantly cleaned and the security logs are updated, providing a seamless site experience.' },
      { title: 'Thermal-Imbalance Energy Waste', text: 'Large buildings often "over-cool" certain areas. 我们 perform technical "Air-Balancing" and install smart VFD drives on central fans, adjusting airflow based on actual occupancy, which can save your facility hundreds of thousands in monthly DEWA/SEWA bills.' },
      { title: 'Compliance and Liability Gaps', text: 'Missing safety certifications are a major legal risk. 我们 provide automated technical "Compliance-Tracking," ensuring that all fire systems, elevator permits, and health/safety audits are performed and documented 30 days before they expire.' }
    ],
    technicalApproach: `We follow the "ISO-Standard-41001" framework for facility management. Every project is managed via a dedicated "Site-Lead" who utilizes technical KPIs to measure team performance. We provide a "Client-Transparency-Portal," giving you real-time access to every repair, every cost-saving, and the overall "Health-Score" of your facility.`
  },
  {
    slug: 'warehouse-cleaning',
    name: 'Warehouse Cleaning',
    description: 'Industrial-grade deep cleaning for logistics and storage facilities.',
    shortDescription: 'Maintain a safe and hygienic warehouse with professional cleaning.',
    icon: '🏭',
    image: '/images/services/warehouse-cleaning.jpg',
    features: ['high-level dusting', 'floor scrubbing', 'degreasing', 'rack cleaning', 'waste management'],
    commonProblems: [
      'Accumulation of fine desert dust on racking and inventory',
      'Oil and tire-mark stains on high-traffic floor areas',
      'Pest activity in hidden corners or waste zones',
      'Black "soot" buildup on high-level beams and lights',
      'Slippery floor surfaces posing a safety risk to staff'
    ],
    serviceBenefits: [
      'Compliance with high-standard ISO and hygiene audits',
      'Enhanced safety and visibility for your workforce',
      'Protection of high-value inventory from dust damage',
      'Improved warehouse moral and professional image'
    ],
    relatedTerms: ['industrial clean', 'logistics facility wash', 'floor degreasing', 'racking dust removal'],
    expertiseSection: `Industrial warehouse cleaning in the Middle East is a technical response to "Logistical-Contamination." The movement of trucks and forklifts introduces tire-rubber, exhaust soot, and fine silica dust that settles on every surface. Our specialists use "Industrial-Scrubber-Dryers" with specialized alkaline degreasers that physically "lift" stains from concrete without damaging the sealer. We focus on "High-Level-Cleaning"—utilizing boom-lifts to reach the 12-meter high steel trusses and lighting fixtures, ensuring your facility is clean from the floor to the roof for maximum transparency and safety.`,
    solutionsIntro: `Optimize your logistics hub with our professional industrial cleaning team. We provide a heavy-duty technical service for large-scale warehouses, addressing everything from the deep-degreasing of your loading bays to the forensic cleaning of your high-density racking systems.`,
    detailedProblems: [
      { title: 'Silica-Dust Inventory Degradation', text: 'Friction-dust can penetrate product packaging. 我们 utilize technical "Hepa-Filtered-Vacuuming" for all high-level surfaces, ensuring that dust is extracted and removed from the facility rather than just being blown around at height.' },
      { title: 'Polyurethane Floor Oxidization', text: 'Oil leaks "eat" through expensive warehouse floor coatings. 我们 utilize technical "Bio-Enzymatic" cleaners that digest oil at a molecular level, restoring the high-friction safety surface of your floors and preventing permanent concrete degradation.' },
      { title: 'Bird and Pest Bio-Hazard', text: 'Warehouse eaves are prime nesting sites for pigeons. 我们 perform technical "Dropping-Extraction" and apply industrial-grade bird deterrents, ensuring your storage facility remains biologically safe and professionally hygienic for your staff and clients.' }
    ],
    technicalApproach: `We follow the "Zonal-Hygiene" protocol. We separate your warehouse into "Clean-Zones" (Inventory) and "Work-Zones" (Loading). Every project includes the use of industrial-standard detergents and a final "Friction-Test" on the floors to certify they are safe for forklift maneuvers. We provide a technical "Certificate-of-Hygiene" for your upcoming quality audits.`
  },
  {
    slug: 'commercial-ac-maintenance',
    name: 'Commercial AC Maintenance',
    description: 'Specialized care for Chiller systems, AHUs, and DX units in commercial buildings.',
    shortDescription: 'Keep your business cool with professional commercial AC care.',
    icon: '❄️',
    image: '/images/services/commercial-ac.jpg',
    features: ['chiller tube cleaning', 'AHU filter bank swap', 'VFD programming', 'coolant level check', 'logic board repair'],
    commonProblems: [
      'Excessive energy consumption from aging chiller plants',
      'Hot-spots in large open-plan offices or shopping malls',
      'Frequent "Tripping" of large AC units during peak heat',
      'Stale air or "Sick-Building-Syndrome" symptoms',
      'Water leaks from large-scale ducting and AHU pans'
    ],
    serviceBenefits: [
      'Stabilized and reliable indoor climate for your business',
      'Up to 30% reduction in high-scale utility costs',
      'Extended asset life for your multi-million dirham AC plant',
      'Professional compliance with indoor air quality health codes'
    ],
    relatedTerms: ['chiller repair', 'AHU service', 'vav calibration', 'central AC maintenance'],
    expertiseSection: `Commercial HVAC management is a game of "Thermodynamic-Optimization" at scale. The difference between a well-maintained chiller and a neglected one can mean thousands of dollars in wasted electricity every month. Our specialists are trained in "System-Hydronics"—balancing the flow of chilled water to every floor to ensure even cooling. We focus on "Compressor-Logic-Refinement"—adjusting the sequencing of your AC units to match the actual building load, preventing unnecessary "Short-Cycling" and ensuring your central cooling system operates at the highest possible COP (Coefficient of Performance).`,
    solutionsIntro: `Scale your comfort without scaling your costs. Our professional commercial AC team provides heavy-duty technical maintenance for your facility's entire cooling infrastructure, addressed everything from the chemical descaling of your condenser tubes to the micro-calibration of your VAV controllers.`,
    detailedProblems: [
      { title: 'Fouling in Heat Exchangers', text: 'Mineral buildup in chiller tubes kills efficiency. 我们 utilize technical "Automatic-Tube-Cleaning" and manual brush-reaming, ensuring that the heat transfer between your water and refrigerant is 100% efficient, resulting in instant energy savings.' },
      { title: 'AHU "Face-Velocity" Imbalance', text: 'Clogged filter banks make fans work harder and air move slower. 我们 utilize technical "Magnehelic-Gauge" testing to measure the pressure drop across your filters, replacing them at the exact technical moment to maintain airflow while protecting your motor bearings.' },
      { title: 'Microbial Growth in Ducting', text: 'Large-scale AC ducts can harbor mold and bacteria. 我们 utilize technical "UV-C-Germicidal" lamps inside your AHUs and professional duct-fogging, neutralizing biological contaminants at the source and ensuring healthy, sterile air for your entire office or building.' }
    ],
    technicalApproach: `We follow the "ASHRAE-Maintenance-Standard" for all commercial HVAC services. We provide a full "System-Baseline-Report" that documents every pressure, temperature, and amperage reading in your AC plant. This data-first approach allows us to predict part failures months in advance, allowing for scheduled maintenance rather than expensive emergency breakdowns.`
  },
];

export const cities: City[] = [
  // --- UAE ---
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Premier professional services across Dubai.',
    image: '/images/cities/dubai.jpg',
    population: '3.5M+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Dubai Marina', 'Downtown', 'Palm Jumeirah', 'Al Barsha', 'Silicon Oasis', 'JLT', 'Business Bay', 'Jumeirah', 'Mirdif'],
    localContext: `Dubai's high-rise luxury towers and coastal villas face extreme environmental stress. High humidity from the Gulf and airborne sand demand high-precision maintenance for cooling and water systems.`
  },
  {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Expert home services in the UAE capital.',
    image: '/images/cities/abu-dhabi.jpg',
    population: '1.5M+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Corniche', 'Yas Island', 'Saadiyat Island', 'Al Reem Island', 'Khalifa City', 'Al Raha', 'Al Mushrif', 'Madinat Zayed'],
    localContext: `Abu Dhabi's capital status means high standards for residential maintenance. The coastal climate requires specialized anti-corrosion treatments for outdoor units and high-efficiency filtration.`
  },
  {
    slug: 'sharjah',
    name: 'Sharjah',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Reliable residential support in Sharjah.',
    image: '/images/cities/sharjah.jpg',
    population: '1.8M+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Al Majaz', 'Muwaileh', 'Al Nahda', 'Sharjah Waterfront', 'Al Qasimia', 'Al Khan', 'Muwaileh Commercial'],
    localContext: `Sharjah's cultural and residential hubs feature many established family buildings that require expert modernization and regular technical oversight to maintain safety and comfort.`
  },
  {
    slug: 'ajman',
    name: 'Ajman',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Professional services for the Ajman community.',
    image: '/images/cities/ajman.jpg',
    population: '500K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Ajman Corniche', 'Al Nuaimia', 'Al Rawda', 'Al Mowaihat', 'Ajman Downtown', 'Al Jurf'],
    localContext: `Ajman's rapid coastal development places domestic systems in direct contact with sea air, necessitating frequent inspections and expert plumbing care to prevent saline-related damage.`
  },
  {
    slug: 'ras-al-khaimah',
    name: 'Ras Al Khaimah',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Quality technical assistance in Ras Al Khaimah.',
    image: '/images/cities/ras-al-khaimah.jpg',
    population: '400K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Al Marjan Island', 'Al Hamra Village', 'Mina Al Arab', 'RAK City', 'Al Nakheel', 'Al Dhait'],
    localContext: `Located between the mountains and the sea, Ras Al Khaimah homes experience diverse humidity levels that require adaptive HVAC settings and expert masonry protection.`
  },
  {
    slug: 'fujairah',
    name: 'Fujairah',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Expert home maintenance in Fujairah.',
    image: '/images/cities/fujairah.jpg',
    population: '250K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Al Faseel', 'Fujairah City', 'Dibba', 'Khorfakkan', 'Kalba', 'Al Aqah'],
    localContext: `The unique east-coast climate of Fujairah, with its mountain rainfall and sea breeze, creates specific needs for waterproofing and high-durability external plumbing.`
  },
  {
    slug: 'umm-al-quwain',
    name: 'Umm Al Quwain',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Trusted local help in Umm Al Quwain.',
    image: '/images/cities/umm-al-quwain.jpg',
    population: '80K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Al Raudah', 'UAQ City', 'Al Salamah', 'Falaj Al Mualla'],
    localContext: `The traditional and developing areas of Umm Al Quwain require technicians who understand both legacy villa layouts and modern residential infrastructure requirements.`
  },
  {
    slug: 'al-ain',
    name: 'Al Ain',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Garden City professional service providers.',
    image: '/images/cities/al-ain.jpg',
    population: '760K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Jebel Hafeet', 'Al Jimi', 'Al Foah', 'Zakher', 'Al Ain Downtown', 'Al Muwaiji'],
    localContext: `Al Ain's inland desert climate is drier than the coast, leading to higher dust accumulation in AC filters and a need for specialized irrigation and water pressure management.`
  },
  {
    slug: 'khalifa-city',
    name: 'Khalifa City',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Specialized villa maintenance in Khalifa City.',
    image: '/images/cities/khalifa-city.jpg',
    population: 'Suburban',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Khalifa City A', 'Khalifa City B', 'Al Shakhbout City', 'Masdar City', 'Al Forsan'],
    localContext: `Khalifa City is home to massive villa compounds where large-scale AC systems and complex underground plumbing networks require regular professional auditing.`
  },
  {
    slug: 'mussafah',
    name: 'Mussafah',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Industrial and residential technical support in Mussafah.',
    image: '/images/cities/mussafah.jpg',
    population: 'Industrial Hub',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Shabiya', 'Mussafah Gardens', 'ICAD', 'Mohamed Bin Zayed City'],
    localContext: `Mussafah's blend of residential towers and industrial zones demands technicians who can handle high-capacity electrical loads and heavy-duty plumbing systems.`
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Expert residential services in Al Barsha.',
    image: '/images/cities/al-barsha.jpg',
    population: 'Residential',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Al Barsha 1', 'Al Barsha 2', 'Al Barsha 3', 'Barsha Heights', 'Tecom'],
    localContext: `Al Barsha features a mix of high-rise apartments and large villas. The desert heat requires meticulous AC filter maintenance and professional garden irrigation care.`
  },
  {
    slug: 'deira',
    name: 'Deira',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Professional technical support in historic Deira.',
    image: '/images/cities/deira.jpg',
    population: 'High Density',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Rigga', 'Muraqqabat', 'Naif', 'Al Ras', 'Hor Al Anz', 'Al Garhoud'],
    localContext: `Historic Deira's established buildings require experienced technicians who can manage legacy plumbing systems and upgrade cooling units for modern efficiency.`
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Premium villa maintenance in Jumeirah.',
    image: '/images/cities/jumeirah.jpg',
    population: 'Elite Residential',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Jumeirah 1', 'Jumeirah 2', 'Jumeirah 3', 'City Walk', 'Box Park'],
    localContext: `Coastal Jumeirah villas face high salinity and humidity. We focus on anti-corrosion treatments for AC units and high-end bathroom fixture installations.`
  },
  {
    slug: 'al-nahda',
    name: 'Al Nahda',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Reliable apartment services in Al Nahda.',
    image: '/images/cities/al-nahda.jpg',
    population: 'High Density',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Al Nahda 1', 'Al Nahda 2', 'Al Qusais', 'Sahara Centre Area'],
    localContext: `Al Nahda's busy residential towers demand fast-response plumbing and frequent AC duct cleaning to ensure a healthy indoor environment for families.`
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    country: 'UAE',
    countryCode: 'AE',
    description: 'Corporate and residential maintenance in Business Bay.',
    image: '/images/cities/business-bay.jpg',
    population: 'Mixed Use',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Executive Towers', 'Bay Square', 'Marasi Drive', 'Downtown Dubai'],
    localContext: `Business Bay's high-spec towers require technicians trained in vertical plumbing systems and integrated building management controls for climate and security.`
  },

  // --- Saudi Arabia ---
  {
    slug: 'riyadh',
    name: 'Riyadh',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Premier home services in Riyadh.',
    image: '/images/cities/riyadh.jpg',
    population: '7.6M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Al Olaya', 'Al Malaz', 'Diplomatic Quarter', 'Al Nakheel', 'Al Yasmin', 'Diriyah', 'KAFD', 'Al Sahafa'],
    localContext: `Riyadh's extreme desert heat and temperature swings between day and night put immense strain on building systems, especially older villas in central districts.`
  },
  {
    slug: 'jeddah',
    name: 'Jeddah',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Red Sea coastal experts in Jeddah.',
    image: '/images/cities/jeddah.jpg',
    population: '4.7M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Al Balad', 'Jeddah Corniche', 'Al Hamra', 'Al Khalidiyah', 'Obhur', 'Al Rawdah', 'Al Shati'],
    localContext: `The coastal humidity of Jeddah creates a high risk for metal oxidation. Our technicians focus on protective coatings and moisture-resistant electrical installations.`
  },
  {
    slug: 'dammam',
    name: 'Dammam',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Expert services in the Eastern Province.',
    image: '/images/cities/dammam.jpg',
    population: '1.2M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Al Shatea', 'Dammam Corniche', 'Al Faisaliyah', 'Al Rayyan', 'Al Aziziyah'],
    localContext: `Being an industrial and port hub, Dammam homes require robust filtration systems to combat both sea humidity and industrial particulates in the air.`
  },
  {
    slug: 'mecca',
    name: 'Mecca',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Professional help in the Holy City of Mecca.',
    image: '/images/cities/mecca.jpg',
    population: '2.4M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Aziziyah', 'Al Shubaikah', 'Misfalah', 'Jabal Al Nour', 'Al Awali'],
    localContext: `In Mecca, maintenance for high-occupancy residential buildings and hotels requires rapid-response teams capable of handling heavy-use plumbing and HVAC loads.`
  },
  {
    slug: 'medina',
    name: 'Medina',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Trusted maintenance in Medina.',
    image: '/images/cities/medina.jpg',
    population: '1.5M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Al Haram', 'Quba', 'Yanbu Highway', 'Al Rashid', 'Al Aziziya'],
    localContext: `Medina's hospitality sector and residential quarters demand silent, high-efficiency cooling systems to maintain a peaceful environment for residents and visitors.`
  },
  {
    slug: 'khobar',
    name: 'Khobar',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Premium service providers in Khobar.',
    image: '/images/cities/khobar.jpg',
    population: '600K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Khobar Corniche', 'Al Bandariyah', 'Al Rakha', 'Al Ulaya', 'Thuqbah'],
    localContext: `Khobar's cosmopolitan residential landscape features modern smart-homes that require technicians skilled in electronic thermostat calibration and integrated water systems.`
  },
  {
    slug: 'jubail',
    name: 'Jubail',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Industrial city home maintenance in Jubail.',
    image: '/images/cities/jubail.jpg',
    population: '400K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Jubail Industrial', 'Jubail Downtown', 'Al Fanateer', 'Al Deffi'],
    localContext: `Residential zones in Jubail Industrial City are designed with integrated infrastructure, requiring technicians familiar with centralized district cooling and high-standard plumbing.`
  },
  {
    slug: 'tabuk',
    name: 'Tabuk',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Northern region technical aid in Tabuk.',
    image: '/images/cities/tabuk.jpg',
    population: '660K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Al Muruj', 'Al Qadsiyah', 'Tabuk Downtown', 'Al Rawdah'],
    localContext: `Tabuk's cooler winters and hot summers require HVAC systems to be versatile, with specific attention to heater-pump maintenance and thermal insulation.`
  },
  {
    slug: 'abha',
    name: 'Abha',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Mountain region services in Abha.',
    image: '/images/cities/abha.jpg',
    population: '1M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Al Souda', 'Abha Downtown', 'Khamis Mushait', 'Al Mahalah'],
    localContext: `High altitude in Abha means lower air pressure and higher moisture, requiring plumbing solutions that account for elevation and HVAC systems that prevent internal condensation.`
  },
  {
    slug: 'hail',
    name: 'Hail',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Central-North professional help in Hail.',
    image: '/images/cities/hail.jpg',
    population: '600K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Hail Downtown', 'Al Khuzama', 'Al Naqrah', 'Al Jamiah'],
    localContext: `Hail's agricultural and desert surroundings lead to fine sand penetration. High-quality air filtration and deep cleaning of condenser units are priorities here.`
  },
  {
    slug: 'najran',
    name: 'Najran',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Southern border region services in Najran.',
    image: '/images/cities/najran.jpg',
    population: '500K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Najran City', 'Al Khalidiyah', 'Al Faisaliyah', 'Sharurah'],
    localContext: `Najran's unique valley geography requires flood-resistant drainage planning and robust groundwater pumping solutions for private residential compounds.`
  },
  {
    slug: 'yanbu',
    name: 'Yanbu',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Industrial port city help in Yanbu.',
    image: '/images/cities/yanbu.jpg',
    population: '250K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Yanbu Al-Sinaiyah', 'Yanbu Al-Bahr', 'Yanbu Al-Nakheel'],
    localContext: `Yanbu's coastal industrial environment necessitates heavy-duty AC units and corrosion-resistant plumbing fixtures to handle high saline and humidity levels.`
  },
  {
    slug: 'buraidah',
    name: 'Buraidah',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Al-Qassim region experts in Buraidah.',
    image: '/images/cities/buraidah.jpg',
    population: '700K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Buraidah Downtown', 'Al Fayziyah', 'Al Rayyan', 'Al-Rawdah'],
    localContext: `Buraidah's desert landscape means frequent sandstorms. We specialize in exterior unit protection and high-efficiency dust-removal for cooling systems.`
  },
  {
    slug: 'al-ahsa',
    name: 'Al Ahsa',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'Oasis region home maintenance in Al Ahsa.',
    image: '/images/cities/al-ahsa.jpg',
    population: '1.2M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Hofuf', 'Al Mubarraz', 'Al Oyoon', 'Al Omran'],
    localContext: `Being the world's largest oasis, Al Ahsa homes often face higher humidity from vegetation levels, requiring expert pest control and moisture-management plumbing.`
  },
  {
    slug: 'taif',
    name: 'Taif',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    description: 'High-altitude city assistance in Taif.',
    image: '/images/cities/taif.jpg',
    population: '700K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Taif Downtown', 'Al Shafa', 'Al Hada', 'Al Hawiyah'],
    localContext: `Taif's mountain climate involves rapid temperature drops. Our services focus on reliable heating elements in AC units and freeze-proofed external piping.`
  },

  // --- Qatar ---
  {
    slug: 'doha',
    name: 'Doha',
    country: 'Qatar',
    countryCode: 'QA',
    description: 'Metropolitan services in Doha.',
    image: '/images/cities/doha.jpg',
    population: '2.4M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['West Bay', 'The Pearl', 'Lusail City', 'Al Sadd', 'Msheireb', 'Katara', 'Abu Hamour', 'Al Waab'],
    localContext: `Doha's futuristic skyscrapers and luxury villas feature integrated smart-home systems that require technicians trained in digital diagnostics and high-end plumbing hardware.`
  },
  {
    slug: 'al-rayyan',
    name: 'Al Rayyan',
    country: 'Qatar',
    countryCode: 'QA',
    description: 'Modern residential support in Al Rayyan.',
    image: '/images/cities/al-rayyan.jpg',
    population: '600K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Education City', 'Aspire Zone', 'Gharafa', 'Muaither', 'Ain Khaled'],
    localContext: `As one of Qatar's largest residential municipalities, Al Rayyan's large villa communities require large-scale maintenance teams for central AC and garden irrigation.`
  },
  {
    slug: 'al-wakrah',
    name: 'Al Wakrah',
    country: 'Qatar',
    countryCode: 'QA',
    description: 'Coastal experts in Al Wakrah.',
    image: '/images/cities/al-wakrah.jpg',
    population: '100K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Wakrah Corniche', 'Ezdan Village', 'Al Wukair', 'Wakrah Port'],
    localContext: `The traditional charm of Al Wakrah, combined with new developments, means technicians must handle both older pipe systems and ultra-modern coastal stadium-area housing.`
  },
  {
    slug: 'al-khor',
    name: 'Al Khor',
    country: 'Qatar',
    countryCode: 'QA',
    description: 'Northern hub services in Al Khor.',
    image: '/images/cities/al-khor.jpg',
    population: '200K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Al Khor Community', 'Al Khor Corniche', 'Simaisma', 'Thakhira'],
    localContext: `Al Khor's northern coastal location creates a demand for high-durability external hardware to withstand the shamal winds and salt spray.`
  },
  {
    slug: 'umm-salal',
    name: 'Umm Salal',
    country: 'Qatar',
    countryCode: 'QA',
    description: 'Family residential aid in Umm Salal.',
    image: '/images/cities/umm-salal.jpg',
    population: '90K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Umm Salal Ali', 'Umm Salal Mohammed', 'Al Sakhama', 'Izghawa'],
    localContext: `Umm Salal is a growing family destination where multi-generational homes require robust plumbing networks and multi-unit AC maintenance schedules.`
  },
  {
    slug: 'lusail',
    name: 'Lusail',
    country: 'Qatar',
    countryCode: 'QA',
    description: 'Smart city technical services in Lusail.',
    image: '/images/cities/lusail.jpg',
    population: '200K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Marina District', 'Fox Hills', 'Energy City', 'Lusail Boulevard', 'Entertainment City'],
    localContext: `Lusail is built on a smart-grid. Our technicians are specialized in maintaining the latest in energy-efficient cooling and automated water-management technologies.`
  },
  {
    slug: 'dukhan',
    name: 'Dukhan',
    country: 'Qatar',
    countryCode: 'QA',
    description: 'Western industrial hub help in Dukhan.',
    image: '/images/cities/dukhan.jpg',
    population: 'Oil & Gas Hub',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Dukhan Community', 'Zekreet', 'Um Bab'],
    localContext: `Providing services in Dukhan requires familiarity with corporate residential compounds and the high maintenance standards of Qatar's energy sector housing.`
  },

  // --- Kuwait ---
  {
    slug: 'kuwait-city',
    name: 'Kuwait City',
    country: 'Kuwait',
    countryCode: 'KW',
    description: 'Expert help in the heart of Kuwait.',
    image: '/images/cities/kuwait-city.jpg',
    population: '600K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Dasman', 'Sharq', 'Mirgab', 'Bneid Al-Gar', 'Kuwait Towers Area'],
    localContext: `Kuwait City's extreme summer temperatures (often exceeding 50°C) make the reliability of cooling units a matter of safety. We provide 24/7 priority emergency support.`
  },
  {
    slug: 'hawalli',
    name: 'Hawalli',
    country: 'Kuwait',
    countryCode: 'KW',
    description: 'Urban technician services in Hawalli.',
    image: '/images/cities/hawalli.jpg',
    population: '800K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Maidan Hawalli', 'Jabriya', 'Rumaithiya', 'Bayat'],
    localContext: `The high density of residential apartments in Hawalli requires our plumbers to be experts in vertical pipe networks and multi-family drainage systems.`
  },
  {
    slug: 'salmiya',
    name: 'Salmiya',
    country: 'Kuwait',
    countryCode: 'KW',
    description: 'Coastal residential aid in Salmiya.',
    image: '/images/cities/salmiya.jpg',
    population: '300K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Salmiya Block 10', 'Coastal Road', 'Marina Mall Area', 'South Salmiya'],
    localContext: `Salmiya's vibrant waterfront buildings undergo rapid environmental aging due to sea salt. We focus on preventative maintenance for coastal property exteriors.`
  },
  {
    slug: 'farwaniya',
    name: 'Farwaniya',
    country: 'Kuwait',
    countryCode: 'KW',
    description: 'Industrial and residential help in Farwaniya.',
    image: '/images/cities/farwaniya.jpg',
    population: '1M+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Khaitan', 'Jleeb Al-Shuyoukh', 'Ardiya', 'Rabbia'],
    localContext: `Farwaniya's diverse residential blocks require versatile technicians who can handle a wide variety of domestic appliances and legacy HVAC installations.`
  },
  {
    slug: 'jahra',
    name: 'Jahra',
    country: 'Kuwait',
    countryCode: 'KW',
    description: 'Western region services in Jahra.',
    image: '/images/cities/jahra.jpg',
    population: '500K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Saad Al-Abdullah', 'Jahra Industrial', 'Sulaibikhat'],
    localContext: `Jahra's inland desert location leads to higher dust penetration. We specialize in deep-cleaning of AC units and the installation of protective filters.`
  },
  {
    slug: 'ahmadi',
    name: 'Ahmadi',
    country: 'Kuwait',
    countryCode: 'KW',
    description: 'Southern region technical support in Ahmadi.',
    image: '/images/cities/ahmadi.jpg',
    population: '400K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Finta', 'Egaila', 'Mahboula', 'Sabahiya'],
    localContext: `Ahmadi's oil-industry heritage means many residential compounds follow stringent safety and technical standards for building maintenance.`
  },
  {
    slug: 'fahaheel',
    name: 'Fahaheel',
    country: 'Kuwait',
    countryCode: 'KW',
    description: 'Coastal port services in Fahaheel.',
    image: '/images/cities/fahaheel.jpg',
    population: 'Port City',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Mangaf', 'Abu Halifa', 'Fahaheel Seafront'],
    localContext: `The maritime environment of Fahaheel requires specialized plumbing fixtures that resist corrosion and HVAC units that remain efficient in high coastal humidity.`
  },

  // --- Bahrain ---
  {
    slug: 'manama',
    name: 'Manama',
    country: 'Bahrain',
    countryCode: 'BH',
    description: 'Premier services in the capital of Bahrain.',
    image: '/images/cities/manama.jpg',
    population: '400K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Seef District', 'Juffair', 'Adliya', 'Diplomatic Area', 'Gudaibiya'],
    localContext: `Manama's modern city core requires technicians familiar with luxury residential towers and the specific high-pressure water system demands of high-rise living.`
  },
  {
    slug: 'riffa',
    name: 'Riffa',
    country: 'Bahrain',
    countryCode: 'BH',
    description: 'Elite home maintenance in Riffa.',
    image: '/images/cities/riffa.jpg',
    population: '150K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['West Riffa', 'East Riffa', 'Riffa Views', 'Wadi Al Sail'],
    localContext: `Riffa's expansive villas and golf estates demand high-capacity HVAC maintenance and complex residential irrigation and pool plumbing expertise.`
  },
  {
    slug: 'muharraq',
    name: 'Muharraq',
    country: 'Bahrain',
    countryCode: 'BH',
    description: 'Traditional and modern help in Muharraq.',
    image: '/images/cities/muharraq.jpg',
    population: '180K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Amwaj Islands', 'Diyar Al Muharraq', 'Busaiteen', 'Arad', 'Hidd'],
    localContext: `Muharraq's blend of historic heritage and island developments like Amwaj requires experts who can navigate both legacy plumbing and modern moisture-control for coastal homes.`
  },
  {
    slug: 'hamad-town',
    name: 'Hamad Town',
    country: 'Bahrain',
    countryCode: 'BH',
    description: 'Residential community services in Hamad Town.',
    image: '/images/cities/hamad-town.jpg',
    population: '100K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Hamad Town Roundabouts', 'Buri', 'Dar Kulaib'],
    localContext: `Hamad Town's family-centric housing means a focus on reliable kitchen and bathroom plumbing and multi-unit AC maintenance for large families.`
  },
  {
    slug: 'isa-town',
    name: 'Isa Town',
    country: 'Bahrain',
    countryCode: 'BH',
    description: 'Community tech support in Isa Town.',
    image: '/images/cities/isa-town.jpg',
    population: '80K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Isa Town Downtown', 'A\'ali', 'Sanad'],
    localContext: `Isa Town's established residential blocks require technicians skilled in upgrading older HVAC systems to modern energy-efficient standards.`
  },
  {
    slug: 'sitra',
    name: 'Sitra',
    country: 'Bahrain',
    countryCode: 'BH',
    description: 'Industrial and port area help in Sitra.',
    image: '/images/cities/sitra.jpg',
    population: '60K+',
    timezone: 'AST (UTC+3)',
    nearbyAreas: ['Sitra Industrial Area', 'Nabih Saleh', 'Al Qurayya'],
    localContext: `Sitra's coastal industrial identity leads to a high need for heavy-duty plumbing maintenance and AC filter optimization to combat air particulates.`
  },

  // --- Oman ---
  {
    slug: 'muscat',
    name: 'Muscat',
    country: 'Oman',
    countryCode: 'OM',
    description: 'Reliable services in the Omani capital.',
    image: '/images/cities/muscat.jpg',
    population: '1.5M+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Qurum', 'Al Khuwair', 'Azaiba', 'Bausher', 'Madinat Sultan Qaboos', 'The Wave (Al Mouj)'],
    localContext: `Muscat's mountainous and coastal landscape creates diverse micro-climates. Our teams specialize in waterproofing and high-efficiency cooling for these varied environments.`
  },
  {
    slug: 'salalah',
    name: 'Salalah',
    country: 'Oman',
    countryCode: 'OM',
    description: 'Southern region specialists in Salalah.',
    image: '/images/cities/salalah.jpg',
    population: '300K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Salalah Downtown', 'Al Haffa', 'Taqah', 'Mirbat', 'Dahariz'],
    localContext: `The Khareef (monsoon) season in Salalah creates high humidity. We focus on dehumidification solutions and moisture-resistant home maintenance during this period.`
  },
  {
    slug: 'sohar',
    name: 'Sohar',
    country: 'Oman',
    countryCode: 'OM',
    description: 'Industrial port city support in Sohar.',
    image: '/images/cities/sohar.jpg',
    population: '200K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Sohar Port Area', 'Al Falaj', 'Sohar Downtown'],
    localContext: `As an industrial and shipping hub, Sohar residential areas require heavy-duty water filtration and high-capacity AC systems to handle the demands of the warm climate.`
  },
  {
    slug: 'nizwa',
    name: 'Nizwa',
    country: 'Oman',
    countryCode: 'OM',
    description: 'Interior region assist in Nizwa.',
    image: '/images/cities/nizwa.jpg',
    population: '100K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Nizwa Souq Area', 'Al Jabal Al Akhdar', 'Bahla'],
    localContext: `Nizwa's hot and dry interior climate means a focus on dust-proofing HVCA units and maintaining traditional water-management systems (Falaj-integrated plumbing).`
  },
  {
    slug: 'sur',
    name: 'Sur',
    country: 'Oman',
    countryCode: 'OM',
    description: 'Coastal expertise in Sur.',
    image: '/images/cities/sur.jpg',
    population: '120K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Sur Corniche', 'Ras Al Hadd', 'Al Ayjah'],
    localContext: `The maritime environment of Sur requires technicians who understand the effects of salt-spray on external electrical and plumbing components.`
  },
  {
    slug: 'barka',
    name: 'Barka',
    country: 'Oman',
    countryCode: 'OM',
    description: 'Expanding residential help in Barka.',
    image: '/images/cities/barka.jpg',
    population: '80K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Barka Downtown', 'Al Sawadi', 'Al Naseem'],
    localContext: `Barka is a rapidly expanding suburban hub where new villa developments require expert initial setup and regular system troubleshooting for growing families.`
  },
  {
    slug: 'ibri',
    name: 'Ibri',
    country: 'Oman',
    countryCode: 'OM',
    description: 'Dhahirah region services in Ibri.',
    image: '/images/cities/ibri.jpg',
    population: '160K+',
    timezone: 'GST (UTC+4)',
    nearbyAreas: ['Ibri Downtown', 'Yanqul', 'Dhank'],
    localContext: `Ibri's desert interior necessitates high-standard cooling systems. Our technicians prioritize energy-efficient units to handle the sustained heat of the region.`
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'preparing-home-for-summer',
    title: 'Preparing Your Home for the Middle East Summer',
    date: '2024-03-10',
    category: 'Home Tips',
    excerpt: 'Essential steps to take before the heat hits...',
    content: 'Long form content about summer preparation...',
    author: 'Expert Team',
    image: '/images/blog/home-comfort.jpg',
    tags: ['summer', 'maintenance']
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Mohammed Ali',
    city: 'Dubai',
    service: 'AC Repair',
    rating: 5,
    text: 'Quick response and fixed my AC in no time. Highly recommended!',
    avatar: '/images/avatars/avatar-1.jpg'
  },
  {
    name: 'Sarah Ahmed',
    city: 'Riyadh',
    service: 'Plumbing',
    rating: 5,
    text: 'The plumber was very professional and fixed the leak quickly.',
    avatar: '/images/avatars/avatar-2.jpg'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function generateServiceCityFAQs(service: Service, city: City): FAQ[] {
  return [
    {
      question: `How quickly can technicians arrive in ${city.name} for ${service.name}?`,
      answer: `Our localized team in ${city.name} aims to provide rapid assistance, usually arriving within 30 to 60 minutes for any urgent request. We have units ready in areas like ${city.nearbyAreas.slice(0, 3).join(' and ')} to minimize wait times.`,
    },
    {
      question: `What type of ${service.name} issues can be handled by your team?`,
      answer: `We are equipped to handle any problem related to ${service.name.toLowerCase()}, including ${service.commonProblems.slice(0, 3).join(', ')}, and more complex system-wide faults. Our professionals bring industrial-grade tools to ensure a thorough fix on the first visit.`,
    },
    {
      question: `Do you offer emergency ${service.name} assistance in ${city.name}?`,
      answer: `Yes, we provide 24/7 emergency support for ${service.name.toLowerCase()} across ${city.name}. We know that some issues like a sudden failure in the ${city.country} heat cannot wait for a scheduled appointment.`,
    },
    {
      question: `Are your ${service.name} professionals background-checked and trained?`,
      answer: `Absolutely. Every technician sent to your home in ${city.name} is a verified professional who has passed rigorous technical assessments and background screenings. We prioritize your safety and project quality above all else.`,
    },
    {
      question: `Which neighborhoods in ${city.name} do you cover for ${service.name}?`,
      answer: `We serve the entire ${city.name} region, including residents in ${city.nearbyAreas.join(', ')}. Our mobility and local knowledge allow us to reach any villa or apartment within the city quickly.`,
    },
  ];
}
