const settings={
  fill: '#1abc9c',
  background: 'rgb(219,219,219)'
}

const slider = document.querySelector('.range-input');
const sliderValue = document.querySelector('#slider-value');

slider.addEventListener('input', (event)=>{
  sliderValue.innerHTML = parseInt(event.target.value).toFixed(2);
  
  var curVal = parseInt(event.target.value) / 5;
  
  // Set active label
  labelClasses = document.querySelector('.active.selected').classList;

  labelClasses.remove('active');

  labelClasses.remove('selected');
  
  var curLabel = document.querySelector('.slider-labels').querySelector('li:nth-child(' + curVal + ')');
  
  curLabel.classList.add('active');
  curLabel.classList.add('selected');

  applyFill(event.target);
});

function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;

  slider.style.background = bg;
}

applyFill(slider);

// Change input value on label click
const listElements = document.querySelectorAll('.slider-labels li');

listElements.forEach(function( li ) {
  li.addEventListener('click', function (e) {
    var index = getIndex(this);
    
    slider.value = ( index + 1 ) * 5;
    
    // create an event to dispatch
    var event = document.createEvent('HTMLEvents');
    event.initEvent('input', true, false);
    // dispatch an event to the range input variable
    slider.dispatchEvent(event);
  });
})

function getIndex(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
          if (children[i]==node) return num;
          if (children[i].nodeType==1) num++;
    }
    return -1;
}

// Sort by btn
document.querySelector('.dropbtn').addEventListener('click', function(){
  document.getElementById("myDropdown").classList.toggle("show");
});

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}