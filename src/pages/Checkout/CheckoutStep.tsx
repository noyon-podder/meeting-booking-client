import { FaCheck } from "react-icons/fa";

const CheckoutStep = ({ step }: { step: number }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 ${
                step >= 1
                  ? "bg-color-baseColor "
                  : "bg-color-darkTextColor dark:bg-color-cardColor"
              }   flex items-center justify-center text-white rounded-full`}
            >
              {/*  */}

              {step >= 1 ? (
                <FaCheck />
              ) : (
                <h2 className="text-lg font-bold">{1}</h2>
              )}
            </div>
            <div
              className={`w-24 md:w-32 lg:w-56   h-[6px] ${
                step >= 1
                  ? "bg-color-baseColor "
                  : "bg-color-darkTextColor dark:bg-color-cardColor"
              }  `}
            ></div>
          </div>
          <div className="flex items-center">
            <div
              className={`w-10 h-10 ${
                step >= 2
                  ? "bg-color-baseColor "
                  : "bg-color-darkTextColor dark:bg-color-cardColor"
              }   flex items-center justify-center text-white rounded-full`}
            >
              {/*  */}

              {step >= 2 ? (
                <FaCheck />
              ) : (
                <h2 className="text-lg font-bold">{2}</h2>
              )}
            </div>
            <div
              className={`w-24 md:w-32 lg:w-56   h-[6px] ${
                step >= 2
                  ? "bg-color-baseColor "
                  : "bg-color-darkTextColor dark:bg-color-cardColor"
              }  `}
            ></div>
          </div>
          <div className="flex items-center">
            <div
              className={`w-10 h-10 ${
                step >= 3
                  ? "bg-color-baseColor "
                  : "bg-color-darkTextColor dark:bg-color-cardColor"
              }   flex items-center justify-center text-white rounded-full`}
            >
              {/*  */}

              {step >= 3 ? (
                <FaCheck />
              ) : (
                <h2 className="text-lg font-bold">{3}</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep;
