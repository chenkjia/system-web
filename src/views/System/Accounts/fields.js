export const fields = {
  jobNumber: {
    label: '工号',
    sortable: true,
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  username: {
    label: '账号',
    form: {
      formtype: 'input'
    },
    update: {
      formtype: 'render'
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
      formtype: 'input',
      'show-password': true
    }
  },
  fullname: {
    label: '姓名',
    form: {
      formtype: 'input'
    },
    filter: {
      like: true
    }
  },
  roles: {
    label: '角色',
    relation: 'roles',
    form: {
      formtype: 'select'
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
      formtype: 'input'
    },
    filter: {
      like: true
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
  photo: {
    label: '照片',
    form: {
      formtype: 'file'
    },
    render: {
      type: 'file'
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
export const columnList = ['jobNumber', 'username', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark']
export const filterList = ['jobNumber', 'username', 'fullname', 'roles', 'mobile', 'enabled']
export const createList = ['jobNumber', 'username', 'password', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark']
export const updateList = ['jobNumber', 'username', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark']
export const changeList = ['password']
