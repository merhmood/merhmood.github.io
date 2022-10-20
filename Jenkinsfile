/* Requires the Docker Pipeline plugin... */

pipeline {
    agent { docker { image 'node:19-alpine3.15' } }
    stages {
        stage('git repo & clean'){
            steps{
                sh 'rmdir -rf merhmood.github.io'
                sh 'git clone https://github.com/merhmood/merhmood.github.io.git'
            }
        }
        stage('install') {
            steps {
                sh 'npm install'
                sh 'npm audit fix'
            }
        }
        stage('test & test coverage') {
            steps {
                sh 'npm run coverage'
            }
        }
    }
}