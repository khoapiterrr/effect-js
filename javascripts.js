document.addEventListener("DOMContentLoaded",function(){
    //nut bam
    let nutpush = document.getElementById('push')
    let nut3d =document.getElementById('quay3d')

    //background
    let mautrangnd = document.querySelector('.nut')
    let mauden = document.querySelector('.phuden')
    let noidung = document.querySelector('.noidung')
    let menu = document.querySelector('.menutrai')
    nutpush.onclick = function(){
        noidung.classList.add('visiablemenu')
        mauden.classList.add('whenclickpush')
    }
    nut3d.onclick = function() {
        mautrangnd.classList.add('trangquay')
        mauden.classList.add('whenclickpush')
        menu.classList.remove('hidenmenu')
    }
    mauden.onclick = function(){
        noidung.classList.remove('visiablemenu')
        mauden.classList.remove('whenclickpush')
        mautrangnd.classList.remove('trangquay')
        menu.classList.add('hidenmenu')
    }
    

},false)