import { useState } from 'react';

const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript",
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components",
    },
    {
        id: 8832,
        question: "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX",
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "Props",
    },
    {
        id: 9103,
        question: "How to give components memory?",
        answer: "useState hook",
    },
    {
        id: 2002,
        question:
            "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element",
    },
];

export default function FlashCards() {
    const [indexQuestionClick, setIndexQuestionClick] = useState(-1);
    const [questionId, setQuestionId] = useState(0);

    function handleClick(index) {
        setIndexQuestionClick(index);

        if (questionId === questions[index].id) {
            setIndexQuestionClick(-1);
            setQuestionId(0)
        } else {
            setQuestionId(questions[index].id);
        }
    }


    return <div className="flashcards">
        {
            questions.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        onClick={() => handleClick(index)}
                        style={index === indexQuestionClick ? { backgroundColor: 'red', color: 'white' } : {}}
                    >
                        {index === indexQuestionClick ? item.answer : item.question}
                    </div>
                )
            })
        }
    </div>;
}


