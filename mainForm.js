const FormTestHabito = document.getElementById("TestHabito");
const Resultado = document.getElementById("Resultado");

FormTestHabito.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let formData = new FormData(FormTestHabito);
  const dormir = formData.get("Dormir");
  const estudo = formData.get("Estudo");
  const atividade = formData.get("atividade");
  const celularDormir = formData.get("celularDormir");
  
  console.log(dormir, estudo, atividade, celularDormir);

  let ListaBronca = "";
  let nBronca = 0;

  if (dormir == 'nao') {
    nBronca++;
    ListaBronca += 'Precisa dormir mais! ';
  }
  
  if (estudo == 'nao') {
    nBronca++;
    ListaBronca += 'Não adianta estudar muito, sem descansar! ';
  }
  
  if (atividade == 'nao') {
    nBronca++;
    ListaBronca += 'Precisa andar um pouco, ir do sofá à cozinha não vale kk! ';
  }
  
  // Alterado para 'sim', pois usar o celular antes de dormir é o hábito que gera a bronca
  if (celularDormir == 'sim') {
    nBronca++;
    ListaBronca += 'Tire 30 minutos da tela do telefone antes de dormir, faz bem, sabia! ';
  }

  console.log(nBronca);
  
  if (nBronca > 0) {
    console.log(Resultado);
    Resultado.textContent = `Caro(a) amigo(a), precisamos conversar! Eu vou te dar ${nBronca} bronca(s): ${ListaBronca} Foi isso!`;
  } else {
    Resultado.textContent = `Parabéns! Seus hábitos de bem-estar estão ótimos! Continue assim!!`;
  }
});