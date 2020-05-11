// using require syntax so this works in gatsby-node.js as well 😞
const slugifyLib = require('slugify');

// set up slugify to convert `/` to `-` instead of removing it
slugifyLib.extend({ '/': '-' });

const slugify = input => {
  return slugifyLib(input, {
    lower: true,
    replacement: '-',
    // this regex contains characters to remove from slugs.  Add any that may be missing!
    remove: /[…?*+~.,()'"!:@]/g,
  });
};

module.exports = slugify;
