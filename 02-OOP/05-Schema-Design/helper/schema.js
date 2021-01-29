const xml = require('xml2json');
const fs = require('fs')
function getTablesFromXML(filePath) {
    let content = fs.readFileSync(filePath, {encoding: 'utf-8'});
    let json = JSON.parse(xml.toJson(content))
    
    if (!json["sql"]) {
        return []
    }

    let tables = json["sql"]['table'] || []

    if (!Array.isArray(tables)) {
        tables = [tables]
    }

    return tables.map(t => {
        let properties = t.row ? (Array.isArray(t.row) ? t.row : [t.row]) : []
        let key = t.key ? (Array.isArray(t.key.part) ? t.key.part : [t.key.part]) : []
        return {
            name: t.name,
            properties: properties.map(p => p.name),
            primaryKey: key
        }
    })

}

module.exports = {
    getTablesFromXML
}