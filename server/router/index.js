const express        = require('express');
const userController = require('../controllers/user-controller');
const router         = express.Router();
const {body}         = require('express-validator');


/*
router.post('/registration',
body('email').isEmail(),
body('password').isLength({min:4, max:20}),
userController.registration);*/

router.get('/clientList', userController.clientList);
router.get('/getLists', userController.getLists);
router.post('/addClient', userController.addClient);
router.post('/deleteClient', userController.deleteClient);
router.post('/editClient', userController.editClient);
/*
router.post('/logout', userController.logout);
router.post('/addGroup', userController.addGroup);
router.post('/addRecord', userController.addRecord);
router.post('/getRecord', userController.getRecord);
router.post('/deleteGroup', userController.deleteGroup);
router.post('/updateGroup', userController.updateGroup);
router.post('/deleteRecord', userController.deleteRecord);
router.post('/updateRecord', userController.updateRecord);
router.post('/getComment', userController.getComment);
router.post('/addComment', userController.addComment);
router.post('/deleteComment', userController.deleteComment);
router.post('/addGroupForUser', userController.addGroupForUser);
router.post('/deleteGroupforUser', userController.deleteGroupforUser);

router.get('/getAllGroup', userController.getAllGroup);
router.get('/getAllType', userController.getAllType);
router.get('/image/:link', userController.activate);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
*/


module.exports = router;