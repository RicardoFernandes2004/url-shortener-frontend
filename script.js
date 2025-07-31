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
        const encurtada = `https://url-shortener-ysr1.onrender.com/api/urls/${data.id}`;
        document.getElementById("resultado").innerHTML = `
     URL encurtada: <a href="${encurtada}" target="_blank">${encurtada}</a>
    `;

  } else {
    document.getElementById("resultado").innerText = "Erro ao encurtar a URL.";
  }
}
