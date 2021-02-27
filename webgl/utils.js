const defaultGL = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 800
    canvas.height = 600
    canvas.style.border = '2px dashed blue'

    document.body.append(canvas)

    return canvas.getContext('webgl2')
}

export { defaultGL }
