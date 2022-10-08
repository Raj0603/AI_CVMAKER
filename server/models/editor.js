const mongoose = require("mongoose");

const EditorSchema = new mongoose.Schema(
  {
    titlewo: { type: String, required: true },
    companyname: { type: String },
    certificatelink: { type: String },
    location: { type: String },
    stdate: { type: String },
    endate: { type: String },
    work1: { type: String },
    work2: { type: String },
    work3: { type: String },
    titleproj: { type: String, required: true },
    projover: { type: String },
    dpolink : { type: String },
    githubproj : { type: String },
    proj1: { type: String },
    proj2: { type: String },
    proj3: { type: String },
    proj4: { type: String },
    edtitle:{type:String},
    
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("editor", EditorSchema);