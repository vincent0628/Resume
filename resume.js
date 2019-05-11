$(function () {
    //BtnId,project initialize
    let BtnId = [];
    let project = [];
    for (i = 0; i < 6; i++) {
        BtnId.push($("#detailBtn" + (i + 1)));
        project.push($("#project" + (i + 1)));
        project[i].kendoWindow({
            width: "80%",
            height: "auto",
            iframe: true,
            resizable: true,
            title: "project1",
            visible: false,
            actions: [
                "Pin",
                "Minimize",
                "Maximize",
                "Close"
            ]
        });
    } //end of project initialize

    BtnId.forEach(function (item, index) {
        item.click(function () {
            project[index].data("kendoWindow").center().open().resize(true);
        });
    });

    $(".btn_more").click(function () {
        project[5].data("kendoWindow").center().open().resize(true);
    });
    let solidCircle = "<b></b>"
    let emptyCircle = "<em></em>"
    let ability = [
        { id: "Chinese", energy: 10 },
        { id: "English", energy: 8 },
        { id: "Japanese", energy: 4 },
        { id: "HTMLCSS", energy: 7 },
        { id: "Javascript", energy: 9 },
        { id: "Bootstrap", energy: 9 },
        { id: "Windows", energy: 10 },
        { id: "Linux", energy: 7 },
        { id: "Git", energy: 9 },
        { id: "Matlab", energy: 9 },
        { id: "C", energy: 8 },
        { id: "Solidworks", energy: 8 },
        { id: "Autocad", energy: 6 },
        { id: "Ansys", energy: 5 }
    ];
    ability.forEach(function(item,index) { 
        $("#"+item.id).parent().append(`<dd>${solidCircle.repeat(item.energy)}${emptyCircle.repeat(10-item.energy)}</dd>`);
     })   
});