const mysql=require('mysql');

let connection=mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"movies"
})
connection.connect((error)=>{
if(error){
    console.log(error)
}else{
    console.log("Connected")
}
})

module.exports=connection;
