const loginPath = '/#/login'
const btnSubmit = 'button.el-button'
describe('测试登录', function () {
  it('无登录信息直接登录', function () {
    cy.visit(loginPath)
    cy.get(btnSubmit).then(($elm) => {
      return $elm.click()
    })
  })
  it('输入错误/不存在的用户登录', function () {
    // cy.visit(loginPath)
    cy.get('input.el-input__inner[type^="text"]')
      .type('aaa')
    cy.get('input.el-input__inner[type^="password"]')
      .type('1111')
    cy.get(btnSubmit).then(($elm) => {
      return $elm.click()
    })
  })
})
