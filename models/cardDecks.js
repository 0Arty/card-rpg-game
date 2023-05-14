import mongoose from "mongoose";

const CardDeckShema = new mongoose.Schema({

    currentBoardId: Number || null,
    currentItemId: Number || null,
    decksIds: Array,
    stats: Array,
    cards: Array,
    cardIndex: Number,
    id : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }

},
    {
        timestamps: true
    },
)



export default mongoose.model('CardDeck', CardDeckShema)