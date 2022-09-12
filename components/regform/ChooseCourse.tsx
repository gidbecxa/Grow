import React from "react";
import {
  TabPanel,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Radio,
  RadioGroup,
  HStack,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

const ChooseCourse = ({
  handleSliderChangeBtn,
  onOpen,
  setFormData,
  formData
}) => {
  return (
    <TabPanel>
      <div className="space-y-8">
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Select your level</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack>
              <div
                value={formData.level}
                onChange={(event) =>
                  setFormData({ ...formData, level: event.target.value })
                }
                className="flex flex-wrap justify-between"
              >
                <Radio value="Entry-level">Entry-level</Radio>
                <Radio value="" isDisabled>
                  Junior
                </Radio>
                <Radio value="" isDisabled>
                  Intermediate
                </Radio>
                <div className="mt-4">
                  <Radio value="" isDisabled>
                    Senior
                  </Radio>
                </div>
              </div>
            </HStack>
          </RadioGroup>
          <FormHelperText>
            Only Entry-level is available.{" "}
            <span onClick={onOpen} className="cursor-pointer underline">
              Learn more
            </span>
          </FormHelperText>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Select a program</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack
            value={formData.program} 
            onChange={(event) => 
              setFormData({...formData, program: event.target.value})}  
              spacing="24px"
            >
              <Radio value="Web development">Web development</Radio>
              <Radio value="Android development">Android development</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">How did you find this program</FormLabel>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack
            value={formData.referral} 
            onChange={(event) => 
              setFormData({...formData, referral: event.target.value})}  
              spacing={[1, 5]} 
              direction={["column", "row"]}>
              <Radio value="LinkedIn">LinkedIn</Radio>
              <Radio value="Twitter">Twitter</Radio>
              <Radio value="Grow member">Grow member</Radio>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <div className="mt-3 flex justify-between">
          <button
            className="px-9 startedBtn"
            onClick={() => handleSliderChangeBtn(1)}
          >
            Back
          </button>
          <button className="text-white bg-main startedBtn"><Link href='/thank-you'>Done 🎉</Link></button>
        </div>
      </div>
    </TabPanel>
  );
};

export default ChooseCourse;
