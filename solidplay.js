var n = 1
$('.btns>span').append("<span></span>")
$('.btns>span:nth-child(1)>span').addClass('square')

setInterval(()=>{
    if(n === 4){n = 0}
    $('#imges').css('transform', 'translateX('+ (-868*n) + 'px)')
    $('#btns>span').css('border','4px solid transparent')
    $('#btns>span:nth-child(' + (n+1) + ')').css('border','4px solid #1e7da3')
    $('.btns>span>span').removeClass('square')
    $('.btns>span:nth-child(' + (n+1) + ')>span').addClass('square')
    n ++
},3000)



