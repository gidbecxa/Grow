import React, {useState, useEffect} from "react";
import {
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-number-input";

const ContactDetails = ({ handleSliderChangeBtn, setFormData, formData }) => {
  const [phonenumber, setPhonenumber] = useState()
  useEffect(() => {
    setFormData({...formData, phonenumber: phonenumber})
  }, [phonenumber])

  return (
    <TabPanel>
      
      <div className="space-y-6">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            placeholder="Email"
          />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Phone number</FormLabel>
          <p className="font-bold">choose country code</p>
            <PhoneInput
              international
              // value={formData.phonenumber}
              // onChange={handlePhonenumber}
              value={phonenumber}
              onChange={setPhonenumber}
              defaultCountry="NG"
            />
          {/* <InputGroup>
            <InputLeftAddon children="+234" />
            <Input
              value={formData.phonenumber}
              onChange={(event) =>
                setFormData({ ...formData, phonenumber: event.target.value })
              }
              type="tel"
              placeholder="phone number"
            />
          </InputGroup> */}
        </FormControl>
        <div className="mt-3 flex justify-between">
          <button
            className="px-9 startedBtn"
            onClick={() => handleSliderChangeBtn(0)}
          >
            Back
          </button>
          <button
            className="px-9 text-white bg-main startedBtn"
            onClick={() => handleSliderChangeBtn(2)}
          >
            Next
          </button>
        </div>
      </div>
    </TabPanel>
  );
};

export default ContactDetails;
