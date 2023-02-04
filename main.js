// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelectorAll('span.like-glyph')
const errorMessage = document.querySelector('#modal')
console.log(heart)

heart.forEach((like => like.addEventListener('click', likeCallback)))


function likeCallback(like) {
  //console.log(like.target)
  mimicServerCall()
    .then(() => {
      if (like.target.innerText === EMPTY_HEART) {
        like.target.innerText = FULL_HEART
      } else if (like.target.innerText === FULL_HEART) {
        like.target.innerText = EMPTY_HEART
      }
    })
    .catch(() => {
      const errorMessage = document.querySelector('#modal')
      errorMessage.className = 'show'

      setTimeout(() => {
        errorMessage.className = 'hidden'
      }, 3000)
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
