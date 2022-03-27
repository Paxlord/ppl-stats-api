const app = require('express')();
const cors = require('cors');
const PORT = 5500;

const userRouter = require('./routes/users');
const login = require('./utils/auth');

app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.post('/login', login );

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT + "...");
});