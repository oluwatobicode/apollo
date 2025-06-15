const features = [
  // {
  //   name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   img: "https://res.cloudinary.com/ddbld6szb/image/upload/MobileChat_mhjrnu.png",
  // },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://res.cloudinary.com/ddbld6szb/image/upload/DesktopHome_urvqli.png",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://res.cloudinary.com/ddbld6szb/image/upload/DesktopHome_urvqli.png",
  },
];

function Features() {
  return (
    <div className="m-5">
      <div className="flex flex-col gap-10">
        {features.map((el, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col items-center justify-center  bg-textColor  rounded-[15px]"
          >
            <div className="text-left p-5 text-textColorSec lg:w-fit">
              <h1 className="text-[20px] mb-5 lg:text-[30px]">{el?.name}</h1>
              <p className="text-[17px] lg:text-[20px]">{el?.desc}</p>
            </div>

            <div className=" bg-bgImgColor lg:w-[500px] w-full flex items-center justify-center md:rounded-r-[15px]  rounded-b-[15px] ">
              <img src={el?.img} className="p-10 " alt={el.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Features;
