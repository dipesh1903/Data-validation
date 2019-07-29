
/*----------------------HANDLE MODAL AND LOGIN FORM CLOSE ON WINDOW CLICK -------------------------------------------*/
document.addEventListener('mouseup', () => {
    if(event.target.closest('.login'))
    return;
    if(event.target.closest('.card-modal'))
    return;
    if(event.target.closest('.nav-bottom-centre'))
    return;
    /*
    if(event.target.closest('.nav-centre-selected'))
    return;
    if(event.target.closest('.nav-centre-dropdown'))
    return;
    */
    document.getElementsByClassName('login')[0].classList.remove("login-active");
    document.getElementsByClassName('card-modal')[0].classList.remove("card-modal-active");
    document.getElementsByClassName('modal-back')[0].style.display="none";
    document.getElementsByClassName('nav-bottom-centre')[0].style.transform = "scaleX(1)";
})

/*-----------------------------------------------------------------------------------------------------*/

/*- -------------------------------------------------CAROUSEL WORKING !!! ------------------------------*/
let count_left = 0
let count_right = 0;
document.getElementsByClassName("slide-left")[0].addEventListener('click', () => {
    if(document.getElementsByClassName("last-card")[0].getBoundingClientRect().right < document.documentElement.clientWidth)
    return;
    count_left++;
    let x = document.getElementsByClassName("data-card-row")[0];
    console.log(x.scrollIntoView);
    console.log(document.getElementsByClassName('data-card')[0].clientWidth);
    console.log(document.documentElement.clientWidth);
    let v = 10*count_left;
    x.style.transform = `translateX(-${v}%)`;
    x.style.transition = "transform 1s linear";
    count_right--;
})


document.getElementsByClassName("slide-right")[0].addEventListener('click', () => {
    console.log(document.getElementsByClassName("first-card")[0].getBoundingClientRect())
    if(document.getElementsByClassName("first-card")[0].getBoundingClientRect().left > 0)
    return;
    count_right++;
    let x = document.getElementsByClassName("data-card-row")[0];
    console.log(x.scrollIntoView);
    console.log(document.getElementsByClassName('data-card')[0].clientWidth);
    console.log(document.documentElement.clientWidth);
    let v = 10*count_right;
    x.style.transform = `translateX(${v}%)`;
    x.style.transition = "transform 1s linear";
    count_left--;
})

/*-------------------------------------------------------------------------------------------------------*/




/**---------------------------------------------CARD INFO----------------------------------------------- */

function cardInfo() {
    let cardCLicked = event.target.closest('.data-card');
    let x = document.getElementsByClassName("card-modal")[0];
    x.classList.add("card-modal-active");
    document.getElementsByClassName("modal-back")[0].style.display = "block";
    let cardChildren = Array.from(cardCLicked.children);
    for(let i=1;i<3;i++) {
        x.children[0].children[i-1].innerHTML = cardChildren[i].innerHTML;
    }
}

/*--------------------------------------------------------------------------------------------------------*/


/* --------------------------------------------NAV TOP CENTRE ---------------------------------------------*/

function navTopSelected() {
    let itemClicked = event.target.closest('.nav-top-item');
    let l = Array.from(itemClicked.classList).filter( (item,index) => {
         return item == 'left-item' || item == 'right-item'
    })
    document.getElementsByClassName("nav-top-selected")[0].classList.remove('nav-top-selected');
    itemClicked.classList.add("nav-top-selected");
    if( l.length == 0) {
        return;
    } else {
    if (l[0] == 'left-item') {
        itemClicked.classList.add("nav-top-selected-left");
    } else {
        itemClicked.classList.add("nav-top-selected-right");
    }
}
}

/* --------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------NAV CENTRE SELECTED ----------------------------------------*/

function navCentreToggler( selected ) {
        selected.classList.toggle("nav-centre-dropdown");
        selected.children[1].classList.toggle("filter-drop");
        selected.children[0].classList.toggle("up-arrow");
}
function addData( data , selected ){
    selected.innerHTML = data;
}

function navCentreSelected() {
    let itemClicked = event.target.closest('.nav-centre-dropdown-container');
    let selected = document.querySelector(".nav-centre-selected");
    let data = itemClicked.children[0].innerHTML;
    console.log(selected);
    if( selected ) {
        if( selected != itemClicked){
        selected.classList.toggle("nav-centre-selected");
        itemClicked.classList.toggle("nav-centre-selected");
        navCentreToggler(selected.children[1]);
        navCentreToggler(itemClicked.children[1]);
        itemClicked.children[1].children[1].innerHTML = data;
        selected.children[1].children[1].innerHTML = "";
        } else {
            itemClicked.classList.toggle("nav-centre-selected");
            navCentreToggler(itemClicked.children[1]);
            itemClicked.children[1].children[1].innerHTML = ""
        }
    } else {
        itemClicked.classList.toggle("nav-centre-selected");
        navCentreToggler(itemClicked.children[1]);
        itemClicked.children[1].children[1].innerHTML = data;
    }
}

/*----------------------------------------------------------------------------------------------------------*/



