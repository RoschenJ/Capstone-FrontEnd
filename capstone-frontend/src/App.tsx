import React, { useState } from 'react';
import { Layout, Space } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Image } from 'antd';
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css';
import AppSpacing from './functions/spacing';
import AppLargeSpacing from './functions/largespacing';
import AppUpload from './functions/upload';
import Description from './Description';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

var image = 'https://media.architecturaldigest.com/photos/60a6a478ced6797772f44d7a/3:2/w_1599,h_1066,c_limit/20191011-DSC_7759-Edit_HI_RES.jpeg'

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
          <AppLargeSpacing/>
          <nav>
            <Link to="/tags" ><Button type="primary" size='large'>Tags on Images</Button></Link>
          </nav>
          <AppSpacing/>         
          <nav>
            <Link to="/ocr"><Button type="primary" size='large'>OCR on Receipts</Button></Link>
          </nav>
          <AppLargeSpacing/>
        </Content>
        <Footer style={{background:'#003b56', color:'white'}}>©Buildertrend</Footer>
      </Layout>
    </div>
  );
}

function AppOCR() {
  const LOCALHOST = 'https://localhost:7273/api/main/post';

  const [description, setDescription] = useState([]);

  async function fetchData(_path: string, _type: string) {
    const formData = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({path: _path, type: _type}) 
    }

    const response = await fetch(LOCALHOST, formData);
    const jsonResult = await response.json();
    let zero = jsonResult.response[0].description;

    setDescription(zero)
  }

    const onClickHandler = async () => {
      fetchData("C:\\Users\\Roschen\\Documents\\UNOFall2022\\Capstone\\Receipt Images\\Mezcalero.jpg", "ocr");
    }
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
            src= {"https://upserve.com/media/sites/2/Bill-from-Mezcalero-in-Washington-D.C.-photo-by-Alfredo-Solis-1-e1507226752437.jpg"}
          />
          <section> 
            <Description items = {description} />
          </section>
          <AppSpacing/>
          <Space size={'middle'}>
          <AppUpload/>
          {/* <Button type="primary">Upload</Button>           */}
          <Button type="primary" onClick={onClickHandler}>View Details</Button>
          </Space>
          <AppSpacing/>
        </Content>
        <Footer style={{background:'#003b56', color:'white'}}>©Buildertrend</Footer>
      </Layout>
    </div>
  );
}

function AppTags() {
  const LOCALHOST = 'https://localhost:7273/api/main/post';

  const [description, setDescription] = useState("");

  async function fetchData(_path: string, _type: string) {
    const formData = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({path: _path, type: _type}) 
    }

    const response = await fetch(LOCALHOST, formData);
    const jsonResult = await response.json();
    let arrayResult = [];

    for (let i = 0; i < jsonResult.response.length; i++ ) {
      arrayResult.push(jsonResult.response[i].description)
    }

    return arrayResult;
  }
    const onClickHandler = async () => {
      let jsonResult = [];
 
      try {
        jsonResult = await fetchData("C:\\Users\\Roschen\\Documents\\UNOFall2022\\Capstone\\Construction Images\\kitchen-decor.jpg", "tags");
      } catch (error) {
        console.error(error);
      }

      setDescription(jsonResult.join(' '))
    }
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
            src= {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-decor-ideas-1580491833.jpg?crop=1.00xw:0.669xh;0,0.151xh&resize=500:*'}
          />
          <section> 
            <Description items = {description} />
          </section>
          <AppSpacing/>
          <Space size={'middle'}>
          <AppUpload/>
          {/* <Button type="primary">Upload</Button>           */}
          <Button type="primary" onClick={onClickHandler}>View Details</Button>
          </Space>
          <AppSpacing/>
        </Content>
        <Footer style={{background:'#003b56', color:'white'}}>©Buildertrend</Footer>
      </Layout>
    </div>
  );
}

export default App;