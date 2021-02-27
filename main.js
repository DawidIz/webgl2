import { defaultGL } from './webgl/utils.js'
import { createShaderProgram } from './webgl/program.js'
import { buffer } from './webgl/buffer.js'

const gl = defaultGL()

const vs = `#version 300 es
    in vec3 aPosition;
    in vec4 aColor;

    out vec4 vColor;
    void main() {
        vColor = aColor;
        gl_Position = vec4(aPosition,1);
    }
`
const fs = `#version 300 es
    precision highp float;
    
    in vec4 vColor;

    out vec4 color;
    void main() {
        color = vColor;
    }
`
const program = createShaderProgram(gl, vs, fs)
gl.useProgram(program)
// gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

const positions = [-0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5]
// prettier-ignore
const colors = [
    1.0,  1.0,  1.0,  1.0,    // white
    1.0,  0.0,  0.0,  1.0,    // red
    0.0,  1.0,  0.0,  1.0,    // green
    0.0,  0.0,  1.0,  1.0,    // blue
  ];

//  BUFFERS

//  vertex buffer object
const vbo = buffer(
    gl,
    new Float32Array(positions),
    gl.ARRAY_BUFFER,
    gl.STATIC_DRAW
)

const colorBuffer = buffer(
    gl,
    new Float32Array(colors),
    gl.ARRAY_BUFFER,
    gl.STATIC_DRAW
)

//  pointer
const aPosition = gl.getAttribLocation(program, 'aPosition')

gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(aPosition)

const aColor = gl.getAttribLocation(program, 'aColor')
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(aColor)

gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

/**
 *
 *  Warning
 *
 *  Learning WebGL causes irreversible changes in the brain
 *  Learning this from me aggravates the symptoms
 */
