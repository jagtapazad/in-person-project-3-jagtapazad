// In-Person Project 3 - Display Generation
// Builds the page HTML from the data in data.js using template literals and for loops.

// Phase 2.1: Header section
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
        <p class="bio">${portfolio.owner.bio}</p>
        <p class="email">✉️ <a href="mailto:${portfolio.owner.email}">${portfolio.owner.email}</a></p>
    </header>
`;

document.write(headerHTML);

// Phase 2.2: Skills section
let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);

// Phase 2.3: Projects section
let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];

    // Build the technologies list
    let techList = project.technologies.join(", ");

    projectsHTML = projectsHTML + `
        <article class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${techList}</p>
            <p class="date">Completed: ${project.completionDate}</p>
        </article>
    `;
}

projectsHTML = projectsHTML + '</div></section>';
document.write(projectsHTML);

// Phase 4.1: Data analysis in the console
console.log("=== PORTFOLIO SUMMARY ===");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

// Find the featured projects
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

// Phase 4.2: JSON exploration
let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);
