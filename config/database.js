/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
const dbName="tadarok";
mongoose.connect('mongodb://localhost/'+dbName);

exports.mongoose=mongoose;

