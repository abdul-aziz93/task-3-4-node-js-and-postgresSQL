import express from 'express';
import dogType from '../libs/dogType.js';
const dogTypeRoute = express.Router();

dogTypeRoute.get('/', function (req, res){
    const dogTypeObject = {
    success: Boolean, 
    payload: dogType
};

res.json(dogtypeObject);
})


dogTypeRoute.get("/:id", function(req, res) {
    const dogTypeID = req.params.id;
    let searchResult = [];

     for(var i = 0; i < dogType.length; i++){
            if(dogTypeID == dogType[i].id){
                searchResult = dogType[i];
                break;
            }
        }

                              
            const dogTypeIdObject = {
            success: true,
            payload: searchResult,
        }

        res.json(dogTypeIdObject);  
    })

    dogTypeRoute.post("/",function (req, res) {         
   
        const body = req.body;
                                
        superLeague.push(body);
        const responseUpdated = {
            success: true,
            data: dogType,
        };

        res.json(responseUpdated);
    });

    dogTypeRoute.put("/:id", function (req, res){      
        
        const body = req.body;                          
        const dogTypeID = req.params.id;                
        
        for(var i = 0; i < dogType.length; i++){        
            if(dogTypeID == dogType[i].id){             
                dogType[i] = body;                          
            }
        }

        const replacedogtype = {
            success: true,
            payload: body,
        }

        res.json(replacedogtype);

    })

    dogTypeRoute.delete('/:id', function (req, res) {
        const body = req.body;
        dogType.pop(body);

        const responseUpdated = {
            success: true,
            payload: dogType,
        };
        res.json(responseUpdated)
    });

export default dogTypeRoute;