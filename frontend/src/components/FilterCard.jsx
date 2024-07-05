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
            <Button
              style={{marginTop:20,}}>
              Показать</Button>

        </Card>
      </div>
    )
  }

export default FilterCard
