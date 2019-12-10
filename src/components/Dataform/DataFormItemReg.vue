<script>
import DataformUpload from './DataformUpload'
import DataformIcon from './DataformIcon'
import DataformSelect from './DataformSelect'

const dataFormItem = {
  input: 'el-input',
  inputNumber: 'el-input-number',
  select: 'DataformSelect',
  switch: 'el-switch',
  cascader: 'el-cascader',
  timePicker: 'el-time-picker',
  datePicker: 'el-date-picker',
  file: 'DataformUpload',
  icon: 'DataformIcon',
  render: 'InfoRender'
}

export default {
  components: {
    DataformUpload,
    DataformIcon,
    DataformSelect
  },
  data () {
    return {
      dataFormItem
    }
  }
}
</script>
