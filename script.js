var selectedRow = null;

//Show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = 'alert alert-${className}';

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document/querySelector(".main");

    setTimeout(() =>document.querySelector(".alert").remove(), 3000);
}

//Delete Data

document.querySelector(".guestList").addEventListener("click", (e) =>{
    console.log(e);
    target = e.target;
    if(target.guetsList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("#Student Data Deleted", "danger")
    }
})
