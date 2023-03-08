function btnGerador(tamanho) {
    let caracteres = '';
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[+]-';

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteresPermitidos.length);
        caracteres += caracteresPermitidos[indice];
      }

      return caracteres;
}

const botao = document.getElementById('btnGerador');
botao.addEventListener('click', function() {
    const senha_gerada = btnGerador(10);
    const input = document.getElementById('textoGerado');
    input.value = senha_gerada;
});

function btnCopiar() {
    var input = document.getElementById("textoGerado");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Senha copiada: " + input.value);
  }


