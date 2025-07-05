import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const service_id = import.meta.env.VITE_YOUR_SERVICE_ID;
    const template_id = import.meta.env.VITE_YOUR_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_YOUR_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Mbiya Kiaku Maxime",
      title: subject,
      message: message,
    }

    if (form.current) {
      console.log(`send(${service_id}, ${template_id}, ${templateParams}, ${public_key})`);
      emailjs
        .send(service_id, template_id, templateParams, public_key)
        .then(
          (res) => {
            console.log('SUCCESS!', res);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            alert('Message sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
    }
  };

  return (
    <section id="contact">
      <div className="container mt-3 contactContent">
        <h1 className="text-center">Contactez-moi</h1>
        <hr />
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Subject"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="mb-3 mt-3">
            <textarea
              className="form-control"
              rows={5}
              id="comment"
              name="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Project Details"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success mt-3">Contactez-moi</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;