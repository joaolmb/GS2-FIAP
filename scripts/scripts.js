// script.js

function checkAnswer(answer) {
    const correctAnswer = 'b';
    if (answer === correctAnswer) {
        alert('Resposta correta!');
    } else {
        alert('Resposta errada!');
    }
}

function checkImageAnswer(answer) {
    const correctAnswer = 'b';
    if (answer === correctAnswer) {
        alert('Resposta correta!');
    } else {
        alert('Resposta errada!');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        alert('Login bem-sucedido!');
        window.location.href = 'ranking.html'; // Redireciona para a página de ranking
    } else {
        alert('Usuário ou senha incorretos');
    }
}
