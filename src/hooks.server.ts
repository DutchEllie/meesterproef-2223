import { SvelteKitAuth } from "@auth/sveltekit";
import Credentials from "@auth/core/providers/credentials";

export const handle = SvelteKitAuth({
	providers: [
		Credentials({
			credentials: {
				email: { label: "Email" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials, request) {
				/**
				 * This function is used to define if the user is authenticated or not.
				 * If authenticated, the function should return an object contains the user data.
				 * If not, the function should return `null`.
				 */
				if (credentials == null) return null;
				/**
				 * credentials is defined in the config above.
				 * We can expect it contains two properties: `email` and `password`
				 */
				try {
					const response = await fetch('https://strapi-dev.cringe.zip/api/auth/local', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							identifier: credentials.email,
							password: credentials.password
						})
					})
					const resp = await response.json();
					//console.log(resp);
					return {
						jwt: resp.jwt,
						...resp.user
					};
				} catch (error) {
					// Sign In Fail
					return null;
				}
			}
		})
	]
});