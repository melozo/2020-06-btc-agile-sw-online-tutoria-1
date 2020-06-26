import { _method } from "../../../../../src/es/geekshubs/academy/kata1/geekshubs";
import { name } from "../../../../../src/es/geekshubs/academy/kata1/geekshubs";

describe('Geekhubs Testing', function (){
    
    test('Tittle - cmp string ', function () {
        //Arrange
        var expected = "nombre1";
        //Act
        var result = _method(1);
        //Assert
        expect(result).toBe(expected);
    });
    test('Verificamos nombre mas 1 digito ', function () {
        //Arrange
        var expected = "carmelo1";
        //Act
        var result = name(1);
        //Assert
        expect(result).toBe(expected);
    });

});