function getX(){
    return Math.random() >= 0.5;
} 

function vratiOdgovor(){
    return new Promise ((resolve, reject) => {
        const x = getX();
    
        if (x) {
            return setTimeout(() => resolve('Yes!'), 2000);
        }
        return setTimeout(() => reject('Oh no!'), 2000);
    })
}


// 1. primjer
//const rukujOdgovorom = async () => {}
async function rukujOdgovorom(){
    console.log("Dohvati odgovor");
    const odgovor = await vratiOdgovor();
    return odgovor;
}

rukujOdgovorom()
.then(value => console.log(value))
.catch(error => console.log(error));


// 2. primjer
/* 
async function rukujOdgovorom(){
    console.log("Dohvati odgovor");
    const odgovor = await vratiOdgovor();
    console.log(odgovor);
}

rukujOdgovorom().catch(error => console.log(error));
*/


// 3. primjer
/* 
async function rukujOdgovorom(){
    console.log("Dohvati odgovor");
    try{
        const odgovor = await vratiOdgovor();
        console.log(odgovor);
    }
    catch(error){
        console.log(error)
    }
}

rukujOdgovorom();
*/
