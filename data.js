// In-Person Project 3 - Data Organization
// All of the portfolio content lives here as objects and arrays.

// Phase 1.1: Set up the data structure
const portfolio = {
    // Personal information object
    owner: {
        name: "Azad Jagtap",
        title: "Graduate Student, UC Berkeley School of Information",
        email: "azadjagtap@berkeley.edu",
        location: "Berkeley, CA",
        bio: "I'm a graduate student at the UC Berkeley School of Information taking INFO 253A, Front-End Web Architecture. I'm learning to build websites from the ground up, and I care about making them accessible, responsive, and easy to maintain."
    },

    // Skills as an array
    skills: [
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "Flexbox & CSS Grid",
        "JavaScript Fundamentals",
        "Git & GitHub",
        "Chrome DevTools",
        "Python"
    ],

    // Projects as array of objects
    projects: [
        {
            title: "Personal Profile Page",
            description: "A personal profile page with a styled contact form, built with semantic HTML and the CSS box model.",
            technologies: ["HTML", "CSS"],
            completionDate: "2026-09-16",
            featured: false
        },
        {
            title: "Semantic HTML Website",
            description: "A one-page personal website written entirely with semantic elements and no div tags at all.",
            technologies: ["HTML"],
            completionDate: "2026-09-18",
            featured: false
        },
        {
            title: "Modern Layout Portfolio",
            description: "A responsive portfolio that uses Flexbox for the navigation and hero, and CSS Grid for the skills and project galleries.",
            technologies: ["HTML", "CSS", "Flexbox", "CSS Grid"],
            completionDate: "2026-09-21",
            featured: true
        },
        {
            title: "Hamburger Menu Lab",
            description: "A responsive navigation bar that collapses into a CSS-only hamburger menu on screens under 720px.",
            technologies: ["HTML", "CSS"],
            completionDate: "2026-09-27",
            featured: false
        },
        {
            title: "Data-Driven Portfolio",
            description: "This page. The content is stored in JavaScript objects and arrays, and the HTML is generated with template literals and for loops.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2026-09-28",
            featured: true
        }
    ],

    // Contact and availability information
    availability: {
        freelance: false,
        fullTime: false,
        partTime: true
    }
};

// Phase 1.2: Explore the data in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);
console.log("My name:", portfolio.owner.name);
console.log("Email:", portfolio.owner.email);
console.log("First skill:", portfolio.skills[0]);
console.log("Total skills:", portfolio.skills.length);
console.log("Number of projects:", portfolio.projects.length);
console.log("First project:", portfolio.projects[0]);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for part-time work?", portfolio.availability.partTime);

// A summary string built with a template literal
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
console.log("Summary:", summary);
