import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import { useState } from 'react';


export default function App() {
    const [items, setItems] = useState([
        { id: 1, description: "Passports", quantity: 2, packed: false },
        { id: 2, description: "Socks", quantity: 12, packed: false },
        { id: 3, description: "Charger", quantity: 1, packed: false }
    ]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(idItem) {
        setItems((items) => items.filter(item => item.id !== idItem))
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            ))
    }

    function handleDeleteAllItems() {
        const confirmed = window.confirm(
            'Are you sure you want to delete all items?'
        );

        if (confirmed) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onClearList={handleDeleteAllItems}
                onToggleItem={handleToggleItem}
            />
            <Stats items={items} />
        </div>
    )
}






// function CheckboxComponent() {
//     const [isChecked, setIsChecked] = useState(true); // Définir l'état initial à true pour que la case soit cochée par défaut

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     };

//     console.log(isChecked);

//     return (
//         <div>
//             <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={handleCheckboxChange}
//             />
//             <label>Case à cocher</label>
//         </div>
//     );
// }


