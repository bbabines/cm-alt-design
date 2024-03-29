"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => {
	const [active, setActive] = useState("world-2");
	return (
		<section className={`${styles.paddings}`}>
			<a id="details"></a>
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col pt-10`}
			>
				<TypingText title={"| Details"} textStyles={"text-center"} />
				<TitleText
					title={
						<>
							Explore each section
							<br className="md:block" />
							of the platform.
						</>
					}
					textStyles="text-center"
				/>
				<div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							{...world}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};
export default Explore;
