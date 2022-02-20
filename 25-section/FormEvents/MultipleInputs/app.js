const drumForm = document.querySelector('#drumForm');
const commentsContainer = document.querySelector('#comments');

drumForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = drumForm.elements.username;
    const comment = drumForm.elements.comment;
    newComment(username.value, comment.value);
    username.value = '';
    comment.value = '';
})

const newComment = (username, comment) => {
    const listItem = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    listItem.append(bTag);
    listItem.append(` - ${comment}`);
    commentsContainer.append(listItem);
}