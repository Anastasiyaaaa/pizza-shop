
import PizzaS from "../pizza/PizzaS";
import Categories from "../categories/Categories";
import PizzaBlock from "../pizza/PizzaBlock";
import PizzaMain from "../pizza/PizzaMain";
import CartPage from "../cart/CartPage";


const Routes = {
    "/": () => <PizzaMain />,
    "/cart": () => <CartPage />,
    "/categories": () => <Categories />,
    '/pizza/:title': ({title}) => <PizzaS title={title} />,
    '/pizza/:title/:id': ({title,id}) => <PizzaS  title={title} id={id} />

};
export default Routes;
