export const fields = {
  label: {
    label: '菜单名称',
    form: {
      tag: 'input'
    },
    filter: {
      like: true
    }
  },
  type: {
    label: '菜单类型',
    relation: 'menuTypes',
    form: {
      tag: 'select',
      rules: [{ required: true, message: '请选择菜单类型', trigger: 'blur' }]
    },
    filter: {
      tag: 'select'
    },
    render: {
      type: 'select'
    }
  },
  url: {
    label: '路径',
    form: {
      tag: 'input'
    },
    filter: {
      like: true
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
const list = ['label', 'type', 'url', 'icon', 'enabled', 'remark']

export const columnList = list
export const filterList = ['label', 'type', 'enabled']
export const createList = list
export const updateList = list
