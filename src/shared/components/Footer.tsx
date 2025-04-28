'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { SiZalo } from 'react-icons/si';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa';
import {
    faFacebookF,
    faYoutube,
    faInstagram,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';
import { Image, QRCode } from 'antd';

interface FooterItem {
    label: string;
    url?: string;
    isHeading?: boolean;
    isPhone?: boolean;
    type?: 'certificates' | 'payments' | 'social' | 'app';
}

interface FooterCategory {
    title: string;
    items: FooterItem[];
}

const footerCategories: FooterCategory[] = [
    {
        title: 'VỀ CHÚNG TÔI',
        items: [
            { label: 'Giới thiệu', url: '/about' },
            { label: 'Hệ thống cửa hàng', url: '/stores' },
            { label: 'Giấy phép kinh doanh', url: '/license' },
            { label: 'Quy chế hoạt động', url: '/regulations' },
            { label: 'Chính sách đặt cọc', url: '/deposit-policy' },
            { label: 'Chính sách nội dung', url: '/content-policy' },
            { label: 'Chính sách đổi trả thuốc', url: '/return-policy' },
            { label: 'Chính sách giao hàng', url: '/shipping-policy' },
            { label: 'Chính sách bảo mật dữ liệu', url: '/privacy-policy' },
            { label: 'Chính sách thanh toán', url: '/payment-policy' },
            { label: 'Kiểm tra hóa đơn điện tử', url: '/e-invoice' },
            { label: 'Chính sách thu thập và xử lý dữ liệu', url: '/data-collection-policy' },
            { label: 'Chính sách hoàn hủy đổi trả Vắc xin', url: '/vaccine-return-policy' },
            { label: 'Thông tin trung tâm bảo hành', url: '/warranty-info' },
        ],
    },
    {
        title: 'DANH MỤC',
        items: [
            { label: 'Thực phẩm chức năng', url: '/categories/supplements' },
            { label: 'Dược mỹ phẩm', url: '/categories/cosmetics' },
            { label: 'Thuốc', url: '/categories/medicines' },
            { label: 'Chăm sóc cá nhân', url: '/categories/personal-care' },
            { label: 'Trang thiết bị y tế', url: '/categories/medical-equipment' },
            { label: 'Đặt thuốc online', url: '/order-online' },
            { label: 'Trung tâm Tiêm chủng', url: '/vaccination-center' },
        ],
    },
    {
        title: 'TÌM HIỂU THÊM',
        items: [
            { label: 'Góc sức khoẻ', url: '/health-corner' },
            { label: 'Tra cứu thuốc', url: '/medicine-lookup' },
            { label: 'Tra cứu dược chất', url: '/substance-lookup' },
            { label: 'Tra cứu dược liệu', url: '/herb-lookup' },
            { label: 'Bệnh thường gặp', url: '/common-diseases' },
            { label: 'Bệnh viện', url: '/hospitals' },
            { label: 'Đội ngũ chuyên môn', url: '/experts' },
            { label: 'Tin tức tuyển dụng', url: '/careers' },
            { label: 'Tin tức sự kiện', url: '/news-events' },
        ],
    },
    {
        title: 'TỔNG ĐÀI (8:00-22:00)',
        items: [
            { label: 'Tư vấn mua hàng', isHeading: true },
            { label: '18006928 (Nhánh 1)', isPhone: true },
            { label: 'Trung tâm Vắc xin', isHeading: true },
            { label: '18006928 (Nhánh 2)', isPhone: true },
            { label: 'Góp ý, khiếu nại và tiếp nhận cảnh báo', isHeading: true },
            { label: '18006928 (Nhánh 3)', isPhone: true },
        ],
    },
    {
        title: 'KẾT NỐI VỚI CHÚNG TÔI',
        items: [
            { label: 'CHỨNG NHẬN BỞI', isHeading: true },
            { label: 'Chứng nhận', type: 'certificates' },
            { label: 'HỖ TRỢ THANH TOÁN', isHeading: true },
            { label: 'Phương thức thanh toán', type: 'payments' },
            { label: 'KẾT NỐI VỚI CHÚNG TÔI', isHeading: true },
            { label: 'Mạng xã hội', type: 'social' },
            { label: 'TẢI ỨNG DỤNG LONG CHÂU', isHeading: true },
            { label: 'QR Code tải ứng dụng', type: 'app' },
        ],
    },
];

const Footer: React.FC = () => {
    const [openCategory, setOpenCategory] = useState<number | null>(null);

    const toggleCategory = (index: number) => {
        if (openCategory === index) {
            setOpenCategory(null);
        } else {
            setOpenCategory(index);
        }
    };

    return (
        <footer className="w-full bg-white text-sm mt-3">
            <div className="bg-[#2166de] text-white w-full py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <span className="hidden md:block">
                                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                            </span>
                            <span className="text-lg md:text-xl text-center md:text-left">
                                Xem hệ thống 2041 nhà thuốc trên toàn quốc
                            </span>
                        </div>
                        <div>
                            <a
                                href="/stores"
                                className="text-[#2166de] px-6 py-3 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300"
                            >
                                Xem danh sách nhà thuốc
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Footer */}
            <div className="md:hidden">
                {footerCategories.map((category, index) => (
                    <div key={index}>
                        <button
                            className="w-full py-4 px-4 flex justify-between items-center bg-white"
                            onClick={() => toggleCategory(index)}
                        >
                            <span className="font-bold text-gray-800">{category.title}</span>
                            <FontAwesomeIcon
                                icon={openCategory === index ? faChevronUp : faChevronDown}
                                className="text-gray-500"
                            />
                        </button>
                        {openCategory === index && (
                            <div className="px-4 pb-4">
                                <ul className="space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            {item.isHeading ? (
                                                <h4 className="font-semibold text-gray-700 mt-4 mb-2">{item.label}</h4>
                                            ) : item.isPhone ? (
                                                <p className="text-[#2166de] font-bold">{item.label}</p>
                                            ) : item.type ? (
                                                <div className="my-2">
                                                    {item.type === 'certificates' && (
                                                        <div className="flex gap-2">
                                                            <div className="h-10 w-20 rounded flex items-center justify-center text-xs">
                                                                <Image src='/images/bocongthuong.png' alt='bocongthuong' className="max-w-full max-h-full" />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {item.type === 'payments' && (
                                                        <div className="flex flex-wrap gap-2">
                                                            <div className="h-8 w-12 rounded">
                                                                <SiZalo size={30} className="text-[#0082FC]" />
                                                            </div>
                                                            <div className="h-8 w-12 rounded">
                                                                <FaRegCreditCard size={30} className="text-[#007bff]" title="Chuyển khoản" />
                                                            </div>
                                                            <div className="h-8 w-12">
                                                                <FaMoneyBillWave size={30} className="text-[#28a745]" title="Tiền mặt" />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {item.type === 'social' && (
                                                        <div className="flex gap-3">
                                                            <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                                                <FontAwesomeIcon icon={faFacebookF} />
                                                            </a>
                                                            <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                            </a>
                                                            <a href="#" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white">
                                                                <FontAwesomeIcon icon={faInstagram} />
                                                            </a>
                                                            <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                                                                <FontAwesomeIcon icon={faTiktok} />
                                                            </a>
                                                        </div>
                                                    )}
                                                    {item.type === 'app' && (
                                                        <div className="flex gap-2">
                                                            <div className="relative bg-white p-2 border border-gray-200 rounded-md">
                                                                <QRCode value="https://ant.design" bordered={false} icon='/images/longchau-qr.png' size={100} />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <a
                                                    href={item.url}
                                                    className="text-gray-600 hover:text-[#2166de] transition-colors duration-200"
                                                >
                                                    {item.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop Footer */}
            <div className="hidden md:block container mx-auto px-4 py-8">
                <div className="grid grid-cols-5 gap-8">
                    {footerCategories.map((category, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-lg font-bold mb-4 text-gray-800">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {item.isHeading ? (
                                            <h4 className="font-semibold text-gray-700 mt-4 mb-2">{item.label}</h4>
                                        ) : item.isPhone ? (
                                            <p className="text-[#2166de] font-bold">{item.label}</p>
                                        ) : item.type ? (
                                            <div className="my-2">
                                                {item.type === 'certificates' && (
                                                    <div className="flex gap-2">
                                                        <div className="h-10 w-20 rounded flex items-center justify-center text-xs">
                                                            <Image src='/images/bocongthuong.png' alt='bocongthuong' className="max-w-full max-h-full" />
                                                        </div>
                                                    </div>
                                                )}
                                                {item.type === 'payments' && (
                                                    <div className="flex flex-wrap gap-2">
                                                        <div className="h-8 w-12 rounded">
                                                            <SiZalo size={30} className="text-[#0082FC]" />
                                                        </div>
                                                        <div className="h-8 w-12 rounded">
                                                            <FaRegCreditCard size={30} className="text-[#007bff]" title="Chuyển khoản" />
                                                        </div>
                                                        <div className="h-8 w-12">
                                                            <FaMoneyBillWave size={30} className="text-[#28a745]" title="Tiền mặt" />
                                                        </div>
                                                    </div>
                                                )}
                                                {item.type === 'social' && (
                                                    <div className="flex gap-3">
                                                        <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                                            <FontAwesomeIcon icon={faFacebookF} />
                                                        </a>
                                                        <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                                                            <FontAwesomeIcon icon={faYoutube} />
                                                        </a>
                                                        <a href="#" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white">
                                                            <FontAwesomeIcon icon={faInstagram} />
                                                        </a>
                                                        <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                                                            <FontAwesomeIcon icon={faTiktok} />
                                                        </a>
                                                    </div>
                                                )}
                                                {item.type === 'app' && (
                                                    <div className="flex gap-2">
                                                        <div className="relative bg-white p-2 border border-gray-200 rounded-md">
                                                            <QRCode value="https://ant.design" bordered={false} icon='/images/longchau-qr.png' size={100} />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <a
                                                href={item.url}
                                                className="text-gray-600 hover:text-[#2166de] transition-colors duration-200"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-100 py-4">
                <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
                    <p>© 2007 - 2025 Công ty Cổ Phần Dược Phẩm FPT Long Châu <br />Số ĐKKD 0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM</p>
                    <p>GP thiết lập TTTĐTTH số 538/GP-TTĐT do Sở TTTT Hồ Chí Minh cấp ngày 27 tháng 03 năm 2025<br />Địa chỉ: 379-381 Hai Bà Trưng, P. Võ Thị Sáu, Q.3, TP. HCM<br />Số điện thoại: (028)73023456<br />Email: sale@nhathuoclongchau.com.vn<br />Người chịu trách nhiệm nội dung: Nguyễn Bạch Điệp</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;