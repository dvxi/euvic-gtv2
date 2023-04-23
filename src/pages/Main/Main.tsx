import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const Main = () => {
	return (
		<Layout className="site-layout">
			<Header style={{ backgroundColor: "#fff", display: 'flex', alignItems: 'center' }}>
				<h1>Main</h1>
			</Header>
			<Content style={{ margin: '16px' }}>
				<div style={{ padding: 24, minHeight: 360, background: '#fff', borderRadius: '16px' }}>
					<h1>Main Page</h1>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Euvic 2023 - [GTv2]</Footer>
		</Layout>
	);
}

export default Main;