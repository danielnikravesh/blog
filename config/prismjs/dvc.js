module.exports = {
  line: {
    pattern: /(?<=(^|\n))\$[\s\S]*?[^\\](:?\n|$)/,
    inside: {
      input: /^\$\s+/,
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      command: /\b(?:ls|cat|vi|mkdir|cd|wget|du|python|cp|export|echo|pip|curl|tar|exec|autoload|sudo|unzip|rm|tree|file|md5|source|virtualenv|which)\b/m,
      git: /git \b(?:commit|status|pull|push|fetch|add|init|checkout|merge|clone|tag)\b/,
      dvc: /dvc \b(?:help|init|add|import-url|checkout|run|pull|push|fetch|status|repro|remove|move|gc|config|remote|metrics|install|root|lock|unlock|pipeline|destroy|unprotect|commit|cache|pkg|tag|diff|version|get|get-url|import|update)\b/
    }
  }
};
