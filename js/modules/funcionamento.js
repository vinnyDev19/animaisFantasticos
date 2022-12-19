export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  console.log(diasSemana);
  const horasAberto = funcionamento.dataset.horario.split(",").map(Number);
  console.log(horasAberto);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horasAberto[0] && horarioAgora < horasAberto[1];
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("ativo");
  }
}
