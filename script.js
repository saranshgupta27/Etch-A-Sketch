function create_Grid(size, md = "mouseover") {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      let box = document.createElement("div");
      box.style.cssText = `grid-area:${i + 1}/${j + 1}/${i + 2}/${j + 2}`;
      box.classList.add("tile");
      con.appendChild(box);
    }
  }
  var tl = Array.from(document.querySelectorAll("div .tile"));
  if (md == "mouseover") {
    tl.forEach((tiles) => tiles.addEventListener(md, hover));
  } 
  else if (md == "click") {
    tl.forEach((tiles) =>
      tiles.addEventListener("mousedown", function () {
        userClick = true;
        this.style.backgroundColor = `${colr.value}`;
      })
    );
    tl.forEach((tiles) =>
      tiles.addEventListener("mouseup", function () {
        userClick = false;
        this.style.backgroundColor = `${colr.value}`;
      })
    );
    tl.forEach((tiles) =>
      tiles.addEventListener("mouseover", function () {
        if (userClick == true) {
          this.style.backgroundColor = `${colr.value}`;
        }
      })
    );
 
    
    // con.addEventListener('mouseover',function(e){     userClick = false;  console.log(`over ${userClick}`);   }); 
  
  
  }
}

function reset() {
  var siz = prompt("Enter value of N for a Square Grid of size NxN");
  if (isNaN(siz) || siz === "") {
    alert("Please Enter a Number Only");
    reset();
  } else if (siz != null) {
    con.innerHTML = "";
    create_Grid(siz);
    size = siz;
  }
}

function hover() {
  this.style.backgroundColor = `${colr.value}`;
  // this.classList.add('hover');
}

function mode_c(e) {
  if (`${this.textContent}` == "Mode:Hover") {
    this.textContent = "Mode:Click";
    md = "click";
    create_Grid(size, md);
  } else if (`${this.textContent}` == "Mode:Click") {
    this.textContent = "Mode:Hover";
    create_Grid(size);
  }
}
const con = document.querySelector("#container");
const btn = document.querySelector("#reset");
const bd = document.querySelector("body");
const cl = document.querySelector("#clear");
const mode = document.querySelector("#mode");
const colr = document.querySelector("input[type=color] ");
mode.addEventListener("click", mode_c);
var size = 16;
let userClick = false;
create_Grid(size);
btn.addEventListener("click", reset);
clear.addEventListener("click",function(){
  con.innerHTML = "";
  create_Grid(size);

})
