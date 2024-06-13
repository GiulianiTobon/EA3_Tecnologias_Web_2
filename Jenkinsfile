Stages{
    stage('Build'){
        steps {
            echo 'Etapa Build no disponible' 
        }
    }

    stage('Test'){
        steps {
                    echo 'Etapa Test no disponible' 
                }
    }

    stage('Deploy'){
        steps{
            sh 'docker-compose down'
            sh 'docker-compose up -d --build'
        }
    }
}