const GLOSARY = {
    "Procesando un XML": {
        txt: "El DOM tambien tiene la capacidad de brindar el acceso a documento de tipo XML",
        uri: "https://www.w3schools.com/xml/tryit.asp?filename=try_dom_loadxmldoc",
    },
    "document.createElement": {
        txt: "crea un elemento HTML especificado por su tagName",
        uri: "https://codesandbox.io/s/mymnkloo6y",
    },
    "document.documentElement": {
        txt: "Regresa el html completo (este metodo es de solo lectura)",
        uri: "",
    },
    "document.embeds": {
        txt: "Regresa un listado de todos los embeds que existen en la pagina",
        uri: "https://codesandbox.io/s/m3l9w73vv9",
    },
    "document.getElementByClassName": {
        txt: "Retorna un objeto HTMLCollection os elementos hijos que tengan todos los nombres de clase indicado",
        uri: "https://codesandbox.io/s/8n9ox394pj",
    },
    "document.getElementById": {
        txt: "Devuelve una referencia de un elemento por su ID.",
        uri: "https://codesandbox.io/s/z68komnw8p",
    },
    "document.getElementByName": {
        txt: "Retorna un NodeList de los elementos hijos que concuerden con el parametro name indicado",
        uri: "https://codesandbox.io/s/8n900kjyw8",
    },
    "document.getElementsByTagName": {
        txt: "Retorna un NodeList de los elementos hijos que concuerden con el nombre del tag indicado",
        uri: "https://codesandbox.io/s/7y8ywxm340",
    },
    "document.querySelector": {
        txt: "Devuelve una referencia de un elemento dado por un selector de CSS",
        uri: "https://codesandbox.io/s/v8l1kl0j6l",
    },
    "document.querySelectorAll": {
        txt: "Retorna un NodeList de los elementos hijos segun el selector CSS dado",
        uri: "https://codesandbox.io/s/l30xokp1l",
    },
    "Creando componentes": {
        txt: "Se genera un js que nos permite crear componentes a placer",
        uri: "./view/material.html",
    },
    "document.onreadystatechange": {
        txt: "Permite identificar los estados en los que se encuentra el documento, este trabaja en conjunto con document.readyState",
        uri: "./view/ready.html",
    },
    "Practica jugando con DOM y CSSOM": {
        txt: "Viendo lo basico procederemos a jugar con EL DOM Y CSSOM",
        uri: "./view/draw.html",
    },
};

/* eslint-disable */
(() => {
    const KEYS = Object.entries(GLOSARY);
    KEYS.forEach((item) => {
        const d1 = createElement.create({ className: "col s12" }, ".row");
        const d2 = createElement.create({ className: "card light-blue darken-4" }, `#${d1}`);
        const d3 = createElement.create({ className: "card-content white-text" }, `#${d2}`);
        createElement.create({
            tag: "span",
            className: "card-title",
            innerHTML: item[0],
        }, `#${d3}`);
        createElement.create({
            tag: "p",
            innerHTML: item[1].txt,
        }, `#${d3}`);

        const d4 = createElement.create({ className: "card-action" }, `#${d2}`);
        createElement.create({
            tag: "a",
            href: item[1].uri,
            target: "_blank",
            innerHTML: "Test",
        }, `#${d4}`);
    });
})();
