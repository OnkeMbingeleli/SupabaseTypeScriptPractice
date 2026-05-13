import { registerBackenderDb } from '../models/backenderDb.js';
export const registerBackenderCon = async (req, res) => {
    try {
        const { name, surname, years_of_experience, preference } = req.body;
        if (!name || !surname || !years_of_experience || !preference) {
            return res.status(400).json({ success: false, error: 'All fields are required' });
        }
        const result = await registerBackenderDb(name, surname, years_of_experience, preference);
        if (!result.success) {
            return res.status(400).json(result);
        }
        return res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
//# sourceMappingURL=backenderController.js.map