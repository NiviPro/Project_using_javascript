alert("Welcome to this Page :)");

function remove(){
    document.getElementById("taskName").value = '';  
    document.getElementById("entDat").value = '';
}

function addFunction(){

    var taskName = document.taskForm.taskName.value;
    var entDat = document.taskForm.entDat.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = taskName;
    td2.innerHTML = entDat;
    td3.innerHTML = '<span><i class="fa fa-pencil" id="addCmpt" type="button" onclick="addCmpt()"></i></span> <span><i class="fa fa-trash" id="toTrash" type="button" onclick="toTrash()"></i></span>'
   
    document.getElementById("task_table").appendChild(tr);

}

function addCmpt(){
    document.getElementsById("cmptLst").innerHTML = addFunction();  
}

function toTrash(){
    document.getElementsByTagName("tr").remove();  
}

