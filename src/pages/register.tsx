import React, { useState, useEffect } from "react";
import { useForm } from '@formspree/react';
import fireStore from "../pages/api/firestore/api";
import Navbar from "../components/landingpage/Navbar";
import { useSession, signIn, signOut } from "next-auth/react"
import { useFormspark } from "@formspark/use-formspark"
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  FormControl,
  FormHelperText,
  Input,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import hero from "../public/hero.svg";
import PersonalDetails from "../components/regform/PersonalDetails";
import ContactDetails from "../components/regform/ContactDetails";
import ChooseCourse from "../components/regform/ChooseCourse";
import { useDisclosure } from "@chakra-ui/react";
import Head from 'next/head'

const Register = () => {
  const [alert, setAlert] = useState("none")
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: 0,
    country: '',
    gender: "",
    experience: "",
    email: "",
    phonenumber: 0,
    level: "",
    program: "",
    referral: "",
  });
  const [submit, submitting] = useFormspark({
    formId: 'fNPOoNAN'
  })

  const onSubmitRegForm = async () => {
    setLoading(true)
    try {
      fireStore.put("Newusers", formData.email, formData)
      const data = formData
      await submit({ data })
      setAlert("block")
      setLoading(false)
      setFormData({
        firstname: "",
        lastname: "",
        birthday: 0,
        country: "",
        gender: "",
        experience: "",
        email: "",
        phonenumber: 0,
        level: "",
        program: "",
        referral: "",
      })
      setTabIndex(parseInt(0, 10));
    } catch (err) {
      // signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
      console.log("firestore error", err)
      setLoading(false)

    }
  }
  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };
  const handleSliderChangeBtn = (i, event) => {
    event.preventDefault()
    console.log(i)

    setTabIndex(parseInt(i, 10));
  };
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  const onCloseAlert = () => {
    console.log("alert show", alert)
    setAlert("none")
  }

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Grow is a French-speaking developer school and community for French-speaking Africans, to help French-speaking Africans launch their professional careers in web and mobile development." />
        <title>Register</title>
      </Head>
      <Navbar />
      <div style={{ display: alert, position: "sticky", top: "0", zIndex: "10" }}>
        <Alert
          zIndex='10'
          // position='sticky'
          // top='96px'
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thanks for submitting your application. Our team will get back to you soon via email.
          </AlertDescription>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onCloseAlert}
          />
        </Alert>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Grow 1.0 is launching <br />with Entry-level first</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Other levels will be able once the Entry-level has concluded the course duration. If you can&#39;t wait, you can join the waitlist and also automatically get an invite to our Community.
            </p>
            <FormControl mt={9}>
              <FormLabel>Your Email</FormLabel>
              <Input type='email' />
              <FormHelperText>Enter your email to get updates and to get an invite to our Community</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Join
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <section id="register" className="container mx-auto mb-32 mt-16">
        <div className="max-w-6xl px-5 mx-auto md:mt-32 mb-10 text-center">
          <h2 className="md:text-6xl text-4xl font-bold text-center">
            Register!
          </h2>
        </div>
        <div className="">
          <div className="flex  mx-auto md:p-10">
            <div className=" relative mr-7 w-1/2 md:flex hidden bg-[#01BAEF] g-main">
              <div className="bg-white  w-full h-full absolute -left-5 border-[#01BAEF] border-3 -bottom-5">
                <Image
                  priority
                  layout="fill"
                  src={hero}
                  objectFit="contain"
                  alt="hero-image"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-3 ">

              <Box>
                <Tabs index={tabIndex} isFitted variant='enclosed'>
                  <TabList>
                    <Tab >Personal details</Tab>
                    <Tab >Contact details</Tab>
                    <Tab >Choose course</Tab>
                  </TabList>
                  <TabPanels>
                    <PersonalDetails
                      loading={loading}
                      formData={formData}
                      setFormData={setFormData}
                      handleSliderChangeBtn={handleSliderChangeBtn}
                    />
                    <ContactDetails
                      loading={loading}
                      formData={formData}
                      setFormData={setFormData}
                      handleSliderChangeBtn={handleSliderChangeBtn}
                    />
                    <ChooseCourse
                      loading={loading}
                      onSubmitRegForm={onSubmitRegForm}
                      formData={formData}
                      setFormData={setFormData}
                      handleSliderChangeBtn={handleSliderChangeBtn}
                      onOpen={onOpen}
                    />
                  </TabPanels>
                </Tabs>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
