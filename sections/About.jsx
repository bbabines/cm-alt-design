"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";

const About = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<div className="gradient-02 z-0" />
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TypingText title="| About" textStyles="text-center" />

			<motion.p
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
			>
				Connecting computers and people so collectively we act more
				intelligently than ever before! Every individual, organization, or group
				could thrive more successfully if it tapped into a bigger mind drawing
				on the brain power of other people and machines.
			</motion.p>
			<motion.img
				variants={fadeIn("up", "tween", 0.3, 1)}
				src="./arrow-down.svg"
				className="w-[18px] h-[28px] object-contain mt-[28px]"
			></motion.img>
		</motion.div>
	</section>
);

export default About;
