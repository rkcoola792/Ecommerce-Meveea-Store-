import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const CartNew = () => {
  // Assuming the Redux state structure, replace this with your actual state
  // const { cartItems } = useSelector((state) => state.cart);

  const cartItems = []; // Temporary array for demonstration
  //   const subtotal = useMemo(() => {
  //     return cartItems.reduce((acc, curr) => acc + curr.attributes.price, 0);
  //   }, [cartItems]);

  return (
    <div className="w-full md:py-12">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cart
            </div>
          </div>
          {/* Cart content starts here */}
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            {/* Cart items start here */}
            <div className="flex-[2]">
              <div className="text-lg font-bold">Cart Items</div>
              {cartItems?.map((ele) => ({
                /* <CartItems item={ele} key={ele.id} /> */
              }))}
            </div>
            {/* Cart items end here */}

            {/* Summary starts */}
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summary</div>
              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                <div className="flex justify-between">
                  <div className="left-heading uppercase text-base md:text-lg font-medium">
                    <p>Subtotal</p>
                  </div>
                  <div className="right-price text-base md:text-lg font-medium">
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                </div>
                <div className="text-sm md:text-base py-5 border-t mt-5">
                  <p>
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </p>
                </div>
              </div>
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                <p>Checkout</p>
              </button>
            </div>
            {/* Summary ends */}
          </div>
        </div>
      ) : (
        <div className="empty-cart flex-[2] flex flex-col items-center pb-[20px] md:-mt-8">
          <img
            src="/img/empty-cart.jpg"
            alt="Empty Cart"
            height={300}
            width={300}
            className="w-[250px] md:w-[350px]"
          />
          <span className="text-xl font-bold mt-4">Your cart is empty</span>
          <span className="text-center mt-2 text-sm md:text-base font-oswald">
            <p>Looks like you have not added anything to your cart.</p>
            <p>Go ahead and explore the categories.</p>
          </span>
          <Link
            to="/"
            className="py-3 px-6 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mt-6 hover:opacity-75"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartNew;
