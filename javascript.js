const scriptURL = 'https://script.google.com/macros/s/AKfycbxHN0RmjdD6dWME5bLy8pHd14Kb5Hr6SXcRtIxeEIwiAL_7pJkBKMew-dmRjqwG43NJ-g/exec'

const form = document.getElementById('form-message');

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert ("Thank yoy! your message has been submitted successfully."))
    .then(()=> {window.location.reload(); })
    .catch(error => console.error('error!', error.message))
})
