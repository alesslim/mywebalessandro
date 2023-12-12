import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import his1 from './assets/img/his1.jpg';
import his2 from './assets/img/his2.jpg';
import his3 from './assets/img/his3.jpg';
import his4 from './assets/img/his4.jpg';
import his5 from './assets/img/his5.jpg';
import his6 from './assets/img/his6.jpeg';
import his7 from './assets/img/his7.jpg';
import his8 from './assets/img/his8.jpg';
import his9 from './assets/img/his9.jpg';
import his10 from './assets/img/his10.jpeg';
import his11 from './assets/img/his11.jpeg';
import his12 from './assets/img/his12.jpg';
import logo from './assets/img/logo.png';
import picana from './assets/img/picana.jpg';
import pavo from './assets/img/pavo.jpg';
import lechon from './assets/img/lechon.jpg';
import bunuelo from './assets/img/bunuelo.jpg';
import arbol1 from './assets/img/arbol1.jpg';
import arbol2 from './assets/img/arbol2.jpg';
import arbol3 from './assets/img/arbol3.jpg';
import arbol4 from './assets/img/arbol4.jpg';
import arbol5 from './assets/img/arbol5.jpg';
import arbol6 from './assets/img/arbol6.jpg';
import arbol7 from './assets/img/arbol7.jpg';
import arbol8 from './assets/img/arbol8.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Routes, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className='logonav'></img>
        <nav className='navegacion'>
          <a href='#'>Historia</a>
          <a href='#pla'>Platillos Tipicos</a>
          <a href='#'>Villancicos</a>
          <a href='#'>Decoraciones</a>
          <button className='btnlogin'>Resgistrate</button>          
        </nav>
      </header>
      <br></br>
      <section> 
        <div className='section'>
          <div className='img'>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="d-block" src={his1} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his2} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his3} alt="Third slide"/>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='parrafo'>
            <h1>Historia de la Navidad</h1>
            <p>En el año 440 la Iglesia decide oficialmente celebrar el nacimiento de Jesús el 25 de diciembre, lo cual quedó definitivamente instituido en el año 529 cuando el emperador Justiniano declara la fecha como día festivo.
            Alegría e ilusión escapan de las manos que dan forma al árbol navideño. Las ramas se abren como brazos para sujetar brillantes pompas y enredarse entre el destello de las luces. En la punta, una estrella que recuerda a la de Belén, aquella que guió a los Reyes Magos hasta el pesebre del Niño Jesús hace dos milenios, según cuenta la historia bíblica.</p>
        </div>
        </div>
        <br></br>
        <div className='section2'>
            <div className='parrafo2'>
              <p>
              Cerca del pino decorado está la imagen de cera del pequeño redentor que se acuesta entre musgos, mientras animales de yeso o plástico le acompañan.
              Unos pasos más allá, la figura de Papá Noel, a veces de tela, a veces de cerámica, contempla indeciso. No se identifica por completo con ese ambiente, porque su presencia en las navidades bolivianas no tiene cientos de años como el Rey del pesebre. Sin embargo, él, con su rojiza apariencia, se ha convertido en el anfitrión y a estas alturas casi dueño de diciembre. Los misterios y detalles de la Natividad están escritos en las páginas del Nuevo Testamento y siempre fueron motivo de inspiración para los amantes de las artes plásticas con convicción religiosa, quienes la recrearon. 
              </p>
            </div>
            <div className='img'>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="d-block" src={his4} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his5} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his6} alt="Third slide"/>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>
        <div className='section3'>
          <div className='img'>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="d-block" src={his7} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his8} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his9} alt="Third slide"/>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='parrafo3'>
            <p>Las primeras obras alusivas al nacimiento de Jesús se realizaron en Europa en la Edad Media. Los trazos artísticos hicieron nacer a Cristo en un rústico pesebre. Al principio, la imagen de Jesús reposaba en un pesebre de paja. Luego, las representaciones del siglo XVIII lo durmieron sobre una cuna. Es cuando el estilo barroco, recargado de adornos y detalles, pasa una pincelada por los frescos humanizando a los personajes. “Aparecen cuadros en los que las figuras de los personajes son más reales. Se ve, por ejemplo, al Niño envuelto en pañales”. “La Navidad llega a Latinoamérica a través de la Iglesia Católica como parte del adoctrinamiento de los nativos con lecturas sagradas e imágenes”.</p>
        </div>
        </div>
        <br></br>
        <div className='section4'>
            <div className='parrafo4'>
              <p>
              Estampas, frescos y grabados creados en el viejo mundo en el siglo XVI esbozaron características de la Escuela Flamenca. Tonos suaves e imágenes irreales fueron copiadas y, en el siglo XVIII, reinterpretadas y adaptadas al estilo pictórico que emergía en América. La Navidad está exhibida en los museos pero no quedó atrapada entre los marcos de los cuadros, sino llegó a ser una celebración mundial. Y su Rey encontró cobijo en el pesebre. 
              </p>
            </div>
            <div className='img'>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="d-block" src={his10} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his11} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={his12} alt="Third slide"/>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>
      </section>
      <br></br>
      <a name='pla'></a>
      <div className='contenedor'>
          <center><h1>Platillos Tipicos</h1></center>
          <br></br>
          <div className='cajas'>
              <div className='image'>
                  <img className='imageplato' src={ picana}></img>
              </div>
              <div className='text'>
                  <h3>Picana Navideña</h3>
                  Este platillo tradicional se prepara con carnes de res, cerdo, cordero y pollo, o a veces solo este último; además vino blanco, ají, cebolla, choclo, papa, zanahoria, habas, tunta, perejil, hojas de laurel y pasas de uva. Antes algunas familias decidían servirse esta comida en Año Nuevo, donde se compartía con todos los invitados. Si bien era típico y especial de Navidad y Año Nuevo, actualmente muchos prefieren el lechón o pavo.
              </div>
          </div>
          <div className='cajas'>
              <div className='text'>
                  <h3>Pavo Navideño</h3>
                  Para disfrutar de este platillo se requiere un pavo entero y limpio, pollo picado, leche, huevo, miga de pan, ciruelas, pasas de uva, manzana verde, vino blanco, brandi, sal y pimienta a gusto. Hay que precalentar el horno y cocinar durante unos 45 minutos a 350º. Luego debe ser bañado con el vino blanco y con el propio jugo que despide durante la cocción. Para colocar en la mesa se tiene que preparar una fuente con hojas de lechuga.
              </div>
              <div className='image'>
                <img className='imageplato' src={pavo}></img>
              </div>
          </div>
          <div className='cajas'>
              <div className='image'>
                <img className='imageplato' src={lechon}></img>
              </div>
              <div className='text'>
                <h3>Lechon Navideño</h3>
                Esta comida se prepara con ají molido, perejil, tomillo, ajo, comino, orégano, pimienta, vinagre, jugo de limón, aceite y sal al gusto; todos estos ingredientes deben sazonar la carne de cerdo. Además viene acompañado de choclo, papas y el tradicional k’allu (en el caso de Cochabamba), que es una ensalada de tomate, cebolla, queso, quirquiña y locoto, ingredientes típicos del valle. El plato se sirve acompañado de la infaltable llajua.
              </div>
          </div>
          <div className='cajas'>
              <div className='text'>
                <h3>Chocolate y Buñuelo</h3>
                En La Paz, la forma tradicional de preparar el chocolate navideño es cocinando el producto crudo, con chocolates redondos o amargos en barra de los Yungas. Una vez hervido el agua, se pone a cocer el chocolate y es característico que la grasa en la olla salte a la vista. Tradicionalmente se lo tomaba con buñuelos, pero ahora la población, casi en general, lo hace con panetón o galletas de fábrica u otros prefieren api.
              </div>
              <div className='image'>
                <img className='imageplato' src= {bunuelo}></img>
              </div>
          </div>
      </div>
      /* ****** */
      <br/>
      <div className='contentvideo'>
        <div className='title'>
          <h1>Villancicos</h1>
        </div>
        <div className='video'>
          <ReactPlayer
          url='https://youtu.be/IhO3Y1unYGE?si=SlZmtYobhdZndwBb'
          width='100%'
          height='100%'
          />
        </div>
        <div className='video'>
          <ReactPlayer
            url='https://youtu.be/zKmJq0_8FXY?si=uZ_jbM5No4JOV9B_'
            width='100%'
            height='100%'
            />
        </div>
        <div className='video'>
        <ReactPlayer
          url='https://youtu.be/95qJ8MAc6p0?si=7hUL_cr8nz4HxtEJ'
          width='100%'
          height='100%'
          />
        </div>
        <div className='video'>
        <ReactPlayer
          url='https://youtu.be/yfpBMrJZt1Q?si=dQp4vcxnZaYvJZ9j'
          width='100%'
          height='100%'
          />
        </div>
        <div className='video'>
        <ReactPlayer
          url='https://youtu.be/J5NhZw8mt04?si=yNcaGhTr6v_vnJPx&t=1'
          width='100%'
          height='100%'
          />
        </div>
        <div className='video'>
        <ReactPlayer
          url='https://youtu.be/Tpo0q-TVGLU?si=2ntzhwkXRt2c9wS6'
          width='100%'
          height='100%'
          />
        </div>
        <div className='video'>
        <ReactPlayer
          url='https://youtu.be/ukOGHYj7TGY?si=gTH-FA5npcidV9AJ&t=2'
          width='100%'
          height='100%'
          />
        </div>
        <div className='video'>
        <ReactPlayer
          url='https://youtu.be/9r50PWGSan4?si=FuNMnkKdwrLpPynz'
          width='100%'
          height='100%'
          />
        </div>
        <div className='video'>
        <ReactPlayer
          url='https://youtu.be/GTZXYEsvKvM?si=TrZIJmJvDqoK7zwY'
          width='100%'
          height='100%'
          />
        </div>
      </div>
      <br/>
      <div className='contentarbol'>
          <div className='title'>
            <center><h1>Decoracion del Arbol Navideño</h1></center>
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol1}>
            </img>
          </div>
          <div className='textarbol'>
          <h3>¿NATURAL O ARTIFICIAL?</h3>
          Si quieres un resultado de diez, opta por un árbol de Navidad natural. Visita un vivero acreditado y déjate seducir por su presencia y aroma. Al acabar las fiestas siempre podrás trasplantarlo en el jardín, el campo o llamar a tu ayuntamiento para que se encargue de él. Este ha sido elegido por la estilista Solange Van Dorssen para decorar el salón. 
          </div>
          <div className='textarbol'>
          <h3>CON CORONAS VISTOSAS</h3>
          Ya lo tienes en casa y has decidido su ubicación, pero ahora te planteas cómo decorar el árbol de Navidad. Tras las luces, empieza por los adornos más grandes y sigue por los pequeños. Elige para los primeros unas coronas de Navidad, como estas de la imagen, a base de piñas en tonos naturales y cascabeles rojos que con solo rozarlas escucharás su alegre tintineo. Para los objetos pequeños elige bolas navideñas de cristal, adornos de cerámica y piñas ensartadas con cordel o cintas blancas. 
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol2}></img>
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol3}></img>
          </div>
          <div className='textarbol'>
          <h3>MATERIALES CÁLIDOS</h3>
          Si quieres estar orgullosa de la decoración del árbol de Navidad, personaliza algunos adornos y renueva otros. El estudio Alto Interiorismo se ha decantado por materiales cálidos como la madera, la cerámica y la tela. ¿Qué no te gusta que se vea el pie del árbol? Opta por ocultarlo con una tela de saco tipo yute ¡y problema solucionado!
          </div>
          <div className='textarbol'>
          <h3>ADORNOS CREATIVOS</h3>
          Para que te inspires mejor, te acercamos las decoraciones navideñas que cuelgan de este árbol: círculos de madera troquelada y otros handmade hechos con arpillera y algodón, ambos semejan bolas ¡y son superoriginales! 
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol4}></img>
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol5}></img>
          </div>
          <div className='textarbol'>
          <h3>ABRE BIEN LAS RAMAS DEL ÁRBOL</h3>
          Si ya has sacado el árbol de todos los años, solo queda abrir sus ramas frondosas por delante y por detrás. Aun así, pásales un plumero para eliminar restos de polvo. Déjalas un rato abiertas para que vayan tomando forma antes de decorarlo. En este de la imagen de Leroy Merlin, el pie se ha ocultado con una alfombra de pelo en la que se han depositado un sinfín de regalos. Para que se mantenga en buen estado, guarda el árbol de Navidad con cuidado después de limpiarlo. 
          </div>
          <div className='textarbol'>
          <h3>APUESTA POR OBJETOS DE METAL</h3>
          El árbol es el mismo de la temporada pasada sí, pero como cada año, cambias los adornos según las tendencias. Si quieres estar a la última en estas fiestas, no deben faltar en tu árbol de Navidad piñas, coronas, bolas y estrellas en dorado, plateado y cobrizo. Elígelas del mismo tamaño para lograr una decoración homogénea.
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol6}></img>
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol7}></img>
          </div>
          <div className='textarbol'>
            <h3>EN SU JUSTA PROPORCION</h3>
            ¿Te encanta fijarte en los árboles de Navidad decorados en la calle y en las tiendas para captar ideas? Antes de adquirir los adornos de tu árbol, ten en cuenta el tamaño de este. Si sus dimensiones son reducidas, como el de la imagen, tendrás que elegirlos pequeños para que el conjunto sea proporcionado. ¡Mira la peana de fibra, le va qué ni pintado!
          </div>
          <div className='textarbol'>
          <h3>CON ABSOLUTA DISCRECIÓN</h3>
          Si eres de las que prefieren adornos discretos, opta por tonos blancos en diferentes materiales: madera, cerámica, pelo... En este árbol de Navidad, la estilista Solange Van Dorssen ha colocado bellotas, casitas iluminadas, bolas tipo peluche, cencerros, mini coronas... Todos sirven para evocar sutilmente la nieve y el invierno.
          </div>
          <div className='imgarbol'>
            <img className='ajustearbol' src={arbol8}></img>
          </div>
      </div>
      <br/>
      <div className='creditos'>
        <div className='cajaform'>
      <section className='sectionform'>
          <h4>Formulario Registro</h4>
          <input className='inputform'  type='text' placeholder='Ingrese su Nombre'></input>
          <input className='inputform' type='text' placeholder='Ingrese su Apellido'></input>
          <input className='inputform' type='email' placeholder='Correo'></input>
          <input className='inputform' type='password' placeholder='Contraseña'></input>
          <p>Estoy de acuerdo con<a href='#'>Terminos y Condiciones</a></p>
          <input className='boton' type='submit' value='Registrar'></input>
          <p><a href='#'>Ya tienes cuenta?</a></p>
      </section>
      </div>
      <div className='acordion'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>CREDITOS</Accordion.Header>
        <Accordion.Body>
          <strong>NOMBRE: </strong>Felipe Alessandro Limachi Colque<br/>
          <strong>MATERIA: </strong>INF-122<br/>
          <strong>PARALELO: </strong>"A"<br/>
          <strong>DOCENTE: </strong>Ph.D. Marisol Tellez Ramirez 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  </div>
  <br/>
  <footer className='footer'>
        @Feliz Navidad
  </footer>


      


























    </div>
  );
}

export default App;
