<script>
import DataformUpload from './DataformUpload'
import DataformIcon from './DataformIcon'

const dataFormItem = {
  input: 'el-input',
  inputNumber: 'el-input-number',
  select: 'el-select',
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
    DataformIcon
  },
  data () {
    return {
      dataFormItem
    }
  }
}
</script>
