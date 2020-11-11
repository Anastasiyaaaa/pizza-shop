
import PizzaS from "./PizzaS";
import Categories from "./Categories";


const Routes = {
    "/": () => <Categories />,
    "/pizza": () => <PizzaS />,
    '/pizza/:title': ({title}) => <PizzaS title={title} />
};
export default Routes;
