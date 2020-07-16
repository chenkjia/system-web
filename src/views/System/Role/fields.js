export const fields = {
  label: {
    label: '角色名称',
    form: {
      tag: 'input'
    },
    create: {
      rules: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
    },
    update: {
      rules: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
    },
    filter: {
      like: true
    }
  },
  menus: {
    label: '菜单权限',
    relation: 'menus',
    form: {
      tag: 'select',
      multiple: true
    },
    create: {
      rules: [{ required: true, message: '请输入菜单权限', trigger: 'blur' }]
    },
    update: {
      rules: [{ required: true, message: '请输入菜单权限', trigger: 'blur' }]
    },
    filter: {
      like: true
    },
    render: {
      type: 'multiselect'
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
const list = ['label', 'menus', 'enabled', 'remark']

export const columnList = list
export const filterList = ['label', 'enabled']
export const createList = list
export const updateList = list