/* ------------------------------------------FILTER  DROPDOWN-------------------------------------- */
document.getElementsByClassName('filter')[0].addEventListener('mouseover', () => {
    console.log(event.target.closest('.filter'))
    let x = document.querySelector('.filter-dropdown');
    x.style.display="block";
    x.addEventListener('mouseover' , () => {
        x.style.display="block";
        console.log(event.target);
        console.log(event.target.closest('.filter-dropdown'))
    })
    x.addEventListener('mouseout', () => {
        x.style.display="none";
    })

})

/*-----------------------------------------------------------------------------------------------------*/

/* ---------------------------------------------------LOGIN FORM ---------------------------------------*/
function loginForm() {
    document.getElementsByClassName('login')[0].classList.add("login-active");
    document.getElementsByClassName('modal-back')[0].style.display="block";
}

document.getElementsByClassName('nav-bottom-centre')[0].addEventListener('click' , () => {
document.getElementsByClassName('nav-bottom-centre')[0].style.transform = "scaleX(0.8)";
})

/*-----------------------------------TOGGLE CARD VIEW ----------------------------------------------------*/
let toggleList = (x) => {
    for( let i=0;i<2;i++)
    {
    x.children[i].classList.toggle('list-active')
    }
}
document.getElementsByClassName('section-container-aside')[0].children[1].addEventListener('click', () => {
let x = document.querySelector(".section-container-aside");
if(x.children[1].classList.length ==1 )
return;
toggleList(x);
document.getElementsByClassName('card-below-carosel')[0].style.margin = "5px 4%";
})

document.getElementsByClassName('section-container-aside')[0].children[0].addEventListener('click', () => {
let x = document.querySelector(".section-container-aside");
if(x.children[0].classList.length == 1)
return;
    toggleList(x);
document.getElementsByClassName('card-below-carosel')[0].style.margin = "5px 0";
})

/*-----------------------------------------SECTION WORK -----------------------------------------------------*/

let cardFunction = (n) => {
let addCard = "";
for(let i=0 ; i<n; i++) {
        addCard += `<div class="data-card">
        <img class="rect-icon" src = "./assets/png/pin.png" alt="kuch_vi"/>
        <p class="check_type_name">CHECK_TYPE_NAME</p>
        <p class="unique_check_name_1">UNIQUE_CHECK_NAME_1</p>
        <p><span class="source_table">Source Table</span><span>------------</span><span class="source_table">Target Table</span></p>
        <p class="schema_name">Schema Name</p>
        <p class="file_name">Database/file Name</p>
        <p class="file_name">Connection Name</p>
    </div>` ;
    }
    return addCard;
}

let cardRemove = (n) => {
    nodes = document.getElementsByClassName("card-below")[0];
    let ar = Array.from(nodes.childNodes);
    let l = nodes.childElementCount;
    for(let i=l;i>l-n ;i--) {
        nodes.removeChild(ar.pop())
    }
}
document.getElementById("view_more").addEventListener('click', () => {
document.getElementsByClassName("buttons-wrapper")[0].children[1].style.display = "inline";
let client_width = document.documentElement.clientWidth;
let card_wrap = document.getElementsByClassName('card-below')[0];
let addCard = "";
if(client_width > 1280) {
    addCard = cardFunction(4);
} else if (client_width >= 768 && client_width <= 1024) {
    addCard = cardFunction(3);
} else if (client_width >640 && client_width <=768) {
    addCard = cardFunction(2);
} else {
    addCard = cardFunction(1);
}

card_wrap.innerHTML += addCard;
})

document.getElementById("show_less").addEventListener('click', () => {
let cardsLength = document.getElementsByClassName("card-below")[0].childElementCount;
let addCard = "";
let client_width = document.documentElement.clientWidth;
let toggle = document.querySelector('.section-container-aside').children[1].classList.length;
console.log(toggle);
if(cardsLength <= 8)
{
    document.getElementById("show_less").style.display = "none";
} else {
if(client_width > 1280) {
    if(toggle != 0)
    cardRemove(3)
    else
    cardRemove(4);
} else if (client_width >= 768 && client_width <= 1280) {
    if(toggle != 0)
    cardRemove(2)
    else
    cardRemove(3);
} else if (client_width >=640 && client_width <=768) {
    if(toggle != 0)
    cardRemove(1)
    else
    cardRemove(2);
} else {
    cardRemove(1);
}
/*
document.getElementsByClassName("card-below")[0].innerHTML = addCard; */
}

if(document.getElementsByClassName("card-below")[0].childElementCount <= 8) {
    document.getElementById("show_less").style.display = "none";
}
})


/*----------------------------------------------FOOTER- HOVER ------------------------------------------*/

let footer_elements = document.getElementsByClassName("footer-element");
Array.from(footer_elements).forEach((item,index) => {
    footer_elements[index].addEventListener('click', () => {
        document.getElementsByClassName("footer-active")[0].classList.remove("footer-active");
        footer_elements[index].classList.add("footer-active");
    })
})

/*-------------------------------------------------------------------------------------------------------*/