import React, {useState} from 'react';
import { Card, Button, Input, Form, Typography } from "antd";
const { Title } = Typography;

const FilterCard = ({allVacancies, setAllVacancies}) => {
  
  const [city, setCity] = useState('')

  const filterOnClick = () => {
    console.log(allVacancies)
    setAllVacancies(Object.values(allVacancies).filter((vacancy) => vacancy.city === city))
  };

  return (
    <Card
        title="Фильтр"
        bordered={false}
        style={{
        width: 200,
        }}
    >
      <Title level={5}>Город</Title>
      <Form
        name='control-hooks'
        initialValues={{remembered:true}}
        autoComplete='off'
        onFinish={filterOnClick}
      >
        <Form.Item name='cityInput'>
          <Input type='string' value={city} onChange={(e) => setCity(e.target.value)}/>
        </Form.Item>

        <Form.Item>
          <Button style={{marginTop:20,}} type='primary' htmlType='submit'>
            Показать
          </Button>
        </Form.Item>
        </Form>
        
    </Card>
  )
  }

export default FilterCard
