// const asundhandler = require("")
const asyncHandler = require("express-async-handler")
const contactModel = require("../model/contactModel")


// Get All Contacts
// Route Get /api/contacts
const getContacts = asyncHandler (async (req, res) => {
const contact =await contactModel.find()

  res.status(200).json(contact);
});

// Get Contact By Id
// Route Get /api/contacts/:id
const getContactById = asyncHandler (async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("COntact not found")
  }
  res.status(200).json({ message: `Welcome to Home ${req.params.id} `, contact });
});
// POST Create Contact
// Route POST /api/contact
const createContact = asyncHandler (async (req, res) => {
    // console.log(req.body)
    try{
      const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are manditory")
    }

    const contact = await contactModel.create({
      name, email, phone
    })
  res.status(201).json({ message: "Create Request POST", contact });
    }
    catch(e){
      res.status(500).send(e)
    }
});

// PUT Update Contact
// Route PUT /api/contacts/:id
const updateContact = asyncHandler (async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }
const updateContact = await contactModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

  res.status(200).json({ message: `Update  Request PUT ${req.params.id} `, updateContact });
});

// Delete Contact
// Route DELETE /api/contacts/:id
const deleteContact = asyncHandler (async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }
  const updateContact = await contactModel.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: `Delete Request DELETE ${req.params.id} ` });
});
module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
