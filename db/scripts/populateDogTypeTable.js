import { query } from "../index.js";
import { dogType } from "../../libs/dogType.js";

async function populatedogTypeTable() {
    for (let i=0; i< dogType.length; i++)  {
        const res = await query(
            `INSERT INTO dogType (dog_name, dog_color, dog_age)
            VALUES ($1, $2, $3);`,
            [dogType[i].dog_name, dogType[i].dog_color, dogType[i].dog_age]
       );
       console.log(`populate with ${dogType[i].dog_name}`);
    
    }
    }
populatedogTypeTable();