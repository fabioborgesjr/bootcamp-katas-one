// Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

function imprimirTriangulo() {
  var tr = [""];

  for (var i = 0; i < 7; i++) {
    tr.push("#");
    console.log(tr.join(''));
  } 

}

// TESTES

describe("Criando um Triângulo com Loop", function () {
  let outputData = "";
  const storeLog = inputs => (outputData += inputs + "\n");
  console["log"] = jest.fn(storeLog);

  fit ("imprime o triângulo", function () {
    imprimirTriangulo()
    expect(outputData).toEqual("#\n##\n###\n####\n#####\n######\n#######\n")
  });
})
