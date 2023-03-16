"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";

const Insights = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<a id="data"></a>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col pt-10`}
		>
			<TypingText title="| Data " textStyles="text-center" />
			<TitleText
				title="How will knowledge be navigated?"
				textStyles="text-center"
			/>
			<div className="mt-[50px] flex flex-col gap-[30px]">
				{insights.map((insight, index) => (
					<InsightCard
						key={`insight-${index}`}
						{...insight}
						index={index + 1}
					/>
				))}
			</div>
		</motion.div>
	</section>
);

export default Insights;
