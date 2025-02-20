const socket = io('http://localhost:3000')
const commentArea = document.querySelector('.userPost')
const messageForm = document.getElementById('btn')
const messageInput = document.getElementById('displayArea')

console.log(typeof displayMessage);
socket.on("chat-message", data => {
    displayMessage(data)
 
})



messageForm.addEventListener("click", (event) => {
    const message = messageInput.value.trim();
    socket.emit('send-chat-message', message)
    messageInput.value = '';

})

function displayMessage(message) {
    const newText = document.createElement('p');
    newText.textContent = message;
    newText.classList.add('post-content');

    const comment = document.createElement('div')
    comment.classList.add('post');
    comment.appendChild(newText);

    commentArea.append(comment);
    console.log(message)
}


