import { BookingStatusEnum } from "enums/booking-status.enum";

export interface Booking {
  id: string;
  userId: string;
  courseId: string;
  bookingDate: Date;
  status: BookingStatusEnum;
  notes?: string;
}
