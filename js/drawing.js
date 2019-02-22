/* eslint-disable */
(function () {
    window.salida = new Array();
    //= ================================================================//

    /**
     * Permite crear elementos dinamicamente
     */
    const createElement = Object.create({ config: null, customSettings: null, contetPanel: null }, {
        init:
        {
            get() {
                this.config = {
                    tag: "div",
                    id: `id_${Math.random().toString(36).substr(2)}`,
                    label: "empty",
                };
                this.customSettings || (this.customSettings = {});

                for (const property in this.customSettings) {
                    this.config[property] = this.customSettings[property];
                }
            }, // get:function
        }, // init
        factory:
        {
            get() {
                if (this.contetPanel !== null) {
                    const panel = document.createElement(this.config.tag);
                    let source = "";
                    let config = "";
                    for (property in this.config) {
                        try {
                            config = this.config[property];
                            source = (property === "infoText") ? `panel.innerHTML = '${config}';` : `panel.${property} = '${config}';`;
                            eval(source);
                        } catch (Error) {}
                    }// for (property in config)

                    if (this.config.label != "" && this.config.label != "empty") {
                        const tagLabel = document.createElement("label");
                        tagLabel.innerHTML = this.config.label;
                        this.contetPanel.appendChild(tagLabel);
                    }// if (config.label != '' && config.label != 'empty')
                    this.contetPanel.appendChild(panel);
                    this.contetPanel = null;
                }
            }, // get:function()
        }, // factory
        create:
        {
            value(custom, idContent) {
                this.customSettings = custom;
                idContent = idContent || "";
                this.contetPanel = (idContent !== "") ? document.getElementById(idContent) : document.body;
                this.init;
                this.factory;
                return this.config.id;
            }, // value
        }, // create
    });// createElement

    //= ================================================================//

    const characters = {
        a: [2, 6, 8, 11, 13, 15, 19, 20, 21, 22, 23, 24, 25, 29, 30, 34],
        b: [0, 1, 2, 3, 5, 9, 10, 14, 15, 16, 17, 18, 20, 24, 25, 29, 30, 31, 32, 33],
        c: [1, 2, 3, 5, 9, 10, 15, 20, 25, 29, 31, 32, 33],
        d: [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 30, 31, 32, 33],
        e: [0, 1, 2, 3, 4, 5, 10, 15, 16, 17, 18, 20, 25, 30, 31, 32, 33, 34],
        f: [0, 1, 2, 3, 4, 5, 10, 15, 16, 17, 18, 20, 25, 30],
        g: [1, 2, 3, 5, 9, 10, 15, 20, 23, 24, 25, 29, 31, 32, 33],
        h: [0, 4, 5, 9, 10, 14, 15, 16, 17, 18, 19, 20, 24, 25, 29, 30, 34],
        i: [0, 1, 2, 3, 4, 7, 12, 17, 22, 27, 30, 31, 32, 33, 34],
        j: [4, 9, 14, 19, 20, 24, 25, 29, 31, 32, 33],
        k: [0, 4, 5, 8, 10, 12, 15, 16, 20, 22, 25, 28, 30, 34],
        l: [0, 5, 10, 15, 20, 25, 30, 31, 32, 33, 34],
        m: [0, 4, 5, 6, 9, 8, 10, 12, 14, 15, 19, 20, 24, 25, 29, 30, 34],
        n: [0, 4, 5, 6, 9, 10, 12, 14, 15, 17, 19, 20, 22, 24, 25, 28, 29, 30, 34],
        o: [1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 31, 32, 33],
        p: [0, 1, 2, 3, 5, 9, 10, 14, 15, 16, 17, 18, 20, 25, 30],
        q: [1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 22, 24, 26, 27, 28, 34],
        r: [0, 1, 2, 3, 5, 9, 10, 14, 15, 16, 17, 18, 20, 22, 25, 28, 30, 34],
        s: [1, 2, 3, 5, 9, 10, 16, 17, 18, 24, 25, 29, 31, 32, 33],
        t: [0, 1, 2, 3, 4, 7, 12, 17, 22, 27, 32],
        u: [0, 4, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 31, 32, 33],
        v: [0, 4, 5, 9, 10, 14, 15, 19, 20, 24, 26, 28, 32],
        w: [0, 4, 5, 9, 10, 12, 14, 15, 17, 19, 20, 22, 24, 25, 26, 28, 29, 30, 34],
        x: [0, 4, 6, 8, 11, 13, 17, 21, 23, 26, 28, 30, 34],
        y: [0, 4, 5, 9, 11, 13, 16, 18, 22, 27, 32],
        z: [0, 1, 2, 3, 4, 9, 13, 17, 21, 25, 30, 31, 32, 33, 34],
        " ": [],
    };// caracter

    //= ================================================================//

    function Drawing() {
        this.colorLetter = "black";
        this.contentLetter = "letter";
        this.number = false;
    }

    //= ================================================================//

    /**
     * Permite crear elementos HTML.
     *
     * @param  json   custom   Configuracion para el nuevo elemento HTML.
     * @param  string idParent Identificador del contenedor.
     * @return void.
     */
    Drawing.prototype.create = function (custom, idParent) {
        var custom = custom || {};
        const parent = idParent || "";
        return createElement.create(custom, parent);
    };// Drawing.prototype.create = function(custom, idParent)

    //= ================================================================//

    /**
     * Crea el dibujo en la cuadricula.
     *
     * @param  String  idParent IdDel contenedor
     * @param  numbre  nGrid    cuadros de la cuadricula
     * @param  string  _class   estilo
     * @param  json    points   Json de los elementos que se colorean
     * @return void.
     */
    Drawing.prototype.draw = function (idParent, nGrid, _class, points) {
        var idParent = idParent || "";
        var nGrid = nGrid || "";
        var _class = _class || "";
        const idGrid = createElement.create({ className: _class }, idParent);

        for (var i = 0; i < nGrid; i++) {
            createElement.create({ innerHTML: i }, idGrid);
        }// for (var i = 0 ; i < nGrid ; i ++)

        const grid = document.querySelectorAll(`#${idGrid} div`);
        for (point in points) {
            _position = points[point].p;
            _style = points[point].c;
            for (var i in _position) {
                position = _position[i];
                grid[position].className = _style;
            }// for (var i in _position)
        }// for(point in points)

        let out = "";
        let index = 0;
        for (i = 0; i < 35; i++) {
            if (grid[i].className === "black") {
                out += "*";// letra
            } else {
                out += "🌼";// relleno
            }
            index++;

            if (index === 5) {
                index = 0;
                out += "\n";
            }
        }


        window.salida.push(out);
    };// Drawing.prototype.draw = function(idParent, nGrid, _class, points)

    //= ================================================================//

    Drawing.prototype.write = function (idParent, text, _class1, _class2) {
        var text = text.toLowerCase();
        let json = new Array();
        for (const i in text) {
            aux = text[i];
            _char = (typeof characters[aux]) ? characters[aux] : null;
            if (_char !== null) {
                json = [
                    {
                        p: _char,
                        c: _class2,
                    },
                ];
                this.draw(idParent, 35, _class1, json);
            }// if (_char !== null)
        }// for (var i in text)
    };// Drawing.prototype.draw = function(idParent, nGrid, _class, points)


    window.drawing = new Drawing();
}());// function()
