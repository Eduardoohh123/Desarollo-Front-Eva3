function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateRequiredField(value) {
    return value.trim() !== '';
}

function validatePhoneNumber(phone) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phone));
}

function validateForm(formData) {
    const errors = {};

    if (!validateRequiredField(formData.name)) {
        errors.name = 'El nombre es obligatorio.';
    }

    if (!validateEmail(formData.email)) {
        errors.email = 'El correo electrónico no es válido.';
    }

    if (!validatePhoneNumber(formData.phone)) {
        errors.phone = 'El número de teléfono no es válido.';
    }

    if (!validateRequiredField(formData.product)) {
        errors.product = 'El campo producto es obligatorio.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}

export { validateForm };