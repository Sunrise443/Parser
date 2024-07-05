import { Button, InputNumber, Form, Input, Select } from 'antd';
const {Option} = Select


function SearchBar() {

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
            <Input placeholder = 'Название вакансии' />
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
      </div>
    )
  }

export default SearchBar
  