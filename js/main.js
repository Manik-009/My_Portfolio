function lightM() {
   const lightMode = document.querySelector("#lig-btn");
   if (document.body.classList.toggle("light-mode")) {
      lightMode.style.color = "white";
      document.querySelector("#m").style.color = "purple";
      document.querySelector("#proj1").style.backgroundColor = "cadetblue";
      document.querySelector("#proj2").style.backgroundColor = "cadetblue";
      document.querySelector("#proj3").style.backgroundColor = "cadetblue";
   } else {
      lightMode.style.color = "cadetblue";
      document.querySelector("#proj1").style.backgroundColor = "black";
      document.querySelector("#proj2").style.backgroundColor = "black";
      document.querySelector("#proj3").style.backgroundColor = "black";
      document.querySelector("#m").style.color = "skyblue";
   }
}
function load() {
   setTimeout(() => {
      document.getElementById("about").style.transform =
         "   rotateY(360deg) rotateX(360deg) rotateZ(360deg)";
      document.getElementById("about").style.transition = "transform 4.5s";
   }, 700);
}
document.querySelector("#firstbtn").addEventListener("click", para1);
function para1() {
   const p1 = new XMLHttpRequest();
   p1.onreadystatechange = function () {
      if (p1.readyState === 4 && p1.status === 200) {
         document.getElementById("first-pro").textContent = this.response;
      } else {
         document.getElementById("first-pro").textContent = "loading . . .";
      }
   };
   p1.open("GET", "images/content/pW.txt", true);
   p1.send();
}
document.querySelector("#secbtn").addEventListener("click", para2);
function para2() {
   const p2 = new XMLHttpRequest();
   p2.onreadystatechange = function () {
      if (p2.readyState === 4 && p2.status === 200) {
         document.getElementById("sec-pro").textContent = this.response;
      } else {
         document.getElementById("sec-pro").textContent = "loading . . .";
      }
   };
   p2.open("GET", "images/content/uR.txt", true);
   p2.send();
}
document.querySelector("#thirdbtn").addEventListener("click", para3);
function para3() {
   const p3 = new XMLHttpRequest();
   p3.onreadystatechange = function () {
      if (p3.readyState === 4 && p3.status === 200) {
         document.getElementById("third-pro").textContent = this.response;
      } else {
         document.getElementById("third-pro").textContent = "loading . . .";
      }
   };
   p3.open("GET", "images/content/fP.txt", true);
   p3.send();
}
document.querySelector("#togg").addEventListener("click", toggle);
function toggle() {
   if (document.querySelector("#togg").textContent != "X") {
      document.querySelector("#togg").textContent = "X";
      document.querySelector("#togg").style.transform = "rotateZ(90deg)";
      document.querySelector("#togg").style.transition = "transform .5s";
   } else {
      document.querySelector("#togg").textContent = "☰";
      document.querySelector("#togg").style.transform = "rotateZ(0deg)";
      document.querySelector("#togg").style.transition = "transform .5s";
   }
}
