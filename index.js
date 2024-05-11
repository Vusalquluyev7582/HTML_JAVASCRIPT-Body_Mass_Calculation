// https://www.acibadem.com.tr/ilgi-alani/vucut-kitle-indeksi-hesaplama/
// Hesablama "Acibadem" xəstəxanasının veb səhifəsindəki ortalamalara əsasən aparılır


let boy = Number(prompt("Boy ölçünüzü metr ölçüsü ilə daxil edin"));
let kilo = Number(prompt("Kilonuzu daxil edin"));

let nəticə = kilo / (boy * 2);


if (nəticə < 18.5) {
    alert("İdeal kilonun altında - " + nəticə)
    console.log("İdeal kilonun altında - " + nəticə)
}
else if (nəticə >= 18.5 && nəticə <= 24.9) {
    alert("İdeal kiloda - " + nəticə)
    console.log("İdeal kiloda - " + nəticə)
}
else if (nəticə >= 25 && nəticə <= 29.9) {
    alert("İdeal kilonun üstündə - " + nəticə)
    console.log("İdeal kilonun üstündə - " + nəticə)
}
else if (nəticə >= 30 && nəticə <= 39.9) {
    alert("İdeal kilonun çox üstündə (obez) - " + nəticə)
    console.log("İdeal kilonun çox üstündə (obez) - " + nəticə)
}
else if (nəticə >= 40) {
    alert("İdeal kilonun çox üstündə (morbid obez) - " + nəticə)
    console.log("İdeal kilonun çox üstündə (morbid obez) - " + nəticə)
}