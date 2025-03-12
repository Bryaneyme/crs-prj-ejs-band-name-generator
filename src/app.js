import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import generateStupidName from "sillyname";

const app = express();
const PORT = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("GET response in process...");
    res.render('index.ejs');
})

app.post('/submit', (req, res) => {
    console.log("POST response in progress...");
    console.log(generateStupidName())
    res.render('index.ejs', {
        generatedName: generateStupidName()
    });

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})