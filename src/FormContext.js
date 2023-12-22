// FormContext.js
import { createContext, useContext, useState } from "react";

// Create a context for managing form data and functions
const FormContext = createContext();

// Create a custom hook to use the FormContext
export const useFormContext = () => {

  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};

// Create a FormContextProvider component
export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  
  const updateFormData = (jsonKey, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [jsonKey]: value,
    }));
  };
  
  const handleResetData = () => {
    setFormData({});
  };
  
  // Pass the form data and functions as values to the context
  const contextValue = {
    formData,
    setFormData,
    updateFormData,
    handleResetData,
  };
  
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};
