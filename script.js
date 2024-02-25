// var tl = gsap.timeline();
// tl
// .to("#loader",{
//     height: 0,
//     duration: 2,
//     ease: Expo.easeInOut
// })

// .to("#green-bar",{
//     height: "100%",
//     duration: 2,
//     delay: -2,
//     ease: Expo.easeInOut
// })

// .to("#white-bar",{
//     height: "100%",
//     duration: 2,
//     delay: -1.6,
//     ease: Expo.easeInOut
// })

// function revealtoSpan(){
//     document.querySelectorAll(".reveal")
// .forEach(function(elem){
// var parent = document.createElement("span");
// var child = document.createElement("span");
// parent.classList.add("parent");
// child.classList.add("child");
// child.innerHTML = elem.innerHTML;
// parent.appendChild(child);
// elem.innerHTML="";
// elem.appendChild(parent);


// });
// }
// revealtoSpan();
// var tl = gsap.timeline();
// tl
// .from(".child span", {
//     x:100,
//     delay:1,
//     stagger: .2,
//     duration: 2,
//     ease: Power3.easeInOut
// })
// .to(".parent .child", {
//     y: "-100%",
//     duration:1,
//     delay:1,
//     ease: Circ.easeInOut
// })
// .to("#loader", {
//     height:0,
//     duration:1,

//     ease: Circ.easeInOut
// })
// .to("#green-bar", 
// {

//     height:"100%",
//     duration:1,
// top:0,
// delay:-.5,
//     ease: Circ.easeInOut
// })
// .to("#green-bar", {
//     height:"10%",
// delay:-.8,

//     duration:1,
// top:0,
//     ease: Circ.easeInOut
// })


