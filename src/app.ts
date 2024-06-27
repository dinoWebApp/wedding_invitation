import express from 'express';
import cors from 'cors';
import path from 'path';
import invitationRouter from './routes/invitationRoutes';
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/invitation', invitationRouter);

app.listen(port, () =>{
  console.log(`Server is running at http://localhost:${port}`);
});
