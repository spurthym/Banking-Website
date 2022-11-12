//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const customer = new mongoose.Schema({
  name:  String,
  firstName: String,
  middleName:   String,
  LastName: String,
  DOB: Date,
  gender:String,
  createdDate:{type:Date,default:Date.now},
  insertedDate:{type:Date,default:Date.now},
  isDeleted:{type:Date,default:Date.now}
}
);

const Loan = mongoose.model('customerCollection', customer);
module.exports = Loan;
