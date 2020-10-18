/*
 * @Author: your name
 * @Date: 2020-10-18 16:34:27
 * @LastEditTime: 2020-10-18 16:36:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\06.DOM\00.EventUtil.js
 */
var EventUtil = {
  addHandler: function (element, type, handler, isCapture) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, isCapture);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },

  removeHandler: function (element, type, handler, isCapture) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, isCapture);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  // 获得 event
  getEvent: function (event) {
    return event ? event : window.event;
  },
  // 获得触发目标
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  // 阻止默认行为
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 停止冒泡
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  // 相对元素
  getRelatedTarget: function (event) {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },
};
