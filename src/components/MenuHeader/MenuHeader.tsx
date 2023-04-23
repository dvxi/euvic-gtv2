import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Radio } from 'antd';
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';

import { Layout } from 'antd';

const { Sider } = Layout;

const MenuHeader = () => {
    const [collapsed, setCollapsed] = useState(false);
    return(
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, color: '#fff'}}>
        	<h1>Euvic</h1>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Menu.Item key="0" icon={<UserOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/main">Main</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/about">About</Link>
            </Menu.Item>
        </Menu>
				<Radio.Group defaultValue="a" buttonStyle="solid">
					<Radio.Button value="a">Polski</Radio.Button>
					<Radio.Button value="b">English</Radio.Button>
				</Radio.Group>
    </Sider>
    );
}

export default MenuHeader;