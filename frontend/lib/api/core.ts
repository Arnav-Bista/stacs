// frontend/lib/api.ts
import { strapi } from '@strapi/client';

const client = strapi({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
    auth: process.env.STRAPI_API_TOKEN
});

export default client;
