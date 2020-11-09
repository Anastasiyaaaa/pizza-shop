
import Pizza from "./PizzaBlock";
import Categories from "./Categories";


const Routes = {
    "/": () => <Categories />,
    "/pizza": () => <Pizza />
};
export default Routes;
