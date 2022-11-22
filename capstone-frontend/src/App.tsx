import React, { useState } from 'react';
import { Layout, Space } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Image } from 'antd';
import { Input } from 'antd';
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css';
import AppSpacing from './functions/spacing';
import AppLargeSpacing from './functions/largespacing';
import AppUpload from './functions/upload';
import Description from './Description';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

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
            <Link to="/tags/" ><Button type="primary" size='large'>Tags on Images</Button></Link>
          </nav>
          <AppSpacing/>         
          <nav>
            <Link to="/ocr/"><Button type="primary" size='large'>OCR on Receipts</Button></Link>
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

  const [image, setImage] = useState("Choose an Option")

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setImage(e.target.value)
  }

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
      fetchData(".\\public\\OCR\\" + image + ".jpg", "ocr");
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
            width={800}
            height={1000}
            src = {image + ".jpg"}
          />
          <section> 
            <Description items = {description} />
          </section>
          <section>
            <h3> Options: (HomeDepot, HomeDepot2, HomeDepot3, Mezcalero, Ace, Ace2, Builders, Lowes, Walmart) </h3>
          </section>
          <AppSpacing/>
          <Space size={'middle'}>
          <Input placeholder="Basic usage" value={image} onChange={handleChange} />
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
  const [image, setImage] = useState("Choose an Option")

  // const options = ["bathroom", "bathroom_construction", "bedroom construction", "bedroom", "familyroom construction", "familyroom", "kitchen contruction", "kitchen decor", "kitchen"]

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    // for (let i = 0; i < options.length; i++) {
    //   if (options[i] == e.target.value) {
        setImage(e.target.value)
      // } else {
      //       setImage("bathroom")
      // } 
    }

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
      arrayResult.push(" (Score: ")
      arrayResult.push(jsonResult.response[i].score)
      arrayResult.push(")")
      arrayResult.push(" | ")
    }

    arrayResult.pop();

    return arrayResult;
  }

  const onClickHandler = async () => {
    let jsonResult = [];

    try {
      jsonResult = await fetchData(".\\public\\TAGS\\" + image + ".jpg", "tags");
    } catch (error) {
      console.error(error);
    }

    console.log(jsonResult);
    let join = jsonResult.join('');
    setDescription(join);
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
            height={800}
            // src= {"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/pavelstasevich181101027.jpg"}
            src = {image + ".jpg"}
          />
          <section> 
            <Description items = {description} />
          </section>
          <section>
            <h3> Options: (bathroom, bathroom_construction, bedroom construction, bedroom, familyroom construction, familyroom, kitchen contruction, kitchen decor, kitchen) </h3>
          </section>
          <AppSpacing/>
          <Space size={'middle'}>
           <Input placeholder="Basic usage" value={image} onChange={handleChange} />
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