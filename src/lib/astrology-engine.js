export const SAMPLE_PROFILES = [
  {
    label: 'Priya Sharma',
    tag: 'Age 28 • Active Guru Dasha',
    input: {
      name: 'Priya Sharma',
      gender: 'female',
      day: 14,
      month: 7,
      year: 1998,
      hour: 6,
      minute: 35,
      period: 'AM',
      birthPlace: 'New Delhi, India',
      latitude: 28.6139,
      longitude: 77.209,
      timezone: 'Asia/Kolkata',
    },
  },
  {
    label: 'Rohan Verma',
    tag: 'Age 31 • Saturn Double Transit',
    input: {
      name: 'Rohan Verma',
      gender: 'male',
      day: 22,
      month: 11,
      year: 1995,
      hour: 10,
      minute: 15,
      period: 'PM',
      birthPlace: 'Bengaluru (Bangalore), India',
      latitude: 12.9716,
      longitude: 77.5946,
      timezone: 'Asia/Kolkata',
    },
  },
  {
    label: 'Ananya Iyer',
    tag: 'Age 25 • Navamsa Alignment',
    input: {
      name: 'Ananya Iyer',
      gender: 'female',
      day: 8,
      month: 3,
      year: 2001,
      hour: 3,
      minute: 45,
      period: 'PM',
      birthPlace: 'Chennai, India',
      latitude: 13.0827,
      longitude: 80.2707,
      timezone: 'Asia/Kolkata',
    },
  },
];

const ZODIAC_SIGNS = [
  { name: 'Aries', sanskrit: 'Mesha', lord: 'Mars', element: 'Fire' },
  { name: 'Taurus', sanskrit: 'Vrishabha', lord: 'Venus', element: 'Earth' },
  { name: 'Gemini', sanskrit: 'Mithuna', lord: 'Mercury', element: 'Air' },
  { name: 'Cancer', sanskrit: 'Karka', lord: 'Moon', element: 'Water' },
  { name: 'Leo', sanskrit: 'Simha', lord: 'Sun', element: 'Fire' },
  { name: 'Virgo', sanskrit: 'Kanya', lord: 'Mercury', element: 'Earth' },
  { name: 'Libra', sanskrit: 'Tula', lord: 'Venus', element: 'Air' },
  { name: 'Scorpio', sanskrit: 'Vrishchika', lord: 'Mars', element: 'Water' },
  { name: 'Sagittarius', sanskrit: 'Dhanu', lord: 'Jupiter', element: 'Fire' },
  { name: 'Capricorn', sanskrit: 'Makara', lord: 'Saturn', element: 'Earth' },
  { name: 'Aquarius', sanskrit: 'Kumbha', lord: 'Saturn', element: 'Air' },
  { name: 'Pisces', sanskrit: 'Meena', lord: 'Jupiter', element: 'Water' },
];

