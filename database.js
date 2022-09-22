db = db.getSiblingDB("puccamp");

db.alunos.insert(
{    
     Ra: 22003967 , 
     primeiro_nome: "Gabriel",
     sobrenome: "Yamamoto", sexo: "Masculino", 
     disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Calculo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]
     })

db.alunos.insert(
{
    Ra: 22005252 , 
    primeiro_nome: "Arthur", 
    sobrenome: "Maluf", 
    sexo: "Masculino", 
disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Callo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]
})

db.alunos.insert(
{ 
    Ra: 22005768 , 
    primeiro_nome: "Vinicius", 
    sobrenome: "Galassi", 
    sexo: "Masculino",
    disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Callo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]})

db.alunos.insert(
{ 
    Ra: 22002241 ,
    primeiro_nome: "Joao", 
    sobrenome: "Pamponet", 
    sexo: "Masculino", 
    disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Callo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]
})

db.diciplinas.insert(
{
    Id_Dic: "12902", 
    nome: "PI: Projetos de Desenvolvimento Web",
    Professores: ["Leandro Xastre"], 
    qtd_cred: 4})

db.diciplinas.insert({Id_Dic: "12902P",
     nome: "PI: Projetos de Desenvolvimento Web (Pratica)",
     Professores: ["Leandro Xastre"], qtd_cred: 2})

db.diciplinas.insert({
    Id_Dic: "12902", 
    nome: "Calculo I",
    Professores: ["Valdomiro Santos"], 
    qtd_cred: 4 })

db.diciplinas.insert(
{
    Id_Dic: "12902", 
    nome: "Calculo I (Pratica) ",
    Professores: ["Alexandre Da Silva","Leandro Aguiar"],
    qtd_cred: 2 })
