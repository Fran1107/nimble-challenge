Nimble Gravity | Junior Fullstack Developer Challenge

Este proyecto es la resolución del desafío técnico para la posición de Junior Fullstack Developer. Consiste en una aplicación desarrollada con React que interactúa con una API para filtrar bots, permitiendo a los candidatos visualizar posiciones abiertas y enviar su postulación mediante la URL de su repositorio de GitHub.

🚀 Tecnologías Utilizadas

React 18 (con Vite) para un entorno de desarrollo ultra rápido.

TypeScript para garantizar la integridad de los datos y un desarrollo libre de errores de tipado.

Tailwind CSS para un diseño moderno y responsivo.

Axios para el manejo de peticiones HTTP de forma eficiente.

🛠️ Arquitectura y Buenas Prácticas

Se aplicaron patrones de diseño modernos para asegurar que el código sea escalable y mantenible:

Custom Hooks: La lógica de obtención de datos se centralizó en el hook useChallenge, separando la lógica de negocio de la interfaz de usuario.

Componentes Modulares: Estructura organizada en Layout, JobList y JobCard para facilitar la lectura y futuras extensiones.

Manejo de Estados: Implementación de estados de carga (loading) y manejo de errores para mejorar la experiencia de usuario (UX).

📦 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

Clona el repositorio
git clone https://github.com/francoespinoza1107/nimble-challenge.git
cd nimble-challenge

Instala las dependencias
npm install

Inicia el servidor de desarrollo
npm run dev

📄 Notas Adicionales

La aplicación utiliza el endpoint de la API proporcionado para validar los datos del candidato mediante su correo electrónico.

Se incluyó una validación básica para asegurar que la URL ingresada corresponda a un dominio de GitHub.

Desarrollado por Franco Espinoza - Salta, Argentina.