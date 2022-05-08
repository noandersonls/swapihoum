Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app).

### Descripción

Proyecto prueba de lista de planetas utilizando la API Swapi, consta de una vista con planetas mostrados en Hero Cards, un buscador, un paginador que controla las llamadas por páginas a la API y una vista de detalle por cada Hero Card.
También vistas dummy de prueba como FAQs y Login. 

- Fue construido solamente con React, creando componentes y estilos desde cero con styled-components.
- Creado con un enfoque Mobile First para asegurar las vistas responsive.
- Cada componenten cuenta con CSS individual dentro de cada file.
- Se utilizó Fetch para los HTTP resquest.
- Se integra RTL para testing.
- Se utiliza Vercel para el deployment - https://swapihoum.vercel.app/

## TO - DO
- Implement Husky with Linters.
- Linters
- 404 Component to Default View.
- Revisar Imports: Librerias, Componentes, Utils
- WARNING ICON FAQS
- CHECK UNUSED IMPORTS
- CONSOLE>LOGS
- FIX BEM ELEMENTS -- TO __
- PAGINATOR to VIEW
- CARDCONTAINER TO CARDSCONTAINER
- FIX ALL IMG ALTS
- REACT HELMET
---

### Organización

Swapihoum React App está organizada de la siguiente manera en su carpeta source:

Carpeta | Descripción
--- | ---
**api** | Relacionado a las funciones para llamar a la API Swapi.
**components** | Carpeta de todos los componentes utilizados en Swapihoum.
**context** | Relacionado al estado interno de Swapihoum.
**hooks** | React custom hooks que sirven de utilidad en la app.
**views** | Contiene todas las vistas al usuario que integran Swapihoum.
**images** | Relacionado a los iconos e imagenes que se muestran en la app.

### Vistas

Swapihoum cuenta con las siguientes vistas para el usuario:

Vistas | Descripción
--- | ---
**Main** | Es la vista principal que cuenta con el la barra superior, la barra de búsqueda y el contenedor de herocards.
**Details** | Se encarga de renderizar un planeta seleccionado al momento de entrar desde un herocard en Main.
**Faqs** | Vista de Faqs Dummy - Se muestran requerimientos del challenge Houm.
**Login** | Vista dummy de registro o acceso a Swapihoum.
**NotFound** | Vista de registro no encontrado para direcciones que no se encuentran en Swapihoum.

---

### Componentes

Los componentes son funcionales, la idea general es que la mayoría sea reutilizable, es pensado a futuro organizar reutilizables en una carpeta aparte.

Componente | Descripción
--- | ---
**Button.js** | Botón estilizado reusable.
**CardContainer.js** | Componente encargado de mosotrar todos los herocards con el paginador.
**HeroCard.js** | Tarjeta para renderizar los detalles de un registro en el Main view.
**Loader.js** | Componente para utilizar en los estados de carga de Swapihoum.
**NavBar.js** | Barra superior de navegación de Swapihoum.
**Searchbar.js** | Barra de búsqueda funcional.
**Showcase.js** | Permite mostrar el detalle de cada registro que se accede desde Main view.

---


### Métodos en App.js 

Los siguientes métodos se encargan de manejar la data a través de la aplicación, agregar el contacto, realizar la busqueda, establecer el estado, eliminar al contacto, abrir el modal y manejar el paginado.

Método | Descripción
--- | ---
**componentDidMount** | Llama a  **getInfo**  obtiene el listado de personas desde la API, y los setea en el estado del componente.
**getInfo** | Se encarga de hacer el request a la API para obtener los users, verificando si existe una query para realizar una busqueda.
**ComponentDidUpdate** | Se ejecuta después de que la actualización ocurre para comparar si la query de la busqueda ha cambiado con respecto al prevState y así llamar a getInfo()
**onDeleteUser** | Recibe un id de usuario para eliminarlo a través la llamada Delete de Axios.
**toggleModal** | Alterna entre True o False el Modal en el state para mostrar/cerrarlo.
**onSubmit** | Recibe un nuevo usuario y lo crea a través de un POST de Axios.


---