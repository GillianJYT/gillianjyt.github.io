function introScroll() {
    document.getElementById("about").scrollIntoView()
}

function movingArrow() {
    /*let e = document.getElementById("arrow");
    let rect = e.getBoundingClientRect();
    let pos = rect.top;

    let anim = setInterval(move, 10);
    function move() {
        if (pos == rect.top) {
            pos++;
            e.style.top = pos + 'px';
        } else if (pos == rect.bottom) {
            pos--;
            e.style.top = pos + 'px';
        }
    }*/

    $(document).ready(function(){
        $('.try').toggle(function() {
            $(".arrow").animate({top: '-=100px'}, 2000);
        }, function() {
            $(".arrow").animate({top: '+=100px'}, 2000)
        })
    })
}