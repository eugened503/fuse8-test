import moment from 'moment'
export default (date) => {
  return moment(new Date(date)).format('DD.MM.YYYY')
}
