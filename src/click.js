
let item = document.querySelector('li');
let spanRating = document.getElementsByClassName('rating')[0];

// Simulate click function
function clickItem() {
    item.addEventListener("click", function(event) {
        console.log("Submit button is clicked!");
        console.log(this.attr("data-id"));
        this.style.background = "#00ff00";
        console.log(this.value);
        console.log("fin");
        event.preventDefault();
    });

    // item.style.background = "#00ff00";
    console.log(item.value);
}

function clickButton() {
    let weDoContainer = document.getElementsByClassName('we-do-container')[0];
    let thanksContainer = document.getElementsByClassName('thanks-container')[0];

    weDoContainer.style.cssText = 'display: none;';
    thanksContainer.style.cssText = 'display: flex;';
    spanRating.innerText += item.value;
}