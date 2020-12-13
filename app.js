const form = document.querySelector('form');
const email = document.querySelector('input');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', function (e) {
	// submitBtn.preventDefault();
	console.log('click');
	e.preventDefault();
	console.log(email.value);
	//email is right
	if (
		email.value.includes('@', '.') &&
		email.value.includes('.') &&
		email.value.length > 5
	) {
		email.value = '';
		$('.error').remove();
		$('.error-message').remove();
		document.querySelector('form').style.border = 'solid 1px hsl(0, 36%, 70%)';
	} else {
		//email is wrong
		console.log('not okay');
		//Check if alert sign is already there
		if (!$('.error').length) {
			console.log('oui');
			$('button').before('<img src="./images/icon-error.svg" class="error">');
			$('form').after('<p class="error-message">Please provide a valid email</p>');
			document.querySelector('form').style.border = '2px solid hsl(0, 93%, 68%)';
		}
	}
});
