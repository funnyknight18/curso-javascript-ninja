(function(){

    /*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
// feito()
/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/

function Person(name,lastname,age){
    this.Person = name; 
    this.lastname = lastname; 
    this.age = age; 
    this.getFullName = function getFullName(){
        return ` O nome da pessoa é ${this.name} ${this.lastname} !`
    }; 
    this.getAge = function getAge(){
        return age; 
    }; 
    this.addAge = function addAge(){
        this.age += arguments[0] 
        return this;   
    }
 }


/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
console.log( 'Novas pessoas criadas à partir de Person:' );
// ?
var fernando = new Person('fernando', 'daciuk' , 30 ); 
var joao = new Person('joao', 'felipe', 25 ); 
var maria = new Person('maria','eduarda', 28 ); 
console.log( joao ); 
console.log(maria); 
console.log(fernando); 

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );

console.log( fernando.getFullName()); 
console.log(joao.getFullName()); 
console.log(maria.getFullName()); 

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log( ` ${fernando.getFullName()} tem ${ fernando.age()} anos. `); 
console.log( ` ${joao.getFullName()} tem ${ joao.age()} anos. `); 
console.log(`${ maria.getFullName()} tem ${maria.age()} anos.`); 
/*
/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );

onsole.log( `${fernando.getFullName()} agota tem ${ fernando.addAge(2).getAge()} anos.`)
console.log( `${joao.getFullName()} agota tem ${ joao.addAge(4).getAge()} anos.`)
console.log( `${maria.getFullName()} agota tem ${ maria.addAge(-2).getAge()} anos.`)


})(); 
