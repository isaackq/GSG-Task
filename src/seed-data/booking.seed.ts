import { Booking } from "entites/Booking";
import { BookingStatusEnum } from "enums/booking-status.enum";

export const bookingsData: Booking[] = [
  {
    id: "b1",
    userId: "u1",
    courseId: "c1",
    bookingDate: new Date("2025-08-01T10:00:00Z"),
    status: BookingStatusEnum.Confirmed,
    notes: "Excited to learn!",
  },
  {
    id: "b2",
    userId: "u2",
    courseId: "c2",
    bookingDate: new Date("2025-08-03T14:00:00Z"),
    status: BookingStatusEnum.Pending,
  },
  {
    id: "b3",
    userId: "u1",
    courseId: "c3",
    bookingDate: new Date("2025-08-05T09:30:00Z"),
    status: BookingStatusEnum.Cancelled,
    notes: "Rescheduling due to conflict",
  },
];
