<template lang="pug">
  #tags-view-container.tags-view-container
    scroll-pane.tags-view-wrapper(ref="scrollPane")
      router-link.el-tag.el-tag--small.tags-view-item(
        v-for="tag in visitedViews"
        ref="tag"
        tag="span"
        :key="tag.path"
        :class="isActive(tag)?'':'el-tag--info'"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''"
        @contextmenu.prevent.native="openMenu(tag,$event)") {{ tag.title }}
        span.el-tag__close.el-icon-close(
          v-if="!isAffix(tag)"
          @click.prevent.stop="closeSelectedTag(tag)")
    ul.el-dropdown-menu.el-dropdown-menu--small(
      v-show="visible"
      :style="{left:left+'px',top:top+'px'}")
      li.el-dropdown-menu__item(v-if="!isAffix(selectedTag)",@click="closeSelectedTag(selectedTag)") 关闭
      li.el-dropdown-menu__item(@click="closeOthersTags") 关闭其它页面
</template>

<script>
import ScrollPane from './ScrollPane'

export default {
  name: 'TagsView',
  components: { ScrollPane },
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    }
  },
  computed: {
    visitedViews () {
      return this.$store.state.tagsView.visitedViews
    }
  },
  watch: {
    $route () {
      this.addTags()
      this.moveToCurrentTag()
    },
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    this.addTags()
  },
  methods: {
    isActive (route) {
      return route.path === this.$route.path
    },
    isAffix (tag) {
      return tag.meta && tag.meta.affix
    },
    addTags () {
      const { name, path } = this.$route
      if (name) {
        const menu = this.$store.getters.menus.find(({ url }) => url === path)
        const title = menu && menu.label
        this.$store.dispatch('tagsView/addView', { ...this.$route, title })
      }
      return false
    },
    moveToCurrentTag () {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)
            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('tagsView/updateVisitedView', this.$route)
            }
            break
          }
        }
      })
    },
    closeSelectedTag (view) {
      this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    closeOthersTags () {
      this.$router.push(this.selectedTag)
      this.$store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    toLastView (visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    openMenu (tag, e) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu () {
      this.visible = false
    }
  }
}
</script>

<style lang="sass" scoped>
.tags-view-container
  height: 34px
  width: 100%
  background: #fff
  border-bottom: 1px solid rgba(0, 0, 0, 0.05)
  .tags-view-wrapper
    .tags-view-item
      margin-left: 6px
      margin-top: 6px
      cursor: pointer
      &:first-of-type
        margin-left: 20px
      &:last-of-type
        margin-right: 20px
</style>
