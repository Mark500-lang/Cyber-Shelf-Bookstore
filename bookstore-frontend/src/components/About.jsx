import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
    const [ref4, inView4] = useInView({
        triggerOnce: false,
        threshold: 0.2
    });

    const fadeInFromBottom = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <div className='bg-black'>
                <img src="./assets/image12.jpg" alt="home" className="hover:opacity-80 opacity-40 w-full h-[20rem] bg-blend-multiply bg-black-900 transition-all duration-200"/>
                <div className="container flex font-bold  flex-col mx-auto max-w-fit left-0 items-center justify-center px-20 absolute top-[33%] ">
                    <h1 className="text-white text-4xl/tight sm:text-5xl/tight lg:text-4xl/tight xl:text-5xl/tight ">
                    About Pine Lodge
                    </h1>    
                </div>
                
            </div>

            <motion.section
            ref={ref4}
            id='About'
            className="py-12"
            >
                <div className="container mx-auto md:px-24 px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div
                            className="md:w-1/2 mb-10 md:mb-0 px-4"
                        >
                            <motion.h2
                                initial="hidden"
                                animate={inView4 ? "visible" : "hidden"}
                                variants={fadeInFromBottom}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-3xl font-semibold mb-4">About Pine Grove</motion.h2>
                            <motion.p
                                initial="hidden"
                                animate={inView4 ? "visible" : "hidden"}
                                variants={fadeInFromBottom}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-slate-600 text-md">
                                Nestled amidst the lush greenery of Nairobi, Pine Grove Lodge offers a serene retreat from the vibrant city life. Our charming lodge blends rustic elegance with modern comforts to ensure a memorable stay. Whether you're seeking a romantic getaway, a family vacation, or a solo retreat, Pine Grove Lodge promises a rejuvenating experience amidst the tranquility of nature right in the heart of Nairobi.
                            </motion.p>
                            <motion.p
                                initial="hidden"
                                animate={inView4 ? "visible" : "hidden"}
                                variants={fadeInFromBottom}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className="text-slate-600 text-md my-4">
                                Our founders inspired by the transformative power of natural remedies, embarked on a mission to bring unadulterated wellness to every home. We understand that nature holds profound secrets for health and vitality, and our products are crafted to unlock these secrets in their most authentic form.
                            </motion.p>
                        </div>

                        <motion.div
                            initial="hidden"
                            animate={inView4 ? "visible" : "hidden"}
                            variants={fadeInFromBottom}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="md:w-1/2 w-full px-4"
                        >
                            <img
                                src="./assets/image16.jpg"
                                alt="About Spinflame"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                    <div className='my-5 text-3xl'>
                        <h1>
                            Ammenities
                        </h1>
                    </div>
                    <div className='my-5 text-3xl'>
                        <h1>
                            FAQs
                        </h1>
                    </div>
                </div>
            </motion.section>
        </>
        
    )
}

export default About;