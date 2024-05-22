import AuthForm from '@/components/auth/auth-form';
import React from 'react';

function SignInPage() {
	return (
		<section className="flex-center size-full max-sm:px-6">
			<AuthForm type="sign-in" />
		</section>
	);
}

export default SignInPage;
