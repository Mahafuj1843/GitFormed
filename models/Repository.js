import mongoose from 'mongoose';

const RepositorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    visivility: {
        type: String,
        default: "Public",
        enum: [ "Public", "Private"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    watchers: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    pullRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PullRequest'
    }],
    numberOfWatch: {
        type: Number,
        default: 0
    }
}, { timestamps: true, versionKey: false }
);

export default mongoose.model("Repository", RepositorySchema)