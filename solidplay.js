// 初始化
var n = 1
var indexLast 
var imges = $('.imges>img').length
$('.btns>span').append("<span></span>")
$('.btns>span:nth-child(1)>span').addClass('square')

// 
var timer = setTimer()
$('.btns>span').on('click',function(){
    clearInterval(timer)
    let index = $(this).index()
    local(index)
    if (indexLast !== index){
        indexLast = index
        $('.btns>span').removeClass('mask')
        $(this).addClass('mask')
    }else if(indexLast === index){
        $('.btns>span').removeClass('mask')
        timer = setTimer()
        indexLast = undefined
    }
})
$('.window').on('mouseenter', function(){
    clearInterval(timer)
})

$('.window').on('mouseleave', function(){
    timer = setTimer()
    $('.btns>span').removeClass('mask')
    indexLast = undefined
})
document.addEventListener('visibilitychange', function() {
    if(document.hidden){ //页面不可见状态
        clearInterval(timer)
    }else{ //页面可见状态
        timer = setTimer()
    }
})

//函数声明
function setTimer(){
    return setInterval(()=>{
        if(n === imges){n = 0}
       local(n)
        n ++
    },3000)
}

function local(n){
    $('#imges').css('transform', 'translateX('+ (-868*n) + 'px)')
    $('#btns>span').css('border','4px solid transparent')
    $('#btns>span:nth-child(' + (n+1) + ')').css('border','4px solid #1e7da3')
    $('.btns>span>span').removeClass('square')
    $('.btns>span:nth-child(' + (n+1) + ')>span').addClass('square')
}
