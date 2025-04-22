'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, ChangeEvent } from 'react';
import { Input, Button, Menu, Drawer, Popover, QRCode } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined, CloseOutlined, PhoneFilled, MobileFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';

interface CustomMenuItem {
  key: string;
  label: React.ReactNode;
  children?: Array<CustomMenuItem | { type: 'group'; label: string; children: CustomMenuItem[] }>;
}

//api danh mục (type)
const items: CustomMenuItem[] = [
  {
    key: 'home',
    label: <Link href='/'>Thực phẩm chức năng</Link>,
    children: [
      {
        type: 'group',
        label: 'Dinh dưỡng',
        children: [
          { key: 'home_1', label: <Link href='/products?type=vitamin'>Vitamin & Khoáng chất</Link> },
          { key: 'home_2', label: <Link href='/products?type=supplement'>Thực phẩm bổ sung</Link> },
        ],
      },
      {
        type: 'group',
        label: 'Tự nhiên',
        children: [
          { key: 'home_3', label: <Link href='/products?type=herbal'>Thảo dược</Link> },
        ],
      },
    ],
  },
  {
    key: 'products',
    label: <Link href='/products'>Dược mỹ phẩm</Link>,
    children: [
      {
        type: 'group',
        label: 'Chăm sóc',
        children: [
          { key: 'products_1_1', label: <Link href='/products?type=skincare'>Chăm sóc da</Link> },
          { key: 'products_1_2', label: <Link href='/products?type=haircare'>Chăm sóc tóc</Link> },
        ],
      },
      {
        type: 'group',
        label: 'Trang điểm',
        children: [
          { key: 'products_1_3', label: <Link href='/products?type=makeup'>Trang điểm</Link> },
        ],
      },
    ],
  },
  {
    key: 'products_1',
    label: <Link href='/products?cat=1'>Thuốc</Link>,
    children: [
      {
        type: 'group',
        label: 'Loại thuốc',
        children: [
          { key: 'products_1_4', label: <Link href='/products?type=prescription'>Thuốc kê đơn</Link> },
          { key: 'products_1_5', label: <Link href='/products?type=otc'>Thuốc không kê đơn</Link> },
        ],
      },
    ],
  },
  {
    key: 'products_2',
    label: <Link href='/products?cat=2'>Chăm sóc cá nhân</Link>,
    children: [
      {
        type: 'group',
        label: 'Vệ sinh',
        children: [
          { key: 'products_2_1', label: <Link href='/products?type=hygiene'>Vệ sinh cá nhân</Link> },
          { key: 'products_2_2', label: <Link href='/products?type=oralcare'>Chăm sóc răng miệng</Link> },
        ],
      },
    ],
  },
  { key: 'products_3', label: <Link href='/products?cat=3'>Thiết bị y tế</Link> },
  { key: 'products_4', label: <Link href='/products?cat=4'>Tiêm chủng</Link> },
  {
    key: 'promotions',
    label: <Link href='/promotions'>Bệnh & Góc sức khỏe</Link>,
    children: [
      {
        type: 'group',
        label: 'Thông tin sức khỏe',
        children: [
          { key: 'promotions_1', label: <Link href='/promotions?type=health-tips'>Mẹo sức khỏe</Link> },
          { key: 'promotions_2', label: <Link href='/promotions?type=diseases'>Thông tin bệnh</Link> },
        ],
      },
    ],
  },
  { key: 'about', label: <Link href='/about'>Hệ thống nhà thuốc</Link> },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  //const [current, setCurrent] = useState<string>('home');

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (): void => {
    console.log('Searching for:', searchQuery);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // const onClick: MenuProps['onClick'] = (e) => {
  //   setCurrent(e.key);
  // };


  const menuItems: MenuProps['items'] = items.map((item) => ({
    key: item.key,
    label: item.label,
    children: item.children?.map((child) =>
      'type' in child && child.type === 'group'
        ? {
          type: 'group',
          label: child.label,
          children: child.children.map((subChild) => ({
            key: subChild.key,
            label: subChild.label,
          })),
        }
        : {
          key: (child as CustomMenuItem).key,
          label: (child as CustomMenuItem).label,
        }
    ),
  }));

  //keyword search
  const searchKeywordMenuItems: MenuProps['items'] = [
    { key: 'search_milk', label: <Link href='/products?search=sua'>Sữa</Link> },
    { key: 'search_vaccine', label: <Link href='/products?search=vaccine'>Vaccine</Link> },
    { key: 'search_vitamin', label: <Link href='/products?search=vitamin'>Vitamin</Link> },
    { key: 'search_oto', label: <Link href='/products?search=oto'>Ô tô đồ chơi</Link> },
  ];

  return (
    <header>
      <div className='bg-[#3c81e8] hidden md:block text-white py-2'>
        <div className='md:container md:mx-auto flex justify-between'>
          <div className='flex gap-3'>
            <span>Trung tâm tiêm chủng Long Châu</span>
            <span>
              <a href='https://tiemchunglongchau.com.vn/' className='!underline !text-white font-bold'>
                Xem chi tiết
              </a>
            </span>
          </div>
          <div className='flex justify-end'>
            <span className='mx-3 cursor-default'>

              <MobileFilled /> {'\u00A0'}

              {/* nhớ đổi link */}
              <Popover content={<QRCode value="https://ant.design" bordered={false} icon='/images/longchau-qr.png' size={100} />}>
                Tải ứng dụng
              </Popover>
            </span>
            <span className='cursor-default'>
              <PhoneFilled /> {'\u00A0'}
              Tư vấn ngay:{'\u00A0'}
            </span>
            <span>
              <a href='tel:18006928' className=' !text-white'>1800 6928</a>
            </span>
          </div>
        </div>
      </div>

      <div className='md:bg-[url("/images/bg-header.png")] bg-cover bg-[#3c81e8]'>
        <div className='md:container md:mx-auto'>
          {/* Mobile layout */}
          <div className='flex justify-between items-center md:hidden px-3 py-2'>
            <Button
              icon={<MenuOutlined />}
              onClick={toggleMenu}
              style={{ fontSize: '24px' }}
              className='!text-white !bg-transparent !border-none'
            />
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt='logo'
                width={0}
                height={0}
                sizes='(max-width: 768px) 150px, 200px'
                className='w-[120px] h-auto max-w-full object-cover'
                priority
              />
            </Link>
            <Link href='/cart' className='text-white'>
              <ShoppingCartOutlined style={{ fontSize: '24px' }} />
            </Link>
          </div>

          {/* Desktop layout */}
          <div className='hidden md:flex align-bottom'>
            <div className='flex basis-[20%] m-4'>
              <Link href='/'>
                <Image
                  src='/images/logo.png'
                  alt='logo'
                  width={0}
                  height={0}
                  sizes='(max-width: 768px) 100px, 150px'
                  className='w-[200px] h-auto max-w-full object-contain'
                  priority
                />
              </Link>
            </div>

            <div className='flex basis-[60%] items-center px-4 mt-3'>
              <Input
                placeholder='Tìm kiếm sản phẩm...'
                value={searchQuery}
                onChange={handleChange}
                suffix={
                  <Button
                    icon={<SearchOutlined />}
                    onClick={handleSearch}
                    type='text'
                  />
                }
                className='custom-search-bar'
                style={{ borderRadius: '30px' }}
              />
            </div>
            <div className='flex basis-[25%] justify-evenly'>
              <div className='text-white custom-cart'>
                <Link href='/cart' className='flex items-center'>
                  <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                  <span className='ml-1'>Giỏ hàng</span>
                </Link>
              </div>
              <div className='text-white custom-account'>
                <Link href='/account' className='flex items-center'>
                  <UserOutlined style={{ fontSize: '24px' }} />
                  <span className='ml-1'>Tài khoản</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Menu with Search Keywords */}
          <div className='hidden md:inline'>
            <div className='flex justify-center'>
              <Menu
                style={{
                  background: 'transparent',
                  color: '#fff',
                  width: '100%',
                  justifyContent: 'center',
                }}
                mode='horizontal'
                items={searchKeywordMenuItems}
                className='custom-menu'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu with Submenus */}
      <div className='hidden md:block'>
        <div className='flex justify-center'>
          <Menu
            // onClick={onClick}
            mode='horizontal'
            items={menuItems}
            style={{
              width: '100%',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title='Menu'
        placement='left'
        onClose={toggleMenu}
        open={isMenuOpen}
        closeIcon={<CloseOutlined />}
        width={300}
      >
        <Link href='/account' className='flex items-center custom-ant-menu'>
          <UserOutlined className='mr-2' />
          Tài khoản
        </Link>
        <Menu
          mode='inline'
          items={menuItems}
          className='border-none'
        // onClick={onClick}
        />
      </Drawer>
    </header>
  );
};

export default Header;