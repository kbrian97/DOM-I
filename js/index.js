const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let links = document.querySelectorAll("a");
const tags = Object.values(siteContent.nav);
for(let i = 0; i < links.length; i++){
links[i].textContent = tags[i];
links[i].style.color = "green";
}

//create links
const newElement_1 = document.createElement('a');
const newElement_2 = document.createElement('a');


// // setting our attributes
newElement_1.href = '#';
newElement_1.textContent = 'Privacy Policy';
newElement_2.href = '#';
newElement_2.textContent = 'Testing';
newElement_1.style.color = "green";
newElement_2.style.color = "green";

//add to nav
const mainNav = document.querySelector('nav');
mainNav.appendChild(newElement_1);
mainNav.prepend(newElement_2);

let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let top_h4 = document.querySelectorAll(".top-content .text-content h4");
let top_p = document.querySelectorAll(".top-content .text-content p");

top_h4[0].textContent = siteContent["main-content"]["features-h4"];
top_h4[1].textContent = siteContent["main-content"]["about-h4"];
top_p[0].textContent = siteContent["main-content"]["features-content"];
top_p[1].textContent = siteContent["main-content"]["about-content"];

let bottom_h4 = document.querySelectorAll(".bottom-content .text-content h4");
let bottom_p = document.querySelectorAll(".bottom-content .text-content p");

bottom_h4[0].textContent = siteContent["main-content"]["services-h4"];
bottom_h4[1].textContent = siteContent["main-content"]["product-h4"];
bottom_h4[2].textContent = siteContent["main-content"]["vision-h4"];
bottom_p[0].textContent = siteContent["main-content"]["services-content"];
bottom_p[1].textContent = siteContent["main-content"]["product-content"];
bottom_p[2].textContent = siteContent["main-content"]["vision-content"];


let cta_logo = document.getElementById("middle-img");
cta_logo.setAttribute('src', siteContent["main-content"]["middle-img-src"])



let middle_logo = document.getElementById("cta-img");
middle_logo.setAttribute('src', siteContent["cta"]["img-src"]);

let contact_head = document.querySelector(".contact h4");
contact_head.textContent = siteContent.contact["contact-h4"];

let contact = document.querySelectorAll(".contact p");
const contact_info = Object.values(siteContent.contact);
for(let i = 0; i < contact.length; i++){
  contact[i].textContent = contact_info[i + 1] ;
}



let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;




