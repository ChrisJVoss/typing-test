/* eslint-disable no-unused-vars */

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

var text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Duis feugiat, urna non pretium porta, velit nunc sagittis velit.",
  "Pellentesque ut magna non dolor viverra porta.", "Vivamus quis sem in est molestie suscipit.", "Vestibulum iaculis viverra scelerisque."]

var x = getRandomInt(0, text.length)

var splitText = text[x].split('')
var $span = document.querySelector('#text')

for (var i = 0; i < splitText.length; i++) {
  var $text = document.createElement('span')
  $text.textContent = splitText[i]
  $text.className = 'character'
  $span.appendChild($text)
}

var $textList = document.querySelectorAll('span.character')
var i = 0

document.addEventListener('DOMContentLoaded', function() {
  $textList[0].classList.toggle('bold')
})

document.addEventListener('keydown', function(event) {
  if (i < $textList.length) {
    if (event.keyCode === 16) {
      return false
    }
    if (i < $textList.length - 1) {
      $textList[i + 1].classList.toggle('bold')
    }
    if (event.key === $textList[i].textContent) {
      $textList[i].classList.toggle('correct')
    }
    else if (event.key !== $textList[i].textContent) {
      $textList[i].classList.toggle('incorrect')
    }
    $textList[i].classList.toggle('bold')
    i += 1
  }
  else {
    if (document.querySelectorAll('div.score').length === 0) {
      var $correct = document.querySelectorAll('span.correct')
      var score = (Math.round(($correct.length /  $textList.length) * 100).toFixed(2))
      var $score = document.createElement('div')
      $score.className = 'score'
      $score.textContent = 'Your score is ' + score + '%!'
      document.body.appendChild($score)
      var $retryBox = document.createElement('div')
      var $retry = document.createElement('input')
      $retryBox.className = 'refresh'
      $retry.className = 'retry'
      $retry.setAttribute('type', 'button')
      $retry.setAttribute('value', 'Try Again!')
      $retry.setAttribute('onClick', 'window.location.reload()')
      document.body.appendChild($retryBox)
      $retryBox.appendChild($retry)

    }
  }
})
