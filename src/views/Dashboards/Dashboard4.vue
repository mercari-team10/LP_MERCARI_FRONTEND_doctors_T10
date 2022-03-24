<template>
  <b-container fluid>
    <br/><br/><br/>
    <b-row align-v="center">
      <b-col lg="6">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height iq-user-profile-block">
          <template v-slot:body>
            <div class="user-details-block">
              <div class="user-profile text-center">
                <img src="../../assets/images/user/12.jpg" alt="profile-img" class="avatar-130 img-fluid">
              </div>
              <div class="text-center mt-3">
                <h4><b>Parth Srivastava</b></h4>
                <p>HR Kadim Hospital</p>
                Specializations: <p style="font-size: 105%" class="badge badge-primary">Viral Infection</p>
              </div>
              <hr>
              <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                <li class="text-center">
                  <h3 class="counter">7</h3>
                  <span>Years of Experience</span>
                </li>
              </ul>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Upcoming Appointments</h4>
          </template>
          <template v-slot:body>
            <ul class="list-inline m-0 p-0">
              <div v-for="x in apts.slice(0,3)" :key="x.nhid">
                <li>
                  <h6 class="float-left mb-1">{{x.name}}</h6><br/>
                  <h6 class="float-left mb-1">({{x.nhid}})</h6>
                  <b-button @click="removeApt(x.nhid)" class="float-right" variant="primary">Cancel Appointment</b-button>
                  <div class="d-inline-block w-100">
                    <p class="badge badge-primary">{{x.time}} </p> :
                    <p class="badge badge-info">{{x.date}}</p>
                  </div>
                </li>
                <hr/>
              </div>
            </ul>
            <b-pagination :value="1" :total-rows="40" align="center" />
          </template>
        </iq-card>
      </b-col>
      <!-- <b-col lg="8">
        <iq-card class-name=iq-card-block iq-card-stretch iq-card-height>
          <template v-slot:headerTitle>
            <h4 class="card-title">Health Curve</h4>
          </template>
          <template v-slot:body>
            <ApexChart element="home-chart-06" :chartOption="darkChart1" v-if="$route.meta.dark"/>
            <ApexChart element="home-chart-06" :chartOption="chart1" v-else/>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="smaill-calender-home">
          <template v-slot:headerTitle>
            <h4 class="card-title">Nearest Treatment</h4>
          </template>
          <template v-slot:body>
            <flat-pickr :config="config" value="" class="d-none" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
              <h6>APPOINTMENTS</h6>
              <h3><b>5075</b></h3>
          </div>
            <ApexChart element="wave-chart-7" :chartOption="chart7" :isLive="true"/>
        </iq-card>
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
              <h6>NEW PATIENTS</h6>
              <h3><b>1200</b></h3>
          </div>
            <ApexChart element="wave-chart-8" :chartOption="chart8" :isLive="true"/>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="hospital-mgt">
          <template v-slot:headerTitle>
            <h4 class="card-title">Hospital Management</h4>
          </template>
          <template v-slot:body>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 20%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">OPD</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 30%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Treatment</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 60%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Laboratory Test</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 40%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">New Patient</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 35%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Doctors</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <div class="progress" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 28%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Discharge</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">35%</div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Patient Progress</h4>
          </template>
          <template v-slot:body>
            <ul class="patient-progress m-0 p-0">
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Bud Jet</h6>
                </div>
                <span class="badge badge-primary">30%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Barney Cull</h6>
                </div>
                <span class="badge badge-success">70%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Eric Shun</h6>
                </div>
                <span class="badge badge-danger">15%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Rick Shaw</h6>
                </div>
                <span class="badge badge-warning">55%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Ben Effit</h6>
                </div>
                <span class="badge badge-info">45%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Rick Shaw</h6>
                </div>
                <span class="badge badge-warning">55%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Marge Arita</h6>
                </div>
                <span class="badge badge-primary">65%</span>
              </li>
              <li class="d-flex align-items-center">
                <div class="media-support-info">
                  <h6>Barry Cudat</h6>
                </div>
                <span class="badge badge-danger">15%</span>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="pl-0 pr-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Patient overview</h4>
          </template>
          <template v-slot:body>
            <AmChart element="home-chart-03" :type=radialChat.type :option=radialChat.data  :height=radialChat.height />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Visits From Countries </h4>
          </template>
          <template v-slot:body>
            <div class="iq-details">
              <span class="title text-dark">United States</span>
              <div class="percentage float-right text-primary">95 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-primary" data-percent="95"></span>
                </div>
              </div>
            </div>
            <div class="iq-details mt-4">
              <span class="title text-dark">India</span>
              <div class="percentage float-right text-warning">75 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-warning" data-percent="75"></span>
                </div>
              </div>
            </div>
            <div class="iq-details mt-4">
              <span class="title text-dark">Australia</span>
              <div class="percentage float-right text-success">55 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-success" data-percent="55"></span>
                </div>
              </div>
            </div>
            <div class="iq-details mt-4">
              <span class="title text-dark">Brazil</span>
              <div class="percentage float-right text-danger">25 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-danger" data-percent="25"></span>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">New Appointments </h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown size="lg p-0"  variant="link" toggle-class="text-decoration-none" no-caret>
              <template v-slot:button-content>
                    <span class="dropdown-toggle p-0" id="dropdownMenuButton5" data-toggle="dropdown">
                      <i class="ri-more-fill m-0 text-primary"></i>
                    </span>
              </template>
              <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <div class="table-responsive">
              <table class="table mb-0 table-borderless">
                <thead>
                <tr>
                  <th scope="col">Patient</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Date</th>
                  <th scope="col">Timing</th>
                  <th scope="col">Contact</th>

                </tr>
                </thead>
                <tbody v-for="appointment in appointments" :key="appointment.id">
                <tr>
                  <td>{{appointment.patient}}</td>
                  <td>{{appointment.doctor}}</td>
                  <td>{{appointment.date}}</td>
                  <td>{{appointment.timing}}</td>
                  <td>{{appointment.contact}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Doctors Lists</h4>
          </template>
          <template v-slot:body>
            <ul class="doctors-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center" v-for="doctor in doctors" :key="doctor.name">
                <div class="user-img img-fluid"><img :src="doctor.img" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="media-support-info ml-3">
                  <h6>{{doctor.name}}</h6>
                  <p class="mb-0 font-size-12">{{doctor.degree}}</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <b-dropdown size="lg"  variant="link" toggle-class="p-0 text-decoration-none" no-caret>
                    <template v-slot:button-content class="p-0">
                    <span class="dropdown-toggle p-0" id="dropdownMenuButton6" data-toggle="dropdown">
                      <i class="ri-more-2-line"></i>
                    </span>
                    </template>
                    <b-dropdown-item href="#"><i class="ri-eye-line mr-2"></i>View</b-dropdown-item>
                    <b-dropdown-item href="#"><i class="ri-bookmark-line mr-2"></i>Appointment</b-dropdown-item>
                  </b-dropdown>
                </div>
              </li>
            </ul>
            <a href="javascript:void(0);" class="btn btn-primary d-block mt-3"><i class="ri-add-line"></i> View All Doctors </a>
          </template>
        </iq-card>
      </b-col> -->
    </b-row>
  </b-container>
</template>
<script>
import IqCard from '../../components/xray/cards/iq-card'
import { xray } from '../../config/pluginInit'
const body = document.getElementsByTagName('body')
export default {
  name: 'Dashboard4',
  components: { IqCard },
  data () {
    return {
      config: {
        dateFormat: 'Y-m-d',
        inline: true
      },
      apts: [
        { name: 'Sanyog Gupta', nhid: '50354453-69eb-48a2-8168-c30d8d44b446', date: '2022-03-25', time: '09:00 AM' },
        { name: 'Aditya Gupta', nhid: '3199636d-6a9c-41f6-afdc-301aa3d7b39f', date: '2022-03-25', time: '11:00 AM' },
        { name: 'Abhinav Sharma', nhid: '6ffcaaa3-5fe5-403f-bb3f-b5926abc7122', date: '2022-03-25', time: '15:00 PM' },
        { name: 'Prarabdh Dar', nhid: 'e1ec148a-a1cf-4bef-92a4-b49ad6c2b45b', date: '2022-03-26', time: '09:00 AM' }
      ]
    }
  },
  methods: {
    removeApt: function (nhid) {
      this.apts = this.apts.filter(function (x) { return x.nhid != nhid })
    }
  },
  mounted () {
    xray.index()
    body[0].classList.add('sidebar-main-menu')
  },
  destroyed () {
    body[0].classList.remove('sidebar-main-menu')
  }
}
</script>
