const adminVerficacionTemplate = (name, code) => {
  return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
              color: #333;
              line-height: 1.6;
            } 

            h1 {
              color: #1E90FF;
              text-align: center;
            }

            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 15px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .highlight {
              background-color: #1E90FF;
              color: #fff;
              padding: 4px 8px;
              border-radius: 10px;
            }
          </style>
        </head>
        
        <body>
          <div class="container">
            <h1>¡Hola ${name}!</h1>
            
            <p>Tu código de verificación de 2 pasos es: 
            <strong class="highlight">${code}</strong></p>

            <p>Utiliza este código al iniciar sesión en nuestra aplicación.</p>
            
            <b>Por favor, mantén esta información segura y no la compartas 
            con nadie.</b><br><br>
          
            <p>Si tienes alguna pregunta o necesitas asistencia, 
            no dudes en contactarnos.</p>
            
            <p>¡Esperamos que disfrutes tu experiencia con Bus On Time!</p>
          </div>
        
        </body>
    </html>
  `;
};

module.exports = {
  adminVerficacionTemplate,
};
