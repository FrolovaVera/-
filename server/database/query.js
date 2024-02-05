const sql = require('mssql');

var config = {
    user: 'superuser',
    password: 'password',
    server: 'localhost', 
    database: 'bank_bd',
    stream: true,
    port:1433,
    trustServerCertificate: true,
};
module.exports = {
  //ADD
  addClient: async function(id, Name, Surname,Fathersname, Dateofbirth,
    Gender,  Phonehouse, Phonemob, Email,
    Passport, Passportseries, Issuedby, Dateofissue,
    Identnumber, Placeofbirth, Familystatus, Citizenship,
    City, ActResidAddress, Placeofwork, Jobposition,
    Disability, Pensioner, Monthlyincome, Militaryservice){

        let result = await sql.connect(config).then(async function (err){
          let result = await sql.query`
          
            INSERT INTO [Client] ([c_id],[c_name],[c_surname],[c_fathers_name],[c_date_of_birth], [c_gender],[c_phone_house],[c_phone_mob],[c_email],
            [p_number_passport],[p_passport_series],[p_issued_by],[p_date_of_issue],[p_ident_number],[p_place_of_birth],[p_family_status],[p_citizenship],
            [o_id_actual_residence],[o_act_resid_address],[o_place_of_work],[o_job_position],[o_id_disability],[o_pensioner],[o_monthly_income],[o_military_service])
          
            OUTPUT INSERTED.c_id VALUES (${id}, ${Name}, ${Surname},${Fathersname},${Dateofbirth},${Gender},${Phonehouse},${Phonemob},${Email},
            ${Passport},${Passportseries},${Issuedby},${Dateofissue},${Identnumber},${Placeofbirth},${Familystatus},${Citizenship},
            ${City},${ActResidAddress}, ${Placeofwork},${Jobposition}, ${Disability},${Pensioner}, ${Monthlyincome},${Militaryservice});`;
         
            return result.recordset;
        });
        return (result)
  },

 
  //UPDATE
  updateClient: async function(id, Name, Surname,Fathersname, Dateofbirth,
    Gender,  Phonehouse, Phonemob, Email,
    Passport, Passportseries, Issuedby, Dateofissue,
    Identnumber, Placeofbirth, Familystatus, Citizenship,
    City, ActResidAddress, Placeofwork, Jobposition,
    Disability, Pensioner, Monthlyincome, Militaryservice) {

    let result = await sql.connect(config).then(async function (err){
      let result = await sql.query`UPDATE [Client] SET 
      [c_name] = ${Name}, [c_surname] = ${Surname}, [c_fathers_name] = ${Fathersname}, [c_date_of_birth] = ${Dateofbirth},
      [c_gender] = ${Gender},[c_phone_house] = ${Phonehouse},[c_phone_mob] = ${Phonemob},[c_email] = ${Email},
      [p_number_passport] = ${Passport},[p_passport_series] = ${Passportseries},[p_issued_by] = ${Issuedby},[p_date_of_issue] = ${Dateofissue},
      [p_ident_number] = ${Identnumber},[p_place_of_birth] = ${Placeofbirth},[p_family_status] = ${Familystatus},[p_citizenship] =${Citizenship},
      [o_id_actual_residence] = ${City},[o_act_resid_address] = ${ActResidAddress},[o_place_of_work] = ${Placeofwork},[o_job_position] = ${Jobposition},
      [o_id_disability] = ${Disability},[o_pensioner] = ${Pensioner},[o_monthly_income] = ${Monthlyincome},[o_military_service] = ${Militaryservice}
      
      WHERE [c_id] = ${id}`
      console.log(result);
      return result.recordset
    });
    console.log(result);
    return result
  },

  

  //DELETE
  deleteClient: async function(id){
    let result = await sql.connect(config).then(async function (err){
      let result = await sql.query`DELETE FROM [Client] WHERE [c_id] = ${id}`
      console.log(result);
      return result
    });
    return result
  },

  
      
}


