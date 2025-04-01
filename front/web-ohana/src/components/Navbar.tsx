import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.nav}>
      <img
        src="logo-ohana.webp"
        alt="Logo Centro Ohana"
        className={classes.logo}
      />
      <ul className={classes.elements}>
        <li>Servicios</li>
        <li>Talleres</li>
        <li>Conócenos</li>
        <li>Blog</li>
        <li>Galería</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}

export default Navbar;
