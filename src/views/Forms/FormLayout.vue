<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Patient Diagnosis</h4>
          </template>
          <template v-slot:body>
            <tab-nav :pills="true" class="iq-edit-profile d-flex" id="myTab-2" align="center">
              <tab-nav-items :active="true" id="home-tab-justify" href="#home-justify" ariaControls="home" role="tab" :ariaSelected="true" title="Select Appointment" />
              <tab-nav-items :active="false" id="profile-tab-justify" href="#profile-justify" ariaControls="profile" role="tab" :ariaSelected="false" title="Patient Details" />
              <tab-nav-items :active="false" id="contact-tab-justify" href="#contact-justify" ariaControls="contact" role="tab" :ariaSelected="false" title="Diagnosis Form" />
              <tab-nav-items :active="false" id="contact-tab-justify" href="#optionals-justify" ariaControls="optionals" role="tab" :ariaSelected="false" title="Optionals" />
              <tab-nav-items :active="false" id="final-tab-justify" href="#final-justify" ariaControls="final" role="tab" :ariaSelected="false" title="End Diagnosis" />
            </tab-nav>
            <tab-content id="myTabContent-3">
              <br/>
              <tab-content-item :active="true" id="home-justify" aria-labelled-by="home-tab-justify">
                <ul class="list-inline m-0 p-0">
                  <div v-for="x in apts.slice(0,3)" :key="x.nhid">
                    <li>
                      <h6 class="float-left mb-1">{{x.name}}</h6><br/>
                      <h6 class="float-left mb-1">({{x.nhid}})</h6>
                      <b-button v-if="getSel == x.nhid" class="float-right" variant="success">Selected</b-button>
                      <b-button v-else @click="setSel(x.nhid)" class="float-right" variant="primary">Select Appointment</b-button>
                      <div class="d-inline-block w-100">
                        <p class="badge badge-primary">{{x.time}} </p> :
                        <p class="badge badge-info">{{x.date}}</p>
                      </div>
                    </li>
                    <hr/>
                  </div>
                </ul>
                <b-pagination :value="1" :total-rows="40" align="center" />
              </tab-content-item>
              <tab-content-item :active="false" id="profile-justify" aria-labelled-by="profile-tab-justify">
                <b-row>
                  <b-col lg="8">
                    <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
                      <template v-slot:headerTitle>
                        <h4 class="card-title">Details Entered </h4>
                      </template>
                      <template v-slot:body>
                        <div class="table-responsive">
                          <table class="table mb-0 table-borderless">
                            <thead>
                            <tr>
                              <th scope="col">Field</th>
                              <th scope="col">Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>Name</td>
                              <td>Sanyog Gupta</td>
                            </tr>
                            <tr>
                              <td>NHID</td>
                              <td>50354453-69eb-48a2-8168-c30d8d44b446</td>
                            </tr>
                            <tr>
                              <td>Symptoms</td>
                              <td>yellowing of eyes</td>
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
                        <h4 class="card-title">Patient's Records</h4>
                      </template>
                      <template v-slot:body>
                        <ul class="report-lists m-0 p-0">
                          <li class="d-flex mb-4 align-items-center">
                            <div class="media-support-info">
                              <h6>Blood-Report.pdf</h6>
                              <a href="#">View report</a>
                            </div>
                            <button type="button" class="btn btn-success" name="button">Download </button>
                          </li>
                          <li class="d-flex mb-4 align-items-center">
                            <div class="media-support-info">
                              <h6>pathologyreport.pdf</h6>
                              <a href="#">View report</a>
                            </div>
                            <button type="button" class="btn btn-success" name="button">Download </button>
                          </li>
                          <li class="d-flex align-items-center">
                            <div class="media-support-info">
                              <h6>operativereport.pdf</h6>
                              <a href="#">View report</a>
                            </div>
                            <button type="button" class="btn btn-success" name="button">Download </button>
                          </li>
                        </ul>
                      </template>
                    </iq-card>
                  </b-col>
                </b-row>
              </tab-content-item>
              <tab-content-item :active="false" id="contact-justify" aria-labelled-by="contact-tab-justify">
                <b-form>
                  <b-form-group label="Temperature" label-for="exampleInputText1">
                    <b-form-input id="exampleInputText1" type="text" placeholder="Enter Temperature" value=""></b-form-input>
                  </b-form-group>
                  <b-form-group label="Blood Pressure" label-for="exampleInputText1">
                    <b-form-input id="exampleInputText1" type="text" placeholder="Enter BP" value=""></b-form-input>
                  </b-form-group>
                  <b-form-group label="Pulse Rate" label-for="exampleInputText1">
                    <b-form-input id="exampleInputText1" type="text" placeholder="Enter PR" value=""></b-form-input>
                  </b-form-group>
                  <b-form-group label="Notes" label-for="exampleFormControlTextarea1">
                    <b-form-textarea id="exampleFormControlTextarea1" rows="3"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="Prescriptions" label-for="exampleFormControlTextarea1">
                    <b-form-textarea id="exampleFormControlTextarea1" rows="3"></b-form-textarea>
                  </b-form-group>
                </b-form>
              </tab-content-item>
              <tab-content-item :active="false" id="optionals-justify" aria-labelled-by="optionals-tab-justify">
                <b-form>
                  <b-form-checkbox v-model="lab" inline>Request a Lab Test</b-form-checkbox>
                  <b-form-checkbox v-model="refd" inline>Refer to Another Department</b-form-checkbox>
                  <hr/>
                  <b-form-group v-if="lab"
                    label-for="exampleFormControlSelect2"
                    label="Select Tests">
                    <b-form-select plain v-model="selected" multiple :options="options2" id="exampleFormControlSelect2">
                    </b-form-select>
                    <hr/>
                  </b-form-group>

                  <b-form-group v-if="refd"
                    label-for="exampleFormControlSelect1"
                    label="Department for Referral">
                    <b-form-select plain v-model="selected" :options="options1" id="exampleFormControlSelect1">
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled>Select Department</b-form-select-option>
                      </template>
                    </b-form-select>
                  </b-form-group>
                </b-form>
              </tab-content-item>
              <tab-content-item :active="false" id="final-justify" aria-labelled-by="final-tab-justify">
                <center><b-button v-b-modal.modal-2 variant="primary">End Diagnosis and Submit Details</b-button></center>
              </tab-content-item>
            </tab-content>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-modal id="modal-2" scrollable title="Successful">
      <b-form>
        Successfully Submitted...
      </b-form>
    </b-modal>
  </b-container>
