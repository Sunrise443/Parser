import { Card } from "antd";
import React from "react";


const VacancyCard = ({allVacancies}) => {

  console.log(allVacancies)
  return (
    <>
        {allVacancies.map((vacancy) => {
        return(
            <Card
                key={vacancy.id}
                style={{marginTop: 16,}}
                type="inner"
                title={vacancy.name}
                extra={<a href={vacancy.link} target="_blank">Перейти к вакансии</a>}
                >
                <div className="flex items-center gap-4">
                    {vacancy.salary}
                </div>
                <div>
                    {vacancy.city}
                </div>
                <div>
                    {vacancy.experience}
                </div>
            </Card>
        )})}
    </>
  )
}

export default VacancyCard;
