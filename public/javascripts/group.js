var newJquery = $.noConflict(true);

        var setting = {
            check: {
                enable: true
            },
            data: {
                simpleData: {
                    enable: true
                }
            }
        };

                 var zNodes = [{
                id: 1,
                pId: 0,
                name: "전 체",
                open: true
            },
            {
                id: 11,
                pId: 1,
                name: "운수시설",
                open: true
            },
            {
                id: 111,
                pId: 11,
                name: "여객자동차터미널"
            },
            {
                id: 1111,
                pId: 111,
                name: "서울남부터미널"
            },
            {
                id: 1112,
                pId: 111,
                name: "서울고속버스터미널"
            },
            {
                id: 112,
                pId: 11,
                name: "철도 역 시설"
            },
            {
                id: 1121,
                pId: 112,
                name: "서울역(한국공항철도)"
            },
            {
                id: 1122,
                pId: 112,
                name: "서울역(서울교통공사)"
            },
            {
                id: 113,
                pId: 11,
                name: "도시철도 역 시설"
            },
            {
                id: 1131,
                pId: 113,
                name: "신도림역(한국철도공사)"
            },
            {
                id: 114,
                pId: 11,
                name: "공항 여객 시설"
            },
            {
                id: 115,
                pId: 11,
                name: "항만 여객 시설"
            },
            {
                id: 12,
                pId: 1,
                name: "대규모점포",
                open: true
            },
            {
                id: 121,
                pId: 12,
                name: "대형마트"
            },
            {
                id: 1211,
                pId: 121,
                name: "롯데마트"
            },
            {
                id: 122,
                pId: 12,
                name: "전문점",
                open: true
            },
            {
                id: 123,
                pId: 12,
                name: "백화점"
            },
            {
                id: 124,
                pId: 12,
                name: "복합 쇼핑몰"
            },
            {
                id: 13,
                pId: 1,
                name: "영화상영관"
            }
        ];

        var code;

        function setCheck() {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                py = $("py").attr("checked") ? "p" : "",
                sy = $("#sy").attr("checked") ? "s" : "",
                pn = $("#pn").attr("checked") ? "p" : "",
                sn = $("#sn").attr("checked") ? "s" : "",
                type = {
                    "Y": py + sy,
                    "N": pn + sn
                };
            zTree.setting.check.chkboxType = type;
            showCode('setting.check.chkboxType = { "Y" : "' + type.Y + '", "N" : "' + type.N + '" };');
        }

        function showCode(str) {
            if (!code) code = $("#code");
            code.empty();
            code.append("<li>" + str + "</li>");
        }

        newJquery(document).ready(function () {
            newJquery.fn.zTree.init($("#treeDemo"), setting, zNodes);
            setCheck();
            newJquery("#py").bind("change", setCheck);
            newJquery("#sy").bind("change", setCheck);
            newJquery("#pn").bind("change", setCheck);
            newJquery("#sn").bind("change", setCheck);
        });