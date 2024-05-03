import React from 'react';
import AnimatedCounter from './animated-counter';
import DonutChart from './donut-chart';

function TotalBalanceBox({
	accounts = [],
	totalBanks,
	totalCurrentBalance,
}: TotalBalanceBoxProps) {
	return (
		<section className="total-balance">
			<div className="total-balance-chart">
				<DonutChart accounts={accounts} />
			</div>
			<div className="flex flex-col gap-6">
				<h2 className="header-2">Contas Correntes: {totalBanks}</h2>
				<div className="flex flex-col gap-2">
					<p className="total-balance-label">Saldo total atualizado</p>
					<div className="total-balance-amount flex-center gap-2">
						<AnimatedCounter amount={totalCurrentBalance} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default TotalBalanceBox;
