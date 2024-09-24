import { Card, CountryPill, MoneyPill, RegisterPill } from "@rah/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { CardGrid } from "../shared/CardGrid";
import { PowerList } from "./PowerList";

import chip from "../assets/chip.svg";
import style from "./index.module.css";

import type { Hero, State } from "../types";

type heroProps = {
	hero: Hero;
};

const HeroCard = ({ hero }: heroProps) => {
	const {
		startDateLabel,
		powers,
		name,
		limit,
		nbPlayers,
		price,
		flag,
		isTopHero = false,
	} = hero;
	const [isRegistred, setIsRegistred] = useState(false);
	const state: State = isRegistred ? "success" : "neutral";

	const handleClick = () => {
		setIsRegistred(!isRegistred);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		console.log(event.key);
		if (event.key === "Enter") {
			setIsRegistred(!isRegistred);
		}
	};

	return (
		<Card className={style.info} borderRadius="lg" state="info">
			{isTopHero && <p className={style.top}>TOP HERO</p>}
			<Card
				as="article"
				borderRadius="lg"
				className={style.container}
				hasShadow
				state={state}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				tabIndex={0}
			>
				<header className={style.header}>
					<CountryPill country={flag} className={style.countryPill} />
					<h2 className={style.name}>{name}</h2>
					{isRegistred && (
						<motion.div
							className={style.motionPill}
							animate={{
								opacity: [0, 0.5, 1],
								scale: [0.25, 0.5, 1],
							}}
							transition={{
								duration: 2,
							}}
						>
							<RegisterPill className={style.in} />
						</motion.div>
					)}
				</header>
				<CardGrid className={style.info}>
					<span className={style.date}>{startDateLabel}</span>
					<PowerList list={powers} />
					<span className={style.text}>{limit}</span>
					<span className={style.text}>{nbPlayers}</span>
					<div>
						<MoneyPill amount={price} currency="€" />
					</div>
				</CardGrid>
				{isRegistred && (
					<motion.div
						className={style.motionChip}
						animate={{
							opacity: [1, 0, 0],
							scale: [1, 0.75, 0],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
							times: [0, 0.8, 1],
						}}
					>
						<img
							src={chip}
							width="70"
							height="70"
							alt="Booked hero"
							className={style.chip}
						/>
					</motion.div>
				)}
			</Card>
		</Card>
	);
};

export { HeroCard };
