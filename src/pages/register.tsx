import React, { useState, useEffect } from "react";
import { useForm } from '@formspree/react';
import { doc, setDoc, getDoc } from "firebase/firestore";
import fireStore from "../pages/api/firestore/api";
import { db } from "../firebase";
import Navbar from "../components/landingpage/Navbar";
import { useSession, signIn, signOut } from "next-auth/react"
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
// const ModalContext = createContext()
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import registerImg from "../public/register.jpeg";
import hero from "../public/hero.svg";
import PersonalDetails from "../components/regform/PersonalDetails";
import ContactDetails from "../components/regform/ContactDetails";
import ChooseCourse from "../components/regform/ChooseCourse";
import { useDisclosure } from "@chakra-ui/react";
import { async } from "@firebase/util";

const Register = () => {
  const [state, handleSubmit] = useForm('xdojgvkq');
  const [alert, setAlert] = useState("none")
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disable, setDisable] = useState()
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: 0,
    gender: "",
    experience: "",
    email: "",
    phonenumber: 0,
    level: "",
    program: "",
    referral: "",
  });



  const onSubmitRegForm = async () => {
    setLoading(true)
    try {
      const response = await setDoc(doc(db, "users", formData.email), formData);
      console.log(response)
      handleSubmit()
      if (state.succeeded) {
        setAlert("block")
        setLoading(false)
      }
      // signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
    } catch (err) {
      console.log("firestore error", err)
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
      <Navbar />
    <div style={{display: alert}}>
      <Alert
      zIndex='10'
      position='sticky'
      top='96px'
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
            Thanks for submitting your application. Our team will get back to you soon.
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
              Other levels will be able once the Entry-level has concluded the course duration. If you can't wait, you can join the waitlist and also automatically get an invite to our Community.
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
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
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
            <div className=" relative mr-7 w-1/2 md:flex hidden bg-[#448a9c] g-main">
              <div className="bg-white  w-full h-full absolute -left-5 border-[#448a9c] border-3 -bottom-5">
                <Image
                priority
                  layout="fill"
                  priority
                  src={hero}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-3 ">
              <Box>
                {/* <input
                    type="range"
                    min="0"
                    max="2"
                    value={tabIndex}
                    onChange={handleSliderChange}
                  />
                  <div>
                    <CheckCircleIcon />
                    <CheckCircleIcon />
                    <CheckCircleIcon />
                  </div> */}
                <Tabs index={tabIndex} isFitted variant='enclosed'>
                  <TabList>
                    <Tab >Personal details</Tab>
                    <Tab >Contact details</Tab>
                    <Tab >Choose course</Tab>
                  </TabList>
                  <TabPanels>
                    <PersonalDetails
                      formData={formData}
                      setFormData={setFormData}
                      handleSliderChangeBtn={handleSliderChangeBtn}
                    />
                    <ContactDetails
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
