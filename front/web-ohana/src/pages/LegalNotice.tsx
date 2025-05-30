import { Helmet } from "react-helmet";

export default function LegalNotice() {
  return (
    <>
      <Helmet>
        <title>Aviso legal | Centro Ohana</title>
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-[--color-primary]">
          Aviso Legal
        </h1>

        <section className="space-y-6 leading-relaxed text-lg">
          <p>
            <strong>1. INFORMACIÓN GENERAL</strong>
            <br />
            En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
            Información y Comercio Electrónico (LSSICE), se informa que el
            presente sitio web es titularidad de:
            <br />
            - Nombre comercial: CENTRO OHANA
            <br />
            - Cotitulares: MARÍA DEL ROCÍO RUIZ ROJO y ANA GONZÁLEZ MORILLO
            <br />
            - DNI Rocío: 42196729-D
            <br />
            - DNI Ana: 53741149-Q
            <br />
            - Domicilio: Calle Pintor Cipriano Maldonado, 7, bajo C, Torre del
            Mar, 29740 Málaga, España
            <br />
            - Teléfono: : +34 690 64 31 96 | +34 647 49 46 81
            <br />
            - Email: centroohana@gmail.com
            <br />
            - Dominio web: https://centrohana.com
            <br />
            - Nº Colegiado Rocío: 29/1399 | NICA 49.470
            <br />- Nº Colegiado Ana: 1206/42196729
          </p>

          <p>
            <strong>2. PROPIEDAD INTELECTUAL E INDUSTRIAL</strong>
            <br />
            Todos los contenidos del sitio web son propiedad del RESPONSABLE o
            cuenta con los permisos necesarios. Se prohíbe su reproducción o uso
            sin autorización expresa.
          </p>

          <p>
            <strong>3. EXENCIÓN DE RESPONSABILIDAD</strong>
            <br />
            El RESPONSABLE no se responsabiliza por contenidos de terceros o
            errores técnicos. Se reserva el derecho de modificar contenidos sin
            previo aviso.
          </p>

          <p>
            <strong>4. USO DE COOKIES</strong>
            <br />
            Este sitio web solo utiliza cookies técnicas necesarias para su
            correcto funcionamiento. No se utilizan cookies de seguimiento,
            analítica ni publicidad. No se almacenan datos personales mediante
            cookies.
          </p>

          <p>
            <strong>5. POLÍTICA DE ENLACES</strong>
            <br />
            El sitio puede contener enlaces a sitios de terceros. El RESPONSABLE
            no se hace responsable del contenido externo. Se eliminarán enlaces
            que infrinjan la ley en cuanto se detecten.
          </p>

          <p>
            <strong>6. REGISTRO DE DATOS DE NAVEGACIÓN</strong>
            <br />
            Este sitio no realiza registros de direcciones IP ni utiliza
            herramientas de analítica web. No se recogen datos estadísticos ni
            de comportamiento de los usuarios.
          </p>

          <p>
            <strong>7. LEY APLICABLE Y JURISDICCIÓN</strong>
            <br />
            Se aplica la legislación española. Las controversias serán resueltas
            en los Juzgados de MÁLAGA, salvo que se indique lo contrario
            legalmente.
          </p>
        </section>
      </main>
    </>
  );
}
