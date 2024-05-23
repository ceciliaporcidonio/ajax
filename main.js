// main.js

document.addEventListener('DOMContentLoaded', () => {
    const username = 'ogiansouza'; // Coloque o nome de usuário do Github aqui
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('profile-avatar').src = data.avatar_url;
            document.getElementById('profile-name').textContent = data.name;
            document.getElementById('profile-username').textContent = `@${data.login}`;
            document.getElementById('repo-count').textContent = data.public_repos;
            document.getElementById('followers-count').textContent = data.followers;
            document.getElementById('following-count').textContent = data.following;
            document.getElementById('profile-link').href = data.html_url;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do usuário:', error);
        });
});
