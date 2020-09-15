const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let ObjectTypeList = [];

let a = {
  type : "Lol",
  paramNumber : 0,
  InventoryTypeParameters: [],
  InventoryObjects: []
};

let b = {
  type : "KEK",
  paramNumber : 2,
  InventoryTypeParameters: [{paramName : "Sas"},{paramName: "Ses"}],
  InventoryObjects: []
};

ObjectTypeList.push(a);

app.get('/get_all_tables', (req,res) => {
  res.status(200);
  res.json({
    body: ObjectTypeList
  });
  //res.json({
    //message: "Ok"
  //});
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
