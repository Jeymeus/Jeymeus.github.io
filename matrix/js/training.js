// Affiche console Matrix-style
console.log("%c---------------------- M A T R I X ---------------------", "color: #00ff00; font-weight: bold; font-size: 14px;");
console.log("%c----------------------------------------------------------", "color: gray");
console.log("%c[Construct Access] L'information t'es transmise", "color: gray");
console.log("%c[Download Console] ... ... ...", "color: gray");
console.log("%c----------------------------------------------------------", "color: gray");

const loginForm = document.getElementById("loginForm");
const userInput = document.getElementById("user");
const passInput = document.getElementById("elu");
const authError = document.getElementById("authError");

const stageAuth = document.getElementById("stage-auth");
const stageSelect = document.getElementById("stage-select");
const stageLoading = document.getElementById("stage-loading");

const normalize = str => str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const u = normalize(userInput.value.trim());
    const p = passInput.value.trim();

    if (u === "neo" && p === "elu") {
        authError.classList.add("hidden");
        stageAuth.classList.add("hidden");
        stageSelect.classList.remove("hidden");
    } else {
        authError.classList.remove("hidden");
    }
});

document.querySelectorAll(".progBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        stageSelect.classList.add("hidden");
        stageLoading.classList.remove("hidden");

        const failSafe = setTimeout(() => {
            originalAlert("Le Construct a perdu la liaison.\nRedémarrage...");
            window.location.reload();
        }, 40000); // 40 sec

        // ⏳ Erreur de chargement après 5 sec
        setTimeout(() => {
            const errorMsg = document.createElement("p");
            errorMsg.textContent = "Erreur de chargement — Dépêche-toi d’alerter Tank !";
            errorMsg.className = "text-gray-400 mt-4 italic";
            stageLoading.appendChild(errorMsg);

            // Redéfinition de alert
            window.alert = function (msg) {
                if (msg === "Tank") {
                    clearTimeout(failSafe); // ✅ empêche le reload
                    window.alert = originalAlert;
                    originalAlert("Tank : Bien reçu, tu peux accéder à knowthyself.html");

                    const encodedURL = "a25vd3RoeXNlbGYuaHRtbA==";
                    setTimeout(() => {
                        window.location.href = atob(encodedURL);
                    }, 1000);
                } else {
                    originalAlert(msg);
                }
            };
        }, 5000);
    });
});
  

const originalAlert = window.alert;
