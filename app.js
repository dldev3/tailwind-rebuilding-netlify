const express = require('express');
const app = express();
const PORT = 8080 || process.env.PORT; 

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Server is running @ ${PORT}`);
});