const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export async function calculateMarriageTiming(input) {
  // Simulate calculation delay to show realistic Vedic processing
  await new Promise((resolve) => setTimeout(resolve, 800));

  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - input.year;

  // Derive pseudo-astrological seed from birth inputs for deterministic calculations
  const birthSeed = (input.day * 31 + input.month * 12 + input.year + input.hour * 60 + input.minute) % 1000;
  
  // Calculate Lagna (Ascendant) & 7th House
  const lagnaIndex = (Math.floor(input.hour + (input.minute / 60) + (input.month * 2)) + input.day) % 12;
  const seventhHouseIndex = (lagnaIndex + 6) % 12;
  const moonIndex = (birthSeed + input.day * 2) % 12;
  const nakshatraIndex = (birthSeed + input.month * 3) % 27;

  const ascendantSign = ZODIAC_SIGNS[lagnaIndex].name;
  const seventhSignObj = ZODIAC_SIGNS[seventhHouseIndex];
  const moonSign = ZODIAC_SIGNS[moonIndex].name;
  const nakshatra = NAKSHATRAS[nakshatraIndex];

  // Timing Windows Generation
  const primaryStartYear = Math.max(currentYear, input.year + Math.max(21, Math.min(36, 24 + (birthSeed % 8))));
  const primaryEndYear = primaryStartYear + (birthSeed % 2 === 0 ? 1 : 2);
  const startMonthIdx = (birthSeed % 12);
  const endMonthIdx = (startMonthIdx + 8) % 12;

  const primaryWindow = {
    id: 'primary-window',
    title: 'Primary Auspicious Marriage Window',
    startMonth: MONTH_NAMES[startMonthIdx],
    startYear: primaryStartYear,
    endMonth: MONTH_NAMES[endMonthIdx],
    endYear: primaryEndYear,
    ageRange: `Age ${(primaryStartYear - input.year).toFixed(1)} – ${(primaryEndYear - input.year + 0.5).toFixed(1)}`,
    probabilityScore: 88 + (birthSeed % 11), // 88% - 98%
    confidenceLevel: 'Very High',
    dashaCombination: `${seventhSignObj.lord} Mahadasha / Venus Antardasha`,
    dashaRole: 'Karaka planet synergy activating the 7th Kalatra Bhava and 2nd Kutumba Bhava',
    transitTriggers: [
      'Jupiter transit directly casts its 5th/9th auspicious aspect on your 7th house.',
      'Saturn transiting through a supportive Kendra reinforces commitment yogas.',
      'Double Transit Theory (Dwi-Gochar) condition fully satisfied during this interval.'
    ],
    astrologicalHighlights: [
      'Simultaneous transit alignment of Jupiter and Saturn on 7th lord',
      'Favorable Vimshottari Antardasha ruled by a Shubha Graha',
      'Activation of 2nd (Family Expansion) & 11th (Fulfilment of Desires) Bhavas'
    ],
    isPrimary: true,
  };

  const secondaryStartYear = primaryEndYear + 1;
  const secondaryEndYear = secondaryStartYear + 1;
  const secondaryWindow = {
    id: 'secondary-window',
    title: 'Secondary Favorable Marriage Window',
    startMonth: MONTH_NAMES[(startMonthIdx + 4) % 12],
    startYear: secondaryStartYear,
    endMonth: MONTH_NAMES[(endMonthIdx + 4) % 12],
    endYear: secondaryEndYear,
    ageRange: `Age ${(secondaryStartYear - input.year).toFixed(1)} – ${(secondaryEndYear - input.year + 0.5).toFixed(1)}`,
    probabilityScore: 74 + (birthSeed % 10), // 74% - 83%
    confidenceLevel: 'High',
    dashaCombination: `Jupiter Mahadasha / ${ZODIAC_SIGNS[(seventhHouseIndex + 2) % 12].lord} Antardasha`,
    dashaRole: 'Benefic Jupiter sub-period facilitating alliance talks and family harmony',
    transitTriggers: [
      'Jupiter enters a trinal house (Trikona) radiating positive energy to Lagna.',
      'Rahu-Ketu axis shifts to neutral positions, removing relationship turbulence.'
    ],
    astrologicalHighlights: [
      'Strong D9 Navamsa 7th lord activation',
      'Enhanced social circles leading to high-compatibility matrimonial proposals'
    ],
    isPrimary: false,
  };

  const tertiaryStartYear = secondaryEndYear + 1;
  const tertiaryEndYear = tertiaryStartYear + 1;
  const tertiaryWindow = {
    id: 'tertiary-window',
    title: 'Extended Favorable Window',
    startMonth: MONTH_NAMES[(startMonthIdx + 7) % 12],
    startYear: tertiaryStartYear,
    endMonth: MONTH_NAMES[(endMonthIdx + 7) % 12],
    endYear: tertiaryEndYear,
    ageRange: `Age ${(tertiaryStartYear - input.year).toFixed(1)} – ${(tertiaryEndYear - input.year + 0.5).toFixed(1)}`,
    probabilityScore: 62 + (birthSeed % 10),
    confidenceLevel: 'Moderate',
    dashaCombination: `Mercury Mahadasha / Moon Antardasha`,
    dashaRole: 'Emotional grounding and mutual understanding in mature relationship decisions',
    transitTriggers: [
      'Jupiter completes full circle aspecting natal Venus.',
      'Supportive Moon sub-period for solemnizing legal and cultural unions.'
    ],
    astrologicalHighlights: [
      'Clear matrimonial settlement after brief deliberation',
      'Auspicious period for destination wedding or cultural rituals'
    ],
    isPrimary: false,
  };

  // 7th House Analysis
  const beneficCount = (birthSeed % 3) + 1;
  const maleficCount = (birthSeed % 2);
  const house7 = {
    signName: seventhSignObj.name,
    signSanskrit: seventhSignObj.sanskrit,
    signLord: seventhSignObj.lord,
    element: seventhSignObj.element,
    planetsIn7th: beneficCount > 1 ? ['Venus (Shukra)', 'Mercury (Budha)'] : ['Jupiter (Guru)'],
    aspectingPlanets: maleficCount > 0 ? ['Saturn (Shani)'] : ['Jupiter (Guru)', 'Moon (Chandra)'],
    houseStrengthScore: 78 + (birthSeed % 18),
    strengthLabel: (78 + (birthSeed % 18)) > 88 ? 'Exceptionally Strong' : 'Strong',
    significanceSummary: `The 7th house (Kalatra Bhava) is situated in ${seventhSignObj.name} (${seventhSignObj.sanskrit}), governed by ${seventhSignObj.lord}. This ${seventhSignObj.element} sign orientation indicates an intellectually stimulating, respectful, and emotionally stabilizing partnership.`,
    maritalQualityInsight: `With ${beneficCount} natural benefics blessing the 7th quadrant, the native experiences high emotional companionship, mutual loyalty, and social ascension following the marriage ceremony.`
  };

  // 7th Lord Analysis
  const dignities = ['Exalted', 'Moolatrikona', 'Own Sign', 'Friendly Sign', 'Neutral Sign'];
  const chosenDignity = dignities[birthSeed % dignities.length];
  const lordPlacementHouse = ((birthSeed % 12) + 1);
  const lord7 = {
    lordPlanet: seventhSignObj.lord,
    sanskritName: seventhSignObj.lord === 'Venus' ? 'Shukra' : seventhSignObj.lord === 'Jupiter' ? 'Guru' : seventhSignObj.lord === 'Mars' ? 'Mangal' : seventhSignObj.lord === 'Mercury' ? 'Budha' : seventhSignObj.lord === 'Saturn' ? 'Shani' : 'Surya',
    placementHouse: lordPlacementHouse,
    placementSign: ZODIAC_SIGNS[(seventhHouseIndex + lordPlacementHouse - 1) % 12].name,
    dignity: chosenDignity,
    isCombust: false,
    isRetrograde: (birthSeed % 5 === 0),
    conjunctions: (birthSeed % 3 === 0) ? ['Jupiter', 'Mercury'] : ['Sun (Surya)'],
    impactOnTiming: `Your 7th lord is positioned in House ${lordPlacementHouse} in ${chosenDignity} status. This placement strongly aligns your marriage timing with career stability and family sanction.`,
    analysisText: `When the 7th lord is dignified in a Kendra or Trikona house, the proposal manifests smoothly once the designated Dasha sub-period begins, preventing unnecessary obstacles or prolonged delays.`
  };

  // Venus & Karaka Influence
  const isFemale = input.gender === 'female';
  const karakaName = isFemale ? 'Jupiter (Guru) & Venus (Shukra)' : 'Venus (Shukra)';
  const venusInfluence = {
    karakaPlanet: karakaName,
    placementHouse: ((birthSeed + 3) % 12) + 1,
    placementSign: ZODIAC_SIGNS[(birthSeed + 1) % 12].name,
    dignity: 'Well Placed (Subha Sthana)',
    harmonyScore: 84 + (birthSeed % 14),
    attractionType: isFemale ? 'Values wisdom, moral grounding, and mutual respect' : 'Values artistic grace, affection, and communicative balance',
    maritalBlissSummary: `Venus as the primary Karaka of marriage occupies an auspicious angle, bestowing romantic devotion, aesthetic lifestyle compatibility, and a cooperative life partner.`,
    relationshipAdvice: 'Nurture open communication during planetary sub-periods and honor mutual family traditions for sustained conjugal harmony.'
  };

  // Manglik (Kuja Dosha) Analysis
  const marsHouseCandidates = [1, 2, 4, 7, 8, 12, 3, 5, 9, 10, 11];
  const marsHouse = marsHouseCandidates[birthSeed % marsHouseCandidates.length];
  const isManglikPosition = [1, 2, 4, 7, 8, 12].includes(marsHouse);
  const isCancelled = isManglikPosition && (birthSeed % 2 === 0 || marsHouse === 2 || marsHouse === 12);
  
  let manglikStatus = 'No Manglik Dosha';
  let severityScore = 0;
  if (isManglikPosition) {
    if (isCancelled) {
      manglikStatus = 'Mild (Anshik) Manglik';
      severityScore = 25;
    } else {
      manglikStatus = 'Moderate Manglik';
      severityScore = 55;
    }
  }

  const manglik = {
    isManglik: isManglikPosition && !isCancelled,
    statusLabel: manglikStatus,
    marsHouse: marsHouse,
    marsSign: ZODIAC_SIGNS[(lagnaIndex + marsHouse - 1) % 12].name,
    isCancelled: isCancelled,
    cancellationReasons: isCancelled ? [
      'Mars is aspected by benefic Jupiter (Guru Drishti)',
      `Mars occupies a favorable sign (${ZODIAC_SIGNS[(lagnaIndex + marsHouse - 1) % 12].name}) where fiery intensity is mellowed`,
      'Benefic planets occupy the 1st and 7th houses, creating an effective Kuja Dosha Bhanga (neutralization)'
    ] : [],
    impactDescription: isManglikPosition
      ? isCancelled
        ? 'A mild Anshik Manglik formation is present in your chart, but it is neutralized by Jupiterian aspects. It will not cause any delay in marriage timing.'
        : 'Mars occupies a sensitive house for partnerships. While it brings drive and passion, balancing temperaments and matching charts ensures enduring bliss.'
      : 'Your birth chart is completely free from Manglik Dosha (Kuja Dosha). Mars is favorably posited without exerting any malefic affliction onto the 7th house.',
    mitigationAdvice: isManglikPosition
      ? 'Chanting the Hanuman Chalisa on Tuesdays or lighting a ghee lamp helps harmonize marital energies.'
      : 'No specific Mars remedial measures needed for marriage timing.',
    severityScore
  };

  // Dasha Analysis
  const dashaLords = ['Jupiter', 'Saturn', 'Mercury', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu'];
  const curMahaIndex = birthSeed % dashaLords.length;
  const currentMahaDasha = dashaLords[curMahaIndex];
  const currentAntarDasha = dashaLords[(curMahaIndex + 1) % dashaLords.length];
  const currentPratyantarDasha = dashaLords[(curMahaIndex + 3) % dashaLords.length];

  const dasha = {
    currentMahaDasha,
    currentAntarDasha,
    currentPratyantarDasha,
    periodStart: `March ${currentYear - 1}`,
    periodEnd: `November ${currentYear + 2}`,
    dashaMarriageFavorability: 91,
    dashaExplanation: `You are currently running the auspicious ${currentMahaDasha}-${currentAntarDasha} Dasha sequence. In Vedic astrology, this planetary combination activates the 7th house of marriage and the 11th house of wish fulfillment, creating a golden opportunity for matrimonial engagement and wedding celebrations.`,
    upcomingFavorableDashas: [
      {
        dashaPair: `${currentMahaDasha} / ${currentAntarDasha}`,
        startDate: `${MONTH_NAMES[startMonthIdx]} ${primaryStartYear}`,
        endDate: `${MONTH_NAMES[endMonthIdx]} ${primaryEndYear}`,
        marriagePotential: 'Peak Window',
        details: 'Highest planetary synergy. Ideal time for formal matchmaking, ring ceremonies, and matrimonial alliances.'
      },
      {
        dashaPair: `${currentMahaDasha} / ${dashaLords[(curMahaIndex + 2) % dashaLords.length]}`,
        startDate: `${MONTH_NAMES[(startMonthIdx + 4) % 12]} ${secondaryStartYear}`,
        endDate: `${MONTH_NAMES[(endMonthIdx + 4) % 12]} ${secondaryEndYear}`,
        marriagePotential: 'Strong Window',
        details: 'Supportive period with strong blessings from elders and family members.'
      }
    ]
  };

  // Transits Analysis (Guru Gochar & Shani Drishti)
  const transits = {
    jupiterTransitSign: 'Taurus (Vrishabha) / Gemini (Mithuna)',
    jupiterTransitHouse: 9,
    jupiterAspects7thOrLagna: true,
    jupiterGocharImpact: 'Jupiter is transiting through an auspicious trine (Dharma Bhava), casting its divine 9th aspect upon your natal 7th house, sanctioning auspicious ceremonies and relationship growth.',
    saturnTransitSign: 'Aquarius (Kumbha) / Pisces (Meena)',
    saturnTransitHouse: 11,
    saturnAspects7thOrLagna: true,
    saturnGocharImpact: 'Saturn transits the 11th house of fulfillment, giving stability and solemn maturity to long-term life decisions.',
    doubleTransitActive: true,
    doubleTransitExplanation: 'According to classical Parashari Jyotish, marriage occurs only when BOTH Jupiter and Saturn simultaneously influence the 7th house or 7th lord by transit or aspect (Double Transit Phenomenon / Dwi-Gochar). Your chart currently satisfies this sacred criterion.',
    nextFavorableTransitWindow: `${primaryStartYear} to ${primaryEndYear}`
  };

  // Navamsa D9 Analysis
  const navamsaD9 = {
    d9LagnaSign: ZODIAC_SIGNS[(lagnaIndex + 8) % 12].name,
    d9LagnaLord: ZODIAC_SIGNS[(lagnaIndex + 8) % 12].lord,
    d9SeventhSign: ZODIAC_SIGNS[(seventhHouseIndex + 8) % 12].name,
    d9SeventhLord: ZODIAC_SIGNS[(seventhHouseIndex + 8) % 12].lord,
    d9SeventhPlanets: ['Jupiter', 'Venus'],
    spiritualBondStrength: 'Deep & Transformative',
    marriageQualityScore: 89,
    d9Insights: 'The Navamsa (D9) chart is the ultimate divisional chart for assessing soul-level compatibility and the reality of post-marriage life. Your D9 7th house receives strong benefic radiation, confirming a harmonious partnership with shared spiritual values.',
    d9SpouseNature: 'Your partner in the D9 chart is indicated to be intellectually sharp, culturally grounded, dignified in demeanour, and emotionally supportive through life milestones.'
  };

  // Supporting and Delaying Factors
  const factors = {
    supporting: [
      {
        id: 'sup-1',
        title: 'Active Jupiter (Guru) Aspect on 7th House',
        description: 'Divine grace removes confusion and accelerates matrimonial proposals.',
        weight: 'High',
        astrologicalReason: 'Jupiter 5th/9th special aspect cleanses malefic traces.'
      },
      {
        id: 'sup-2',
        title: 'Strong 7th Lord Dignity',
        description: 'The ruler of your marriage house is placed in an auspicious sign, ensuring mutual attraction.',
        weight: 'High',
        astrologicalReason: `${seventhSignObj.lord} is strong and un-afflicted in Kendra/Trikona.`
      },
      {
        id: 'sup-3',
        title: 'Favorable Vimshottari Sub-period',
        description: 'The current planetary sub-period naturally invites family celebration and partner union.',
        weight: 'Medium',
        astrologicalReason: '2nd and 7th Bhava connection in operating Dasha.'
      }
    ],
    delaying: [
      {
        id: 'del-1',
        title: 'Saturn\'s Cautionary Glance on Relationship Affairs',
        description: 'Saturn creates thoughtful contemplation before final commitment, ensuring you choose the right partner rather than rushing.',
        weight: 'Medium',
        astrologicalReason: 'Shani Drishti instills maturity and delays impulsive vows.',
        recommendedRemedy: 'Lighting a mustard oil lamp under a Peepal tree on Saturday evenings.'
      },
      {
        id: 'del-2',
        title: 'High Standards in Partner Selection',
        description: 'Placement of Mercury/Jupiter indicates analytical criteria for education and values.',
        weight: 'Low',
        astrologicalReason: 'Analytical Graha influencing intellect house.',
        recommendedRemedy: 'Clarity meditation and consultation with parents/elders.'
      }
    ],
    netTimingBalance: 'Accelerating',
    balanceScore: 86
  };

  // Partner Indications
  const partnerIndications = {
    likelyDirection: ['North-East', 'East', 'North-West', 'South-East'][birthSeed % 4],
    temperament: 'Calm, thoughtful, dignified, and value-driven with a balanced sense of humor',
    professionDomains: [
      'Technology / Engineering / Software Architecture',
      'Finance, Consulting & Management',
      'Education, Law, or Civil Administration',
      'Creative Design, Architecture & Media'
    ],
    physicalAttributes: [
      'Pleasing expressive eyes and balanced facial features',
      'Medium to tall height with graceful posture',
      'Professional grooming with classic elegance'
    ],
    backgroundOrigin: 'Respectable cultural heritage, well-educated family background, possibly connected through family networking, education, or professional circles.',
    meetingCircumstance: 'Likely through formal matrimonial introductions, trusted mutual family connections, or workplace/educational symposiums.',
    compatibilityHighlights: 'High intellectual sync, mutual encouragement in career pursuits, and deep emotional trust.'
  };

  // Remedies
  const remedies = [
    {
      id: 'rem-1',
      title: 'Shukra (Venus) Beej Mantra Chanting',
      category: 'Mantra',
      planetOrDeity: 'Goddess Lakshmi & Shukra Deva',
      auspiciousDayTime: 'Friday mornings during Shukla Paksha (108 times)',
      instructions: 'Chant "Om Draam Dreem Droum Sah Shukraya Namaha" facing East after lighting a white floral incense.',
      benefit: 'Enhances romantic attraction, removes marriage blockages, and cultivates domestic happiness.'
    },
    {
      id: 'rem-2',
      title: 'Guru (Jupiter) Blessings & Charity',
      category: 'Fasting & Charity',
      planetOrDeity: 'Lord Vishnu & Brihaspati Deva',
      auspiciousDayTime: 'Thursday mornings',
      instructions: 'Donate yellow lentils (chana dal), turmeric, or yellow sweets to scholars or needy individuals.',
      benefit: 'Invokes divine sanction for wedding timing and ensures partner with high ethical standards.'
    },
    {
      id: 'rem-3',
      title: 'Auspicious Gemstone Consultation',
      category: 'Gemstone',
      planetOrDeity: 'Diamond / White Zircon or Yellow Sapphire (Pukhraj)',
      auspiciousDayTime: 'Worn on an auspicious Nakshatra after energization',
      instructions: 'Consult your detailed natal chart to select between a Silver-set White Zircon or Gold-set Yellow Sapphire.',
      benefit: 'Fortifies the 7th lord and attracts supportive marital vibrations.'
    },
    {
      id: 'rem-4',
      title: 'Gauri Shankar / Shiva-Parvati Puja',
      category: 'Ritual (Puja)',
      planetOrDeity: 'Lord Shiva & Goddess Parvati',
      auspiciousDayTime: 'Mondays or Pradosham days',
      instructions: 'Offer water, milk, and bilva leaves on the Shiva Lingam with prayers for a harmonious life partner.',
      benefit: 'Resolves planetary afflictions and manifests marital union with divine blessings.'
    }
  ];

  return {
    profile: input,
    calculatedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    currentAge,
    ascendantSign,
    moonSign,
    nakshatra,
    summaryQuote: `According to Parashari Jyotish principles, your strongest marriage alignment unfolds between ${MONTH_NAMES[startMonthIdx]} ${primaryStartYear} and ${MONTH_NAMES[endMonthIdx]} ${primaryEndYear}, powered by active ${seventhSignObj.lord} sub-periods and supportive Double Transits.`,
    overallTimingVerdict: `Peak Marriage Window: ${primaryStartYear} – ${primaryEndYear}`,
    primaryWindow,
    allWindows: [primaryWindow, secondaryWindow, tertiaryWindow],
    house7,
    lord7,
    venusInfluence,
    manglik,
    dasha,
    transits,
    navamsaD9,
    factors,
    partnerIndications,
    remedies
  };
}
