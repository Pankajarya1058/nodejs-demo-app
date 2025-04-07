import express from 'express';

const router = express.Router();
let users = [];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const user = req.body;
  if (!user.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  users.push(user);
  res.status(201).json(user);
});

router.delete('/', (req, res) => {
  users = [];
  res.status(204).send();
});

export default router;
