import { createConnection } from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ds85497156",
  database: "dbTesteSQL",
});

connection.connect((erro) => {
  if (erro) {
    console.log("Erro: ", erro);
  } else {
    console.log("Deu certo!");
  }
});

connection.end((erro) => {});

function createChart() {
  const pieChart = document.getElementById("pie-chart");
  const buttonCreate = document.getElementById("btnCreateGraph");

  const data = {
    labels: [
      "Nubank",
      "Faculdade",
      "Computador",
      "Internet",
      "Guardar",
      "Internet Celular",
    ],
    color: "#0000000",
    datasets: [
      {
        label: "R$",
        data: [469.85, 243.67, 417.0, 129.9, 200.0, 39.9],
        backgroundColor: [
          "rgb(134,21,211)",
          "rgb(255,223,30)",
          "rgb(0, 0, 0)",
          "rgb(146,149,199)",
          "rgb(20, 99, 255)",
          "rgb(32,215,111)",
        ],
        hoverOffset: 50,
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#000000",
            weight: "bold",
          },
          title: {
            padding: 300,
          },
          position: "right",
          align: "end",
        },
      },
      elements: {
        arc: {
          borderColor: "#AARRGGBB",
          borderWidth: 0.5,
        },
      },
      layout: {
        padding: 25,
      },
    },
  };

  new Chart(pieChart, config);
  buttonCreate.remove();
}
