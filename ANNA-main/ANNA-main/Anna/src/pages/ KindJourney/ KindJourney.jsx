import Layout from "../../components/Layout"
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
const KindJourney = () => {
    return (
        <Layout>
            <div className="w-full bg-[url('/public/BG.png')] bg-cover ">
                <div className=" flex min-h-[65vh] flex-col container mx-32">
                    <div className="pt-[128px]">
                        <img src="/public/Layer_1-5.svg" />
                    </div>
                    <div className="mt-[16px] mb-[64px]">
                        <p className="text-lg">Hành Trình Tử Tế là một dự án <span className="text-sky-400">thiện nguyện vì cộng đồng</span>, được phát triển bởi Kính mắt Anna – Thương hiệu<br /> Kính mắt của Sự Tử Tế.</p>
                        <p className="text-lg">Với thông điệp: <span className="text-sky-400">Tử tế từ những điều nhỏ nhất</span>, mỗi đơn hàng của các bạn tại Kính mắt Anna, đồng nghĩa với <br />việc các bạn đang cùng chúng mình bước đi trên <span className="text-sky-400">Hành Trình Tử Tế</span>, mang những đôi mắt sáng đến mọi miền <br /> đất nước và lan toả những giá trị tốt đẹp đến cộng đồng.</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-[64px]">
                <Player>
                    <source src="public/Nau-an-cho-em.mp4" />
                </Player>
            </div>
            <div className=" pt-[150px]">
                <div className="container mx-32 bg-[url('/public/BG_2.png')] bg-cover w-auto rounded-3xl">
                    <div className="p-[64px] space-x-0 flex justify-between">
                        <div>
                            <div className="text-5xl font-bold text-white">
                                Các Hoạt Động Chính
                            </div>
                            <div className="text-xl text-white">
                                ”Hành Trình Tử Tế” được khởi hành với 3 nhóm hoạt động chính
                            </div>
                        </div>
                        <div className="border border-white rounded-full h-fit p-[16px] text-white cursor-pointer">
                            Cộng đồng sống tử tế
                        </div>
                    </div>
                    <hr className="border-white"/>
                    <div className="flex p-[64px] gap-[30px]">
                        <div className="w-[50%] bg-[#F8F8F8] p-[32px] rounded-2xl">
                            <div className="text-3xl font-bold hover:text-cyan-300 pb-[20px]">
                                Đôi Mắt Mặt Trời
                            </div>
                            <hr />
                            <div className="text-xl hover:text-cyan-300 pt-[20px] pb-[72px]">
                                Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em <br /> nhỏ có hoàn cảnh khó khăn
                            </div>
                            <div>
                                <img src="/public/img-1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[50%] bg-[#F8F8F8] p-[32px] rounded-2xl">
                            <div className="text-3xl font-bold hover:text-cyan-300 pb-[20px]">
                                Túi Tử Tế
                            </div>
                            <hr />
                            <div className="text-xl hover:text-cyan-300 pt-[20px] pb-[72px]">
                                Anna sẻ in 500.000 chiếc túi tử tế nhằm làn tỏa câu <br /> chuyện tìm người thân thất lạc, cùng hi vọng phép <br /> màu sẻ xảy ra
                            </div>
                            <div>
                                <img src="/public/img-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default KindJourney
