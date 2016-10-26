'use strict';

window.onload = function() {
    let skillsBtn = document.getElementById('skillsBtn');
    let blogBtn = document.getElementById('blogBtn');
    let workForm = document.getElementById('workForm');



    skillsBtn.addEventListener('click', function() {

        let xhr = new XMLHttpRequest();

        xhr.open('POST', '/admin/about');
        

        let data = {
            frontend: {
                'html': document.getElementById('html').value,
                'css': document.getElementById('css').value,
                'js': document.getElementById('js').value
            },
            backend: {
                'php': document.getElementById('php').value,
                'mysql': document.getElementById('mysql').value,
                'nodejs': document.getElementById('nodejs').value,
                'mongodb': document.getElementById('mongodb').value
            },
            workflow: {
                'git': document.getElementById('git').value,
                'gulp': document.getElementById('gulp').value,
                'bower': document.getElementById('bower').value
            }
        };

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

    });


    // blogBtn.addEventListener('click' funtcion() {


    // })
}
