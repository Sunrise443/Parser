import { Button, Form, Input, Select } from 'antd';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'

import { VacanciesContext } from '../App';

const SearchBar = () => {

  const {setAllVacancies} = useContext(VacanciesContext);

  const [vName, setVName] = useState('')
  const [vSalary, setVSalary] = useState(0)
  const [vExperience, setVExperience] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:8000/vacancies?name=стажер&salary=20000&experience=noExperience`).then(response => {
      setAllVacancies(response.data)})
  }, []);
  
  function searchOnClick() {
    console.log(vName, vSalary, vExperience)
    axios.get(`http://localhost:8000/vacancies?name=${vName}&salary=${vSalary}&experience=${vExperience}`).then(response => {
      setAllVacancies(response.data)
    });
  };


  return (
    <Form
      className='flex'
      name="control-hooks"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 975,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      onFinish={searchOnClick}
    >
      <Form.Item
        style={{width: 400,}}
        name="vac_name"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите название вакансии!',
          },
        ]}
      >
        <Input placeholder = 'Название вакансии' value={vName} onChange={(e) => setVName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        style={{width: 400}}
        name="vac_salary"
        rules={[{required: false},
        ]}
      >
        <Input type = 'number' placeholder = 'Зарплата от' value={vSalary} onChange={(e) => setVSalary(e.target.value)}/>
      </Form.Item>

      <Form.Item
        style={{
          width: 400,
        }}
        name="vac_experience"
        rules={[{required: false},
        ]}
      >
        <Select
          placeholder="Опыт работы"
          allowClear
          options={[
            {label: 'Нет опыта', value: "noExperience"},
            {label: 'От 1 года до 3 лет', value: "between1And3"},
            {label: 'От 3 до 6 лет', value: "between3And6"},
            {label: 'Более 6 лет', value: "moreThan6"},
          ]}
          onChange={(value) => setVExperience(value)}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Найти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SearchBar
  