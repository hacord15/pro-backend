const asyncHandler = (requestHandler)=> {
    (req,res,next)=>{
        Promise.resolve(requestHandler).catch((err)=>next(err))
    }
}








export {asyncHandler}




/*
we made the wrapper function

const asyncHandler = (fn)=> async (req, res,next) => 
    {
        try{
            await fn(req,res,next)
        } catch(error){
            res.status(error.code || 500).json({
                success: false,
                message: err.message
            })
        }


    }



        */