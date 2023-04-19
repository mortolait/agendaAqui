import { Component, OnInit } from '@angular/core';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

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
    private chartsData: DashboardChartsData
  ) { }

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

  public tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021'
      },
      country: { name: 'USA', flag: 'cifUs' },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success'
      },
      activity: '10 sec ago'
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021'
      },
      country: { name: 'Brazil', flag: 'cifBr' },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info'
      },
      activity: '5 minutes ago'
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: 'cifIn' },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning'
      },
      activity: '1 hour ago'
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: 'cifFr' },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger'
      },
      activity: 'Last month'
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021'
      },
      country: { name: 'Spain', flag: 'cifEs' },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary'
      },
      activity: 'Last week'
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021'
      },
      country: { name: 'Poland', flag: 'cifPl' },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success'
      },
      activity: 'Last week'
    }
  ];

  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];

  public salesChart: IChartProps = {};
  public trafficChart: IChartProps = {};

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.salesChart = this.chartsData.salesChart;
    this.trafficChart = this.chartsData.trafficChart;
  }
}
