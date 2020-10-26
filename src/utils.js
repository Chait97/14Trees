export function withLineBreaks(content) {
    let ret = content.replaceAll("<p></p>", "<br/>");
    return ret.replaceAll("<a", "<a target=\"_blank\" rel=\"noopener noreferrer\"");
}