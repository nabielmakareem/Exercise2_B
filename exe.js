document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var birthdate = document.getElementById("birthdate").value;
    var episode = document.getElementById("episode").value;
    var karakter = document.querySelector('input[name="karakter"]:checked');
    var karakterValue = karakter ? karakter.value : "";
    var address = document.getElementById("address").value;
    var suggestion = document.getElementById("suggestion").value;

    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Bersihkan isi sebelumnya

    var resultHeading = document.createElement("h2");
    resultHeading.textContent = "Hasil Formulir";
    resultContainer.appendChild(resultHeading);

    var resultList = document.createElement("ul");

    var nameItem = document.createElement("li");
    nameItem.textContent = "Nama: " + name;
    resultList.appendChild(nameItem);

    var birthdateItem = document.createElement("li");
    birthdateItem.textContent = "Tanggal Lahir: " + birthdate;
    resultList.appendChild(birthdateItem);

    var episodeItem = document.createElement("li");
    episodeItem.textContent = "Episode Favorit: " + episode;
    resultList.appendChild(episodeItem);

    var karakterItem = document.createElement("li");
    karakterItem.textContent = "Karakter yang Disukai: " + karakterValue;
    resultList.appendChild(karakterItem);

    var addressItem = document.createElement("li");
    addressItem.textContent = "Alamat: " + address;
    resultList.appendChild(addressItem);

    var suggestionItem = document.createElement("li");
    suggestionItem.textContent = "Jawaban Anda: " + suggestion;
    resultList.appendChild(suggestionItem);

    resultContainer.appendChild(resultList);

    document.getElementById("myForm").reset();
  });