import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';


//Route imports
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';
import SearchRoutes from "./routes/SearchRoutes"
import userRoutes from "./routes/userRoutes"
import teamRoutes from "./routes/teamRoutes"

// Configurations

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Backend!' });
})

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", SearchRoutes);
app.use("/users",userRoutes);
app.use("/teams",teamRoutes)


// Server

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});