// Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

function imprimirTriangulo(name) {
  // IMPLEMENTE
}

let outputData = "";
const storeLog = inputs => (outputData += inputs + "\n");
describe("Criando um Triângulo com Loop", function () {
  console["log"] = jest.fn(storeLog);
  it ("imprime o triângulo", function () {
    imprimirTriangulo()
    expect(outputData).toEqual("#\n##\n###\n####\n#####\n######\n#######\n")
  });
})
