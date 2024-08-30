import { OptionType } from "@/types";
import React from "react";
import Select, { MultiValue, StylesConfig } from "react-select";

type TAvailabilitySlot = {
  _id: string;
  startTime: string;
  endTime: string;
};

type TMultiSelectProps = {
  availabilitySlots: TAvailabilitySlot[];
  selectedOption?: MultiValue<OptionType> | null;
  setSelectedOption: (option: MultiValue<OptionType> | null) => void;
};

const MultiSelect: React.FC<TMultiSelectProps> = ({
  availabilitySlots,
  selectedOption,
  setSelectedOption,
}) => {
  const isDarkMode = document.documentElement.classList.contains("dark");

  const customStyles: StylesConfig<OptionType, true> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "transparent" : "#ffffff",
      borderColor: isDarkMode ? "#0e2353" : "#d1d5db",
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#0e2353" : "#ffffff",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? isDarkMode
          ? "#0e2353"
          : "#e5e7eb"
        : isDarkMode
        ? "#0e2353"
        : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: isDarkMode ? "#0057B8" : "#f3f4f6",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#0e2353" : "#e5e7eb",
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: isDarkMode ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: isDarkMode ? "#0057B8" : "#f3f4f6",
        color: isDarkMode ? "#ffffff" : "#000000",
      },
    }),
  };

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
