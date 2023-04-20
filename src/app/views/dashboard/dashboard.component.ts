import { Component, OnInit } from '@angular/core';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { DashboardService } from './services/dashboard.service'
const avatar2 = './assets/img/avatars/2.jpg';
const avatar3 = './assets/img/avatars/3.jpg';
const avatar1 = './assets/img/avatars/1.jpg';
const avatar4 = './assets/img/avatars/4.jpg';
const avatar5 = './assets/img/avatars/5.jpg';
const avatar6 = './assets/img/avatars/6.jpg';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private chartsData: DashboardChartsData,
    private dashboardService: DashboardService
  ) { }

  public countAppointment!:Number
  public totValueAppointment!:Number
  public ticket !: Number
  public progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 }
  ];

  public progressGroupExample2 = [
    { title: 'Male', icon: 'cilUser', value: 53 },
    { title: 'Female', icon: 'cilUserFemale', value: 43 }
  ];

  public progressGroupExample3 = [
    { title: 'Organic Search', icon: 'cibGoogle', percent: 56, value: '191,235' },
    { title: 'Facebook', icon: 'cibFacebook', percent: 15, value: '51,223' },
    { title: 'Twitter', icon: 'cibTwitter', percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: 'cibLinkedin', percent: 8, value: '27,319' }
  ];





  public salesChart: IChartProps = {};
  public trafficChart: IChartProps = {};

  ngOnInit(): void {
    this.initCharts();
    this.getCountAppointments()
  }

  initCharts(): void {
    this.salesChart = this.chartsData.salesChart;
    this.trafficChart = this.chartsData.trafficChart;


  }

  //Data
  getCountAppointments(){
    this.dashboardService.getCountAppointment().subscribe({
      next : (response)=>{
        console.log({response})
        this.countAppointment = response.result[0].count
        this.totValueAppointment = response.result[0].totalValue

        this.ticket = response.result[0].totalValue/response.result[0].count
      },
      error: (err)=>{
        console.log({err})
      }
    })
  }
}
