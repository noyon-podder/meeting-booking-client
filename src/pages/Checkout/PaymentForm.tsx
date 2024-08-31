// const PaymentForm = ({ paymentInfo, onNext, onPrev }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);
//     onNext(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Step 2: Payment Information</h2>
//       <input
//         name="cardNumber"
//         placeholder="Card Number"
//         defaultValue={paymentInfo.cardNumber}
//         required
//       />
//       <input
//         name="expiryDate"
//         placeholder="Expiry Date"
//         defaultValue={paymentInfo.expiryDate}
//         required
//       />
//       {/* Additional payment fields */}
//       <button type="button" onClick={onPrev}>
//         Previous
//       </button>
//       <button type="submit">Next</button>
//     </form>
//   );
// };
// export default PaymentForm;

import { useState } from "react";
import UserInfoForm from "./UserInfoForm";
import PaymentForm from "./PaymentForm";
import SuccessView from "./SuccessView";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [roomInfo, setRoomInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleUserInfo = (info: any) => {
    setUserInfo(info);
    nextStep();
  };

  const handlePaymentInfo = (info: any) => {
    setPaymentInfo(info);
    nextStep();
  };

  return (
    <div>
      {step === 1 && (
        <UserInfoForm
          userInfo={userInfo}
          roomInfo={roomInfo}
          setRoomInfo={setRoomInfo}
          onNext={handleUserInfo}
        />
      )}
      {step === 2 && (
        <PaymentForm
          paymentInfo={paymentInfo}
          onNext={handlePaymentInfo}
          onPrev={prevStep}
        />
      )}
      {step === 3 && (
        <SuccessView
          userInfo={userInfo}
          roomInfo={roomInfo}
          paymentInfo={paymentInfo}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
