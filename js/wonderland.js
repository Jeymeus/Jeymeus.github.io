console.log("%c-------------------- M A T R I X --------------------", "color: #00ff00; font-weight: bold;");
console.log("%c[WhiteRabbit.Trace] Fichier détecté : 'lapinBlanc.png'", "color: gray");
console.log("%cEmpreinte visuelle chargée. extraction mémoire.", "color: gray");
console.log("%cLe Lapin Blanc signe toujours ses messages.", "color: gray; font-style: italic;");
console.log("%cLe Lapin Blanc est craintif. Il s'est qu'ils nous écoutent", "color: gray; font-style: italic;");
console.log("%c------------------------------------------------------", "color: #00ff00;");

const form = document.getElementById("hexForm");
const input = document.getElementById("decodedInput");
const error = document.getElementById("errorMsg");

const x = "NEM0MDVGNjMzNzI2OTRFOQ==";

const t = "YXdha2VuZWQuaHRtbA==";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userHex = input.value.trim().toUpperCase();
    const expectedHex = atob(x).toUpperCase();

    if (userHex === expectedHex) {
        const url = atob(t);
        window.location.href = url;
    } else {
        error.classList.remove("hidden");
        input.value = "";
    }
});
