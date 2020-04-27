//contoh callback function

const getCake = callback => {
    let cake = null;
    console.log("Sedang membuat kue, silakan tunggu ....")
    setTimeout(() => {
      cake = "Kue Selesai!";
      callback(cake);
    }, 3000)
   }
    
   getCake(cake => {
    console.log(cake);
   })

////////////////////////


//contoh Promise

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat");
    } else {
      reject("Mesin Kopi tidak bisa digunakan!")
    }
   }

//penerapan .then dan .catch
const handlerSuccess = resolvedValue => {
console.log(resolvedValue);
}

const handlerRejected = rejectionReason => {
    console.log(rejectionReason)
}
    
const makeCoffee = new Promise(executorFunction);
makeCoffee
    .then(handlerSuccess)
    .catch(handlerRejected)


//jika handlerSuccess maka kopi berhasil
//jika handlerRejected maka kopi gagal
