pipeline{

    agent any

    stages{
        stage('Clone repository'){
            steps {
                git branch: 'main', url: 'https://github.com/GiulianiTobon/EA3_Tecnologias_Web_2'
            }
        }

        stage('Build Docker image'){
            steps {
                script{
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable:  'MONGO_URI')
                    ]){
                        docker.build('proyecto-monolitica:v1')
                    }
                }
            }
        }

        stage('Deploy docker'){
            steps{
                script{
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable:  'MONGO_URI')
                    ]) {
                        sh 'docker-compose up -d'
                    }
                }      
            }
        }
    }

    post{
        always{
            script{
                emailext(
                    to: "giuiani.1905@hotmail.com",
                    from: "jenkinsPruebas@tw2.iudigital.edu.co",
                    subject: "Estado del proceso:${currentBuild.currentResult} ",
                    body: "Se ha completado el proceso"
                )
            }
            cleanWs()
        }
    }
}