document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Skills List
    const skills = ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "MySQL"];
    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Dynamic Projects List
    const projects = [
        { title: "Responsive E-Commerce Website", description: "Designed and developed a mobile-friendly responsive e-commerce website that mainly focused on userfriendly design, smooth navigation and engaging interface." },
        { title: "Banking Application", description: "Build REST Apls for Adding accounts, getting accounts, getting all accounts, transferring amounts,depositing amounts, removing accounts." }
    ];
    
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project");
        div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(div);
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formStatus.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
    });
});
