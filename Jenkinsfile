/* Requires the Docker Pipeline plugin... */

pipeline {
    agent { docker { image 'node:19-alpine3.15' } }
    stages {
        stage('git repo & clean'){
            steps{
                bat 'rmdir -rf merhmood.github.io'
                bat 'git clone https://github.com/merhmood/merhmood.github.io.git'
            }
        }
        stage('install') {
            steps {
                bat 'npm install'
                bat 'npm audit fix'
            }
        }
        stage('test & test coverage') {
            steps {
                bat 'npm run coverage'
            }
        }
    }
}