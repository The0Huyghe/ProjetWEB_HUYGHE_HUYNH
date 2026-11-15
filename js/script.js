function radioclick (b) 
{
	document.getElementById('option_info_errone').style.display = (b!=1? 'none':'block');
	document.getElementById('option_oubli').style.display = (b!=2? 'none':'block');
}

function clearRadio(values) {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (values.includes(radio.value)) {
            radio.checked = false;
        }
    });
}

function envoyerFormulaire() {
    document.getElementById("message").textContent =
        "Formulaire envoyé !";
}

function clearFormulaire() {
    document.getElementById("Formulaire").reset();
}