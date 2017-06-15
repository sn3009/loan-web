var express=require("express");
var bodyParser=require('body-parser');
var app=express();
var fs = require("fs");
var path = require("path");

app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static("public"));
// app.get("/getdata",function(req,res){
//     res.send("helow ajax");
// })

app.get('/api/sportList',function(req,res){
	fs.readFile('jsonData/sportList.json','utf8',function(err,data){
		var sportList =JSON.parse(data);
    	res.send(sportList);
	})
})
app.get('/api/travelList',function(req,res){
	fs.readFile('jsonData/travelList.json','utf8',function(err,data){
		var travelList = JSON.parse(data);
		res.send(travelList);
	})
})
app.get('/api/travelDetail',function(req,res){
	fs.readFile('jsonData/travelDetail.json','utf8',function(err,data){
		var myTravel = JSON.parse(data);
		res.send(myTravel);
	})
})
app.get('/api/sportDetail',function(req,res){
	fs.readFile('jsonData/sportDetail.json','utf8',function(err,data){
		var myTravel = JSON.parse(data);
		res.send(myTravel);
	})
})
app.get('/users/api/myTravel',function(req,res){
	fs.readFile('jsonData/myTravel.json','utf8',function(err,data){
		var myTravel = JSON.parse(data);
		res.send(myTravel);
	})
})
app.get('/users/api/userLogin',function(req,res){
	fs.readFile('jsonData/userInfo.json','utf8',function(err,data){
		var userInfo = JSON.parse(data);
		res.send(userInfo);
	})
})
app.get('/users/api/getPubTotravelNum',function(req,res){
	fs.readFile('jsonData/getPubTotravelNum.json','utf8',function(err,data){
		var getPubTotravelNum = JSON.parse(data);
		res.send(getPubTotravelNum);
	})
})




app.listen(4001);
console.log("启动");