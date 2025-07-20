import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["instructor", "student"],
        default: 'student'
    },
    enrolledCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    photoUrl: {
        type: String,
        default: ""
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);


//  demostrate express server 
// install mongodb compass on your system and perform a mongodb command to create a database and collection and insert min of 5 document on it 
// demonstrate two middleware in node js
