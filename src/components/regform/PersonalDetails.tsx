// @ts-nocheck - may need to be at the start of file
import React, { useEffect, useState } from "react";
import {
    TabPanel,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Radio,
    RadioGroup,
    HStack
} from "@chakra-ui/react"


const PersonalDetails = ({ handleSliderChangeBtn, formData, setFormData, loading }: any) => {
  
  return (
    <TabPanel>
        <form action="" onSubmit={(e) => handleSliderChangeBtn(1, e)}>
        <div className="space-y-8">
          <div className="flex space-x-2">
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
              isDisabled={loading}
              type='name'
                value={formData.firstname}
                onChange={(event) =>
                  setFormData({...formData, firstname: event.target.value})}
                placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
              value={formData.lastname}
              isDisabled={loading}
              onChange={(event) =>
                setFormData({...formData, lastname: event.target.value})}
                placeholder="Last name"
              />
            </FormControl>
          </div>
          <FormControl isRequired>
            <FormLabel>Birthday</FormLabel>
            <Input
            value={formData.birthday}
            isDisabled={loading}
            onChange={(event) =>
              setFormData({...formData, birthday: event.target.value})}
              placeholder="Your birthday"
              size="md"
              type="date"
            />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Gender</FormLabel>
            <RadioGroup
              >
              <HStack
                value={formData.gender}
                onChange={(event) =>
                  setFormData({...formData, gender: event.target.value})}
                  defaultValue="Itachi"
                spacing="24px"
              >
                <Radio isDisabled={loading} value="Male">Male</Radio>
                <Radio isDisabled={loading} value="Female">Female</Radio>
                <Radio isDisabled={loading} value="Other">Others</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">
              Do you have previous coding experience
            </FormLabel>
            <RadioGroup defaultValue="No">
              <HStack
                spacing="24px"
                value={formData.experience}
                onChange={(event) =>
                  setFormData({...formData, experience: event.target.value})}
              >
                <Radio isDisabled={loading}  value="Yes">Yes</Radio>
                <Radio isDisabled={loading} value="No">No</Radio>
                <Radio isDisabled={loading} value="Yes, but a little">Yes, but a little</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <div className="flex mt-3 justify-end">
            <button 
            type="submit" 
            className="text-white bg-main px-9 startedBtn" 
            // onClick={() => handleSliderChangeBtn(1)}
            >
              Next
            </button>
          </div>
        </div>
    </form>
      </TabPanel>
  );
};

export default PersonalDetails;
