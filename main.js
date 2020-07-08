const modalOverlay = document.querySelector(".modal-overlay")


var w = screen.width;
var h = screen.height;
var count = 0;
var maxCount = 1;

window.addEventListener('load', (event) => {
  setInterval(function() {
    window.addEventListener ('mouseout', function(e){
      if ((e.x < 0 || e.x > w-300 ||  e.y < 0 || e.y > h) && count < maxCount){
        modalOverlay.classList.add('active')
        count += 1
      }
    })
  }, 3000)  
});


 
document.querySelector('.close-modal')
  .addEventListener('click', function(){
    modalOverlay.classList.remove('active')
  }
)


