
const axios = require('axios');
var statuscode = undefined;
var sendReq =  () =>{
axios.post('http://localhost:3060/confirmOrder',{"number" : "+9779619595576"})
.then(res => {
  console.log(`statusCode: ${res.status}`)
  console.log(res.status)
  statuscode = res.status;
})
.catch(error => {
  console.log(error)
  statuscode = undefined;
})
return statuscode;

}
exports.sendReq = sendReq;