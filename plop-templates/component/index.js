import { I18n, getI18nInstance } from '@miniprogram-i18n/core'
import computedBehavior from 'miniprogram-computed'
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'
const i18n = getI18nInstance()
/**
 * @type {WechatMiniprogram.App.Instance<IAppOption>}
 */
const app = getApp()

Component({
  behaviors: [I18n, storeBindingsBehavior, computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * mobx binding
   */
  storeBindings: {
    store,
    fields: [],
    actions: []
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  computed: {

  },
  watch: {

  }
})
