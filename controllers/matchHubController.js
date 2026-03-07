import Match from "../models/matchHub.js";
import Item from "../models/item.js";

export const findAndCreateMatch = async (req, res) => {
    try {
        const { item1Id, item2Id } = req.body;

        // 1. Items දෙක Database එකෙන් හොයාගන්න
        const item1 = await Item.findById(item1Id);
        const item2 = await Item.findById(item2Id);

        if (!item1 || !item2) {
            return res.status(404).json({ message: "One or both items not found!" });
        }

        // 2. සරල Matching Algorithm එක
        let matchScore = 0;

        // Category එක සමාන නම් ලකුණු 50ක් දෙමු
        if (item1.category === item2.category) {
            matchScore += 50;
        }

        // නම් වල වචන ගැලපෙනවාද බලමු (Keyword Match)
        const name1Words = item1.itemName.toLowerCase().split(" ");
        const name2Words = item2.itemName.toLowerCase().split(" ");
        const commonWords = name1Words.filter(word => name2Words.includes(word));

        if (commonWords.length > 0) {
            matchScore += 30;
        }

        // 3. Match එකක්ද නැද්ද කියලා තීරණය කිරීම (Score > 40 නම් Match එකක්)
        if (matchScore >= 50) {
            const newMatch = new Match({
                item1: item1Id,
                item2: item2Id,
                status: "matched"
            });
            await newMatch.save();
            return res.status(201).json({ message: "It's a Match! 🔥", score: matchScore, match: newMatch });
        } else {
            return res.status(200).json({ message: "Items don't match well enough.", score: matchScore });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};