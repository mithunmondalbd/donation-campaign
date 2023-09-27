const getSaveDonation = () =>{
    const storeDonation = localStorage.getItem("donation")
    if(storeDonation){
        return JSON.parse(storeDonation)
    }
    return [];
}

const saveDonation = id => {
    const storeSaveDonation = getSaveDonation();
    const exists = storeSaveDonation?.find(storeId => storeId === id);

    if(!exists){
        storeSaveDonation.push(id)
        localStorage.setItem('donation', JSON.stringify(storeSaveDonation))
    }
}

export {saveDonation, getSaveDonation}