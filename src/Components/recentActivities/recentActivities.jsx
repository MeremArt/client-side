import React from 'react'
import './recentActivities.css'

const RecentActivities = ({activities}) => {
  return (
    <div>
        <p>Recent Activities</p>
        <ul className='ul-box'>
            {activities.map((activity) =>(
                <li className='li-box' key={activity.id}><span className='icon'><span className='icon-icon'>{activity.icon}</span> {activity.description}</span>
                    <span className='time'>{activity.time}</span> 
                </li>
            ))}
            <a href="#">see all</a>
        </ul>
    </div>
  )
}

export default RecentActivities
