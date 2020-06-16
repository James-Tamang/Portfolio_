window.addEventListener("load",start);
function start() {
    console.log("start page");
     document.querySelector("#logo").classList.add("fade");
    anime();
}
function anime() {
   console.log("anime");
   document.querySelector("#logo").classList.remove("fade");
    document.querySelector("#logo").classList.add("lani");
    
    document.querySelector("#img").classList.add("bani");
    
    document.querySelector("#m1i").classList.add("blani");
    document.querySelector("#m2f").classList.add("blani");
    document.querySelector("#m3l").classList.add("blani");
   document.querySelector("#m4g").classList.add("blani");

    
    document.querySelector("#media").classList.add("fade");
    document.querySelector("#media").style.display = "block";
    document.querySelector("#media").style.display = "flex";
    
}