import React from "react";
import Accordion from "../Accordion";
import AccordionItem from "../AccordionItem";
const Aside = () => {
  return (
    <aside className="aside">
      <h3 className="aside__title">Video material</h3>
      <Accordion>
        <Accordion>
          <AccordionItem />
        </Accordion>
      </Accordion>
      <Accordion />
      <Accordion />
    </aside>
  );
};

export default Aside;
