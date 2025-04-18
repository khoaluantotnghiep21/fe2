'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, ChangeEvent } from 'react';
import { Input, Button, Menu, Drawer } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined, CloseOutlined, PhoneFilled, MobileFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (): void => {
    console.log('Searching for:', searchQuery);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // gọi api
  const menuItems: MenuProps['items'] = [
    { key: 'home', label: <Link href="/">Trang chủ</Link> },
    { key: 'products', label: <Link href="/products">Sản phẩm</Link> },
    { key: 'products', label: <Link href="/products">Sản phẩm</Link> },
    { key: 'products', label: <Link href="/products">Sản phẩm</Link> },
    { key: 'products', label: <Link href="/products">Sản phẩm</Link> },
    { key: 'products', label: <Link href="/products">Sản phẩm</Link> },
    { key: 'promotions', label: <Link href="/promotions">Khuyến mãi</Link> },
    { key: 'about', label: <Link href="/about">Về chúng tôi</Link> },
    { key: 'contact', label: <Link href="/contact">Liên hệ</Link> },
  ];

  return (
    <header>
      <div className='bg-[#3c81e8] hidden md:block text-white py-2'>
        <div className='md:container md:mx-auto flex justify-between'>
          <div className='flex gap-3'>
            <span>Trung tâm tiêm chủng Long Châu</span>
            <span><a href="https://tiemchunglongchau.com.vn/" className='underline'>Xem chi tiết</a></span>
          </div>
          <div className='justify-end'>
            <span className='mx-2'>
              <MobileFilled />
              Tải ứng dụng</span>
            <span>
              <PhoneFilled />
              Tư vấn ngay: </span>
            <span><a href="tel:18006928" >1800 6928</a></span>

          </div>
        </div>
      </div>
      <div className="md:bg-[url('/images/bg-header.png')] bg-cover bg-[#3c81e8]">
        <div className="md:container md:mx-auto">
          {/* Mobile layout */}
          <div className="flex justify-between items-center md:hidden px-3 py-2">
            <Button
              icon={<MenuOutlined />}
              onClick={toggleMenu}
              style={{ fontSize: '24px' }}
              className="!text-white !bg-transparent !border-none"
            />
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={0}
                height={0}
                sizes="(max-width: 768px) 150px, 200px"
                className="w-[120px] h-auto max-w-full object-cover"
                priority
              />
            </Link>
            <Link href="/cart" className="text-white">
              <ShoppingCartOutlined style={{ fontSize: '24px' }} />
            </Link>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex align-bottom">
            <div className="flex basis-[20%] m-5">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100px, 150px"
                  className="w-[200px] h-auto max-w-full object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="flex basis-[60%] items-center px-4 mt-3">
              <Input
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={handleChange}
                suffix={
                  <Button
                    icon={<SearchOutlined />}
                    onClick={handleSearch}
                    type="text"
                  />
                }
                className='custom-search-bar'
                style={{ borderRadius: '30px' }}
              />
            </div>
            <div className="flex basis-[25%] justify-evenly ">
              <div className="text-white custom-cart">
                <Link href="/cart" className="flex items-center">
                  <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                  <span className="ml-1">Giỏ hàng</span>
                </Link>
              </div>
              <div className="text-white custom-account">
                <Link href="/account" className="flex items-center">
                  <UserOutlined style={{ fontSize: '24px' }} />
                  <span className="ml-1">Tài khoản</span>
                </Link>
              </div>
            </div>

          </div>
          <div className='hidden md:block'>
            <Menu
              style={{
                background: 'transparent',
                color: '#fff',
                width: '100%',
                justifyItems: 'center'
              }}
              mode="horizontal"
              items={menuItems}
              className="custom-menu"
            />

          </div>
        </div>

      </div>

      {/* Mobile menu (Drawer) */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleMenu}
        open={isMenuOpen}
        closeIcon={<CloseOutlined />}
        width={250}
      >
        <Link href="/account" className="flex items-center custom-ant-menu">
          <UserOutlined className="mr-2" />
          Tài khoản
        </Link>
        <Menu
          mode="vertical"
          items={menuItems}
          className="border-none"
        />

      </Drawer>
    </header>
  );
};

export default Header;