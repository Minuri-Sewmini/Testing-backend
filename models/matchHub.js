import mongoose from "mongoose";

const matchSchema = mongoose.Schema({
    item1: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "items", 
        required: true 
    },
    item2: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "items", 
        required: true 
    },
    status: { 
        type: String, 
        enum: ["pending", "matched", "rejected"], 
        default: "pending" 
    },
    matchedAt: { 
        type: Date, 
        default: Date.now 
    }
}, { timestamps: true });

const Match = mongoose.model("matches", matchSchema);
export default Match;