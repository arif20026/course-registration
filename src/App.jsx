
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (

    <>

      <Header></Header>

      <div className="md:flex">

      <Cards></Cards>
      <Cart></Cart>

      </div>
      


    </>




  );
};

export default App;