const co2PorDiaSemCarne = 2.5;
const botao = document.getElementById('calcular');
const resultado = document.getElementById('resultadoSimulador');

botao.addEventListener('click', function() {
  const dias = parseInt(document.getElementById('dias').value);

  if (isNaN(dias) || dias < 1 || dias > 7) {
    resultado.innerHTML = `<p style = 'color:white;'> Não foi possível calcular! <br>Por favor, insira um número de 1 a 7.</p>`;
    return;
  }

  let economiaAnual = (dias * co2PorDiaSemCarne) * 52;

  resultado.innerHTML = `<p>Evitando a carne por <strong>${dias}</strong> dias da semana, em um ano você deixará de emitir cerca de:</p>`;
  resultado.innerHTML += `<p style = 'font-size: 1.5rem;'><strong>${economiaAnual.toFixed(0)} kg de CO2</strong>!` 
});
  