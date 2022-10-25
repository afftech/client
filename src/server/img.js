const express = require('express');// добавляем експрес
const app = express();// создаём объект
const multer = require('multer');//добавляем мультер

app.use(express.static(__dirname + '/public'));//с помощью экспреса делаем папку и ее содержимое публичным

app.get("/", function (request, response) {//созздаём слушателя гет зпроса
    response.sendFile(__dirname + "/index.html");//от index.html
});

const storageConfig = multer.diskStorage({//метод определяющий 
    destination: (req, file, cb) => {
        cb(null, "public/uploads");//место для хранения файла
    },
    filename: (req, file, cb) => {//имя файла
        cb(null, file.originalname);
    }
});

app.use(multer({ storage: storageConfig }).single("filedata"));//указываем експересу место для сохранения приполучение файла
app.post("/upload", function (req, res, next) {//слушатель для пост запроса где получаем req -запрос
    let filedata = req.file;////берём отправленный файл из req и сохраняем
    if (!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.redirect('/') //возращаем страницу в исходное положение
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => console.log('server-ok'))//вешаем слушателя порта