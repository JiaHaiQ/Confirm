# Confirm 弹窗提示确认组件( vue3.x + tsx )
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
