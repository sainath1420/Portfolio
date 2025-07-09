// Remove Superdev integration for local development
// export const superdevClient = createSuperdevClient({
//   appId: import.meta.env.VITE_APP_ID,
//   requiresAuth: false,
//   baseUrl: import.meta.env.VITE_SUPERDEV_BASE_URL,
//   loginUrl: `${import.meta.env.VITE_SUPERDEV_BASE_URL}/auth/app-login?app_id=${
//     import.meta.env.VITE_APP_ID
//   }`,
// });

// Provide a mock or empty export to prevent import errors
export const superdevClient = {} as any;