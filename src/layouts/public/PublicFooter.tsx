import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  letterVariants,
  staggeredFadeInVariants,
  typingVariants,
} from "@/utils";

const FOOTER_LIST = [
  {
    _id: "1",
    title: "Quick Links",
    arr: [
      {
        _id: "1.1",
        path: "/about",
        title: "About Us",
      },
      {
        _id: "1.2",
        path: "/courses",
        title: "Our Courses",
      },
      {
        _id: "1.3",
        path: "/teachers",
        title: "Our Teachers",
      },
      {
        _id: "1.4",
        path: "/testimonials",
        title: "Student Testimonials",
      },
    ],
  },
  {
    _id: "2",
    title: "Courses",
    arr: [
      {
        _id: "2.1",
        path: "/math",
        title: "Mathematics",
      },
      {
        _id: "2.2",
        path: "/science",
        title: "Science",
      },
      {
        _id: "2.3",
        path: "/english",
        title: "English",
      },
      {
        _id: "2.4",
        path: "/special-coaching",
        title: "Special Coaching",
      },
    ],
  },
  {
    _id: "3",
    title: "Grades",
    arr: [
      {
        _id: "3.1",
        path: "/grades/1-5",
        title: "Grade 1 to 5",
      },
      {
        _id: "3.2",
        path: "/grades/6-8",
        title: "Grade 6 to 8",
      },
      {
        _id: "3.3",
        path: "/grades/9-10",
        title: "Grade 9 & 10",
      },
      {
        _id: "3.4",
        path: "/grades/11-12",
        title: "Grade 11 & 12",
      },
    ],
  },
  {
    _id: "4",
    title: "Support",
    arr: [
      {
        _id: "4.1",
        path: "/#contact",
        title: "Contact Us",
      },
      {
        _id: "4.2",
        path: "/faqs",
        title: "FAQs",
      },
      {
        _id: "4.3",
        path: "/privacy-policy",
        title: "Privacy Policy",
      },
      {
        _id: "4.4",
        path: "/terms-and-conditions",
        title: "Terms & Conditions",
      },
    ],
  },
];

const Footer = () => {
  const text = "We're on a mission.";
  return (
    <footer className="w-full bg-[url-('/images/footer_bg.png')] bg-no-repeat bg-center bg-cover bg-[#171d24] pt-8 md:pt-16 2xl:pt-24 pb-4 md:pb-8 2xl:pb-12">
      <section className="mx-auto lg:px-[12rem] md:px-5 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-4 md:pb-8 2xl:pb-12">
        <div className="flex flex-col gap-6">
          <motion.h2
            className="lg:h-[64px] md:h-[65px] h-[22px] text-xl md:text-2xl lg:text-3xl capitalize tracking-wide font-bold text-white"
            initial="hidden"
            whileInView="visible"
            variants={typingVariants}
          >
            {text.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <p className="description text-[15px] text-gray-100">
            We offer personalized coaching for students from grades 1 to 12,
            covering all subjects with a focus on excellence in Mathematics,
            Science, and English.
          </p>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggeredFadeInVariants}
            >
              <p className="text-xl lg:text-2xl font-bold text-blue-200 shadow-md px-5 py-0.5 rounded-lg bg-blue-950/50 w-fit shadow-blue-800">
                SCC Gurukul
              </p>
            </motion.div>
          </div>
        </div>
        {FOOTER_LIST.map((item, i, arr) => (
          <div className="flex flex-col gap-6" key={item._id}>
            <h3 className="text-lg md:text-xl lg:text-2xl capitalize tracking-wide font-medium text-white">
              {item.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {item.arr.map((innerItem) => (
                <Link href={innerItem.path} key={innerItem._id}>
                  <li className="capitalize list-none w-fit text-gray-300 border-b border-transparent hover:border-white hover:text-white hover:pl-1.5 common-transition">
                    {innerItem.title}
                  </li>
                </Link>
              ))}
            </ul>
            {i === arr.length - 1 ? (
              <div className="flex items-center gap-2">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 grid place-items-center rounded-full !text-white bg-facebook scale-100 hover:scale-110 common-transition"
                >
                  <Facebook fontSize="small" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 grid place-items-center rounded-full !text-white bg-instagram scale-100 hover:scale-110 common-transition"
                >
                  <Instagram fontSize="small" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 grid place-items-center rounded-full !text-white bg-twitter scale-100 hover:scale-110 common-transition"
                >
                  <Twitter fontSize="small" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 grid place-items-center rounded-full !text-white bg-linkedin scale-100 hover:scale-110 common-transition"
                >
                  <LinkedIn fontSize="small" />
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </section>
      <section className="mx-auto lg:px-[12rem] md:px-5 px-4 ">
        <div className="border-t border-white flex flex-col items-center justify-between text-center lg:flex-row gap-4 pt-4 md:pt-8 2xl:pt-12">
          <p className="text-white">
            © {new Date().getFullYear()} SCC Gurukul. All Rights Reserved.
          </p>
          <p className="text-white">
            Designed And Developed by
            <span className="text-gray-300 hover:text-white ml-1">
              Satyajit Sahu
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
