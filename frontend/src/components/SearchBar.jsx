import { Button, InputNumber, Form, Input, Select } from 'antd';
import React, {useState} from 'react';
const {Option} = Select


function SearchBar() {
  const [allVacancies, setAllVacancies] = useState([]);
  const [vName, setVName] = useState('')
  const [vSalary, setVSalary] = useState('')
  const [vExperience, setVExperience] = useState('')

  const fetchVacancies = (vac_name, vac_salary, vac_experience) => {
    axios.get(`http://localhost:8000/vacancies?name=${vac_name}&salary=${vac_salary}&experience=${vac_experience}`).then(response => {
      setAllVacancies(response.data)
    })
  }
  
  const searchOnClick = (vac_name, vac_salary, vac_experience) => {
    setVName(vac_name)
    setVSalary(vac_salary)
    setVExperience(vac_experience)
    fetchVacancies(vac_name, vac_salary, vac_experience)
  }

  return (
    <div>
      <Form
        className='flex'
        name="basic"
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
      >
        <Form.Item
          style={{
            width: 400,
          }}
          name="vac_name"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите название вакансии!',
            },
          ]}
        >
          <Input placeholder = 'Название вакансии' value={vName} onChange={(e) => searchOnClick(e.target.value)}/>
        </Form.Item>

        <Form.Item
          style={{
            width: 400,
          }}
          name="vac_experience"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select
            placeholder="Опыт работы"
            allowClear
          >
            <Option value="noExperience">Нет опыта</Option>
            <Option value="between1And3">От 1 года до 3 лет</Option>
            <Option value="between3And6">От 3 до 6 лет</Option>
            <Option value="moreThan6">Более 6 лет</Option>
          </Select>
        </Form.Item>

        <Form.Item
          style={{
            width: 400,
          }}
        >
          <InputNumber
            placeholder='Зарплата от'
            style={{
              width: '100%',
            }}
            value={vSalary}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={searchOnClick}>
            Найти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SearchBar
  