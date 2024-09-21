import { AdminLayout } from "@/layouts";
import { SearchOutlined, WhatsApp } from "@mui/icons-material";

const courseData = [
  {
    id: 1,
    title: "Algebra Basics",
    startDate: "20 May, 2024",
    endDate: "20 Jun, 2024",
    price: "₹ 7000",
    discountedPrice: "₹ 4400",
    isNew: true,
    imageUrl: "discrete-maths-courses-featured.jpg",
  },
  {
    id: 2,
    title: "Geometry Fundamentals",
    startDate: "25 May, 2024",
    endDate: "25 Jun, 2024",
    price: "₹ 5999",
    discountedPrice: "₹ 3333",
    isNew: true,
    imageUrl: "Engineering-Courses-Without-Maths.png",
  },
  {
    id: 3,
    title: "Calculus Introduction",
    startDate: "1 Jun, 2024",
    endDate: "1 Jul, 2024",
    price: "₹ 3600",
    discountedPrice: "₹ 2999",
    isNew: false,
    imageUrl: "Mathematics-and-engineering-1024x576.png",
  },
];

const AdminHome = () => {
  return (
    <AdminLayout title="Maths Vala">
      <section className="w-full 2xl:main-container">
        <div className="flex flex-row items-center gap-4 w-full mt-7 mb-10">
          <SearchInput placeholder="Search for Batches" />
          <button className="px-12 py-2.5 bg-violet-500 text-white font-semibold text-md rounded-lg hover:bg-violet-600 common-transition">
            study
          </button>
        </div>
        <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-6 gap-4">
          {courseData.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </aside>
      </section>
    </AdminLayout>
  );
};

export default AdminHome;

const Card = ({ course }: any) => {
  return (
    <section className="border p-4 rounded-lg shadow-lg bg-white hover:border-gray-600 common-transition">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-gray-700 font-semibold">{course.title}</h2>
        <div className="flex items-center">
          {course.isNew && (
            <span className="text-yellow-900 font-semibold mr-2 bg-yellow-400/50 px-2 rounded-md">
              New
            </span>
          )}
          <WhatsApp className="text-green-500 cursor-pointer" />
        </div>
      </div>
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover mb-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      />
      <div className="flex justify-between text-sm my-7">
        <span className="text-gray-600">Starts: {course.startDate}</span>
        <span className="text-gray-600">Ends: {course.endDate}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          {course.discountedPrice}{" "}
          <span className="line-through text-red-400 text-sm font-normal">
            {course.price}
          </span>
        </p>
        <div className="relative">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white py-1 px-4 rounded-md relative overflow-hidden clip-path">
            <span className="relative z-10 text-sm font-semibold">
              30% Discount
            </span>
            <div className="absolute inset-0 bg-green-700/70 transform -skew-x-12 z-0"></div>
          </div>
        </div>
      </div>
      <aside className="flex justify-between w-full gap-4 mt-8">
        <button className="w-1/2 bg-blue-100/70 text-blue-900 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600/30 common-transition">
          EXPLORE
        </button>
        <button className="w-1/2 bg-green-400/60 text-green-900 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-green-600/30 common-transition">
          BUY NOW
        </button>
      </aside>
    </section>
  );
};

const SearchInput = ({ placeholder }: any) => {
  return (
    <div className="bg-violet-300/30 px-4 py-3 rounded-lg flex items-center w-full">
      <SearchOutlined className="text-violet-600 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
      />
    </div>
  );
};
