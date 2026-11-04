document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-btn");
  const input = document.getElementById("query");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const query = input.value.trim();
    const url = "superheroes.php?query=" + encodeURIComponent(query);

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Request failed");
        return response.text();
      })
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        result.innerHTML = "<p class='not-found'>Something went wrong.</p>";
        console.error(error);
      });
  });
});
