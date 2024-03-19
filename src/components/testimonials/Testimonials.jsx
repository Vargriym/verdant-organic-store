import titleImg from "../../../public/img/logo-leaf.png";
import client01 from "../../../public/img/client01.png";
import client02 from "../../../public/img/client02.png";
import client03 from "../../../public/img/client03.png";

const Testimonials = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className=" text-center text-3xl font-bold text-black">
            Customers Reviews
          </h1>
          <img className="m-auto p-5 mb-8" src={titleImg} alt="TitleImg" />
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonials"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={client03}
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  amet exercitationem consectetur animi provident temporibus,
                  voluptatum accusantium adipisci sequi in veritatis! Quae
                  dignissimos qui a numquam nemo nam assumenda repellat.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Dante Graham
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonials"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={client01}
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  amet exercitationem consectetur animi provident temporibus,
                  voluptatum accusantium adipisci sequi in veritatis! Quae
                  dignissimos qui a numquam nemo nam assumenda repellat.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Nicholas Oconnor
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={client02}
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  amet exercitationem consectetur animi provident temporibus,
                  voluptatum accusantium adipisci sequi in veritatis! Quae
                  dignissimos qui a numquam nemo nam assumenda repellat.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Maren Harmon
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
