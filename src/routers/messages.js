import { Router } from "express";
import { MessageContr } from "../controllers/messages.js";
import managerCheck from '../middlewares/manager.js'
import workerCheck from '../middlewares/worker.js'
import multer from 'multer'




const router = Router();

const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename : function (req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage : storage })


router.post('/', upload.single('file'), MessageContr.AddMessage)
router.put('/:id',  upload.single('file'), MessageContr.EditMessage)
router.delete('/:id', MessageContr.Delete)



export default router;