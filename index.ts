import ConfirmUI, { CommonConfirmPropsTypes } from './confirm'
import { createVNode, render } from 'vue'
const container = document.createElement('div')
container.setAttribute('class', 'common-confirm-container')
document.body.appendChild(container)
/**
 * 更多自定义type
 * @property {string} confirmButtonText 确认按钮文字，default: '确认'
 * @property {string} cancelButtonText 取消按钮文字，default: '取消'
 * @property {string} type 提示主题类型，可选 warning 警告 |  error 错误 | success 成功 | info 信息，default: 'warning'
 * @property {boolean} showColseIcon 是否显示右上角关闭icon，default: true
 */
type ConfirmParamsInstance = {
  confirmButtonText?: string
  cancelButtonText?: string
  type?: 'warning' | 'error' | 'info' | 'success'
  showColseIcon?: boolean
}
/**
 * CommonConfirm渲染函数type
 * @property {string} tipsText 提示文字，default: ''
 * @property {string} title 提示标题，default: '提示'
 * @property {ConfirmParamsInstance} params 更多自定义
 */
type ConfirmFuncInstance = (tipsText: string, title: string, params: ConfirmParamsInstance) => Promise<any>
/** CommonConfirm组件props type */
interface CommonConfirmPropsInstance extends CommonConfirmPropsTypes {}
export { ConfirmParamsInstance, ConfirmFuncInstance, CommonConfirmPropsInstance }
/**
 * 弹窗提示确认组件( vue3.x + tsx )
 *
 * @property {string} tipsText 提示文字，default: ''
 *
 * @property {string} title 提示标题，default: '提示'
 *
 * @property {string} confirmButtonText 确认按钮文字，default: '确认'
 *
 * @property {string} cancelButtonText 取消按钮文字，default: '取消'
 *
 * @property {string} type 提示主题类型，default: 'warning'
 *
 * @property {boolean} showColseIcon 是否显示右上角关闭icon，default: true
 *
 * @example 文件路径 src/components/CommonConfirm
 *
 * @example 引入函数组件 import Confirm from '@/components/CommonConfirm'
 *
 * @example ts按需引入类型注解 import { ConfirmParamsInstance, ConfirmFuncInstance, CommonConfirmPropsInstance } from '@/components/CommonConfirm'
 *
 * @example 使用函数组件 Confirm('是否删除', '是否要删除？',{confirmButtonText:'删除',type:'warning'}).then(() => {}).catch(() => {})
 *
 */
const renderConfirmFunc: ConfirmFuncInstance = (tipsText: string, title: string, params: ConfirmParamsInstance) => {
  return new Promise<void>((resolve, reject) => {
    const confirmCallback = () => {
      render(null, container)
      resolve()
    }
    const cancelCallback = () => {
      render(null, container)
      reject(new Error('cancel'))
    }
    const vnode = createVNode(ConfirmUI, {
      title,
      tipsText,
      ...params,
      cancelCallback,
      confirmCallback,
    })
    render(vnode, container)
  })
}

export default renderConfirmFunc
