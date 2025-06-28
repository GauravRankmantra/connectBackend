module.exports.healthCheck=async(req,res)=>{
    try {
        res.status(200).json({message:"Server is running"});
    } catch (error) {
        res.status(500).json({message:"Server is not running"});
    }
}