

export default function PackingList({ items, onDeleteItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item, onDeleteItem }) {
    return (
        <li>
            <input type="checkbox" />
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity + ' '}
                {item.description}
                <button onClick={() => onDeleteItem(item.id)}>❌</button>
            </span>
        </li>
    );
}
