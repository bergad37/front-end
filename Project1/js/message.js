const alarm = document.getElementById("alarm");
const box = document.getElementById("alert-container");
const messageForm = document.getElementById("message-me");
const alert2 = document.getElementById("alert2");
const alert1 = document.getElementById("alert1");

messageForm.addEventListener("submit", (e) => {
    e.preventDefault(); //prevent form from the defualt behaviour  


    const name = document.getElementById("msg-name").value;
    const email = document.getElementById("msg-email").value;
    const message = document.getElementById("message").value;

    //Validation 
    if (name.trim() === "" || name.length < 3) {
        return alert1.style.display = "block";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return alert2.style.display = "block";
    }
    const data = {
        name: name,
        email: email,
        message: message
    }


    fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alarm.textContent = data.message;
            box.style.display = "block";

        })
        .catch((err) => {
            alert(err)
        })
})