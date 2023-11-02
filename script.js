function page2(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger:".page2",
        // markers:true,
        start:"0% 95%",
        end:"70% 50%",
        scrub:true
        }})
        .to("#fanta-or",{
            top:"160%",
            left:"10%"
        },"a")
        .to("#lf4",{
            top:"160%",
            left:"71%"
        },"a")
        .to("#lf5",{
            top:"100%",
            left:"21%",
            rotate:"34 deg",
            scale:".6"
        },"a")
        .to("#lf3",{
            top:"150%",
            left:"37%",
            rotate:"108 deg",
            scale:".4"
        },"a")
}
page2();


function page3(){
    var tl2  = gsap.timeline({scrollTrigger:{
        trigger:".page3",
        // markers:true,
        start:"0% 78%",
        end:"50% 50%",
        scrub:true
        }})
        .to("#fanta-or",{
            top:"247%",
            left:"78%",
            scale:".8"
            
        },"b")
        .to("#or1",{
            top:"153%",
            left:"80%", 
        },"b")
        .to("#la1",{
            top:"100%",
            right:"67%",
            scale:".9"
            
        },"b")
        .to("#lf4",{
            top:"260%",
            left:"25%",  
        },"b")
        .to("#grp-fan",{
            rotate:"360deg",
            scale:"1"
        },"b")
        .to("#lf3",{
            top:"190%",
            left:"21%",
            rotate:"-30",
            scale:".5"
        },"b")
        .to("#lf5",{
           top:"204%",
           left:"43%",
           rotate:"7deg",
           scale:".6"
        },"b")
}
page3();