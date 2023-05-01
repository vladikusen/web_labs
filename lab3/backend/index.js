const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dataBase = require("./dataBase");
const table = dataBase.table;
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  console.log("get");
  sendTable().then((responce) => {
    res.send(responce);
  });
});

app.post("/set", (req, res) => {
  console.log("post");
  //   console.log(req.body);
  pushIntoTable(req.body);
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`server has been started on port ${PORT}...`);
});

function sendTable() {
  return table.findAll().then((res) => {
    let itemsArray = { items: [] };
    res.forEach((element) => {
      itemsArray.items.push(element.dataValues);
    });
    return itemsArray;
  });
}

function pushIntoTable(req) {
  console.log(req.curentUser.contacts);
  clearTable().then(
    req.curentUser.contacts.forEach((item) => {
      table.create({
        name: item.name,
        tel: item.tel,
        place: item.place,
      });
    })
  );
}
function clearTable() {
  return table.destroy({
    where: {},
    truncate: true,
  });
}
