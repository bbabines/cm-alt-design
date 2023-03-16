"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants, slideIn } from "../utils/motion";
import { useState } from "react";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => {
		setOpenMenu((prevMenu) => !prevMenu);
	};

	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={`${styles.xPaddings} py-20 relative`}
		>
			<div className="absolute w-[50%] inset-0 gradient-01" />
			<div
				className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
			>
				<img
					src="/cm-logo.png"
					alt="M logo"
					className="w-[34px] h-[34px] rounded-full object-contain"
				/>
				<h2 className="max-sm:text-center font-extrabold text-[24px] leading-[30px] text-white">
					A Collective Intelligence Platform
				</h2>
				<img
					src={openMenu ? "/x.webp" : "/menu.svg"}
					alt="menu"
					className={`w-[24px] h-[24px] object-contain`}
					onClick={toggleMenu}
				/>
				<div
					className={`
				${openMenu === true ? styles.openMenu : styles.closedMenu}
				text-white`}
				>
					<p className="pt-[5px] m-[5px] hover:text-[#49c6dd] focus:ring-2 cursor-pointer text-center">
						<a href="#details">Details</a>
					</p>
					<p className="m-[5px] hover:text-[#49c6dd] focus:ring-2 cursor-pointer text-center">
						<a href="#values">Values</a>
					</p>
					<p className="m-[5px] hover:text-[#49c6dd] focus:ring-2 cursor-pointer text-center">
						<a href="#connect">Connect</a>
					</p>
					<p className="m-[5px] hover:text-[#49c6dd] focus:ring-2 cursor-pointer text-center">
						<a href="#data">Data</a>
					</p>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
