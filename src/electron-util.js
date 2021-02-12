"use strict";

// Taken from https://github.com/sindresorhus/electron-util/blob/master/node.js

const isElectron = "electron" in process.versions;

const isUsingAsar =
  isElectron &&
  process.mainModule &&
  process.mainModule.filename.includes("app.asar");

export const fixPathForAsarUnpack = (path) => {
  return isUsingAsar
    ? path.join(
        path.replace("app.asar", "app.asar.unpacked"),
        "@rasgo",
        "pdf-to-printer",
        "dist"
      )
    : path;
};
