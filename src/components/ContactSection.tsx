import { useState } from "react";
import { sendEmail } from "../utils/email";

function ContactSection() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!subject.trim() || !email.trim() || !message.trim()) {
      setError("Completa todos los campos antes de enviar.");
      return;
    }
    setSending(true);
    setError("");
    setSuccess("");

    const success = await sendEmail(subject, email, message);

    if (success) {
      setSubject("");
      setEmail("");
      setMessage("");
      setSuccess("Mensaje enviado con éxito. ¡Gracias por contactarme!");
    } else {
      setError("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.");
    }
    setSending(false);
  }

  return (
    <section id="contacto" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-violet-500/5" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Trabajamos juntos?</h2>
        <p className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-xl sm:max-w-2xl mx-auto mb-10 leading-relaxed text-center">
          Actualmente estoy abierto a nuevas oportunidades. Si tienes un
          proyecto en mente o simplemente quieres saludar, mi bandeja de entrada
          está siempre abierta.
        </p>
        <form
          onSubmit={event => { event.preventDefault(); handleSubmit(); }}
          className="max-w-2xl mx-auto text-left space-y-5 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 md:p-8 backdrop-blur"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">Asunto *</span>
              <input
                disabled={sending}
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="Asunto del mensaje"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">Correo *</span>
              <input
                disabled={sending}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tu@correo.com"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </label>
          </div>

          <label className="space-y-2 block">
            <span className="block text-sm text-zinc-300">Mensaje *</span>
            <textarea
              disabled={sending}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Cuentame sobre tu proyecto..."
              rows={5}
              className="w-full rounded-xl bg-zinc-950/80 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
            />
          </label>

          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          {success ? <p className="text-sm text-green-400">{success}</p> : null}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              Enviar mensaje
            </button>

            {sending && (
              <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24">
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                </path>
              </svg>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
