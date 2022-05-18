const express = require("express");
const route = express.Router();
const Login = require("../model/schema");

const joi = require("joi");

const validation = (req, res, next) => {
    console.log("req.body<<<<<<<<<", req.body);
    const schema = joi.object({
        name: joi.string().min(3).required(),
        password: joi
          .string()
          .min(3)
          .required()
          .pattern(/^[a-zA-Z0-9]{3,30}$/),
      });
        const result = schema.validate(req.body);
        console.log("result",result);
        if (result.error) {
            res.status(400).send(result.error.details[0].message);
            console.log(result.error.details[0].message);
            
        }
        else{
            next();
        }
    }

route.post("/login", validation, async (req, res) => {
  try {
      console.log("req.body>>>>>>>>>",req.body);
    const { name, password } = req.body;
    const login = new Login({name:name, password:password});
    const creatlogin = await login.save();
    res.status(201).send(creatlogin);
    console.log(creatlogin);
    }
     catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

route.get("/login", async (req, res) => {
    try {
        const login = await Login.find();
        res.status(200).send(login);
        console.log(login);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }   });


module.exports = route;
