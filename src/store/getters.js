const getters = {
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  avatar: state => state.user.avatar,
  accountId: state => state.user.accountId,
  fullname: state => state.user.fullname,
  menus: state => state.user.menus,
  shortcuts: state => state.user.shortcuts,
  relation: state => state.relation.relation
  // roles: state => state.user.roles,
  // permission_routes: state => state.permission.routes,
  // errorLogs: state => state.errorLog.logs
}
export default getters
