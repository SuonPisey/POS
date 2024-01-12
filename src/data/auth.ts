import { API_URL } from "@/app.config";
import { authorizedFetch } from './fetcher';
export const TOKEN_KEY = 'auth_client_token';
export const AUTH_STORAGE_KEY = 'auth-storage';
const BASE_URL = API_URL + '/oauth';
export interface User {
    id: string;
    name?: string;
    username: string;
    email: string;
    enabled: boolean;
    image_url?: string | null;
}
interface LoginResponse {
    token: string;
}

export const AuthAPI = {
    async login(username: string, password: string): Promise<LoginResponse> {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const res = await response.json();
        if (!response.ok) {
            throw new Error(res?.message || 'Something went wrong');
        }

        return res as LoginResponse;
    },
    async me(): Promise<User> {
        const response = await authorizedFetch(`${BASE_URL}/me`);
        const res = await response.json();
        if (!response.ok) {
            throw new Error(res?.message || 'Something went wrong');
        }

        return res as User;
    },

}
export function setToken(token: string | null): void {
    if (token === null) {
        localStorage.removeItem(TOKEN_KEY);
        return;
    }

    localStorage.setItem(TOKEN_KEY, token);
}
export function getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}
export function getTeamID(): string | null | undefined {
    // Get from session storage
    const state = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (state === null) {
        return null;
    }

    try {
        const parsed = JSON.parse(state) as {
            state?: { currentTeam?: { id?: string } };
        };
        return parsed?.state?.currentTeam?.id;
    } catch (e) {
        return null;
    }
}