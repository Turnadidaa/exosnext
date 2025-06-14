document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sunriseForm");
  const resultDiv = document.getElementById("result");

  // Pré-remplissage pour Paris et New York
  document.getElementById("lat1").value = "48.864716";
  document.getElementById("lng1").value = "2.349014";
  document.getElementById("lat2").value = "40.730610";
  document.getElementById("lng2").value = "-73.935242";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const lat1 = document.getElementById("lat1").value;
    const lng1 = document.getElementById("lng1").value;
    const lat2 = document.getElementById("lat2").value;
    const lng2 = document.getElementById("lng2").value;

    const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
    const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

    try {
      const [res1, res2] = await Promise.all([
        fetch(url1).then(res => res.json()),
        fetch(url2).then(res => res.json())
      ]);

      const sunrise1 = new Date(res1.results.sunrise).toLocaleTimeString();
      const sunrise2 = new Date(res2.results.sunrise).toLocaleTimeString();

      resultDiv.innerHTML = `
        🌅 Sunrise City 1: ${sunrise1}<br>
        🌄 Sunrise City 2: ${sunrise2}
      `;
    } catch (error) {
      resultDiv.textContent = "An error occurred while fetching data.";
      console.error(error);
    }
  });
});
