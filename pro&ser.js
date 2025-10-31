


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) { // adjust scroll distance if needed
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
// add to cart toast

  document.addEventListener("DOMContentLoaded", function() {
    // Get all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.btn-outline-dark');
    const toastEl = document.getElementById('cartToast');
    const toast = new bootstrap.Toast(toastEl, { delay: 2000 }); // auto-hide in 2s

    addToCartButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        toast.show();
      });
    });
  });


//   wishlist toast
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const icon = btn.querySelector("i");
      const isActive = icon.classList.toggle("bi-heart-fill");
      icon.classList.toggle("bi-heart", !isActive);
      icon.style.color = isActive ? "red" : "black";
  
      // Toast message
      const toastEl = document.createElement("div");
      toastEl.className =
        "toast align-items-center text-bg-danger border-0 show position-fixed bottom-0 start-50 translate-middle-x mb-3";
      toastEl.style.zIndex = "1055";
      toastEl.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">
            ${isActive ? "❤️ Added to Wishlist!" : "💔 Removed from Wishlist"}
          </div>
        </div>`;
      document.body.appendChild(toastEl);
      setTimeout(() => toastEl.remove(), 2000);
    });
  });
  


