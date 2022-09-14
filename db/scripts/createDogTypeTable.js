import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS dogTable 
(dogType_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, dog_name TEXT, dog_color TEXT, dog_age TEXT);`;

async function createdogTypeTable() {
    const res = await query(sqlString);
    console.log(res.command, "create dog types table")
}

createdogTypeTable();