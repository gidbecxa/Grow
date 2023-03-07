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
              <FormLabel>Prénom</FormLabel>
              <Input
              isDisabled={loading}
              type='name'
                value={formData.firstname}
                onChange={(event) =>
                  setFormData({...formData, firstname: event.target.value})}
                placeholder="Votre prénom ici" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Nom de famille</FormLabel>
              <Input
              value={formData.lastname}
              isDisabled={loading}
              onChange={(event) =>
                setFormData({...formData, lastname: event.target.value})}
                placeholder="Votre nom de famille ici"
              />
            </FormControl>
          </div>
          <FormControl isRequired>
            <FormLabel>Date de Naissance</FormLabel>
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
            <FormLabel as="legend">Sexe</FormLabel>
            <RadioGroup
              >
              <HStack
                value={formData.gender}
                onChange={(event) =>
                  setFormData({...formData, gender: event.target.value})}
                  defaultValue="Itachi"
                spacing="24px"
              >
                <Radio isDisabled={loading} value="Male">Homme</Radio>
                <Radio isDisabled={loading} value="Female">Femme</Radio>
                <Radio isDisabled={loading} value="Other">Autre</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">
            Avez-vous une expérience préalable du code ?
            </FormLabel>
            <RadioGroup defaultValue="No">
              <HStack
                spacing="24px"
                value={formData.experience}
                onChange={(event) =>
                  setFormData({...formData, experience: event.target.value})}
              >
                <Radio isDisabled={loading}  value="Yes">Oui</Radio>
                <Radio isDisabled={loading} value="No">Non</Radio>
                <Radio isDisabled={loading} value="Yes, but a little">Oui, mais peu</Radio>
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
