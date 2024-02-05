const Sequelize = require('sequelize');
const db = require('../database/bd');


const Client = db.define('Client',{
    c_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true  
    },
    c_name:{
        type: Sequelize.STRING,
        allowNull: false,      
    },
    c_surname:{
        type: Sequelize.STRING,
        allowNull: false,      
    },
    c_fathers_name: {
        type: Sequelize.STRING,
        defaultValue: false, 
        allowNull: false,     
    },
    c_date_of_birth:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    c_gender:{
        type: Sequelize.STRING,
        allowNull: false,  
    }
    ,
    c_phone_house:{
        type: Sequelize.STRING,
        allowNull: false,  
    }
    ,
    c_phone_mob:{
        type: Sequelize.STRING,
        allowNull: false,  
    }
    ,
    c_email:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_number_passport:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_passport_series:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_issued_by:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_date_of_issue:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_ident_number:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_place_of_birth:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_family_status:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    p_citizenship:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_id_actual_residence:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_act_resid_address:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_place_of_work:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_job_position:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_id_disability:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_pensioner:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_monthly_income:{
        type: Sequelize.STRING,
        allowNull: false,  
    },
    o_military_service:{
        type: Sequelize.STRING,
        allowNull: false,  
    }
},
{
    timestamps: false,
    
    freezeTableName: true
    
}
);

const City = db.define('City',{
    c_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true  
    },
    c_city:{
        type: Sequelize.STRING,
        allowNull: false,      
    },
},
{
    timestamps: false,
    
    freezeTableName: true
    
}
);

const FamilyStatus = db.define('FamilyStatus',{
    f_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true  
    },
    f_status:{
        type: Sequelize.STRING,
        allowNull: false,      
    },
},
{
    timestamps: false,
    
    freezeTableName: true
    
}
);

const Citizenship = db.define('Citizenship',{
    c_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true  
    },
    c_citizenship:{
        type: Sequelize.STRING,
        allowNull: false,      
    },
},
{
    timestamps: false,
    
    freezeTableName: true
    
}
);

const Disability = db.define('Disability',{
    d_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true  
    },
    d_status:{
        type: Sequelize.STRING,
        allowNull: false,      
    },
},
{
    timestamps: false,
    freezeTableName: true
    
}
);


module.exports = {Client, City, FamilyStatus, Citizenship, Disability};