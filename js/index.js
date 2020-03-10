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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let aTagsNodeList = document.getElementsByTagName("a");
let aTags = Array.prototype.slice.call(aTagsNodeList);
aTags.forEach(link => link.style.color = 'green')

// let index = 0;
aTags.forEach((aTag, index) => {
  let navItem = index + 1;
  aTag.innerHTML = siteContent["nav"]["nav-item-" + navItem];



  // index++;
})

// const keys = Object.keys(siteContent["nav"]);
// ["nav-item-1", "nav-item-2", "nav-item-3"];
// aTags.forEach((aTag, index) => {
//   aTag.innerHTML = siteContent["nav"][keys[index]];
// })

// console.log("container: ", container);



// const title = document.querySelector(".cta" ".cta-text"[h1]);

// console.log("title");




let mainHeading = document.querySelector('h1')
mainHeading.textContent = siteContent['cta']['h1'];



let mButton = document.querySelector('button')
mButton.innerText = siteContent['cta']['button'];

let logoTwo = document.querySelector("#cta-img")
logoTwo.setAttribute('src', siteContent["cta"]["img-src"])

//main-content section

let mainContent = document.querySelectorAll('.text-content')

mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']
mainContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

let logoThree = document.querySelector("#middle-img")
logoThree.setAttribute('src', siteContent["main-content"]['middle-img-src'])


let contactInfo = document.querySelector('.contact')

contactInfo.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4']
contactInfo.getElementsByTagName('p')[0].textContent = siteContent['contact']['address']
contactInfo.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone']
contactInfo.getElementsByTagName('p')[2].textContent = siteContent['contact']['email']

let footer = document.querySelector('footer')

footer.innerText = 'Copyright Great Idea! 2018'



// const topTitle = document.querySelector(".cta .cta-text h1")
// topTitle

// const bottomTitleSecond = document.querySelectorforAll
//   (".bottom-content . text-content h4")
// bottomTitleSecond[1].textContent = siteContent["main-content"]
// ["product-h4"]