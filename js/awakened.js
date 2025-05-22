const form = document.getElementById("truthForm");
const input = document.getElementById("truthInput");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const u = input.value.trim();
    const k = btoa(u);
    const x = "TEBfVjNyaXTDqQ==";
    if (k === x) {
        const t = atob(form.getAttribute("data-key"));
        window.location.href = t;
    } else {
        errorMsg.classList.remove("hidden");
        input.value = "";
    }
});