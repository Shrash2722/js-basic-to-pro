const account_number = '122334'
let account_email = 'abc@yopmail.com'
var account_password = 'pass'
account_city = "pune"
let account_state;

/*account_number = '222';
console.log(account_number);
TypeError: Assignment to constant variable.
*/

account_email = 'xyz@gmail.com'
account_password = 'new_pass'
account_city = "Sangli"

console.table([account_number,account_email,account_password,account_city,account_state])
