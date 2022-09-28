import React, {useEffect} from 'react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const bannerCards =[
  {
    visible: { x: 0, opacity: 1, transition: { delay: 0, duration: .6 } },
    hidden: { x: -10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .4, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .6, duration: .6 } },
    hidden: { x: -10, opacity: 0 },
  },
  {
    visible: { x: 0, opacity: 1, transition: { delay: .8, duration: .6 } },
    hidden: { x: 10, opacity: 0 },
  }
]

import { CheckCircleIcon } from '@chakra-ui/icons'

const Pricing = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();
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
    <section 
    ref={ref}
    id='pricing' className=''>
      <div className="max-w-6xl px-5 mx-auto md:mt-32  text-center">
          <h2 className="md:text-6xl text-4xl font-bold text-center">
            Our Programs
          </h2>
        </div>
      <div className="container mx-auto px-4 pb-28">
        <motion.div 
        ref={ref}
        initial='hidden'
        animate={control}
        variants={bannerCards[0]}
        className='flex rounded-t-3xl md:rounded-l-3xl md:flex-row flex-col md:border-none border-2 border-black mt-20'>
          <div className='rounded-t-3xl md:rounded-l-3xl bg-[#FF4F4F] text-white md:w-1/3 h-full  p-9'>
            <h2 className='text-5xl font-bold'>Développeur Android</h2>
            <div className='my-7 '>
              <h3 className='text-lg'>Modules</h3>
              <div className='text-[14px] mt-2'>
                <List spacing={1}>
                  <ListItem>
                    <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='red.700' />
                    Kotlin
                  </ListItem>
                  <ListItem>
                    <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='red.700' />
                    Java
                  </ListItem>
                  <ListItem>
                    <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='red.700' />
                    Android Studio
                  </ListItem>
                  <ListItem>
                    <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='red.700' />
                    ...more
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                </List>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg'>Frais d&#39;inscription</h3>
              <p>15 000 FCFA</p>
            </div>
          </div>
          <div className='md:w-2/3 h-full  px-9 py-3'>
            <div>
              <div className='font-semibold  p-2 flex justify-around text-xl'>
                <h3>Niveux</h3>
                <h3>Price</h3>
              </div>
              <div className='border-2 border-black py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Niveau d&#39;Entrée </p>
                  <p className='text-xs'>08 semaines</p>
                </div>
                <p>33 600 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Junior developer</p>
                  <p className='text-xs'>10 semaines</p>
                </div>
                <p>97 200 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Senior developer </p>
                  <p className='text-xs'>10 semaines</p>
                </div>
                <p>145 800 FCFA</p>
              </div>
              <div className=' py-4 flex items-center justify-around'>
                {/* <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Frais global  &nbsp;</p>
                </div> */}
                <div className='flex justify-center items-center flex-col'>
                  <p><span className='font-bold'>Frais global &nbsp; &nbsp; &nbsp;</span>291 600 FCFA</p>
                  {/* <p>271 600 FCFA</p> */}
                  <div className=' flex justify-center flex-col items-center'>
                  <p className='mt-4 text-3xl font-bold'>270 000 FCFA </p>
                  <p>(paiement en entier)</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
        <motion.div 
        ref={ref}
        initial='hidden'
        animate={control}
        variants={bannerCards[1]}
        className='flex md:border-none rounded-t-3xl md:rounded-l-3xl md:flex-row flex-col border-2 border-black mt-20'>
          <div className='rounded-t-3xl md:rounded-l-3xl bg-[#448a9c] text-white md:w-1/3 h-full  p-9'>
            <h2 className='text-5xl font-bold'>Développeur Web </h2>
            <h2 className='mt-3 text-xl font-bold'>(Frontend / Backend)</h2>
            <div className='my-7 '>
              <h3 className='text-lg'>Modules</h3>
              <div className='flex  text-[14px] mt-2'>
                <div className=''>
                  <p className='mb-4 font-bold'>Frontend</p>
                  <List spacing={1}>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      HTML5/ CSS3/ Javascript
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      Tailwind CSS
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      React.js
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      Github and more
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                  </List>
                </div>
                <div>
                <p className='mb-4 font-bold'>Backend</p>
                  <List spacing={1}>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      HTML5/CSS3/JS
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      Python and PHP
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      MySQL and Firebase
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#244a53' />
                      Github and more
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                  </List>
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg'>Frais d&#39;inscription</h3>
              <p>15 000 FCFA</p>
            </div>
          </div>
          <div className='md:w-2/3 h-full  px-9 py-3'>
            <div>
              <div className='font-semibold  p-2 flex justify-around text-xl'>
                <h3>Niveux</h3>
                <h3>Price</h3>
              </div>
              <div className='border-2 border-black py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Niveau d&#39;Entrée </p>
                  <p className='text-xs'>06 semaines</p>
                </div>
                <p>30 200 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Junior developer</p>
                  <p className='text-xs'>06 semaines</p>
                </div>
                <p>78 000 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Intermédiaire developer</p>
                  <p className='text-xs'>08 semaines</p>
                </div>
                <p>78 000 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Senior developer </p>
                  <p className='text-xs'>10 semaines</p>
                </div>
                <p>78 800 FCFA</p>
              </div>
              <div className=' py-4 flex items-center justify-around'>
                {/* <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Frais global  &nbsp;</p>
                </div> */}
                <div className='flex justify-center items-center flex-col'>
                  <p><span className='font-bold'>Frais global &nbsp; &nbsp; &nbsp;</span>271 600 FCFA</p>
                  {/* <p>271 600 FCFA</p> */}
                  <div className=' flex justify-center flex-col items-center'>
                  <p className='mt-4 text-3xl font-bold'>241 300 FCFA </p>
                  <p>(paiement en entier)</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
        <motion.div 
        ref={ref}
        initial='hidden'
        animate={control}
        variants={bannerCards[2]}
        className='flex md:border-none rounded-t-3xl md:rounded-l-3xl md:flex-row flex-col border-2 border-black mt-20'>
          <div className='rounded-t-3xl md:rounded-l-3xl bg-[#66cee8] text-white md:w-1/3 h-full  p-9'>
            <h2 className='text-5xl font-bold'>Développeur Web </h2>
            <h2 className='mt-3 text-xl font-bold'>(Fullstack)</h2>
            <div className='my-7 '>
              <h3 className='text-lg'>Modules</h3>
              <div className='flex  text-[14px] mt-2'>
                  <List spacing={1}>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      HTML5/ CSS3/ Javascript
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      Node.js and PHP
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      Express.js and databases
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      Github and more
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                  </List>
            </div>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg'>Frais d&#39;inscription</h3>
              <p>15 000 FCFA</p>
            </div>
          </div>
          <div className='md:w-2/3 h-full  px-9 py-3'>
            <div>
              <div className='font-semibold  p-2 flex justify-around text-xl'>
                <h3>Niveux</h3>
                <h3>Price</h3>
              </div>
              <div className='border-2 border-black py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Niveau d&#39;Entrée </p>
                  <p className='text-xs'>06 semaines</p>
                </div>
                <p>30 200 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Junior developer</p>
                  <p className='text-xs'>06 semaines</p>
                </div>
                <p>75 400 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Intermédiaire developer</p>
                  <p className='text-xs'>08 semaines</p>
                </div>
                <p>90 600 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Senior developer </p>
                  <p className='text-xs'>08 semaines</p>
                </div>
                <p>90 600 FCFA</p>
              </div>
              <div className=' py-4 flex items-center justify-around'>
                {/* <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Frais global  &nbsp;</p>
                </div> */}
                <div className='flex justify-center items-center flex-col'>
                  <p><span className='font-bold'>Frais global &nbsp; &nbsp; &nbsp;</span>301 600 FCFA</p>
                  {/* <p>271 600 FCFA</p> */}
                  <div className=' flex justify-center flex-col items-center'>
                  <p className='mt-4 text-3xl font-bold'>282 200 FCFA </p>
                  <p>(paiement en entier)</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
        <motion.div 
        ref={ref}
        initial='hidden'
        animate={control}
        variants={bannerCards[3]}
        className='flex md:border-none rounded-t-3xl md:rounded-l-3xl md:flex-row flex-col border-2 border-black mt-20'>
          <div className='rounded-t-3xl md:rounded-l-3xl bg-[rgb(35,70,79)] text-white md:w-1/3 h-full  p-9'>
            <h2 className='text-5xl font-bold'>Développeur Cloud-Web </h2>
            <h2 className='mt-3 text-xl font-bold'>(DevOps)</h2>
            <div className='my-7 '>
              <h3 className='text-lg'>Modules</h3>
              <div className='flex  text-[14px] mt-2'>
                  <List spacing={1}>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      HTML5/ CSS3/ Javascript
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      Node.js and Express.js
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      AWS, GoogleCloud,Azure
                    </ListItem>
                    <ListItem>
                      <ListIcon mb='1' as={CheckCircleIcon} boxSize={3} color='#448a9c' />
                      Github and more
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                  </List>
            </div>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg'>Frais d&#39;inscription</h3>
              <p>15 000 FCFA</p>
            </div>
          </div>
          <div className='md:w-2/3 h-full  px-9 py-3'>
            <div>
              <div className='font-semibold  p-2 flex justify-around text-xl'>
                <h3>Niveux</h3>
                <h3>Price</h3>
              </div>
              <div className='border-2 border-black py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Niveau d&#39;Entrée </p>
                  <p className='text-xs'>06 semaines</p>
                </div>
                <p>30 200 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Junior developer</p>
                  <p className='text-xs'>06 semaines</p>
                </div>
                <p>96 500 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Intermédiaire developer</p>
                  <p className='text-xs'>08 semaines</p>
                </div>
                <p>97 500 FCFA</p>
              </div>
              <div className='border-2 border-black border-t-0 py-4 flex items-center justify-around'>
                <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Senior developer </p>
                  <p className='text-xs'>08 semaines</p>
                </div>
                <p>97 500 FCFA</p>
              </div>
              <div className=' py-4 flex items-center justify-around'>
                {/* <div className='flex justify-center items-center flex-col'>
                  <p className='font-bold'>Frais global  &nbsp;</p>
                </div> */}
                <div className='flex justify-center items-center flex-col'>
                  <p><span className='font-bold'>Frais global &nbsp; &nbsp; &nbsp;</span>271 600 FCFA</p>
                  {/* <p>271 600 FCFA</p> */}
                  <div className=' flex justify-center flex-col items-center'>
                  <p className='mt-4 text-3xl font-bold'>241 300 FCFA </p>
                  <p>(paiement en entier)</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing