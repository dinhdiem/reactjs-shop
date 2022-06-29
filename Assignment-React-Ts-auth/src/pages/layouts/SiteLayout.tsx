import React from 'react'
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
import { Link } from 'react-router-dom';

type Props = {}

const SiteLayout = (props: Props) => {
  return (
    <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content><Outlet /></Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
  )
}

export default SiteLayout