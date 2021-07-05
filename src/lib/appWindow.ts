type AppScreen = Partial<typeof window.screen>

const getAppWindow = (screen: AppScreen) => {
  const screenWidth = screen.width || 1024
  const screenHeight = screen.height || 768

  return (totalWidth: number) => {
    const getRowsAmount = () =>
      Math.floor(totalWidth / screenWidth)

    return ({
      getWidth: (maxColumns: number, col: number) => (screenWidth / maxColumns) * col,
      getHeight: (totalRowsAmount: number) => screenHeight / totalRowsAmount,
      getLeft: () => totalWidth % screenWidth,
      getTop: (height: number) => getRowsAmount() * height
    })
  }
}

export {
  getAppWindow,
}
