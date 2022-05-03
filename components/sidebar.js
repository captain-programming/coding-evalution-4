function sidebar(){
    return `
    <h1>Countries</h1>
    <div id="in" onClick="cSearch(this.id)">India</div>
    <div id="ch" onclick="cSearch(this.id)">China</div>
    <div id="us" onclick="cSearch(this.id)">Usa</div>
    <div id="uk" onclick="cSearch(this.id)">United Kingdom</div>
    <div id="nz" onclick="cSearch(this.id)">New Zealand</div>
        `;
    }


export default sidebar;