async function getData(url) {
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
