import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion({ handleOpen }) {
  const [curOpen, setCurOpen] = useState(null);

  // function openQuestion(e) {
  //   setOpenQn(e.target.value);
  //   console.log(openQn);
  //   return;
  // }
  return (
    <div className="accordion">
      {faqs.map((faqs, i) => (
        <AccordionItem
          question={faqs.title}
          number={i + 1}
          key={faqs.title}
          curOpen={curOpen}
          onCurOpen={setCurOpen}
        >
          {faqs.text}
        </AccordionItem>
      ))}{" "}
      <AccordionItem
        question={"Where do you buy the chairs from?"}
        number={25}
        key={faqs.title}
        curOpen={curOpen}
        onCurOpen={setCurOpen}
      >
        {faqs[0].text}
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ question, number, curOpen, onCurOpen, children }) {
  const open = number === curOpen;

  // const [open, setOpen] = useState(false);
  // function handleOpen(e) {
  //   return setOpen((open) => !open);
  // }
  return (
    <ul
      className={open === true ? "open item" : "item"}
      value={curOpen}
      onClick={() => onCurOpen(open ? null : number)}
    >
      <li>
        <div className="top">
          <p className="number">{number < 9 ? `0${number}` : number} </p>

          <p className={open ? "title text" : "title"}>{question}</p>

          <p className="icon">{open ? `-` : `+`}</p>
        </div>
        {open ? <div className="content-box">{children}</div> : null}
      </li>
    </ul>
  );
}