</template>
<script>
import { xray } from '../../config/pluginInit'
export default {
  name: 'FormLayout',
  mounted () {
    xray.index()
  },
  data () {
    return {
      apts: [
        { name: 'Sanyog Gupta', nhid: '50354453-69eb-48a2-8168-c30d8d44b446', date: '2022-03-25', time: '09:00 AM' },
        { name: 'Aditya Gupta', nhid: '3199636d-6a9c-41f6-afdc-301aa3d7b39f', date: '2022-03-25', time: '11:00 AM' },
        { name: 'Abhinav Sharma', nhid: '6ffcaaa3-5fe5-403f-bb3f-b5926abc7122', date: '2022-03-25', time: '15:00 PM' },
        { name: 'Prarabdh Dar', nhid: 'e1ec148a-a1cf-4bef-92a4-b49ad6c2b45b', date: '2022-03-26', time: '09:00 AM' }
      ],
      sel: '',
      lab: false,
      refd: false,
      options1: [
        'Dermatology', 'ENT', 'Viral Infection', 'Gastroenterologists',
        'Hypertension ', 'Diabetologist', 'rheumatologist', 'Hepatologist',
        'Neurologisit', 'urologist', 'Diabetes ', 'Cardiologist',
        'Pulmonologist', 'Allergist', 'Neurologist', 'Bacteriologist',
        'Viralologist', 'Dermatologist', 'Bacterilogist'
      ],
      options2: [
        'MRI', 'CT Scan', 'Blood Test', 'X-Ray', 'Ultrasound', 'Urine Test', 'Full Body Check'
      ]
    }
  },
  methods: {
    setSel (nhid) {
      this.sel = nhid
    }
  },
  computed: {
    getSel () {
      return this.sel
    }
  }
}
</script>
