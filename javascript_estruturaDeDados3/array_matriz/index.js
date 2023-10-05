// Criando a matriz bidimensional para armazenar informações sobre animais
// Sempre na ordem de primeiro vem a coluna depois a linha
let animalData = [
    ["Gato", "Felino", 3],
    ["Abelha", "Inséto", 8],
    ["Baleia", "Mamífero", 85],
    ["Águia", "Ave", 12]
];

// Acessando informações sobre animais na matriz
console.log("Nome:", animalData[0][0]); // Saída: Nome: Gato
console.log("Espécie:", animalData[0][1]); // Saída: Espécie: Felino
console.log("Idade:", animalData[0][2]); // Saída: Idade: 3

console.log("Nome:", animalData[2][0]); // Saída: Nome: Baleia
console.log("Espécie:", animalData[2][1]); // Saída: Espécie: Mamífero
console.log("Idade:", animalData[2][2]); // Saída: Idade: 85

console.log("Nome:", animalData[1][0]); //Sáida: Nome: Abelha
console.log("Espécie:", animalData[1][1]); //Sáida: espécie: Inséto
console.log("Idade", animalData[1][2]); //Sáida: Idade: 8

console.log("Nome", animalData[3][0]) //Sáida: Nome: Águia
console.log("Espécie", animalData[3][1]) //Sáida: espécie: Ave 
console.log("Idade", animalData[3][2]) //Sáida: Idade: 12