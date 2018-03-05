if (window.location.protocol != 'https:') {
  window.location = window.location.toString().replace(/^http:/, "https:");
}
