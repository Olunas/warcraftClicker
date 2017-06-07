/**
 * Created by olunas on 10.05.2017.
 */
var coin=1000;yourHP=100;basicMaxHP=100;yourArmor=1;itemAttack=0;basicAttack=1;itemHP=0;yourExp=0;yourLevel=1;
fountain1=false;mob1=false;mob2=false;mob3=false;mob4=false;mob5=false;Arthas=false;secret1=false;needForLevel=5;
weapon=0;armor=0;shield=0;weaponCost=10;armorCost=10;shieldCost=10;restoreHP=0;quantityPotion1=0;quantityPotion2=0;
quantityPotion3=0;arthasDeath=false;fight=false;yourLife=true;
setInterval(function(){
    yourMaxHP = basicMaxHP + itemHP;
    yourAttack = itemAttack + basicAttack;
    document.getElementById("yourHP").innerHTML = "Your HP:" + " " + yourHP + "/" + yourMaxHP;
    document.getElementById("weapon").innerHTML = weaponCost;
    document.getElementById("armor").innerHTML = armorCost;
    document.getElementById("shield").innerHTML = shieldCost;
    document.getElementById("coin").innerHTML = coin;
    document.getElementById("quantityPotion1").innerHTML = quantityPotion1;
    document.getElementById("quantityPotion2").innerHTML = quantityPotion2;
    document.getElementById("quantityPotion3").innerHTML = quantityPotion3;
    if (yourHP > yourMaxHP){
        yourHP = yourMaxHP;
    }
    if (yourLevel === 2){
        needForLevel = 25;
        basicMaxHP = 120;
        basicAttack = 2;
        console.log(yourAttack);
    }
    else if(yourLevel === 3){
        needForLevel = 50;
        basicMaxHP = 150;
        basicAttack = 3;
    }
    else if(yourLevel === 4){
        needForLevel = 100;
        basicMaxHP = 200;
        basicAttack = 4;
    }
    else if(yourLevel === 5){
        needForLevel = 150;
        basicMaxHP = 250;
        basicAttack = 5;
    }
    else if(yourLevel === 6){
        needForLevel = 250;
        basicMaxHP = 300;
        basicAttack = 6;
    }
    else if(yourLevel === 7){
        needForLevel = 400;
        basicMaxHP = 400;
        basicAttack = 7;
    }
    else if(yourLevel === 8){
        needForLevel = 700;
        basicMaxHP = 550;
        basicAttack = 8;
    }
    else if(yourLevel === 9){
        needForLevel = 1000;
        basicMaxHP = 600;
        basicAttack = 9;
    }
    else if(yourLevel === 10){
        needForLevel = "max";
        basicMaxHP = 750;
        basicAttack = 10;
    }
    document.getElementById("yourExp").innerHTML = "Your Exp:" + " " + yourExp + "/" +needForLevel;
    document.getElementById("yourLevel").innerHTML = yourLevel;
    if(yourExp >= needForLevel){
        yourExp = yourExp-needForLevel;
        yourLevel++
    };
},10);
setInterval(function(){if(yourHP < yourMaxHP){yourHP += restoreHP}},1000);
setInterval(function () {if (yourHP > 0 && fountain1 !== true) {
    audioMobAttack();
    if (mob1 === true){
        yourHP -= Math.floor(5 * yourArmor);
        yourDeath ();
    }
    else if (mob2 === true){
        yourHP -= Math.floor(15 * yourArmor);
        yourDeath ();
    }
    else if(mob3 === true) {
        yourHP -= Math.floor(25 * yourArmor);
        yourDeath ();
    }
    else if(mob4 === true){
        yourHP -= Math.floor(50 * yourArmor);
        yourDeath ();
    }
    else if(mob5 === true){
        yourHP -= Math.floor(100 * yourArmor);
        yourDeath ();
    }
    else if(Arthas === true){
        yourHP -= Math.floor(300 * yourArmor);
        yourDeath ();
    }
}}, 1000);
function click(e) {
    if (document.all) {    // IE
        if (event.button == 2) {    // Чтобы отключить левую кнопку поставьте цифру 1
            alert(message);    // чтобы отключить среднюю кнопку поставьте цифру 3
            return false;}
    }
    if (document.layers) { // NC
        if (e.which == 3) {
            alert(message);
            return false;}
    }
}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);}
document.oncontextmenu=function(e){return false};
function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
}
function getCookie ( cookieName ) {
    var results = document.cookie.match ( '(^|;) ?' + cookieName + '=([^;]*)(;|$)' );

    if ( results )
        return ( unescape ( results[2] ) );
    else
        return null;
}
function reloadGame(){
    setCookie("saveExp", 0, expires=604800);
    setCookie("saveLevel", 1, expires=604800);
    setCookie("saveGold", 0, expires=604800);
    setCookie("saveWeapon", 0, expires=604800);
    setCookie("saveArmor", 0, expires=604800);
    setCookie("saveShield", 0, expires=604800);
    setCookie("savePotions1", 0, expires=604800);
    setCookie("savePotions2", 0, expires=604800);
    setCookie("savePotions3", 0, expires=604800);
    location.reload();
}
function save (){
    setCookie("saveExp", yourExp, expires=604800);
    setCookie("saveLevel", yourLevel, expires=604800);
    setCookie("saveGold", coin, expires=604800);
    setCookie("saveWeapon", weapon, expires=604800);
    setCookie("saveArmor", armor, expires=604800);
    setCookie("saveShield", shield, expires=604800);
    setCookie("savePotions1", quantityPotion1, expires=604800);
    setCookie("savePotions2", quantityPotion2, expires=604800);
    setCookie("savePotions3", quantityPotion3, expires=604800);
}
function download(){
    yourExp = getCookie("saveExp");
    if (getCookie("saveLevel") != "null"){
    yourLevel = getCookie("saveLevel");};
    if (getCookie("saveGold") !== "null"){
    coin = getCookie("saveGold");}
    if (getCookie("saveWeapon") !== "null"){
    weapon = getCookie("saveWeapon");}
    if (getCookie("saveArmor") !== "null"){
    armor = getCookie("saveArmor");}
    if (getCookie("saveShield") !== "null"){
    shield = getCookie("saveShield");}
    if (getCookie("savePotions1") !== "null"){
    quantityPotion1 = getCookie("savePotions1");}
    if (getCookie("savePotions2") !== "null"){
    quantityPotion2 = getCookie("savePotions2");}
    if (getCookie("savePotions3") !== "null"){
    quantityPotion3 = getCookie("savePotions3");}
    if (weapon == 1){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon1.png)";
        weaponCost = 25;
        itemAttack = 2;
    }
    else if (weapon == 2){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon2.png)";
        weaponCost = 50;
        itemAttack = 5;
    }
    else if (weapon == 3){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon3.png)";
        weaponCost = 100;
        itemAttack = 9;
    }
    else if (weapon == 4){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon4.png)";
        weaponCost = 250;
        itemAttack = 15;
    }
    else if (weapon == 5){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon5.png";
        weaponCost = "";
        itemAttack = 30;
    }
    if (armor === 1){
        document.getElementById("armor").style.backgroundImage = "url(images/armor1.png)";
        armorCost = 25;
        yourArmor -= 0.05;
        itemHP = 50;
        restoreHP = 1;
    }
    else if (armor === 2){
        document.getElementById("armor").style.backgroundImage = "url(images/armor2.png)";
        armorCost = 50;
        yourArmor -= 0.05;
        itemHP = 125;
        restoreHP = 2;
    }
    else if (armor === 3){
        document.getElementById("armor").style.backgroundImage = "url(images/armor3.png)";
        armorCost = 100;
        yourArmor -= 0.05;
        itemHP = 250;
        restoreHP = 3;
    }
    else if (armor === 4){
        document.getElementById("armor").style.backgroundImage = "url(images/armor4.png)";
        armorCost = 250;
        yourArmor -= 0.05;
        itemHP = 400;
        restoreHP = 4;
    }
    else if (armor === 5){
        document.getElementById("armor").style.backgroundImage = "url(images/armor5.png";
        armorCost = "";
        yourArmor -= 0.05;
        itemHP = 750;
        restoreHP = 5;
    }
    if (shield === 1){
        document.getElementById("shield").style.backgroundImage = "url(images/shield1.png)";
        shieldCost = 25;
        yourArmor -= 0.1;
    }
    else if (shield === 2){
        document.getElementById("shield").style.backgroundImage = "url(images/shield2.png)";
        shieldCost = 50;
        yourArmor -= 0.1;
    }
    else if (shield === 3){
        document.getElementById("shield").style.backgroundImage = "url(images/shield3.png)";
        shieldCost = 100;
        yourArmor -= 0.1;
    }
    else if (shield === 4){
        document.getElementById("shield").style.backgroundImage = "url(images/shield4.png)";
        shieldCost = 250;
        yourArmor -= 0.1;
    }
    else if (shield === 5){
        document.getElementById("shield").style.backgroundImage = "url(images/shield5.png";
        shieldCost = "";
        yourArmor -= 0.1;
    }
}
function audioBuyItem (){
    var audio = document.getElementById("buyItem");
    audio.volume = 0.2;
    audio.play();
}
function audioMoreGold(){
    var audio = document.getElementById("moreGold");
    audio.volume = 0.2;
    audio.play();
}
function audioError(){
    var audio = document.getElementById("error");
    audio.volume = 0.4;
    audio.play();
}
function audioUsePotion(){
    var audio = document.getElementById("usePotion");
    audio.volume = 0.2;
    audio.play();
}
function audioMobAttack (){
    var chanceAudio = Math.random();
    if (chanceAudio <= 0.333) {
        var audio = document.getElementById("mobAttack1");
        audio.volume = 0.2;
        audio.play();
    }
    else if (chanceAudio > 0.333 && chanceAudio < 0.666) {
        var audio = document.getElementById("mobAttack2");
        audio.volume = 0.2;
        audio.play();
    }
    else {
        var audio = document.getElementById("mobAttack3");
        audio.volume = 0.2;
        audio.play();
    }
}
function audioBackground (){
    var audio1 = document.getElementById("soundBackground1");
    var audio2 = document.getElementById("soundBackground2");
    var audio3 = document.getElementById("soundBackground3");
    var audio4 = document.getElementById("soundBackground4");
    var audio5 = document.getElementById("soundBackground5");
    var audio6 = document.getElementById("soundBackground6");
    var audio7 = document.getElementById("soundBackground7");
    audio1.volume=0.2;audio2.volume=0.2;audio3.volume=0.2;audio4.volume=0.2;audio5.volume=0.2;audio6.volume=0.2;audio7.volume=0.4;
    audio1.loop=true;audio2.loop=true;audio3.loop=true;audio4.loop=true;audio5.loop=true;audio6.loop=true;audio7.loop=true;
    if (fountain1 === true) {
        audio6.play();
        audio1.pause();
        audio1.currentTime = 0;
        audio2.pause();
        audio2.currentTime = 0;
        audio3.pause();
        audio3.currentTime = 0;
        audio4.pause();
        audio4.currentTime = 0;
        audio5.pause();
        audio5.currentTime = 0;
        audio7.pause();
        audio7.currentTime = 0;
    }
    else if (mob1 === true){
        audio1.play();
        audio2.pause();
        audio2.currentTime = 0;
        audio3.pause();
        audio3.currentTime = 0;
        audio4.pause();
        audio4.currentTime = 0;
        audio5.pause();
        audio5.currentTime = 0;
        audio6.pause();
        audio6.currentTime = 0;
        audio7.pause();
        audio7.currentTime = 0;
    }
    else if (mob2 === true){
        audio2.play();
        audio1.pause();
        audio1.currentTime = 0;
        audio3.pause();
        audio3.currentTime = 0;
        audio4.pause();
        audio4.currentTime = 0;
        audio5.pause();
        audio5.currentTime = 0;
        audio6.pause();
        audio6.currentTime = 0;
        audio7.pause();
        audio7.currentTime = 0;
    }
    else if (mob3 === true){
        audio3.play();
        audio2.pause();
        audio2.currentTime = 0;
        audio1.pause();
        audio1.currentTime = 0;
        audio4.pause();
        audio4.currentTime = 0;
        audio5.pause();
        audio5.currentTime = 0;
        audio6.pause();
        audio6.currentTime = 0;
        audio7.pause();
        audio7.currentTime = 0;
    }
    else if (mob4 === true){
        audio4.play();
        audio2.pause();
        audio2.currentTime = 0;
        audio3.pause();
        audio3.currentTime = 0;
        audio1.pause();
        audio1.currentTime = 0;
        audio5.pause();
        audio5.currentTime = 0;
        audio6.pause();
        audio6.currentTime = 0;
        audio7.pause();
        audio7.currentTime = 0;
    }
    else if (mob5 === true){
        audio5.play();
        audio2.pause();
        audio2.currentTime = 0;
        audio3.pause();
        audio3.currentTime = 0;
        audio4.pause();
        audio4.currentTime = 0;
        audio1.pause();
        audio1.currentTime = 0;
        audio6.pause();
        audio6.currentTime = 0;
        audio7.pause();
        audio7.currentTime = 0;
    }
    else if(Arthas === true){
        audio7.play();
        audio2.pause();
        audio2.currentTime = 0;
        audio3.pause();
        audio3.currentTime = 0;
        audio4.pause();
        audio4.currentTime = 0;
        audio1.pause();
        audio1.currentTime = 0;
        audio6.pause();
        audio6.currentTime = 0;
        audio5.pause();
        audio5.currentTime = 0;
    }
}
function yourDeath (){
    if (yourHP <= 0){
        yourHP = 0;
        var audio = document.getElementById("heroDeath");
        audio.volume = 0.2;
        audio.play();
        yourLife = false;
        setTimeout(function(){fight = false;fountain();},5000*yourLevel);
    }
}
function upgradeWeapon(){
    if(weapon == 0 && coin >= weaponCost){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon1.png)";
        weapon = 1;
        coin -= weaponCost;
        weaponCost = 25;
        itemAttack = 2;
        audioBuyItem ();
    }
    else if(weapon == 1 && coin >= weaponCost){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon2.png)";
        weapon = 2;
        coin -= weaponCost;
        weaponCost = 50;
        itemAttack = 5;
        audioBuyItem ();
    }
    else if(weapon == 2 && coin >= weaponCost){
        weapon = 3;
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon3.png)";
        coin -= weaponCost;
        weaponCost = 100;
        itemAttack = 9;
        audioBuyItem ();
    }
    else if(weapon == 3 && coin >= weaponCost){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon4.png)";
        weapon = 4;
        coin -= weaponCost;
        weaponCost = 250;
        itemAttack = 15
        audioBuyItem ();
    }
    else if(weapon == 4 && coin >= weaponCost){
        document.getElementById("weapon").style.backgroundImage = "url(images/weapon5.png";
        weapon = 5;
        coin -= weaponCost;
        weaponCost = "";
        itemAttack = 30;
        audioBuyItem ();
    }
    else if(coin < weaponCost){
        audioMoreGold();
    }
    else{
        audioError();
    }
}
function upgradeArmor(){
    if(armor == 0 && coin >= armorCost){
        document.getElementById("armor").style.backgroundImage = "url(images/armor1.png)";
        armor = 1;
        coin -= armorCost;
        armorCost = 25;
        yourArmor -= 0.05;
        itemHP = 50;
        restoreHP = 1;
        audioBuyItem ();
    }
    else if(armor == 1 && coin >= armorCost){
        document.getElementById("armor").style.backgroundImage = "url(images/armor2.png)";
        armor = 2;
        coin -= armorCost;
        armorCost = 50;
        yourArmor -= 0.05;
        itemHP = 125;
        restoreHP = 2;
        audioBuyItem ();
    }
    else if(armor == 2 && coin >= armorCost){
        document.getElementById("armor").style.backgroundImage = "url(images/armor3.png)";
        armor = 3;
        coin -= armorCost;
        armorCost = 100;
        yourArmor -= 0.05;
        itemHP = 250;
        restoreHP = 3;
        audioBuyItem ();
    }
    else if(armor == 3 && coin >= armorCost){
        document.getElementById("armor").style.backgroundImage = "url(images/armor4.png)";
        armor = 4;
        coin -= armorCost;
        armorCost = 250;
        yourArmor -= 0.05;
        itemHP = 400;
        restoreHP = 4;
        audioBuyItem ();
    }
    else if(armor == 4 && coin >= armorCost){
        document.getElementById("armor").style.backgroundImage = "url(images/armor5.png";
        armor = 5;
        coin -= armorCost;
        armorCost = "";
        yourArmor -= 0.05;
        itemHP = 750;
        restoreHP = 5;
        audioBuyItem ();
    }
    else if(coin < armorCost){
        audioMoreGold();
    }
    else{
        audioError();
    }
}
function upgradeShield(){
    if(shield == 0 && coin >= shieldCost){
        document.getElementById("shield").style.backgroundImage = "url(images/shield1.png)";
        shield = 1;
        coin -= shieldCost;
        shieldCost = 25;
        yourArmor -= 0.1;
        audioBuyItem ();
    }
    else if(shield == 1 && coin >= shieldCost){
        document.getElementById("shield").style.backgroundImage = "url(images/shield2.png)";
        shield = 2;
        coin -= shieldCost;
        shieldCost = 50;
        yourArmor -= 0.1;
        audioBuyItem ();
    }
    else if(shield == 2 && coin >= shieldCost){
        shield = 3;
        document.getElementById("shield").style.backgroundImage = "url(images/shield3.png)";
        coin -= shieldCost;
        shieldCost = 100;
        yourArmor -= 0.1;
        audioBuyItem ();
    }
    else if(shield == 3 && coin >= shieldCost){
        document.getElementById("shield").style.backgroundImage = "url(images/shield4.png)";
        shield = 4;
        coin -= shieldCost;
        shieldCost = 250;
        yourArmor -= 0.1;
        audioBuyItem ();
    }
    else if(shield == 4 && coin >= shieldCost){
        document.getElementById("shield").style.backgroundImage = "url(images/shield5.png";
        shield = 5;
        coin -= shieldCost;
        shieldCost = "";
        yourArmor -= 0.1;
        audioBuyItem ();
    }
    else if(coin < shieldCost){
        audioMoreGold();
    }
    else{
        audioError();
    }
}
function buyPotion1(){
    if(coin >= 10) {
        quantityPotion1++;
        coin -= 10;
        audioBuyItem ()
    }
    else{
        audioMoreGold();
    }
}
function buyPotion2(){
    if(coin >= 30) {
        quantityPotion2++;
        coin -= 30;
        audioBuyItem ()
    }
    else{
        audioMoreGold();
    }
}
function buyPotion3(){
    if(coin >= 50) {
        quantityPotion3++;
        coin -= 50;
        audioBuyItem ()
    }
    else{
        audioMoreGold();
    }
}
function usePotion1(){
    if(quantityPotion1 > 0) {
        yourHP += 30;
        quantityPotion1--;
        audioUsePotion();
    }
    else{
        audioError();
    }
}
function usePotion2(){
    if(quantityPotion2 > 0) {
        yourHP += 100;
        quantityPotion2--;
        audioUsePotion();
    }
    else{
        audioError();
    }
}
function usePotion3(){
    if(quantityPotion3 > 0) {
        yourHP += 300;
        quantityPotion3--;
        audioUsePotion();
    }
    else{
        audioError();
    }
}
function fountain() {
    if(fountain1 !== true && fight !== true){
        var audio = document.getElementById("restorationPotion");
        audio.volume = 0.2;
        audio.play();
        document.getElementById("opponentsIcon").style.backgroundImage = "url(images/fountain.jpg)";
        document.getElementById("log").innerHTML = "Healing";
        document.body.style.backgroundImage = "none";
        yourHpInterval = setInterval(function () {if (yourHP < yourMaxHP) {yourHP++}}, 20);
        fountain1=true;yourLife=true;mob1=false;mob2=false;mob3=false;mob4=false;mob5=false;Arthas=false;secret1=false;fight=false;
        audioBackground();
    }
    else{
        audioError();
    }
}
function acolyte() {
    if(mob1 !== true && yourHP === yourMaxHP && fountain1 === true && fight !== true) {
        fight = true;
        document.getElementById("opponentsIcon").style.backgroundImage = "url(images/acolyte.jpg)";
        mobCurrentHP = 50;
        document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
        var chanceAudio = Math.random();
        if (chanceAudio <= 0.333) {
            var audio = document.getElementById("AcolyteYesAttack1");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.333 && chanceAudio < 0.666) {
            var audio = document.getElementById("AcolyteYesAttack2");
            audio.volume = 0.2;
            audio.play();
        }
        else {
            var audio = document.getElementById("AcolyteYesAttack3");
            audio.volume = 0.2;
            audio.play();
        }
        fountain1 = false; mob1 = true; fight=true;
        audioBackground ();
        clearInterval(yourHpInterval);
    }
    else{
        audioError();
    }
}
function ghoul() {
    if(yourLevel >= 2 && mob2 !== true && yourHP === yourMaxHP && fountain1 === true && fight !== true) {
        document.getElementById("opponentsIcon").style.backgroundImage = "url(images/ghoul.jpg)";
        mobCurrentHP = 200;
        var chanceAudio = Math.random();
        if (chanceAudio <= 0.25) {
            var audio = document.getElementById("GhoulYesAttack1");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.25 && chanceAudio <= 0.5) {
            var audio = document.getElementById("GhoulYesAttack2");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.5 && chanceAudio <= 0.75) {
            var audio = document.getElementById("GhoulYesAttack3");
            audio.volume = 0.2;
            audio.play();
        }
        else {
            var audio = document.getElementById("GhoulYesAttack4");
            audio.volume = 0.2;
            audio.play();
        }
        document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
        fountain1 = false; mob2 = true; ;fight = true;
        audioBackground();
        clearInterval(yourHpInterval);
    }
    else{
        audioError();
    }
}
function cryptFiend() {
    if(yourLevel >= 4 && mob3 !== true && yourHP === yourMaxHP && fountain1 === true && fight !== true) {
        document.getElementById("opponentsIcon").style.backgroundImage = "url(images/cryptFiend.jpg)";
        mobCurrentHP = 500;
        var chanceAudio = Math.random();
        if (chanceAudio <= 0.333) {
            var audio = document.getElementById("cryptFiendYesAttack1");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.333 && chanceAudio < 0.666) {
            var audio = document.getElementById("cryptFiendYesAttack2");
            audio.volume = 0.2;
            audio.play();
        }
        else {
            var audio = document.getElementById("cryptFiendYesAttack3");
            audio.volume = 0.2;
            audio.play();
        }
        document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
        fountain1 = false; mob3 = true; ;fight = true;
        audioBackground();
        clearInterval(yourHpInterval);
    }
    else{
        audioError();
    }
}
function necromancer() {
    if(yourLevel >= 6 && mob4 !== true && yourHP === yourMaxHP && fountain1 === true && fight !== true) {
        document.getElementById("opponentsIcon").style.backgroundImage = "url(images/necromancer.jpg)";
        mobCurrentHP = 1000;
        document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
        var chanceAudio = Math.random();
        if (chanceAudio <= 0.333) {
            var audio = document.getElementById("necromancerYesAttack1");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.333 && chanceAudio < 0.666) {
            var audio = document.getElementById("necromancerYesAttack2");
            audio.volume = 0.2;
            audio.play();
        }
        else {
            var audio = document.getElementById("necromancerYesAttack3");
            audio.volume = 0.2;
            audio.play();
        }
        fountain1 = false; mob4 = true; fight = true;
        audioBackground();
        clearInterval(yourHpInterval);
    }
    else{
        audioError();
    }
}
function abomination() {
    if(yourLevel >= 8 && mob5 !== true && yourHP === yourMaxHP && fountain1 === true && fight !== true) {
        document.getElementById("opponentsIcon").style.backgroundImage = "url(images/abomination.jpg)";
        mobCurrentHP = 3000;
        var chanceAudio = Math.random();
        if (chanceAudio <= 0.25) {
            var audio = document.getElementById("AbominationYesAttack1");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.25 && chanceAudio <= 0.5) {
            var audio = document.getElementById("AbominationYesAttack2");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.5 && chanceAudio <= 0.75) {
            var audio = document.getElementById("AbominationYesAttack3");
            audio.volume = 0.2;
            audio.play();
        }
        else {
            var audio = document.getElementById("AbominationYesAttack4");
            audio.volume = 0.2;
            audio.play();
        }
        document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
        fountain1 = false; mob5 = true; fight = true;
        audioBackground();
        clearInterval(yourHpInterval);
    }
    else{
        audioError();
    }
}
function arthas() {
    if(yourLevel >= 10 && Arthas !== true && yourHP === yourMaxHP && fountain1 === true && fight !== true) {
        document.getElementById("opponentsIcon").style.backgroundImage = "url(images/arthas.png)";
        document.body.style.backgroundImage = "url(images/background.jpg";
        mobCurrentHP = 15000;
        var chanceAudio = Math.random();
        if (chanceAudio <= 0.25) {
            var audio = document.getElementById("EvilArthasYesAttack1");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.25 && chanceAudio <= 0.5) {
            var audio = document.getElementById("EvilArthasYesAttack2");
            audio.volume = 0.2;
            audio.play();
        }
        else if (chanceAudio > 0.5 && chanceAudio <= 0.75) {
            var audio = document.getElementById("EvilArthasYesAttack3");
            audio.volume = 0.2;
            audio.play();
        }
        else {
            var audio = document.getElementById("EvilArthasYesAttack4");
            audio.volume = 0.2;
            audio.play();
        }
        document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
        fountain1 = false; Arthas = true; fight=true;
        audioBackground();
        clearInterval(yourHpInterval);
    }
    else{
        audioError();
    }
}
function secret() {
    if(arthasDeath === true && yourHP >= yourMaxHP && fountain1 === true && fight !== true) {
        document.getElementById("opponentsIcon").style.backgroundImage = "url(sounds/NecromancerYesAttack4.png)";
        mobCurrentHP = 300;
        document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
        var audio = document.getElementById("AcolyteYesAttack4");
        audio.play();
        fountain1 = false;fight=true;
        console.log(secret1);
    }
    else{
        audioError();
    }
}
function attackMob() {
        if (fountain1 !== true && yourLife !== false) {
            mobCurrentHP -= yourAttack;
            document.getElementById("log").innerHTML = "HP:" + " " + mobCurrentHP;
            var chanceAudio = Math.random();
            if (mob1 === true || mob2 === true || mob3 === true || mob4 === true || mob5 === true || Arthas === true || secret1 === true) {
                if (chanceAudio <= 0.333) {
                    var audio = document.getElementById("audioWoodenAttack1");
                    audio.volume = 0.2;
                    audio.play();
                }
                else if (chanceAudio > 0.333 && chanceAudio < 0.666) {
                    var audio = document.getElementById("audioWoodenAttack2");
                    audio.volume = 0.2;
                    audio.play();
                }
                else {
                    var audio = document.getElementById("audioWoodenAttack3");
                    audio.volume = 0.2;
                    audio.play();
                }
                if (mobCurrentHP < 1 && mob1 === true) {
                    coin++;
                    yourExp++;
                    document.getElementById('coin').innerHTML = coin;
                    fight = false;
                    fountain();
                    var audio = document.getElementById("mob1Death");
                    audio.volume = 0.2;
                    audio.play();
                }
                else if (mobCurrentHP < 1 && mob2 === true) {
                    coin += 3;
                    yourExp += 5;
                    document.getElementById('coin').innerHTML = coin;
                    fight = false;
                    fountain();
                    var audio = document.getElementById("mob2Death");
                    audio.volume = 0.2;
                    audio.play();
                }
                else if (mobCurrentHP < 1 && mob3 === true){
                    coin += 7;
                    yourExp += 10;
                    document.getElementById('coin').innerHTML = coin;
                    fight = false;
                    fountain();
                    var audio = document.getElementById("mob3Death");
                    audio.volume = 0.2;
                    audio.play();
                }
                else if (mobCurrentHP < 1 && mob4 === true){
                    coin += 15;
                    yourExp += 20;
                    document.getElementById('coin').innerHTML = coin;
                    fight = false;
                    fountain();
                    var audio = document.getElementById("mob4Death");
                    audio.volume = 0.2;
                    audio.play();
                }
                else if (mobCurrentHP < 1 && mob5 === true){
                    coin += 30;
                    yourExp += 50;
                    document.getElementById('coin').innerHTML = coin;
                    fight = false;
                    fountain();
                    var audio = document.getElementById("mob5Death");
                    audio.volume = 0.2;
                    audio.play();
                }
                else if(mobCurrentHP < 1 && Arthas === true){
                    coin += 50;
                    yourExp += 150;
                    document.getElementById('coin').innerHTML = coin;
                    fight = false;
                    fountain();
                    var audio = document.getElementById("arthasDeath");
                    audio.volume = 0.2;
                    audio.play();
                    arthasDeath=true;
                }
                else if(mobCurrentHP < 1){
                    coin += 1000000;
                    yourExp += 544231;
                    document.getElementById('coin').innerHTML = coin;
                    fight = false;
                    fountain();
                }
            }
        }
    }