async function encurtar() {
  const url = document.getElementById("urlInput").value;
  const response = await fetch("https://url-shortener-ysr1.onrender.com/api/urls/posturl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

if (response.ok) {
    const data = await response.json();
    const encurtada = `https://url-shortener-ysr1.onrender.com/${data.id}`;
    const visivel = encurtada.replace("https://", "");

    document.getElementById("resultado").innerHTML = `
        <h2>URL Encurtada</h2><br>
        <p><a href="${encurtada}" target="_blank">${visivel}</a></p>
        <button onclick="navigator.clipboard.writeText('${encurtada}')">Copiar link</button>
    `;

  } else {
    document.getElementById("resultado").innerText = "Erro ao encurtar a URL.";
  }
}
