/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ajaxSyncRequestStart(reqURL)
{
    var x = StartHadoop(reqURL);

    if (x == true)
    {
        document.getElementById("btnStart").value = "Hadoop Started";
        document.getElementById("processMessage").innerHTML = "";
    }
    else
    {
        document.getElementById("btnStart").value = "Hadoop Stopped";
        document.getElementById("processMessage").innerHTML = "Something went wrong.!";
    }
}

function ajaxSyncRequestProcess(reqURL)
{
    var x = ProcessMyFile(reqURL);

    if (x == true)
    {
        document.getElementById("btnProcess").value = "Processed";
        document.getElementById("processMessage").innerHTML = "";
    }
    else
    {
        document.getElementById("btnProcess").value = "Processed";
        document.getElementById("processMessage").innerHTML = "Process Failed";
    }
}

function StartHadoop(reqURL)
{
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); //for IE7+, Firefox, Chrome, Opera, Safari
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //for IE6, IE5
    }
    //Create a asynchronous GET request
    document.getElementById("btnStart").value = "Starting";
    document.getElementById("btnStart").disabled = true;
    document.getElementById("processMessage").innerHTML = "Please Dont refresh";

    xmlhttp.open("post", reqURL, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send("process=starthadoop");
    //Execution blocked till server send the response
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200)
        {
            document.getElementById("message").innerHTML = xmlhttp.responseText;
            alert("Hadoop Started");
            document.getElementById("btnProcess").disabled = false;
            return true;
        }
        else
        {
            alert('Something is wrong during Starting Hadoop!!');
            return false;
        }
    }
    
}

