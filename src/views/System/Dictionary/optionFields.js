export const fields = {
  value: {
    label: '字典项值',
    form: {
      tag: 'input'
    },
    filter: {
      like: true
    }
  },
  label: {
    label: '字典项名称',
    form: {
      tag: 'input'
    },
    filter: {
      like: true
    }
  },
  enabled: {
    label: '是否启用',
    relation: 'enableOrDisable',
    form: {
      tag: 'switch'
    },
    filter: {
      tag: 'select'
    },
    render: {
      type: 'select'
    }
  },
  remark: {
    label: '备注',
    form: {
      tag: 'input',
      type: 'textarea',
      resize: 'none',
      autosize: true
    },
    filter: {
      tag: 'input'
    }
  }
}
const list = ['value', 'label', 'enabled']
export const columnList = list
export const createList = list
export const updateList = list
