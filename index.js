var Express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var {bookModel}=require("./model/book")
var app=Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://megha:test123@cluster0.crp2x.mongodb.net/bookdb?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});
app.post('/add',async(req,res)=>{
try{
    var data = req.body;
    var bookData = new bookModel(data);
    var result = await bookData.save();
    res.json(result);

}
catch(error)
{
    res.status(500).send(error)

}
})
app.get("/viewall",async(req,res)=>{
    try{
        var result =await bookModel.find().exec();
        res.json(result);
    }
    catch(error){
        res.status(500).send(error)
    }
})
app.listen(process.env.PORT || 3000,function(){
    console.log('Your node js server is running at http://localhost:3000')
});