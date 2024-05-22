import { z } from 'zod';

export const authFormSchema = (type: string) =>
	z.object({
		// sign-up
		firstName:
			type === 'sign-in' ? z.string().min(3).optional() : z.string().min(3),
		lastName:
			type === 'sign-in' ? z.string().min(3).optional() : z.string().min(3),
		address1:
			type === 'sign-in' ? z.string().max(50).optional() : z.string().max(50),
		city:
			type === 'sign-in' ? z.string().max(20).optional() : z.string().max(50),
		state:
			type === 'sign-in'
				? z.string().min(2).max(2).optional()
				: z.string().min(2).max(2),
		zip:
			type === 'sign-in'
				? z.string().min(8).max(8).optional()
				: z.string().min(8).max(8),
		cpf:
			type === 'sign-in'
				? z.string().min(11).max(11).optional()
				: z.string().min(11).max(11),
		dateBirth:
			type === 'sign-in' ? z.string().min(3).optional() : z.string().min(3),

		// sign-in & sign-up
		email: z.string().email(),
		password: z.string().min(6),
	});
