// GUILD official site - small interactions
(function(){
  var btn=document.getElementById("menuBtn"), nav=document.getElementById("mobileNav");
  if(btn&&nav){
    btn.addEventListener("click",function(){
      var open=nav.classList.toggle("open");
      btn.setAttribute("aria-expanded",open?"true":"false");
      btn.setAttribute("aria-label",open?"メニューを閉じる":"メニューを開く");
    });
    nav.addEventListener("click",function(e){
      if(e.target.tagName==="A"){nav.classList.remove("open");btn.setAttribute("aria-expanded","false");}
    });
  }
  var top=document.getElementById("toTop");
  if(top){
    window.addEventListener("scroll",function(){
      top.classList.toggle("show",window.scrollY>600);
    },{passive:true});
    top.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
  }
})();
