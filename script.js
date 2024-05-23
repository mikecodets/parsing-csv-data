async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function parseData() {
  const url = "ZonAnn.Ts+dSST.csv";
  const rawData = await fetchData(url);
  const table = rawData.split("\n").slice(1);
  table.forEach((row) => {
    const [year, temp] = row.split(",");
    console.log(year, temp);
  });
}

parseData();
