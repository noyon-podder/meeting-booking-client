// import react icons
import { CiTrash } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

// import { getUserInfo } from "../../../service/Auth.service";
import { Link } from "react-router-dom";
// import UserInfo from "./UserInfo";
// import Recipient from "./Recipient";
import { useContext, useState } from "react";
// import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
// import {
//   decrementQuantity,
//   incrementQuantity,
//   removeFromCart,
// } from "../../../redux/feature/cart/cartSlice";

// import ConfirmationModal from "../../../components/common/modal/ConfirmationModal";
import { IoCloseOutline } from "react-icons/io5";
// import { toast } from "react-toastify";
// import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "../../../utils/baseURL";
// import { AuthContext } from "../../../context/AuthProvider";
// import ProductNotFound from "../../../components/common/productNotFound/ProductNotFound";

const CheckoutPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);
  // const carts = useSelector((state) => state.cart.products);
  // const subTotal = useSelector((state) => state.cart.subtotal);
  const dispatch = useDispatch();
  const [addressUpdate, setAddressUpdate] = useState(false);
  // const { user } = useContext(AuthContext);

  // const { email } = getUserInfo();
  // const shippingCharge = useSelector((state) => state.cart.shippingCharge);

  // const { data: products = [] } = useQuery({
  //   queryKey: [`/api/v1/product`],
  //   queryFn: async () => {
  //     const res = await fetch(`${BASE_URL}/product`);
  //     const data = await res.json();
  //     return data;
  //   },
  // }); // get All Product

  // const { data: informations = [], refetch } = useQuery({
  //   queryKey: [`/api/v1/getMe/${user?.email}`],
  //   queryFn: async () => {
  //     const res = await fetch(`${BASE_URL}/getMe/${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // }); // get USER INFO

  // const openModal = (product) => {
  //   setData(product);
  //   setModalOpen(true);
  // };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const handleConfirm = () => {
  //   if (data) {
  //     dispatch(removeFromCart(data));
  //   }
  //   setModalOpen(false);
  // };

  // const closeConfirmModal = () => {
  //   setModalOpen(false);
  // };
  // const deliveryCharge = parseInt(shippingCharge);
  // let total = subTotal + deliveryCharge;
  // console.log(typeof shippingCharge);

  return (
    <div className="container py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <section className="overflow-y-auto space-y-5">
          <div className="bg-white py-[40px] px-[12px] rounded-lg shadow-md">
            {/* <UserInfo email={email} user={informations?.data} /> */}
          </div>
          <div className="bg-white py-[40px] px-[12px] rounded-lg shadow-md">
            <Recipient
              user={user}
              refetch={refetch}
              addressUpdate={addressUpdate}
              setAddressUpdate={setAddressUpdate}
            />
          </div>
          <div className="bg-white py-[40px] px-[12px] rounded-lg shadow-md">
            <Payment user={user} total={total} />
          </div>
        </section>
        <section className="bg-white px-10 p-5 w-3/4 mx-auto rounded sticky">
          <h2 className="text-center mb-10 tracking-normal leading-5 text-lg font-medium">
            Order Summary
          </h2>
          {carts.length > 0 ? (
            <div className="space-y-2 border-t pt-3">
              {carts.map((product, i) => (
                <div className="flex items-center gap-2 border-b pb-3" key={i}>
                  <div className="w-[70px] h-[70px] border rounded mr-3">
                    <img
                      src={product?.thumbnail_image}
                      alt={product?.title}
                      className="object-fill rounded"
                    />
                  </div>
                  <div className="flex flex-col flex-1 space-y-2">
                    <h2 className="text-sm tracking-tight leading-5">
                      {product?.title}
                    </h2>
                    <p className="flex gap-2 items-center">
                      <span className="text-sm tracking-tight leading-5">
                        {product?.color}
                      </span>
                      <span className="text-sm tracking-tight leading-5">
                        {product?.size}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">BDT {product?.price}.00</p>
                    <div
                      className={`flex items-center justify-center border rounded-md px-2`}
                    >
                      {carts.find(
                        (selectedItem) =>
                          selectedItem.size === product?.size &&
                          selectedItem.productId === product?.productId
                      )?.quantity === 1 && (
                        <button
                          onClick={() => {
                            openModal(product);
                          }}
                          className="text-error-200 px-1 py-1 border rounded hover:bg-bgray-300"
                        >
                          <CiTrash />
                        </button>
                      )}
                      {carts.find(
                        (selectedItem) =>
                          selectedItem.size === product?.size &&
                          selectedItem.productId === product?.productId
                      )?.quantity > 1 && (
                        <button
                          onClick={() => dispatch(decrementQuantity(product))}
                          className="text-bgray-700 px-1 py-1 border rounded hover:bg-bgray-300"
                        >
                          <FiMinus />
                        </button>
                      )}
                      <span className="px-2 py-1">{product?.quantity}</span>
                      <button
                        onClick={() => {
                          if (
                            products?.data
                              ?.find(
                                (singleProduct) =>
                                  singleProduct?._id === product?.productId
                              )
                              .size_variation.find(
                                (sizeItem) => sizeItem.size === product?.size
                              ).quantity === product?.quantity
                          ) {
                            toast.error(
                              "Max Stock Selected/Shortage of Stock",
                              {
                                autoClose: 3000,
                              }
                            );
                          } else dispatch(incrementQuantity(product));
                        }}
                        className="text-bgray-700 px-2 py-2 border rounded hover:bg-bgray-300"
                      >
                        <GoPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ProductNotFound />
          )}
          <Link
            to={`/all`}
            className="block w-full text-center py-3 text-white bg-black hover:bg-opacity-70 rounded mt-4"
          >
            Shop More
          </Link>
          <div className="overflow-x-auto mt-5">
            <table className="min-w-1/2 ml-auto divide-y-2 divide-gray-200 bg-white text-sm">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py- font-medium text-gray-900">
                    Sub-Total
                  </td>
                  <td className="whitespace-nowrap px-4 py- text-gray-700">
                    BDT
                  </td>
                  <td className="whitespace-nowrap px-4 py- text-gray-700">
                    ৳{subTotal}.00
                  </td>
                </tr>

                {/* <tr>
                  <td className="whitespace-nowrap px-4 py- font-medium text-gray-900 uppercase">
                    Vat 5%
                  </td>

                  <td className="whitespace-nowrap px-4 py- text-gray-700">
                    BDT
                  </td>
                  <td className="whitespace-nowrap px-4 py- text-gray-700">
                    ৳{vat.toFixed(2)}
                  </td>
                </tr> */}

                <tr>
                  <td className="whitespace-nowrap px-4 py- font-medium text-gray-900">
                    Delivery Charge
                  </td>

                  <td className="whitespace-nowrap px-4 py- text-gray-700">
                    BDT
                  </td>
                  <td className="whitespace-nowrap px-4 py- text-gray-700">
                    ৳{deliveryCharge}.00
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py- font-medium text-gray-900">
                    Total
                  </td>

                  <td className="whitespace-nowrap px-4 py- text-gray-700 font-medium">
                    BDT
                  </td>
                  <td className="whitespace-nowrap px-4 py- text-gray-700 font-medium">
                    ৳{total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm">
            <span className="text-error-300">*</span> Add more items to reduce
            delivery charge
          </p>
        </section>
      </div>
      {/* ------ confirm modal ------ start */}

      <ConfirmationModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-6">
          <div className="flex justify-end">
            <button
              className="bg-bgray-900 hover:bg-bgray-700 text-white font-bold py-1 px-2 -mt-4 mb-2 -mr-4 rounded"
              onClick={closeConfirmModal}
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>
          <div>
            <p className="border-b pb-4 text-black">
              Are you sure you want to remove this item from cart?
            </p>
            <div className="flex justify-end mt-5">
              <button
                onClick={() => handleConfirm()}
                className="bg-bgray-900 px-7 py-3 text-white font-medium tracking-tight leading-5 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </ConfirmationModal>

      {/* ------ confirm modal ------ end */}
    </div>
  );
};

export default CheckoutPage;
