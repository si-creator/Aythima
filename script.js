/*
Solution of assignment 4:
Expected output:
Hello Siva
Good Bye Jessy
Hello Vino
Hello Aythika
Good Bye Jackyy
Good Bye Jani
Hello Surya
Hello Malar
Good Bye Johnny
Hello Kutty
*/

(function() {
    var names = ["Siva", "Jessy", "Vino", "Aythika", "Jackyy", "Jani", "Surya", "Malar", "Johnny", "Kutty"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
