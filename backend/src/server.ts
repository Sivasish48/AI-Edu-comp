import express from 'express';
import bodyParser from 'body-parser';   
import cors from 'cors';
import router from './routes/aiExpert';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/aiExpert', router);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});