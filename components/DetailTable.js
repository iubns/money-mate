class DetailTable extends HTMLElement {
    constructor (){
        super();
    }

    dailyData = []
    
    connectedCallback() {
        this.render();
    }

    setData(dailyData){
        this.dailyData = dailyData
    }

    render() {
        this.innerHTML = `
            <div>
                ${
                    Object.entries(this.dailyData)
                    .map(([day, point]) => `${day.split('.')[2]}일 ${point}점<br/>`)
                    .join('')
                }
            </div>
        `
    }
}



window.customElements.define('detail-table', DetailTable);