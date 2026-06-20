//include Express
const express = require('express');
const path = require('path');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//ejs is templating engine
app.set('view engine','ejs');

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

//index/home URL
app.get('/',(req,res)=>{
    let title = "Home Page";
    res.render('pages/index',{'title': title});
});

//about URL
app.get('/about',(req,res)=>{
    let title = "About Page";
    res.render('pages/about',{'title': title});
});

//gallery
app.get('/gallery',(req,res)=>{
    let title = "Gallery Page";
    res.render('pages/gallery',{'title': title});
});

//pcss
app.get('/pcss',(req,res)=>{
    let title = "PCSS Page";
    res.render('pages/pcss',{'title': title});
});

//pbr
app.get('/pbr',(req,res)=>{
    let title = "PBR Page";
    res.render('pages/pbr',{'title': title});
});

//rendering system
app.get('/render',(req,res)=>{
    let title = "Renderer Page";
    res.render('pages/render',{'title': title});
});

//Set server to listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});