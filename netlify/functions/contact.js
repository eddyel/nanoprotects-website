import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // false pour le port 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, city, country, materials, zones, protections, autreMateriau, message } = data;

    const htmlContent = `
      <h2>Nouvelle demande de diagnostic</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <p><strong>Ville :</strong> ${city}</p>
      <p><strong>Pays :</strong> ${country}</p>
      <p><strong>Matériaux :</strong> ${materials?.join(', ') || 'Aucun'}</p>
      <p><strong>Zones :</strong> ${zones?.join(', ') || 'Aucune'}</p>
      <p><strong>Protections :</strong> ${protections?.join(', ') || 'Aucune'}</p>
      ${autreMateriau ? `<p><strong>Autre matériau :</strong> ${autreMateriau}</p>` : ''}
      <p><strong>Message :</strong><br>${message}</p>
    `;

    await transporter.sendMail({
      from: `"NanoProtects" <${process.env.SMTP_USER}>`, // expéditeur = melbaroudi@gmail.com
      to: process.env.CONTACT_EMAIL,                     // destinataire = contact@nanoprotects.com
      subject: `Nouvelle demande - ${name}`,
      html: htmlContent,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Erreur :', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
