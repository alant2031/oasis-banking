import HeaderBox from '@/components/header-box';
import TotalBalanceBox from '@/components/total-balance-box';
import React from 'react';

function HomePage() {
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Bem-vindo"
						user="Visitante"
						subtext="Acesse e gerencie sua conta e atividades financeiras de forma eficiente."
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1280.36}
					/>
				</header>
			</div>
		</section>
	);
}

export default HomePage;
