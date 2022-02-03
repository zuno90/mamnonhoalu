import { Tab } from '@headlessui/react'

export default function Intro() {

    return (
        <div className='relative flex items-center justify-center'>
            <Tab.Group as="div" className="px-40">
                {introTab.map(item =>
                    <Tab.Panel
                        key={item.id}
                        className="py-10 focus:outline-none"
                    >
                        {item.content}
                    </Tab.Panel>
                )}
                <Tab.List className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
                    {introTab.map(item =>
                        <Tab
                            key={item.id}
                            className={({ selected }) => classNames(
                                'w-full p-3 font-bold text-xl dark:text-yellow-400 rounded',
                                'focus:outline-none',
                                selected ? 'bg-white text-indigo-500 dark:bg-gray-700 dark:text-indigo-500 shadow-lg' : ''
                            )}
                        >
                            {item.title}
                        </Tab>
                    )}
                </Tab.List>
            </Tab.Group>
            <img src="/img/bg-gt-left.png" alt="" className='z-[-1] absolute h-screen top-0 left-0' />
            <img src="/img/bg-gt-right.png" alt="" className='z-[-1] absolute h-screen top-0 right-0' />
        </div>
    )
}

const introTab = [
    {
        id: 1,
        title: "LỜI NGỎ - GIỚI THIỆU",
        content: <>
            <h3 className='font-bold text-3xl text-center text-green-400'>LỜI NGỎ - GIỚI THIỆU</h3><br />
            <p>Thành lập từ năm 2000, Trường Mầm non Hoa Lư trải qua nhiều giai đoạn phát triển đổi mới và không ngừng lớn mạnh, nâng cao chất lượng giảng dạy và cơ sở vật chất nhằm mang đến môi trường giáo dục Mầm non toàn diện cho trẻ em đến 5 tuổi tại thành phố Quy Nhơn, tỉnh Bình Định.<br /><br />
            Tại Trường Mầm non Hoa Lư, với các con, việc nhận được nền tảng giáo dục tốt nhất, giúp các con thành công trong tương lai là điều quan trọng nhất. Đội ngũ quản lý – giáo viên – nhân viên không ngừng đổi mới phương pháp giảng dạy nhằm giúp các bé tiếp nhận những giá trị sống tích cực và phẩm chất cá nhân tốt đẹp. Sự đồng hành giữa Phụ huynh và nhà trường là một trong những nhân tố quan trọng, tạo tiền đề khai phá những tiềm năng từ các con.<br /><br />
            Chúng tôi cũng mong muốn mỗi bé ở đây ngày càng trưởng thành về mặt trí tuệ - xã hội và gặt hái thành tích học tập tốt trong hiện tại và tương lai. Nhà trường cũng hy vọng rằng thời gian được nuôi dưỡng tại đây sẽ là khoảng thời gian đẹp nhất và đáng nhớ nhất của các con, cũng như với phụ huynh và đội ngũ cán bộ giáo viên của trường.</p>
        </>
    },
    {
        id: 2,
        title: "TẦM NHÌN - SỨ MỆNH",
        content: <>
            <h3 className='font-bold text-3xl text-center text-green-400'>TẦM NHÌN - SỨ MỆNH</h3><br />
            <h4 className="font-bold text-xl">TẦM NHÌN</h4>
            <p>Trở thành một trong những đơn vị giáo dục mầm non xuất sắc, đi đầu tại địa phương. Không ngừng phát triển để là nơi đáng tin cây trang bị cho các bé nền tảng vững vàng với tiêu chí “Lấy trẻ em làm trung tâm”, giúp các con thành công ở các bậc học cao hơn và trong cuộc sống, bám sát những giá trị truyền thống của Việt Nam.</p>
            <br />
            <h4 className="font-bold text-xl">SỨ MỆNH</h4>
            <ul className="list-disc">
                <li>Phát triển đội ngũ xuất sắc bao gồm các nhà quản lý, giáo viên và nhân viên những người thực hiện một cách nhiệt huyết và hiệu quả những chương trình giáo dục trên tinh thần chỉ đạo từ Phòng giáo dục & đào tạo Thành phố Quy Nhơn.</li>
                <li>Đẩy mạnh công tác tuyên truyền, ứng dụng công nghệ thông tin trong quản lý, chăm sóc giáo dục trẻ và bồi dưỡng giáo viên.</li>
                <li>Xây dựng mối giao kết thường xuyên và liên tục với phụ huynh mà ở đó bố mẹ đóng vai trò tích cực, giúp giáo viên phát triển tối đa năng lực cốt lõi của các bé.</li>
                <li>Thu hút ngày càng nhiều học sinh cũng như mở rộng cơ sở giáo dục trên nền tảng của trách nhiệm và phát triển bền vững.</li>
            </ul>
        </>
    },
    {
        id: 3,
        title: "ĐỘI NGŨ",
        content: <>
            <h3 className='font-bold text-3xl text-center text-green-400'>ĐỘI NGŨ</h3><br />
            <p>
                Có kinh nghiệm chăm sóc trẻ, giảng dạy và điều hành lâu năm, liên tục cập nhật và đổi mới phương thức quản lý, bám sát cùng sự phát triển của công nghệ trong lĩnh vực giáo dục.<br /><br />
                Được bồi dưỡng về đổi mới phương pháp, kỹ năng nghề nghiệp, nội dung, hình thức và áp dụng chương trình giáo dục mầm non trong chăm sóc giáo dục trẻ. Tự học, tự rèn nâng cao trình độ chuyên môn nghiệp vụ.<br /><br />
                Đội ngũ giáo viên trẻ có trình độ chuyên môn đạt chuẩn, có lòng nhiệt tình yêu nghề, mến trẻ, có tinh thần trách nhiệm cao, biết đoàn kết giúp đỡ nhau để hoàn thành nhiệm vụ, được phụ huynh học sinh tín nhiệm.<br /><br />
                Liên tục nêu cao sáng kiến, tự nghiên cứu, tìm tòi làm bổ sung đồ dùng, đồ chơi phục vụ công tác chăm sóc giáo dục trẻ.
            </p>
        </>
    },
    {
        id: 4,
        title: "CƠ SỞ - VẬT CHẤT",
        content: <>
            <h3 className='font-bold text-3xl text-center text-green-400'>CƠ SỞ - VẬT CHẤT</h3><br />
            <h4 className="font-semibold text-xl">Chuẩn Mực</h4>
            <p>Đáp các tiêu chuẩn nghiêm ngặt theo quy định của Phòng Giáo dục & Đào tạo thành phố Quy Nhơn nhằm đảm bảo an toàn, vệ sinh, phòng cháy chữa cháy, điều kiện thông thoáng, góp phần tạo ra một môi trường học tập vừa thoải mái, vừa an toàn cho học sinh.</p><br />
            <h4 className="font-semibold text-xl">Học Tập & Sinh Hoạt</h4>
            <p>Đầy đủ trang thiết bị và giáo cụ trực quan được phối hợp cùng không gian trong ngoài và lịch hoạt động phù hợp để tất cả các con có điều kiện học tập và sinh hoạt tốt nhất.</p><br />
            <h4 className="font-semibold text-xl">Khai Phá Tiềm Năng</h4>
            <p>Đầy đủ các hoạt động, trang bị nhằm khai phá năng lực về văn-thể-mỹ để khơi nguồn sáng tạo, phát triển tố chất tiềm năng của trẻ.</p><br />
            <h4 className="font-semibold text-xl">Vệ Sinh </h4>
            <p>Các phòng học, nhà ăn, sân chơi, nhà vệ sinh luôn được giữ sạch và tẩy trùng theo quy trình chuẩn nhằm đảm bảo một môi trường học tập, sinh hoạt và vui chơi sạch sẽ, an toàn nhất với tất cả các em học sinh.</p><br />
            <h4 className="font-semibold text-xl">Kết Nối</h4>
            <p>Camera được xem như là phương tiện làm quen và kết nối giữa gia đình và nhà trường. Việc quy định sử dụng camera sẽ được hài hòa dựa trên nhu cầu và sự tôn trọng của gia đình lẫn nhà trường để giáo viên và các con có một môi trường hoạt động thoải mái nhất.</p>
        </>
    }
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}