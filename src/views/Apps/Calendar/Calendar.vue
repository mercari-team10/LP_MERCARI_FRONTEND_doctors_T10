<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Schedule</h4>
          </template>
          <template v-slot:headerAction>
            <b-button v-b-modal.modal-2 variant="primary">Block Appointments</b-button>
            <b-modal id="modal-2" scrollable title="Block Appointments" hide-footer>
              <b-form>
                <b-form-group label="Starting Date and Time" label-for="exampleInputdatetime">
                  <b-form-input v-model="block.start" id="exampleInputdatetime" type="datetime-local"></b-form-input>
                </b-form-group>
                <b-form-group label="Ending Date and Time" label-for="exampleInputdatetime">
                  <b-form-input v-model="block.end" id="exampleInputdatetime" type="datetime-local"></b-form-input>
                </b-form-group>
                <b-button @click="blockApt" variant="primary">Block</b-button>
              </b-form>
            </b-modal>
          </template>
          <template v-slot:body>
            <FullCalendar :calendarEvents="events" />
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { xray } from '../../../config/pluginInit'
export default {
  name: 'GoogleCalendar',
  components: { },
  data () {
    return {
      block: {
        start: '',
        end: ''
      },
      events: [
        {
          title: 'Sanyog Gupta',
          start: '2022-03-25T09:00:00',
          end: '2022-03-25T09:30:00',
          color: '#0084ff'
        },
        {
          title: 'Aditya Gupta',
          start: '2022-03-25T11:00:00',
          end: '2022-03-25T11:45:00',
          color: '#0084ff'
        },
        {
          title: 'Abhinav Sharma',
          start: '2022-03-25T15:00:00',
          end: '2022-03-25T15:15:00',
          color: '#0084ff'
        },
        {
          title: 'Prarabdh Dar',
          start: '2022-03-26T09:00:00',
          end: '2022-03-26T09:30:00',
          color: '#0084ff'
        },
        {
          title: 'Hitesh Kumar',
          start: '2022-03-26T10:00:00',
          end: '2022-03-25T10:15:00',
          color: '#0084ff'
        }
      ]
    }
  },
  methods: {
    blockApt () {
      console.log('yo')
      this.events.push({ title: 'Blocked', start: '2022-03-27T10:00:00', end: '2022-03-28T10:00:00', color: '#fd6256' })
    }
  },
  mounted () {
    xray.index()
  },
  computed: {
  },
  methods: {
  }
}
</script>
