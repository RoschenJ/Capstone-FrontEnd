import React from 'react';
import { Layout, Space } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Image } from 'antd';
import './App.css';
import AppSpacing from './pages/spacing';
import AppUpload from './pages/upload';
// import AppTags from './pages/tags';
// import AppOCR from './pages/ocr';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

var image = 'https://media.architecturaldigest.com/photos/60a6a478ced6797772f44d7a/3:2/w_1599,h_1066,c_limit/20191011-DSC_7759-Edit_HI_RES.jpeg'

function AppTags() {
  return (
    <div className="App">
      <Layout>
        <Header style={{background:'#003b56'}}>
          <Title style={{color:'white'}}>TAGS ON IMAGES</Title>
        </Header>
        <Content style={{background:'white'}}>
          <AppSpacing/>
          <Image
            width={1200}
            src= {image}
          />
          <AppSpacing/>
          <Space size={'middle'}>
          <AppUpload/>
          {/* <Button type="primary">Upload</Button>           */}
          <Button type="primary">View Details</Button>
          </Space>
          <AppSpacing/>
        </Content>
        <Footer style={{background:'#003b56', color:'white'}}>©Buildertrend</Footer>
      </Layout>
    </div>
  );
}

function AppOCR() {
  return (
    <div className="App">
      <Layout>
        <Header style={{background:'#003b56'}}>
          <Title style={{color:'white'}}>OCR ON RECEIPTS</Title>
        </Header>
        <Content style={{background:'white'}}>
          <AppSpacing/>
          <Image
            width={1200}
            src= {image}
          />
          <AppSpacing/>
          <Space size={'middle'}>
          <AppUpload/>
          {/* <Button type="primary">Upload</Button>           */}
          <Button type="primary">View Details</Button>
          </Space>
          <AppSpacing/>
        </Content>
        <Footer style={{background:'#003b56', color:'white'}}>©Buildertrend</Footer>
      </Layout>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{background:'#003b56'}}>
          <Title style={{color:'white'}}>BuilderTrend</Title>
        </Header>
        <Content style={{background:'white'}}>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <Button type="primary" size='large'>Tags on Images</Button>
          <AppSpacing/>         
          <Button type="primary" size='large'>OCR on Receipts</Button>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
          <AppSpacing/>
        </Content>
        <Footer style={{background:'#003b56', color:'white'}}>©Buildertrend</Footer>
      </Layout>
    </div>
  );
}

//export default App;
//export default AppTags;
export default AppOCR;