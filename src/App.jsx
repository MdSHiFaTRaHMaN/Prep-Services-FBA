import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Card, Table } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

const { Column } = Table;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    getItem("Dashboard", "1", <PieChartOutlined />),
    getItem("Investment", "2", <DesktopOutlined />, [
      getItem("Overview", "3"),
      getItem("Send Inventory", "4"),
    ]),
    getItem("Product Return", "5", <FileOutlined />),
    getItem("Prep", "6", <FileOutlined />),
    getItem("Billing", "sub1", <UserOutlined />, [
      getItem("Overview", "7"),
      getItem("Payment", "8"),
    ]),
    getItem("Integration", "sub2", <TeamOutlined />, [
      getItem("Amazon", "9"),
      getItem("Shopify", "10"),
    ]),
    getItem("Rates", "11", <FileOutlined />),
    getItem("Reports", "12", <FileOutlined />),
  ];

  const data = [
    {
      key: "1",
      date: "01/01/2024",
      transactionNo: "101-00979",
      type: "FBM",
      qty: 1,
      status: "Out for Delivery",
      amount: "$34,295",
    },
    // Add more rows here
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout className="">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Card title="Total Users" bordered={false}>
              40,689
            </Card>
            <Card title="Total Orders" bordered={false}>
              10,293
            </Card>
            <Card title="Total Sales" bordered={false}>
              $89,000
            </Card>
            <Card title="Total Pending" bordered={false}>
              2,040
            </Card>
          </div>
          <Card title="Deals Details">
            <Table dataSource={data} pagination={false}>
              <Column title="Date" dataIndex="date" key="date" />
              <Column
                title="Transaction No."
                dataIndex="transactionNo"
                key="transactionNo"
              />
              <Column title="Type" dataIndex="type" key="type" />
              <Column title="Qty" dataIndex="qty" key="qty" />
              <Column title="Status" dataIndex="status" key="status" />
              <Column title="Amount" dataIndex="amount" key="amount" />
            </Table>
          </Card>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
