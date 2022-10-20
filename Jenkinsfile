/* Requires the Docker Pipeline plugin... */

pipeline {
    agent any
    stages {
        stage('git repo & clean'){
            steps{
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
        stage('remove clone') {
            steps {
                bat 'rmdir /s /q merhmood.github.io'
            }
        }
    }
}