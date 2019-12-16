export const fields = {
  sign: {
    label: '字典标识',
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  label: {
    label: '字典名称',
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  options: {
    label: '选项',
    render: data => data.map(({ label }) => label).join(',')
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
const list = ['sign', 'label', 'enabled', 'remark']
export const columnList = ['sign', 'label', 'options', 'enabled', 'remark']
export const filterList = ['sign', 'label', 'enabled']
export const createList = list
export const updateList = list
