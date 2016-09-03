<template>
    <canvas id="canvas" class="canvas"></canvas>
</template>
<script>
    export default{
        ready(){
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

            const iniNode = (node, factor)=> {
                let rnd = ()=> {
                    let num = Math.random() - 0.5
                    if (Math.abs(num) > 0.4) {
                        return num
                    } else {
                        return rnd()
                    }
                }
                node.vx = factor * rnd()
                node.vy = factor * rnd()
                node.period = Math.random() * 120
            }


            const createNodes = ()=> {
                nodes = []
                lines = []
                for (let i = 0; i < 50; i++) {

                    let R = Math.floor(Math.random() * 100) + 155,
                            G = Math.floor(Math.random() * 100) + 155,
                            B = Math.floor(Math.random() * 100) + 155,
                            color = "rgb(" + R + "," + G + "," + B + ")"

                    let node = {
                        x: (Math.random() - 0.5) * 300 + mouse.x,
                        y: (Math.random() - 0.5) * 300 + mouse.y,
                        radius: 2 * Math.random() + 1,
                        color,
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

            const render = (ctx)=> {
                ctx.fillStyle = '#FFF'
                ctx.clearRect(0, 0, width, height)
                lines.forEach(({from, to})=> {
                    let lineLength = Math.pow((from.x - to.x), 2) +
                                    Math.pow((from.y - to.y), 2),
                            limit = 10000,
                            factor = 1 - lineLength / limit
                    if (lineLength > limit) {
                        return
                    }

                    ctx.lineWidth = factor
                    ctx.globalAlpha = factor
                    ctx.strokeStyle = from.color

                    ctx.beginPath()
                    ctx.moveTo(from.x, from.y)
                    ctx.lineTo(to.x, to.y)
                    ctx.stroke()
                })
                ctx.globalAlpha = 1

                nodes.forEach(function ({x, y, radius, color,}) {
                    ctx.fillStyle = color
                    ctx.beginPath()
                    ctx.arc(x, y, radius, 0, 2 * Math.PI)
                    ctx.fill()
                })

                let x = mouse.x,
                        y = mouse.y,
                        gradient = ctx
                                .createRadialGradient(x, y, 1, x, y, 200)

                gradient.addColorStop(0, 'rgba(255,255,255,0)')
                gradient.addColorStop(1, 'rgba(255,255,255,1)')
                ctx.fillStyle = gradient
                ctx.arc(x, y, 360, 0, 2 * Math.PI)
                ctx.fill()
            }

            const animation = ()=> {
                const invert = (node, dir)=> node[dir] = mouse[dir]
                nodes.forEach((node)=> {
                            Math.abs(node.x - mouse.x) > 250 && invert(node, 'x')
                            Math.abs(node.y - mouse.y) > 250 && invert(node, 'y')
                            node.period--
                            switch (true) {
                                case node.period < 0:
                                    iniNode(node, 2)
                                    break
                                case node.period < 50:
                                    let factor1 = (node.period / 50 )
                                    node.x += node.vx * factor1
                                    node.y += node.vy * factor1
                                    break
                                case node.period < 80:
                                    node.x += node.vx
                                    node.y += node.vy
                                    break
                                case node.period < 120:
                                    let factor2 = (1 - (node.period - 40) / 80 )
                                    node.x += node.vx * factor2
                                    node.y += node.vy * factor2
                                    break
                                default:
                                    return
                            }
                        }
                )
                render(ctx)
                requestAnimationFrame(animation)
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
            createNodes()
            render(ctx)
            animation()
        }
    }
</script>
<style>
    .canvas {
        position: fixed;
        z-index: -1;
    }
</style>