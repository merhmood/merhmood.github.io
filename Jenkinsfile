/* Requires the Docker Pipeline plugin... */

pipeline {
    agent any
    stages {
        stage('git repo'){
            steps{
                bat 'rmdir /s /q merhmood.github.io'
                bat 'git clone https://github.com/merhmood/merhmood.github.io.git'
            }
        }
        stage('install') {
            steps {
                bat 'cd merhmood.github.io && npm install'
            }
        }
        stage('test & test coverage & clean') {
            steps {
                bat 'cd merhmood.github.io && npm run coverage'
            }
        }
    }
}