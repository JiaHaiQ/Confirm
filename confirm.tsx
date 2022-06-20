import { ref, defineComponent, PropType, onMounted } from 'vue'
import './confirmStyle.scss'
interface CommonConfirmPropsTypes {
  title?: String
  type?: 'warning' | 'error' | 'info' | 'success'
  tipsText: String
  confirmButtonText?: String
  cancelButtonText?: String
  showColseIcon?: Boolean
  cancelCallback?: Function
  confirmCallback?: Function
}
export { CommonConfirmPropsTypes }
export default defineComponent({
  name: 'CommonConfirm',
  props: {
    title: {
      type: String as PropType<String>,
      default: '提示',
    },
    type: {
      type: String as PropType<String>,
      default: 'warning',
    },
    tipsText: {
      type: String as PropType<String>,
      default: '',
    },
    confirmButtonText: {
      type: String as PropType<String>,
      default: '确认',
    },
    cancelButtonText: {
      type: String as PropType<String>,
      default: '取消',
    },
    showColseIcon: {
      type: Boolean as PropType<Boolean>,
      default: true,
    },
    cancelCallback: {
      type: Function as PropType<Function>,
    },
    confirmCallback: {
      type: Function as PropType<Function>,
    },
  },
  setup(props: any) {
    const isShow = ref(false)
    onMounted(() => {
      setTimeout(() => {
        isShow.value = true
      }, 10)
    })
    const initTipsIconType = (type: string): Element[] | any => {
      let calssName: string = ''
      let text: string = ''
      if (type && ['warning', 'error', 'info', 'success'].includes(type)) {
        calssName = type === 'success' ? 'checked success' : `tipsIcon ${type}`
        text = type === 'warning' ? '!' : type === 'error' ? '×' : type === 'info' ? 'i' : ''
        return [
          <div class={calssName} style={{ fontStyle: type === 'info' ? 'oblique' : '' }}>
            {text}
          </div>,
        ]
      }
    }
    return () => (
      <>
        <div class={isShow ? 'CommonConfirm fade' : 'CommonConfirm'}>
          <div class={isShow ? 'wrapper fade' : 'wrapper'}>
            <div class="header primary">
              <div class="title">{props.title}</div>
              {props.showColseIcon && (
                <div
                  class="colseBtn"
                  onClick={() => {
                    if (props.cancelCallback) props.cancelCallback()
                  }}>
                  ×
                </div>
              )}
            </div>
            <div class="body">
              {props.tipsText && props.type && initTipsIconType(props.type)}
              <span>{props.tipsText}</span>
            </div>
            <div class="footer">
              {props.cancelButtonText && (
                <div
                  style="margin-left:auto"
                  class="commonBtn error"
                  onClick={() => {
                    if (props.cancelCallback) props.cancelCallback()
                  }}>
                  {props.cancelButtonText}
                </div>
              )}
              {props.confirmButtonText && (
                <div
                  class="commonBtn primary"
                  style="margin-left: 20px;"
                  onClick={() => {
                    if (props.confirmCallback) props.confirmCallback()
                  }}>
                  {props.confirmButtonText}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  },
})
