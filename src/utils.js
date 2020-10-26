export function withLineBreaks(content) {
    if (typeof content === "string" || content instanceof String) {
        let ret = content.replace(/<p><\/p>/g, "<br/>");
        return ret.replace(/<a/g, "<a target=\"_blank\" rel=\"noopener noreferrer\"");
    }
    return content;
}