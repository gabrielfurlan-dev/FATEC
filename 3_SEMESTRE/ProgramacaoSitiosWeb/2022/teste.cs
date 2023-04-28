
//De inicio, fazer um teste que falhe.
[TestClass]
[TestMethod]
public void deve_retornar_2_se_primeiro_numero_for_1_e_segundo_numero_for_1(){

    var resultado = num1 + num2;

    Assert.AreEquals(resultado, resultadoEsperado);
}





//Apos isso, fazer o mínimo possivel para fazer com que o teste passe.
[TestClass]
[TestMethod]
public void deve_retornar_2_se_primeiro_numero_for_1_e_segundo_numero_for_1(){
    //Arrange
    var num1 = 1;
    var num2 = 1;
    var resultadoEsperado = 2;

    //Act
    var resultado = num1 + num2;

    //Assert
    Assert.AreEquals(resultado, resultadoEsperado);
}




//Refatorar o teste, aprimorar e elimar redundâncias
public int Somar(int num1, int num2){
    return num1 + num2;
}

[TestClass]

[TestMethod]
[DataRow(1, 1)]
public void deve_retornar_2_se_primeiro_numero_for_1_e_segundo_numero_for_1(int num1, int num2){
    //Arrange
    var resultadoEsperado = 2

    //Act
    var resultado = Somar(num1, num2);

    //Assert
    Assert.AreEquals(resultado, resultadoEsperado);
}
