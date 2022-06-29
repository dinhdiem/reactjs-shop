const { Header} = Layout;
import { Layout, Menu} from 'antd';
import { Link } from 'react-router-dom';

type Props = {}

const HeaderAdmin = (props: Props) => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/admin"/> Home
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/product"/> Product Manager
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/news"/> News Manager</Menu.Item>
        </Menu>
    </Header>
  )
}

export default HeaderAdmin