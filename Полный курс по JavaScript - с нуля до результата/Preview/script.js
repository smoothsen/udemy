class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;

    }
    createDiv(str) {
        let element = document.createElement("div");
        console.log(element);
        element.innerHTML = str;
        document.body.append(element);

        element.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};
        `;
    }
}
const option = new Options("100px", "1000px", "yellow", "80px", "center");
let el = option.createDiv("Чёткая надпись!!!");

