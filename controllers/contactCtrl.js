// Get All Contacts
// Route Get /api/contacts
const getContacts = (req, res) => {
  res.status(200).json({ message: "Welcome to Home" });
};

// Get Contact By Id
// Route Get /api/contacts/:id
const getContactById = (req, res) => {
  res.status(200).json({ message: `Welcome to Home ${req.params.id} ` });
};
// POST Create Contact
// Route POST /api/contact
const createContact = (req, res) => {
    console.log(req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are manditory")
    }
  res.status(200).json({ message: "Create Request POST" });
};

// PUT Update Contact
// Route PUT /api/contacts/:id
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update  Request PUT ${req.params.id} ` });
};

// Delete Contact
// Route DELETE /api/contacts/:id
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Request DELETE ${req.params.id} ` });
};
module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
