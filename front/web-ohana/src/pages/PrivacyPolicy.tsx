import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de privacidad | Centro Ohana</title>
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="font-bold mb-6 text-center text-[--color-primary]">
          Política de Privacidad
        </h1>

        <section className="space-y-6 leading-relaxed text-lg">
          <p>
            <strong>1. INFORMACIÓN AL USUARIO</strong>
            <br />
            <b>ROCÍO RUIZ ROJO</b>, en adelante RESPONSABLE, es el responsable
            del tratamiento de los datos personales del Usuario y le informa que
            estos datos serán tratados de conformidad con el Reglamento (UE)
            2016/679 (GDPR) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>

          <p>
            <strong>Finalidad del tratamiento:</strong>
            <br />
            - Atender solicitudes y consultas enviadas mediante el formulario de
            contacto.
            <br />
            - Comunicar información relacionada con los servicios ofrecidos,
            exclusivamente mediante WhatsApp.
            <br />- No se realizan cesiones a terceros ni se usan los datos con
            fines comerciales externos.
          </p>

          <p>
            <strong>Base jurídica:</strong> Consentimiento del interesado al
            enviar el mensaje a través del formulario.
          </p>

          <p>
            <strong>Criterios de conservación:</strong> Solo durante el tiempo
            necesario para responder la solicitud. No se almacenan datos en
            bases de datos del sitio web.
          </p>

          <p>
            <strong>Derechos del usuario:</strong>
            <br />
            - Acceder, rectificar y suprimir sus datos.
            <br />
            - Limitar u oponerse al tratamiento.
            <br />- Presentar una reclamación ante la Agencia Española de
            Protección de Datos (www.aepd.es).
          </p>

          <p>
            <strong>Datos de contacto:</strong>
            <br />
            ROCÍO RUIZ ROJO <br />
            Email: centrohana@gmail.com
          </p>

          <p>
            <strong>2. OBLIGATORIEDAD DE LOS DATOS</strong>
            <br />
            Los campos del formulario son obligatorios para poder responder su
            consulta. El usuario garantiza la veracidad de los datos
            proporcionados.
          </p>

          <p>
            <strong>3. SEGURIDAD</strong>
            <br />
            El RESPONSABLE aplica las medidas técnicas y organizativas
            necesarias para proteger los datos personales conforme a la
            normativa vigente.
          </p>
        </section>
      </main>
    </>
  );
}
