import { useState } from "react";

const newDatas = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

export default function App() {
    return (
        <div>
            <Accordion datas={newDatas} />
        </div>
    );
}

function Accordion({ datas }) {
    console.log(datas);
    return <div className="accordion">
        {
            datas.map((data, index) =>
                <AccordionItem data={data} index={index} key={index} />
            )
        }
    </div>;
}

function AccordionItem({ data, index }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleObject() {
        setIsOpen(!isOpen);
    }
    return (
        <div className={isOpen ? "item open" : "item"} onClick={toggleObject}>
            <p className="number">0{index + 1}</p>
            <p className="title">{data.title}</p>
            <p className="icon" >+</p>

            {
                isOpen && (<div className="content-box">
                    {data.text}
                </div>)
            }
        </div>
    )
}