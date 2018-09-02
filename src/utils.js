export function injectStyle(styles, id) {
    //if styles exists do nothing
    if (document.getElementById(id)) 
        return;
    let tag = document.createElement('style');
    tag.type = 'text/css';
    tag.id = id;
    if (tag.styleSheet) {
        tag.styleSheet.cssText = styles;
    } else {
        tag.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName('head')[0].appendChild(tag);
}