import axios from 'axios'
import {Layout, Menu} from 'antd';
const { Header, Content, Footer, Sider} = Layout;
import React, {useEffect, useState} from 'react';

import SearchBar from "./components/SearchBar.jsx"
import VacanciesCard from "./components/VacanciesCard.jsx"
import FilterCard from './components/FilterCard.jsx';


const App = () => {
  const [allVacancies, setAllVacancies] = useState([]);


  const fetchVacancies = (vac_name, vac_salary, vac_experience) => {
    axios.get(`http://localhost:8000/vacancies?name=${vac_name}&salary=${vac_salary}&experience=${vac_experience}`).then(response => {
      setAllVacancies(response.data)
    })
  }

  useEffect(() => {
    fetchVacancies('программист', '20', 'noExperience')
  }, [])

  return (
    <div className='bg-[beige]'>
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
          }}
        >
          <div
            style={{
              minHeight: 280,
              padding: 24,
            }}
          >        
             
            <SearchBar/>
            <VacanciesCard/>

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
