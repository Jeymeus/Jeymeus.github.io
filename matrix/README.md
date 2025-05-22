# 🕶️ The Matrix: RedPill Experience

index.html pour démarrer le projet

## 🧠 Thème

Bienvenue dans **The Matrix: RedPill Experience**, une aventure web interactive et cryptique inspirée de l’univers de *Matrix*. Vous incarnez **Mr. Anderson**, sur le point de faire un choix crucial : découvrir la vérité ou retourner à une réalité factice. Ce projet est un **jeu de piste numérique**, conçu comme un enchaînement d’énigmes réparties sur différentes pages HTML. Chaque niveau cache ses secrets dans le code source, le JavaScript, les cookies, ou d'autres artefacts du web.

## 🎯 Objectif

Plonger l'utilisateur dans une série d’épreuves de plus en plus complexes, basées sur des concepts web et de cybersécurité (DOM manipulation, clickjacking, cookies, obfuscation, DnD API, etc.), jusqu’à le confronter à un choix final métaphorique : accepter la vérité… ou rester dans l’ignorance.

## 📄 Arborescence et défis

| Page HTML               | Titre ou scène                           | Défi / Épreuve principale                                    |
|-------------------------|------------------------------------------|--------------------------------------------------------------|
| `index.html`            | Bienvenue Mr. Anderson                   | Enigme 1 : Bouton avec prompt → code réponse JS              |
| `puzzlePhone.html`      | Tu as choisi d'en savoir plus            | Enigme 2 : Simulation téléphone → console et classList       |
| `reality_check.html`    | Choix des pilules                        | Enigme 3 : Rouge / Bleu désactivées → redirection selon choix|
| `construct.html`        | Trinity t’accueille                      | Enigme 4 Rouge : Clickjacking, input invisible               |
| `wonderland.html`       | Le lapin blanc                           | Enigme 4 Bleu : réponse cachée dans une image (code hex)     |
| `awakened.html`         | Je suis là pour…                         | Enigme 5 : Formulaire avec réponse ! obligé pilule bleu      |
| `knowthyself.html`      | Tank et les simulations                  | Enigme 6 : Accès restreint via log + prompt console      |
| `fight.html`            | Neo vs Morpheus                          | Enigme 8 : Seul un fichier data.txt contient la clé          |
| `oracle.html`           | L’oracle te parle                        | Enigme 9 : texte caché (image hexa + cookie + URL)           |
| `rescue.html`           | Sauvetage de Morpheus                    | Enigme 10 : console JS → `libererMorpheus()`                 |
| `pilot.html`            | Trinity pilote l'hélicoptère             | Enigme 11 : Drag and Drop pour charger un module             |
| `agent.html`            | Agent Smith vs Neo                       | Enigme 12 : piège/impasse volontaire                        |
| `final.html`            | Neo arrête les balles                    | Enigme 13 : JS malveillant actif → désactivation nécessaire  |
| `level1.html`           | Faux niveau final si pilule rouge        | Enigmes secondaires → message final sur mauvais choix        |
| `wakeUp.html`           | Fake Hameçonage                          | Page l'utilisateur s'est trompé      |

## 📌 Notes

- Toutes les pages doivent masquer au maximum leur destination (via `href="#"` ou transformation à la volée).
- Les scripts critiques sont externalisés.
- Des traces laissées volontairement dans le DOM ou console guident l’utilisateur.
- Certains pièges nécessitent une désactivation manuelle de JS ou l’inspection du code.
- Aucune solution n’est visible directement sans interaction avancée.

## 🛠️ Technologies utilisées

- HTML/CSS (sans frameworks visibles)
- JavaScript Vanilla (manipulation DOM, cookies, etc.)
- API Web (Drag and Drop, Prompt, console, etc.)
- Techniques d’obfuscation ou de diversion UX

---

> *"La vérité est là, mais encore faut-il la vouloir."*
