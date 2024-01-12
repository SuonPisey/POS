import { getTeamID, getToken } from './auth';

export async function authorizedFetch(
    url: string,
    options?: RequestInit
): Promise<Response> {
    const token = getToken();
    const headers = {
        Authorization: `Bearer ${token || ''}`,
        'X-Team-ID': getTeamID() || '',
        ...(options?.headers || {}),
    };
    return await fetch(url, { ...options, headers });
}
