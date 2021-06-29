import React, { useEffect, useState } from 'react';

const initialData = [
	{
		type: 'cable',
		title: 'Cable Offers',
		plans: [
			{
				subtitle: 'Go Big',
				planName: 'Basic',
				price: '49.99',
				disText: [
					'Free Installation, DVR, Equipments, No Technician Charges Nor Any Heavy Deposits.Plenty to power your favorite devices and activities',
					'Premium Movie Channels like STARZ, HBO, CINEMAX FREE For the First 12 Months.',
				],
			},
			{
				subtitle: 'GO BIGGER',
				planName: 'Best',
				price: '59.99',
				disText: [
					'185+ Channels with all the LOCAL AREA NETWORKS available in your area and all in High Definition.',
					'Free "NFL Sunday Ticket"',
					'Power busy households with dozens of smart devices',
				],
			},
			{
				subtitle: 'Be Unstopable',
				planName: 'Gig Service',
				price: '69.99',
				disText: [
					'$50.00 Guaranteed VISA GIFT CARD FREE on the Successful Installation.',
					'185+ Channels with all the LOCAL AREA NETWORKS available in your area and all in High Definition.',
					'With Supports 360’ TV entertainment packages, there’s something for everyone.',
				],
			},
		],
	},
	{
		type: 'internet',
		title: 'Internet Offers',
		plans: [
			{
				subtitle: 'Go Big',
				planName: '50 Mbps',
				disText: [
					'Cable',
					'Great for households with as many as a dozen connected devices',
					'Worry-free browsing, surfing and streaming',
				],
			},
			{
				subtitle: 'GO BIGGER',
				planName: '500 Mbps',
				disText: [
					'Amp up what’s possible for work/school/gaming/streaming and more…at the same time!',
					'No lag with upload speeds as much as 25x faster than cable*',
					'Power busy households with dozens of smart devices',
				],
			},
			{
				subtitle: 'Be Unstopable',
				planName: 'Gig Service',
				disText: [
					'Never worry with lightning speed and incredible bandwidth',
					'Experience 25x the speed of cable**',
					'Powerful speeds to support your tech-forward household',
				],
			},
		],
	},
	{
		type: 'phone',
		title: 'Phone Offers',
		plans: [
			{
				subtitle: 'Go Big',
				planName: '50 Mbps',
				disText: [
					'Phone to power your favorite devices and activities',
					'Great for households with as many as a dozen connected devices',
					'Worry-free browsing, surfing and streaming',
				],
			},
			{
				subtitle: 'GO BIGGER',
				planName: '500 Mbps',
				disText: [
					'Amp up what’s possible for work/school/gaming/streaming and more…at the same time!',
					'No lag with upload speeds as much as 25x faster than cable*',
					'Power busy households with dozens of smart devices',
				],
			},
			{
				subtitle: 'Be Unstopable',
				planName: 'Gig Service',
				disText: [
					'Never worry with lightning speed and incredible bandwidth',
					'Experience 25x the speed of cable**',
					'Powerful speeds to support your tech-forward household',
				],
			},
		],
	},
];

export default function OfferCards({ tab }) {
	const [data] = useState({ ...initialData });

	return (
		<div>
			<div className="text-color-primary text-center">
				<h3>{data[tab].title}</h3>
			</div>
			<div className="card__container grid">
				{data[tab].plans.map(({ subtitle, planName, disText, price }) => (
					<article className="card__content grid">
						<div className="card__pricing">
							<div className="card__pricing-number">
								<span className="card__pricing-symbol">$</span>
								{price}
							</div>
							{/* <span className="card__pricing-month">/month</span> */}
						</div>
						<>
							<header className="card__header">
								<div className="card__header-circle grid">
									<img
										src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/free-coin.png"
										alt=""
										className="card__header-img"
									/>
								</div>

								<span
									className="card__header-subtitle"
									style={{ color: '#1CB68B' }}
								>
									{subtitle}
								</span>
								<h3 className="card__header-title">{planName}</h3>
							</header>

							<ul className="card__list grid">
								{disText.map((n) => (
									<li className="card__list-item">
										<i className="uil uil-check card__list-icon"></i>
										<p className="card__list-description">{n}</p>
									</li>
								))}
								{/* <li className="card__list-item">
									<i className="uil uil-check card__list-icon"></i>
									<p className="card__list-description">
										Great for households with as many as a dozen connected
										devices
									</p>
								</li>
								<li className="card__list-item">
									<i className="uil uil-check card__list-icon"></i>
									<p className="card__list-description">
										Worry-free browsing, surfing and streaming
									</p>
								</li> */}
							</ul>
						</>
					</article>
				))}
			</div>
		</div>
	);
}
