async function getGitHubInfo() {
    const username = document.getElementById('username').value;
    const infoDiv = document.getElementById('info');

    if (!username) {
        infoDiv.innerHTML = "Por favor ingresa un usuario.";
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("Usuario no encontrado");

        const data = await response.json();

        infoDiv.innerHTML = `
            <h2>${data.name || data.login}</h2>
            <img src="${data.avatar_url}" width="150" alt="Avatar">
            <p>Repositorios públicos: ${data.public_repos}</p>
            <p>Seguidores: ${data.followers}</p>
            <p>Siguiendo: ${data.following}</p>
            <a href="${data.html_url}" target="_blank">Ver perfil</a>
        `;
    } catch (error) {
        infoDiv.innerHTML = `Error: ${error.message}`;
    }
}
