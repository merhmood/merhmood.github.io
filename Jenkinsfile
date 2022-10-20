/* Requires the Docker Pipeline plugin... */

pipeline {
    agent any
    stages {
        stage('git repo & clean'){
            steps{
                bat 'rmdir /s /q merhmood.github.io'
                bat 'git clone https://github.com/merhmood/merhmood.github.io.git'
            }
        }
        stage('install') {
            steps {
                bat 'npm install'
            }
        }
        stage('test & test coverage') {
            steps {
                bat 'npm run coverage'
            }
        }
    }
}