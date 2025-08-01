let basePath = import.meta.env.DEV
	? `http://localhost:${import.meta.env.VITE_API_PORT}`
	: /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]*\b|localhost:[0-9]{1,5})/.exec(window.location.href)[0];
if (!basePath.startsWith('http')) {
	basePath = `http://${basePath}`;
}
let subPath = import.meta.env.BASE_URL || '/';
export const api = `${basePath}${subPath}_api`;
