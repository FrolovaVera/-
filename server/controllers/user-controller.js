const userService        = require('../services/user-service');
const {validationResult} = require('express-validator');
//const ApiError           = require('../exceptions/api-error');
//const { ConnectionAcquireTimeoutError } = require('sequelize');

class UserController{
    
    async clientList(req,res,next){
      try{
        console.log("Get all clients");
        const clientData = await userService.clientList();
        return res.json(clientData);

      }catch(e){
        next(e);//вызывая next мы попадаем в middleware
      }
    }

    async addClient(req,res,next){
      try{
        console.log("Add client");
        const {Name, Surname,Fathersname, Dateofbirth,
          Gender,  Phonehouse, Phonemob, Email,
          Passport, Passportseries, Issuedby, Dateofissue,
          Identnumber, Placeofbirth, Familystatus, Citizenship,
          City, ActResidAddress, Placeofwork, Jobposition,
          Disability, Pensioner, Monthlyincome, Militaryservice} = req.body;

        const clientData = await userService.addClient(
          Name, Surname,Fathersname, Dateofbirth,
          Gender,  Phonehouse, Phonemob, Email,
          Passport, Passportseries, Issuedby, Dateofissue,
          Identnumber, Placeofbirth, Familystatus, Citizenship,
          City, ActResidAddress, Placeofwork, Jobposition,
          Disability, Pensioner, Monthlyincome, Militaryservice);
        return res.json(clientData);

      }catch(e){
        next(e);//вызывая next мы попадаем в middleware
      }
    }

    async deleteClient(req,res,next){
      try{
        console.log("Delete client");
        const {id} = req.body;
        const clientData = await userService.deleteClient(id);
        return res.json(clientData);

      }catch(e){
        next(e);//вызывая next мы попадаем в middleware
      }
    }

    async editClient(req,res,next){
      try{
        console.log("Edit client");
        const {id, Name, Surname,Fathersname, Dateofbirth,
          Gender,  Phonehouse, Phonemob, Email,
          Passport, Passportseries, Issuedby, Dateofissue,
          Identnumber, Placeofbirth, Familystatus, Citizenship,
          City, ActResidAddress, Placeofwork, Jobposition,
          Disability, Pensioner, Monthlyincome, Militaryservice} = req.body;

        const clientData = await userService.editClient(id,
          Name, Surname,Fathersname, Dateofbirth,
          Gender,  Phonehouse, Phonemob, Email,
          Passport, Passportseries, Issuedby, Dateofissue,
          Identnumber, Placeofbirth, Familystatus, Citizenship,
          City, ActResidAddress, Placeofwork, Jobposition,
          Disability, Pensioner, Monthlyincome, Militaryservice);
        return res.json(clientData);

      }catch(e){
        next(e);//вызывая next мы попадаем в middleware
      }
    }


    async getLists(req,res,next){
      try{
        console.log("Get Lists");
        const clientData = await userService.getLists();
        return res.json(clientData);

      }catch(e){
        next(e);//вызывая next мы попадаем в middleware
      }
    }
    
    
}

module.exports = new UserController;