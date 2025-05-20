import express from "express";
const app = express();

import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

app.post("/employees", (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      error: "Invalid request",
      message: "Request must include a non-empty 'name' string"
    });
  }

  app.post("/", (req, res) => {
     const { number } = req.body; 
     const parsedNumber = Number(number); 
     addNumber(parsedNumber);
     res.status(201).send(String(parsedNumber));
   });
  
  employees.push(newEmployee);
  return res.status(201).json(newEmployee);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry, it's not you, it's me :(");
});

export default app;