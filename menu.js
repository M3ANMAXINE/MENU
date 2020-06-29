


do {

    var menu;

    menu = parseInt(prompt(" Menú de Opciones: \n\n- 1. Números entre 1 y 100. \n- 2. ¿De que color es el caballo Blanco de Napoleón?. \n- 3. Calcular promedio de Notas.  \n- 4. Ingrese 3 frutas.  \n- 5. Contar Letras y Vocales. \n- 6. Salir. \n Favor elegir opcion: "));


switch( menu ){

                case 1: 

                var numero = prompt("Ingrese un número, entre 1 y 100") 

                while (numero < 1 || numero > 100) {
                  numero = Number(prompt("Elige un número entre 1 y 100"));
                }
                
                var i = 0; 
                while (i <= numero) {
                  console.log(i);
                  i++;
                }


                break;

                case 2: 
                        
                        var ask = "";
                        while (ask !== "blanco") {
                        ask = prompt("¿De que color es el caballo Blanco de Napoleón?");}      
                                                                                    
                        console.log(`El color del caballo de Napoleón es ${ask}`)
                        
                        break;
                       

                case 3: 
                       
                let nombre = prompt("Ingrese su Nombre");

                let n1 = prompt("Ingrese nota de Matemáticas")
                let n2 = prompt("Ingrese nota de Fisica")
                let n3 = prompt("Ingrese nota de Ciencias")
                
                var p = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)) / 3;

                p = Math.round(p)

                console.log(`Estimado ${nombre} Su promerio es ${p}`)

                break;


                case 4: 

                    let f1 = prompt("Ingrese el nombre de la primera fruta");
                    let f2 = prompt("Ingrese el nombre de la segunda fruta");
                    let f3 = prompt("Ingrese el nombre de la tercera fruta");
                       
                        var fruta = [f1, f2, f3];
                    
                    console.log(fruta.filter(fruta => fruta != "manzana") );
                        break;


                case 5: 

                let name = prompt("Escriba su Nombre");

                    let vowels = name.match(/[aeiou]/gi).length;
                    let consonants = name.match(/([B-D]|[F-H]|[J-N]|[P-T]|[V-Z])/gi).length;
                    let cuenta = `Su Nombre contiene ${vowels} vocales y  ${consonants} consonantes`;

                    alert(cuenta);
                    
                    break;



                case 6: 
                        alert("GRACIAS");
                        break;

                    
}

 }

 while( menu <= 5 || menu > 6 );





