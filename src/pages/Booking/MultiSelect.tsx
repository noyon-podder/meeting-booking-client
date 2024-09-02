import { customStyles } from "@/styles/multiSelectStyle";
import { OptionType } from "@/types";
import React from "react";
import Select, { MultiValue } from "react-select";

type TAvailabilitySlot = {
  _id: string;
  startTime: string;
  endTime: string;
};

type TMultiSelectProps = {
  availabilitySlots?: TAvailabilitySlot[] | any;
  selectedOption?: MultiValue<OptionType> | null;
  setSelectedOption?: (option: MultiValue<OptionType> | null) => void;
};

const MultiSelect: React.FC<TMultiSelectProps> = ({
  availabilitySlots,
  selectedOption,
  setSelectedOption,
}) => {
  const isDarkMode = document.documentElement.classList.contains("dark");

  // Map availabilitySlots to react-select options
  const options: OptionType[] = availabilitySlots?.data?.map(
    (slot: TAvailabilitySlot) => ({
      value: slot._id,
      label: `${slot.startTime} - ${slot.endTime}`,
    })
  );

  return (
    <div className="App">
      <Select
        styles={customStyles}
        isMulti
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className={isDarkMode ? "dark" : ""}
        placeholder="Select availability slots"
      />
    </div>
  );
};

export default MultiSelect;
