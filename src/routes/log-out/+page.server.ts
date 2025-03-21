export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('userCookie', { path: '/' });
		return { success: true };
	}
};
