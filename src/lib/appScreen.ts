type AppScreen = Partial<typeof window.screen>

const getAppScreen = (screen: AppScreen) => {
  const screenWidth = screen.width || 1024
  const screenHeight = screen.height || 768
  const getRowsAmount = (totalWidth: number) =>
    Math.floor(totalWidth / screenWidth)

  return {
    getWidth: (maxColumns: number, col: number) =>
      (screenWidth / maxColumns) * col,
    getHeight: (totalRowsAmount: number) =>
      screenHeight / totalRowsAmount,
    getLeft: (totalWidth: number) =>
      totalWidth % screenWidth,
    getTop: (totalWidth: number, height: number) =>
      getRowsAmount(totalWidth) * height
  }
}

export {
  getAppScreen,
}
