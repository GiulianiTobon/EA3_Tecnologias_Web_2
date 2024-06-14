pipeline{

    agent {
        docker {
            image 'docker:20.10.7' // Usamos una imagen Docker que incluye Docker CLI
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Montamos el socket Docker
        }
    }

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
                        docker.build('proyecto-monolitico:v1', "--build-arg MONGO_URI=${MONGO_URI} .")
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