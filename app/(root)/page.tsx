import HeaderBox from '@/components/header-box';
import RightSidebar from '@/components/right-sidebar';
import TotalBalanceBox from '@/components/total-balance-box';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react';

async function HomePage() {
	const loggedIn = await getLoggedInUser();
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Bem-vindo"
						user={loggedIn?.name || 'Visitante'}
						subtext="Acesse e gerencie sua conta e atividades financeiras de forma eficiente."
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1280.36}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 200.35 }, { currentBalance: 15.0 }]}
			/>
		</section>
	);
}

export default HomePage;
