import { Booking } from "entites/Booking";
import { BaseRepository } from "./base.repository";
import { bookingsData } from "seed-data/booking.seed";

export class BookingRepository extends BaseRepository<Booking> {
  private static _instance: BookingRepository | null;
  constructor() {
    super(bookingsData);
  }

  static get instance(): BookingRepository {
    return (this._instance ??= new BookingRepository());
  }
}
