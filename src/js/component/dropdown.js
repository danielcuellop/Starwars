import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from '../store/appContext';

function BasicButtonExample() {
    const { store, actions } = useContext(Context);

    return (
        <DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`} >
            {
                store.favorites.map((item, index) => (
                    <Dropdown.Item href="#/action-1">
                        {item.name}
                        <button onClick={() => actions.deleteFavorite(index)}>Eliminar</button>
                    </Dropdown.Item>
                ))
            }
        </DropdownButton>
    );
}

export default BasicButtonExample;
