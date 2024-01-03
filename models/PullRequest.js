import mongoose from 'mongoose';

const PullRequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comment:{
        type: String,
    },
    repository: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Repository'
    },
}, { timestamps: true, versionKey: false }
);

export default mongoose.model("PullRequest", PullRequestSchema)