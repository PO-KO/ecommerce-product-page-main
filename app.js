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
addBtn.addEventListener("click", addToCart);
iconCart.addEventListener("click", toggleCart);

addToCart();

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

function addToCart() {
  if (quantity === 0) {
    cartNotif.classList.add("empty");
    return;
  }

  cartNotif.classList.remove("empty");
  cartNotif.innerHTML = quantity;
}

function toggleCart() {
  cartBox.classList.toggle("show");
}
