import { Container } from "./styled";
import Header from "../../components/header";
import TesisParagraph from "../../components/tesis/paragraph";
import TesisTitle from "../../components/tesis/title";

export default function TesisContainer() {
  return (
    <Container>
      <div id="dataContainer">
        <h1>
          A Pale Blue Dot: Multimedia y tecnología aplicada para la
          transformación del Museo Argentino de Ciencias Naturales
        </h1>
        {/* Introducción: Resumen */}
        <div className="tesisBlock">
          <TesisTitle text="Introducción: Resumen"></TesisTitle>
          <TesisParagraph
            text="Actualmente, los museos se encuentran atravesando un proceso de
            transición que apunta a las nuevas tecnologías. Estas se implementan
            en estas instituciones como pilares de un utópico futuro tecnológico
            que la sociedad imagina. Pero las desigualdades sociales, económicas y
            la ya conocida brecha digital, provocan que varios museos de todo el
            mundo, estén muy avanzados dentro de su transición digital, mientras
            que otros aún todavía no han podido comenzarla. Además debemos
            sumarle, que este proceso es de carácter obligatorio para la
            supervivencia actual de un museo (aún más dentro de este nuevo
            contexto pandémico) y para que estos se adapten a una nueva generación
            de visitantes."
          ></TesisParagraph>
          <TesisParagraph
            text="En esta tesis, se realiza una investigación sobre la
            implementación de tecnología y multimedia dentro de la museología, con
            el fin de realizar un proyecto en el Museo Argentino de Ciencias
            Naturales Bernardino Rivadavia."
          ></TesisParagraph>
          <TesisParagraph
            text="Este proyecto, que se desarrollara
            bajo una metodología de diseño participativo de usuarios, plantea
            realizar una nueva experiencia de visita completa a una de la salas
            con sus respectivas instalaciones, prototipando la principal de estas."
          ></TesisParagraph>
        </div>
        {/* ¿Por qué museos y multimedia?: Fundamentación */}
        <div className="tesisBlock">
          <TesisTitle text="¿Por qué museos y multimedia?: Fundamentación"></TesisTitle>
          <TesisParagraph
            text="En el anteúltimo año de mis estudios en el colegio secundario, una
            visita escolar al Museo Malvinas e Islas del Atlántico Sur, me generó
            tanto interés personal, que a los pocos días regresé a visitarlo con mis
            padres y quede aún más impactado."
          ></TesisParagraph>
          <TesisParagraph
            text="La emoción que me generaba no solo era
            por su contenido o por lo llamativo de su tópico como argentino, lo que
            me entusiasmaba de ese museo era su forma de narrar historias,
            utilizando nuevas tecnologías que nunca antes había podido experimentar
            y también utilizando de forma creativa e innovadora otras que ya eran
            más que conocidas."
          ></TesisParagraph>
          <TesisParagraph
            text="De allí en más, indirectamente comencé a tratar de
            aplicar estas nuevas formas en proyectos escolares. Por ejemplo: módulos
            de enseñanza para alumnos primarios sobre la Constitución Nacional, una
            muestra escolar sobre el Bicentenario de la Independencia, entrevistas a
            veteranos de la Guerra de Malvinas, modelos de Naciones Unidas, entre
            otros."
          ></TesisParagraph>
          <TesisParagraph
            text="No obstante, no es la primera vez que que los museos deben
            afrontar la problemática que propone esta tesis. Estas instituciones, a
            lo largo de su historia, ya han pasado por varias etapas de transición
            en las cuales tuvieron que adaptarse a cambios drásticos mundiales o a
            nuevas generaciones de publico. Un claro ejemplo, es la pandemia del
            COVID-19, muy de la mano con la transición digital que los museos ya
            venían sufriendo."
          ></TesisParagraph>
          <TesisParagraph
            text="De allí en más, indirectamente comencé a tratar de
            aplicar estas nuevas formas en proyectos escolares. Por ejemplo: módulos
            de enseñanza para alumnos primarios sobre la Constitución Nacional, una
            muestra escolar sobre el Bicentenario de la Independencia, entrevistas a
            veteranos de la Guerra de Malvinas, modelos de Naciones Unidas, entre
            otros."
          ></TesisParagraph>
          <TesisParagraph
            text='Este nuevo proceso de modernización, le abre las
            puertas a diseñadores y desarrolladores a trabajar en conjunto con
            curadores, historiadores, científicos y otros expertos, pero también con
            su publico, invitándolos a participar y ser escuchados para crear museos
            que satisfagan su necesidad de conocimiento y educación, de una forma
            "multimedialmente nueva"'
          ></TesisParagraph>
        </div>
      </div>
    </Container>
  );
}
