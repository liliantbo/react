/* EJERCICIO 1 
Dado un listado de estudiantes con su nombre y sus notas, 
obtener la nota promedio de cada estudiante y 
retorna un listado de los estudiantes que 
hayan obtenido un promedio mayor a 90.
*/

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ];
  
  function getStudentsByAvg(students, avg){
    let studentsMap = students.map((student) => {
      let suma = student.scores.reduce((acumulador, valorActual) => acumulador + valorActual);
      let promedio = suma / student.scores.length;
      return { name: student.name, average: promedio };
    })
    .filter((student) => student.average > avg);

    return studentsMap;
  }
  console.log("Ejercicio 1");
  console.log(getStudentsByAvg(students, 90));
  
  
  /* EJERCICIO 2 
  Dado un listado de libros cada uno con su categoría, precio y nombre, 
  obtener el precio promedio y el precio máximo por cada categoría. 
  El resultado deberá ser un arreglo de objetos, 
  cada objeto representa a una categoría con su precio promedio y precio más alto.
  */
  const books = [
    { name: "Física 1", price: 20, category: "Física" },
    { name: "Cálculo 1", price: 30, category: "Cálculo" },
    { name: "Física 2", price: 40, category: "Física" },
    { name: "Cálculo 2", price: 50, category: "Cálculo" },
    { name: "Cálculo 3", price: 60, category: "Cálculo" },
    { name: "Física 3", price: 70, category: "Física" },
    { name: "Cálculo 4", price: 80, category: "Cálculo" },
    { name: "Física 4", price: 90, category: "Física" },
  ];
  
  function getCategoriesWhitAvgAndMaxPrice(books){
    
    let categorias = new Map();
    let precios = new Array();
    for (let book of books){
      if(categorias.has(book.category)){
         precios=categorias.get(book.category);
         precios.push(book.price);
        categorias.set(book.category, precios);
      }else {
        categorias.set(book.category, [book.price]);
      }
    }
    
    let categoriasCalculos=new Array();
    categorias.forEach((value, key)=>{
      let promedio = value.reduce((acumulador, valorActual) => acumulador + valorActual, 0) / value.length;
      let maximo =  Math.max(...value);
      let categoriaCalculos= {};
      categoriaCalculos.category=key;
      categoriaCalculos.averagePrice=promedio;
      categoriaCalculos.highestPrice=maximo;
      categoriasCalculos.push(categoriaCalculos);
    })
    return (categoriasCalculos);
  
  }
  console.log("Ejercicio 2")
  console.log(getCategoriesWhitAvgAndMaxPrice(books));  
