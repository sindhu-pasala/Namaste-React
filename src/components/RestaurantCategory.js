import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category,isActive,updateMethod }) => {
  return category.title && category.itemCards ? (
    <div className="w-1/2 m-auto mb-2 border-b-1 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={() =>updateMethod()}>
        <span className="font-bold">
          {category.title}({category.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
        <div className="mt-2">
        {isActive && (category.itemCards.map((item) =>(
          <div>
            <ItemList data={item} key={item.card.info.id}/>
          </div>
            )))}
        </div>
      {/* <AccordionDetails>
            {category.itemCards.map((item) =>(
            <ItemList data={item}/>
            ))}
          </AccordionDetails>
        </Accordion> */}
    </div>
  ) : (
    <div></div>
  );
};

export default RestaurantCategory;
