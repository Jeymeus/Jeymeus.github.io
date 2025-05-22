console.log("%c-------------------- M A T R I X --------------------", "color: #00ff00; font-weight: bold;");
console.log("%c[WhiteRabbit.Trace] Fichier détecté : 'lapinBlanc.png'", "color: gray");
console.log("%cEmpreinte visuelle chargée. extraction mémoire.", "color: gray");
console.log("%cLe Lapin Blanc signe toujours ses messages.", "color: gray; font-style: italic;");
console.log("%cLe Lapin Blanc est craintif. Il s'est qu'ils nous écoutent", "color: gray; font-style: italic;");
console.log("%c------------------------------------------------------", "color: #00ff00;");

const form = document.getElementById("hexForm");
const input = document.getElementById("decodedInput");
const error = document.getElementById("errorMsg");

const x = "TEBfVjNyaXTDqQ==";
const t = "YXdha2VuZWQuaHRtbA==";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const hexToText = hex => {
        return hex.match(/.{1,2}/g)
            .map(byte => String.fromCharCode(parseInt(byte, 16)))
            .join('');
    };

    const userHex = input.value.trim();
    const userDecoded = hexToText(userHex)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    const expected = atob(x)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    if (userDecoded === expected) {
        const url = atob(t);
        window.location.href = url;
    } else {
        error.classList.remove("hidden");
        input.value = "";
    }
});

