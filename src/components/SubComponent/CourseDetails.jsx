import {
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useLoaderData } from "react-router-dom";

function CourseDetails() {
  const course = useLoaderData();
  const { _id, title, teacher, students, length, rating, image, price } =
    course;

  return (
    <div className="shadow-2xl bg-white md:flex justify-center items-center my-2 mx-4 rounded-lg overflow-hidden">
      <div className="relative w-full md:w-1/2">
        <img src={image} alt="Course" className="w-full h-auto object-cover" />
      </div>

      <div className="p-6 space-y-4 md:w-1/2">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
          <p className="text-md text-gray-500">by {teacher}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-600">
            <UserGroupIcon className="h-6 w-6 mr-2" />
            <p>{students} students</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <ClockIcon className="h-6 w-6 mr-2" />
            <p>{length}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <StarIcon className="h-6 w-6 mr-2 text-yellow-500" />
            <p>{rating} rating</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold flex justify-center items-center text-teal-600">
            <span>
              <CurrencyDollarIcon className="h-12 w-8 mt-1" />
            </span>
            {price}
          </p>
          <a
            href={`/enroll/${_id}`}
            className="bg-teal-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
