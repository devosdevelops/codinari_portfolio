$(document).ready(function(){
    $(".skill").each(function(){
        $(this).find(".skill__bar").animate({
            width:$(this).attr("data-percent")
        }, 3000);
    });

    $(".skill").click(function(){
        $(this).find(".skill__bar").animate({
            width: "0px"
        }, 200)
        $(this).find(".skill__bar").animate({
            width:$(this).attr("data-percent")
        }, 3000);
    });
});

/* <script src="../script/skill_bar.js"></script> */

/*
    <div class="skill" data-percent="70%">
        <div class="skill__title">
            <h2 class="skill__h2">HTML</h2>
        </div>
        <div class="skill__bar"></div>
        <div class="skill__percent">70%</div>
    </div>
*/

/*
    .skill{
        width: 100%;
        height: 40px;
        background-color: var(--lighter-pink);
        clip-path: polygon(0% 0, 100% 0, 95% 100%, 0% 100%);
        transition:0.4s;
        position: relative;
        margin-bottom: 20px;
    }
    .skill__title{
        position: absolute;
        top: 0px;
        left: 0px;
        width: fit-content;
        font-family: var(--montserrat);
    }
    .skill__h2{
        height: 40px;
        padding: 0px 20px;
        line-height: 40px;
        color: var(--dark-blue);
        user-select: none;
        -webkit-user-select: none;
    }
    .skill__bar{
        height: 40px;
        width: 0px;
        background-color: var(--codinari-cyan);
    }
    .skill__percent{
        position: absolute;
        right: 30px;
        top: 0;
        font-family: var(--montserrat);
        font-size: 10px;
        line-height: 40px;
        color: rgba(0, 0, 0, 0.4);
        user-select: none;
        -webkit-user-select: none;
    }
*/