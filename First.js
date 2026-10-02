console.log("best is best");
const fs=require('fs');
fs.writeFile('output.txt',"writing in a file",(err)=>{
  if(err) console.log('error ocured');
  else console.log('writing is file done');
})