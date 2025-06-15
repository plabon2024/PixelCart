import { useRef, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router";

const Modal = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const modal = document.getElementById("my_modal_2");
  // const modalRef = useRef(null);
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(product.minquantity || 1);

  const handleBuy = async () => {
    if (quantity < product.minquantity) {
      modal.close();
      return Swal.fire({
        icon: "error",
        title: "Minimum quantity not met",
        text: `You must buy at least ${product.minquantity} units.`,
      });
    }
    if (product.mainquantity < product.minquantity) {
      modal.close();
      return Swal.fire({
        icon: "error",
        title: "sorry supply is short",
        text: `we have only  ${product.mainquantity} units.`,
      });
    }

  //   try {
  //     await axiosSecure.post(`${import.meta.env.VITE_baseurl}/order`, {
  //       productId: product._id,
  //       buyerName: user.displayName,
  //       buyerEmail: user.email,
  //       data: new Date().toLocaleDateString(),
  //       quantity,
  //     });

  //     await axiosSecure
  //       .patch(`${import.meta.env.VITE_baseurl}/products/${product._id}`, {
  //         quantity: -quantity,
  //       })
  //       .then(() => {
  //         modal.close();
  //         Swal.fire("Success", "Purchase successful!", "success");
  //         navigate(`${location.state ? location.state : "/cart"}`);
  //       });
  //   } catch (err) {
  //     Swal.fire("Error", err.message, "error");
  //   }
  // };
try {
  await axiosSecure.post(`${import.meta.env.VITE_baseurl}/order`, {
    productId: product._id,
    buyerName: user.displayName,
    buyerEmail: user.email,
    data: new Date().toLocaleDateString(),
    quantity,
  });

  await axiosSecure.patch(`${import.meta.env.VITE_baseurl}/products/${product._id}`, {
    quantity: -quantity,
  });

  modal.close();
  Swal.fire("Success", "Purchase successful!", "success");
  navigate(`${location.state ? location.state : "/cart"}`);
  
} catch (err) {
  modal.close();  // always close modal even on error
  Swal.fire("Error", err.message, "error");
}






  return (
    <dialog id="my_modal_2" className="modal z-0">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="space-y-5">
          <h3 className="font-bold text-lg">Checkout</h3>
          <p className="text-sm">Name: {user?.displayName}</p>
          <p className="text-sm">Email: {user?.email}</p>

          <div className="flex items-center gap-5">
            <button
              className="btn btn-outline"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              type="button"
            >
              -
            </button>

            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="text-xl font-semibold w-16 text-center border border-gray-300 rounded"
            />

            <button
              className="btn btn-outline"
              onClick={() => setQuantity((q) => q + 1)}
              type="button"
            >
              +
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary" onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
