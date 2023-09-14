const { PostModel } = require('../models/foro.js')

const getlistNota = async (req, res)=> {
   const allNotes = await PostModel.findAll();

    res.render("index", { allNotes });
  };

const FormCreateNewNote = async (req, res)=> {
    res.render("new_post");

  };

const formUpDatepost = async (req, res)=> {
  const noteId = req.params.id;

  const note = await PostModel.findByPk(noteId);

  if (!note) {
    return res.redirect("/foro");
  }

  res.render("updatenota", { note });
};

  const createNote = async (req, res) => {
    const { autor, contenido, image } = req.body;
  
    await PostModel.create({ autor, contenido, image });
      
    res.redirect("/foro");
  };
  
  const updateNote = async (req, res) => {
    const { id, autor, contenido, image } = req.body;
  
    const note = await PostModel.findByPk(id);
  
    await note.update({ autor, contenido, image });
    
  
    res.redirect("/foro");
  };
  
  const deleteNote = async (req, res)=>{
    const noteId = req.params.id;

    const note = await PostModel.findByPk(noteId);

    await note.destroy();
  
    res.redirect("/foro");
  };
  


  module.exports = { getlistNota, FormCreateNewNote, createNote, formUpDatepost, updateNote, deleteNote,  }
