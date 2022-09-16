import React from "react";
import Banner from "../components/landingpage/Banner";
import Footer from "../components/landingpage/Footer";
import Navbar from "../components/landingpage/Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";

function Programs() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center mb-52">
        <h2 className="text-6xl font-bold text-center">Programs</h2>
        <div className="mt-32 flex flex-col md:flex-row md:h-[400px]">
          <div className="md:w-1/2 ">
            <h2 className="text-5xl font-bold  md:text-left">
              Android developer entry-level
            </h2>
            <div className="md:w-1/2 mt-16">
              <Link href="/register">
                <div className=" md:block startedBtn mb-16">Register</div>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Description
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  This program marks your first step into becoming a
                  professional Android developer. It introduces you to the
                  fundamentals and essential concepts of the Android operating
                  system and developing working applications for Android. The
                  program begins with initiation courses and activities in which
                  you learn and familiarize yourself with Android development
                  terminologies, tools, technologies and best practices. You’ll
                  develop your first Android app and a series of other simple
                  Android app projects. Through these projects, you’ll get to
                  implement various Android development principles and
                  techniques. Towards the end of the course, you’ll learn to
                  publish your apps to Google Play store. You’ll also learn
                  about various ways to get your apps promoted to your targeted
                  audience, and how to monetize your apps.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Duration
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>6 weeks; 15 hrs/week</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Pricing
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>15000 FCFA - $22,2</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Course requirements
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />A
                      laptop computer
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      Android phone
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />A data
                      transferable USB cable
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      No degree or experience required
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="mt-32 flex  md:flex-row flex-col">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold  md:text-left">
              Web developer <br />
              entry-level
            </h2>
            <div className="md:w-1/2 mt-16">
              <Link href="/register">
                <div className=" md:block startedBtn mb-16">Register</div>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Description
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  This program marks your first step into becoming a
                  professional Web developer. It introduces you to the essential
                  concepts of the Internet, the Web and its applications. The
                  aim of this course is to equip you with fun damental skills
                  needed to build working and scalable web solutions and
                  services, for the real world. The program itself is an
                  initiation into life as a professinal web developer, through
                  intensive courses and projecs in which you learn and
                  familiarize yourself with web development languages such as
                  HTML, CSS and JavaScript; tools such as libraries and
                  frameworks; and also best practices as a web developer. You’ll
                  develop your first series of simple web projects, many of
                  which serve a specific purpose e.g. authentication forms.
                  Through these projects, you’ll get to implement various web
                  development principles and techniques. Towards the end of the
                  course, you’ll learn to deploy your web projects through
                  hosting and cloud services platforms. Trust us, this will be
                  one of your most interesting experiences as a pro dvelopr.
                  You’ll also learn about various ways to get your targeted
                  users, and the many ways to make money as a web developer.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Duration
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  6 weeks; 15 - 20 hrs/week
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Pricing
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>15000 FCFA - $22,2</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Course requirements
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />A
                      laptop computer
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />A
                      mobile phone
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      French-Speaking, must be able to read and write
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      No degree or experience required
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </>
  );
}

export default Programs;
