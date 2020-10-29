const BREAK = '^^'

export function withLineBreaks(content) {
    if (typeof content === "string" || content instanceof String) {
        let ret = content.replace(/<p><\/p>/g, "<br/>");
        return ret.replace(/<a/g, "<a target=\"_blank\" rel=\"noopener noreferrer\"");
    }
    return content;
}

export function videoUrl(url) {
    return url + "?enablejsapi=1&origin=https://14trees.org";
}

function whichCompoent(node) {
    let type = null;
    switch(node?.data?.target?.sys?.contentType?.sys?.id) {
        case 'person':
            type = "person";
            break;
        case 'articlePreview':
            type = "ArticlePreview";
            break;
        default:
            undefined;
    }
    return {
        type,
        fields: (node?.data?.target?.fields)
    }
}

export function composeTemplate(content, MARKS, BLOCKS, documentToHtmlString) {
    let componentMap = new Map();
    let componentInd = 0;
    const options = {
        // renderMark: {
            // [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`
        // },
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                componentMap.set( componentInd, whichCompoent(node));
                componentInd += 1;
                return BREAK;
            }
        }
    }
    const compiled = documentToHtmlString(content, options);
    const splits = compiled.split(BREAK);
    const groups = new Array(); 
    for (let i = 0; i < splits.length; i ++) {
        groups.push({
            key: i, 
            split: splits[i].length > 0 ? splits[i] : null,
            component: componentMap.has(i) ? componentMap.get(i) : null 
        })
    }
    return groups;
}