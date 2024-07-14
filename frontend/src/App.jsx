import {Layout, Menu, Spin} from 'antd';
const { Header, Content, Footer, Sider} = Layout;
import React, {useState} from 'react';

import SearchBar from "./components/SearchBar.jsx"
import VacanciesCard from "./components/VacanciesCard.jsx"
import FilterCard from './components/FilterCard.jsx';


const App = () => {

  const [allVacancies, setAllVacancies] = useState([{name:'Введите данные'}])

  return (
    <div className='App bg-[beige]'>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1 className='text-white'>Parser</h1>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 1600,
          }}
        />
      </Header>


      <div className='flex'>
        <Sider>
          <FilterCard/>
        </Sider>

        <Content
          style={{
            padding: '0 48px',
            minHeight: '100vh',
          }}
        >
          <div
            style={{
              minHeight: 280,
              padding: 24,
            }}
          >        

            <SearchBar setAllVacancies={setAllVacancies}/>
            {allVacancies ? <VacanciesCard allVacancies={allVacancies}/> : <Spin size='large'/>}

          </div>
        </Content>
      </div>


      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Study project ©2024 Created by Sunny
      </Footer>
    </div>
  )
}

export default App
