const fs = require('fs');
const marked = require('marked');

function markToHtml() {

    let srcPath;
    let distPath;

    const params = process.argv;
    if (params.length === 5) {
        srcPath = params[2];
        distPath = params[4];
    } else {
        console.error("Usage: node script.js <srcPath> to <distPath>");
        process.exit(1);
    }

    try {
        const data = fs.readFileSync(srcPath, 'utf-8');
        const html = marked.parse(data);
        fs.writeFileSync(distPath, html);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
    
}

module.exports = { markToHtml };

markToHtml();