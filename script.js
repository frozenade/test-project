document.addEventListener('DOMContentLoaded',function(){
  var navToggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.nav');
  if(navToggle){
    navToggle.addEventListener('click',function(){
      if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex'}
      navToggle.setAttribute('aria-expanded', nav.style.display==='flex')
    })
  }

  var getStarted=document.getElementById('get-started');
  if(getStarted){
    getStarted.addEventListener('click',function(e){
      e.preventDefault();document.getElementById('contact').scrollIntoView({behavior:'smooth'})
    })
  }

  var contactBtn=document.getElementById('contact-btn');
  if(contactBtn){
    contactBtn.addEventListener('click',function(){
      alert('Thanks — replace this with your contact form or mailto link.')
    })
  }
});
