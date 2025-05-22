// 🧠 Transmission système
console.log("%c---------------------- M A T R I X ---------------------", "color: #00ff00; font-weight: bold; font-size: 14px;");
console.log("%c----------------------------------------------------------", "color: gray");
console.log("%c[Oracle Feed Active]", "color: gray");
console.log("%cUn signal inhabituel a été détecté sur cette fréquence.", "color: gray");
console.log("%cPlusieurs lignes sonnent, mais une seule vibre correctement.", "color: gray");
console.log("%cCertaines vérités sont dissimulées sous des classes... invisibles.", "color: gray");
console.log("%cLes identifiants peuvent guider ceux qui savent les interroger.", "color: gray");
console.log("%cUn fragment du code pourrait restaurer ce qui est dissimulé.", "color: gray");
console.log("%cLa connaissance est à portée : MDN getEl... classLi...", "color: gray");
console.log("%chttps://developer.mozilla.org/fr/docs/Web/API/Element/classList", "color: gray");
console.log("%c----------------------------------------------------------", "color: gray");


const α = document.querySelectorAll("a");

const getLink = () => atob("Y2hlY2tfcmVhbGl0eS5odG1s");

const ξ = (el) => {
    const k = el.getAttribute("data-key");
    try {
        return atob(k);
    } catch (_) {
        return null;
    }
};

window.takePhone = function (id) {
    if (id !== "link4") return console.warn("Appareil non reconnu.");
    const el = document.getElementById(id);
    if (!el) return;

    el.setAttribute("href", getLink());
    el.dataset.unlocked = "true";
    console.log("%c📞 Téléphone en main. Tu peux passer au niveau supérieur.", "color: cyan");
};

α.forEach(el => {
    el.addEventListener("click", e => {
        if (el.classList.contains("hidden")) {
            e.preventDefault();
            alert("Ce lien reste muet. Libère-le d’abord.");
        } else {
            const funcName = ξ(el);
            if (!funcName || el.dataset.unlocked !== "true") {
                e.preventDefault();
                alert("📵 Reviens à la source et mets le en fonction" );
            } else {
                alert("Connexion validée. Transfert...");
                e.preventDefault();
                setTimeout(() => window.location.href = el.getAttribute("href"), 500);
            }
        }
    });
});

