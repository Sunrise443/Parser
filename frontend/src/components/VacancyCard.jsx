import { Card } from "antd";

function VacancyCard() {

    return (
      <div>
        <Card
            style={{marginTop: 16,}}
            type="inner"
            title="Название вакансии"
            extra={<a href="#">Перейти к вакансии</a>}
        >
            <div className="flex items-center gap-4">
                Зарплата
            </div>
            <div>
                Город
            </div>
            <div>
                Опыт работы
            </div>
        </Card>
      </div>
    )
  }

export default VacancyCard
  