//Tee nii et komnsoolile trükitakse:
// "The fruit name has more than five characters." kui puuvilja nimi on pikem kui viis sümbollit
// Vastasel juhul trükitakse:
// "The fruit name has five characters or less." 

const fruit = 'orange'
if (fruit.length > 5) {  
    console.log('The fruit name has more than five characters.')  
  } else {  
    console.log('The fruit name has five characters or less.')
  }  