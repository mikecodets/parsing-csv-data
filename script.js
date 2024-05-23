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
