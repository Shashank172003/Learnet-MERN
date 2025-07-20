import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    lectureTitle: {
        type: String,
        required: true,
    },
    videoUrl: { type : String },
    publicId: { type : String },
    isPreviewFree: { type: Boolean },

}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps   


export const Lecture = mongoose.model("Lecture", lectureSchema);