// Challenge: Create a checkout page following the design. You don’t need to use JS in this challenge but use correct input types and validation. Don’t look at the existing solution. Fulfill user stories below:

// User story: I can see a page following the given design
// User story: I can input email, phone, full name, address, city, country, and postal code
// User story: I can input the number of items
// User story: I can select at least 3 countries from the dropdown
// User story: When I click submit button or press enter, I can see a warning if validation fails
// User story: When I click submit button or press enter, I can see a successful alert if validation succeeds
// Icon: https://google.github.io/material-design-icons/

const decrement = document.querySelector(".cart__item-control-decrease");
const increment = document.querySelector(".cart__item-control-increase");

const cart = document.querySelector(".cart");
const shipping = document.querySelector("#shipping");
const totalElement = document.querySelector("#Total");

const modalclose = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");

const shippingcost = parseFloat(shipping.innerText.substr(1));
let total = parseFloat(totalElement.innerText.substr(1));

modalclose.addEventListener("click", () => {
  modal.classList.toggle("modal--show");
});

cart.addEventListener(
  "click",
  e => {
    const { className } = e.target;

    if (className == "cart__item-control-decrease") {
      decreaseCount(e.target);
    } else if (className == "cart__item-control-increase") {
      increaseCount(e.target);
    }
  },
  true
);

function decreaseCount(target) {
  let price = parseFloat(
    target.parentNode.previousElementSibling.firstElementChild.innerText.substr(
      1
    )
  );

  let count = target.nextElementSibling.innerText;

  if (count > 0) {
    total = total - price;
    count--;
    updateUI(target.nextElementSibling, count, total);
  }
}

function increaseCount(target) {
  let price = parseFloat(
    target.parentNode.previousElementSibling.firstElementChild.innerText.substr(
      1
    )
  );

  let count = target.previousElementSibling.innerText;

  if (parseInt(total) == 0) {
    total = total + price + shippingcost;
  } else {
    total = total + price;
  }

  count++;
  updateUI(target.previousElementSibling, count, total);
}

function updateUI(target, count, total) {
  target.innerText = count;

  console.log({ total });
  if (parseInt(total) <= shippingcost) {
    total = 0;
  }
  totalElement.innerText = "$" + total.toFixed(2);
  totalElement.classList.add("highlight");
  setTimeout(() => {
    totalElement.classList.remove("highlight");
  }, 1000);
}

form.addEventListener("submit", e => {
  e.preventDefault();

  let error = [];

  console.log(form.country.value);
  if (form.email.value == "") {
    form.email.parentNode.classList.remove("error-invalid");
    form.email.parentNode.classList.add("error");
    error.push(true);
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      form.email.value
    )
  ) {
    form.email.parentNode.classList.add("error-invalid");
    form.email.parentNode.classList.remove("error");
    error.push(true);
  } else {
    form.email.parentNode.classList.remove("error-invalid");
    form.email.parentNode.classList.remove("error");
  }

  if (form.phone.value == "") {
    form.phone.parentNode.classList.add("error");
    error.push(true);
  } else {
    form.phone.parentNode.classList.remove("error");
  }

  if (form.fullname.value == "") {
    form.fullname.parentNode.classList.add("error");
    error.push(true);
  } else {
    form.fullname.parentNode.classList.remove("error");
  }

  if (form.address.value == "") {
    form.address.parentNode.classList.add("error");
    error.push(true);
  } else {
    form.address.parentNode.classList.remove("error");
  }

  if (form.city.value == "") {
    form.city.parentNode.classList.add("error");
    error.push(true);
  } else {
    form.city.parentNode.classList.remove("error");
  }

  if (form.country.value == "country") {
    form.country.parentNode.classList.add("error");
    error.push(true);
  } else {
    form.country.parentNode.classList.remove("error");
  }
  if (form.postalcode.value == "") {
    form.postalcode.parentNode.classList.add("error");
    error.push(true);
  } else {
    form.postalcode.parentNode.classList.remove("error");
  }

  if (error.length == 0) {
    // alert("form submitted");
    modal.classList.toggle("modal--show");
  }
});
