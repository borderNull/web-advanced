"use strict";

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TechSchema = new Schema({
        section: {
            type: String
        },
        items: {
            type: [{
                name: {
                   type: String
                },
                value: {
                    type: Number,
                    default: 0
                }
            }]
        }
    });

mongoose.model('tech', TechSchema);

// let Post = mongoose.model('Post', {
//     title: String,
//     date: String,
//     text: String
// });

// let post1 = new Post({
//     title: 'Zildjian',
//     date: '23.10.2016',
//     text: 'making backend'
// });

// let post2 = new Post({
//     title: 'Frametime',
//     date: '24.10.2016',
//     text: 'learn frameworks'
// });