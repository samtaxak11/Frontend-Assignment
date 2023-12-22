import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  ButtonGroup,
  Button,

} from "@chakra-ui/react";

import InputField from "./InputField";

import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
import { useFormContext } from "../FormContext";

const FormComponent = ({ schema }) => {
  const { updateFormData } = useFormContext();

  useEffect(() => {
    updateFormData(schema.jsonKey, schema.subParameters[0].validate.defaultValue);
  }, []);

  const [selectedTab, setSelectedTab] = useState(
    schema.subParameters[0].validate.defaultValue
  );

  

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
   
    updateFormData(schema.jsonKey, tabValue);

    

  };

  const renderRadioButtons = (field) => {
    if (field.uiType === "Radio") {
      return (
        <FormControl isRequired={field.validate.required}>

          <ButtonGroup
            size="sm"
            isAttached
            variant="outline"
            value={selectedTab}
            onChange={(value) => handleTabChange(value)}
          >
            <HStack spacing={1}>
              {field.validate.options.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleTabChange(option.value)}
                  colorScheme={selectedTab === option.value ? "blue" : "gray"}
                >
                  {option.label}
                </Button>
              ))}
            </HStack>
          </ButtonGroup>
        </FormControl>
      );
    }
  };

  const renderSubParameters = (fields) => {
    return fields.map((schema) => {
      if (schema.uiType === "Ignore") {
        if (
          schema.conditions.some(
            (condition) =>
              condition.jsonKey === `pizza_type.type` &&
              condition.op === "==" &&
              condition.value === selectedTab &&
              condition.action === "enable"
          )
        ) {
          return renderSubParameters(schema.subParameters);
        }
      } else if (schema.uiType === "Select") {
        return <SelectField schema={schema} />;
      } else if (schema.uiType === "Input") {
        return <InputField schema={schema} />;
      } else if (schema.uiType === "Switch") {
        return <SwitchField schema={schema} />;
      }

      return null;
    });
  };

  return (
    <Box>
      <FormLabel>{schema.label}</FormLabel>
      {schema.subParameters.map((field) => renderRadioButtons(field))}
      {renderSubParameters(schema.subParameters)}
    </Box>
  );
};

export default FormComponent;
