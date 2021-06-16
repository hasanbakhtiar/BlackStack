// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.



// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield



// ----------------------------------------------------------------------------------------------------
// var     infoVar        = "Variable";
// const   infoConst      = "Constant";
// let     infoLet        = "Let";

// var     infoVar        = "Variable1";
// const   infoConst      = "Constant1";
// let     infoLet        = "Let1";

// document.write(infoLet);
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// Local
// Global
// Local Global  




if(true){
    var     infoVar        = "Variable";
    let     infoLet        = "Let";
    const   infoConst      = "Constant";


}
// document.write(infoVar);


//global

// if (true) {
//     // local global
//     if (true) {
//     // local global

//         if (true) {
//     // local global

//             if (true) {
//     // local global

//                 if (true) {
//     // local global

//                     if (true) {
//     // local global

//                         if (true) {
//     // local 

      
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


// ----------------------------------------------------------------------------------------------------

// if -> Əgər
// else -> Deyilsə
// else if -> Əgər Deyilse

const timeInfo = 9;

if (timeInfo >= 7 && timeInfo <= 10) {
    console.log("Sabahiniz Xeyr");
        if (timeInfo == 10) {
             console.log("Sabah yemeyini ye");
        }else if(timeInfo == 9){
            console.log("ders basladi");
        }
    
}else if (timeInfo > 10 && timeInfo <= 17) {
    console.log("Her vaxtiniz xeyr");
}else if (timeInfo > 17 && timeInfo <= 23) {
    console.log("Axsaminiz xeyr");
}else{
console.log("Get yat ay bala");
}
