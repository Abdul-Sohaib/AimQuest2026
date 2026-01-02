import eventImg1 from "../assets/corememberby.png";
import eventImg2 from "../assets/corememberwomen.png";
import prayasSymbol from "../assets/prayas-symbol.png";
import acumenSymbol from "../assets/acumenimg.png";
import admakingSymbol from "../assets/admakingimg.png";
import debateSymbol from "../assets/acumenimg.png";
import talenthuntSymbol from "../assets/talenthuntimg.png";
import aadhiyanSymbol from "../assets/aadhiyanimg.png";
import fashionshowSymbol from "../assets/fashionshowimg.png";
import mysticfaceSymbol from "../assets/mysticfaceimg.png";

export const eventsData = [
  {
    id: 1,
    name: "PRAYAS 4.0",
    description: "Give your business the first wind it deserves. Pitch in your business ideas in front of judges and win a chance to earn handsome prizes, including expert feedback, mentorship and guidance and Prize Money",
    eventSymbol: prayasSymbol,
    prizes: [
      { image:eventImg1,amount:"5000", certificate:"Expert Guidance and Mentorship programme" },
      { image:eventImg2,amount:"3000", certificate:"Expert Guidance provided in future" },
      { image:eventImg1,amount:"2000", certificate:"Guidance provided when seek" },
    ],
    rules:[
      "Pitch Authentic business ideas to judges.",
      "Time duration: to be allotted",
      "Group pitches (Maximum members: 5)",
      "No usage of AI or any software for ease of access"
    ],
    prospective_participants:[
      "Business students or prospective Future Entrepreneurs from all over Assam."
    ],
    judge:[
      "Prof. Pradeep Kumar Jain (Director of MBA program, Gauhati University)"
    ],
    marketings:[
      "Online Mode: Social media posts in Instagram and Facebook under #hashtags like: #prayas4.0 #businesspitches",
      "Online Mode: MEMES made by SARANGA DAS shared in Social Media",
      "Offline Mode: Visiting local Business Schools like Girijananda Chowdhury University",
      "Offline Mode: Commerce College, Gauhati University, NERIM, AIMT, Scholars Academy"
    ],
    other_requirements:[
      "Must be a resident of India.",
      "Must abide by the rules put in by the Host Institute."
    ]
  },
  {
    id: 2,
    name: "THE ACUMEN",
    description: "Test your business brain and challenge your corporate IQ. Participate in an exciting quiz that covers real-world business scenarios, marketing insights, corporate strategies, finance fundamentals and current affairs. Compete with sharp minds, showcase your knowledge, and stand a chance to win attractive prizes, recognition, and certificates of excellence",
    eventSymbol: acumenSymbol,
    prizes: [
      { image:eventImg1, amount:"5000", certificate:"Certificate of Excellence" },
      { image:eventImg2, amount:"3000", certificate:"Certificate of Achievement" },
      { image:eventImg1, amount:"2000", certificate:"Certificate of Participation" },
    ],
    rules:[
      "Team participation only. Maximum members: 2.",
      "Time duration: as allotted per round by organizers.",
      "No use of AI, mobile phones, laptops, or any external software or reference material.",
      "Answers must be given only when called upon; no shouting out or discussing during others' turns.",
      "Decisions of the quizmasters or judges are final and binding."
    ],
    prospective_participants: [
      "Business students, management aspirants, and quiz enthusiasts from colleges and universities across North East"
    ],
    marketings:[
      "Online Mode: Social media posts in Instagram and Facebook",
      "Offline Mode: Visiting local Business Schools like Girijananda Chowdhury University",
      "Offline Mode: Commerce College, Gauhati University, NERIM, AIMT, Scholars Academy"
    ],
    other_requirements:[
      "Must be a resident of India.",
      "Must abide by the rules put in by the Host Institute."
    ]
  },
  {
    id: 3,
    name: "PANACHE PALOOZA",
    description: "Fashion and style event celebrating creativity, design, and runway presentations.",
    eventSymbol: fashionshowSymbol,
    prizes: [
      { image:eventImg1, amount:"2000", certificate:"Certificate of Appreciation" },
      { image:eventImg2, amount:"2000", certificate:"Certificate of Appreciation" },
      { image:eventImg1, amount:"2000", certificate:"Certificate of Appreciation" },
    ],
    rules:[
      "Solo or group entry",
      "Original designs only",
      "Time limit: 15 minutes"
    ],
    prospective_participants:[
      "Fashion enthusiasts and design students from across the region"
    ],
    marketings:[
      "Online Mode: Social media posts showcasing previous fashion events",
      "Offline Mode: Visiting fashion and design institutes"
    ],
    other_requirements:[
      "Must abide by the rules put in by the Host Institute."
    ]
  },
  {
    id: 4,
    name: "TALENT HUNT",
    description: "Talent Hunt is a platform for school and college students across the Northeast to showcase their creativity and skills. The event includes Dance, Singing, and a 60-Seconds Showdown where participants can present any unique talent apart from dance and singing, encouraging confidence, innovation, and self-expression.",
    eventSymbol: talenthuntSymbol,
    prizes: [
      { image:eventImg1, amount:"5000", certificate:"Winner's Trophy & Certificate" },
      { image:eventImg2, amount:"3000", certificate:"Runner-up Certificate" },
      { image:eventImg1, amount:"2000", certificate:"Certificate of Participation" },
    ],
    rules: [
      "The event is open to school students and college students across Northeast India.",
      "Participation can be solo or group-based, depending on the category.",
      "Time limits: Dance: 2–4 minutes",
      "Singing: 2–4 minutes",
      "60-Seconds Showdown: 60 secs per participant",
      "Participants must carry their own props, instruments, or accessories if required.",
      "Vulgarity, offensive content, or inappropriate language is strictly prohibited.",
      "Pre-recorded vocals are not allowed for singing performances.",
      "Participants must report at least 30 minutes before their scheduled performance time.",
      "The decision of the judges will be final and binding.",
      "Organizing committee reserves the right to modify rules if required."
    ],
    prospective_participants:[
      "School students (Classes IX–XII), Undergraduate and Postgraduate college students, Students from institutions across the Northeastern states of India"
    ],
    marketings:[
      "Online Mode: Social media promotions via Instagram, Facebook & WhatsApp",
      "Online Mode: Digital posters and reels",
      "Offline Mode: College notice boards and campus promotions",
      "Offline Mode: Invitations to nearby schools and colleges"
    ],
    other_requirements:[
      "Must abide by the rules put in by the Host Institute."
    ]
  },
  {
    id: 5,
    name: "MYSTIC FACES",
    description: "Unmask your imagination. Transform the human face into a living work of art. A platform for artists to showcase their skills in blending, shading, and storytelling through face painting. Win a chance to earn recognition, certificates, and Prize Money.",
    eventSymbol: mysticfaceSymbol,
    prizes: [
      { image:eventImg1, amount:"5000", certificate:"Certificate of Excellence" },
      { image:eventImg2, amount:"3000", certificate:"Certificate of Appreciation" },
      { image:eventImg1, amount:"2000", certificate:"Certificate of Participation" },
    ],
    rules:[
      "Theme: The theme will be announced before the competition",
      "Time Duration: 60 Minutes",
      "Team Size: 2 members per team (1 Artist + 1 Model).",
      "Materials: Participants must use skin-friendly, non-toxic paints. Use of Acrylic/Poster colours is strictly prohibited for safety.",
      "Prohibitions: No use of masks, prosthetics, or reference photos during the competition.",
    ],
    prospective_participants:[
      "Fine Arts students, Makeup enthusiasts, and creative talent from colleges across Guwahati."
    ],
    marketings:[
      "Online Mode: Social media reels featuring time-lapse face painting. Hashtags: #MysticFace #AimQuest2026 #FaceArtGuwahati",
      "Offline Mode: Visiting Art and Design institutes like NIFT Guwahati, Govt. College of Art & Crafts (Basistha), Cotton University, and Handique Girls College to invite talent"
    ],
    other_requirements:[
      "Must bring their own painting materials and tools.",
      "Models must wear neutral/plain clothing (e.g., Black T-shirt) to not distract from the face art.",
      "Must abide by the rules put in by the Host Institute.",
    ]
  },
  {
    id: 6,
    name: "BUSINESS DEBATE",
    description: "Step into the world of corporate reasoning and intellectual clashes! The Business Debate Competition challenges participants to think critically, argue logically, and present viewpoints confidently. Topics include business ethics, corporate finance, innovation, startups & global markets",
    eventSymbol: debateSymbol,
    prizes: [
      { image:eventImg1, amount:"6000", certificate:"Trophy + Certificate" },
      { image:eventImg2, amount:"4000", certificate:"Certificate" },
      { image:eventImg1, amount:"2500", certificate:"Certificate" },
    ],
    rules:[
      "Participation: Individual or team of two",
      "Format: For the motion vs Against the motion",
      "Opening Speech – 3 mins | Rebuttal – 2 mins | Conclusion – 1 min",
      "Abusive or irrelevant arguments → disqualification",
      "Judge's decision will be final",
    ],
    prospective_participants:[
      "Business and management students with strong communication and critical thinking skills"
    ],
    marketings:[
      "Online Mode: Social media campaigns highlighting debate topics",
      "Offline Mode: Visiting business schools and management institutes"
    ],
    other_requirements:[
      "Students must belong to a recognized institution.",
      "Topics will be released 24–48 hours prior to event",
    ]
  },
  {
    id: 7,
    name: "AD MAKING",
    description: "Showcase your creativity and marketing instinct! Create a short advertisement (video/graphic) for a given theme or product and present it to the audience. The best ads will be awarded exciting prizes and featured on our official pages.",
    eventSymbol: admakingSymbol,
    prizes: [
      { image:eventImg1, amount:"5000", certificate:"Feature on official page + Certificate of Excellence" },
      { image:eventImg2, amount:"3000", certificate:"Certificate of Participation" },
      { image:eventImg1, amount:"2000", certificate:"Certificate of Participation" },
    ],
    rules:[
      "Participants can take part individually or in teams (maximum 5 members).",
      "Ad duration: Maximum 60 seconds (for video ads).",
      "Graphic ads should be in PNG/JPEG format.",
      "No usage of AI or automated software for content creation.",
      "Content must be original and non-offensive.",
      "Time for presentation: To be allotted.",
    ],
    prospective_participants:[
      "Students from all academic backgrounds with an interest in marketing, creativity, and brand promotion"
    ],
    marketings:[
      "Online Mode: Posters and video teasers on social media under #AdMad2026 #CreateAndSell",
      "Online Mode: Memes created by the team shared online.",
      "Offline Mode: Promotion in colleges such as Girijananda Chowdhury University, Commerce College, Gauhati University, NERIM, AIMT, Scholars Academy."
    ],
    other_requirements:[
      "Must be a resident of India.",
      "Must abide by the rules put in by the Host Institute.",
    ]
  },
  {
    id: 8,
    name: "AADHIYAN",
    description: "Analyse. Strategize. Present. Participants will receive a real-world business case covering functional areas such as marketing, finance, operations, or strategy. Teams must interpret the data, diagnose the core problem, develop practical solutions, and present their findings to a panel of judges. The event aims to enhance decision-making, analytical thinking, and managerial problem-solving skills.",
    eventSymbol: aadhiyanSymbol,
    prizes: [
      { image:eventImg1, amount:"5000", certificate:"Certificate of Excellence" },
      { image:eventImg2, amount:"3000", certificate:"Certificate of Achievement" },
      { image:eventImg1, amount:"2000", certificate:"Certificate of Participation" },
    ],
    rules:[
      "Team of maximum 4 members (individual participation is allowed).",
      "Case material will be provided on the spot.",
      "Time limit: 15 minutes for analysis + 7–10 minutes presentation + 3–5 minutes Q&A.",
      "Use of internet, plagiarism, disruptive behavior, or missing deadlines can lead to disqualification",
      "Decisions taken by the judges will be considered final.",
    ],
    prospective_participants:[
      "Students from academic institutions across Assam with interests in management, analytics, and strategic thinking"
    ],
    judge:[
      "Judge will be from NEDFI"
    ],
    marketings:[
      "Online Mode: Instagram, Facebook and other social media posts under hashtags #ADHIYAN #AIMQUEST Short reels, posters"
    ],
    other_requirements:[
      "Must abide by the rules put in by the Host Institute.",
    ]
  }
];