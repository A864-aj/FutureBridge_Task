const joi=require("joi")

const schema=joi.object({

    id: joi.string().required(),
    movieName: joi.string().min(1).max(100).required(),
    rating:joi.string().min(1).max(5).required(),
    release_date:joi.date().less('2023-07-02').required()
});

const moviesInfo=(req,res,next)=>{
    const value=schema.validate(req.body)
    if(value.error){
        res.send({error:value.error.details[0]})
    }else{
        next();
    }
}

module.exports=moviesInfo;