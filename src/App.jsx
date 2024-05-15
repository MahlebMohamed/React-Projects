import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import { useState } from 'react';


export default function App() {
    const [items, setItems] = useState([
        { id: 1, description: "Passports", quantity: 2, packed: false },
        { id: 2, description: "Socks", quantity: 12, packed: false },
        { id: 3, description: "Charger", quantity: 1, packed: true }
    ]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(idItem) {
        setItems((items) => items.filter(item => item.id !== idItem))
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} />
            <Stats />
        </div>
    )
}


