import React from 'react';


function List({data,isUpcomming}) {
    return (
       <ul>
        {iterationList(data,isUpcomming)}
       </ul>
      );
}

function iterationList(data, isUpcomming){
    if(!data) return;
    const bgColor = isUpcomming ? {backgroundColor: "#ffe66d"}:{}

    return(
        <>
            {
                data.map((person, index)=> {
                    return(
                        <li key={index}>
                        <div className='flex' style={bgColor}>
                            <img src={person.img} alt="img" />
                            <div className='title'>
                                <h3 className='name'>{person.name}</h3>
                                <h5 className='age'>{ageCalcualter(person.birthday)} Years</h5>
                                <h5>D.O.B {person.birthday}</h5>
                            </div>
                        </div>
                        </li>  
                    )
                })
            }
        </>
    )
}


function ageCalcualter(age){
    let year = new Date(age).getFullYear();
    let currentYear = new Date().getFullYear();

    let personAge = currentYear - year;
    return personAge;
}

export default List;