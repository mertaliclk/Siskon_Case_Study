const express = require("express");
const api = express.Router();
const fs = require("fs");
const userDataPath = "./data/user.json";
const userDetailsDataPath = "./data/userDetails.json";

const save = (data, path) => {
  const stringifyData = JSON.stringify(data, null, 4);
  fs.writeFileSync(path, stringifyData);
};
const getList = (path) => {
  const jsonData = fs.readFileSync(path);
  return JSON.parse(jsonData);
};

api.post("/user/add", (req, res) => {
  var userList = getList(userDataPath);
  const { name, email, password } = req.body;

  if (userList.find((user) => user.email === email)) {
    res.status(400).send({ success: false, msg: "user already exist" });
    return;
  }

  const id = Math.max(...userList.map((user) => user.id), 0) + 1;
  userList.push({ id, name, email, password });
  save(userList, userDataPath);
  res.send({ success: true, msg: "user added successfully" });
});

api.post("/user/login", (req, res) => {
  console.log("Login Request Body:", req.body); //Log the request attempt #mertalicelik
  var userList = getList(userDataPath);
  const { email, password } = req.body;

  if (
    userList.find((user) => user.email === email && user.password === password)
  ) {
    res.send({ success: true, msg: "Logged in successfully" });
    return;
  }

  res.status(400).send({
    success: false,
    msg: "email or password is incorrect!",
  });
});

api.get("/userDetails/list", (req, res) => {
  const userDetailsList = getList(userDetailsDataPath);
  var userList = getList(userDataPath);
  const userDetailsListExtended = userDetailsList.map((userDetails) => {
    const index = userList.findIndex((user) => userDetails.userId === user.id);
    if (index !== -1) {
      return {
        name: userList[index].name,
        surname: userList[index].surname,
        email: userList[index].email,
        ...userDetails,
      };
    }
  });
  res.send(userDetailsListExtended);
});

api.post("/userDetails/add", (req, res) => {
  // console.log("Request Body:", req.body); // Log the request

  var userList = getList(userDataPath);
  const { userId } = req.body;
  if (!userList.find((user) => user.id === userId)) {
   // console.log("Error: user does not exist"); 
    res.status(400).send({ success: false, msg: "user does not exist" });
    return;
  }

  var userDetailsList = getList(userDetailsDataPath);
  if (userDetailsList.find((userDetails) => userDetails.userId === userId)) {
    // console.log("Error: user details already exist"); 
    res.status(400).send({
      success: false,
      msg: "user details already exist",
    });
    return;
  }

  const id =
    Math.max(...userDetailsList.map((userDetails) => userDetails.id), 0) + 1;
  userDetailsList.push({ ...req.body, id });
  save(userDetailsList, userDetailsDataPath);
  res.send({ success: true, msg: "user details added successfully" });
});

api.put("/userDetails/:userId", (req, res) => {
  var userList = getList(userDataPath);
  const userId = parseInt(req.params["userId"]);
  const user = userList.find((user) => user.id === userId);
  if (!user) {
    res.status(400).send({ success: false, msg: "user does not exist" });
    return;
  }

  var userDetailsList = getList(userDetailsDataPath);
  var userDetails = userDetailsList.find(
    (userDetails) => userDetails.userId === userId
  );
  if (!userDetails) {
    res.status(400).send({
      success: false,
      msg: "user details do not exist",
    });
    return;
  }

  const {
    name,
    surname,
    email,
    mobileNumber,
    married,
    childrenCount,
    jobDetails,
  } = req.body;
  user.name = name;
  user.surname = surname;
  user.email = email;
  userDetails.mobileNumber = mobileNumber;
  userDetails.married = married;
  userDetails.childrenCount = childrenCount;
  userDetails.jobDetails = jobDetails;

  save(userList, userDataPath);
  save(userDetailsList, userDetailsDataPath);
  res.send({ success: true, msg: "updated successfully" });
});

module.exports = api;
