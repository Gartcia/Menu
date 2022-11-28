const menu = [
{
    id: 461,
    img: "https://th.bing.com/th/id/OIP.zgWk5EXoCA8P4dJImyzPhwHaE8?w=273&h=182&c=7&r=0&o=5&pid=1.7",
    categoria:	"Aguas, Gaseosas",
    nombre:		"Agua mineral",
    precio:		330,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 462,
    img: "https://th.bing.com/th/id/OIP.dowWfeSkYjvQc9GnH7xT3wHaFP?w=256&h=180&c=7&r=0&o=5&pid=1.7",
    categoria:	"Aguas, Gaseosas",
    nombre:		"Gaseosa Pepsi",
    precio:		330,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 463,
    img: "https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/01/14/Recortada/img_hmacia_20200114-120609_imagenes_lv_getty_istock-866921274-kvtE-U472897236961zmG-992x558@LaVanguardia-Web.jpg",
    categoria:	"Bebidas Sin Alcohol",
    nombre:		"Jugo de naranja exprimido",
    precio:		500,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 503,
    img: "https://th.bing.com/th/id/OIP.PftrEcpT73WowqPPU97OvgHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7",
    categoria:	"Bebidas Sin Alcohol",
    nombre:		"Limonada Clásica",
    precio:		700,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 504,
    img: "https://th.bing.com/th/id/OIP.FDqQcJoc3MQCkD2RdWUTugHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7",
    categoria:	"Bebidas Sin Alcohol",
    nombre:		"Limonada Fresca",
    precio:		700,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 505,
    img: "https://th.bing.com/th/id/OIP.AuCNTDBaLT-V80RFBJzoJwHaEL?w=303&h=180&c=7&r=0&o=5&pid=1.7",
    categoria:	"Bebidas Sin Alcohol",
    nombre:		"Pomelada",
    precio:		700,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 506,
    img: "https://viriatobar.com/wp-content/uploads/2020/05/brunch-en-sevilla-2.jpg",
    categoria:	"Brunch",
    nombre:		"Brunch Salado",
    precio:		5500,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 507,
    img: "https://i.pinimg.com/736x/0a/a3/a8/0aa3a8a9d4a04f8db10cb5eef067841a.jpg",
    categoria:	"Brunch",
    nombre:		"Brunch Dulce",
    precio:		4500,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 508,
    img: "https://th.bing.com/th/id/OIP.2S9gC1yl9BY3QV9WzDdp8gHaD6?w=335&h=180&c=7&r=0&o=5&pid=1.7",
    categoria:	"Cafés, Té E Infusiones",
    nombre:		"Café con crema",
    precio:		450,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 509,
    img: "https://th.bing.com/th/id/OIP.w4S7Wyq1hAtgxtT8yCskrAHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7",
    categoria:	"Cafés, Té E Infusiones",
    nombre:		"Café con leche",
    precio:		500,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
},
{
    id: 510,
    img: "https://th.bing.com/th/id/OIP.dvhL9B8LteQRgfP5JDZKOgHaEj?w=316&h=195&c=7&r=0&o=5&pid=1.7",
    categoria:	"Cafés, Té E Infusiones",
    nombre:		"Cappuccino",
    precio:		550,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolores eligendi quis,fuga iste ad pariatur perferendis praesentium impedit repellendus tempora esse eos inventore quidem libero",
}
]

const menuSection = document.querySelector(".menu-section");
const btnsSection = document.querySelector(".btns-section");

const categoryBtns = document.querySelectorAll(".category-btn");

window.addEventListener("DOMContentLoaded", function(){
    displayCategories(menu);
    displayProducts(menu);
})

const displayCategories = function(menu){
    const category = menu.reduce(function(arr, cate){
        if(!arr.includes(cate.categoria))
        arr.push(cate.categoria);
        return arr;
    }, ["All"])
    const filterBtns = category.map(function(cate){
        return `<button class="category-btn" type="button">${cate}</button>`;
    }).join("");
    btnsSection.innerHTML = filterBtns;
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.textContent;
            const filterMenu = menu.filter(function(product){
                if(product.categoria == category){
                    return product;
                }
            });
            if(category === "All"){
                displayProducts(menu);
            } else {
                displayProducts(filterMenu);
            }
        });
    })
};

const displayProducts = function(menu){
    const Products = menu.map(function(prod){
        return `<article class="article-box">
            <img src=${prod.img} alt="${prod.nombre}" class="image-itm">
            <div class="name-price-desc">
                <div class="name-price">
                    <h3 class="name">${prod.nombre}</h3>
                    <h3 class="price">$${prod.precio}</h3>
                </div>
                <p class="desc">${prod.desc}
                </p>
            </div>
        </article>`
    }).join("");
    menuSection.innerHTML = Products;
}

