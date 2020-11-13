
import PizzaS from "../Pizza/PizzaS";
import Categories from "../Categories/Categories";
import PizzaDetails from "../Pizza/PizzaDetails";
import PizzaBlock from "../Pizza/PizzaBlock";


const Routes = {
    "/": () => <Categories />,
    "/pizza": () => <PizzaS />,
    '/pizza/:title': ({title}) => <PizzaS title={title} />,
    '/pizza/:title/:id': ({title,id}) => <PizzaS  title={title} id={id} />

};
export default Routes;
