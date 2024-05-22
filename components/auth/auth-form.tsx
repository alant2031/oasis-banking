'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { authFormSchema } from '@/schemas';
import { z } from 'zod';
import AuthField from './auth-field';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

function AuthForm({ type }: AuthFormProps) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);

	const formSchema = authFormSchema(type);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			address1: '',
			cpf: '',
			dateBirth: '',
			firstName: '',
			lastName: '',
			state: '',
			zip: '',
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			// signup appwrite & create plaid token

			if (type === 'sign-up') {
				// const newUser = await signUp(data)
				// setUser(newUser)
			} else if (type === 'sign-in') {
				// const resp = await signIn({
				// 	email: data.email,
				// 	password: data.password
				// })
				// if(resp) router.push("/")
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			form.reset();
		}
	};

	return (
		<section className="auth-form">
			<header className="flex flex-col gap-5 md:gap-8">
				<Link href="/" className="cursor-pointer flex items-center gap-1">
					<Image
						src="/icons/logo.svg"
						width={34}
						height={34}
						alt="Oasis Logo"
					/>
					<h1 className="sidebar-logo text-26 font-ibm-plex-serif font-bold text-black-1">
						Oasis
					</h1>
				</Link>
				<div className="flex flex-col gap-1 md:gap-3">
					<h1 className="text-24 lg:text-36 font-semibold text-gray-900">
						{user
							? 'Link Account'
							: type === 'sign-in'
							? 'Iniciar sessão'
							: 'Criar conta'}
						<p className="text-16 font-normal text-gray-600">
							{user ? 'Vincule sua conta para começar' : 'Informe seus dados'}
						</p>
					</h1>
				</div>
			</header>
			{user ? (
				<div className="flex flex-col gap-4">{/* PlaidLink */}</div>
			) : (
				<>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							{type === 'sign-up' && (
								<>
									<div className="flex gap-4">
										<AuthField
											control={form.control}
											name="firstName"
											label="Nome"
											placeholder="Nome"
										/>
										<AuthField
											control={form.control}
											name="lastName"
											label="Sobrenome"
											placeholder="Sobrenome"
										/>
									</div>
									<AuthField
										control={form.control}
										name="address1"
										label="Endereço"
										placeholder="Digite seu endereço completo"
									/>
									<AuthField
										control={form.control}
										name="city"
										label="Cidade"
										placeholder="Exemplo: São Paulo"
									/>
									<div className="flex gap-4">
										<AuthField
											control={form.control}
											name="state"
											label="Estado"
											placeholder="Exemplo: SP"
										/>
										<AuthField
											control={form.control}
											name="zip"
											label="CEP"
											placeholder="Exemplo: 60022333"
										/>
									</div>
									<div className="flex gap-4">
										<AuthField
											control={form.control}
											name="dateBirth"
											label="Data de Nascimento"
											placeholder="DD/MM/YYYY"
										/>
										<AuthField
											control={form.control}
											name="cpf"
											label="CPF"
											placeholder="Exemplo: 44455566677"
										/>
									</div>
								</>
							)}
							<AuthField
								control={form.control}
								name="email"
								label="Email"
								placeholder="Digite seu email"
							/>
							<AuthField
								control={form.control}
								name="password"
								label="Senha"
								placeholder="Digite sua senha"
							/>
							<div className="flex flex-col gap-4">
								<Button type="submit" className="form-btn" disabled={isLoading}>
									{isLoading ? (
										<div className="flex gap-2">
											<Loader2 className="animate-spin" />
											<span>Carregando...</span>
										</div>
									) : type === 'sign-in' ? (
										'Entrar'
									) : (
										'Cadastrar'
									)}
								</Button>
							</div>
						</form>
					</Form>
					<footer className="flex justify-center gap-1">
						<p className="text-14 font-normal text-gray-600">
							{type === 'sign-in'
								? 'Não possui uma conta?'
								: 'Já possui uma conta?'}
						</p>
						<Link
							href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
							className="form-link"
						>
							{type === 'sign-in' ? 'Cadastrar' : 'Entrar'}
						</Link>
					</footer>
				</>
			)}
		</section>
	);
}

export default AuthForm;