import React, { useState, useEffect } from "react";
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

const ContactDetails = ({ handleSliderChangeBtn, setFormData, formData, loading }) => {
  const [phonenumber, setPhonenumber] = useState()
  useEffect(() => {
    setFormData({ ...formData, phonenumber: phonenumber })
  }, [phonenumber])

  return (
    <TabPanel>
      <form action="" onSubmit={(e) => handleSliderChangeBtn(2, e)}>
        <div className="space-y-6">
          <FormControl isRequired>
            <FormLabel >Email</FormLabel>
            <Input
            isDisabled={loading}
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              placeholder="Votre email ici"
            />
            <FormHelperText>Nous ne partagerons jamais votre adresse email</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel >Quel est votre pays de résidence actuel ?</FormLabel>
            <Input
            isDisabled={loading}
              type="name"
              value={formData.country}
              onChange={(event) =>
                setFormData({ ...formData, country: event.target.value })
              }
              placeholder="Country of residence"
            />
          </FormControl>
          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Numéro</FormLabel>
            <p className="font-semibold">Choisir code du pays</p>
            <PhoneInput
              required
              international
              value={phonenumber}
              onChange={setPhonenumber}
              defaultCountry="NG"
            />
          </FormControl>
          <div className="mt-3 flex justify-between">
            <button
              className="px-9 text-white bg-main startedBtn"
              onClick={(e) => handleSliderChangeBtn(0, e)}
            >
              Retour
            </button>
            <button
              type="submit"
              className="px-9 text-white bg-main startedBtn"
            >
              Suivant
            </button>
          </div>
        </div>
      </form>
    </TabPanel>
  );
};

export default ContactDetails;
