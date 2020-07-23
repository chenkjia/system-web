<script>
import DataformUpload from './DataformUpload'
import DataformIcon from './DataformIcon'
import DataformSelect from './DataformSelect'
import DataformInput from './DataformInput'

const dataFormItem = {
  input: 'DataformInput',
  inputNumber: 'el-input-number',
  select: 'DataformSelect',
  switch: 'el-switch',
  checkbox: 'el-checkbox',
  radio: 'el-radio',
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
    DataformSelect,
    DataformInput
  },
  data () {
    return {
      dataFormItem
    }
  }
}
</script>
