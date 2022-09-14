import express from "express";
import dogType from "./libs/dogType.js";
import dogTypeRoute from './routes/dogType.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  //const dogTypeRoute = express.Router();
  
  app.use('/dogType', dogTypeRoute);
  
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
                                  
          dogType.push(body);
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
  
          const replacedogType = {
              success: true,
              payload: body,
          }
  
          res.json(replacedogType);
  
      })
  
      dogTypeRoute.delete('/:id', function (req, res) {
          const body = req.body;
          dogType.pop(body);
  
          const responsedeleted = {
              success: true,
              payload: dogType,
          };
          res.json(responsedeleted)
      });
