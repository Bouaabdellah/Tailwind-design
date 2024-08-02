// display links when we click the icon
let btnIcon = document.querySelector(".header .links i");
let list = document.querySelector(".header .links ul");
btnIcon.addEventListener("click",() =>{
    if (list.classList.contains("hidden"))
    list.classList.remove("hidden");
    else
    list.classList.add("hidden");
});
Array.from(list.children).forEach((ele) =>{
    ele.addEventListener("mouseover",() =>{
        ele.children[0].classList.add("translate-x-3");
    });
    ele.addEventListener("mouseout",() =>{
            ele.children[0].classList.remove("translate-x-3");
    })
})