/*
 * @Author: your name
 * @Date: 2021-05-07 09:29:25
 * @LastEditTime: 2021-05-07 09:51:33
 * @LastEditors: Please set LastEditors
 * @Description: JavaScript 实现对上传图片的压缩
 * @FilePath: \WEB\100.面试\A.JavaScript\07.JavaScript实现对上传图片的压缩\index.js
 */


window.onload = function() {
  // 执行缩小函数
  smallerImage(100, 0.7);
  
}


function smallerImage(width, quality) {
  // 获取目标图片元素
  let authorImg = document.getElementsByClassName('imageTarget')[0];
  let height = width / authorImg.width * authorImg.height;
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(authorImg,0, 0, width, height);
  let base64Img = canvas.toDataURL('image/jpeg', quality);
  document.getElementsByClassName('imageResult')[0].setAttribute('src', base64Img);
  
}