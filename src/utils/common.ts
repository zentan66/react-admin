function isFullScreen() {
  return (
    document.fullscreenElement ||
    document.msFullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    false
  )
}

export function toggleFullScreen() {
  const element = document.documentElement
  const status = isFullScreen()
  if (status) {
    const exitFullscreen =
      document.exitFullscreen ||
      document.webkitCancelFullScreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen
    exitFullscreen?.()
  } else {
    const requestScreenFull =
      element.requestFullscreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullscreen
    requestScreenFull?.()
  }
  return !status
}
