export const fieldList = ['input', 'select', 'cascader']

export const columns = {
  input: {
    label: '输入框',
    name: 'input',
    form: {
      tag: 'input',
      prepend: '+86',
      maxlength: '11',
      width: 100,
      'show-word-limit': true,
      rules: [{
        required: true, message: '必填', trigger: 'blur'
      }, {
        pattern: '/^[0-9]+$/',
        message: '必须是数字'
      }]
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
      tag: 'select',
      subtext: (option, index) => {
        return index + 1
      }
    },
    options: [{
      value: 1,
      label: '黄金糕'
      // subtext: 'huangjingao',
      // group: 'food'
    }, {
      value: 2,
      label: '双皮奶'
      // subtext: 'shuangpinai',
      // group: 'food'
    }, {
      value: 3,
      label: '蚵仔煎'
    }, {
      value: 4,
      label: '龙须面'
    }, {
      value: 5,
      label: '北京烤鸭'
    }]
  },
  cascader: {
    label: '联级选择器',
    form: {
      tag: 'cascader'
    }
  }
}
