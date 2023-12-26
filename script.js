function handleGetFormData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let zipCode = document.getElementById('zip-code').value;
    let status = document.getElementById('status').checked;       

    return {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status,
    };
}

const isNumber = (input) => {
    if (isNaN(input)) {
        return false
    } else {
        return true
    }
};

function checkboxIsChecked(){
    const statusCheckbox = document.getElementById("status");
    return statusCheckbox.checked;
}

function validateFormData(formData) {
    if(formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()) {
        return true;
    } else {
        return false;
    }
}

const submit = () => {
    if (!validateFormData(handleGetFormData())) {
        return document.getElementById('warning').innerText = 'Periksa form anda sekali lagi'
    } else {
        return document.getElementById('warning').innerText = ''
    }
}