const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lectionSchema = new Schema({
  lectionTopic: { type: String, required: true },
  lecturers: [{
    lecturerName: { type: String, required: true },
    lecturerAge: { type: Number, required: true },
  }],
  studentsGroup: [{
    groupName: { type: String, required: true },
    studentsNumber: { type: Number, required: true },
    students: [{
      studentName: { type: String, required: true },
      studentAge: { type: Number, required: true },
    }],
  }],
  classNo: { type: Number, required: true },
  lectionStart: { type: Date, required: true },
  lectionEnd: { type: Date, required: true },
}, { timestamps: true });

const Lection = mongoose.model('Lection', lectionSchema);

module.exports = Lection;
