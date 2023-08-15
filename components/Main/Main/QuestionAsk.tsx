import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function QuestionAsk() {
  return (
    <div className="relative py-20">
      <div className="space-y-10">
        <h3 className="px-40 font-bold text-3xl text-center">
          CÂU HỎI THƯỜNG GẶP
        </h3>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
        >
          <div className="py-4 space-y-4">
            <p className="font-extrabold">
              1/ Phụ huynh có thể đến tham quan trường trong khung giờ nào?
            </p>
            <p>
              Giải đáp: Phụ huynh của bé có thể đến tham quan trường trong khung
              giờ 7h30 – 17h30 từ thứ Hai đến Chủ Nhật
            </p>
          </div>
          <div className="py-4 space-y-4">
            <p className="font-extrabold">
              2/ Phụ huynh đưa đón bé đến trường vào thời gian nào?
            </p>
            <p>
              Giải đáp: Phụ huynh đưa đón bé đến trường từ 6h30 – 17h30 từ thứ
              Hai đến Chủ Nhật
            </p>
          </div>
        </Carousel>
      </div>
      <img
        src="/img/bg-cauhoi-left.png"
        alt=""
        className="z-[-1] opacity-50 h-full absolute top-0 left-0"
      />
      <img
        src="/img/bg-cauhoi-right.png"
        alt=""
        className="z-[-1] opacity-50 h-full absolute bottom-0 right-0"
      />
    </div>
  );
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
