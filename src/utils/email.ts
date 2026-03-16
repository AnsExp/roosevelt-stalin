export async function sendEmail(subject: string, email: string, message: string): Promise<boolean> {
  const now = new Date();
  const formattedDate = now.toLocaleString("es-EC", {
    dateStyle: "full",
    timeStyle: "short"
  });

  const data = {
    to: "rooseveltabrigo@gmail.com",
    from: "Portfolio <noreply@supgalapagos.tours>",
    subject: subject.trim(),
    headers: [
      "Content-Type: text/html; charset=UTF-8",
      "Reply-To: " + email.trim(),
      "X-Origin: Portafolio personal - Contacto"
    ],
    content: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${subject.trim()}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
          .container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; }
          h2 { color: #2c3e50; }
          .meta { font-size: 0.9em; color: #555; margin-bottom: 15px; }
          .message { background: #f9f9f9; padding: 15px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Nuevo mensaje desde Portfolio</h2>
          <div class="meta">
            <p><strong>Correo:</strong> ${email.trim()}</p>
            <p><strong>Fecha de envío:</strong> ${formattedDate}</p>
          </div>
          <div class="message">
            <p>${message.trim().replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  const response = await fetch("https://supgalapagos.tours/central/wp-json/api_git/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response.ok;
}