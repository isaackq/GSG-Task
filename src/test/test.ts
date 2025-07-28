import { UserRepository } from "../repository/user.repository";
import { CourseRepository } from "../repository/course.repository";
import { BookingRepository } from "../repository/booking.repository";
import { RoleEnum } from "enums/roles.enum";
import { BookingStatusEnum } from "enums/booking-status.enum";
import { CourseCategoryEnum } from "enums/course-category.enum";

async function main() {
  const userRepo = UserRepository.instance;
  const courseRepo = CourseRepository.instance;
  const bookingRepo = BookingRepository.instance;

  console.log("Create user:");
  console.log(
    await userRepo.create({
      id: "u4",
      name: "New User",
      email: "newuser@example.com",
      role: RoleEnum.Student,
    })
  );

  console.log("--------------------------------");

  console.log("find user by email");
  console.log(await userRepo.findByEmail("newuser@example.com"));

  console.log("--------------------------------");

  console.log("delete user");
  console.log(await userRepo.delete("u4"));

  console.log("--------------------------------");

  console.log("All users:");
  console.log(await userRepo.getAll());

  console.log("--------------------------------");

  console.log("create new course: ");
  console.log(
    await courseRepo.create({
      id: "c4",
      title: "DevOps Essentials",
      description:
        "Learn the fundamentals of DevOps, CI/CD pipelines, and cloud deployment.",
      instructorId: "u3",
      category: CourseCategoryEnum.DevOps,
      durationHours: 6,
    })
  );

  console.log("--------------------------------");

  console.log("All courses:");
  console.log(await courseRepo.getAll());

  console.log("--------------------------------");

  console.log("All bookings:");
  console.log(await bookingRepo.getAll());

  console.log("--------------------------------");

  console.log("Get user by ID (u1):");
  console.log(await userRepo.getOne("u1"));

  console.log("--------------------------------");

  console.log("Find bookings by userId (u1):");
  console.log(await bookingRepo.findBy({ userId: "u1" }));

  console.log("Find bookings by status");
  console.log(
    await bookingRepo.findBy({ status: BookingStatusEnum.Confirmed })
  );
}

main();
