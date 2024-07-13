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
                length: allVacancies.length,
              },
              (_, i) => (
              <Card
                style={{marginTop: 16,}}
                type="inner"
                title={allVacancies[i].name}
                extra={<a href={allVacancies[i].link}>Перейти к вакансии</a>}
                key={i}
              >
                <div className="flex items-center gap-4">
                  {allVacancies[i].salary}
                </div>
                <div>
                  {allVacancies[i].city}
                </div>
                <div>
                  {allVacancies[i].experience}
                </div>
            </Card>
              ),
            )}
        </Card>
      </div>
    )
  }

export default VacanciesCard
  