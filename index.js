const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const users = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },
];
function checkUser(username, password) {
  const user = users.find((user) => user.username === username);
  return user && user.password === password;
}
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (checkUser(username, password)) {
    res.status(200).json({ success: true, message: 'Login success!' });
  } else {
    res.status(401).json({ success: false, message: 'User or password incorrect.' });
  }
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});