// var imgs = {
//     img1: ["images/2.jpg", "images/2.jpg"],
//     img2: ["images/2.jpg", "images/2.jpg"]
// }


var imgs = Array.from(document.querySelectorAll(".item img")); //NodeList //Array.from
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0;

for(var i=0; i<imgs.length; i++)
{
    imgs[i].addEventListener("click", function(eventInfo){

        currentIndex = imgs.indexOf(eventInfo.target);

        var imgSrc = eventInfo.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
        lightBoxContainer.style.display = "flex";
    })
}

function nextSlide() {
    currentIndex++;
    if(currentIndex == imgs.length)
    {
        currentIndexc = 0;
    }
        
        var imgSrc = imgs[currentIndex].getAttribute("src");
        lightBoxItem.style.backgroundImage = "url("+imgSrc+")"; 
}

nextBtn.addEventListener("click", nextSlide);

function prevSlide() {
    currentIndex--;
    if(currentIndex < 0)
    {
        currentIndexc = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc+")"; 
}

prevBtn.addEventListener("click", prevSlide);

closeBtn.addEventListener("click", function(){
    lightBoxContainer.style.display = "none";
})

document.addEventListener("keydown", function(eventInfo){
    if(eventInfo.code == "ArrowRight") //Arrow Right
    {
        nextSlide();
    }
    else if(eventInfo.code == "ArrowLeft") //Arrow Left
    {
        prevSlide();
    }
    else if(eventInfo.code == "Delete") //Delete
    {
        lightBoxContainer.style.display = "none";
    }
})

//click shift and a together

var shiftedClicked = false;
var aClicked = false;

document.addEventListener("keydown", function(eventInfo){
    if(eventInfo.code == "ShiftLeft")
    {
        shiftedClicked = true;
    }
    else if(eventInfo.key == "a")
    {
        aClicked = true;
    }
})

document.addEventListener("keyup", function(eventInfo){
    if(eventInfo.code == "ShiftLeft")
    {
        shiftedClicked = false;
    }
})
/*****************Accordion************ */

//check previous element
function checkPreviousElement (element){
    var previousElement = element.previousElementSibling;
    if(previousElement && previousElement.offsetHeight>0)
    {
        previousElement.style.height = `0PX`;
    }
}
// slide down
function slideDown(element){

    var nextElement = element.nextElementSibling;

    if(nextElement.offsetHeight > 0){
        nextElement.style.height = `0PX`;
    }
    else{
        checkPreviousElement(element);
        nextElement.style.height = `${nextElement.scrollHeight}PX`;
    }

}
