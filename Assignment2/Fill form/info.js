let check= document.getElementsById('nm');
   if ( check[0]=== 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 ) {
     alert(" you can't use interger at begging")
      }
  
let ph= document.getElementsById('pn');
     if (ph.lenght>10) {
          alert('invalid number') }

let mailid=document.getElementsbyId('mail-id');
let a=0;
        for(i=0 ; i<mailid.length ; i++) {
           if (mailid[i]==@) {
        a+=1}
          }
        if (a!=1) {
            alert('invalid E-mail-Id')
         }
