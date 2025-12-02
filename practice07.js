const button = document.getElementById('add-button');
button.addEventListener('click', () => {
    const inputValue = document.getElementById('input-text').value;
    if (inputValue){
        const li = document.createElement('li');
        li.textContent = inputValue;
        document.getElementById('list-container').appendChild(li);
        document.getElementById('input-text').value = '';
    }
})