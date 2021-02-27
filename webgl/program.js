import { createShader } from './shader.js'

//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteProgram

/**
 * Create Shader Program from shaders
 *
 * @param {WebGL2RenderingContext} gl
 * @param {!String} vertexShaderSource
 * @param {!String} fragmentShaderSource
 *
 * @return {WebGLProgram}
 */

const createShaderProgram = (gl, vertexShaderSource, fragmentShaderSource) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(
        gl,
        gl.FRAGMENT_SHADER,
        fragmentShaderSource
    )

    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)

    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return null
    }

    return program
}

export { createShaderProgram }
