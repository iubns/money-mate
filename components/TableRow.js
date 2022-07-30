class TableRow extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get number () {
        return this.getAttribute('number')
    }

    get image () {
        return this.getAttribute('image')
    }

    get name () {
        return this.getAttribute('name')
    }

    get point () {
        return this.getAttribute('point')
    }

    get point () {
        return this.getAttribute('point')
    }

    get victoryDay () {
        return this.getAttribute('victoryDay')
    }
    
    numberArea (number){
        if(number <= 3)
        {
            const imageNames = ['1st', '2nd', '3rd']
            return `
            <div style='width: 12%;'>
                <img 
                    src='./img/${imageNames[number - 1]}.png' 
                    height='38'
                />
            </div>`
        }
        return `
        <span style='font-size: 1.2rem; width: 12%;'>
            ${number}
        </span>`
    }

    render() {
        this.innerHTML = `
        <div
            style="
                display:flex;
                justify-content:center;
                align-items: center; 
                height: 40px;
            "
        >
            ${this.numberArea(this.number)}
            
            <div style='width: 20%;'>
                ${this.number === '1' ? 
                    `<img 
                        src='./img/crown.png' 
                        style='position:absolute; margin-top: -17px; z-index: 1;'
                        width='32'
                        height='32'
                    />` : ''
                }
                <img
                    style='border-radius: 35px;margin-top: 5px;z-index: 10;position: relative;' 
                    width='32' height='32' src='./img/${this.image}' />
            </div>
            <span style='
                width: 30%;
                font-weight: bold;
            '>
                ${this.name}
            </span>
            <span style='width: 24%;'>
                ${this.point}점
            </span>
            <span style='width: 24%;'>
                ${this.victoryDay}일
            </span>
        </div>`
    }
}

window.customElements.define('table-row', TableRow);