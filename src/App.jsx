import router from "./Routes";
import { SearchContext } from "./contexts/SearchQueryContext";
import { UserCartPageContext } from "./contexts/userCartContext";
import { ProductDataContext } from "./contexts/productContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <UserCartPageContext>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />
      <SearchContext>
        <ProductDataContext>
          <RouterProvider router={router} />
        </ProductDataContext>
      </SearchContext>
    </UserCartPageContext>
  );
}

export default App;
