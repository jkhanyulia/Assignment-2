
// AI assisted: javascript heart function 

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("wishlist")) {
    e.target.textContent = e.target.textContent === "♡" ? "❤️" : "♡";
  }
});

// end AI assisted section 


// Mobile navigation toggle

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  }
    else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
});


// Form validation
const form = document.getElementById("orderForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const dessert = document.getElementById("dessert");
const quantity = document.getElementById("quantity");
const message = document.getElementById("formMessage");
isValid = true;

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valid = validateInputs();

    if (valid) {
      message.textContent = "🎉 Order submitted successfully!";
      form.reset();
    }

    // Clear success/error styling
    document.querySelectorAll(".input-control").forEach(control => {
    control.classList.remove("success");
    control.classList.remove("error");
    });

  });
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// AI assisted: email validation function from Copilot
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// end AI assisted section

// AI assisted: telephone validation function from Copilot
const isValidTel = tel => {
  const re = /^\d{10}$/;
  return re.test(String(tel));
}
// end AI assisted section

// AI assisted: quantity validation function from Copilot
const isValidNumber = number => {
  const re = /^[1-9]\d*$/;
  return re.test(String(number));
}
// end AI assisted section

const validateInputs = () => {
  let isValid = true;
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();
  const dessertValue = dessert.value;
  const quantityValue = quantity.value.trim();

  if (nameValue === "") {
    setError(name, "Name is required");
    isValid = false;
  } else {
    setSuccess(name);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    isValid = false;  
  } else {
    setSuccess(email);
  }

  if (telValue === "") {
    setError(tel, "Telephone number is required");
    isValid = false;
  } else if (!isValidTel(telValue)) {
    setError(tel, "Provide a valid 10-digit telephone number");
    isValid = false;
  } else {
    setSuccess(tel);
  }

  if (dessertValue === "") {
    setError(dessert, "Please select a dessert");
    isValid = false;
  } else {
    setSuccess(dessert);
  }

  if (quantityValue === "") {
    setError(quantity, "Quantity is required");
    isValid = false;
  } else if (!isValidNumber(quantityValue) || parseInt(quantityValue) < 1) {
    setError(quantity, "Provide a valid quantity (1 or more)");
    isValid = false;
  } else {
    setSuccess(quantity);
  }

  return isValid;
};


// Dynamic rendering of desserts
const desserts = [
  { name: "Matcha Cloud Tiramisu", 
    desc: "Fluffy matcha layers with mascarpone cream. TikTok famous!", 
    price: 8.99, 
    image: "img/matcha_cloud_tiramisu.webp",
    filter: "cakes" },
  { name: "Strawberry Cloud Cake", 
    desc: "Light as air, sweet as dreams. Instagram's favorite!", 
    price: 7.99,
    image: "img/strawberry_cloud_cake.webp",
    filter: "cakes" },
  { name: "Biscoff Cookie Crunch", 
    desc: "Cookie butter heaven meets caramel bliss. Pure indulgence!", 
    price: 6.99,
    image: "img/biscoff_cookie_crunch.webp",
    filter: "cookies" },
  { name: "Ube Purple Dream", 
    desc: "Filipino flavor magic with that purple aesthetic!", 
    price: 8.99,
    image: "img/ube_purple_dream.webp",
    filter: "cookies" },
  { name: "Pistachio Dream Tart", 
    desc: "Nutty, creamy, totally bougie. Chef's kiss!", 
    price: 9.49,
    image: "img/pistachio_dream_tart.webp",
    filter: "pastries" },
  { name: "Cronut Supreme", 
    desc: "Half croissant, half donut, 100% delicious!", 
    price: 5.99,
    image: "img/cronut_supreme.webp",
    filter: "pastries" }
]

const menu = document.getElementById("menuGrid");

if (menu) {

  desserts.forEach(dessert => {

    const card = document.createElement("article");
    card.classList.add("product-card");
    card.setAttribute("data-filter", dessert.filter);

    card.innerHTML = `
      <div class="image-wrapper">
          <img src="${dessert.image}" alt="${dessert.name}">

          <div class="badges">
              <span class="badge viral">Viral</span>
              <span class="badge hot">🔥</span>
          </div>

          <div class="wishlist">♡</div>
      </div>

      <div class="card-content">
          <h2>${dessert.name}</h2>  

          <p class="description">
              ${dessert.desc}
          </p>

          <div class="card-bottom">
              <span class="price">$${dessert.price}</span>
              <button class="add-btn">🛒 Add</button>
          </div>
      </div>
    `;

    menu.appendChild(card);

  });

}

// Filtering functionality
const filterList = document.querySelector(".filter");
const filterButtons = filterList.querySelectorAll(".filter-btn");

let dessertIndex = 0;

// looping through filter buttons and adding click event listeners to each one
filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let dessertCategory = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterDesserts(dessertCategory);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterDesserts(dessertCategory);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filterDesserts(filter) {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    const category = card.getAttribute("data-filter");

    if (filter === "all" || filter === category) {
      card.removeAttribute("hidden");
    } else {
      card.setAttribute("hidden", "");
    }
  });
}