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
        element.innerHTML = "dasdasdasdas";
        document.body.append(element);

        element.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            fontSize: ${this.fontSize};
            textAlign: ${this.textAlign};
        `;
    }
}
const option = new Options(10, 10, "yellow", "10px", "center");
let el = option.createDiv("ЕБОБАНЫЙ АБАМЭ!!!");

