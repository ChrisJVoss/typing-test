/* eslint-disable no-unused-vars */

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
  if (i < $textList.length) {
    $textList[i + 1].classList.toggle('bold')
  }
  i += 1
})
