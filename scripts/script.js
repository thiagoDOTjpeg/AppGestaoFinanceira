import { Chart } from "chart.js/dist";

const pieChart = document.getElementById("pie-chart");

new Chart(pieChart, {
  type: "pie",
  data: {
    labels: [
      "Nubank",
      "Faculdade",
      "Computador",
      "Internet",
      "Guardar",
      "Internet Celular",
    ],
    datasets: [
      {
        label: "",
        data: [469.85, 243.67, 417.0, 129.9, 200.0, 39.9],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(200, 99, 100)",
          "rgb(20, 99, 255)",
          "rgb(40, 35, 200)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});
