import Note from '../models/noteModel.js';

// Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newNote = await Note.create({ title, content, createdBy: req.user.userId });
    res.status(201).json(newNote);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export const getNote = async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user.userId });
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


export const updateNote = async (req, res) => {
  try {
    console.log("Request params:", req.params);
    console.log("Request body:", req.body);
    console.log("User ID from token:", req.user.userId);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No update data provided" });
    }

    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!note) {
      console.error("Note not found");
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, createdBy: req.user.userId });

    if (!note) {
      console.error("Note not found");
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
