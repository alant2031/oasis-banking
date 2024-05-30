import { z } from 'zod';

export const authFormSchema = (type: string) =>
	z.object({
		// sign-up
		firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
		lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
		address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
		city: type === 'sign-in' ? z.string().optional() : z.string().max(50),
		state:
			type === 'sign-in' ? z.string().optional() : z.string().min(2).max(2),
		zipCode: type === 'sign-in' ? z.string().optional() : z.string().min(3),
		dateBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
		cpf: type === 'sign-in' ? z.string().optional() : z.string().min(11),

		// sign-in & sign-up
		email: z.string().email(),
		password: z.string().min(6),
	});

// email
// password
// address1
// city
// cpf
// dateBirth
// firstName
// lastName
// state
// zipCode
