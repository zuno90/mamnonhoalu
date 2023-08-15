export default function HoaLu() {
  return (
    <div className="relative py-20">
      <div className="space-y-10">
        <h3 className="font-bold text-3xl text-center">360 HOA LƯ</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-1">
          {contents.map((item) => (
            <div key={item.id} className="text-center">
              <img
                className="mx-auto xs:w-24 sm:w-48 md:w-72"
                src={item.img}
                alt=""
              />
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <img
        src="/img/bg-360-left-top.png"
        alt=""
        className="z-[-1] opacity-50 sm:w-fit h-full absolute top-0 left-0"
      />
      <img
        src="/img/bg-360-right-bottom.png"
        alt=""
        className="z-[-1] opacity-50 sm:w-fit h-full absolute bottom-0 right-0"
      />
    </div>
  );
}

const contents = [
  {
    id: 1,
    title: "title 1",
    img: "img/360-modal1.png",
  },
  {
    id: 2,
    title: "title 2",
    img: "img/360-modal2.png",
  },
  {
    id: 3,
    title: "title 3",
    img: "img/360-modal3.png",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
