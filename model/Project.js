/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('../config/database.js').mongoose;
var Schema = mongoose.Schema;


var projectSchema = new Schema({
    title: String,
    author: String,
    body: String,
    date: {type: Date, default: Date.now},
    isActive: Boolean
});

var projectValidator = {
    create: {
        type: "object",
        properties: {
            title: {type: "string"}
        },
        //additionalProperties: false,
        required: ["title"]
    },
    update: {

    }
};

var project = mongoose.model('Project', projectSchema);

exports.model = project;
exports.validator = projectValidator;