window.addEventListener("keydown", fireOnKeyDown, false);
window.addEventListener("keyup", fireOnKeyUp, false);

var _tabber_i = 0;

function fireOnKeyDown() {
    const s = safari.self.tab;
    const e = event;

    if (e.ctrlKey && e.keyCode == "192") {
        event.preventDefault();
        s.dispatchMessage("navigating", "" + _tabber_i);
        _tabber_i++;
    }
}

function fireOnKeyUp() {
    const s = safari.self.tab;
    const e = event;
    if (e.keyCode == "17" && _tabber_i > 0) {
        event.preventDefault();
        s.dispatchMessage("gonexttab", "" + _tabber_i);
        _tabber_i = 0;
    }
}