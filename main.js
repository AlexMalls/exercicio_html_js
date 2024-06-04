const form = document.getElementById("form_number");

function validaNumero(numeroA, numeroB){
    return numeroA < numeroB
}

const numeroA = document.getElementById('numero_a');
const numeroB = document.getElementById('numero_b');
numeroA.value = ""
numeroB.value = ""


form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();

    const msgSucesso = `CORRETO <b>${numeroB.value}</b> é maior que <b>${numeroA.value}</b>, Parabens!`;
    const msgErrado = `ERRADO! ${numeroA.value} é maior ou igual a ${numeroB.value}`

    formValido = validaNumero(numeroA.value, numeroB.value);
    if (numeroA.value != ""){    
        if (numeroB.value != ""){
            if (formValido) {
                const containerMsgSucesso = document.querySelector('.success_msg');
                containerMsgSucesso.innerHTML = msgSucesso;
                containerMsgSucesso.style.display = 'block';
                numeroA.value = ""
                numeroB.value = ""
            } else {
                document.querySelector('.success_msg').style.display = 'none';
                alert(msgErrado)
            }
        } else {
            document.getElementById('numero_b').classList.add('error')
            document.querySelector('.error_msg_b').style.display = 'block';
            document.querySelector('.success_msg').style.display = 'none';
        }
    } else {
        document.getElementById('numero_a').classList.add('error')
        document.querySelector('.error_msg_a').style.display = 'block';
        document.querySelector('.success_msg').style.display = 'none';
    }
})

numeroA.addEventListener("keyup", function(e) {
    if (e.target.value != ""){
        document.getElementById('numero_a').classList.remove('error');
        document.querySelector('.error_msg_a').style.display = 'none';
    }
})
numeroB.addEventListener("keyup", function(e) {
    if (e.target.value != ""){
        document.getElementById('numero_b').classList.remove('error');
        document.querySelector('.error_msg_b').style.display = 'none';
    }
})

console.log(form);