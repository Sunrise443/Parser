import { Card } from "antd";
import React from "react";

import VacancyCard from "./VacancyCard";


const VacanciesCard = ({allVacancies}) => {
  return (
    <Card title="Найденные вакансии" style={{maxWidth: 1000}} className="results-list">
      <VacancyCard allVacancies={allVacancies}/>
    </Card>
  )
}

export default VacanciesCard
  