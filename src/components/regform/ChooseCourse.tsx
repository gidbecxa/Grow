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
  Spinner,
  Select
} from "@chakra-ui/react";
import Link from "next/link";

const ChooseCourse = ({
  handleSliderChangeBtn,
  onOpen,
  setFormData,
  formData,
  onSubmitRegForm,
  loading
}) => {

  return (
    <TabPanel>
      <form action="" onSubmit={(e) => handleSliderChangeBtn(1, e)}>
        <div className="space-y-8">
          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Select your level</FormLabel>
            <RadioGroup defaultValue="Itachi">
              <HStack spacing={5}>
                <div
                  value={formData.level}
                  onChange={(event) =>
                    setFormData({ ...formData, level: event.target.value })
                  }
                  className="flex space-x-8 justify-between"
                  
                >
                  <Radio value="Entry-level" isDisabled={loading}>Entry-level</Radio>
                  <Radio value="" isDisabled>
                    Junior
                  </Radio>
                  <Radio value="" isDisabled>
                    Intermediate
                  </Radio>
                  <div className="">
                    <Radio value="" isDisabled>
                      Senior
                    </Radio>
                  </div>
                </div>
              </HStack>
            </RadioGroup>
            <FormHelperText fontWeight={200} mt={7}>
              Only Entry-level is available.{" "}
              <span onClick={onOpen} className="cursor-pointer underline">
                Learn more
              </span>
            </FormHelperText>
          </FormControl>
          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Select a program</FormLabel>
            <RadioGroup defaultValue="Itachi">
              <Stack
                className='flex'
                value={formData.program}
                onChange={(event) =>
                  setFormData({ ...formData, program: event.target.value })}
                spacing="24px"
              >
                <Select isDisabled={loading} placeholder='Select program'>
                  <option value='Android development'>Android development</option>
                  <option value='Frontend development'>Frontend development</option>
                  <option value='Backend development'>Backend development</option>
                  <option value='Fullstack development'>Fullstack development</option>
                  <option value='DevOps development'>DevOps development</option>
                </Select>
              </Stack>
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
                  setFormData({ ...formData, referral: event.target.value })}
                spacing={[1, 5]}
                direction={["column", "row"]}>
                <Radio isDisabled={loading}  value="LinkedIn">LinkedIn</Radio>
                <Radio isDisabled={loading} value="Twitter">Twitter</Radio>
                <Radio isDisabled={loading} value="Grow member">Grow member</Radio>
                <Radio isDisabled={loading}  value="Other">Other</Radio>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <div className="mt-3 flex justify-between">
            <button
              className="px-9 startedBtn"
              onClick={(e) => handleSliderChangeBtn(1, e)}
            >
              Back
            </button>
            <button className="text-white bg-main startedBtn"
              style={{display: loading ? 'none' : 'block'}}
              onClick={onSubmitRegForm}
              disabled={loading}>
              Done 🎉
            </button>
            {loading ? <Spinner mt={4} label='submiting...' color='red.500' /> : null}
          </div>
        </div>
      </form>
    </TabPanel>
  );
};

export default ChooseCourse;
