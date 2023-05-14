import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
    },

    diamonds: Number,
    emeralds: Number,
    souls: Number,
    cardDeck: {
        currentBoardId: Number || null,
        currentItemId: Number || null,
        decksIds: Array,
        stats: Array,
        cards: Array,
        cardIndex: Number,
    }

},
    {
        timestamps: true
    },
)



export default mongoose.model('User', UserShema)