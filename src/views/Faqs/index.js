import React from 'react'
import styled from 'styled-components'

import NavBar from '../../components/NavBar';

import { ReactComponent as WarningLogo } from '../../images/warning.svg';


const StyledFaqs = styled.div`
  margin-top: 6rem;

  .faqs__container {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    box-shadow: rgb(38 50 56 / 15%) 0px 4px 15px;
    padding: 2rem;

    > h1, h2, p {
      font-weight: 300;
    }

    > a {
      color: ${(props) => props.theme.colors.primary};
    }

    > h1 {
      text-align: center;
      font-weight: bold;
    }
  }

  ${(props) => props.theme.breakpoints.md} {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .faqs__container {
      width: 60%;
      height: auto;
    }
  }
`;


const Faqs = props => {
  return (
    <>
      <NavBar/>
      <StyledFaqs>
        <div className='faqs__container'>
          <WarningLogo/>
          <h1>Requerimientos Houm Challenge</h1>
          <h2> - Usar una API pública que te permita obtener una lista de recursos y cada uno de estos recursos tenga variados atributos. Aquí la idea es utilizar una API lo suficientemente compleja para poder mostrar todo tu potencial visualizando información de los recursos en formato de hero cards.</h2>
          <p>
            Decidí utilizar la API de Swapi porque es atractiva, la única desventaja es que no contaba con imágenes para los ejemplos.
            Para más información de Swapi:
          </p>
          <a href='https://swapi.dev/' target="_blank" rel="noreferrer">Swapi Site</a>
          <h2> - La aplicación desarrollada debe tener la paleta exacta de colores de Houm.</h2>
          <p>Done!</p>
          <h2> - La información de cada recurso se debe visualizar en hero cards. Cómo organizas los hero cards es decisión tuya.</h2>
          <p> Los planetas se muestran en Hero Cards. Al entrar a cada Hero Card se carga una vista de detalle de la entidad.</p>
          <h2> - Debes visualizar simultáneamente al menos 10 recursos.</h2>
          <p>Swapi entrega 10 entidades por llamada así que fue más sencillo.</p>
          <h2> - Debe tener suficientes recursos para ocupar algún tipo de paginación o infinite scroll usando paginación por servicio.</h2>
          <p>
            Swapihoum cuenta con 60 planetas de muestra para interactuar, la data que devuelve Swapi tiene más cosas de las mostradas.
            Po ejemplo, películas relacionadas de la saga o personajes asociados a planetas.
          </p>
          <h2> - Debes implementar filtros de búsqueda que agreguen valor a la aplicación usando filtros por servicio.</h2>
          <p>
            Swapi no cuenta con filtros explicitos para la API, tiene un endpoint de búsqueda y página que permite organizar
            mejor la información. En el paginador cada número de página es clickeable como  acceso rápido para filtrar directamente a esa página.
          </p>
          <h2> - La página debe ser completamente responsive.</h2>
          <p>
            Swapihoum es responsivo con un enfoque "mobile first" manejando los queries breakpoints en constantes compartidas.
            Odio a Safari y la dificultad que agrega para resolver temas de css usando viewport como medida.
          </p>
          <h2> - Puedes utilizar cualquier librería para componentes de diseño (Bootstrap, Material UI, Ant design, etc). Utiliza solo una de estas.</h2>
          <p>
            Me gusta ir creando los elementos porque puedo darles la forma que necesito más fácil que algunos componentes prefabricados que a veces
            son un poco menos flexibles! Por eso decidí no usar ninguna libreria de diseño para esta prueba.
            Para los estilos se manejan componentes con css interno mediante styled-components.
          </p>
          <h2> - Se aprecian las funcionalidades extras que muestren tu conocimiento y también se tendrán en consideración para la corrección.</h2>
          <p>:)</p>
          <h2> - Debes desplegar tu página.</h2>
          <p>Vercel FTW!</p>
          <h2> - El código debe tener calidad de producción.</h2>
          <p>
            El repo está organizado siguiendo guidelines de GitFlow y Conventional Commits.
            También se agrega Eslint para impulsar estilos y buenas prácticas.
          </p>
          <h2> - Apreciamos documentación útil que nos permita conocer tus decisiones técnicas.</h2>
          <p>En el repositorio hay un readme que explica un poco más la estructura del store/context, las jerarquias de archivos y demás!</p>
        </div>
      </StyledFaqs>
    </>
  )
};

export default Faqs;