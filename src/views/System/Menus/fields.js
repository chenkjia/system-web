export const fields = {
  label: {
    label: '菜单名称',
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  type: {
    label: '菜单类型',
    relation: 'menuTypes',
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
  url: {
    label: '路径',
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  icon: {
    label: '图标',
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
const list = ['label', 'type', 'url', 'icon', 'enabled', 'remark']

export const columnList = list
export const filterList = ['label', 'type', 'enabled']
export const createList = list
export const updateList = list
