//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderInfoLog
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteShader

/**
 * Create shader
 *
 * @param {WebGL2RenderingContext} gl
 * @param {GLenum} type
 * @param {String} source
 *
 * @return {WebGLShader}
 */

const createShader = (gl, type, source) => {
    //  create shader object
    const shader = gl.createShader(type)

    //  set the source code of a shader
    gl.shaderSource(shader, source)

    //  compile shader source code
    gl.compileShader(shader)

    //  check compile status
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
    }

    return shader
}

export { createShader }
