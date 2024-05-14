// import Logo from './Logo';
// import Form from './Form';
// import PackingList from './PackingList';
// import Stats from './Stats';

import FlashCards from "./Projects/FlachCards";


// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
//     { id: 3, description: "Charger", quantity: 1, packed: true },
// ];


// export default function App() {
//     const [initialItems, setInitialItems] = useState([
//         { id: 1, description: "Passports", quantity: 2, packed: false },
//         { id: 2, description: "Socks", quantity: 12, packed: false },
//         { id: 3, description: "Charger", quantity: 1, packed: true },
//     ])

//     return (
//         <div className="app">
//             <Logo />
//             <Form setInitialItems={setInitialItems} initialItems={initialItems} />
//             <PackingList initialItems={initialItems} />
//             <Stats />
//         </div>
//     )
// }



export default function App() {
    return (
        <div className="App">
            <FlashCards />
        </div>
    );
}


