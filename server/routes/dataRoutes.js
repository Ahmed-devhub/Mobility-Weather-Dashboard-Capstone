import express from 'express'

const router = express.Router()

router.get('/test',(req,res)=>{
    return res.json({message: "Backend working"})
})

export default router;
