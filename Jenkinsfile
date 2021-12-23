pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo 'Downloading the dependencies...'
            }
        }

        stage("test") {
            when {
                espression {
                    BRANCH_NAME == 'develop'
                }
            }
            steps {
                echo 'Testing the application...'
            }
        }

        stage("deploy") {
            steps {
                echo 'Deploying the application...'
            }
        }

        post {
            always {
               echo 'Build has been finished' 
            }
        }

    }
}
