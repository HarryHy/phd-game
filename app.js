const express = require('express');

let port = 9000;
let app = express();
    app.use(express.static('./static'));
    app.listen(port, () => {
    console.log(`Server started on port ${port}.\nPlease navigate to http://localhost:${port} in your browser.`)
});
