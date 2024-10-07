import { Router } from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";


const router = Router();

router.post('/api/v1/contactme', createContact);

router.get('/api/v1/contactme', getAllContacts);


export default router;