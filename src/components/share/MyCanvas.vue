<template>
  <canvas id="canvas" class="canvas"></canvas>
</template>
<script>
  export default{
    mounted(){
      let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        nodes,
        lines,
        mouse = {
          x: width / 2,
          y: height / 2
        }
      canvas.width = width
      canvas.height = height

      const rndNum = ()=>Math.random() - 0.5
      const rndCl = ()=>Math.floor(Math.random() * 255)
      const velocityFunction = x=>-1 / 3600 * x * (x - 120)

      const iniNode = (node, factor)=> {
        node.vx = factor * rndNum()
        node.vy = factor * rndNum()
        node.period = 60 + Math.random() * 60
      }

      const createNodes = (i)=> {
        nodes = []
        lines = []

        while (i--) {
          let node = {
            x: Math.random() * width,
            y: Math.random() * height,
            radius: 5 * Math.random() + 5,
            color: "rgb(" + rndCl() + "," + rndCl() + "," + rndCl() + ")"
          }
          iniNode(node, 2)
          nodes.push(node)
        }

        nodes.forEach((node1, index)=> {
          nodes.slice(index + 1).forEach((node2)=> {
            lines.push({
              from: node1,
              to: node2
            })
          })
        })
      }
      const frame = ()=> {
        nodes.forEach(node=> {
          if (node.x > width || node.x < 0) {
            node.vx = -node.vx
          }
          if (node.y > height || node.y < 0) {
            node.vy = -node.vy
          }

          let v = velocityFunction(node.period)
          node.x += node.vx * v
          node.y += node.vy * v

          node.period--
          node.period < 0 && iniNode(node, 2)
        })


        ctx.clearRect(0, 0, width, height)

        lines.forEach(({from, to})=> {
          let lineLength = Math.pow((from.x - to.x), 2) +
              Math.pow((from.y - to.y), 2),
            limit = 100000,
            factor = 1 - lineLength / limit
          if (lineLength > limit) {
            return
          }
          ctx.lineWidth = factor
          ctx.strokeStyle = from.color
          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
          ctx.stroke()
        })

        nodes.forEach(function ({x, y, radius, color,}) {
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, 2 * Math.PI)
          ctx.fill()
        })

        let x = mouse.x,
          y = mouse.y,
          grad = ctx.createRadialGradient(x, y, 100, x, y, 2000)
        grad.addColorStop(0, 'rgba(255,255,255,0.7)')
        grad.addColorStop(0.06, 'rgba(255,255,255,1)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)

        requestAnimationFrame(frame)
      }

      window.addEventListener('mousemove', function (event) {
        let x = event.clientX,
          y = event.clientY,
          offsetX = x - mouse.x,
          offsetY = y - mouse.y
        if (Math.pow(offsetX, 2) + Math.pow(offsetY, 2) > 100) {
          mouse.x = x
          mouse.y = y
        }
      })

      window.addEventListener('resize', function () {
        width = window.innerWidth
        height = window.innerHeight
        nodes = []
        lines = []
        createNodes(Math.floor(width / 20))
        canvas.width = width
        canvas.height = height
      })

      if (width > 450) {
        createNodes(Math.floor(width / 20))
        frame()
      }
    }
  }
</script>
<style>
  .canvas {
    position: fixed;
    z-index: -1;
  }
</style>
