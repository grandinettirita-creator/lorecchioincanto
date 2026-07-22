exports.handler = async (event) => {

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Metodo non consentito"
    };
  }

  const dati = JSON.parse(event.body);

  console.log("Nuovo commento ricevuto:", dati);

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      messaggio: "Commento ricevuto."
    })
  };

};
