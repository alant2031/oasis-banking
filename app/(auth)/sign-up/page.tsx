import AuthForm from '@/components/auth/auth-form';
import React from 'react';

function SignUpPage() {
	return (
		<section className="flex-center size-full max-sm:px-6">
			<AuthForm type="sign-up" />
		</section>
	);
}

export default SignUpPage;
