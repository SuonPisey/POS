
import { useToast } from '@/components/ui/use-toast';
import { QueryKeys } from '@/data/QueryKeys';
import { AuthAPI, User, setToken } from '@/data/auth';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { PropsWithChildren, createContext } from 'react';

interface AuthContextData {
    signed: boolean;
    user: User | null | undefined;
    signIn: (username: string, password: string) => Promise<boolean>;
    signOut: () => Promise<boolean>;
    loading?: boolean;
}

export const AuthContext = createContext<AuthContextData>({
    signed: false,
    user: null,
    signIn: async () => false,
    signOut: async () => false,
});
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const queryClient = useQueryClient();
    const { data: user, isLoading } = useQuery({
        queryKey: [QueryKeys.me],
        queryFn: () => AuthAPI.me(),
        retry: 0,
        staleTime: 1000 * 60 * 5,
    });
    const { toast } = useToast();
    const signIn = async (username: string, password: string) => {
        try {
            const res = await AuthAPI.login(username, password);
            if (!res.token) {
                throw new Error('Invalid token');
            }
            setToken(res.token);
            window.location.reload();
            return true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error?.message || 'Invalid username or password',
            });
            return false;
        }
    };
    const signOut = async () => {
        setToken(null);
        await queryClient.invalidateQueries({
            predicate: (query) => query.queryKey?.includes(QueryKeys.me),
        });
        return true;
    };
    return (
        <AuthContext.Provider
            value={{
                signed: !!user?.id,
                user,
                signIn,
                signOut,
                loading: isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}


