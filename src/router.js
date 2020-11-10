
import Pizza from "./PizzaBlock";
import Categories from "./Categories";


const Routes = {
    "/": () => <Categories />,
    "/pizza": () => <Pizza />,
    '/pizza/:title': ({title}) => <Pizza title={title} />
};
export default Routes;
