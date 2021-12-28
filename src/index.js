const express = require('express');
const cors = require('cors');

const servidor = express();

servidor.use(express.json());
servidor.use(cors())

const TaskRouters = require('./routers/TaskRoute');
const UserRouters = require('./routers/UserRoute');

servidor.use('/task', TaskRouters);
servidor.use('/user', UserRouters)

servidor.listen(3333)