var rollNo = $("#roll_No");
var sName = $("#std_Name");
var m1 = $("#m1");
var m2 = $("#m2");
var m3 = $("#m3");
var add = $("#add");
var remove = $("#delete");
var edit = $("#edit");
var sData = [];
var editData;

add.on("click", function (e) {
    e.preventDefault();
    var sStatus;
    if(this.textContent=="ADD"){
    if (sData.find(e => e.sRoll === rollNo.val())){
        alert("Data Alreday Exits")
    } else {
        sStatus =statuss();
        sData.push({
            sRoll: rollNo.val(),
            sName: sName.val(),
            sM1: m1.val(),
            sM2: m2.val(),
            sM3: m3.val(),
            sStatus: sStatus
        });
        appendData();
        clear();
    }
}else{
    sStatus =statuss();
    editData.sName = sName.val();
    editData.sM1 = m1.val();
    editData.sM2 = m2.val();
    editData.sM3 = m3.val();
    editData.sStatus = sStatus;
    appendData();
    add.text("ADD");
    rollNo.removeAttr("disabled");
    clear();
}
});
$("table").on("click","#delete",function(){
    var sel = $(this).parent();
    var indexs = sel.parent().attr("class");
    sData.splice(indexs,1);
    sel.parent().remove();
    appendData()
})
$("table").on("click","#edit",function(){
    var sel = $(this).parent();
    var indexs = sel.parent().attr("class");
    editData = sData[indexs];
    rollNo.attr("disabled","true");
    rollNo.val(editData.sRoll);
    sName.val(editData.sName);
    m1.val(editData.sM1);
    m2.val(editData.sM2);
    m3.val(editData.sM3);
    add.text("Update");
});

function statuss(){
    if (m1.val() >= 50 && m2.val() >= 50 && m2.val() >= 50) {
        return  "Pass";
    } else {
        return "Fail";
    };
}
function clear(){
    rollNo.val("");
    sName.val("");
    m1.val("");
    m2.val("");
    m3.val("");
}
function appendData(){
    $("tbody").html(" ");
    sData.forEach((e,i) => {
        $("tbody").append('<tr class='+i+'><td>' + e.sRoll + '</td><td>' + e.sName + '</td><td>' + e.sM1 + '</td><td>' + e.sM2 + '</td><td>' + e.sM3 + '</td><td>' + e.sStatus + '</td><td><button id="edit">Edit</button> <button id="delete">Delete</button></td></tr>')
    });
}
function getIndex(){

}