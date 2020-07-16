export const fields = {
  label: {
    label: '测试名称',
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
const list = ['label', 'type', 'icon', 'enabled', 'remark']

export const columnList = list
export const filterList = ['label', 'type', 'enabled']
