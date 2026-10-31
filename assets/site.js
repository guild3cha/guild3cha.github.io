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

// Theme toggle (the initial theme is stamped on <html data-theme> by the inline head script)
(function(){
  var btn=document.getElementById("themeBtn");
  if(!btn) return;
  function glyph(){ btn.textContent = document.documentElement.getAttribute("data-theme")==="dark" ? "☀" : "☾"; }
  glyph();
  function toggle(){
    var next = document.documentElement.getAttribute("data-theme")==="dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme",next);
    try{ localStorage.setItem("guild-theme",next); }catch(e){}
    glyph();
  }
  btn.addEventListener("click",toggle);
  document.addEventListener("click",function(e){
    if(e.target && e.target.id==="themeBtn" && e.target!==btn){ toggle(); }
  });
})();
