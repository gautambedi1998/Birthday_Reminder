import Data from './data'
import List from './list';
import './board.css';
import { useState } from 'react';

function Board() {
    //Using usestate to manage button state
    const[popUp, setPopUp] = useState(false);

    const togglePopUp = () => {
        setPopUp(!popUp)
    }
    return ( 
        <main id='site-main'>

            <div className='board'>
                <h1 className='text-light'> Birthday Reminder</h1>
                <List data={Today(Data)} />
                <h2 className='text-light'>Upcoming This Month </h2>
                <List data={Upcoming(Data)} isUpcomming={true} />
            </div> 
            <button onClick={togglePopUp}>View All People</button>  
            {popUp && (
                       <div className="modal">
                       <div onClick={togglePopUp} className="overlay"></div>
                       <div className="modal-content">
                         <h2>All People</h2>
                         <List data={Data}/>
                         <button className="close-modal" onClick={togglePopUp}>
                           CLOSE
                         </button>
                       </div>
                     </div>
            )}
        </main>
        
     );
}



function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();
    let filter = person.filter((data)=>{
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay == day && currentMonth == month;
    })

    return filter;
}

function Upcoming(person){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    let filter = person.filter((data)=>{
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        return currentMonth == month && currentDay < day;
    })

    return filter;
}



export default Board;