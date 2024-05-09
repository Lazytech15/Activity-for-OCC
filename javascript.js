

// Send Message to Google Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxHN0RmjdD6dWME5bLy8pHd14Kb5Hr6SXcRtIxeEIwiAL_7pJkBKMew-dmRjqwG43NJ-g/exec'

const form = document.getElementById('form-message');

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => swal("Great!", "Question is send successfully, Thank you!", "success"))
    .then(()=> {window.location.reload(); })
    .catch(error => swal("Error!", "Sorry for inconvient", "error"))
})

//Make Image Switch every 4s loop 
let images = ["assets/1.jpg",
              "assets/2.jpg",
              "assets/3.jpg",
              "assets/4.jpg",
              "assets/5.jpg",
              "assets/6.jpg",
              "assets/7.jpg",
              "assets/8.jpg",
              "assets/9.jpg",
              "assets/10.jpg",
              "assets/11.jpg",
              "assets/12.jpg",
              "assets/13.jpg",
              "assets/14.jpg",
              "assets/15.jpg"];
let count = 0;

let imgContainer = document.getElementById('images');
imgContainer.innerHTML = `<img id="slideshow" src="${images[0]}" alt="Random Picture" style="transition: opacity 0.7s ease-in-out; opacity: 1;">`;

let intervalID = setInterval(function() {
    let imgElement = document.getElementById('slideshow');
    imgElement.style.opacity = 0;
    setTimeout(function() {
        imgElement.src = images[count];
        imgElement.style.opacity = 1;
    }, 700);
    count = (count + 1) % images.length;
}, 4000); 

// send email form via Gmail
const clear_button = document.getElementById('cancel-button')
const send_email = document.getElementById('send-button')
const user_email = document.getElementById('guest-email')
const guest_name = document.getElementById('guest-name')
const guest_company = document.getElementById('guest-company')
const guest_contact = document.getElementById('guest-contact')
const guest_reason = document.getElementById('guest-reason')

clear_button.addEventListener('click', function(){
    document.getElementById('guest-name').value = "";
    document.getElementById('guest-email').value = "";
    document.getElementById('guest-company').value = "";
    document.getElementById('guest-contact').value = "";
    document.getElementById('guest-reason').value = "";
    document.getElementById('overlay').style="display:none;";
})
send_email.addEventListener('click', function(){
    document.getElementById('overlay').style="display:block;";
})

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "emmanuelablao16@gmail.com",
        Password : "398363A594B1E452424255792AE66B8ACB59",
        To : "emmanuelablao16@gmail.com",
        From : "emmanuelablao16@gmail.com",
        Subject : "Important Matter",
        Body : "Sender: " + guest_name.value
            +  "<br> Email: " + user_email.value
            +  "<br> Contact: " + guest_contact.value
            +  "<br> Company: " + guest_company.value
            +  "<br> Reason: "
            +   guest_reason.value
    }).then(
      message => {
        if(message=='OK'){
            swal("Successfully!", "The Data you send is submitted", "success");
        }
        else{
            swal("Error!", "Sorry for inconvient", "error");
        }
      }
    );
}

//aside button make the Go to Top appear when the view port screen change to 100px and add time out when no motion
let isScrolling;

function scrollFunction() {
  const asideButton = document.getElementsByTagName('aside')[0];

  window.clearTimeout(isScrolling);

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    asideButton.style.opacity = "1";
    asideButton.style.transition = "0.2s ease-in-out";
    asideButton.style.display = "block";

    isScrolling = setTimeout(function() {
      if (!asideButton.matches(':hover')) {
        asideButton.style.opacity = "0";
      }
    }, 2000);
  } else {
    asideButton.style.opacity = "0";
  }
}

window.onscroll = scrollFunction;

document.getElementsByTagName('aside')[0].addEventListener('mouseover', function() {
  this.style.opacity = "1";
  window.clearTimeout(isScrolling);
});

document.getElementsByTagName('aside')[0].addEventListener('mouseout', function() {

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    isScrolling = setTimeout(function() {
      asideButton.style.opacity = "0";
    }, 2000);
  }
});



