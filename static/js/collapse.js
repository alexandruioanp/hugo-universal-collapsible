// Handler will be called when the DOM is fully loaded
// So the script can be placed anywhere on the page
var callback = function() {
  var collapseHooks = document.getElementsByClassName('collapseAfter');
  for (var hook of collapseHooks) {
    var
      wrap = hook.parentNode,
      a = wrap.parentNode.insertBefore(
        document.createElement('a'),
        wrap.nextSibling
      );
    a.addEventListener('click', toggleCollapse, false);
    a.className = 'collapseAnchor';
    a.href="#"; /* without this it's not keyboard focusable */
    wrap.classList.add('closed', 'collapseWrap');
  } // for hook
  function toggleCollapse(e) {
    e.preventDefault();
    e.currentTarget.previousElementSibling.classList.toggle('closed');
  } // toggleCollapse
};

if(document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
