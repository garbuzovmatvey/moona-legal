"use strict";
const language = document.getElementById("language");
if (language) language.addEventListener("change", () => {
  if (language.value.startsWith("/moona-legal/")) window.location.assign(language.value);
});
