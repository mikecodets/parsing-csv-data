async function getData() {
  try {
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    if (!response.ok) {
      throw new Error("Falha ao buscar dados");
    }
    return response.text();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
}

function parseData(data) {
  const lines = data.split("\n").slice(1);
  const years = [];
  const temps = [];
  lines.forEach((line) => {
    const [year, temperature] = line.split(",");
    years.push(year);
    temps.push(14 + parseFloat(temperature));
  });
  return { years, temps };
}

function renderChart(ctx, globalTemps) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: globalTemps.years,
      datasets: [
        {
          label: "Temperature in °C",
          data: globalTemps.temps,
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
}

async function setup() {
  const ctx = document.getElementById("myChart").getContext("2d");
  const data = await getData();
  const globalTemps = parseData(data);
  renderChart(ctx, globalTemps);
}

window.addEventListener("load", setup);
