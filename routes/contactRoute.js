const express = require("express");
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactCtrl");
const router = express.Router();

// Merge Two Routes in Single Line Like This
router.route("/").get(getContacts).post(createContact);

// router.route("/").post(createContact);

router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

module.exports = router;
