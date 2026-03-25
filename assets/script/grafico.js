// CREAZIONE E COLORAZIONE GRAFICO A TORTA
const xValues = ["True", "False"]
const yValues = [55, 44]
const barColors = ["#b91d47", "#00aba9"]

const ctx = document.getElementById("grafico-a-torta")

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderWidth: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
})
