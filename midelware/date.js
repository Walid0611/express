const date=(req,res,next)=>{
let date = new Date();
let h =date.getHours()

if( !(h >= 9 &&  h <= 17)    ){
res.send('you are not welcome ')
}
next()
}

module.exports=date