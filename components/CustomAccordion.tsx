import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";
import { ReactNode } from "react";

function CustomAccordion({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <Accordion className="dark:bg-primary-dark dark:border-gray-100 dark:border">
      <AccordionSummary
        expandIcon={
          <MdOutlineExpandMore size={30} className="dark:text-ternary-light" />
        }
        className="dark:text-ternary-light"
      >
        {`[${title}]`}
      </AccordionSummary>
      <AccordionDetails>
        <div className="dark:text-ternary-light">{content}</div>
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
