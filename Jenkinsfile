pipeline {
  agent {
    docker {
      image 'node:9-alpine'
      args '-p 3000:3000\''
    }

  }
  stages {
    stage('Clone Repo') {
      steps {
        sh 'npm install'
      }
    }
  }
}