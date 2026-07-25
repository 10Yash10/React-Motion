import React, { useRef } from 'react'
import Header from '../components/Header'
import { motion, useScroll, useTransform } from "motion/react";
import Cartoon from "../assets/Cartoon.png";


// Professional uses these values for more realistic effects.
// | Layer           | Y Movement |
// | --------------- | ---------: |
// | Background      |        -40 |
// | Decorative Blob |        -80 |
// | Image           |       -120 |
// | Heading         |       -160 |
// | CTA             |       -200 |



const L19 = () => {

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -300])

    const foregroundOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    const foregroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    return (
        <>
            <Header text="Lesson 19: Parallax Effect" />
            <div ref={heroRef} style={{ height: "200vh" }} className='flex flex-col gap-6 p-6'>
                <motion.div aria-label="background" style={{ y: backgroundY }} className='bg-blue-500 w-full h-full absolute top-0 left-0 -z-10'></motion.div>

                <motion.section style={{ y: foregroundY }}
                    className='w-full bg-amber-500 flex items-end justify-center'>
                    <div>

                        <h1 className='text-2xl font-bold'>Heading</h1>
                        <motion.p style={{ opacity: foregroundOpacity }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consectetur cumque? Sed ratione esse reprehenderit numquam deserunt fugit magni quam dicta fugiat voluptatem, expedita repellendus eligendi quo quis veniam! Eum voluptatum magni molestiae sapiente, laudantium, non quod commodi dicta illum aut magnam enim repellendus vitae inventore ut? Commodi sit, id ducimus asperiores praesentium atque in ratione perferendis et nihil, aliquid minima tenetur velit laboriosam dolor, illo reprehenderit? Excepturi asperiores, labore eius aliquid tempora id soluta magnam aspernatur dolorem illo enim dignissimos debitis minima amet iusto eligendi iste aperiam totam doloribus veritatis quisquam? </motion.p>
                    </div>
                    <motion.img style={{ y: foregroundY, opacity: foregroundOpacity }} src={Cartoon} className='h-80' alt="img" />
                </motion.section>

            </div>

            <Section2 />
        </>
    )
}

export default L19

const Section2 = () => {

    const section2ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: section2ref,
        offset: ['start center', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -300])

    const foregroundOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    const foregroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    return (
        <div ref={section2ref} className="relative flex flex-col" style={{ height: "200vh" }} >
            <div className='bg-rose-500 w-full h-full absolute' style={{ height: "100vh" }}>

                <motion.section style={{ y: foregroundY }}
                    className='w-full h-full flex items-center justify-center'>

                    <motion.img style={{ y: foregroundY, opacity: foregroundOpacity }} src={Cartoon} className='h-80' alt="img" />
                    <div>

                        <h1 className='text-2xl font-bold'>Heading</h1>
                        <motion.p style={{ opacity: foregroundOpacity }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consectetur cumque? Sed ratione esse reprehenderit numquam deserunt fugit magni quam dicta fugiat voluptatem, expedita repellendus eligendi quo quis veniam! Eum voluptatum magni molestiae sapiente, laudantium, non quod commodi dicta illum aut magnam enim repellendus vitae inventore ut? Commodi sit, id ducimus asperiores praesentium atque in ratione perferendis et nihil, aliquid minima tenetur velit laboriosam dolor, illo reprehenderit? Excepturi asperiores, labore eius aliquid tempora id soluta magnam aspernatur dolorem illo enim dignissimos debitis minima amet iusto eligendi iste aperiam totam doloribus veritatis quisquam? </motion.p>
                    </div>

                </motion.section>
            </div>
        </div>
    )
}