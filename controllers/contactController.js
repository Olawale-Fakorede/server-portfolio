import contactModel from "../Models/contactModels.js";

export const createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new contactModel({ name, email, phone, message });
        await newContact.save();
        return res.status(200).json({message: "Submit successful", user: newContact});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const newContact = await contactModel.find();

        if (!newContact) {
            return res.status(404).json({ message: "No messages found" });
        }
        return res.status(200).json(newContact);
    } 
    catch (error) {
       return res.status(500).json({ message: error.message });
    }
};

