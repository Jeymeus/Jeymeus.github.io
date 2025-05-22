    const key = document.getElementById("key");
    const lever = document.getElementById("lever");
    const ignitionZone = document.getElementById("ignitionZone");
    const controlZone = document.getElementById("controlZone");

    const trapKey = document.getElementById("trap-key");
    const trapLever = document.getElementById("trap-lever");

trapKey.onclick = () => {
        alert("Piégé : tu as déclenché une fausse commande ! Conserve l'url helicopter.html et reviens vite !");
    location.href = "wakeUp.html";
};

trapLever.onclick = () => {
        alert("Interception ! Essaie de contourner ça ! Conserve l'url helicopter.html et reviens vite !");
    location.href = "wakeUp.html";
};

key.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", "key");
});
lever.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", "lever");
});

    let ignitionActivated = false;
    let controlsActivated = false;

ignitionZone.addEventListener("dragover", e => e.preventDefault());
ignitionZone.addEventListener("drop", e => {
        e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "key") {
        ignitionZone.textContent = "Contact activé ⚡";
    ignitionActivated = true;
    checkFinalRedirect();
  } else {
        ignitionZone.textContent = "Échec. Mauvais objet.";
  }
});

controlZone.addEventListener("dragover", e => e.preventDefault());
controlZone.addEventListener("drop", e => {
        e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "lever") {
        controlZone.textContent = "Commandes actives ✈";
    controlsActivated = true;
    checkFinalRedirect();
  } else {
        controlZone.textContent = "Erreur. Ce n'est pas le bon équipement.";
  }
});

    function checkFinalRedirect() {
  if (ignitionActivated && controlsActivated) {
        setTimeout(() => {
            window.location.href = "finalNeo.html";
        }, 1500);
  }
}