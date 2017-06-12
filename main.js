/* eslint-disable no-unused-vars */

var text = "Lorem ipsum." // " dolor sit amet, consectetur adipiscing elit."
var splitText = text.split('')
var $span = document.querySelector('#text')

for (var i = 0; i < splitText.length; i++) {
  var $text = document.createElement('span')
  $text.textContent = splitText[i]
  $text.className = ('id')
  $span.appendChild($text)
}

var $textList = document.querySelectorAll('span.id')
var i = 0

document.addEventListener('DOMContentLoaded', function() {
  $textList[0].classList.toggle('bold')
})

document.addEventListener('keydown', function(event) {
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
  if (i === $textList.length) {
    return
  }
})
