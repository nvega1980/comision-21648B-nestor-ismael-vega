const { Router } = require('express');
const { getlistNota, FormCreateNewNote, createNote, updateNote, formUpDatepost, deleteNote } = require('../controllers/notas.controllers.js');

const router = Router();


router.get("/", getlistNota);
router.get("/newpost", FormCreateNewNote);
router.get("/updatenot/:id", formUpDatepost);
router.get("/delete/:id", deleteNote);

router.post("/", createNote);
router.post("/updatenota", updateNote);

module.exports = router;