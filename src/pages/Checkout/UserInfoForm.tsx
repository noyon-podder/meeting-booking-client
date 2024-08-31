import { Button } from "@/components/ui/button";
import { TUserInfo } from "@/types";

type TUserInfoForm = {
  userInfo: TUserInfo | null;
  step: number;
  prevStep: () => void;
  nextStep: () => void;
};

const UserInfoForm = ({
  userInfo,
  step,
  prevStep,
  nextStep,
}: TUserInfoForm) => {
  return (
    <div>
      <div className="max-w-3xl p-5 my-14 border mx-auto bg-color-lightColor dark:bg-color-cardColor rounded-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold dark:text-color-darkHeading text-color-darkBaseColor ">
            User Information
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <label className="block  text-color-heading dark:text-color-darkHeading text-sm font-medium mb-4">
              Name
            </label>
            <input
              className="block  border px-4 py-3 dark:border-gray-700 rounded-sm w-full outline-none bg-transparent text-color-textColor dark:text-color-darkTextColor"
              id="name"
              type="text"
              value={userInfo?.name}
            />
          </div>

          <div>
            <label className="block  text-color-heading dark:text-color-darkHeading text-sm font-medium mb-4">
              Email Address
            </label>
            <input
              className="block  border px-4 py-3 dark:border-gray-700 rounded-sm w-full outline-none bg-transparent text-color-textColor dark:text-color-darkTextColor"
              id="email"
              type="text"
              value={userInfo?.email}
            />
          </div>

          <div>
            <label className="block  text-color-heading dark:text-color-darkHeading text-sm font-medium mb-4">
              Phone Number
            </label>
            <input
              className="block  border px-4 py-3 dark:border-gray-700 rounded-sm w-full outline-none bg-transparent text-color-textColor dark:text-color-darkTextColor"
              id="phone"
              type="text"
              value={userInfo?.phone}
            />
          </div>

          <div>
            <label className="block  text-color-heading dark:text-color-darkHeading text-sm font-medium mb-4">
              Present Address
            </label>
            <input
              className="block  border px-4 py-3 dark:border-gray-700 rounded-sm w-full outline-none bg-transparent text-color-textColor dark:text-color-darkTextColor"
              id="address"
              type="text"
              value={userInfo?.address}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="mt-10 flex items-center justify-between">
          <Button size={"sm"} onClick={prevStep} disabled={step === 1}>
            Previous
          </Button>
          {step < 3 ? (
            <Button size={"sm"} onClick={nextStep}>
              Next
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;
