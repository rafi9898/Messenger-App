pipeline {
 agent any
        stages {
                stage("build") {
                        steps {
																												echo 'Downloading the dependencies...'
                            sh 'npm install'    
                        }
                }     
									
																stage("test") {
																															steps {
																																echo 'Testing the application...'
																															}
																							}  
									
																stage("deploy") {
																															steps {
																																echo 'Deploying the application...'
																															}	
																							}  
        }
}
