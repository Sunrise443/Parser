import { Card, Button, Flex, Input, Typography } from "antd";
const { Title } = Typography;

function FilterCard() {

    return (
      <div>
        <Card
            title="Фильтр"
            bordered={false}
            style={{
            width: 200,
            }}
        >
            <Title level={5}>Город</Title>
            <Input/>

        </Card>
      </div>
    )
  }

export default FilterCard