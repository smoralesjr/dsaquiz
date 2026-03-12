export type CaucusId =
  | "21CS"
  | "BnR"
  | "BxB"
  | "CC"
  | "Constellation"
  | "Emerge"
  | "GW"
  | "LSC"
  | "MUG"
  | "NS"
  | "RS"
  | "RnR"
  | "SMC"
  | "SoR";

export interface Caucus {
  id: CaucusId;
  name: string;
  website?: string;
  publication?: string;
  emoji?: string;
  founded?: string;
  description: string;
}

export const caucuses: Record<CaucusId, Caucus> = {
  "21CS": {
    id: "21CS",
    name: "21st Century Socialism (21CS)",
    website: "https://www.21csocialism.org/",
    description:
      "A Marxist caucus emphasizing ideological clarity and a disciplined approach.",
  },
  BnR: {
    id: "BnR",
    name: "Bread and Roses",
    website: "https://breadandrosesdsa.org/",
    publication: "The Call",
    emoji: "🥖🌹",
    founded: "2019",
    description:
      'Focuses on the "Rank-and-File Strategy" in labor, a "dirty break" from the Democratic Party, and democratic socialism rooted in class struggle.',
  },
  BxB: {
    id: "BxB",
    name: "Brick by Brick",
    website: "https://brick-by-brick.nyc/",
    emoji: "🧱",
    founded: "2025",
    description: "A coalition of caucused and independent members in NYC-DSA.",
  },
  CC: {
    id: "CC",
    name: "Communist Caucus",
    website: "https://communistcaucus.com/",
    publication: "Partisan",
    emoji: "♠️",
    description:
      "Focuses on base-building, tenant organizing, and militant class independence outside the state.",
  },
  Constellation: {
    id: "Constellation",
    name: "Constellation",
    website: "https://www.ydsaconstellation.org/",
    founded: "2022",
    description:
      "A student-focused caucus emphasizing mass campaigns and structural reforms.",
  },
  Emerge: {
    id: "Emerge",
    name: "Emerge",
    website: "https://dsaemerge.org/",
    publication: "Partisan",
    emoji: "🌸",
    founded: "2018",
    description:
      "A communist caucus focused on base-building, dual power, and anti-imperialism.",
  },
  GW: {
    id: "GW",
    name: "Groundwork",
    website: "https://www.groundworkdsa.com/",
    publication: "Power Map",
    emoji: "🦧/🪴",
    founded: "2021",
    description:
      "Emphasizes mass campaigns, broad coalitions, and embedding in the working class.",
  },
  LSC: {
    id: "LSC",
    name: "Libertarian Socialist Caucus",
    website: "https://dsa-lsc.org/",
    publication: "Pamphlets",
    description:
      "Focuses on decentralization, mutual aid, dual power, and anti-authoritarianism, skeptical of state power.",
  },
  MUG: {
    id: "MUG",
    name: "Marxist Unity Group",
    website: "https://www.marxistunity.com/",
    publication: "Light and Air / Cosmonaut",
    founded: "2021",
    description:
      'Advocates for democratic republicanism, a strict adherence to Marxist principles, and an independent working-class party (a "clean break").',
  },
  NS: {
    id: "NS",
    name: "North Star",
    website: "https://www.dsanorthstar.org/",
    founded: "2018",
    description:
      "Focuses on broad popular front coalitions, pragmatic electoral gains, and stopping the right wing.",
  },
  RS: {
    id: "RS",
    name: "Red Star",
    website: "https://redstarcaucus.org/",
    publication: "Zenith",
    founded: "2019",
    description:
      "A Marxist-Leninist leaning caucus focusing on base-building, anti-imperialism, and a disciplined, cadre-style organization.",
  },
  RnR: {
    id: "RnR",
    name: "Reform and Revolution",
    website: "https://reformandrevolution.org/",
    publication: "Reform & Revolution",
    founded: "2019",
    description:
      "A Marxist caucus that advocates for a clean break from the Democrats, emphasizing class struggle and socialist revolution.",
  },
  SMC: {
    id: "SMC",
    name: "Socialist Majority Caucus",
    website: "https://www.socialistmajority.com/",
    publication: "The Agitator",
    founded: "2018",
    description:
      "Favors practical, immediate gains, working within the Democratic ballot line, broad coalitions, and building administrative capacity.",
  },
  SoR: {
    id: "SoR",
    name: "Springs of Revolution",
    website: "https://sordsa.org/",
    emoji: "🌺",
    founded: "2023",
    description:
      "Focuses on democratic republicanism, rigorous political education, and anti-imperialism.",
  },
};

