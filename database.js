db = db.getSiblingDB("puccamp");

///Coleção de alunos

db.alunos.insert(
{    
     ra: 22003967 , 
     primeiro_nome: "Gabriel",
     sobrenome: "Yamamoto", sexo: "Masculino", 
     disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Calculo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]
     })

db.alunos.insert(
{
    ra: 22005252 , 
    primeiro_nome: "Arthur", 
    sobrenome: "Maluf", 
    sexo: "Masculino", 
disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Callo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]
})

db.alunos.insert(
{ 
    ra: 22005768 , 
    primeiro_nome: "Vinicius", 
    sobrenome: "Galassi", 
    sexo: "Masculino",
    disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Callo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]})

db.alunos.insert(
{ 
    ra: 22002241 ,
    primeiro_nome: "Joao", 
    sobrenome: "Pamponet", 
    sexo: "Masculino", 
    disciplinas: ["Calculo I", "PI: Projetos de Desenvolvimento Web","Organização de Sistemas de Computação","Teologia e Fenomeno Humano", "Robotica Computacional", "Robotica Computacional (Pratica)","Organização de Sistemas de Computação (Pratica)","Callo I (Pratica)", "PI: Projetos de Desenvolvimento Web (Pratica)"]
})

///Coleção de Disciplinas

db.diciplinas.insert(
{
    id_Dic: "12902", 
    nome: "PI: Projetos de Desenvolvimento Web",
    professores: ["Leandro Xastre"], 
    qtd_cred: 4})

db.diciplinas.insert({
    id_Dic: "12902P",
    nome: "PI: Projetos de Desenvolvimento Web (Pratica)",
    professores: ["Leandro Xastre"],
    qtd_cred: 2})

db.diciplinas.insert({
    id_Dic: "12902", 
    nome: "Calculo I",
    professores: ["Valdomiro Santos"], 
    qtd_cred: 4 })

db.diciplinas.insert(
{
    id_Dic: "12902", 
    nome: "Calculo I (Pratica) ",
    professores: ["Alexandre Da Silva","Leandro Aguiar"],
    qtd_cred: 2 })

db.diciplinas.insert(
{
    id_Dic: "12901", 
    nome: "Robotica Computacional ",
    professores: ["Dimas Lemes","Vinicius Simionatto"],
    qtd_cred: 4 })

db.diciplinas.insert(
{
    id_Dic: "12901P", 
    nome: "Robotica Computacional (Pratica) ",
    professores: ["Sergio Marques","Vinicius Simionatto"],
    qtd_cred: 2 })

db.diciplinas.insert(
{
    id_Dic: "12901P", 
    nome: "Organizacao de Sistemas de Computacao ",
    professores: ["Ricardo Pannain"],
    qtd_cred: 4 })

db.diciplinas.insert(
{
    id_Dic: "12903P", 
    nome: "Organizacao de Sistemas de Computacao (Pratica)",
    professores: ["Ricardo Pannain"],
    qtd_cred: 2 })

db.diciplinas.insert(
{
    id_Dic: "11135", 
    nome: "Teologia e Fenomeno Humano",
    professores: ["Danilo Rodrigues"],
    qtd_cred: 2 })


//Coleção de Professores

db.professores.insert(
{
    rp: "1",
    nome: "Ricardo Pannain",
    disciplinas: ["Organizacao de Sistemas de Computacao", "Organizaco de Sistemas de Computacao (Pratica)"]

})

db.professores.insert(
{
    rp:"2",
    nome: "Leandro Xastre",
    disciplinas: ["PI: Desenvolvimentos de Sistemas Web","PI: Desenvolvimentos de Sistemas Web (Pratica)"]
})

db.professores.insert(
{
    rp:"3",
    nome: "Valdomiro Santos",
    disciplinas: ["Calculo I"]
})

db.professores.insert(
{
    rp:"4",
    nome: "Alexandre Monteiro",
    disciplinas: ["Calculo I (Pratica"]
})

db.professores.insert(
{
    rp:"5",
    nome: "Leandro Aguiar",
    disciplinas: ["Calculo I (Pratica)"]
})

db.professores.insert(
{
    rp:"6",
    nome: "Dimas Lemes",
    disciplinas: ["Robotica Computacional"]
})

db.professores.insert(
{
    rp: "7",
    nome: "Vinicius Simionatto",
    disciplinas: ["Robotica Computacional","Robotica Computacional (Pratica)"]
})

db.professores.insert(
{
    rp: "8",
    nome: "Sergio Marques",
    disciplinas: ["Robotica Computacional (Pratica)"]
})

db.professores.insert(
{
    rp:"9",
    nome: "Danilo Rodrigues",
    disciplinas: ["Teologia e fenomeno humano"]
})
    
