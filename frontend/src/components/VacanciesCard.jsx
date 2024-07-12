import { Card, Button } from "antd";
import React, { useContext, useMemo } from "react";

import { VacanciesContext } from "../App";


const VacanciesCard = () => {

  const { allVacancies } = useContext(VacanciesContext)
  
  console.log(allVacancies)
    return (
      <div>
        <Card title="Найденные вакансии" style={{maxWidth: 1000}}>
          {Array.from(
              {
                length: 50,
              },
              (_, i) => (
              <Card
                style={{marginTop: 16,}}
                type="inner"
                title="Название вакансии"
                extra={<a href="#">Перейти к вакансии</a>}
                key={i}
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
              ),
            )}
        </Card>
      </div>
    )
  }

export default VacanciesCard
  