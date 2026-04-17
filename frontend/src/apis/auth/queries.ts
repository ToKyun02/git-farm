import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { logout, me } from '.';

export const authKeys = {
    all: ['auth'] as const,
    me: () => [...authKeys.all, 'me'] as const,
};

export function useMe() {
    return useQuery({
        queryKey: authKeys.me(),
        queryFn: me,
        retry: false,
        staleTime: 1000 * 60 * 5,
        throwOnError: false,
    });
}

export function useLogout() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: authKeys.me() });
        },
    });
}
