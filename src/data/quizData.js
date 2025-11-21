// src/data/quizData.js
// The Facts are sourced and translated from Booklet.pdf (KAU IEEE Student Branch)


const quizData = [
    {
        questionNumber: 1,
        question: "What is the primary mission of the IEEE Student Club at King Abdulaziz University (KAU)?",
        answerOptions: [
            {
                text: "To organize social events for all departments in the university.",
                rationale: "The club's goal is focused on technical and professional development in engineering fields.",
                isCorrect: false,
            },
            {
                text: "To develop technical awareness and enhance professional growth in Electrical Engineering and Electronics among female students.",
                rationale: "The club aims to develop technical awareness and enhance professional development in the fields of electrical engineering and electronics among KAU female students",
                isCorrect: true,
            },
            {
                text: "To manage the university’s global academic publishing efforts.",
                rationale: "The club is focused on student development, not faculty publishing.",
                isCorrect: false,
            },
            {
                text: "To provide free consulting services to local businesses.",
                rationale: "The club's focus is on student skill development and awareness.",
                isCorrect: false,
            },
        ],
        
    },
    {
        questionNumber: 2,
        question: "Which of the following is listed as one of the core values of the KAU IEEE Student Branch?",
        answerOptions: [
            {
                text: "Strict Financial Autonomy.",
                rationale: "This is not listed as a core value.",
                isCorrect: false,
            },
            {
                text: "Collaboration and Teamwork.",
                rationale: "The club's core values include Innovation and Creativity, Social Responsibility, Collaboration and Teamwork, and Continuous Learning and Development.",
                isCorrect: true,
            },
            {
                text: "Isolation and Individual Achievement.",
                rationale: "The club emphasizes teamwork and collaboration.",
                isCorrect: false,
            },
            {
                text: "External Marketing and Publicity Only.",
                rationale: "This is a function of a committee, not a core value].",
                isCorrect: false,
            },
        ],
    
    },
    {
        questionNumber: 3,
        question: "The international IEEE institution was founded in 1963 and is headquartered in which country?",
        answerOptions: [
            {
                text: "United Kingdom",
                rationale: "The international organization is based in the United States.",
                isCorrect: false,
            },
            {
                text: "United States of America",
                rationale: "IEEE is an international non-profit organization founded in 1963 and headquartered in the United States.",
                isCorrect: true,
            },
            {
                text: "Saudi Arabia",
                rationale: "The international organization is based in the United States.",
                isCorrect: false,
            },
            {
                text: "Switzerland",
                rationale: "The international organization is based in the United States.",
                isCorrect: false,
            },
        ],
      
    },
    {
        questionNumber: 4,
        question: "What is a specific responsibility of the **Publicity Committee** in the KAU IEEE Student Branch?",
        answerOptions: [
            {
                text: "Preparing the annual budget and financial statement.",
                rationale: "Financial management is the responsibility of the Treasurer.",
                isCorrect: false,
            },
            {
                text: "Designing advertisements, posts, videos, and presentations.",
                rationale: "The Publicity Committee is responsible for all visual promotional tasks, including designing advertisements, posts, and producing videos.",
                isCorrect: true,
            },
            {
                text: "Managing the club’s internal happiness and nominations.",
                rationale: "This belongs to the Nominations and Happiness Committee.",
                isCorrect: false,
            },
            {
                text: "Maintaining detailed minutes for all official club meetings.",
                rationale: "This is the responsibility of the Secretary.",
                isCorrect: false,
            },
        ],
       
    },
    {
        questionNumber: 5,
        question: "What is a major academic benefit of joining the international IEEE institution?",
        answerOptions: [
            {
                text: "Access to a complete library of technical research and papers.",
                rationale: "Joining the international institution grants access to a complete library of technical research, enabling members to stay updated on technology news.",
                isCorrect: true,
            },
            {
                text: "Free membership to all university student clubs globally.",
                rationale: "The primary benefit cited is the technical research library access.",
                isCorrect: false,
            },
            {
                text: "Guaranteed employment after graduation.",
                rationale: "While it helps professional skills, it does not guarantee employment.",
                isCorrect: false,
            },
            {
                text: "Direct voting rights on the IEEE Board of Directors.",
                rationale: "This is not the major academic benefit cited for student members",
                isCorrect: false,
            },
        ],
       
    },
];

export default quizData;