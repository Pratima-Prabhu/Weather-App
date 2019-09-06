var express=require("express");
var app=express();

var request=require("request");
app.set("view engine","ejs");


app.get("/",function(req,res){
	res.render("search");
});

app.get("/results",function(req,res){
	var query=req.query.search;
	request("http://api.openweathermap.org/data/2.5/weather?q="+query+"&APPID=e78a4797c84ac9b9d99901987acf824b",function(error,response,body){
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render("results",{data:data});
		}
		
	});
	
	
});



app.listen(8081,()=>{
	console.log("Server Started");
});
