
import { render,screen } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {
    const title = 'Saitama';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=27ddde81n6u4njvby9195crwrqupdf20lxtbhfl9u4rd5bgx&rid=giphy.gif&ct=g';

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el alt indicado', () => { 
        render(<GifItem title={title} url={url}/>);
        //screen.debug();//Esto para conocer que tiene el screen
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        //En vez de hacer esas dos aserciones, hacemos:
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente ', () => { 
        
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});