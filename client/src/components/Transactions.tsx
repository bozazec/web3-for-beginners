import React, {useContext} from 'react'
import {TransactionContext} from "../context/TransactionContext";


const Transactions = () => {
	// @ts-ignore
	const {transactionCount, transactions, currentAccount} = useContext(TransactionContext)
	console.log('transactions', transactions)
	return <div className={'flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'}>
		<div className={'flex flex-col flex-full md:p-12 py-12 px-4'}>
			{currentAccount ? (<>
					<h3 className={'text-white text-3xl text-center my-2'}>Latest transactions</h3>

				</>
			) : (
				<h3 className={'text-white text-3xl text-center my-2'}>Connect the account to se the latest transactions</h3>
			)}

			<div className={'flex flex-wrap justify-center items-center mt-10'}>
					{transactions.map((t: any) => <div className={'flex flex-1 text-white bg-[#181918] m-4 ' +
					'2xl:min-w[450px] ' +
					'2xl:max-w[500px] ' +
					'sm:min-w[270px] ' +
					'sm:max-w[300px] ' +
					'flex-col p-3 rounded-md howe:shadow-2xl'}>
						<div>From: {t.addressFrom}</div>
						<div>To: {t.addressTo}</div>
						<div>Amount: {t.amount}</div>
						<div>Keyword: {t.keyword}</div>
						<div>Message: {t.message}</div>
					</div>)}

					</div>
		</div>

	</div>
}

export default Transactions