export type AppScreen = Partial<typeof window.screen>

export type Info = chrome.windows.UpdateInfo

export type Wind = chrome.windows.Window

export interface Column {
  type: 'holed' | 'filled'
  cols: number
  rows: number
}

export interface ExtendedInfo {
  column: Column
  info?: Info
  screen?: AppScreen
}
