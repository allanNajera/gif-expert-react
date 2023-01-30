import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={() => {}}/> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target : {value: 'Saitama'}} );
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar OnNewCategory si el input tiene un valor ', () => { 
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target : {value: inputValue}} );//Aquí agregamos saitama al input con en el test pasado
        fireEvent.submit(form);//Aquí llamamos al OnSubmit 
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();//donde se espera que sea llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1);//para corroborar que solo haya sido llamada una vez o las veces que uno quiera
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);// con esto corroboramos que haya sido llamado con ese valor
     });

    test('no debe de llamar el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);//Aquí llamamos al OnSubmit 

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();//Lo mismo que la linea anterior
    });
 });