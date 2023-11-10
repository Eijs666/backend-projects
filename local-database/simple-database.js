const fs = require("fs");
const databaseModule = require('./database');

const dbFilePath = "./data.json";

let database = [];

try {
    const data = fs.readFileSync(dbFilePath, "utf8");
    database = JSON.parse(data);
} catch (err) {
    database = [];
}

function saveData() {
    fs.writeFileSync(dbFilePath, JSON.stringify(database, null, 2));
}

function addItem(item) {
    database.push(item);
    saveData();
}

function getAllItems() {
    return database;
}

module.exports = {
    addItem,
    getAllItems
}

databaseModule.addItem({ id: 1, name: "Item 1" });
databaseModule.addItem({ id: 2, name: "Item 2" });

const allItems = databaseModule.getAllItems();
console.log("All items: ", allItems);
