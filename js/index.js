// Your code goes here
//Creating Unique Event Listeners for each element


document.querySelectorAll("nav a").forEach((navbars) => {
    //mouseover
        navbars.addEventListener("mouseover", () => {
            console.log("mouse went over");
            navbars.style.color = "green";
        });
    //mouseout
        navbars.addEventListener("mouseout", () => {
            console.log("mouse went out");
            navbars.style.color = "black";
        });
    });
    
    //prevent default
    document.querySelectorAll("nav a").forEach((navbar) => {
    navbar.addEventListener("click", (e) => {
        e.preventDefault();
        });
    });
    
    const busImg = document.querySelector(".intro img");
    //mousemove
    busImg.addEventListener("mousemove", () => {
        console.log("opacity image getting down, and smaller");
        busImg.style.opacity = "70%";
        busImg.style.width = "80%";
    });
    
    //mouseup
    busImg.addEventListener("mouseup", () => {
        console.log("mouse going up, and size image getting big");
        busImg.style.width = "150%";
        busImg.style.opacity = "100%";
    })
    
    const introTitle = document.querySelector(".intro h2");
    //click
    introTitle.addEventListener("click", () => {
        console.log("first");
        introTitle.style.color = "red";
    });
    
    //stopPropagation with two similar events
    const textTitle = document.querySelector(".content-section h2");
    textTitle.addEventListener("click", (e) => {
        console.log("second");
        textTitle.style.color = "yellow"
        e.stopPropagation();
    });
    
    const textTitleRev = document.querySelector(" .inverse-content h2");
    textTitleRev.addEventListener("click", (e) => {
        console.log("third");
        textTitleRev.style.color = "blue";
        e.stopPropagation();
    });
    
    const imgContent = document.querySelector(".content-section img");
    //dblclick
    imgContent.addEventListener("dblclick",() => {
        imgContent.style.transform = "scale(1.2)";
    });
    
    
    const imgContentRev = document.querySelector(".inverse-content img");
    //drag
    imgContentRev.addEventListener("drag", () => {
        imgContentRev.style =  "border-radius: 50%; border: 2px solid red";
    });
    //dragend
    imgContentRev.addEventListener("dragend", () => {
        imgContentRev.style = "border-radius: 1%;"
    });
    
    document.querySelectorAll(".btn").forEach((buttons) => {
    //resize
        window.addEventListener("resize", () => {
        console.log("it will resize buttons");
        buttons.style = "color: red; background-color: yellow";
        });
    });
     
    const container = document.querySelector("body");
    //keydown
    window.addEventListener("keydown", (e) => {
        if (e.key === 'i') {
        container.style = "color: blue; background-color: black";
        }
        else if ( e.key === "p") {
        container.style  = "color: blacki; background-color: white";
        };
    });
    
    //load
    // window.addEventListener("load", () => {
    //     alert("I am Learning a Lot!!!");
    // });