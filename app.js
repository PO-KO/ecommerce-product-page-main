let thumbnails = document.querySelectorAll(".thumbnail div");
let previewImg = document.querySelector(".preview-img");
let menuBtn = document.querySelector(".menu");
let navbar = document.querySelector(".nav-bar");
let closeBtn = document.querySelector(".close");
let quantityPlus = document.querySelector(".plus");
let quantityMinus = document.querySelector(".minus");
let quantityBlock = document.querySelector(".quantity");
let cartNotif = document.querySelector(".notification");
let addBtn = document.querySelector(".btn-add");
let iconCart = document.querySelector(".icon");
let cartBox = document.querySelector(".cart-box");
let quantityInCart = document.querySelector(".quantity-in-cart");
let deleteBtn = document.querySelector(".delete-btn");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });
    thumbnail.classList.add("active");
    let activePrevNum = thumbnail.dataset.num;
    preview(activePrevNum);
  });
});

let quantity = 0;

menuBtn.addEventListener("click", showNav);
closeBtn.addEventListener("click", hideNav);
quantityPlus.addEventListener("click", plusQuantity);
quantityMinus.addEventListener("click", minusQuantity);
addBtn.addEventListener("click", addToCartNotif);
iconCart.addEventListener("click", toggleCart);
deleteBtn.addEventListener("click", deleteFromCart);

addToCartNotif();

function preview(num) {
  let img = document.createElement("img");
  img.src = `./images/image-product-${num}.jpg`;
  previewImg.innerHTML = "";
  previewImg.append(img);
}

function showNav() {
  navbar.classList.add("show");
}

function hideNav() {
  navbar.classList.remove("show");
}

function plusQuantity() {
  quantity++;
  addToQuantityBlock(quantity);
}

function minusQuantity() {
  if (quantity === 0) return;
  quantity--;
  addToQuantityBlock(quantity);
}

function addToQuantityBlock(quantity) {
  quantityBlock.innerHTML = quantity;
}

function addToCartNotif() {
  if (quantity === 0) {
    cartNotif.classList.add("empty");
    addToCart();
    return;
  }

  cartNotif.classList.remove("empty");
  cartNotif.innerHTML = quantity;
  addToCart();
}

function toggleCart() {
  cartBox.classList.toggle("show");
}

function addToCart() {
  if (quantity === 0) {
    cartBox.classList.add("empty");
    cartBox.querySelector(".row").append("Your cart is empty");
  } else {
    cartBox.querySelector(".row").lastChild.remove();
    cartBox.classList.remove("empty");
    let price = document.querySelector(".current-price p").innerHTML;
    let resultSpan = document.createElement("span");
    let result = +price.slice(1) * quantity;
    resultSpan.classList.add("result");

    quantityInCart.innerHTML = "";

    quantityInCart.append(`${price} x ${quantity}`);
    resultSpan.innerHTML = `$${result}.00`;
    quantityInCart.append(resultSpan);
  }
}

function deleteFromCart() {
  cartBox.classList.add("empty");
  quantity = 0;
  addToCartNotif();
  addToQuantityBlock(quantity);
}
