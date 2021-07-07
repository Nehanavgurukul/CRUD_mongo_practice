
module.exports = (mongoose,Mycollection) => {
    //create api for get data
    Mycollection.get("/Mycollection",(req,res)=>{
        const getfun = async () => {
            //select documents
            const data = await Mycollection.insert({"name" : "neha","email" : "nehayadav@12gmial.com","password":"neha@1234"})
            .then(() => {
                console.log("inserted ....")
            })
            .catch((err) => {
                console.log(err)
            })
        }
        getfun()
    })
}
