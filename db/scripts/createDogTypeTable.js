import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS dogTable 
(dog_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, dog_name TEXT, dog_color TEXT, Dog_age TEXT,);`;

async function createdogTypeTable() {
    const res = await query(sqlString);
    console.log(res.command, "create dog type table")
}

createdogTypeTable();