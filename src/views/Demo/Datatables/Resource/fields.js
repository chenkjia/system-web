export const fields = {
  label: {
    label: '测试名称',
    sortable: true,
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  type: {
    label: '测试类型',
    relation: 'menuTypes',
    sortable: true,
    form: {
      formtype: 'select'
    },
    filter: {
      formtype: 'select'
    },
    render: {
      type: 'select'
    }
  },
  icon: {
    label: '图标',
    sortable: true,
    form: {
      formtype: 'icon'
    },
    filter: {
      like: true
    },
    render: {
      type: 'icon'
    }
  },
  enabled: {
    label: '是否启用',
    relation: 'enableOrDisable',
    sortable: true,
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
    sortable: true,
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
const list = ['label', 'type', 'icon', 'enabled', 'remark']

export const columnList = list
export const filterList = ['label', 'type', 'enabled']
