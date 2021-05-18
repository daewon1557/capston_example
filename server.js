const express = require("express");
const app = express();

app.use(express.static(__dirname + "/css"))
app.use(express.static(__dirname + "/js"))
app.use(express.static(__dirname + "/img"))

const server = app.listen(80,()=>{
    console.log('start Server : localhost:80');
});


app.set('views', __dirname + '/views');
// app.set('views', __dirname + '/css');
// app.set('views', __dirname + '/img');
// app.set('views', __dirname + '/js');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
    res.render('index.html')
})

app.get('/babo',function(req,res){
    res.render('ss.html')
})

app.get('/dex',function(req,res){
    res.render('index2.html')
})

app.get('/bar',function(req,res){
    res.render('barKo.html')
})

app.get('/En',function(req,res){
    res.render('barEn.html')
})

app.get('/se',function(req,res){
    res.render('search.html')
})

app.get('/Jap',function(req,res){
    res.render('barJap.html')
})

app.get('/Chn',function(req,res){
    res.render('barChn.html')
})

app.get('/nav',function(req,res){
    res.render('pr_navSearch.html')
})

app.get('/par',function(req,res){
    res.render('pr_parent.html')
})

app.get('/chd',function(req,res){
    res.render('pr_child.html')
})

app.get('/prse',function(req,res){
    res.render('pr_search.html')
})

app.get('/prdd',function(req,res){
    res.render('pr_dd.html')
})

app.get('/yours',function(req,res){
    res.render('yourLo.html')
})

app.get('/languages',function(req,res){
    res.render('language.html')
})

app.get('/searbar',function(req,res){
    res.render('pr_searchbar.html')
})