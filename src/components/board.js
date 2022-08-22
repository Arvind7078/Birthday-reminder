import React from 'react';
import './board.css';
import List from './list';

const Info = [{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Arvind Kumar", birthday: "1995-12-22"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Enu Kumari", birthday: "1998-11-29"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Abhishek Chaudhary", birthday: "1996-01-22"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Ankur Chauhan", birthday: "1996-02-14"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Nitin Chauhan", birthday: "1996-02-18"
},
{
  img : "https://scontent.fdel42-1.fna.fbcdn.net/v/t1.6435-9/150840253_3342726015829285_5860186656960698176_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=CJ-s0ixW4-cAX8R2fvV&_nc_ht=scontent.fdel42-1.fna&oh=00_AT-zA-ey3xqdGqPRaHlWulQ7S76v_2udgFCFOpLReTyhAg&oe=63280688",
  name : "Saurabh Dhasmana", birthday: "1996-08-02"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Anita Upadhayay", birthday: "1995-08-21"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Keshav Dev", birthday: "1967-07-20"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Premwati Devi", birthday: "1972-01-01"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Rohit Upadhayay", birthday: "1990-11-25"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Shivam Kumar", birthday: "1999-03-17"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Ayush Kumar", birthday: "2019-08-21"
},
{
  img : "https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png",
  name : "Shikha Gupta", birthday: "1993-09-03"
},
{
  img : "https://scontent.fdel42-1.fna.fbcdn.net/v/t39.30808-6/272405776_3229096914079045_1712272415342367478_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-pG4hop9vjIAX_j4xgO&_nc_ht=scontent.fdel42-1.fna&oh=00_AT_RK_GKJgsUjW6_WWmuddeQaYO6-qPw_d7six03EbW5KA&oe=6307D746",
  name : "Rekha Routela", birthday: "1996-08-22"
},
]

export default function board() {
  return (
    <main id="site-main">
        <h1 className='text-dark title'>Birthday Reminder</h1>
        <div className='board'>
            <List info={today(Info)}></List>
            <h2 className='upcoming text-dark'>Upcoming</h2>
            <List info={upcoming(Info,2)} upcoming={true}></List>
        </div>
    </main>
  )
}

function today(person){
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filter = person.filter(data =>{
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();

    return currentDay == day && currentMonth == month;
  })

  return filter;
}


// upcoming birthday's.

function upcoming(person,toMonth){
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter(data =>{
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if(currentDay == day) return;
    return month >= currentMonth && month <= currentMonth + toMonth;
  });

  return filter;
}