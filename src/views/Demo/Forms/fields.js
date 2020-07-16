export const fieldList = ['input', 'select', 'cascader']

export const columns = {
  input: {
    label: '输入框',
    name: 'input',
    form: {
      tag: 'input',
      resize: 'none',
      prepend: '+86'
    }
  },
  textarea: {
    label: '多行文本框',
    name: 'textarea',
    form: {
      tag: 'input',
      type: 'textarea'
    }
  },
  select: {
    label: '选择框',
    form: {
      tag: 'select'
    }
  },
  cascader: {
    label: '联级选择器',
    form: {
      tag: 'cascader'
    }
  }
}
