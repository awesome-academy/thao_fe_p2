'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingStatusAction } from '@/app/actions/admin/updateBookingStatusAction';

interface UpdateBookingStatusVariables {
  bookingId: number;
  newStatus: 'pending' | 'confirmed' | 'cancelled';
}

export const useUpdateBookingStatus = () => {
  const queryClient = useQueryClient();

  return useMutation<
    { success: boolean; message?: string; error?: string },
    Error,
    UpdateBookingStatusVariables
  >({
    mutationFn: async ({ bookingId, newStatus }) => {
      return await updateBookingStatusAction(bookingId, newStatus);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      queryClient.invalidateQueries({ queryKey: ['userBookings'] });
    },
  });
};
