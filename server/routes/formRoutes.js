//formRoutes.js

const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Route to create a new form
router.post('/', async (req, res) => {
  try {
    const { title, elements } = req.body;
    const form = new Form({ title, elements });
    await form.save();
    res.json(form);
  } catch (err) {
    console.error('Error creating form:', err);
    res.status(500).json({ error: 'Could not create form' });
  }
});

// Route to fetch all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch forms' });
  }
});

module.exports = router;
