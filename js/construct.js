console.log("%c---------------------- M A T R I X ---------------------", "color: #00ff00; font-weight: bold; font-size: 14px;");
console.log("%c----------------------------------------------------------", "color: gray");
console.log("%c[Construct Access] Une zone masquée contient le dernier verrou.", "color: gray");
console.log("%cL'entrée est présente, mais camouflée. Style et vérité sont liés.", "color: gray");
console.log("%c----------------------------------------------------------", "color: gray");

const form = document.getElementById("finalForm");
const input = document.getElementById("hiddenWord");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = input.value.trim().toLowerCase();
    if (value === "wakeup") {
        const encoded = form.getAttribute("data-key");
        const href = encoded ? atob(encoded) : null;
        if (href) {
            window.location.href = href;
        }
    } else {
        errorMsg.classList.remove("hidden");
        input.value = "";
    }
});
