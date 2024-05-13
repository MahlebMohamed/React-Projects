import { useState } from "react";


export default function App() {
    // const joursSemaine = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const moisAnnee = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    // function getDate() {
    //     const today = new Date(2027, 6, 20);
    //     today.setDate(today.getDate() + count);

    //     const jour = today.getDate() + 1;
    //     const mois = today.getMonth(); // Les mois sont indexés à partir de 0
    //     const annee = today.getFullYear();
    //     const day = today.getDay();

    //     return { jour, mois, annee, day };
    // }

    // let { jour, mois, annee, day } = getDate();

    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + count);

    return (
        <>
            <div className="step">
                <button onClick={() => setStep(step - 1)}>-</button>
                <p>Step: {step} </p>
                <button onClick={() => setStep(step + 1)}>+</button>
            </div>

            <div className="count">
                <button onClick={() => setCount(count - step)}>-</button>
                <p>Count: {count} </p>
                <button onClick={() => setCount(count + step)}>+</button>
            </div>

            {/* <p>
                {count === 0 && 'Today is Mon Jun 21 2027'}
                {count > 0 && `${count} days from today is ${joursSemaine[day]} ${moisAnnee[mois]}  ${jour} ${annee} `}
                {count < 0 && `${count * (-1)} days ago was ${joursSemaine[day]} ${moisAnnee[mois]}  ${jour} ${annee}`}
            </p> */}
            <p>
                {
                    count === 0 ? 'Today is ' : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `
                }
                {date.toDateString()}
            </p>
        </>
    )
}


// CSS
// @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: 'Roboto Mono', sans-serif;
//   color: #252525;
//   font-weight: 400;
//   background-color: #f7f2e9;
//   border-bottom: 1.6rem solid #edc84b;
//   min-height: 100vh;
//   margin: 1.2rem;
//   text-align: center;
// }

// div.step {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 10px;
//   gap: 5px;
// }

// div.count {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 10px;
//   gap: 5px;
// }

// button {
//   padding: 7px 20px;
//   border-radius: 10px;
//   font-size: 15px;
//   cursor: pointer;
// }