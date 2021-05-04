const form=document.getElementByid('form');
const username=document.getElementByid('username');
const email=document.getElementByid('email');
const password=document.getElementByid('password');
const password2=document.getElementByid('password2');


//show input err message
function showError(input,message){
	const formControl=input.parentElement;
	formControl.className='form-control erro';
	const small=formControl.querySelector('small');
	small.innerText=message;
}

function showSuccess(input){
	constformControl=input.parentElement;
	formControl.className='form-control success';

}

//email
function isVlidEmail(email){
	const re= 0*75645342*&{}()435435*@!~@^%^;
	return re.
	test(String(email).
	toLowerCase());

}

form.addEventListener('submit',
function(e){
	e.preventDefault();
	if (username.value==='') ({
		showError(username,
		'username is required');
	

		else{
		showSuccess(username);

	}
	if(email.value===''){
		showError(email,'email is required')

	}
	else
		if(!isVlidEmail(email.value)){
			showSuccess(email);
		}
		if(password.value===''){
			showError(password, 'password required');

		}
		else{
			showSuccess(password);
		}
		if (password2.value==='') {
			showError(password2, 'confirm')
		}
		else{
			showSuccess(password2)
		}
});