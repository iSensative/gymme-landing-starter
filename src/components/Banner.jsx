import React from "react";
// Import data
import { banner } from "../data";

const Banner = () => {
  // Destructure data
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;

  return (
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex  items-center h-full relative -space-x-48 lg:-space-x-24">
          {/* Text */}
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-white"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1} <br />{" "}
              <span className="text-red-600">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-sm lg:btn-lg btn-secondary"
              data-aos="fade-down"
              data-aos-delay="900"
            >
              {textBtn}
            </button>
          </div>
          {/* image */}
          <div
            className=' w-full h-full bg-[url("https://scontent.fjuj3-1.fna.fbcdn.net/v/t39.30808-6/418513966_18252630313214872_1321168369590371456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFvdZw2YnkHxExDskars3Q6-evNfYSQLsL56819hJAuwshX4wOlC4rFlaw6w96Tn5Irj8MYuy_P8DYCqZZ-GS-N&_nc_ohc=MGWcl2Rua0YAX8vDDvP&_nc_ht=scontent.fjuj3-1.fna&oh=00_AfD9ZgcrNp2at8Xy2YtP1A6YdCe8MAETdQQf2l1AlBf7MQ&oe=65D57E7C")] bg-cover bg-right lg:bg-center bg-no-repeat flex-1'
            data-aos="fade-right"
            data-aos-delay="900"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
