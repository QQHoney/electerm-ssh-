/**
 * clipboard related
 */

import { message } from 'antd'
import {
  copyBookmarkItemPrefix
} from './constants'

const fileRegWin = /^(remote:)?\w:\\.+/
const fileReg = /^(remote:)?\/.+/

export const readClipboard = () => {
  return window.pre.readClipboard()
}

export const copy = (str) => {
  message.success('Copied', 2)
  window.pre.writeClipboard(str)
}

export const cut = (str, itemTitle = '') => {
  message.success('Cutted ' + itemTitle, 2)
  window.pre.writeClipboard(str)
}

export const hasFileInClipboardText = (
  text = readClipboard()
) => {
  const arr = text.split('\n')
  return arr.reduce((prev, t) => {
    return prev &&
      (fileReg.test(t) || fileRegWin.test(t))
  }, true)
}

export const hasBookmarkOrGroupInClipboardText = (
  text = readClipboard()
) => {
  const arr = text.split('\n')
  return arr.reduce((prev, t = '') => {
    return prev &&
      t.startsWith(copyBookmarkItemPrefix)
  }, true)
}
