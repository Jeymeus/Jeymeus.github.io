(function () {
    // 💊 Log mystérieux
    console.log("%c---------------------- M A T R I X ---------------------", "color: #00ff00; font-weight: bold; font-size: 14px;");

    console.log("%c----------------------------------------------------------", "color: gray");
    console.log("%c[Oracle/DecisionMatrix] Deux options détectées.", "color: gray");
    console.log("%cAucune n’est accessible... pour l’instant.", "color: gray");
    console.log("%cIndice pour l'opérateur : Les choix semblent verrouillés. Une intervention manuelle est nécessaire.", "color: gray");
    console.log("%cIl suffit parfois de regarder de plus près.", "color: gray");
    console.log("%cTout est une question de choix.", "color: gray");
    console.log("%c----------------------------------------------------------", "color: gray");

    const buttons = [
        document.getElementById("pill-button-blue"),
        document.getElementById("pill-button-red")
    ];

    buttons.forEach((btn) => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((m) => {
                if (
                    m.type === "attributes" &&
                    m.attributeName === "disabled" &&
                    !btn.hasAttribute("disabled")
                ) {
                    btn.classList.remove("pill-disabled");
                    console.log(`%c✅ ${btn.id} est maintenant actif.`, "color: lightgreen");
                }
            });
        });

        observer.observe(btn, { attributes: true });
    });

    const decode = (el) => {
        try {
            const raw = el.getAttribute("data-key");
            return atob(raw);
        } catch (_) {
            return null;
        }
    };

    buttons[0].addEventListener("click", () => {
        if (!buttons[0].disabled) {
            const href = decode(buttons[0]);
            if (href) {
                alert("Tu veux réellement oublier ? Neo.");
                setTimeout(() => window.location.href = href, 500);
            }
        }
    });

    buttons[1].addEventListener("click", () => {
        if (!buttons[1].disabled) {
            const href = decode(buttons[1]);
            if (href) {
                alert("Bienvenue dans la réalité.");
                setTimeout(() => window.location.href = href, 500);
            }
        }
    });
})();
