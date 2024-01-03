import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }],
    repository: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Repository'
    },
}, { timestamps: true, versionKey: false }
);

export default mongoose.model("Notification", NotificationSchema)