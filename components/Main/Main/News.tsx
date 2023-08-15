import { Tab } from "@headlessui/react";

export default function News() {
  return (
    <div className="relative py-20">
      <div className="space-y-10">
        <h3 className="font-bold text-3xl text-center">TIN TỨC</h3>
        <Tab.Group
          as="div"
          className="m-20 grid md:grid-cols-12 sm:grid-cols-1 gap-10"
        >
          <Tab.List className="col-span-full lg:col-span-4 bg-zinc-50 divide-y divide-slate-200">
            {tabContents.map((item) => (
              <Tab
                key={item.id}
                className={({ selected }) =>
                  classNames(
                    "flex items-center gap-8 w-full p-3 font-bold text-lg dark:text-yellow-400 hover:bg-gray-100 hover:border-y-1 focus:outline-none",
                    selected &&
                      "bg-zinc-100 text-green-400 dark:bg-gray-700 dark:text-green-400"
                  )
                }
              >
                <img
                  className="hidden md:block"
                  src="img/360-modal1.png"
                  width="100"
                  alt=""
                />
                <p className="text-left">{item.title}</p>
              </Tab>
            ))}
          </Tab.List>
          <div className="lg:col-span-8 col-span-full">
            {tabContents.map((item) => (
              <Tab.Panel key={item.id} className="space-y-8">
                <img src={item.img} alt="" />
                <h3 className="font-bold text-3xl">{item.title}</h3>
                {item.content}
              </Tab.Panel>
            ))}
          </div>
        </Tab.Group>
      </div>
      <img
        src="/img/bg-tintuc-left.png"
        alt=""
        className="z-[-1] opacity-50 absolute sm:w-fit h-full top-0 left-0"
      />
      <img
        src="/img/bg-tintuc-right.png"
        alt=""
        className="z-[-1] opacity-50 absolute sm:w-fit h-full bottom-0 right-0"
      />
    </div>
  );
}

const tabContents = [
  {
    id: 1,
    title: "An toàn học đường – Phòng dịch Covid-19",
    img: "",
    content: (
      <div className="space-y-4">
        Bám sát các chỉ thị từ các Sở, Ban, Ngành địa phương, Trường Mầm non Hoa
        Lư xây dựng Kế hoạch về phòng, chống dịch bệnh viêm đường hô hấp cấp do
        chủng mới của virút Corona và dịch bệnh mùa đông xuân năm 2020 với những
        nội dung sau:
        <br />
        <p>
          • Theo dõi, quản lý tốt sức khỏe học sinh, giáo viên, cán bộ, nhân
          viên nhà trường, giám sát chặt chẽ, phát hiện sớm các trường hợp mắc
          bệnh hoặc nghi ngờ mắc bệnh, ngăn chặn kịp thời không để dịch bệnh xâm
          nhập vào trường học.
        </p>
        <p>
          • Phối hợp với ngành Y tế xây dựng chương trình hành động, tuyên
          truyền, giáo dục nâng cao nhận thức cho học sinh, giáo viên, cán bộ,
          nhân viên và cha mẹ học sinh về nguyên nhân, hậu quả và các biện pháp
          phòng, chống dịch bệnh viêm đường hô hấp cấp do chủng mới của vi rút
          Corona và dịch bệnh mùa đông xuân.
        </p>
        <p>
          • Triển khai các hoạt động vệ sinh phòng bệnh tại các cơ sở giáo dục,
          đảm bảo các điều kiện về vệ sinh học đường, nguồn lực và cơ sở vật
          chất sẵn sàng đáp ứng kịp thời với các tình huống về dịch bệnh trong
          các nhà trường.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Tập thể vững mạnh – Chất lượng dẫn đầu",
    img: "",
    content: (
      <div className="space-y-4">
        Trải qua nhiều giai đoạn đổi mới, phát triển, tập thể Trường Mầm non Hoa
        Lư không ngừng lớn mạnh về chất lượng tổ chức và chuyên môn
        <br />
        <p>
          • Mỗi cán bộ, giáo viên, nhân viên đều thể hiện tốt tác phong, cử chỉ,
          lời nói đối với trẻ, đối với đồng nghiệp, luôn tạo được không khí và
          môi trường thân thiện trong nhà trường.
        </p>
        <p>
          • Cán bộ giáo viên thường xuyên tham gia học bồi dưỡng về chuyên môn
          nghiệp vụ Giáo dục Mầm non nhằm nâng cao năng lực kỹ năng thực hành tổ
          chức hoạt động giáo dục theo quan điểm lấy trẻ làm trung tâm.
        </p>
        <p>
          • Luôn nêu cao tinh thần trách nhiệm, tham gia đều các phong trào thi
          đua do ngành tổ chức và luôn có sự phối hợp giữa các tổ chức đoàn thể
          trong nhà trường.
        </p>
        <p>
          • Từng bước phối hợp với phụ huynh học sinh, chia sẻ những kiến thức
          nuôi dạy con cho các bậc cha mẹ và cộng đồng nhằm từng bước nâng cao
          chất lượng chăm sóc, nuôi dưỡng và giáo dục trẻ.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Đồng hành về chất lượng dinh dưỡng cho bé mỗi ngày",
    img: "",
    content: (
      <div className="space-y-4">
        Chế độ dinh dưỡng cho trẻ lứa tuổi mầm non là nhân tố rất quan trọng cho
        sự phát triển toàn diện của trẻ cả về thể chất và trí tuệ. Đây là bước
        tiền đề quyết định tích cực đến toàn bộ sự phát triển chung của trẻ về
        sau. Do vậy chất lượng dinh dưỡng của các con luôn được Nhà trường đặt
        lên hàng đầu
        <br />
        <p>
          • Bám sát chương trình dinh dưỡng học đường dành cho lứa tuổi Mầm non.
        </p>
        <p>
          • Nâng cao chất lượng bữa ăn cho bé, thực đơn đa dạng, thường xuyên
          thực hiện công tác vệ sinh chế biến thực phẩm, đảm bảo vệ sinh an toàn
          thực phẩm, vệ sinh môi trường, việc lưu thực phẩm hàng ngày.
        </p>
        <p>
          • Thực hiện đúng quy trình bếp một chiều, trang bị đầy đủ đồ dùng bán
          trú đảm bảo vệ sinh và an toàn cho trẻ. Không sử dụng đồ dùng bằng
          nhựa tái sinh.
        </p>
      </div>
    ),
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
