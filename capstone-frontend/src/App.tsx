import React from 'react';
import { Layout, Space } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Image } from 'antd';
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css';
import AppSpacing from './functions/spacing';
import AppUpload from './functions/upload';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

var image = 'https://media.architecturaldigest.com/photos/60a6a478ced6797772f44d7a/3:2/w_1599,h_1066,c_limit/20191011-DSC_7759-Edit_HI_RES.jpeg'

// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ path: "C:\\Users\\Roschen\\Pictures\\Best-farm-animals-cow.jpg", type: 'tags'})
// };

async function fetchData(_path: string, _type: string) {
  const response = await fetch('https://localhost:7273/api/main/post');
  const jsonResult = await response.json();
  return jsonResult;
}

document.addEventListener("DOMContentLoaded",async () => {
  let jsonResult = [];
  try {
    jsonResult = await fetchData("C:\\Users\\Roschen\\Pictures\\Best-farm-animals-cow.jpg", "tags");
  } catch (error) {
    console.error(error);
  }
  console.log(jsonResult);
});



function App() {
    return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="tags" element={<AppTags />} />
          <Route path="ocr" element={<AppOCR />} />
        </Routes>
      </div>
      </BrowserRouter>
    );
};

function AppHome() {
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
          {/* <Button type="primary" size='large'>Tags on Images</Button> */}
          <nav>
            <Link to="/tags" ><Button type="primary" size='large'>Tags on Images</Button></Link>
          </nav>
          <AppSpacing/>         
          {/* <Button type="primary" size='large'>OCR on Receipts</Button> */}
          <nav>
            <Link to="/ocr"><Button type="primary" size='large'>OCR on Receipts</Button></Link>
          </nav>
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

export default App;