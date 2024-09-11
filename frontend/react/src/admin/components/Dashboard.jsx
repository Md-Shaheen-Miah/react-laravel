import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../../admin/css/Dashboard.css';
import Navbar from '../../admin/components/Navbar'
import Sidebar from '../../admin/components/Sidebar'

const Dashboard = () => {

    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Appointments',
            backgroundColor: '#6a82fb',
            borderColor: '#4a90e2',
            data: [45, 30, 60, 40, 75, 50],
          },
        ],
      };
    
      const lineData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Patients',
            fill: false,
            backgroundColor: '#f76b1c',
            borderColor: '#f76b1c',
            data: [65, 59, 80, 81],
          },
        ],
      };
    
      const pieData = {
        labels: ['Pediatrics', 'Orthopedics', 'Cardiology', 'Dermatology'],
        datasets: [
          {
            data: [30, 20, 15, 35],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50'],
          },
        ],
      };
  return (
         
    <>
    <Navbar/>
    <div style={{width:'100%'}}>
        <div style={{width:'20%', float:'left'}}><Sidebar/></div>
            <div style={{width:'80%', marginLeft:'20%', minHeight:'100vh'}}>
                <div className="dashboard">
                <h1 style={{marginTop:'90px'}}> Sheba Clinic Dashboard</h1>
                <div className="cards">
                    <div className="card">
                    <h2>Total Patients</h2>
                    <p>150</p>
                    </div>
                    <div className="card">
                    <h2>New Appointments</h2>
                    <p>45</p>
                    </div>
                    <div className="card">
                    <h2>Doctors Available</h2>
                    <p>10</p>
                    </div>
                </div>
                <div className="charts">
                    <div className="chart">
                    <h3>Appointments Over Time</h3>
                    <Bar data={barData} />
                    </div>
                    <div className="chart">
                    <h3>Patient Visits Weekly</h3>
                    <Line data={lineData} />
                    </div>
                    <div className="chart">
                    <h3>Department Distribution</h3>
                    <Pie data={pieData} />
                    </div>
                </div>
           </div>
        </div>
    </div> 
    </>
  )
}

export default Dashboard

