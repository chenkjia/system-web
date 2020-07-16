export const fields = {
  jobNumber: {
    label: '工号',
    sortable: true,
    form: {
      tag: 'input'
    },
    filter: {
      like: true
    }
  },
  username: {
    label: '账号',
    form: {
      tag: 'input'
    },
    update: {
      tag: 'render'
    },
    render: {
      type: 'text'
    },
    filter: {
      like: true
    }
  },
  password: {
    label: '密码',
    form: {
      tag: 'input',
      'show-password': true
    }
  },
  fullname: {
    label: '姓名',
    form: {
      tag: 'input'
    },
    filter: {
      like: true
    }
  },
  roles: {
    label: '角色',
    relation: 'roles',
    form: {
      tag: 'select'
    },
    create: {
      multiple: true
    },
    update: {
      multiple: true
    },
    render: {
      type: 'multiselect'
    }
  },
  mobile: {
    label: '联系电话',
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
  photo: {
    label: '照片',
    form: {
      tag: 'file'
    },
    render: {
      type: 'file'
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
export const columnList = ['jobNumber', 'username', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark']
export const filterList = ['jobNumber', 'username', 'fullname', 'roles', 'mobile', 'enabled']
export const createList = ['jobNumber', 'username', 'password', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark']
export const updateList = ['jobNumber', 'username', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark']
export const changeList = ['password']
