function myfun(){     

    if(btns.innerHTML == "Read More"){
    document.getElementById("btns").innerHTML="Read Less";
    document.getElementById("hide").style.display="block";
    }
    else{
        document.getElementById("btns").innerHTML="Read More";
    document.getElementById("hide").style.display="none";
    }
}

function validateForm(){
    let a = document.forms["myform"]["fname"].value;
    let b = document.forms["myform"]["email"].value;
    let c = document.forms["myform"]["phone"].value;
    let d = document.forms["myform"]["enquiry"].value;
    let e = document.getElementById("isclient").checked;

    if (a=="") {
        alert("Name must be filled out");
        return false;
    }

    else if (b=="") {
        alert("Email must be filled out");
        return false;
    }

    else if (c=="") {
        alert("Phone number must be filled out");
        return false;
    }

    else if (d=="") {
        alert("Enquiry must be filled out");
        return false;
    }

    else if (!e) {
        alert("Checkbox must be ticked");
        return false;
    }
}