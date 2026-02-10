/* 1. Page Load Event */
window.addEventListener("load", () => {
    console.log("Page fully loaded");
    document.getElementById("status").textContent =
        "Page loaded successfully";
});

/* 2. Click Event */
document.getElementById("btnClick")
    .addEventListener("click", () => {
        document.getElementById("clickMsg").textContent =
            "Button clicked!";
    });

/* 3 & 4. Input and Select Events */
const input = document.getElementById("nameInput");
const msg = document.getElementById("inputMsg");

input.addEventListener("input", () => {
    msg.textContent = "User is typing...";
});

input.addEventListener("select", () => {
    msg.textContent = "Text selected!";
});

/* 5. Form Submit */
const form = document.getElementById("loginForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload
    formMsg.textContent = "Form submitted successfully";
});

/* 6. Form Reset */
form.addEventListener("reset", () => {
    formMsg.textContent = "Form reset";
});

/* 7. Page Exit / Reload Warning */
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});
