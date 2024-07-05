import { Card, Button } from "antd";
import VacancyCard from "./VacancyCard";

function VacanciesCard() {

    return (
      <div>
        <Card title="Найденные вакансии" style={{maxWidth: 1000}}>
          {Array.from(
              {
                length: 50,
              },
              (_, i) => (
                <VacancyCard key={i} type="primary"/>
              ),
            )}
        </Card>
      </div>
    )
  }

export default VacanciesCard
  