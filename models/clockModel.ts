import mongoose from "mongoose";

const clockSchema = new mongoose.Schema({
    // schema: 2.0,
    username: {
        type: String,
        required: true,
    },
    checkInTime: {
        type: Date,
    },
    checkInImage: {
        type: String,
    },
    checkOutTime: {
        type: Date,
    },
    checkOutImage: {
        type: String,
    },
},
    { timestamps: true });

const Clock = mongoose.model("Clock", clockSchema);

export default Clock;
