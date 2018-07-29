/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var validate = require('jsonschema').validate;
var Ajv = require('ajv');
var ajv = new Ajv({allErrors: true});

var project = require('../model/Project.js').model;
var projectValidator = require('../model/Project.js').validator;

class ProjectController
{
    index(req, res) {
        let data = {
            message: "list"
        };

        return data;
    }

    show(req, res) {
        let data = {
            message: "show"
        };
        return res.json(data);
    }

    create(req, res, next) {
        //console.log(req.body);
        var validator = ajv.validate(projectValidator.create, req.body);
        if (!validator)
        {
            console.log(ajv.errors);
            next(ajv.errors);
        }
        //console.log(validiator, ajv.errors);

        //console.log(validator);
        let projectObj = new project(req.body);
        projectObj.save();

        let data = {
            data: projectObj,
            message: "create"
        };
        return res.json(data);
    }

    update(req, res) {
        return {
            message: "update"
        };
    }

    destroy(req, res) {
        return {
            message: "Destroy"
        };
    }
}

module.exports = new ProjectController();