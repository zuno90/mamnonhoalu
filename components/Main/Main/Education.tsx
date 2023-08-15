import React from "react";

export default function Education() {
  const [showModal, setShowModal] = React.useState({ id: 99, isOpen: false });
  return (
    <div className="relative py-20">
      <div className="space-y-10">
        <h3 className="font-bold text-3xl text-center">
          GIÁO DỤC - TUYỂN SINH
        </h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {contents.map((item) => (
            <div key={item.id} className="text-center space-y-10">
              <img
                className="mx-auto xs:w-24 sm:w-48 md:w-72"
                src={item.img}
                alt=""
                onClick={() => setShowModal({ id: item.id, isOpen: true })}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        {showModal.isOpen ? (
          <Modal id={showModal.id} setModal={setShowModal} />
        ) : null}
      </div>
      <img
        src="/img/bg-chuongtrinhhoc-left.png"
        alt=""
        className="z-[-1] opacity-50 h-full absolute top-0 left-0"
      />
      <img
        src="/img/bg-chuongtrinhhoc-right.png"
        alt=""
        className="z-[-1] opacity-50 h-full absolute bottom-0 right-0"
      />
    </div>
  );
}

const contents = [
  {
    id: 1,
    title: "Chương trình Đào tạo",
    img: "img/giaoduc-tuyensinh/chuongtrinh.png",
    content: (
      <>
        <p className="my-4">
          Mô hình học tập bám sát Chương trình Giáo dục Mầm non của Bộ Giáo dục
          & Đào tạo với những cách tiếp cận giáo dục hiện đại, trong đó tập
          trung vào:
        </p>
        <p className="my-4">
          <span className="font-bold">Thể chất:</span> Thể hiện kĩ năng vận động
          cơ bản và các tố chất trong vận động Biết một số món ăn, thực phẩm
          thông thường và ích lợi của chúng đối với sức khỏe; Thực hiện được một
          số việc tự phục vụ trong sinh hoạt, có một số hành vi và thói quen tốt
          trong sinh hoạt và giữ gìn sức khỏe, biết một số nguy cơ không an toàn
          và phòng tránh
        </p>
        <p className="my-4">
          <span className="font-bold">Nhận thức Khoa học:</span> Nhận biết mối
          quan hệ đơn giản của sự vật hiện tượng và giải quyết vấn đề đơn giản,
          thể hiện sự hiểu biết. Toán học cơ bản: Biết số đếm, số lượng, sắp
          xếp, so sánh, nhận biết hình dạng, không gian và định hướng thời gian.
          Xã hội: Nhận biết bản thân, các mối quan hệ xung quanh, các chủ đề
          theo nhóm tuổi.
        </p>
        <p className="my-4">
          <span className="font-bold">Ngôn ngữ:</span> Nghe hiểu lời nói và sử
          dụng trong cuộc sống hàng ngày. Làm quen với đọc – viết tùy theo trình
          độ nhóm tuổi
        </p>
        <p className="my-4">
          <span className="font-bold">Tình cảm – kỹ năng xã hội:</span> Thể hiện
          ý thức về bản thân, thể hiện sự tự tin, tự lực. Nhận biết và thể hiện
          cảm xúc, tình cảm với con người, sự vật, hiện tượng xung quanh Hành vi
          và quy tắc ứng xử xã hội, quan tâm đến môi trường
        </p>
        <p className="my-4">
          <span className="font-bold">Thẩm mĩ:</span> Cảm nhận và thể hiện cảm
          xúc trước vẻ đẹp của thiên nhiên, cuộc sống và các tác phẩm nghệ
          thuật. Một số kĩ năng trong hoạt động âm nhạc và hoạt động tạo hình
          Thể hiện sự sáng tạo khi tham gia các hoạt động nghệ thuật
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Lớp học & Ngoại khóa",
    img: "img/giaoduc-tuyensinh/ngoaikhoa.png",
    content: (
      <>
        <p className="my-4">
          <p className="font-bold">
            Đào tạo chính quy theo nhóm tuổi và phù hợp với quy định của Bộ Giáo
            dục & Đào tạo
          </p>
          Lá: 5-6 tuổi Chồi: 4-5 tuổi Mầm: 3-4 tuổi Nhóm trẻ: 18-36 tháng tuổi
        </p>
        <p className="my-4">
          <p className="font-bold">Ngoại ngữ</p>
          Chương trình học kết hợp giữa giáo viên Việt Nam & người nước ngoài,
          xây dựng nền tảng cơ bản về tiếng Anh cho các bé.
        </p>
        <p className="my-4">
          <p className="font-bold">Phát triển Văn – Thể - Mỹ</p>
          Thường xuyên tổ chức các hoạt động văn nghệ định kì theo chủ đề và
          khối lớp, lớp thể dục Aerobic, tạo điều kiện cho các bé phát triển tố
          chất về ca hát, nhảy múa
        </p>
        <p className="my-4">
          <p className="font-bold">
            Phát triển nhận thức xã hội – thế giới quan
          </p>
          Tổ chức các hoạt động về nhận thức ngành nghề, các địa điểm tại địa
          phương, hoạt động xây dựng và bảo vệ môi trường xanh, kết nối vận động
          đồng đội ngoài trời.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Tuyển sinh",
    img: "img/giaoduc-tuyensinh/tuyensinh.png",
    content: (
      <>
        <p className="my-4">
          <span className="font-bold">Bước 1:</span> Phụ huynh liên hệ số
          hotline của trường để đặt lịch hẹn.
        </p>
        <p className="my-4">
          <span className="font-bold">Bước 2:</span> Phụ huynh đến tham quan
          Trường để được tư vấn về chế độ ăn uống, sinh hoạt và học phí.
        </p>
        <p className="my-4">
          <span className="font-bold">Bước 3:</span> Phụ huynh mua hồ sơ đăng kí
          nhập học tại trường và nộp lại để nhà trường sắp xếp lớp cho bé nhập
          học
        </p>
      </>
    ),
  },
];

const Modal = ({
  id,
  setModal,
}: any): React.ReactElement<number, any> | null => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto mx-auto max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="z-10 flex items-center p-6">
              <h3 className="text-4xl font-semibold uppercase">
                {contents[id - 1].title}
              </h3>
              <button
                className="ml-auto bg-transparent align-center text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() =>
                  setModal((prevState: any) => ({
                    ...prevState,
                    id,
                    isOpen: false,
                  }))
                }
              >
                <img src="img/close-btn.png" width="30" alt="" />
              </button>
            </div>
            {/*body*/}
            <div className="relative z-10 px-6 flex-auto">
              {contents[id - 1].content}
            </div>
            <img
              className="absolute opacity-50 h-full top-0 left-0"
              src="img/bg-chuongtrinhhoc-left.png"
              alt=""
            />
            <img
              className="absolute opacity-50 h-full bottom-0 right-0"
              src="img/bg-chuongtrinhhoc-right.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
