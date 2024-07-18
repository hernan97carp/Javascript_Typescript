

// Es muy importante saber que distintos enumerados no pueden ser comparados ya que el
// nombre de los enumerados no es el mismo, aunque puedan tener el mismo índice numérico.

// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;
/**
* Demo
*/
let fooId: FooId;
let barId: BarId;
// Por seguridad
//fooId = barId; // error
//barId = fooId; // error
// Newing up
fooId = 'foo' as FooId;
barId = 'bar' as BarId;
// Los dos tipos son compatibles con la base
// que en este caso es string
var str: string;
str = fooId;
str = barId;