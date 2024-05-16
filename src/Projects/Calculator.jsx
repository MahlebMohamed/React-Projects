import { useState } from "react";

export default function Calculator() {
    const [bill, setBill] = useState(null);
    const [service, setService] = useState(0);
    const [friendService, setFriendService] = useState(0);

    console.log(bill, service, friendService);

    const tip = (Number(bill) * ((Number(service) + Number(friendService)) / 2)) / 100;
    const pay = Number(bill) + tip;

    return (
        <div>
            <form>
                <div>
                    <p>How much was the bill?</p>
                    <input
                        type="text"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                    />
                </div>
                <div>
                    <p>How did you like the service?</p>
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    >
                        <option value={0}>Dissatisfied (0%)</option>
                        <option value={5}>it was Okey (5%)</option>
                        <option value={10}>it was good (10%)</option>
                        <option value={20}>Absolutely amazing! (20%)</option>
                    </select>
                </div>
                <div>
                    <p>How did your friend like the service?</p>
                    <select
                        value={friendService}
                        onChange={(e) => setFriendService(e.target.value)}
                    >
                        <option value={0}>Dissatisfied (0%)</option>
                        <option value={5}>it was Okey (5%)</option>
                        <option value={10}>it was good (10%)</option>
                        <option value={20}>Absolutely amazing! (20%)</option>
                    </select>
                </div>

                <h2> {
                    (bill !== null || service !== 0 || friendService !== 0) ? (`You pay $${pay} ($${bill} + $${tip} tip)`) : ''
                } </h2>

                <button onClick={() => {
                    setBill(null)
                    setService(0)
                    setFriendService(0)
                }}>Reset</button>
            </form>
        </div>
    );
}
