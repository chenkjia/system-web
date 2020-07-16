export const fields = {
  label: {
    label: '测试名称',
    sortable: true,
    form: {
      tag: 'input'
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
      tag: 'select'
    },
    filter: {
      tag: 'select'
    },
    render: {
      type: 'select'
    }
  },
  icon: {
    label: '图标',
    sortable: true,
    form: {
      tag: 'icon'
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
    sortable: true,
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
const list = ['label', 'type', 'icon', 'enabled', 'remark']

export const columnList = list
export const filterList = ['label', 'type', 'enabled']
