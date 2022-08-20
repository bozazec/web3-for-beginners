import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'
import React, {ReactNode} from "react";

interface ServiceCardProps {
	color: string
	title: string
	icon: ReactNode
	subtitle: string
}

const ServiceCard = ({color, title, icon, subtitle}: ServiceCardProps) => {
	return <div
		className={'flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl text-white'}>
		<div className={`w-10 h-10 flex rounded-full justify-center items-center ${color}`}>{icon}</div>
		<div className={'ml-5 flex flex-col flex-1 '}>
			<h1 className={'mt-2 text-white text-lg'}>{title}</h1>
			<p className={'mt-2 text-white text-lg'}>{subtitle}</p>
		</div>
	</div>
}

const Services = () => {
	return <div className={'flex w-full justify-center items-center gradient-bg-services'}>
		<div className={'flex mf:flex-row flex-column items-center justify-between md:p-20 py-12 px-4'}>
			<div className={'flex-1 flex flex-col justify-start items-start'}>
				<h1 className={'text-white text-3xl sm:text-5xl py-2 text-gradient'}>Services that we
					<br/>
					continue to improve
				</h1>
			</div>
		</div>

		<div className={'flex-1 flex flex-col justify-center items-center'}>
			<ServiceCard
				color={'bg-[#2952E3]'}
				title={'Security Guaranteed'}
				subtitle={'Na kitarata, Vasko Zabata, toi šte sviri dragi gosti samo za vas.'}
				icon={<BsShieldFillCheck size={21}/>}
			/>
			<ServiceCard
				color={'bg-[#8945f8]'}
				title={'Best exchange rate'}
				subtitle={'Čuete melodii, hora, narodni pesni, ciganski čočeci sičkite sa lesni.'}
				icon={<BiSearchAlt size={21}/>}
			/>
			<ServiceCard
				color={'bg-[#F84550]'}
				title={'Fastest transactions'}
				subtitle={'Na mikrofona Ceca Mecata, tja šte pee dragi gosti samo za vas.'}
				icon={<RiHeart2Fill size={21}/>}
			/>
		</div>
	</div>
}

export default Services