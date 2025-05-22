console.log("%c---------------------- M A T R I X ---------------------", "color: #00ff00; font-weight: bold; font-size: 14px;");
console.log("%c----------------------------------------------------------", "color: gray");
console.log("%c[system:trace] initialisation... ok", "color: gray");
console.log("%c[env:virtual] mémoire partielle retrouvée", "color: gray");
console.log("%c> état: fragmentation perceptive", "color: gray");
console.log("%c[𝒙] archive: 'CodeHex' enregistré", "color: gray");
localStorage.setItem("CodeHex", "2f667265654d6f7270686575732e68746d6c");
console.log("%c[𝒙] requête mémoire local → résultat : masque appliqué", "color: gray");
console.log("%cnote: la vérité n’est pas visible, elle est persistée", "color: gray");
console.log("%c[hint] seul l’observateur relie logique et réalité", "color: gray");
console.log("%c----------------------------------------------------------", "color: gray");

const terminal = document.getElementById("terminal");
const inputLine = document.getElementById("input-line");

const lines = [
    "Connexion à l'Oracle en cours...",
    "Chargement des révélations personnelles...",
    "Neo : Vous êtes l'Oracle ?",
    "Oracle : Bonjour Néo, je t’attendais.",
    "Oracle : Beaucoup viennent me voir. Peu comprennent pourquoi.",
    "Oracle : Tu cherches la vérité ? La vérité est une chose étrange.",
    "Oracle : Tu veux un cookie, ils sont tout chauds... C’est ainsi que tout commence, parfois.",
    "Neo : Je ne suis pas sûr de comprendre...",
    "Oracle : La compréhension viendra. Ou elle ne viendra pas.",
    "Oracle : On revient toujours à la vérité, Néo.",
    "Oracle : Et la vérité, c’est que parfois, ce que tu cherches... se trouve déjà là.",
    "Oracle : La réalité est un masque. Regarde sous la surface.",
    "Oracle : L’autre se cache."
];

let index = 0;

function typeNextLine() {
    if (index < lines.length) {
        const line = document.createElement("p");
        line.className = "terminal-line";
        line.textContent = lines[index];
        terminal.appendChild(line);
        index++;
        setTimeout(typeNextLine, 1700);
    } else {
        inputLine.textContent = "Système en veille...";
    }
}

setTimeout(typeNextLine, 1500);

setTimeout(() => {
    const a = "4oCsbGUgY29va2llID8gSWwgbidlc3QgcGFzIGzDqS4gTWFpcyBzb3V2aWVucy10b2ksIHR1IG4nZXMgcGFzIGNvbm5lY3TDqSBhIMOpbGEgTWF0cmljZcK7LiBqdXN0ZSBlbiBsb2NhbC4=";
    const b = atob(a);
    const lateHint = document.createElement("p");
    lateHint.className = "terminal-line";
    lateHint.textContent = b;
    terminal.appendChild(lateHint);
}, 120000);
