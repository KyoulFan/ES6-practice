async function loadConfig() {
  const theme = await import("./theme.mjs");
  const currentTime = new Date().getHours();
  if (currentTime < 18) {
    theme.setLightTheme();
  } else {
    theme.setDarkTheme();
  }
}
loadConfig();