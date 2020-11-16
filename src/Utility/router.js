
import PizzaS from "../Pizza/PizzaS";
import Categories from "../Categories/Categories";
import PizzaDetails from "../Pizza/PizzaDetails";
import PizzaBlock from "../Pizza/PizzaBlock";
import PizzaMain from "../Pizza/PizzaMain";


const Routes = {
    "/": () => <PizzaMain />,
    "/categories": () => <Categories />,
    '/pizza/:title': ({title}) => <PizzaS title={title} />,
    '/pizza/:title/:id': ({title,id}) => <PizzaDetails  title={title} id={id} />

};
export default Routes;
