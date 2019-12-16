<script>
import { cloneDeep } from 'lodash'
import { fieldsFormat } from '@/utils/fieldsFormat.js'
import { fields, changeList } from './fields'

export default {
  name: 'accountsChangePassword',
  data () {
    return {
      changeData: {},
      changeDialogVisible: false,
      changeList: fieldsFormat(fields, changeList, 'change'),
      changeButtonList: [{
        label: '取 消',
        func: () => {
          this.changeDialogVisible = false
        }
      }, {
        label: '确 定',
        type: 'primary',
        func: ({ data }) => {
          const result = cloneDeep(data)
          result.password = this.$md5(data.password)
          this.$update({
            url: 'accounts/changePassword',
            params: {
              _id: this.changeFormId
            },
            data: result
          }).then(res => {
            if (res.code === 0) {
              this.changeDialogVisible = false
              this.$refs.DatatablesPage.getList()
            }
          })
        }
      }]
    }
  },
  methods: {
    changeFormInit (data) {
      this.changeFormId = data._id
      this.changeData = {}
      this.changeDialogVisible = true
    }
  }
}
</script>
