const app = require('express')();
const cors = require('cors');
const PORT = 5500;

const userRouter = require('./routes/users');

app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT + "...");
});