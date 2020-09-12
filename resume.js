$(function () {
    //BtnId,project initialize
    let BtnId = [];
    let project = [];
    for (i = 0; i < 6; i++) {
        BtnId.push($("#detailBtn" + (i + 1)));
        currentProject="project" + (i + 1)
        project.push($("#"+currentProject));
        project[i].kendoWindow({
            width: "80%",
            height: "auto",
            iframe: true,
            resizable: true,
            title: currentProject,
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

    let ability = [
        { mother: "language", content: "Chinese", energy: 10 },
        { mother: "language", content: "English", energy: 8 },
        { mother: "language", content: "Japanese", energy: 4 },
        { mother: "web", content: "HTML & CSS", energy: 9 },
        { mother: "web", content: "Javascript", energy: 9 },
        { mother: "web", content: "Bootstrap", energy: 9 },
        { mother: "platforms", content: "Windows", energy: 10 },
        { mother: "platforms", content: "Linux(Ubuntu)", energy: 7 },
        { mother: "version_control", content: "Git", energy: 9 },
        { mother: "software", content: "Python", energy: 9 },
        { mother: "software", content: "ROS", energy: 8 },
        { mother: "software", content: "Matlab", energy: 8 },
        { mother: "software", content: "C", energy: 8 },
        { mother: "software", content: "Java", energy: 5 },
        { mother: "CAD", content: "Solidworks", energy: 8 },
        { mother: "CAD", content: "Autocad", energy: 6 },
        { mother: "CAD", content: "Ansys", energy: 5 }
    ];
    let solidCircle = "<b></b>";
    let emptyCircle = "<em></em>";
    let iniMother = ability[0].mother;
    let currentHTML = "";
    ability.forEach(function (item, index) {
        if (iniMother !== item.mother) {
            $(currentHTML).insertAfter("#" + iniMother);
            currentHTML = "";
            iniMother = item.mother;
        }
        currentHTML += `
                        <dl class="clearfix">
                        <dt>${item.content}</dt>
                        <dd>${solidCircle.repeat(item.energy)}${emptyCircle.repeat(10 - item.energy)}</dd>
                        </dl>
                        `;
        if (index === ability.length - 1)
            $(currentHTML).insertAfter("#" + iniMother);
    })
});