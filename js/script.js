/* I need to calculate the final price of a train ticket by:

Info that i know is €0.21 for each km

Input:
    - age (we need to apply discounts if younger than 18 (20%) or older than 65(40%))
    - the distance in km to run 
So the math formula is: 
    - fx = ( const-0.21 * let-input_km_to_run ) - let_discount( let_input-age )
Than i need:
const-0.21
let_input-km-to-run
input_age
    - let-discount_young (20%)
    - let-discount_senior (40%)

needed variables:
    - km_to_run (int number)
    - age (int number)
    - const_0.21 (for the price of 1km)
    - discount (settled 0 at the beginning, to change due to the age)

actions
    - Get with let input prompt the needed info as km-to-run and age
    - make sure that input are number type int numbers
    - set const_0.21 with the price of single km
    - set the discount with 0 and change it 
    if: the age input is less than 18 is young
        we change discount value with 20%
    else if: the age input is a more tha 65 is senior
        we change discount value with 40%
    else there is no discount, i can avoid this line because no changes
    
    - then we make the istructions for follow the formula (fx) mentioned before

    - at the end log console the output with 2 digit decimal number
    */

// start with getting variables info
let age = parseInt(prompt('Inserisci la tua età:'));
let distance = parseInt(prompt('Inserisci i KM da percorrere:'));
let discount = 1; 
let final_price;
// set constat values
const unit_price = 0.21 ;
// set discount depending by the age of the customer
// less than 18 20%
if (age < 18) {
    discount = 0.8;
// 65 or more 40%
} else if (age >= 65) {
    discount = 0.6;
}
// fx for calculating the final price
final_price = unit_price * distance * discount
console.log('€' + final_price);
