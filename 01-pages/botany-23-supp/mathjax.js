// <!-- dynamically load mathjax for compatibility with self-contained -->
(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  document.getElementsByTagName("head")[0].appendChild(script);
})();

// add bootstrap table styles to pandoc tables
function bootstrapStylePandocTables() {
  $("tr.odd").parent("tbody").parent("table").addClass("table table-condensed");
}
$(document).ready(function () {
  bootstrapStylePandocTables();
});

// <!-- tabsets -->
$(document).ready(function () {
  window.buildTabsets("TOC");
});

$(document).ready(function () {
  $(".tabset-dropdown > .nav-tabs > li").click(function () {
    $(this).parent().toggleClass("nav-tabs-open");
  });
});
