<template>
  <div class="test">
      <p id="txt"></p>
      <img id="pic" class="pic" src="../assets/logo.png" />
      <img id="pic2" class="pic" src="../assets/a.jpg" />
    <canvas class="canvas" id="canvas" width="500" height="500" style="border:1px dashed gray"></canvas>
    <button id="moveBig"> 放大</button>
    <button id="moveSmall"> 缩小</button>
    <button id="restore"> 恢复</button>
    <p id="p1"></p>
    <p id="msg"></p>
  </div>
</template>

<script>
// import Arrow from '@/utils/arrow.js'
import Ball from '@/utils/ball.js'
// import Box from '@/utils/box.js'
export default {
  name: 'test',
  mounted () {
    // // 绘制多边形
    // function createPolygon (ctx, n, dx, dy, size) {
    //   ctx.beginPath()
    //   var degree = (2 * Math.PI) / n
    //   for (var i = 0; i < n; i++) {
    //     var x = Math.cos(i * degree)
    //     var y = Math.sin(i * degree)
    //     ctx.lineTo(x * size + dx, y * size + dy)
    //   }
    //   ctx.closePath()
    // }
    let canvas = document.getElementById('canvas')
    let cxt = canvas.getContext('2d')
    // 调用自定义的方法createPolygon()绘制多边形
    // createPolygon(cxt, 8, 100, 75, 50)
    // 绘制五角星
    // cxt.beginPath()
    // for (var i = 0; i < 5; i++) {
    //   cxt.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 50 + 100,
    //     -Math.sin((18 + i * 72) * Math.PI / 180) * 50 + 100)
    //   cxt.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 25 + 100,
    //     -Math.sin((54 + i * 72) * Math.PI / 180) * 25 + 100)
    // }
    // cxt.closePath()

    // 调色板
    // for (let i = 0; i < 6; i++) {
    //   for (let j = 0; j < 6; j++) {
    //     cxt.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)'
    //     cxt.fillRect(j * 25, i * 25, 25, 25)
    //   }
    // }

    // 渐变形状
    // let r = 255; let g = 0; let b = 0
    // for (let i = 0; i < 500; i++) {
    //   if (i < 25) {
    //     g += 10
    //   } else if (i > 25 && i < 50) {
    //     r -= 10
    //   } else if (i > 50 && i < 75) {
    //     g -= 10
    //     b += 10
    //   } else if (i >= 75 && i < 100) {
    //     r += 10
    //   } else {
    //     b -= 10
    //   }
    //   cxt.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
    //   cxt.fillRect(3 * i, 0, 3, canvas.height)
    // }
    // 描述圆形
    // 整圆
    // cxt.beginPath()
    // cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true)
    // cxt.closePath()
    // 圆弧
    // cxt.beginPath()
    // cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true)
    // function createRoundedRect (cxt, width, height, r, offsetX, offsetY) {
    //   cxt.beginPath()
    //   cxt.moveTo(offsetX + r, offsetY)
    //   cxt.lineTo(offsetX + width - r, offsetY)
    //   cxt.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r)
    //   cxt.lineTo(offsetX + width, offsetY + height - r)
    //   cxt.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r)
    //   cxt.lineTo(offsetX + r, offsetY + height)
    //   cxt.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r)
    //   cxt.lineTo(offsetX, offsetY + r)
    //   cxt.arcTo(offsetX, offsetY, offsetX + r, offsetY, r)
    //   cxt.closePath()
    // }
    // createRoundedRect(cxt, 100, 100, 20, 20, 20)
    // 二次贝塞尔曲线
    // cxt.moveTo(75, 25)
    // cxt.quadraticCurveTo(25, 25, 25, 62)
    // cxt.quadraticCurveTo(25, 100, 50, 100)
    // cxt.quadraticCurveTo(50, 120, 30, 125)
    // cxt.quadraticCurveTo(60, 120, 65, 100)
    // cxt.quadraticCurveTo(125, 100, 125, 62)
    // cxt.quadraticCurveTo(125, 25, 75, 25)
    // 三次贝塞尔曲线
    // cxt.moveTo(75, 40)
    // cxt.bezierCurveTo(75, 37, 70, 25, 50, 25)
    // cxt.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
    // cxt.bezierCurveTo(20, 80, 40, 102, 75, 120)
    // cxt.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
    // cxt.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
    // cxt.bezierCurveTo(85, 25, 75, 37, 75, 40)
    /*
* createLeaf()用于绘制N叶草
* n:n片
* dx、dy：花朵中心位置的坐标
* size：控制花朵的大小
* length：控制花瓣的长度
*/
    // function createLeaf (cxt, n, dx, dy, size, length) {
    //   cxt.beginPath()
    //   cxt.moveTo(dx, dy + size)
    //   var degree = 2 * Math.PI / n
    //   for (var i = 1; i < n + 1; i++) {
    //     var cx1 = Math.sin((i - 1) * degree) * length + dx
    //     var cy1 = Math.cos((i - 1) * degree) * length + dy
    //     var cx2 = Math.sin(i * degree) * length + dx
    //     var cy2 = Math.cos(i * degree) * length + dy
    //     // 计算结束点的坐标
    //     var x = Math.sin(i * degree) * size + dx
    //     var y = Math.cos(i * degree) * size + dy
    //     cxt.bezierCurveTo(cx1, cy1, cx2, cy2, x, y)
    //   }
    //   cxt.closePath()
    // }
    // createLeaf(cxt, 4, canvas.width / 2, canvas.height / 2, 30, 120)

    // function createSector (cxt, x, y, r, angle1, angle2, color) {
    //   cxt.beginPath()
    //   cxt.moveTo(x, y)
    //   cxt.arc(x, y, r, angle1 * Math.PI / 180, angle2 * Math.PI / 180, false)
    //   cxt.closePath()
    //   cxt.strokeStyle = color
    //   cxt.fillStyle = color
    //   cxt.fill()
    // }
    // createSector(cxt, 100, 75, 50, 30, 120, 'HotPink')
    // createSector(cxt, 100, 75, 50, 120, 180, 'yellowgreen')
    // createSector(cxt, 100, 75, 50, 180, 260, '#9d9d9d')
    // createSector(cxt, 100, 75, 50, 260, 360, 'thistle')
    // createSector(cxt, 100, 75, 50, 360, 30, 'red')
    // cxt.lineWidth = 8
    // cxt.lineCap = 'butt'
    // cxt.lineJoin = 'bevel'
    // cxt.setLineDash([10, 5])
    // textAlign对齐
    // cxt.strokeStyle = 'purple'
    // cxt.moveTo(150, 0)
    // cxt.lineTo(150, 200)
    // cxt.stroke()
    // cxt.font = '15px Arial'
    // cxt.textAlign = 'start'
    // cxt.fillText('textAlign取值为start', 150, 30)
    // cxt.textAlign = 'left'
    // cxt.fillText('textAlign取值为left', 150, 60)
    // cxt.textAlign = 'end'
    // cxt.fillText('textAlign取值为end', 150, 90)
    // cxt.textAlign = 'right'
    // cxt.fillText('textAlign取值为right', 150, 120)
    // cxt.textAlign = 'center'
    // cxt.fillText('textAlign取值为center', 150, 150)
    // cxt.strokeStyle = "purple";
    // textBaseline对齐
    // cxt.moveTo(0, 100)
    // cxt.lineTo(300, 100)
    // cxt.stroke()
    // cxt.font = '20px Arial'
    // cxt.textBaseline = 'alphabetic'
    // cxt.fillText('alphabetic', 10, 100)
    // cxt.textBaseline = 'top'
    // cxt.fillText('top', 110, 100)
    // cxt.textBaseline = 'middle'
    // cxt.fillText('middle', 160, 100)
    // cxt.textBaseline = 'bottom'
    // cxt.fillText('bottom', 230, 100)
    // 创建image对象
    // let image = document.getElementById('pic')
    // cxt.drawImage(image, 70, 20, 60, 150, 60, 60, 200, 200)
    // let pattern = cxt.createPattern(image, 'no-repeat')
    // 创建canvas元素
    // let bgCanvas = document.createElement('canvas')
    // bgCanvas.width = 20
    // bgCanvas.height = 20
    // let bgcxt = bgCanvas.getContext('2d')
    // // 在新创建的canvas中画一个圆
    // bgcxt.beginPath()
    // bgcxt.arc(10, 10, 10, 0, 360 * Math.PI / 180, true)
    // bgcxt.closePath()
    // bgcxt.fillStyle = 'HotPink'
    // bgcxt.fill()
    // let pattern = cxt.createPattern(bgCanvas, 'repeat-y')
    // cxt.fillStyle = pattern
    // cxt.fillRect(0, 0, 500, 500)
    // 第1步，绘制基本图形，用于切割
    // cxt.beginPath()
    // cxt.arc(100, 90, 100, 0, 360 * Math.PI / 180, true)
    // cxt.closePath()
    // cxt.stroke()
    // // 第2步，使用clip()方法，使得切割区域为上面绘制的基本图形
    // cxt.clip()
    // // 第3步，绘制图片
    // let image = document.getElementById('pic')
    // cxt.drawImage(image, 0, 0)
    // let image = document.getElementById('pic')
    // let text = '绿叶学习网'
    // cxt.font = 'bold 22px 微软雅黑'
    // let pattern = cxt.createPattern(image, 'no-repeat')
    // cxt.fillStyle = pattern
    // cxt.fillText(text, 10, 50)

    // cxt.beginPath()
    // cxt.arc(50, 50, 50, 0, 360 * Math.PI / 180, false)
    // cxt.closePath()
    // var pattern = cxt.createPattern(image, 'no-repeat')
    // cxt.fillStyle = pattern
    // cxt.fill()
    // cxt.strokeStyle = 'hotPink'
    // cxt.lineWidth = 10
    // cxt.translate(canvas.width / 2, canvas.height / 2)
    // cxt.strokeRect(30, 0, 50, 50)
    // let degree = 0
    // document.getElementById('moveBig').onclick = function () {
    //   // cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // cxt.translate(10, 10)
    //   // cxt.scale(2, 2)
    //   // cxt.lineWidth = 10
    //   // cxt.translate(-15, -15)
    //   cxt.rotate(degree * Math.PI / 180) // 顺时针旋转30°
    //   cxt.strokeStyle = 'red'
    //   cxt.strokeRect(30, 0, 50, 50)
    //   degree++
    // }
    // document.getElementById('moveSmall').onclick = function () {
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // cxt.translate(10, 10)
    //   cxt.scale(0.5, 0.5)
    //   cxt.lineWidth = 10
    //   console.log(cxt.lineWidth)
    //   cxt.translate(30, 30)
    //   cxt.strokeStyle = 'red'
    //   cxt.strokeRect(30, 30, 50, 50)
    // }
    // cxt.drawImage(image, 0, 0)
    // cxt.translate(50, 50)
    // cxt.drawImage(image, 0, 0)
    // var text = '绿叶学习网'
    // cxt.font = 'bold 20px 微软雅黑'
    // cxt.strokeStyle = 'HotPink'
    // cxt.strokeText(text, 10, 30)
    // cxt.translate(50, 50)
    // cxt.strokeText(text, 10, 30)
    // cxt.translate(150, 0)
    // cxt.fillStyle = 'rgba(255,0,0,0.25)'
    // for (var i = 0; i < 50; i++) {
    //   cxt.translate(25, 25) // 图形平移
    //   cxt.scale(0.95, 0.95) // 图形缩放
    //   cxt.rotate(Math.PI / 10) // 图形旋转
    //   cxt.fillRect(0, 0, 100, 50)
    // }
    // let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
    // cxt.lineWidth = 12
    // cxt.translate(50, 0)
    // // 循环绘制圆弧
    // for (let i = 0; i < colors.length; i++) {
    //   // 定义每次向下移动10px的变换矩阵
    //   cxt.translate(0, 10)
    //   // 定义颜色
    //   cxt.strokeStyle = colors[i]
    //   // 绘制圆弧
    //   cxt.beginPath()
    //   cxt.arc(50, 100, 100, 0, 180 * Math.PI / 180, true)
    //   cxt.stroke()
    // }
    // cxt.drawImage(image, 10, 10)
    // let imgData = cxt.getImageData(10, 10, 200, 200)
    // let data = imgData.data
    // // 遍历每个像素
    // for (let i = 0; i < data.length; i += 4) {
    // let average = data[i + 0] * 0.3 + data[i + 1] * 0.6 + data[i + 2] * 0.1
    //   data[i + 0] += 50 // 红
    //   data[i + 1] += 50 // 绿
    //   data[i + 2] += 50 // 蓝
    //   data[i + 0] = 255 - data[i + 0]
    //   data[i + 1] = 255 - data[i + 1]
    //   data[i + 2] = 255 - data[i + 2]
    //   var r = data[i + 0]
    //   var g = data[i + 1]
    //   var b = data[i + 2]
    //   data[i + 0] = r * 0.39 + g * 0.76 + b * 0.18
    //   data[i + 1] = r * 0.35 + g * 0.68 + b * 0.16
    //   data[i + 2] = r * 0.27 + g * 0.53 + b * 0.13
    //   var r = data[i + 0]
    //   var g = data[i + 1]
    //   var b = data[i + 2]
    //   var average = (r + g + b) / 3
    //   data[i + 0] = average
    //   data[i + 1] = 0
    //   data[i + 2] = 0
    //   data[i + 3] = data[i + 3] * 0.3
    // }
    // 在指定位置输出图片
    // cxt.drawImage(image, 0, 0, 60, 60)
    // // 获取一个图片的imgData
    // var imgData1 = cxt.getImageData(0, 0, 60, 60)
    // var imgData2 = cxt.createImageData(imgData1)
    // var data = imgData2.data
    // for (var i = 0; i < imgData2.width * imgData2.height * 4; i += 4) {
    //   data[i + 0] = 0
    //   data[i + 1] = 0
    //   data[i + 2] = 255
    //   data[i + 3] = 255
    // }
    // cxt.putImageData(imgData2, 80, 0)
    // var text = '绿叶学习网'
    // cxt.font = 'bold 50px 微软雅黑'
    // var gnt = cxt.createLinearGradient(50, 0, 50, 500)
    // gnt.addColorStop(0, 'HotPink')
    // gnt.addColorStop(1, 'white')
    // cxt.fillStyle = gnt
    // cxt.fillText(text, 30, 50)
    // cxt.beginPath()
    // cxt.arc(80, 80, 50, 0, Math.PI * 2, true)
    // cxt.closePath()
    // // 渐变
    // var gnt = cxt.createRadialGradient(100, 60, 10, 80, 80, 50)
    // gnt.addColorStop(0, 'white')
    // gnt.addColorStop(0.9, 'orange')
    // gnt.addColorStop(1, 'rgba(0,0,0,0)')
    // // 填充
    // cxt.fillStyle = gnt
    // cxt.fill()
    // let i = 0
    // setInterval(function () {
    //   let gradient = cxt.createRadialGradient(60, 60, 0, 60, 60, 60)
    //   gradient.addColorStop(i * 0, 'magenta')
    //   gradient.addColorStop(i * 0.25, 'blue')
    //   gradient.addColorStop(i * 0.50, 'green')
    //   gradient.addColorStop(i * 0.75, 'yellow')
    //   gradient.addColorStop(i * 1.0, 'HotPink')
    //   cxt.fillStyle = gradient
    //   i = i + 0.1
    //   if (i >= 1) { // 超过颜色点值后，自动归0
    //     i = 0
    //   }
    //   cxt.fillRect(0, 0, 120, 120)
    // }, 50)
    // 阴影
    // cxt.shadowOffsetX = -5
    // cxt.shadowOffsetY = -5
    // cxt.shadowColor = 'LightSkyBlue '
    // cxt.shadowBlur = 1
    // cxt.fillStyle = 'HotPink'
    // cxt.fillRect(30, 30, 50, 50)
    // cxt.shadowOffsetX = 5
    // cxt.shadowOffsetY = 5
    // cxt.shadowColor = 'LightSkyBlue '
    // cxt.shadowBlur = 1
    // cxt.fillStyle = 'HotPink'
    // cxt.fillRect(100, 30, 50, 50)
    // 定义文字
    // var text = '绿叶学习网'
    // cxt.font = 'bold 60px 微软雅黑'
    // // 定义阴影
    // cxt.shadowOffsetX = 5
    // cxt.shadowOffsetY = 5
    // cxt.shadowColor = 'LightSkyBlue '
    // cxt.shadowBlur = 10
    // // 填充文字
    // cxt.fillStyle = 'HotPink'
    // cxt.fillText(text, 10, 90)
    // 定义阴影
    // cxt.shadowOffsetX = 0
    // cxt.shadowOffsetY = 0
    // cxt.shadowColor = 'HotPink'
    // cxt.shadowBlur = 10
    // cxt.fillRect(40, 15, 200, 200)
    // cxt.drawImage(image, 40, 15)
    // 路径
    // 第1条直线
    // cxt.lineWidth = 10
    // cxt.beginPath()
    // cxt.moveTo(50, 40)
    // cxt.lineTo(150, 40)
    // cxt.strokeStyle = 'red'
    // cxt.stroke()
    // // 第2条直线
    // cxt.beginPath()
    // cxt.lineWidth = 20
    // cxt.moveTo(50, 80)
    // cxt.lineTo(150, 80)
    // cxt.strokeStyle = 'green'
    // cxt.stroke()
    // // 第3条直线
    // cxt.beginPath()
    // cxt.moveTo(50, 120)
    // cxt.lineTo(150, 120)
    // cxt.strokeStyle = 'blue'
    // cxt.stroke()
    // cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true)
    // cxt.closePath()
    // cxt.moveTo(40, 60)
    // cxt.lineTo(100, 60)
    // cxt.lineTo(100, 30)
    // cxt.lineTo(150, 75)
    // cxt.lineTo(100, 120)
    // cxt.lineTo(100, 90)
    // cxt.lineTo(40, 90)
    // cxt.closePath()
    // cxt.stroke()
    // cxt.beginPath()
    // cxt.strokeStyle = 'red'
    // cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true)
    // cxt.closePath()
    // cxt.stroke()
    // // cxt.beginPath()
    // cxt.strokeStyle = 'blue'
    // cxt.arc(70, 120, 50, 0, -90 * Math.PI / 180, true)
    // cxt.closePath()
    // cxt.stroke()
    // cxt.lineWidth = 10
    // cxt.strokeStyle = 'HotPink'
    // cxt.moveTo(40, 60)
    // cxt.lineTo(100, 60)
    // cxt.lineTo(100, 30)
    // cxt.lineTo(150, 75)
    // cxt.lineTo(100, 120)
    // cxt.lineTo(100, 90)
    // cxt.lineTo(40, 90)
    // cxt.lineTo(40, 60)
    // // cxt.lineCap = 'square'
    // // cxt.closePath()
    // cxt.stroke()
    // cxt.strokeStyle = 'HotPink'
    // cxt.moveTo(50, 50)
    // cxt.lineTo(150, 50)
    // // cxt.strokeRect(50, 50, 80, 80)
    // // cxt.rect(50, 50, 80, 80)
    // cxt.stroke()
    // if (cxt.isPointInPath(100, 50)) {
    //   alert('点(100,50)存在于当前路径中')
    // }
    // 绘制一个描边圆，圆心为（50,50），半径为40
    // cxt.beginPath()
    // cxt.arc(50, 50, 40, 0, 360 * Math.PI / 180, true)
    // cxt.closePath()
    // cxt.fillStyle = 'HotPink'
    // cxt.fillRect(50, 50, 100, 80)
    // // 使用clip()，使得描边圆成为一个剪切区域
    // cxt.clip()
    // // 绘制一个填充矩形
    // cxt.beginPath()
    // cxt.fillStyle = '#66CCFF'
    // cxt.fillRect(50, 50, 100, 80)
    // 绘制一个填充矩形
    // cxt.beginPath()
    // cxt.strokeStyle = ' HotPink'
    // cxt.rect(20, 20, 100, 80)
    // cxt.stroke()
    // cxt.clip()
    // // 绘制一个描边圆，圆心为（120,60），半径为40
    // cxt.beginPath()
    // cxt.arc(120, 60, 40, 0, 360 * Math.PI / 180, true)
    // cxt.closePath()
    // cxt.fillStyle = ' #66CCFF'
    // cxt.fill()
    // save()保存状态
    // cxt.save()
    // // 使用clip()方法指定一个圆形的剪切区域
    // cxt.beginPath()
    // cxt.arc(70, 70, 50, 0, 360 * Math.PI / 180, true)
    // cxt.closePath()
    // cxt.stroke()
    // cxt.clip()
    // cxt.drawImage(image, 10, 20)
    // // image = document.getElementById('pic')
    // document.getElementById('restore').onclick = function () {
    //   cxt.restore()
    //   // 清空画布
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   let image = document.getElementById('pic2')
    //   cxt.drawImage(image, 10, 20)
    // }
    // cxt.save()
    // cxt.fillStyle = 'HotPink'
    // cxt.translate(30, 30)
    // cxt.fillRect(0, 0, 100, 50)
    // cxt.restore()
    // cxt.fillStyle = 'LightSkyBlue '
    // cxt.translate(60, 60)
    // cxt.fillRect(0, 0, 100, 50)
    // var text = '绿叶学习网'
    // cxt.font = 'bold 20px 微软雅黑'
    // cxt.fillStyle = 'HotPink'
    // cxt.save() // save()保存状态
    // cxt.fillText(text, 50, 40)
    // cxt.fillStyle = 'LightSkyBlue '
    // cxt.fillText(text, 50, 80)
    // cxt.restore() // restore()恢复状态
    // cxt.fillText(text, 50, 120)
    // 定义文字
    // var text = '绿叶学习网'
    // cxt.font = 'bold 60px 微软雅黑'
    // // 定义阴影
    // cxt.shadowOffsetX = 5
    // cxt.shadowOffsetY = 5
    // cxt.shadowColor = '#66CCFF'
    // cxt.shadowBlur = 10
    // // 填充文字
    // cxt.fillStyle = '#FF6699'
    // cxt.fillText(text, 10, 90)
    // document.getElementById('restore').onclick = function () {
    //   window.location = canvas.toDataURL('image/png')
    // }
    // cxt.globalCompositeOperation = 'source-in'
    // // 绘制矩形
    // cxt.fillStyle = 'HotPink'
    // cxt.fillRect(30, 30, 60, 60)
    // // 绘制圆形
    // cxt.beginPath()
    // cxt.arc(100, 100, 40, 0, Math.PI * 2, true)
    // cxt.closePath()
    // cxt.fillStyle = 'LightSkyBlue'
    // cxt.fill()
    // tools.getMouse
    // var txt = document.getElementById('txt')
    // var mouse = window.tools.getMouse(canvas)
    // canvas.addEventListener('mousemove', function () {
    //   txt.innerHTML = '鼠标指针坐标：（' + mouse.x + ',' + mouse.y + '）'
    // }, false)
    // function drawBall (x, y) {
    //   cxt.beginPath()
    //   cxt.arc(x, y, 20, 0, 360 * Math.PI / 180, true)
    //   cxt.closePath()
    //   cxt.fillStyle = '#6699FF'
    //   cxt.fill()
    // }
    // // 初始化一个圆形
    // drawBall(canvas.width / 2, canvas.height / 2)
    // // 初始化变量
    // var x = canvas.width / 2
    // var y = canvas.height / 2
    // // 获取按键方向
    // var key = window.tools.getKey()
    // // 添加keydown事件
    // window.addEventListener('keydown', function (e) {
    //   // 清除整个Canvas，以便重绘新的圆形
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 根据key.direction的值，判断小球移动方向
    //   switch (key.direction) {
    //     case 'up':
    //       y -= 2
    //       drawBall(x, y)
    //       break
    //     case 'down':
    //       y += 2
    //       drawBall(x, y)
    //       break
    //     case 'left':
    //       x -= 2
    //       drawBall(x, y)
    //       break
    //     case 'right':
    //       x += 2
    //       drawBall(x, y)
    //       break
    //       // default值
    //     default:
    //       drawBall(x, y)
    //   }
    // }, false)
    // 定义绘制小球的函数
    // 初始化变量，也就是初始化圆的X轴坐标为0
    // var x = 0;
    // // 动画循环
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   // 每次动画循环都先清空画布，再重绘新的图形
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 绘制圆
    //   cxt.beginPath()
    //   cxt.arc(x, 70, 20, 0, 360 * Math.PI / 180, true)
    //   cxt.closePath()
    //   cxt.fillStyle = '#6699FF'
    //   cxt.fill()
    //   // 变量递增
    //   x += 2
    // })()
    // let txt = document.getElementById('txt')
    // txt.innerHTML = 'Math.atan2(1,2)对应角度为：' + Math.atan2(1, 2) * 180 / Math.PI + '<br/>' + 'Math.atan2(-1,-2)对应角度为：' + Math.atan2(-1, -2) * 180 / Math.PI
    // 实例化一个箭头，某中心坐标为画布中心坐标
    // var arrow = new Arrow(canvas.width / 2, canvas.height / 2)
    // // 获取鼠标指针坐标
    // var mouse = window.tools.getMouse(canvas);
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame, canvas)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   var dx = mouse.x - canvas.width / 2
    //   var dy = mouse.y - canvas.height / 2
    //   // 使用Math.atan2()函数计算出鼠标指针与箭头中心的夹角
    //   arrow.angle = Math.atan2(dy, dx)
    //   arrow.fill(cxt)
    // })()
    // var text = document.getElementById('p1')
    // var x = canvas.width / 2
    // var y = canvas.height / 2
    // var mouse = window.tools.getMouse(canvas);
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   cxt.save()
    //   cxt.beginPath()
    //   cxt.moveTo(x, y)
    //   // mouse.x表示鼠标指针的X轴坐标，mouse.y表示鼠标指针的Y轴坐标
    //   cxt.lineTo(mouse.x, mouse.y)
    //   cxt.closePath()
    //   cxt.strokeStyle = 'red'
    //   cxt.stroke()
    //   cxt.restore()
    //   var dx = mouse.x - x
    //   var dy = mouse.y - y
    //   var distance = Math.sqrt(dx * dx + dy * dy)
    //   text.innerText = '鼠标指针与中心的距离为：' + distance
    // })()
    // 实例化一个小球，球心坐标为（100,25），半径、颜色都取默认值
    // var ball = new Ball(100, 25)
    // var centerX = canvas.width / 2
    // var centerY = canvas.height / 2
    // // var radius = 50
    // var angle = 0
    // var radiusX = 60
    // var radiusY = 40;
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 绘制圆形
    //   //   cxt.beginPath()
    //   //   cxt.arc(centerX, centerY, 50, 0, 360 * Math.PI / 180, false)
    //   //   cxt.closePath()
    //   //   cxt.stroke()
    //   // 计算小球坐标
    //   ball.x = centerX + Math.cos(angle) * radiusX
    //   ball.y = centerY + Math.sin(angle) * radiusY
    //   ball.fill(cxt)
    //   // 角度递增
    //   angle += 0.05
    // })()
    // var ball = new Ball(canvas.width / 2, canvas.height / 2)
    // // var angle = 0
    // // var range = 80;
    // // var vx = 2;
    // var speed = 2
    // // 速度方向与x轴正方向角度为30°
    // var vx = speed * Math.cos(80 * Math.PI / 180)
    // var vy = speed * Math.sin(80 * Math.PI / 180);
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // ball.x = canvas.width / 2 + Math.sin(angle) * range
    //   // ball.x += 1
    //   // ball.y = canvas.height / 2 + Math.sin(angle) * range
    //   ball.x += vx
    //   ball.y += vy
    //   // ball.scaleX = 1 + Math.sin(angle) * range
    //   // ball.scaleY = 1 + Math.sin(angle) * range
    //   ball.fill(cxt)

    //   // 角度递增
    //   // angle += 0.05
    // })()
    // 箭头跟随鼠标匀速移动
    // var arrow = new Arrow(canvas.width / 2, canvas.height / 2)
    // var mouse = window.tools.getMouse(canvas)
    // var speed = 1.5
    // var angle = 0;
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame, canvas)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 计算出鼠标指针与箭头中心之间的夹角
    //   var dx = mouse.x - canvas.width / 2
    //   var dy = mouse.y - canvas.height / 2
    //   angle = Math.atan2(dy, dx)
    //   var vx = Math.cos(angle) * speed
    //   var vy = Math.sin(angle) * speed
    //   arrow.x += vx
    //   arrow.y += vy
    //   arrow.angle = angle
    //   arrow.fill(cxt)
    // })()
    // 实例化一个小球
    // var ball = new Ball()
    // 初始化X轴方向速度及加速度
    // var vx = 8
    // var ax = -0.2;
    // var a = 0.2
    // // 计算出X轴和Y轴方向的加速度
    // var ax = a * Math.cos(30 * Math.PI / 180)
    // var ay = a * Math.sin(30 * Math.PI / 180)
    // var vx = 0
    // var vy = 0;
    // var vx = 4
    // var vy = -5
    // var gravity = 0.2;
    // var vx = 3
    // var vy = -6
    // var gravity = 0.2
    // var bounce = -0.8;
    // var vx = 8
    // var friction = 0.95;
    // var speed = 8
    // var vx = speed * Math.cos(30 * Math.PI / 180)
    // var vy = speed * Math.sin(30 * Math.PI / 180)
    // var friction = 0.95;
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)

    //   ball.x += vx
    //   ball.y += vy
    //   //   ball.y += vy
    //   //   // 边界检测
    //   //   if (ball.y > canvas.height - ball.radius) {
    //   //     ball.y = canvas.height - ball.radius
    //   //     vy = vy * bounce
    //   //   }
    //   // 速度反向并且减小
    //   ball.fill(cxt)
    //   // vy += gravity
    //   // 变量改变
    //   vx *= friction
    //   vy *= friction
    // })()
    // 初始化数据
    // var ball = new Ball(canvas.width / 2, canvas.height / 2)
    // ball.fill(cxt)
    // var key = window.tools.getKey()
    // // 添加键盘事件
    // window.addEventListener('keydown', function (e) {
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 根据key.direction的值，判断物体移动方向
    //   switch (key.direction) {
    //     case 'up':
    //       ball.y -= 3
    //       checkBorder()
    //       ball.fill(cxt)
    //       break
    //     case 'down':
    //       ball.y += 3
    //       checkBorder()
    //       ball.fill(cxt)
    //       break
    //     case 'left':
    //       ball.x -= 3
    //       checkBorder()
    //       ball.fill(cxt)
    //       break
    //     case 'right':
    //       ball.x += 3
    //       checkBorder()
    //       ball.fill(cxt)
    //       break
    //     default:
    //       checkBorder()
    //       ball.fill(cxt)
    //   }
    // }, false)
    // // 定义边界检测函数
    // function checkBorder () {
    //   // 当小球碰到上边界时
    //   if (ball.y < ball.radius) {
    //     ball.y = ball.radius
    //     // 当小球碰到下边界时
    //   } else if (ball.y > canvas.height - ball.radius) {
    //     ball.y = canvas.height - ball.radius
    //   }
    //   // 当小球碰到左边界时
    //   if (ball.x < ball.radius) {
    //     ball.x = ball.radius
    //     // 当小球碰到右边界时
    //   } else if (ball.x > canvas.width - ball.radius) {
    //     ball.x = canvas.width - ball.radius
    //   }
    // }
    // 初始化数据
    // var ball = new Ball(0, canvas.height / 2)
    // var vx = 2;
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   ball.x += vx
    //   // 当小球完全超出右边界时
    //   if (ball.x > canvas.width + ball.radius) {
    //     ball.x = -ball.radius
    //   }
    //   ball.fill(cxt)
    // })()
    // var ball = new Ball(canvas.width / 2, canvas.height / 2)
    // ball.fill(cxt)
    // var key = window.tools.getKey()
    // // 添加键盘事件
    // window.addEventListener('keydown', function (e) {
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 根据key.direction的值，判断小球移动方向
    //   switch (key.direction) {
    //     case 'up':
    //       ball.y -= 3
    //       // 检测上边界
    //       if (ball.y < -ball.radius) {
    //         ball.y = canvas.height + ball.radius
    //       }
    //       ball.fill(cxt)
    //       break
    //     case 'down':
    //       ball.y += 3
    //       // 检测下边界
    //       if (ball.y > canvas.height + ball.radius) {
    //         ball.y = -ball.radius
    //       }
    //       ball.fill(cxt)
    //       break
    //     case 'left':
    //       ball.x -= 3
    //       // 检测左边界
    //       if (ball.x < -ball.radius) {
    //         ball.x = canvas.width + ball.radius
    //       }
    //       ball.fill(cxt)
    //       break
    //     case 'right':
    //       ball.x += 3
    //       // 检测右边界
    //       if (ball.x > canvas.width + ball.radius) {
    //         ball.x = -ball.radius
    //       }
    //       ball.fill(cxt)
    //       break
    //       // default值
    //     default:ball.fill(cxt)
    //   }
    // }, false)
    // 定义一个用来存放小球的数组balls
    //     var balls = []
    //     // n表示小球数量
    //     var n = 50
    //     // var gravity = 0.15
    //     // 生成n个小球，其中小球的color、vx、vy都是随机值
    //     for (var i = 0; i < n; i++) {
    //       // 球心坐标为Canvas中心，color为随机颜色值
    //       var ball = new Ball(canvas.width / 2, canvas.height / 2, 5, window.tools.getRandomColor())
    //       // ball.vx和ball.vy取值都是：-1~1的任意数
    //       ball.vx = (Math.random() * 2 - 1) * 3
    //       ball.vy = 3
    //       // 添加到数组balls中
    //       balls.push(ball)
    //     }
    //     (function frame () {
    //       window.requestAnimationFrame(frame)
    //       cxt.clearRect(0, 0, canvas.width, canvas.height)
    //       // 使用forEach()函数遍历数组balls
    //       balls.forEach(function (ball) {
    //         // 边界检测，使得小球完全超出画布后会在中心位置重新生成
    //         if (ball.x < -ball.radius ||
    // ball.x > canvas.width + ball.radius ||
    // ball.y < -ball.radius ||
    // ball.y > canvas.height + ball.radius) {
    //           ball.x = canvas.width / 2
    //           ball.y = canvas.height / 2
    //           ball.vx = (Math.random() * 2 - 1) * 3
    //           ball.vy = Math.random() + 3
    //         }
    //         ball.fill(cxt)
    //         ball.x += ball.vx
    //         ball.y += ball.vy
    //         // ball.vy += gravity
    //       })
    //     })()
    // var ball = new Ball(canvas.width / 2, canvas.height / 2)
    // // 随机产生-3~3的任意数，作为vx、vy的值
    // var vx = (Math.random() * 2 - 1) * 3
    // var vy = (Math.random() * 2 - 1) * 3;
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   ball.x += vx
    //   ball.y += vy
    //   // 边界检测
    //   // 碰到左边界
    //   if (ball.x < ball.radius) {
    //     ball.x = ball.radius; vx = -vx
    //     // 碰到右边界
    //   } else if (ball.x > canvas.width - ball.radius) {
    //     ball.x = canvas.width - ball.radius
    //     vx = -vx
    //   }
    //   // 碰到上边界
    //   if (ball.y < ball.radius) {
    //     ball.y = ball.radius
    //     vy = -vy
    //     // 碰到下边界
    //   } else if (ball.y > canvas.height - ball.radius) {
    //     ball.y = canvas.height - ball.radius
    //     vy = -vy
    //   }
    //   ball.fill(cxt)
    // })()
    // 定义一个用来存放小球的数组balls
    // var balls = []
    // // n表示小球数量
    // var n = 10
    // // 生成n个小球，其中小球的color、vx、vy都是随机的
    // for (var i = 0; i < n; i++) {
    //   var ball = new Ball(canvas.width / 2, canvas.height / 2, 8, window.tools.getRandomColor())
    //   // 随机产生-3~3的任意数，作为vx、vy的值
    //   ball.vx = (Math.random() * 2 - 1) * 3
    //   ball.vy = (Math.random() * 2 - 1) * 3
    //   // 添加到数组balls中
    //   balls.push(ball)
    // }
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 使用forEach()函数遍历数组balls
    //   balls.forEach(function (ball) {
    //     ball.x += ball.vx
    //     ball.y += ball.vy
    //     // 边界检测
    //     // 碰到左边界
    //     if (ball.x < ball.radius) {
    //       ball.x = ball.radius
    //       ball.vx = -ball.vx
    //       // 碰到右边界
    //     } else if (ball.x > canvas.width - ball.radius) {
    //       ball.x = canvas.width - ball.radius; ball.vx = -ball.vx
    //     }
    //     // 碰到上边界
    //     if (ball.y < ball.radius) {
    //       ball.y = ball.radius
    //       ball.vy = -ball.vy
    //       // 碰到下边界
    //     } else if (ball.y > canvas.height - ball.radius) {
    //       ball.y = canvas.height - ball.radius
    //       ball.vy = -ball.vy
    //     }
    //     ball.fill(cxt)
    //   })
    // })()
    // var msg = document.getElementById('msg')
    // // 定义一个位置固定的小球ballA
    // var ballA = new Ball(canvas.width / 2, canvas.height / 2, 30)
    // // 获取ballA的外接矩形
    // var rectA = ballA.getRect()
    // var mouse = window.tools.getMouse(canvas);
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 绘制ballA及它的外接矩形
    //   ballA.fill(cxt)
    //   cxt.strokeRect(rectA.x, rectA.y, rectA.width, rectA.height)
    //   // 定义一个位置不固定的小球ballB，追随鼠标指针移动
    //   var ballB = new Ball(mouse.x, mouse.y, 30)
    //   // 获取ballB的外接矩形
    //   var rectB = ballB.getRect()
    //   // 绘制ballB及它的外接矩形
    //   ballB.fill(cxt)
    //   cxt.strokeRect(rectB.x, rectB.y, rectB.width, rectB.height)
    //   // 碰撞检测
    //   if (window.tools.checkRect(rectA, rectB)) {
    //     msg.innerHTML = '撞上了'
    //   } else {
    //     msg.innerHTML = '没撞上'
    //   }
    // })()
    // 定义一个用来存放方块的数组boxes
    // var boxes = []
    // // 定义一个“当前活动”的方块
    // var activeBox = createBox()// 定义方块的y轴速度
    // var vy = 1.5
    // var key = window.tools.getKey()
    // window.addEventListener('keydown', function () {
    //   switch (key.direction) {
    //     case 'down':
    //       activeBox.y += 5
    //       break
    //     case 'left':
    //       activeBox.x -= 10
    //       break
    //     case 'right':
    //       activeBox.x += 10
    //       break
    //   }
    // }, false)
    // // 定义一个函数createBox()，用于创建一个新的方块
    // function createBox () {
    //   var x = Math.random() * canvas.width
    //   var y = 0
    //   var width = Math.random() * 40 + 10
    //   var height = Math.random() * 40 + 10
    //   var color = window.tools.getRandomColor()
    //   var box = new Box(x, y, width, height, color)// 添加到数组boxes中
    //   boxes.push(box)
    //   return box
    // }
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   activeBox.y += vy
    //   // 边界检测，如果到达底部，则创建一个新的box
    //   if (activeBox.y > canvas.height - activeBox.height) {
    //     activeBox.y = canvas.height - activeBox.height
    //     activeBox = createBox()
    //   }
    //   // 遍历数组boxes，以便单独处理每一个box
    //   boxes.forEach(function (box) {
    //     /* 如果当前遍历的box不是“活动方块（activeBox）”，并且当前遍历的方块与“活动方块（activeBox）”碰上了，则创建新的方块 */
    //     if (activeBox !== box && window.tools.checkRect(activeBox, box)) {
    //       activeBox.y = box.y - activeBox.height
    //       activeBox = createBox()
    //     }
    //     box.fill(cxt)
    //   })
    // })()
    // var txt = document.getElementById('txt')
    // // 定义一个位置固定的小球ballA
    // var ballA = new Ball(canvas.width / 2, canvas.height / 2, 20, '#FF6699')
    // var mouse = window.tools.getMouse(canvas);
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 定义一个位置不固定的小球ballB，小球追随鼠标指针移动
    //   var ballB = new Ball(mouse.x, mouse.y, 20, '#66CCFF')
    //   // 碰撞检测
    //   if (window.tools.checkCircle(ballB, ballA)) {
    //     txt.innerHTML = '撞上了'
    //   } else {
    //     txt.innerHTML = '没撞上'
    //   }
    //   ballA.fill(cxt)
    //   ballB.fill(cxt)
    // })()
    // 定义两个小球：ballA和ballB
    // var ballA = new Ball(0, canvas.height / 2, 12, '#FF6699')
    // var ballB = new Ball(canvas.width, canvas.height / 2, 12, '#66CCFF')
    // // 定义小球x轴速度
    // var vx = 2;
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   ballA.x += vx
    //   ballB.x += -vx
    //   // 如果发生碰撞，则速度取反
    //   if (window.tools.checkCircle(ballB, ballA)) {
    //     vx = -vx
    //   }
    //   ballA.fill(cxt)
    //   ballB.fill(cxt)
    // })()
    // var n = 8
    // var balls = []
    // // 生成n个小球，小球的x、y、color、vx、vy属性的取值都是随机值
    // for (var i = 0; i < n; i++) {
    //   let ball = new Ball()
    //   ball.x = Math.random() * canvas.width
    //   ball.y = Math.random() * canvas.height
    //   ball.radius = 10
    //   ball.color = window.tools.getRandomColor()
    //   ball.vx = Math.random() * 6 - 3
    //   ball.vy = Math.random() * 6 - 3
    //   // 添加到数组balls中
    //   balls.push(ball)
    // }
    // // 碰撞检测（小球与小球）
    // function checkCollision (ballA, i) {
    //   for (var j = i + 1; j < balls.length; j++) {
    //     var ballB = balls[j]
    //     // 如果两个小球碰撞，则碰撞后vx、vy都取相反值
    //     if (window.tools.checkCircle(ballB, ballA)) {
    //       ballA.vx = -ballA.vx
    //       ballA.vy = -ballA.vy
    //       ballB.vx = -ballB.vx
    //       ballB.vy = -ballB.vy
    //       // 每次碰撞，为小球的x、y加入偏移量，避免相互重叠
    //       if (ballA.vx > 0) {
    //         ballA.x += 5
    //       } else {
    //         ballA.x -= 5
    //       }
    //       if (ballA.vy > 0) {
    //         ballA.y += 5
    //       } else {
    //         ballA.y -= 5
    //       }
    //       if (ballB.vx > 0) {
    //         ballB.x += 5
    //       } else {
    //         ballB.x -= 5
    //       }
    //       if (ballB.vy > 0) {
    //         ballB.y += 5
    //       } else {
    //         ballB.y -= 5
    //       }
    //     }
    //   }
    // }
    // // 边界检测（小球与边界）
    // function checkBorder (ball) {
    //   // 碰到左边界
    //   if (ball.x < ball.radius) {
    //     ball.x = ball.radius
    //     ball.vx = -ball.vx
    //     // 碰到右边界
    //   } else if (ball.x > canvas.width - ball.radius) {
    //     ball.x = canvas.width - ball.radius
    //     ball.vx = -ball.vx
    //   }
    //   // 碰到上边界
    //   if (ball.y < ball.radius) {
    //     ball.y = ball.radius
    //     ball.vy = -ball.vy
    //     // 碰到下边界
    //   } else if (ball.y > canvas.height - ball.radius) {
    //     ball.y = canvas.height - ball.radius
    //     ball.vy = -ball.vy
    //   }
    // }
    // // 绘制小球
    // function drawBall (ball) {
    //   ball.fill(cxt)
    //   ball.x += ball.vx
    //   ball.y += ball.vy
    // }
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 碰撞检测
    //   balls.forEach(checkCollision)
    //   // 边界检测
    //   balls.forEach(checkBorder)
    //   // 绘制小球
    //   balls.forEach(drawBall)
    // })()
    // var txt = document.getElementById('txt')
    // var ball = new Ball(canvas.width / 2, canvas.height / 2, 30)
    // ball.fill(cxt)
    // var mouse = window.tools.getMouse(canvas)
    // // 添加mousemove事件
    // canvas.addEventListener('mousemove', function () {
    //   // 判断鼠标指针的当前坐标是否处于小球内
    //   if (ball.checkMouse(mouse)) {
    //     txt.innerHTML = '鼠标指针被移入小球'
    //   } else {
    //     txt.innerHTML = '鼠标指针被移出小球'
    //   }
    // }, false)
    // var ball = new Ball(0, canvas.height / 2, 20)
    // var mouse = window.tools.getMouse(canvas)
    // // isMouseDown用于标识鼠标是否为按下的状态
    // var isMouseDown = false
    // var vx = 3
    // canvas.addEventListener('mousedown', function () {
    //   // 判断点击鼠标时的坐标是否位于小球上，如果是，则isMouseDown为true
    //   if (ball.checkMouse(mouse)) {
    //     isMouseDown = true
    //     alert('捕获成功')
    //   }
    // }, false);
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 如果鼠标不是按下状态，则小球继续运动，否则就会停止
    //   if (!isMouseDown) {
    //     ball.x += vx
    //   }
    //   ball.fill(cxt)
    // })()
    // 初始化数据
    // var ball = new Ball(canvas.width / 2, canvas.height / 2, 20)
    // var mouse = window.tools.getMouse(canvas)
    // var isMouseDown = false
    // // 随机产生-3~3的任意数，作为vx、vy的值
    // var vx = (Math.random() * 2 - 1) * 3
    // var vy = (Math.random() * 2 - 1) * 3
    // // 为画布添加mousedown事件
    // canvas.addEventListener('mousedown', function () {
    //   // var rect = ball.getRect()
    //   if (ball.checkMouse(mouse)) {
    //     isMouseDown = true
    //     alert('捕获成功')
    //   }
    // }, false);
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 如果鼠标不是按下状态，则小球继续运动，否则就会停止
    //   if (!isMouseDown) {
    //     ball.x += vx
    //     ball.y += vy
    //     // 边界检测
    //     // 碰到左边界
    //     if (ball.x < ball.radius) {
    //       ball.x = ball.radius
    //       vx = -vx
    //     } else if (ball.x > canvas.width - ball.radius) {
    //       ball.x = canvas.width - ball.radius
    //       vx = -vx
    //     }
    //     if (ball.y < ball.radius) {
    //       ball.y = ball.radius
    //       vy = -vy
    //     } else if (ball.y > canvas.height - ball.radius) {
    //       ball.y = canvas.height - ball.radius
    //       vy = -vy
    //     }
    //   }
    //   ball.fill(cxt)
    // })()
    // 初始化数据
    // var ball = new Ball(canvas.width / 2, canvas.height / 2, 20)
    // ball.fill(cxt)
    // var mouse = window.tools.getMouse(canvas)
    // // 为Canvas添加鼠标按下事件（mousedown）
    // canvas.addEventListener('mousedown', function () {
    //   // 判断鼠标点击是否落在小球上，如果是，就添加两个事件：mousemove、mouseup
    //   if (ball.checkMouse(mouse)) {
    //     canvas.addEventListener('mousemove', onMouseMove, false)
    //     canvas.addEventListener('mouseup', onMouseUp, false)
    //   }
    // }, false)
    // function onMouseMove () {
    //   // 移动鼠标时，更新小球坐标
    //   ball.x = mouse.x
    //   ball.y = mouse.y
    // }
    // function onMouseUp () {
    //   // 松开鼠标时，移除鼠标松开事件：mouseup（自身事件）
    //   canvas.removeEventListener('mouseup', onMouseUp, false)
    //   // 松开鼠标时，移除鼠标移动事件：mousemove
    //   canvas.removeEventListener('mousemove', onMouseMove, false)
    // }
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   ball.fill(cxt)
    // })()
    // 初始化数据
    // var ball = new Ball(canvas.width / 2, canvas.height / 2, 20)
    // ball.fill(cxt)
    // var mouse = window.tools.getMouse(canvas)
    // // 初始化两个变量：dx和dy
    // var dx = 0
    // var dy = 0
    // canvas.addEventListener('mousedown', function () {
    //   if (ball.checkMouse(mouse)) {
    //     // dx为鼠标指针与球心的水平偏移量
    //     dx = mouse.x - ball.x
    //     // dy为鼠标指针与球心的垂直偏移量
    //     dy = mouse.y - ball.y
    //     canvas.addEventListener('mousemove', onMouseMove, false)
    //     canvas.addEventListener('mouseup', onMouseUp, false)
    //   }
    // }, false)
    // function onMouseMove () {
    //   // 更新小球坐标
    //   ball.x = mouse.x - dx
    //   ball.y = mouse.y - dy
    // }
    // function onMouseUp () {
    //   // 松开鼠标时，移除鼠标松开事件：mouseup （自身事件）
    //   canvas.removeEventListener('mouseup', onMouseUp, false)
    //   // 松开鼠标时，移除鼠标移动事件：mousemove
    //   canvas.removeEventListener('mousemove', onMouseMove, false)
    // }
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame, canvas)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   ball.fill(cxt)
    // })()
    // 初始化数据
    // var ball = new Ball(canvas.width / 2, canvas.height / 2, 20)
    // ball.fill(cxt)
    // var mouse = window.tools.getMouse(canvas)
    // let dx = 0
    // let dy = 0
    // canvas.addEventListener('mousedown', function () {
    //   if (ball.checkMouse(mouse)) {
    //     // dx为鼠标指针与球心的水平偏移量
    //     dx = mouse.x - ball.x
    //     // dy为鼠标指针与球心的垂直偏移量
    //     dy = mouse.y - ball.y
    //     canvas.addEventListener('mousemove', onMouseMove, false)
    //     canvas.addEventListener('mouseup', onMouseUp, false)
    //   }
    // }, false)
    // function onMouseMove () {
    //   // 更新小球坐标
    //   ball.x = mouse.x - dx
    //   ball.y = mouse.y - dy
    //   // 加入边界限制
    //   // 当小球碰到左边界时
    //   if (ball.x < ball.radius) {
    //     ball.x = ball.radius
    //     // 当小球碰到右边界时
    //   } else if (ball.x > canvas.width - ball.radius) {
    //     ball.x = canvas.width - ball.radius
    //   }
    //   // 当小球碰到上边界时
    //   if (ball.y < ball.radius) {
    //     ball.y = ball.radius
    //     // 当小球碰到下边界时
    //   } else if (ball.y > canvas.height - ball.radius) {
    //     ball.y = canvas.height - ball.radius
    //   }
    // }
    // function onMouseUp () {
    //   canvas.removeEventListener('mouseup', onMouseUp, false)
    //   canvas.removeEventListener('mousemove', onMouseMove, false)
    // }
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame, canvas)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   ball.fill(cxt)
    // })()
    // 初始化数据
    // var ball = new Ball(canvas.width / 2, canvas.height / 2, 20)
    // ball.fill(cxt)
    // var mouse = window.tools.getMouse(canvas)
    // var isMouseDown = false
    // var dx = 0
    // var dy = 0
    // // oldX和oldY用于存储小球旧的坐标
    // var oldX, oldY
    // // 初始速度vx和vy都为0
    // var vx = 0
    // var vy = 0
    // // 加入重力和反弹消耗
    // var gravity = 1.5
    // var bounce = -0.8
    // // 添加mousedown事件
    // canvas.addEventListener('mousedown', function () {
    //   // 判断点击鼠标时指针是否落在小球上
    //   if (ball.checkMouse(mouse)) {
    //     // 捕获小球时，将isMouseDown设置为true
    //     isMouseDown = true
    //     // 捕获小球时，将当前鼠标指针位置赋值给oldX和oldY
    //     oldX = ball.x
    //     oldY = ball.y
    //     dx = mouse.x - ball.x
    //     dy = mouse.y - ball.y
    //     canvas.addEventListener('mousemove', onMouseMove, false)
    //     canvas.addEventListener('mouseup', onMouseUp, false)
    //   }
    // }, false)
    // function onMouseMove () {
    //   // 移动鼠标时，更新小球坐标
    //   ball.x = mouse.x - dx
    //   ball.y = mouse.y - dy
    //   // 加入边界限制
    //   // 当小球碰到左边界时
    //   if (ball.x < ball.radius) {
    //     ball.x = ball.radius
    //     // 当小球碰到右边界时
    //   } else if (ball.x > canvas.width - ball.radius) {
    //     ball.x = canvas.width - ball.radius
    //   }
    //   // 当小球碰到上边界时
    //   if (ball.y < ball.radius) {
    //     ball.y = ball.radius
    //     // 当小球碰到下边界时
    //   } else if (ball.y > canvas.height - ball.radius) {
    //     ball.y = canvas.height - ball.radius
    //   }
    // }
    // function onMouseUp () {
    //   // 松开鼠标时，将isMouseDown设置为false
    //   isMouseDown = false
    //   canvas.removeEventListener('mouseup', onMouseUp, false)
    //   canvas.removeEventListener('mousemove', onMouseMove, false)
    // }
    // (function drawFrame () {
    //   window.requestAnimationFrame(drawFrame, canvas)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   if (isMouseDown) {
    //     // 如果isMouseDown为true，用当前小球的位置减去上一帧的坐标
    //     vx = ball.x - oldX
    //     vy = ball.y - oldY
    //     // 如果isMouseDown为true，更新oldX和oldY为当前小球中心坐标
    //     oldX = ball.x
    //     oldY = ball.y
    //   } else {
    //     vy += gravity
    //     // 如果isMouseDown为false，小球沿着抛掷方向运动
    //     ball.x += vx
    //     ball.y += vy
    //     // 边界反弹
    //     // 碰到右边界
    //     if (ball.x > canvas.width - ball.radius) {
    //       ball.x = canvas.width - ball.radius
    //       vx = vx * bounce
    //       // 碰到左边界
    //     } else if (ball.x < ball.radius) {
    //       ball.x = ball.radius
    //       vx = vx * bounce
    //     }
    //     // 碰到下边界
    //     if (ball.y > canvas.height - ball.radius) {
    //       ball.y = canvas.height - ball.radius
    //       vy = vy * bounce
    //       // 碰到下边界
    //     } else if (ball.y < ball.radius) {
    //       ball.y = ball.radius
    //       vy = vy * bounce
    //     }
    //   }
    //   ball.fill(cxt)
    // })()
    // var ball = new Ball(canvas.width / 2, canvas.height / 2, 15, '#FF6699')
    // var bigBall = new Ball(canvas.width / 2, canvas.height / 2, 15, '# FF6699')
    // var smallBall = new Ball(canvas.width / 2, canvas.height / 2, 12, '#66CCFF')
    // var ball = new Ball(canvas.width / 2, canvas.height / 2)
    // // var targetRadius = 36
    // // var opacity = 1.0
    // // var targetOpacity = 0.0
    // var red = 255
    // var green = 0
    // var blue = 0
    // var targetRed = 10
    // var targetGreen = 255
    // var targetBlue = 55
    // // 定义终点的X轴坐标
    // // 定义终点的x轴坐标和y轴坐标
    // // var mouse = window.tools.getMouse(canvas)
    // // var targetX = canvas.width * (3 / 4)
    // // var targetY = canvas.height * (1 / 2)
    // // 定义缓动系数
    // var easing = 0.02;
    // (function frame () {
    //   window.requestAnimationFrame(frame)
    //   cxt.clearRect(0, 0, canvas.width, canvas.height)
    //   // 第1个小球跟随鼠标指针移动
    //   var vRed = (targetRed - red) * easing
    //   var vGreen = (targetGreen - green) * easing
    //   var vBlue = (targetBlue - blue) * easing
    //   // var vy1 = (mouse.y - bigBall.y) * easing
    //   red += vRed
    //   green += vGreen
    //   blue += vBlue
    //   ball.color = 'rgba(' + red + ',' + green + ',' + blue + ',' + 1.0 + ')'
    //   // ball.y += vy1
    //   ball.fill(cxt)
    //   // 第2个小球跟随鼠标指针移动
    // //   var vx2 = (bigBall.x - smallBall.x) * easing
    // //   var vy2 = (bigBall.y - smallBall.y) * easing
    // //   smallBall.x += vx2
    // //   smallBall.y += vy2
    // //   smallBall.fill(cxt)
    // })()
    // 初始化数据
    var ball = new Ball(0, canvas.height / 2)
    var mouse = window.tools.getMouse(canvas)
    var spring = 0.02
    var vx = 0
    var vy = 0
    var friction = 0.95
    var gravity = 3;
    (function frame () {
      window.requestAnimationFrame(frame)
      cxt.clearRect(0, 0, canvas.width, canvas.height)
      var ax = (mouse.x - ball.x) * spring
      var ay = (mouse.y - ball.y) * spring
      vx += ax
      vy += ay
      // 加入重力影响
      vy += gravity
      vx *= friction
      vy *= friction
      ball.x += vx
      ball.y += vy
      ball.fill(cxt)
      // 将鼠标指针以及小球中心连接成一条直线
      cxt.beginPath()
      cxt.moveTo(ball.x, ball.y)
      cxt.lineTo(mouse.x, mouse.y)
      cxt.stroke()
      cxt.closePath()
    })()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.test{
    width: 100%;
    height: 100%;
}
.pic{
    display: none;
}
// .canvas{
//     width: 300px;
//     height: 100px;
// }
</style>
