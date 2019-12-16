export const fields = {
  label: {
    label: '角色名称',
    form: {
      formtype: 'input'
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
      formtype: 'select',
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
const list = ['label', 'menus', 'enabled', 'remark']

export const columnList = list
export const filterList = ['label', 'enabled']
export const createList = list
export const updateList = list
