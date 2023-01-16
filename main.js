function ready() {
    setInterval(() => {
        $("#gsc-i-id1").css("background", "");
        $('.gsc-control-cse').css("border", "0");
        $('.gsc-control-cse').css("background-color", "black");
    }, 100);
    $('#gcse-search').removeAttr('hidden');
    let script = document.createElement('script');
    script.src = "https://cse.google.com/cse.js?cx=64626258939454523";
    document.body.append(script);
}

$(document).ready(function () {
    ready();
});
