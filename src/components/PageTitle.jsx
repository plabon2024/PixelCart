import { useLocation } from "react-router";
import { useEffect } from "react";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const titles = {
      "/": "wholesale-platform",
      "/allproduct": "All Product",
      "/cart": "Cart",
      "/myproduct": "My Product",
      "/categories": "Categories",
      "/login": "wholesale-platform-login",
      "/signup": "wholesale-platform-signup",
      "/addproduct": "wholesale-platform-Add Product",
    };

    if (titles[path]) {
      document.title = titles[path];
    }
     else if (path.startsWith("/upadateprocuct/")) {
      document.title = `wholesale-platform-Update Product`;
    }
     else if (path.startsWith("/product/")) {
      document.title = `wholesale-platform-Update Details`;
    }
     else {
      document.title = "Not Found Page";
    }
  }, [location]);

  return null;
};

export default PageTitle;
