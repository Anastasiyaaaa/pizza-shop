
import PizzaS from "../Pizza/PizzaS";
import Categories from "../Categories/Categories";
import PizzaBlock from "../Pizza/PizzaBlock";
import PizzaMain from "../Pizza/PizzaMain";
import CartPage from "../Cart/CartPage";


const Routes = {
    "/": () => <PizzaMain />,
    "/cart": () => <CartPage />,
    "/categories": () => <Categories />,
    '/pizza/:title': ({title}) => <PizzaS title={title} />,
    '/pizza/:title/:id': ({title,id}) => <PizzaS  title={title} id={id} />

};
export default Routes;
