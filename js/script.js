console.clear();

function FaqBox__init() {
    $(".faq-box > ul > li").click(function () {
        let $this = $(this);

        $this.siblings(".hover").find("> .faq-box__answer").stop().slideUp(300);
        $this.siblings(".hover").removeClass("hover");

        if ($this.hasClass("hover")) {
            $this.removeClass("hover");
            $this.find("> .faq-box__answer").stop().slideUp(300);
        } else {
            $this.addClass("hover");
            $this.find("> .faq-box__answer").stop().slideDown(300)
        }
    });
}

$(".faq-box__answer").click(function () {
    return false;
});

FaqBox__init();