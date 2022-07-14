const hamburger = document.querySelector('.hambuga');
const mobileMenuLinks = document.querySelector('.navbar-mobile');
const productContainer = document.querySelector('#pro-container-1');
const NewProductsContainer = document.querySelector('#pro-container-2');
const prodDetailSect = document.querySelector('.details-section');
const productDetailsImg = document.getElementsByClassName('product-details-img')
const productDetailsName = document.getElementsByClassName('product-details-name')
const productDetailsPrice = document.getElementsByClassName('product-details-price')
const productDetailsDesc = document.getElementsByClassName('product-details-description')
const closeDetails = document.querySelector('.close-product-details')


const products = [
    {
        name: 'San mong dom',
        price: 750,
        img: "img/products/f1.jpg",
        featured: true,
    },
    {
        name: 'Naruto shirt',
        price: 125,
        img: "img/products/f2.jpg",
        featured: true,
    },
    {
        name: 'Corel madin',
        price: 32,
        img: "img/products/f3.jpg",
        featured: true,
    },
    {
        name: 'Satin Satin',
        price: 47,
        img: "img/products/f4.jpg",
        featured: true,
    },
    {
        name: 'Gyomei',
        price: 147,
        img: "img/products/f5.jpg",
        featured: true,
    },
    {
        name: 'Rabona!!!',
        price: 199,
        img: "img/products/f6.jpg",
        featured: true,
    },
    {
        name: 'Ferling',
        price: 62,
        img: "img/products/f7.jpg",
        featured: true,
    },
    {
        name: 'Knardy',
        price: 200,
        img: "img/products/f8.jpg",
        featured: true,
    },
    {
        name: 'Js bok',
        price: 20,
        img: "img/products/n1.jpg",
    },
    {
        name: 'Mist Mag',
        price: 5,
        img: "img/products/n2.jpg",
    },
    {
        name: 'Flash Fire',
        price: 97,
        img: "img/products/n3.jpg",
    },
    {
        name: 'Howitzer',
        price: 94,
        img: "img/products/n4.jpg",
    },
    {
        name: 'Zero',
        price: 48,
        img: "img/products/n5.jpg",
    },
    {
        name: 'Kimono',
        price: 530,
        img: "img/products/n6.jpg",
    },
    {
        name: 'Hangett',
        price: 110,
        img: "img/products/n7.jpg",
    },
    {
        name: 'Snip',
        price: 14,
        img: "img/products/n8.jpg",
    },
]

let elem = function(x){
    let domNode = document.createElement(x)
    return domNode
}

let productDiv;
let productDivArray = elem('DIV')
let proImg ;
let proDiv ;
let proDivSpan ;
let proDivHfive;
let proDivDiv ;
let proDivHfour;
let proDivA;
let proDivAimg ;
let clickedPoduct = {} ;

const onProductClick = x => {
    clickedPoduct = x;
    productDetailsImg[0].src = clickedPoduct.img;
    productDetailsName[0].textContent = clickedPoduct.name;
    productDetailsPrice[0].innerText = `$${clickedPoduct.price}`;
    console.log(productDetailsPrice)
}


const product = products.map(prod => {
    proImg = elem('IMG');
    proDiv = elem('DIV');
    proDivSpan = elem('SPAN');
    proDivHfive = elem('H5');
    proDivDiv = elem('DIV');
    proDivHfour = elem('H4');
    proDivA = elem('A');
    proDivAimg = elem('IMG');

    proImg.src = prod.img;
    proDiv.classList.add('des');
    proDivSpan.textContent = 'adidas';
    proDivHfive.textContent = prod.name
    proDivDiv.classList.add('star');
    proDivHfour.textContent = `$${prod.price}`
    proDivAimg.src = 'img/Icon feather-shopping-cart.png'
    proDivA.append(proDivAimg)
    proDivA.classList.add('cart')
    proDiv.append(proDivSpan, proDivHfive, proDivDiv, proDivHfour);
    // productDiv.append(proImg, proDiv, proDivA)
    [proImg,proDiv,proDivA].map((item) => {
        item.addEventListener('click', () => {
            prodDetailSect.classList.add('details-on')
            onProductClick(prod)
        })
    })

    return [proImg,proDiv,proDivA];
    
    // return productDiv;
})

// console.log(clickedPoduct)

const featProduct = product.slice(0, 8)
const newProduct = product.slice(8)


for (let i = 0; i < featProduct.length; i++){
    // console.log(product[i])
    productDiv = elem('DIV');
    productDiv.classList.add('pro')
    // console.log(productDiv)
    for (let j = 0; j < featProduct[i].length; j++){
        productDiv.append(featProduct[i][j])
        // console.log(product[i][j])
    }
    // console.dir(productDiv.children)
    productContainer.append(productDiv)
}

for (let i = 0; i < newProduct.length; i++){
    // console.log(product[i])
    productDiv = elem('DIV');
    productDiv.classList.add('pro')
    // console.log(productDiv)
    for (let j = 0; j < newProduct[i].length; j++){
        productDiv.append(newProduct[i][j])
        // console.log(product[i][j])
    }
    // console.dir(productDiv.children)
    NewProductsContainer.append(productDiv)
}


// console.log(productDiv)

// function detailsOn(e){
//     console.dir(e.target.offsetParent)
// }

closeDetails.addEventListener('click', () => {
    prodDetailSect.classList.remove('details-on')
})

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('clicked')){
        hamburger.classList.add('hambuga-hover')
        setTimeout(() => {
            hamburger.classList.add('clicked')
        }, 500)
    }else {
        hamburger.classList.remove('clicked')
        setTimeout(() => {
            hamburger.classList.remove('hambuga-hover')
        }, 500)
    }
    mobileMenuLinks.classList.toggle('navbar-display')
} )