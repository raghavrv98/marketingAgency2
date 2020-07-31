var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');

module.exports = {
    showHome: (req, res, next) => {
        res.render('index', {
        });
    },
}