This project was created using [Create React App](https://github.com/facebookincubator/create-react-app).

### Descripción

Proyecto prueba de lista de planetas utilizando la API Swapi, consta de una vista con planetas mostrados en Hero Cards, un buscador, un paginador que controla las llamadas por páginas a la API y una vista de detalle por cada Hero Card.
También vistas dummy de prueba como FAQs y Login. 

- Fue construido solamente con React, creando componentes y estilos desde cero con styled-components siguiendo la convención de BEM: http://getbem.com/
- El proyecto sigue una guía de desarrollo AirBnB: https://github.com/airbnb/javascript
- La guía de AirBnB está configurada en el proyecto mediante Eslint para mantener un mismo estilo de desarrollo y prevenir errores.
- El control de versiones apuesta por un modelo Git Flow con convenciones de Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
- Utiliza React Helmet para el control de la data en el Head del documento: https://github.com/nfl/react-helmet
- Creado con un enfoque Mobile First para asegurar las vistas responsive.
- Cada componenten cuenta con CSS individual dentro de cada file.
- Se utilizó Fetch para los HTTP resquest.
- Se integra RTL para testing.
- Se utiliza Vercel para el deployment - https://swapihoum.vercel.app/
- Una version develop tiene deploy en: - https://swapihoum-develop.vercel.app/

## TO - DO:
- Every component styles has media queries in order to extend the responsive design.
- Paginator Component: To handle pages maximum to show.
- Add more tests.
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