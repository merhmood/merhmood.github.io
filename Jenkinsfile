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
            stage('Report') {
      steps {
        clover(cloverReportDir: './merhmood.github.io/coverage', cloverReportFileName: 'clover.xml',
          // optional, default is: method=70, conditional=80, statement=80
          healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
          // optional, default is none
          unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
          // optional, default is none
          failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
        )
      }
    }
    }
}