export interface Answer {
  text: string;
  points: Partial<Record<CaucusId, number>>;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "1. Electoral Strategy: How should DSA approach the Democratic Party and elections?",
    answers: [
      {
        text: "We should build an independent, working-class mass party right now and run our own candidates off the Democratic line (Clean Break).",
        points: { MUG: 1, RnR: 1 },
      },
      {
        text: "We should use the Democratic ballot line tactically for now, but with the explicit long-term goal of breaking away to form an independent party (Dirty Break).",
        points: { BnR: 1, Constellation: 1 },
      },
      {
        text: "We should focus on winning elections, building progressive governing coalitions, and fighting the right-wing, rather than worrying about breaking from the Democratic Party line.",
        points: { SMC: 1, NS: 1, BxB: 1 },
      },
      {
        text: "Electoral politics are largely a dead end or a secondary tactic. We should focus our energy on organizing the unorganized outside the state (tenant unions, labor, mutual aid).",
        points: { CC: 1, Emerge: 1, LSC: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "2. Labor Strategy: Where should DSA focus its labor organizing efforts?",
    answers: [
      {
        text: "The 'Rank-and-File Strategy': Getting jobs in strategic, unionized sectors (education, logistics, healthcare) to build militant, democratic opposition caucuses within existing unions.",
        points: { BnR: 1, Constellation: 1 },
      },
      {
        text: "Base-building: Organizing the unorganized through independent, militant formations like tenant unions, transit riders unions, and independent worker committees.",
        points: { CC: 1, Emerge: 1, RS: 1, LSC: 1 },
      },
      {
        text: "Broad labor solidarity: Supporting existing unions, passing pro-labor legislation (like the PRO Act), and working alongside current union leadership.",
        points: { SMC: 1, NS: 1, BxB: 1 },
      },
      {
        text: "Fusing the labor movement with the socialist political movement; unions alone are insufficient without a Marxist political program guiding them.",
        points: { MUG: 1, RnR: 1, "21CS": 1 },
      },
    ],
  },
  {
    id: 3,
    text: "3. Elected Officials: How should DSA manage endorsed politicians (e.g., AOC, Rashida Tlaib)?",
    answers: [
      {
        text: "They must act as a disciplined, unified bloc that takes binding direction from DSA's democratic bodies. If they cross major red lines, they must be censured or expelled.",
        points: { MUG: 1, RS: 1, RnR: 1, "21CS": 1 },
      },
      {
        text: "We should have high expectations for them to act as socialist tribunes, but we must build a mass working-class base first before we have the power to enforce strict discipline.",
        points: { BnR: 1, GW: 1, Constellation: 1 },
      },
      {
        text: "We should maintain a collaborative relationship, recognizing they operate in a hostile environment, and avoid public attacks that alienate our allies in office.",
        points: { SMC: 1, NS: 1, BxB: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "4. The State and Path to Power: How do we achieve socialism?",
    answers: [
      {
        text: "A 'war of position': Winning structural reforms, electing socialists, and building institutional power until we can democratically transform the state.",
        points: { SMC: 1, GW: 1, NS: 1, BxB: 1 },
      },
      {
        text: "Democratic Republicanism: We must fight for a democratic constitution, replacing the undemocratic US Constitution, as a precondition for working-class rule.",
        points: { MUG: 1, SoR: 1 },
      },
      {
        text: "Class struggle and rupture: We must build working-class power to the point of a decisive break with the capitalist state, replacing it with institutions of worker control.",
        points: { BnR: 1, RnR: 1, RS: 1, "21CS": 1 },
      },
      {
        text: "Dual Power: Building alternative, cooperative institutions and horizontal networks that render the capitalist state obsolete from the ground up.",
        points: { LSC: 1, CC: 1, Emerge: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "5. Internationalism & Anti-Imperialism: What should DSA's foreign policy look like?",
    answers: [
      {
        text: "The main enemy is at home (US Imperialism). We should focus on defeating the US war machine and offer solidarity to nations and movements resisting US hegemony.",
        points: { RS: 1, "21CS": 1, SoR: 1, Emerge: 1 },
      },
      {
        text: "'Third Camp' Internationalism: We must oppose US imperialism while also standing in solidarity with democratic working-class uprisings against capitalist/authoritarian states globally (neither Washington nor Moscow/Beijing).",
        points: { BnR: 1, RnR: 1, LSC: 1 },
      },
      {
        text: "Pragmatic solidarity: Focusing on international campaigns where we can build broad coalitions and have a tangible legislative impact in the US (like cutting military funding).",
        points: { SMC: 1, NS: 1, GW: 1, BxB: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "6. Internal Organization: How should DSA function internally?",
    answers: [
      {
        text: "A disciplined, cadre-style organization where members are deeply educated in Marxism and bound by democratic decisions.",
        points: { RS: 1, MUG: 1, "21CS": 1, RnR: 1 },
      },
      {
        text: "A mass, multi-tendency organization. We need national campaigns and strategic focus, but not strict ideological uniformity.",
        points: { BnR: 1, GW: 1, SMC: 1, BxB: 1, Constellation: 1 },
      },
      {
        text: "A highly decentralized organization focused on local chapters, autonomous direct action, and avoiding bureaucratic bloat.",
        points: { LSC: 1, CC: 1, Emerge: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "7. Immediate Priorities: What is the most urgent task for the organization right now?",
    answers: [
      {
        text: "Defeating the fascist threat of the Right by participating in broad, popular-front electoral coalitions.",
        points: { NS: 1, SMC: 1, BxB: 1 },
      },
      {
        text: "Mass campaigns for universal demands (like free public transit, public power, green new deal) to grow the socialist movement.",
        points: { GW: 1, BnR: 1, Constellation: 1 },
      },
      {
        text: "Embedding ourselves in the working class through tenant organizing and workplace base-building.",
        points: { CC: 1, Emerge: 1, RS: 1, LSC: 1 },
      },
      {
        text: "Marxist political education, ideological clarification, and party-building.",
        points: { MUG: 1, SoR: 1, RnR: 1, "21CS": 1 },
      },
    ],
  },
  {
    id: 8,
    text: "8. Approach to the Right Wing & Fascism: How do we defeat the ascendant far-right?",
    answers: [
      {
        text: "Build broad, popular-front alliances (even with liberals if necessary) to defeat the immediate fascist threat.",
        points: { NS: 1, SMC: 1, BxB: 1 },
      },
      {
        text: "Fight the right through independent working-class militancy and mass movements, refusing to ally with capitalist parties.",
        points: { BnR: 1, GW: 1, Constellation: 1 },
      },
      {
        text: "Confront the right in the streets through direct action, community self-defense, and building dual power.",
        points: { CC: 1, Emerge: 1, LSC: 1 },
      },
      {
        text: "The rise of the right is a symptom of capitalist decay; we must focus on building a disciplined revolutionary party to overthrow the system entirely.",
        points: { RS: 1, MUG: 1, RnR: 1, "21CS": 1 },
      },
    ],
  },
  {
    id: 9,
    text: "9. Climate Change Strategy: How should socialists tackle the climate crisis?",
    answers: [
      {
        text: "A Green New Deal won through mass legislative campaigns, prioritizing union jobs and public ownership.",
        points: { BnR: 1, SMC: 1, GW: 1, Constellation: 1, BxB: 1 },
      },
      {
        text: "Nationalize the fossil fuel industry immediately without compensation as part of a socialist transition.",
        points: { MUG: 1, RnR: 1, "21CS": 1 },
      },
      {
        text: "Eco-socialism from below: direct action against fossil fuel infrastructure and building sustainable, autonomous local communes.",
        points: { LSC: 1, CC: 1, Emerge: 1 },
      },
      {
        text: "Anti-imperialist eco-socialism: We must prioritize ending the US military's massive carbon footprint and unequal exchange with the Global South.",
        points: { RS: 1, SoR: 1 },
      },
    ],
  },
  {
    id: 10,
    text: "10. Role of the DSA National Organization: What should the national body do?",
    answers: [
      {
        text: "Provide resources, training, and coordination for major, unified mass campaigns across all chapters.",
        points: { BnR: 1, GW: 1, SMC: 1, Constellation: 1, BxB: 1 },
      },
      {
        text: "Focus heavily on rigorous political education, publishing theoretical materials, and forging ideological unity.",
        points: { MUG: 1, SoR: 1, "21CS": 1 },
      },
      {
        text: "Mostly stay out of the way; power, funds, and decision-making should remain in local chapters and working groups.",
        points: { LSC: 1, CC: 1, Emerge: 1 },
      },
      {
        text: "Enforce binding political decisions and discipline across all chapters so the organization can act as a unified cadre.",
        points: { RS: 1, RnR: 1 },
      },
    ],
  },
  {
    id: 11,
    text: "11. Housing Strategy: How do we secure housing for all?",
    answers: [
      {
        text: "Pass universal rent control, repeal the Faircloth Amendment, and build mass social housing via legislative action.",
        points: { SMC: 1, BnR: 1, Constellation: 1, GW: 1, BxB: 1 },
      },
      {
        text: "Build autonomous, militant tenant unions capable of organizing rent strikes and resisting evictions directly.",
        points: { CC: 1, Emerge: 1, RS: 1, LSC: 1 },
      },
      {
        text: "Both are necessary, but housing struggles must ultimately be tied to a broader Marxist political program for working-class state power.",
        points: { MUG: 1, RnR: 1, "21CS": 1, SoR: 1 },
      },
    ],
  },
  {
    id: 12,
    text: "12. Healthcare: What is our stance on Medicare for All?",
    answers: [
      {
        text: "It is a central, strategic priority because it’s a universal class demand that builds mass working-class solidarity.",
        points: { BnR: 1, GW: 1, SMC: 1, Constellation: 1, BxB: 1 },
      },
      {
        text: "It is a key demand, but should be combined with the fight for a democratic republic, as the current constitution blocks such sweeping reforms.",
        points: { MUG: 1, SoR: 1 },
      },
      {
        text: "It is a good reform, but we cannot ultimately win it under the current capitalist state; it requires a revolutionary rupture.",
        points: { RnR: 1, "21CS": 1, RS: 1 },
      },
      {
        text: "State-run healthcare is not the ultimate goal; we should build autonomous health clinics and mutual aid medical networks.",
        points: { LSC: 1, CC: 1, Emerge: 1 },
      },
    ],
  },
  {
    id: 13,
    text: "13. Electoral Demographics & Base: Who is our primary audience right now?",
    answers: [
      {
        text: "We must win over the broad, multiracial working class by focusing on universally popular economic demands.",
        points: { BnR: 1, GW: 1, Constellation: 1 },
      },
      {
        text: "We should consolidate progressive voters, young people, and union members within the existing Democratic electorate.",
        points: { SMC: 1, NS: 1, BxB: 1 },
      },
      {
        text: "We should root ourselves in the most marginalized and exploited sections of the working class (tenants, unorganized workers) who are alienated from the electoral system.",
        points: { CC: 1, Emerge: 1, RS: 1, LSC: 1 },
      },
      {
        text: "We need to build a politically conscious vanguard of the working class deeply dedicated to Marxist principles.",
        points: { MUG: 1, "21CS": 1, SoR: 1, RnR: 1 },
      },
    ],
  },
  {
    id: 14,
    text: "14. Approach to Policing and Prisons: How do we achieve abolition?",
    answers: [
      {
        text: "Defund the police, redirect funds to social services, and elect reformist prosecutors to mitigate harm.",
        points: { SMC: 1, NS: 1, GW: 1, Constellation: 1, BxB: 1 },
      },
      {
        text: "Abolition through dual power: build community self-defense and transformative justice networks to make police obsolete.",
        points: { LSC: 1, Emerge: 1, CC: 1 },
      },
      {
        text: "Police are the armed wing of the capitalist state; abolition requires the complete dismantling of the state apparatus through revolution.",
        points: { RS: 1, RnR: 1, "21CS": 1 },
      },
      {
        text: "Demand democratic community control over the police as a transitional step toward dismantling the capitalist state apparatus.",
        points: { MUG: 1, SoR: 1 },
      },
    ],
  },
  {
    id: 15,
    text: "15. Role of Mutual Aid: Is mutual aid a core socialist strategy?",
    answers: [
      {
        text: "Yes, it is a crucial tool for survival and building dual power outside the state, prefiguring the society we want.",
        points: { LSC: 1, Emerge: 1 },
      },
      {
        text: "It is a useful base-building tool to build trust in the community, but not a replacement for taking political power.",
        points: { CC: 1, RS: 1 },
      },
      {
        text: "It is mostly a distraction from the mass organizing and class struggle needed to win structural reforms from the state.",
        points: { BnR: 1, MUG: 1, RnR: 1, "21CS": 1, SoR: 1 },
      },
      {
        text: "It is a good supplement to mass campaigns, helping sustain people while we fight for state provision of basic needs.",
        points: { GW: 1, SMC: 1, Constellation: 1, BxB: 1 },
      },
    ],
  },
  {
    id: 16,
    text: "16. Anti-Oppression and Identity: How do race, gender, and class intersect?",
    answers: [
      {
        text: "Class is the primary contradiction; universal economic programs are the most effective way to combat racism and sexism.",
        points: { BnR: 1, "21CS": 1 },
      },
      {
        text: "Class struggle must deeply integrate anti-racist, feminist, and queer liberation struggles; they are inseparable.",
        points: { GW: 1, SMC: 1, Constellation: 1, BxB: 1, RnR: 1 },
      },
      {
        text: "Oppression is upheld by imperialism; national liberation and militant defense of marginalized groups are central.",
        points: { RS: 1, Emerge: 1, SoR: 1 },
      },
      {
        text: "All forms of hierarchy and domination (including race, gender, and state power) must be actively dismantled through prefigurative politics.",
        points: { LSC: 1, CC: 1 },
      },
    ],
  },
  {
    id: 17,
    text: "17. Labor Union Bureaucracy: How should we approach existing union leadership?",
    answers: [
      {
        text: "We must fight the conservative union bureaucracy by building militant, democratic rank-and-file caucuses.",
        points: { BnR: 1, Constellation: 1 },
      },
      {
        text: "We should work collaboratively with existing union leadership when they align with our goals to maximize our immediate impact.",
        points: { SMC: 1, NS: 1, BxB: 1 },
      },
      {
        text: "Traditional unions are structurally compromised by labor law; we should build independent, unrecognized worker committees.",
        points: { CC: 1, LSC: 1, Emerge: 1 },
      },
      {
        text: "The union bureaucracy is a tool of class collaboration; communists must wage a relentless political struggle to win leadership of the labor movement.",
        points: { MUG: 1, RnR: 1, "21CS": 1, RS: 1, SoR: 1 },
      },
    ],
  },
  {
    id: 18,
    text: "18. Approach to the Constitution: What is our stance on the US Constitution?",
    answers: [
      {
        text: "The US Constitution is fundamentally undemocratic and designed to thwart majority rule; we must call for a new, democratic constitution.",
        points: { MUG: 1, SoR: 1 },
      },
      {
        text: "The system is rigged, but we can win significant reforms and build power within the current constitutional framework.",
        points: { SMC: 1, BnR: 1, GW: 1, Constellation: 1, BxB: 1 },
      },
      {
        text: "The constitution is irrelevant; all states are inherently oppressive, and we should focus on building power outside of them entirely.",
        points: { LSC: 1, CC: 1, Emerge: 1 },
      },
      {
        text: "The constitution is a bourgeois document; it will be swept away during the socialist revolution and replaced by workers' councils.",
        points: { RnR: 1, RS: 1, "21CS": 1 },
      },
    ],
  },
  {
    id: 19,
    text: "19. Publication and Media Strategy: What media should DSA focus on?",
    answers: [
      {
        text: "We need a unified, mass-distributed popular publication to agitate the working class and popularize socialist ideas.",
        points: { BnR: 1, GW: 1, Constellation: 1 },
      },
      {
        text: "We should focus on rigorous Marxist theoretical journals to educate members and forge a coherent political line.",
        points: { MUG: 1, RS: 1, "21CS": 1, SoR: 1, RnR: 1 },
      },
      {
        text: "Pamphlets, zines, and localized media that encourage decentralized action and political education are best.",
        points: { LSC: 1, Emerge: 1, CC: 1 },
      },
      {
        text: "Mainstream media engagement and building progressive media ecosystems are key to reaching the broader public.",
        points: { SMC: 1, NS: 1, BxB: 1 },
      },
    ],
  },
  {
    id: 20,
    text: "20. The Ultimate Goal: What does a 'mass working class party' look like?",
    answers: [
      {
        text: "A broad, millions-strong organization rooted in unions and social movements, capable of winning elections and enacting a socialist program.",
        points: { BnR: 1, GW: 1, SMC: 1, Constellation: 1, BxB: 1 },
      },
      {
        text: "A disciplined, principled Marxist party that unapologetically champions working-class independence and democratic republicanism.",
        points: { MUG: 1, SoR: 1 },
      },
      {
        text: "A revolutionary vanguard party that leads the working class in dismantling the capitalist state.",
        points: { RS: 1, RnR: 1, "21CS": 1 },
      },
      {
        text: "We don't need a traditional 'party' at all; we need a mass federation of autonomous worker and community councils.",
        points: { LSC: 1, CC: 1, Emerge: 1 },
      },
    ],
  },
];
