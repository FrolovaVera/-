//data transport object
module.exports = class UserDto{
    id;
    name;
    surname;
    fathers_name;
    date_of_birth;
    Gender;
    Phonehouse; 
    Phonemob; 
    Email;
    Passport;
    Passportseries; 
    Issuedby;
    Dateofissue;
    Identnumber;
    Placeofbirth; 
    Familystatus; 
    Citizenship;
    City;
    ActResidAddress; 
    Placeofwork; 
    Jobposition;
    Disability; 
    Pensioner;
    Monthlyincome;
    Militaryservice;

    constructor(id, name, surname, fathers_name, date_of_birth,
        Gender,  Phonehouse, Phonemob, Email,
        Passport, Passportseries, Issuedby, Dateofissue,
        Identnumber, Placeofbirth, Familystatus, Citizenship,
        City, ActResidAddress, Placeofwork, Jobposition,
        Disability, Pensioner, Monthlyincome, Militaryservice){

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.fathers_name = fathers_name;
        this.date_of_birth = date_of_birth;
        this.Gender = Gender;
        this.Phonehouse = Phonehouse;
        this.Phonemob = Phonemob;
        this.Email = Email;

        this.Passport = Passport;
        this.Passportseries = Passportseries;
        this.Issuedby = Issuedby;
        this.Dateofissue = Dateofissue;
        this.Identnumber = Identnumber;
        this.Placeofbirth = Placeofbirth;
        this.Familystatus = Familystatus;
        this.Citizenship = Citizenship;

        this.City = City;
        this.ActResidAddress = ActResidAddress;
        this.Placeofwork = Placeofwork;
        this.Jobposition = Jobposition;
        this.Disability = Disability;
        this.Pensioner = Pensioner;
        this.Monthlyincome = Monthlyincome;
        this.Militaryservice = Militaryservice;
    }
}