import Match from "../models/matchHub.js";
import Item from "../models/item.js";

// 1. Find and Create Match with Population
export const findAndCreateMatch = async (req, res) => {
    try {
        const { item1Id, item2Id } = req.body;

        const item1 = await Item.findById(item1Id);
        const item2 = await Item.findById(item2Id);

        if (!item1 || !item2) {
            return res.status(404).json({ message: "One or both items not found!" });
        }

        let matchScore = 0;

        if (item1.category === item2.category) {
            matchScore += 50;
        }

        const name1Words = item1.itemName.toLowerCase().split(" ");
        const name2Words = item2.itemName.toLowerCase().split(" ");
        const commonWords = name1Words.filter(word => name2Words.includes(word));

        if (commonWords.length > 0) {
            matchScore += 30;
        }

        if (matchScore >= 50) {
            const newMatch = new Match({
                item1: item1Id,
                item2: item2Id,
                status: "matched"
            });

            await newMatch.save();

            // Populate කරලා සම්පූර්ණ විස්තර ලබාගැනීම
            const populatedMatch = await Match.findById(newMatch._id)
                .populate("item1")
                .populate("item2");

            return res.status(201).json({ 
                message: "It's a Match! 🔥", 
                score: matchScore, 
                match: populatedMatch 
            });
        } else {
            return res.status(200).json({ message: "Items don't match well enough.", score: matchScore });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Get All Matches (Match History)
export const getAllMatches = async (req, res) => {
    try {
        const matches = await Match.find()
            .populate("item1")
            .populate("item2")
            .sort({ createdAt: -1 });
            
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};