import { useState } from 'react';
import {PropTypes} from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    /*Lo que sucede aquí es que el onChange sucede cada vez que se modifica 
    y es la forma que se hace para poder escribirlo y que se note en el input
    */
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //esto es para evitar que cuando le damos enter después de escribir refreque la pantalla
        if(inputValue.trim().length <= 1) return; //esto para no hacer nada si solo se está agregando algo con una letra o vacio
        //setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    
    return (
        <form onSubmit={ onSubmit} aria-label="form">
            <input
                type='text'
                placeholder="Buscar gifs"
                value={inputValue}
                //onChange={ (event) => onInputChange(event) } Se puede hacer así o así:
                onChange={onInputChange}
                /*funciona igual porque siempre envia el event aunque no esté explicito,
                solo hay que asegurarnos de recibirlo y utilizarlo
                */
            />
        </form>

    )


}

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired,
}
