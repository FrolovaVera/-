const Client         = require('../models/user_model').Client;
const City         = require('../models/user_model').City;
const Citizenship         = require('../models/user_model').Citizenship;
const FamilyStatus         = require('../models/user_model').FamilyStatus;
const Disability         = require('../models/user_model').Disability;

const ClientDto      = require('../dtos/client');
const FamilyDto      = require('../dtos/family');
const CityDto      = require('../dtos/city');
const CitizenshipDto      = require('../dtos/citizenship');
const DisabilityDto      = require('../dtos/disability');




const bcrypt = require('bcrypt');//для генерации хеша
const uuid   = require('uuid');  //для генерации рандомной строки
const db     = require('../database/query');



class UserService{
    
    async clientList(){
        const clients = await Client.findAll().then(data => {
            return data;
        });

        var list_of_client = new Array(ClientDto);
        for (var i=0; i < clients.length; i++){
            const city = await City.findOne({where:{ c_id: clients[i].o_id_actual_residence}}).then(data => {
                return data.get({ plain: true });
            });
            const family = await FamilyStatus.findOne({where:{ f_id: clients[i].p_family_status}}).then(data => {
                return data.get({ plain: true });
            });
            const citizenship = await Citizenship.findOne({where:{ c_id: clients[i].p_citizenship}}).then(data => {
                return data.get({ plain: true });
            });
            const disability = await Disability.findOne({where:{ d_id: clients[i].o_id_disability}}).then(data => {
                return data.get({ plain: true });
            });




            list_of_client[i] = new ClientDto(clients[i].c_id, clients[i].c_name, clients[i].c_surname, clients[i].c_fathers_name, clients[i].c_date_of_birth,
                clients[i].c_gender, clients[i].c_phone_house, clients[i].c_phone_mob, clients[i].c_email,
                clients[i].p_number_passport, clients[i].p_passport_series, clients[i].p_issued_by, clients[i].p_date_of_issue,
                clients[i].p_ident_number, clients[i].p_place_of_birth, family.f_status, citizenship.c_citizenship,
                city.c_city, clients[i].o_act_resid_address, clients[i].o_place_of_work, clients[i].o_job_position,
                disability.d_status, clients[i].o_pensioner, clients[i].o_monthly_income, clients[i].o_military_service);
                console.log('Clients - ', list_of_client[i])
            }
        console.log('GET ALL')
        console.log('Clients - ', list_of_client)
        return {clients: list_of_client}
        
    }

    async addClient(
        Name, Surname,Fathersname, Dateofbirth,
        Gender,  Phonehouse, Phonemob, Email,
        Passport, Passportseries, Issuedby, Dateofissue,
        Identnumber, Placeofbirth, currFamilystatus, cussCitizenship,
        currCity, ActResidAddress, Placeofwork, Jobposition,
        currDisability, Pensioner, Monthlyincome, Militaryservice){

        let clientId = await Client.max('c_id');
        if(clientId ===null){ clientId = 0}else{clientId = clientId+1}
        console.log("clientId- "+clientId);

        const cityId = await City.findOne({where:{ c_city: currCity}}).then(data => {
            return data.get({ plain: true });
        });
        const familyId = await FamilyStatus.findOne({where:{ f_status: currFamilystatus}}).then(data => {
            return data.get({ plain: true });
        });
        const CitizenshipId = await Citizenship.findOne({where:{ c_citizenship: cussCitizenship}}).then(data => {
            return data.get({ plain: true });
        });
        const DisabilityId = await Disability.findOne({where:{ d_status: currDisability}}).then(data => {
            return data.get({ plain: true });
        });



        const hashPassport =  await bcrypt.hash(Passport,3);
        const hashIdentnumber =  await bcrypt.hash(Identnumber,3);
        const hashPhonehouse =  await bcrypt.hash(Phonehouse,3);
        const hashPhonemob =  await bcrypt.hash(Phonemob,3);

        
        await db.addClient(
            clientId,Name, Surname,Fathersname, Dateofbirth,
            Gender, Phonehouse,  Phonemob, Email, 
            Passport,  Passportseries, Issuedby, Dateofissue,
            Identnumber, Placeofbirth, familyId.f_id, CitizenshipId.c_id,
            cityId.c_id, ActResidAddress, Placeofwork, Jobposition,
            DisabilityId.d_id, Pensioner, Monthlyincome, Militaryservice);

        this.clientList();
    }

    async deleteClient(id){

        console.log('ID = ', id)
        await db.deleteClient(id);
        this.clientList();
    }

    async editClient(id,
        Name, Surname,Fathersname, Dateofbirth,
        Gender,  Phonehouse, Phonemob, Email,
        Passport, Passportseries, Issuedby, Dateofissue,
        Identnumber, Placeofbirth, Familystatus, Citizenship,
        City, ActResidAddress, Placeofwork, Jobposition,
        Disability, Pensioner, Monthlyincome, Militaryservice){
        
        await db.updateClient( id,
            Name, Surname,Fathersname, Dateofbirth,
            Gender, Phonehouse,  Phonemob, Email, 
            Passport,  Passportseries, Issuedby, Dateofissue,
            Identnumber, Placeofbirth, 1, 1,
            1, ActResidAddress, Placeofwork, Jobposition,
            1, Pensioner, Monthlyincome, Militaryservice);

        this.clientList();
    }

    async getLists(){
        const familyList = await FamilyStatus.findAll().then(data => {
            return data;
        });
        var list_of_familyStatus = new Array(FamilyDto);
        for (var i=0; i < familyList.length; i++){
            list_of_familyStatus[i] = new FamilyDto(familyList[i].f_id, familyList[i].f_status)
        }
        console.log('FamilyStatus - ', list_of_familyStatus)


        const CityList = await City.findAll().then(data => {
            return data;
        });
        var list_of_City = new Array(CityDto);
        for (var i=0; i < CityList.length; i++){
            list_of_City[i] = new CityDto(CityList[i].c_id, CityList[i].c_city)
        }
        console.log('City - ', list_of_City)


        const CitizenshipList = await Citizenship.findAll().then(data => {
            return data;
        });
        var list_of_Citizenship = new Array(CitizenshipDto);
        for (var i=0; i < CitizenshipList.length; i++){
            list_of_Citizenship[i] = new CitizenshipDto(CitizenshipList[i].c_id, CitizenshipList[i].c_citizenship)
        }
        console.log('Citizenship - ', list_of_Citizenship)


        const DisabilityList = await Disability.findAll().then(data => {
            return data;
        });
        var list_of_Disability = new Array(DisabilityDto);
        for (var i=0; i < DisabilityList.length; i++){
            list_of_Disability[i] = new DisabilityDto(DisabilityList[i].d_id, DisabilityList[i].d_status)
        }
        console.log('Disability - ', list_of_Disability)


        return {familystatus: list_of_familyStatus, city: list_of_City,
        citizenship: list_of_Citizenship, disability: list_of_Disability}
        
    }

}



module.exports = new UserService();