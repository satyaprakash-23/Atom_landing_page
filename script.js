const imgLink = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg'];

function random(){
  let rand = (Math.floor(Math.random()*7))
  return rand;
}


const main=document.querySelector('#center');

// Throttling Function :- its executes the given function only one time in given time interval 
const throttleFunction=(func, delay)=>{
 

  let prev = 0; 
  return (...args) => {

    let now = new Date().getTime(); 


     
    if(now - prev> delay){ 
      prev = now;

      return func(...args);  
    }
  }
}


main.addEventListener("mousemove", throttleFunction((event)=>{
  const div = document.createElement('div');
  div.classList.add('imgbox');
//   console.log(event.clientX);
  div.style.left = event.clientX + 'px';
  div.style.top = event.clientY + 'px';
  document.body.appendChild(div)

  setTimeout(function(){
    div.remove();
  },1000)

  const img = document.createElement('img')
  img.setAttribute('src',imgLink[random()])
  div.appendChild(img)
  
  gsap.to(img,{
    y: "0",
    ease: Power2,
    duration: .5
  })
  
  gsap.to(img,{
    y: "100%",
    delay: .8,
    ease: Power2,

  })
  
  // img.style.transform = `translateY(0)`
  // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "100%"
  // img.style.transition = `transform 0.5s ease`

//   img.style.transform = `translateY(100%)`

}, 300));