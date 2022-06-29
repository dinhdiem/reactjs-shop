import { Layout, Menu, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import FooterAdmin from '../partials/admin/FooterAdmin';
import HeaderAdmin from '../partials/admin/HeaderAdmin';
const { Header, Content, Footer } = Layout;

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <Layout>
      <HeaderAdmin />
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Outlet />
        </div>
      </Content>
      <FooterAdmin />
    </Layout>
  )
}

export default AdminLayout