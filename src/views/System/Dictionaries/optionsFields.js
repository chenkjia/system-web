export const fields = {
  value: {
    label: '字典项值',
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  label: {
    label: '字典项名称',
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  enabled: {
    label: '是否启用',
    relation: 'enableOrDisable',
    form: {
      formtype: 'switch'
    },
    filter: {
      formtype: 'select'
    },
    render: {
      type: 'select'
    }
  },
  remark: {
    label: '备注',
    form: {
      formtype: 'input',
      type: 'textarea',
      resize: 'none',
      autosize: true
    },
    filter: {
      formtype: 'input'
    }
  }
}
const list = ['value', 'label', 'enabled']
export const columnList = list
export const createList = list
export const updateList = list
