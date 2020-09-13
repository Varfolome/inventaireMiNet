const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let ObjectTypeList = [];

let a = {
  type : "Lol",
  paramNumber: "Bab",
  InventoryTypeParameters: [{paramName : "Kek"}, {paramName : "Bug"}],
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

app.listen(5000, ()=> {
  console.log("Listening");
});
