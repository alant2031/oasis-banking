'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import {
	PlaidLinkOnSuccess,
	PlaidLinkOptions,
	usePlaidLink,
} from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken } from '@/lib/actions/user.action';

function PlaidLink({ user, variant }: PlaidLinkProps) {
	const router = useRouter();
	const onSuccess = useCallback<PlaidLinkOnSuccess>(
		async (public_token: string) => {
			// await exchangePublicToken({
			// 	publicToken: public_token,
			// 	user
			// })
			router.push('/');
		},
		[user],
	);

	const [token, setToken] = useState('');
	const config: PlaidLinkOptions = {
		token,
		onSuccess,
	};

	const { open, ready } = usePlaidLink(config);

	useEffect(() => {
		const getLinkToken = async () => {
			const data = await createLinkToken(user);
			setToken(data?.linkToken);
		};

		getLinkToken();
	}, [user]);

	if (variant === 'primary')
		return (
			<Button
				className="plaidlink-primary"
				onClick={() => open()}
				disabled={!ready}
			>
				Conectar banco
			</Button>
		);
	else if (variant === 'ghost') return <Button>Conectar banco</Button>;
	else return <Button>Conectar banco</Button>;
}

export default PlaidLink;
