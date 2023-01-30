import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import {PropTypes} from 'prop-types';

export const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Cargando...</h2>) /*Esto se hizo para mostrar el cargando cuando las imagenes aún no se han cargado */}
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}