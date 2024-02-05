module.exports = class UserDto{
    id;
    citizenship;
    
    constructor(id, citizenship){
        this.id = id;
        this.citizenship = citizenship;  
    }
}