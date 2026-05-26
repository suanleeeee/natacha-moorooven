const markdownIt = require("markdown-it");
const md = new markdownIt({ html: true, breaks: true });

module.exports = function(eleventyConfig) {
  // Render markdown text from YAML data
  eleventyConfig.addFilter("md", (content) => md.render(content || ""));

  // Pass through static files unchanged
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("audio");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk"
  };
};
