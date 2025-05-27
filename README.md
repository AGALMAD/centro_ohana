# Centro Ohana


Centro Ohana es una página web desarrollada para **[Centro Ohana](https://www.instagram.com/centro_ohana_/)**, una empresa dedicada a:  
  
**Logopedia 👄**  
**Psicopedagogía 🧠**  
**Terapia ocupacional 👣**  
  
Su propósito es brindar una plataforma clara, accesible y profesional donde padres y tutores puedan informarse sobre los servicios ofrecidos, contactar con especialistas y conocer el enfoque del centro.

---

## 📑 Índice

- [🧠 ¿Qué ofrece el sitio?](#-qué-ofrece-el-sitio)
- [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [🚀 Cómo instalar y ejecutar el proyecto](#-cómo-instalar-y-ejecutar-el-proyecto)
- [📦 Despliegue](#-despliegue)

---


## 🧠 ¿Qué ofrece el sitio?

- Descripción detallada de los servicios ofrecidos.
- Blog con artículos y recursos sobre infancia, desarrollo y educación.
- Calendario de talleres y actividades especiales en fechas señaladas.
- Perfil del equipo profesional con experiencia y especialidades.
- Información general sobre el centro.
- Formulario de contacto para agendar consultas o realizar preguntas.
- Diseño responsivo, optimizado para móviles, tablets y escritorio.

## 🛠️ Tecnologías utilizadas

- **Frontend:** [React](https://reactjs.org/)
  
  - **React 18:** Biblioteca principal para construir la interfaz de usuario.
  - **Vite:** Herramienta moderna para el desarrollo y construcción rápida.
  - **TypeScript:** Añade tipado estático para mejorar calidad y mantenimiento del código.
  - **Tailwind CSS:** Framework CSS utilitario para diseño rápido y responsivo.
  - **Axios:** Cliente HTTP para hacer peticiones al backend.
  - **Framer Motion:** Biblioteca para animaciones fluidas y atractivas.
  - **React Icons** y **Lucide React:** Iconografía personalizada y moderna.
  - **SweetAlert2:** Modales personalizados y alertas elegantes.
  - **React Slick:** Carrusel dinámico para testimonios o imágenes.
  - **Lightbox:** Visualización de imágenes ampliadas estilo galería.

- **Backend:** [Spring Boot 3.3.10](https://spring.io/projects/spring-boot)

  - **Persistencia de datos:**
    - Spring Data JPA
    - PostgreSQL
    - H2 Database (para desarrollo y pruebas)

  - **Seguridad y autenticación:**
    - Spring Security
    - JWT

  - **Documentación de API:**
    - Swagger / Springdoc OpenAPI

  - **Productividad del desarrollador:**
    - Lombok (anotaciones para reducir código repetitivo)
    - Spring Boot DevTools (recarga automática)
    - MapStruct (conversión entre entidades y DTOs)

  - **Servicios en la nube:**
    - Cloudinary (gestión de imágenes y archivos multimedia)

---

## 🚀 Cómo instalar y ejecutar el proyecto

> Asegúrate de tener instaladas las siguientes herramientas:
> - Node.js y npm (para el frontend)
> - JDK 17 o superior y Maven (para el backend)

### 🖼️ Frontend (React)

```bash
# Clona el repositorio si aún no lo has hecho
git clone https://github.com/AGALMAD/centro_ohana.git

cd frontend
npm install
npm run dev
```

## 📦 Despliegue

### ⚛️ Frontend
- 🌐 **[Plesk](https://www.plesk.com/)**: Utilizado para alojar el sitio web estático generado por Vite.

### 🧠 Backend
- 🚀 **[Render](https://render.com/)**: Plataforma utilizada para desplegar el servidor Spring Boot con PostgreSQL.

### 🖼️ Almacenamiento de imágenes
- ☁️ **[Cloudinary](https://cloudinary.com/)**: Servicio para gestión y entrega de imágenes en la nube.

**[Enlace a página desplegada](https://centrohana.com/)**:

