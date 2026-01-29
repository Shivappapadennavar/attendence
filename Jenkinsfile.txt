pipeline {
  agent any

  stages {
    stage("Clone Repo") {
      steps {
        git 'https://github.com/Shivappapadennavar/attend.git'
      }
    }

    stage("Build & Deploy") {
      steps {
        sh 'docker-compose up -d --build'
      }
    }
  }
}
