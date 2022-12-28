require('dotenv').config();
const app = require('./src/app.js');

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Server start at http://localhost:${PORT}`);
})