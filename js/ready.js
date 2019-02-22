/* eslint-disable */
document.onreadystatechange = () => {
    const STATE = document.readyState;
    if (STATE === "loading") {
        console.log("Cargando sitio");
    } 
    
    if (STATE === "interactive") {
        console.log("El sito ya es interactivo para el usuario");
        const d1 = createElement.create({ className: "col s12" }, ".row");
        const d2 = createElement.create({ className: "card light-blue darken-4" }, `#${d1}`);
        const d3 = createElement.create({ className: "card-content white-text" }, `#${d2}`);
        createElement.create({
            tag: "span",
            className: "card-title",
            innerHTML: "El sitio es interactico",
        }, `#${d3}`);
        createElement.create({
            tag: "p",
            innerHTML: "WOW",
        }, `#${d3}`);

        const d4 = createElement.create({ className: "card-action" }, `#${d2}`);
        createElement.create({
            tag: "a",
            href: "./",
            target: "_blank",
            innerHTML: "Test",
        }, `#${d4}`);
    }
    if (STATE === "complete") {
        console.log("El sitio se cargo completamente");
        const CSS_RULES = document.styleSheets[0];
        console.log("Se carga la primera regla de css: " + CSS_RULES.cssRules[0].cssText);
        CSS_RULES.addRule("html, body", "background:gray", 0);
        console.log("Se modifica la primera regla css: " + CSS_RULES.cssRules[0].cssText);
    }
    
};
