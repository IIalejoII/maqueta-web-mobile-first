function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
} 

function onSubmitContactForm(event) {
    event.preventDefault();
    var inputName = document.querySelector('.' + this.className + ' .name');
    var inputEmail = document.querySelector('.' + this.className + ' .email');
    var inputSubject = document.querySelector('.' + this.className + ' .subject');
    var inputMessage = document.querySelector('.' + this.className + ' .message');

    var erorrMessage = '';
    var SuccessMessage = '';

    console.log(inputName.value.length)
    // Validar que no este vacio y que el nombre tenga mas de 3 caracteres
    if (inputName.value.length < 3) {
        erorrMessage = 'El nombre no cumple los requisitos, por favor inserte un nombre valido mayor a 3 caracteres.\r\n\r\n';
    }
    else {
        SuccessMessage = 'Nombre: ' + inputName.value + '\r\n\r\n';
    }
    // Validar que no este vacio y que sea un correo
    if(!validateEmail(inputEmail.value)) {
        erorrMessage += 'ingrese correo \r\n\r\n';
    }
    else {
        SuccessMessage += 'Email: ' +inputEmail.value + '\r\n\r\n';
    }
    // Validar que no este vacio y que el asunto sea mayor a 10 caracteres
    if (inputSubject.value.length < 9) {
        erorrMessage += 'El asunto debe contener mas de 9 caracteres\r\n\r\n'
    }
    else {
        SuccessMessage += 'Asunto valido\r\n\r\n'
    }
    // Validar que no este vacio
    if (inputMessage.value.length < 1) {
        erorrMessage += 'Debe contener un mensaje\r\n\r\n'
    }
    else {
        SuccessMessage += 'Mensaje valido\r\n\r\n'
    }

    if (erorrMessage !== '') {
        // Retornar mensaje de error
        return alert(erorrMessage);
    } else {
        // Retornar mensaje de éxito
        return alert(SuccessMessage)
    }

}

var contactForm = document.querySelector('.contactForm');
contactForm.addEventListener('submit', onSubmitContactForm);