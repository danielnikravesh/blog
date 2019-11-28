// Command arrays are intentionally reverse sorted
// to prevend sorter matches before longer ones

const commands = [
  "which",
  "wget",
  "virtualenv",
  "vi",
  "unzip",
  "tree",
  "tar",
  "sudo",
  "source",
  "rm",
  "python",
  "pip",
  "mkdir",
  "md5",
  "ls",
  "file",
  "export",
  "exec",
  "echo",
  "du",
  "curl",
  "cp",
  "cd",
  "cat",
  "autoload"
];

const git = [
  "tag",
  "status",
  "push",
  "pull",
  "merge",
  "init",
  "fetch",
  "commit",
  "clone",
  "checkout",
  "add"
];

const dvc = [
  "version",
  "update",
  "unprotect",
  "unlock",
  "tag",
  "status",
  "run",
  "root",
  "repro",
  "remove",
  "remote remove",
  "remote modify",
  "remote list",
  "remote default",
  "remote add",
  "remote",
  "push",
  "pull",
  "pkg",
  "pipeline show",
  "pipeline list",
  "pipeline",
  "move",
  "metrics show",
  "metrics remove",
  "metrics modify",
  "metrics add",
  "metrics",
  "lock",
  "install",
  "init",
  "import-url",
  "import",
  "help",
  "get-url",
  "get",
  "gc",
  "fetch",
  "diff",
  "destroy",
  "config",
  "commit",
  "checkout",
  "cache dir",
  "cache",
  "add"
];

module.exports = {
  line: {
    pattern: /(?<=(^|\n))\$[\s\S]*?[^\\](:?\n|$)/,
    inside: {
      input: /^\$\s+/,
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      command: new RegExp(`\\b(?:${commands.join("|")})\\b`),
      git: new RegExp(`git \\b(?:${git.join("|")})\\b`),
      dvc: new RegExp(`dvc \\b(?:${dvc.join("|")})\\b`)
    }
  }
};
