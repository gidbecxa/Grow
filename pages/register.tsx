import React, {useState, useEffect} from "react";
import Navbar from "../components/landingpage/Navbar";
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
} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/hooks'
// const ModalContext = createContext()
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import registerImg from "../public/register.jpeg";
import PersonalDetails from "../components/regform/PersonalDetails";
import ContactDetails from "../components/regform/ContactDetails";
import ChooseCourse from "../components/regform/ChooseCourse";

const register = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    birthday: 0,
    gender: '',
    experience: '',
    email: '',
    phonenumber: 0,
    level: '',
    program: '',
    referral: ''
  })
  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };
  const handleSliderChangeBtn = (i) => {
    setTabIndex(parseInt(i, 10));
  };

  const  handleTabsChange = (index) => {
    setTabIndex(index);
  };
  useEffect(() => {
    console.log(formData)
  })
  return (
    <>
      <Navbar />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              labore deserunt nobis reiciendis repudiandae, aspernatur esse
              laboriosam iusto veritatis dolorum fuga amet harum asperiores
              fugiat natus quam vero accusamus ipsa.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <section id="register" className="container mx-auto mb-32 mt-16">
        <div className="max-w-6xl px-5 mx-auto md:mt-32 mb-10 text-center">
          <h2 className="md:text-6xl text-4xl font-bold text-center">Register!</h2>
        </div>
        <div className="border-2 border-[rgb(35,70,79)] border-3">
          <div className="flex max-w-[1000px] mx-auto md:p-10">
            <div className="w-1/3 md:flex hidden">
              {/* <Image
                src={registerImg}
                objectFit="cover"
                alt="a picture of the CEO and his team"
              /> */}
            </div>
            <div className="md:w-2/3 p-3 ">
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
                  <Tabs index={tabIndex} onChange={handleTabsChange}>
                    <TabList>
                      <Tab>Personal details</Tab>
                      <Tab>Contact details</Tab>
                      <Tab>Choose course</Tab>
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

export default register;
