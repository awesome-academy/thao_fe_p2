'use server';

import { authOptions } from '@/app/lib/authOptions';
import {
  BookingWithRelations,
  fetchBookings,
} from '@/app/lib/services/bookingService';
import { getServerSession } from 'next-auth';
import { ERROR_MESSAGES } from '@/app/lib/constants';

export type { BookingWithRelations } from '@/app/lib/services/bookingService';

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export async function getBookingsAction(): Promise<{
  success: boolean;
  bookings?: BookingWithRelations[];
  error?: string;
}> {
  try {
    const session = await getServerSession(authOptions);
    if (session?.user?.role !== 'admin') {
      throw new UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED);
    }

    const bookings = await fetchBookings();
    return {
      success: true,
      bookings,
    };
  } catch (error) {
    console.error('Error getting bookings:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      action: 'getBookingsAction',
    });
    return {
      success: false,
      error: 'Error getting bookings',
    };
  }
}
