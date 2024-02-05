module.exports = class UserDto{
    id;
    status;
    
    constructor(id, status){
        this.id = id;
        this.status = status;  
    }
}