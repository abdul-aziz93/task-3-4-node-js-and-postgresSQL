import { query } from "../index.js";
import { superLeague } from "../../libs/dogType.js";

async function populatedogTypeTable() {
    for (let i=0; i< DogType.length; i++)  {
        const res = await query(
            `INSERT INTO dogType (dog_name, dog_color, dog_age)
            VALUES ($1, $2, $3);`,
            [superLeague[i].dog_name, DogType[i].dog_color, DogType[i].dog_age]
       );
       console.log(`populate with ${superLeague[i].team_name}`);
    
    }
    }
populatedogTypeTable();