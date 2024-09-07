import { Card, CountryPill, MoneyPill, RegisterPill } from "@wnmx/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { CardGrid } from "../shared/CardGrid";
import { IconList } from "./IconList";

import chip from "../assets/chip.svg";
import registration from "./index.module.css";

import type { State, Tournament } from "../types";

type RegistrationProps = {
	tournament: Tournament;
};

const Registration = ({ tournament }: RegistrationProps) => {
	const {
		startDateLabel,
		icons,
		name,
		limit,
		nbPlayers,
		buyIn,
		prizepool,
		flag,
		isTopTournament = false,
	} = tournament;
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
		<Card className={registration.info} borderRadius="lg" state="info">
			{isTopTournament && <p className={registration.top}>TOP TOURNOI</p>}
			<Card
				as="article"
				borderRadius="lg"
				className={registration.container}
				hasShadow
				state={state}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				tabIndex={0}
			>
				<header className={registration.header}>
					<CountryPill country={flag} className={registration.countryPill} />
					<h2 className={registration.name}>{name}</h2>
					{isRegistred && (
						<motion.div
							className={registration.motionPill}
							animate={{
								opacity: [0, 0.5, 1],
								scale: [0.25, 0.5, 1],
							}}
							transition={{
								duration: 2,
							}}
						>
							<RegisterPill className={registration.in} />
						</motion.div>
					)}
				</header>
				<CardGrid className={registration.info}>
					<span className={registration.date}>{startDateLabel}</span>
					<IconList list={icons} />
					<span className={registration.text}>{limit}</span>
					<span className={registration.text}>{nbPlayers}</span>
					<span className={registration.text}>{`${buyIn} €`}</span>
					<div>
						<MoneyPill amount={prizepool} currency="€" />
					</div>
				</CardGrid>
				{isRegistred && (
					<motion.div
						className={registration.motionChip}
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
							alt="Vous êtes inscrit à ce tournoi"
							className={registration.chip}
						/>
					</motion.div>
				)}
			</Card>
		</Card>
	);
};

export { Registration };
