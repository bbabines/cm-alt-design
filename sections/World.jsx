"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<a id="connect"></a>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col pt-10`}
		>
			<TypingText title="| Connect" textStyles="text-center" />
			<TitleText
				title={
					<>
						The Cohering Minds platform connects people and computers so
						collectively we act more intelligently than ever before.
					</>
				}
				textStyles="text-center"
			/>

			<motion.div
				variants={fadeIn("up", "tween", 0.3, 1)}
				className="relative mt-[68px] flex w-full h-[550px]"
			>
				<img src="/map.png" alt="map" className="w-full h-full object-cover" />

				{/* Removed people as the art style clashed with no good alternatives */}

				{/* <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] hover:bg-[#49c6dd]">
					<img src="/people-01.png" alt="a router" className="w-full  h-full" />
				</div>

				<div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] hover:bg-green-300">
					<img src="/people-02.png" alt="people" className="w-full h-full" />
				</div>

				<div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] hover:bg-red-300">
					<img src="people-03.png" alt="people" className="w-full h-full" />
				</div> */}
			</motion.div>
		</motion.div>
	</section>
);

export default World;
