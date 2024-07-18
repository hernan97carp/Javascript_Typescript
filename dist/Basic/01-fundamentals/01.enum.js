"use strict";
// Es muy importante saber que distintos enumerados no pueden ser comparados ya que el
// nombre de los enumerados no es el mismo, aunque puedan tener el mismo índice numérico.
// FOO
var FooIdBrand;
(function (FooIdBrand) {
})(FooIdBrand || (FooIdBrand = {}));
// BAR
var BarIdBrand;
(function (BarIdBrand) {
})(BarIdBrand || (BarIdBrand = {}));
/**
* Demo
*/
let fooId;
let barId;
// Por seguridad
//fooId = barId; // error
//barId = fooId; // error
// Newing up
fooId = 'foo';
barId = 'bar';
// Los dos tipos son compatibles con la base
// que en este caso es string
var str;
str = fooId;
str = barId;
