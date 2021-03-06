import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import MyAccount from "./components/MyAccount/MyAccount";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./components/Home/Home";
import RegisteredUsers from "./components/Admin/RegisteredUsers/RegisteredUsers";
import Category from "./components/Admin/Category/Category";
import Product from "./components/Admin/Product/Product";
import Filtering from "./components/Admin/Filtering/Filtering";
import ManageCategories from "./components/Admin/ManageCategories/ManageCategories";
import ManageProducts from "./components/Admin/ManageProducts/ManageProducts";
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

function App() {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Home />} />
            
            <Route path="/my-account" element={<MyAccount />} />

            <Route path="/registered-users" element={<RegisteredUsers />} />

            <Route path="/category" element={<Category />} />

            <Route path="/product" element={<Product />} />
            
            <Route path="/filter" element={<Filtering />} />

            <Route path="/manage-products" element={<ManageProducts />} />

            <Route path="/manage-categories" element={<ManageCategories />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
