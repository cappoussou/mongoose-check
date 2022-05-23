const express = require('express');

const {getcontact, createcontact, updatecontact, deletecontact,getcontactbyid} = require("../controllers/contact");
const ContactRouter = express.Router();


//route to get all contacts
ContactRouter.get('/', getcontact);
   

//route to get a single contact
ContactRouter.get ('/:id', getcontactbyid);


//route to create a new contact
ContactRouter.post ('/', createcontact);


//route to update a contact
ContactRouter.put ('/:id', updatecontact);

//route to delete a contact
ContactRouter.delete ('/:id', deletecontact);

module.exports = ContactRouter;

