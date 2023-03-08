import Image from "next/image";
import React, { useEffect } from "react";
import workout from "../../public/workout.png"
import suitcase from "../../public/suitcase.png"
import community from "../../public/crowd-of-users.png"
import rating from "../../public/rating.png"
import { useInView } from "react-intersection-observer"; //import {useInView} tells the dom when something is in viewport
import { motion, useAnimation } from "framer-motion"

// FRAMER MOTION VARIANTS
const headerVariant = {
  visible: { x: 0, opacity: 1, transition: { delay: .5, duration: .5 } },
  hidden: { x: -10, opacity: 0 },
};

const headerCaptionVariant = {
  visible: { x: 0, opacity: 1, transition: { delay: .5, duration: .8 } },
  hidden: { x: -10, opacity: 0 },
};

const featurePointsVariant = [
  {
    visible: { x: 0, opacity: 1, transition: { delay: 0, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .4, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .6, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .8, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  }
]

function Features() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("in view")
      control.start("visible"); //when in view,start the visible animation variant
    } else {
      control.start("hidden"); //else its hidden
      console.log("not in view")
    }
  }, [control, inView]);

  return (
    <section ref={ref} id="features" className="z-20 bg-white">
      <div className="container flex flex-col px-4 mx-auto pt-10 mb-20 space-y-12 md:space-y-0 md:flex-row">
      <div className="flex flex-col space-y-12 md:w-1/2">
        <motion.h2
          ref={ref}				//pass the ref to tell rio what is being checked
          variants={headerVariant} //pass in your variant
          initial="hidden"		//pass initial values
          animate={control}
          className="text-main max-w-md text-4xl font-bold text-center md:text-left"	//pass in control as it will be animated when element is in view
        >
          What is different about Grow
        </motion.h2>
        <motion.p
          ref={ref}
          variants={headerCaptionVariant}
          initial='hidden'
          animate={control}
          className="md:max-w-sm text-center text-main md:text-left"
        >
          Grow is the leading software developement school and community
          for French-speaking Africans. We are commited to helping millions of francophones with
          little to no coding experience become world-class certified software engineers.
        </motion.p>
      </div>

      <div className="flex flex-col space-y-8 md:w-1/2">
        <motion.div
          ref={ref}
          initial='hidden'
          animate={control}
          variants={featurePointsVariant[0]}
          className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-slate-400 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className=" bg-main w-10 h-10 flex justify-center items-center">
                <Image
                  priority
                  src={workout}
                  alt="workout-icon"
                />
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Unlock your potential and build a thriving career in Tech
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Unlock your potential and build a thriving career in Tech
            </h3>
            <p className="text-main">
              Looking to kickstart your career as a software engineer? Our bootcamps offer a comprehensive learning experience that equips you with the skills and knowledge you need to succeed in the tech industry.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={control}
          variants={featurePointsVariant[1]}
          className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-slate-400 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className=" bg-main w-10 h-10 flex justify-center items-center">
                <Image
                  priority
                  src={workout}
                  alt="workout-icon"
                />
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Expert instructors, cutting-edge programs, and hands-on projects
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Expert instructors, cutting-edge programs, and hands-on projects
            </h3>
            <p className="text-main">
              Our mission is to empower aspiring software engineers with the resources needed to achieve their goals. With expert instructors, cutting-edge curriculum, and hands-on projects, our bootcamp provides a transformative learning experience that prepares you for success in the fast-paced world of software development.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={control}
          variants={featurePointsVariant[2]}
          className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-slate-400 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className=" bg-main w-10 h-10 flex justify-center items-center">
                <Image
                  priority
                  src={workout}
                  alt="workout-icon"
                />
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Career support beyond the bootcamp
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Career support beyond the bootcamp
            </h3>
            <p className="text-main">
              We&apos;re dedicated to helping you achieve your career goals as a software engineer. We offer career guidance, job placement assistance, and mentorship opportunities to help you succeed in the tech industry. Our support doesn&apos;t end with the bootcamp - we&apos;re committed to your long-term success.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={control}
          variants={featurePointsVariant[3]}
          className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-slate-400 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className=" bg-main w-10 h-10 flex justify-center items-center">
                <Image
                  priority
                  src={workout}
                  alt="workout-icon"
                />
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                We are building a community
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              We are building a community
            </h3>
            <p className="text-main">
              What&apos;s more exciting than a community of developers? You have a question?
              You need support? Share with others. Help and learn from others. Team up with others
              for a project. And yet, enjoy socializing!
            </p>
          </div>
        </motion.div>

      </div>
    </div>
    </section >
  );
}

export default Features;
