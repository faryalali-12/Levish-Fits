// Simple welcome message
window.onload = function () {
    console.log("Welcome to Elegance Mall Website");
};

// Example click alert (optional)
const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("click", () => {
        alert("Product clicked!");
    });
});
