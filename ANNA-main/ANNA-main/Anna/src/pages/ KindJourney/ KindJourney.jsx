import Layout from "../../components/Layout"
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
const  KindJourney = () => {
    return (
        <Layout>
            <div className="w-full bg-[url('/public/BG.png')] bg-cover ">
                <div className=" flex min-h-[65vh] flex-col container mx-32">
                        <div className="pt-[128px]">
                            <img src="/public/Layer_1-5.svg"/>
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
            <div>
                <div className="container mx-32">
                    Các hoạt động chính
                </div>
            </div>
        </Layout>
    )
}

export default  KindJourney
