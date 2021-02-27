//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createBuffer
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer
//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData

/**
 * Create buffer and write data
 *
 * @param {WebGL2RenderingContext} gl
 * @param {(ArrayBuffer|SharedArrayBuffer|ArrayBufferView)} data
 * @param {GLenum} target
 * @param {GLenum} usage
 *
 * @return {WebGLShader}
 *
 * @example
 */

const buffer = (gl, data, target, usage) => {
    //  create buffer
    const buffer = gl.createBuffer()
    //  bind buffer
    gl.bindBuffer(target, buffer)
    //  data buffer
    gl.bufferData(target, data, usage)
    //  clean
    gl.bindBuffer(target, null)

    return buffer
}

export { buffer }
