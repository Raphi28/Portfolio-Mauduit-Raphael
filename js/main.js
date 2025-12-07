// Ce fichier gère l'interactivité du portfolio et le chargement dynamique des projets.

document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <img src="${project.image}" alt="${project.title}">
                    <p>${project.description}</p>
                    <a href="${project.url}" target="_blank">Voir le projet</a>
                `;

                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des projets:', error));
});