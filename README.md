# Mongo_Simple_Database

  Introdução
- Database não relacional com coleções de alunos, professores e disciplinas

  Como Utilizar:

#Instalando a imagem do Mongodb

docker pull mongo

#Vá até o local do arquivo e crie uma imagem

docker build -t <nomedaimagem> .
 
#Crie um container com a imagem acima
  
docker run --name <nomedocontainer> -p 27017:27017 -d <nomedaimagemcriada>


 
 
  
 
