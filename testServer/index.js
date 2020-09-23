const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let ObjectTypeList = [];

let b = {
  type : "KEK",
  paramNumber : 2,
  InventoryTypeParameters: [{paramName : "Sas"},{paramName: "Ses"}],
  InventoryObjects: []
};

ObjectTypeList.push(b);

app.get('/get_all_tables', (req,res) => {
  res.status(200);
  tableResponse = [];
  for(let i=0; i<ObjectTypeList.length; i++){
    tableResponse.push(ObjectTypeList[i].type);
  }
  res.json(tableResponse);
  //res.json({
    //message: "Ok"
  //});
});

app.post('/add_element', (req,res) => {
  let paramsType = req.body.paramsType;
  console.log(paramsType);
  let NewObjectType = {
    type: req.body.type,
    paramNumber : paramsType.length,
    InventoryTypeParameters : [],
    InventoryObjects : []
  };
  for(let i=0; i<paramsType.length; i++){
    NewObjectType.InventoryTypeParameters.push({paramName : paramsType[i]})
  }
  ObjectTypeList.push(NewObjectType);
  //res.status(201);
});

app.post('/edit', (req,res) => {
  console.log(req.body.type);
  res.status(200);
  res.json({
    body: b
  });
});

app.listen(5000, ()=> {
  console.log("Listening");
});
