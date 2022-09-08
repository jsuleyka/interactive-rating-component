
let selectedElements = document.querySelectorAll('ul li');
let spanRating = document.getElementsByClassName('rating')[0];
let actual = document.getElementsByClassName('item active');

selectedElements.forEach(function (element) {
  element.onclick = function (e) {
    spanRating.innerText = this.innerText;

    if (actual.length > 0) {
      actual[0].className = actual[0].className.replace(" active", "");
    }
    this.className += " active";
  };
});

function clickButton() {
  let weDoContainer = document.getElementsByClassName("we-do-container")[0];
  let thanksContainer = document.getElementsByClassName("thanks-container")[0];

  weDoContainer.style.cssText = "display: none;";
  thanksContainer.style.cssText = "display: flex;";
}