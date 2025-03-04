#!/usr/bin/env node
#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// package.json
var require_package = __commonJS({
  "package.json"(exports2, module2) {
    module2.exports = {
      name: "speedcreate",
      version: "1.0.0",
      main: "index.js",
      type: "module",
      bin: "/src/index.ts",
      scripts: {
        test: 'echo "Error: no test specified" && exit 1',
        build: "tsup",
        start: "node dist/index.js create app",
        dev: "npm run build && npm run start"
      },
      keywords: [],
      author: "",
      license: "ISC",
      description: "",
      dependencies: {
        chalk: "^5.4.1",
        commander: "^13.1.0",
        degit: "^2.8.4",
        figlet: "^1.8.0",
        "fs-extra": "^11.3.0",
        inquirer: "^12.4.1",
        ora: "^8.2.0",
        path: "^0.12.7",
        pnpm: "^10.5.2",
        "ts-node": "^10.9.2",
        tsup: "^8.4.0",
        typescript: "^5.8.2"
      },
      devDependencies: {
        "@types/chalk": "^0.4.31",
        "@types/degit": "^2.8.6",
        "@types/fs-extra": "^11.0.4",
        "@types/node": "^22.13.9"
      }
    };
  }
});

// src/index.ts
var import_commander = require("commander");
var import_chalk2 = __toESM(require("chalk"), 1);
var import_fs_extra = __toESM(require("fs-extra"), 1);
var import_path = __toESM(require("path"), 1);
var import_inquirer = __toESM(require("inquirer"), 1);

// src/clone.ts
var import_degit = __toESM(require("degit"), 1);
var import_chalk = __toESM(require("chalk"), 1);
async function clone(cache, force, targetPath, source1) {
  const emitter = (0, import_degit.default)(source1, {
    force,
    cache
  });
  emitter.on("info", (info) => {
    console.log(import_chalk.default.yellow("message: ${info.message}"));
  });
  try {
    await emitter.clone(targetPath);
    return true;
  } catch (error) {
    console.log("Error:", error);
    return false;
  }
}
var clone_default = clone;

// src/constant.ts
var nameToRepoURL = {
  "vue-lint-vitesse-lite": "huanxiaomang/vue-lint-vitesse-lite",
  "npm-ts-tsup": "huanxiaomang/npm-ts-tsup",
  "antfu\u7684vitesse": "antfu-collective/vitesse"
};

// src/index.ts
import_commander.program.name("speed-create").usage("<command> [option]").description(import_chalk2.default.green("\u4E00\u4E2A\u5FEB\u901F\u5E76\u4FBF\u5229\u7684\u6A21\u677F\u521B\u5EFA\u811A\u624B\u67B6\uFF01")).version(`v${require_package().version}`);
import_commander.program.command("create <app-name>").description("Clone a repository into a newly created directory").action(async (name) => {
  const targetPath = import_path.default.join(process.cwd(), name);
  if (import_fs_extra.default.pathExistsSync(targetPath)) {
    const answer = await import_inquirer.default.prompt([
      {
        type: "confirm",
        message: import_chalk2.default.red("\u8BE5\u76EE\u5F55\u4E0B\u5DF2\u5B58\u5728\u76F8\u540C\u6587\u4EF6\u540D\u7684\u6587\u4EF6\u662F\u5426\u8FDB\u884C\u8986\u76D6?"),
        default: false,
        name: "overwrite"
      }
    ]);
    if (answer.overwrite) {
      await import_fs_extra.default.remove(targetPath);
      console.log(import_chalk2.default.green("\u5220\u9664\u6210\u529F\uFF01"));
    } else {
      console.log(import_chalk2.default.yellow("\u64CD\u4F5C\u53D6\u6D88\uFF0C\u672A\u8986\u76D6\u73B0\u6709\u76EE\u5F55\u3002"));
      return;
    }
  }
  if (Object.keys(nameToRepoURL).length === 0) {
    console.log(import_chalk2.default.red("\u9519\u8BEF\uFF1A\u672A\u5B9A\u4E49\u4EFB\u4F55\u6A21\u677F\uFF01"));
    return;
  }
  const choices1 = Object.keys(nameToRepoURL).map((key) => ({
    name: key,
    value: key
  }));
  const result = await import_inquirer.default.prompt([
    {
      type: "list",
      name: "type",
      message: "\u8BF7\u9009\u62E9\u4F60\u8981\u521B\u5EFA\u7684\u6A21\u677F\uFF1A",
      choices: choices1
    },
    {
      type: "list",
      name: "cache1",
      message: "\u662F\u5426\u5BF9degit\u8FDB\u884Ccache\u7684\u914D\u7F6E?",
      choices: [
        { name: "\u662F", value: true },
        { name: "\u5426", value: false }
      ]
    },
    {
      type: "list",
      name: "force1",
      message: "\u662F\u5426\u5BF9degit\u8FDB\u884Cforce\u7684\u914D\u7F6E?",
      choices: [
        { name: "\u662F", value: true },
        { name: "\u5426", value: false }
      ]
    }
  ]);
  console.log(result);
  try {
    await clone_default(result.cache1, result.force1, targetPath, result.type);
    console.log(import_chalk2.default.green("Success!"));
  } catch (error) {
    console.log(import_chalk2.default.red("\u9519\u8BEF\u8BE6\u60C5\uFF1A", error.message));
  }
});
import_commander.program.parse(process.argv);
