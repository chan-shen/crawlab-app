(function (e) {
    function t(t) {
        for (var n, r, o = t[0], c = t[1], u = t[2], l = 0, d = []; l < o.length; l++) r = o[l], Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]), s[r] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        p && p(t);
        while (d.length) d.shift()();
        return i.push.apply(i, u || []), a()
    }

    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], n = !0, r = 1; r < a.length; r++) {
                var o = a[r];
                0 !== s[o] && (n = !1)
            }
            n && (i.splice(t--, 1), e = c(c.s = a[0]))
        }
        return e
    }

    var n = {}, r = {app: 0}, s = {app: 0}, i = [];

    function o(e) {
        return c.p + "js/" + ({}[e] || e) + "." + {
            "chunk-0fa7a4ee": "e0ac4d30",
            "chunk-591be4e4": "6f7184ef",
            "chunk-68f5e17f": "4f00569e",
            "chunk-6bc6af1f": "de185465",
            "chunk-5c2cde8e": "72e8ce51",
            "chunk-3ce00cde": "64a4028a",
            "chunk-4b81d396": "814884fc",
            "chunk-4d61f4d0": "a13d96ab",
            "chunk-63d8704b": "f068002d",
            "chunk-6561f328": "6cb58fe0",
            "chunk-9c7671c8": "ba871e70",
            "chunk-8019ceac": "2b19e97a",
            "chunk-a389c526": "91167c4f",
            "chunk-0e9e9c64": "621f7da5",
            "chunk-899f1020": "d3ad0eec",
            "chunk-759e3300": "90baa4fb",
            "chunk-7911f015": "2fe3c825",
            "chunk-a9ea9f02": "735b7e12",
            "chunk-c737cb56": "e3064030",
            "chunk-e4ba59d8": "93b2620d"
        }[e] + ".js"
    }

    function c(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports
    }

    c.e = function (e) {
        var t = [], a = {
            "chunk-0fa7a4ee": 1,
            "chunk-591be4e4": 1,
            "chunk-68f5e17f": 1,
            "chunk-6bc6af1f": 1,
            "chunk-5c2cde8e": 1,
            "chunk-3ce00cde": 1,
            "chunk-4b81d396": 1,
            "chunk-4d61f4d0": 1,
            "chunk-63d8704b": 1,
            "chunk-6561f328": 1,
            "chunk-8019ceac": 1,
            "chunk-0e9e9c64": 1,
            "chunk-899f1020": 1,
            "chunk-759e3300": 1,
            "chunk-7911f015": 1,
            "chunk-a9ea9f02": 1,
            "chunk-c737cb56": 1,
            "chunk-e4ba59d8": 1
        };
        r[e] ? t.push(r[e]) : 0 !== r[e] && a[e] && t.push(r[e] = new Promise((function (t, a) {
            for (var n = "css/" + ({}[e] || e) + "." + {
                "chunk-0fa7a4ee": "6d85eb55",
                "chunk-591be4e4": "4080d839",
                "chunk-68f5e17f": "b1096835",
                "chunk-6bc6af1f": "b0d8b002",
                "chunk-5c2cde8e": "0684b621",
                "chunk-3ce00cde": "c1d03527",
                "chunk-4b81d396": "63cdc582",
                "chunk-4d61f4d0": "66ac1ede",
                "chunk-63d8704b": "f9f1774a",
                "chunk-6561f328": "b5989a4c",
                "chunk-9c7671c8": "31d6cfe0",
                "chunk-8019ceac": "f9e946e4",
                "chunk-a389c526": "31d6cfe0",
                "chunk-0e9e9c64": "35d78c21",
                "chunk-899f1020": "45e261a6",
                "chunk-759e3300": "35a681a8",
                "chunk-7911f015": "322ef4ec",
                "chunk-a9ea9f02": "0997af48",
                "chunk-c737cb56": "4c0f66ab",
                "chunk-e4ba59d8": "16e03167"
            }[e] + ".css", s = c.p + n, i = document.getElementsByTagName("link"), o = 0; o < i.length; o++) {
                var u = i[o], l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === n || l === s)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
                u = d[o], l = u.getAttribute("data-href");
                if (l === n || l === s) return t()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
                var n = t && t.target && t.target.src || s,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = n, delete r[e], p.parentNode.removeChild(p), a(i)
            }, p.href = s;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p)
        })).then((function () {
            r[e] = 0
        })));
        var n = s[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var i = new Promise((function (t, a) {
                n = s[e] = [t, a]
            }));
            t.push(n[2] = i);
            var u, l = document.createElement("script");
            l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = o(e);
            var d = new Error;
            u = function (t) {
                l.onerror = l.onload = null, clearTimeout(p);
                var a = s[e];
                if (0 !== a) {
                    if (a) {
                        var n = t && ("load" === t.type ? "missing" : t.type), r = t && t.target && t.target.src;
                        d.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", d.name = "ChunkLoadError", d.type = n, d.request = r, a[1](d)
                    }
                    s[e] = void 0
                }
            };
            var p = setTimeout((function () {
                u({type: "timeout", target: l})
            }), 12e4);
            l.onerror = l.onload = u, document.head.appendChild(l)
        }
        return Promise.all(t)
    }, c.m = e, c.c = n, c.d = function (e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, c.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) c.d(a, n, function (t) {
            return e[t]
        }.bind(null, n));
        return a
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "/", c.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [], l = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var p = l;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("56d7")
    }, "034f": function (e, t, a) {
        "use strict";
        var n = a("8589"), r = a.n(n);
        r.a
    }, "0c6d": function (e, t, a) {
        "use strict";
        a("b4fb"), a("e18c"), a("e35a"), a("f4e3");
        var n = a("82ae"), r = a.n(n), s = a("b705"), i = a("4360"), o = a("5f87"), c = a("12cb"), u = a("a18c"),
            l = function (e) {
                var t = e.response, a = u["a"].currentRoute.path;
                if (t && t.status) {
                    var n = t.data.error, r = t.status;
                    switch (Object(s["Message"])({
                        message: c["a"].t("Request Error") + " ".concat(r, ": ").concat(t.request.responseURL, ". ").concat(n),
                        type: "error",
                        duration: 5e3
                    }), r) {
                        case 401:
                            "/login" !== a && "/" !== a && s["MessageBox"].confirm(c["a"].t("auth.login_expired_message"), c["a"].t("auth.login_expired_title"), {
                                confirmButtonText: c["a"].t("auth.login_expired_confirm"),
                                cancelButtonText: c["a"].t("auth.login_expired_cancel"),
                                type: "warning"
                            }).then((function () {
                                i["a"].dispatch("user/resetToken").then((function () {
                                    location.reload()
                                }))
                            }));
                            break;
                        default:
                    }
                } else t || Object(s["Message"])({message: "您的网络发生异常，无法连接服务器", type: "error", duration: 5e3});
                return t
            }, d = "/api";
        d.match(/^https?/i) || (d = "".concat(window.location.protocol, "//").concat(window.location.host).concat("/api"));
        var p = "###CRAWLAB_API_ADDRESS###";
        p.match("CRAWLAB_API_ADDRESS") || (d = p);
        var f = r.a.create({baseURL: d, timeout: 15e3});
        f.interceptors.request.use((function (e) {
            return i["a"].getters.token && (e.headers["Authorization"] = Object(o["a"])()), e
        }), (function (e) {
            return console.log(e), Promise.reject(e)
        })), f.interceptors.response.use((function (e) {
            return e
        }), l);
        var h = f, m = function (e, t) {
            return h.get(e, {params: t})
        }, _ = function (e, t) {
            return h.post(e, t)
        }, g = function (e, t) {
            return h.put(e, t)
        }, S = function (e, t) {
            return h["delete"](e, {data: t})
        }, E = h.request;
        t["a"] = {baseUrl: h.defaults.baseURL, request: E, get: m, post: _, put: g, delete: S}
    }, "12cb": function (e, t, a) {
        "use strict";
        var n = a("a593"), r = a("3ddb"), s = {
            node_stats_cpu_usage_percent: "Node CPU Usage Percent",
            node_stats_disk_total: "Node Disk Total",
            node_stats_disk_usage: "Node Disk Usage",
            node_stats_disk_usage_percent: "Node Disk Usage Percent",
            node_stats_mem_total: "Node Memory Total",
            node_stats_mem_usage: "Node Memory Usage",
            node_stats_mem_usage_percent: "Node Memory Usage Percent",
            node_stats_network_bytes_recv: "Node Network Bytes Received",
            node_stats_network_bytes_sent: "Node Network Bytes Sent",
            node_stats_network_packets_recv: "Node Network Packets Received",
            node_stats_network_packets_sent: "Node Network Packets Sent",
            mongo_stats_mem_resident: "MongoDB Memory Resident",
            mongo_stats_mem_virtual: "MongoDB Memory Virtual",
            mongo_stats_mem_usage_percent: "MongoDB Memory Usage Percent",
            mongo_stats_fs_total: "MongoDB File System Total",
            mongo_stats_fs_used: "MongoDB File System Used",
            mongo_stats_fs_usage_percent: "MongoDB File System Usage Percent",
            mongo_stats_storage_size: "MongoDB Storage Size",
            mongo_stats_data_size: "MongoDB Data Size",
            mongo_stats_index_size: "MongoDB Index Size",
            mongo_stats_objects: "MongoDB Objects",
            mongo_stats_collections: "MongoDB Collections",
            mongo_stats_indexes: "MongoDB Indexes",
            mongo_stats_avg_obj_size: "MongoDB Average Object Size",
            redis_stats_dataset_bytes: "Redis Dataset Bytes",
            redis_stats_keys_count: "Redis Keys",
            redis_stats_overhead_total: "Redis Overhead Total",
            redis_stats_peak_allocated: "Redis Peak Allocated",
            redis_stats_startup_allocated: "Redis Startup Allocated",
            redis_stats_total_allocated: "Redis Total Allocated",
            addNodeInstruction: "\nYou cannot add nodes directly on the web interface in Crawlab.\n\nAdding a node is quite simple. The only thing you have to do is to run a Crawlab service on your target machine.\n\nFor details, please refer to the [Multi-Node Deployment Documentation](https://docs.crawlab.cn/Installation/MultiNode.html).\n",
            auth: {
                login_expired_message: "You have been logged out, you can cancel to stay on this page, or log in again",
                login_expired_title: "Confirm logout",
                login_expired_confirm: "Confirm",
                login_expired_cancel: "Cancel"
            }
        }, i = {
            Home: "主页",
            Nodes: "节点",
            "Node Detail": "节点详情",
            Spiders: "爬虫",
            "Spider Detail": "爬虫详情",
            Task: "任务",
            Tasks: "任务",
            "Task Detail": "任务详情",
            Schedules: "定时任务",
            Deploys: "部署",
            Sites: "网站",
            Setting: "设置",
            Project: "项目",
            "Spider Market": "爬虫市场",
            Overview: "概览",
            Files: "文件",
            "Deployed Spiders": "已部署爬虫",
            Log: "日志",
            Results: "结果",
            Environment: "环境",
            Analytics: "分析",
            Rules: "规则",
            Config: "配置",
            Spider: "爬虫",
            "Latest Tasks": "最近任务",
            "Latest Deploys": "最近部署",
            Pending: "待定",
            Running: "进行中",
            Finished: "已完成",
            Error: "错误",
            Errors: "错误",
            NA: "未知",
            Cancelled: "已取消",
            Abnormal: "异常",
            Add: "添加",
            Create: "创建",
            Run: "运行",
            Deploy: "部署",
            Save: "保存",
            Cancel: "取消",
            Import: "导入",
            Submit: "提交",
            "Import Spiders": "导入爬虫",
            "Deploy All": "部署所有爬虫",
            Refresh: "刷新",
            View: "查看",
            Edit: "编辑",
            Remove: "删除",
            Confirm: "确认",
            Stop: "停止",
            Preview: "预览",
            "Extract Fields": "提取字段",
            Download: "下载",
            "Download CSV": "下载CSV",
            "Upload Zip File": "上传Zip文件",
            Upload: "上传",
            "Item Threshold": "子项阈值",
            Back: "返回",
            "New File": "新建文件",
            Rename: "重命名",
            Install: "安装",
            Uninstall: "卸载",
            "Create Directory": "新建目录",
            "Create File": "新建文件",
            "Add Node": "添加节点",
            "Add Project": "添加项目",
            Sync: "同步",
            "Auto Sync": "自动同步",
            "Sync Frequency": "同步频率",
            Reset: "重置",
            Copy: "复制",
            Upgrade: "版本升级",
            Ok: "确定",
            "Total Tasks": "总任务数",
            "Active Nodes": "在线节点",
            "Total Deploys": "总部署数",
            "Daily New Tasks": "每日新增任务数",
            "Node Info": "节点信息",
            "Node Name": "节点名称",
            "Node IP": "节点IP",
            "Node MAC": "节点MAC",
            "Node Port": "节点端口",
            Description: "描述",
            "All Nodes": "所有节点",
            "Node List": "节点列表",
            Network: "拓扑图",
            "Node Network": "节点拓扑图",
            Master: "主节点",
            Worker: "工作节点",
            Installation: "安装",
            "Search Dependencies": "搜索依赖",
            Monitor: "监控",
            "Time Range": "时间区间",
            "Started to install": "开始安装",
            IP: "IP地址",
            Port: "端口",
            Online: "在线",
            Offline: "离线",
            Unavailable: "未知",
            node_stats_cpu_usage_percent: "节点 CPU 使用百分比",
            node_stats_disk_total: "节点总磁盘大小",
            node_stats_disk_usage: "节点磁盘使用量",
            node_stats_disk_usage_percent: "节点磁盘使用百分比",
            node_stats_mem_total: "节点总内存大小",
            node_stats_mem_usage: "节点内存使用量",
            node_stats_mem_usage_percent: "节点内存使用百分比",
            node_stats_network_bytes_recv: "节点网络接收字节数",
            node_stats_network_bytes_sent: "节点网络发送字节数",
            node_stats_network_packets_recv: "节点网络接收包数",
            node_stats_network_packets_sent: "节点网络发送包数",
            mongo_stats_mem_resident: "MongoDB 内存使用量",
            mongo_stats_mem_virtual: "MongoDB 虚拟内存大小",
            mongo_stats_mem_usage_percent: "MongoDB 内存使用百分比",
            mongo_stats_fs_total: "MongoDB 总文件系统大小",
            mongo_stats_fs_used: "MongoDB 文件系统使用量",
            mongo_stats_fs_usage_percent: "MongoDB 文件系统使用百分比",
            mongo_stats_storage_size: "MongoDB 储存大小",
            mongo_stats_data_size: "MongoDB 数据大小",
            mongo_stats_index_size: "MongoDB 索引大小",
            mongo_stats_objects: "MongoDB Object 数量",
            mongo_stats_collections: "MongoDB Collection 数量",
            mongo_stats_indexes: "MongoDB 索引数量",
            mongo_stats_avg_obj_size: "MongoDB 平均 Object 大小",
            redis_stats_dataset_bytes: "Redis 数据字节数",
            redis_stats_keys_count: "Redis Key 数量",
            redis_stats_overhead_total: "Redis Overhead 总大小",
            redis_stats_peak_allocated: "Redis 峰值分配大小",
            redis_stats_startup_allocated: "Redis 启动分配大小",
            redis_stats_total_allocated: "Redis 总分配大小",
            "Spider Info": "爬虫信息",
            "Spider ID": "爬虫ID",
            "Spider Name": "爬虫名称",
            "Source Folder": "代码目录",
            "Execute Command": "执行命令",
            "Results Collection": "结果集",
            "Results Table": "结果表",
            Default: "默认",
            "Spider Type": "爬虫类型",
            Language: "语言",
            "Schedule Enabled": "是否开启定时任务",
            "Schedule Cron": "定时任务",
            Variable: "变量",
            Value: "值",
            "Add Environment Variables": "添加环境变量",
            "Add Spider": "添加爬虫",
            "Add Configurable Spider": "添加可配置爬虫",
            "Add Customized Spider": "添加自定义爬虫",
            "Add Field": "添加字段",
            "Last 7-Day Tasks": "最近7天任务数",
            "Last 5-Run Errors": "最近5次运行错误数",
            "30-Day Tasks": "最近30天任务数",
            "30-Day Results": "最近30天结果数",
            "Success Rate": "运行成功率",
            "Avg Duration (sec)": "平均运行时长(秒)",
            "Tasks by Status": "分状态任务数",
            "Tasks by Node": "分节点任务数",
            "Daily Tasks": "每日任务数",
            "Daily Avg Duration (sec)": "每日平均运行时长(秒)",
            "Configurable Spider": "可配置爬虫",
            "Customized Spider": "自定义爬虫",
            Configurable: "可配置",
            Customized: "自定义",
            configurable: "可配置",
            customized: "自定义",
            Text: "文本",
            Attribute: "属性",
            "Field Name": "字段名称",
            "Query Type": "查询类别",
            Query: "查询",
            "Extract Type": "提取类别",
            "CSS Selector": "CSS选择器",
            CSS: "CSS",
            XPath: "Xpath",
            "Crawl Type": "抓取类别",
            "List Only": "仅列表",
            "Detail Only": "仅详情页",
            "List + Detail": "列表＋详情页",
            "Start URL": "开始URL",
            "Item Selector": "列表项选择器",
            "Item Selector Type": "列表项选择器类别",
            "Pagination Selector": "分页选择器",
            "Pagination Selector Type": "分页项选择器类别",
            "Preview Results": "预览结果",
            "Obey robots.txt": "遵守Robots协议",
            "List Page Fields": "列表页字段",
            "Detail Page Fields": "详情页字段",
            "Detail Page URL": "详情页URL",
            All: "全部",
            Stages: "阶段",
            Process: "流程",
            "Stage Process": "流程图",
            "Stage Name": "阶段名称",
            "Start Stage": "开始阶段",
            Engine: "引擎",
            "Selector Type": "选择器类别",
            Selector: "选择器",
            "Is Attribute": "是否为属性",
            "Next Stage": "下一阶段",
            "No Next Stage": "没有下一阶段",
            Fields: "字段",
            Stage: "阶段",
            "Is List": "是否为列表",
            List: "列表",
            Pagination: "分页",
            Settings: "设置",
            "Display Name": "显示名称",
            Template: "模版",
            "Is Scrapy": "是否为 Scrapy",
            "Scrapy Spider": "Scrapy 爬虫",
            "Scrapy Spiders": "Scrapy 爬虫",
            "Scrapy Log Level": "Scrapy 日志等级",
            "Parameter Name": "参数名",
            "Parameter Value": "参数值",
            "Parameter Type": "参数类别",
            Other: "其他",
            "Scrapy Config": "Scrapy 配置",
            "Scrapy Settings": "Scrapy 设置",
            "Variable Name": "变量名",
            "Variable Type": "变量类型",
            "Variable Value": "变量值",
            "Parameter Edit": "参数编辑",
            "Add Scrapy Spider": "添加 Scrapy 爬虫",
            "Is Git": "是否为 Git",
            "Git Settings": "Git 设置",
            "Git URL": "Git URL",
            "Git Branch": "Git 分支",
            "Git Username": "Git 用户名",
            "Git Password": "Git 密码",
            "Has Credential": "需要验证",
            "SSH Public Key": "SSH 公钥",
            "Is Long Task": "是否为长任务",
            "Long Task": "长任务",
            "Running Task Count": "运行中的任务数",
            "Running Tasks": "运行中的任务",
            "Item Name": "Item 名称",
            "Add Item": "添加 Item",
            "Add Variable": "添加变量",
            "Copy Spider": "复制爬虫",
            "New Spider Name": "新爬虫名称",
            "All Spiders": "所有爬虫",
            "My Spiders": "我的爬虫",
            "Public Spiders": "公共爬虫",
            "Is Public": "是否公共",
            Owner: "所有者",
            "Convert to Customized": "转化为自定义",
            "Is De-Duplicated": "是否去重",
            "Please enter de-duplicated field": "请输入去重字段",
            Overwrite: "覆盖",
            Ignore: "忽略",
            "De-Duplication": "去重",
            "Same Above": "同上",
            "Batch Run": "批量运行",
            "Set Projects": "设置项目",
            Name: "名称",
            "Last Run": "上次运行",
            Action: "操作",
            "No command line": "没有执行命令",
            "Last Status": "上次运行状态",
            Remark: "备注",
            "Task Info": "任务信息",
            "Task ID": "任务ID",
            Status: "状态",
            "Log File Path": "日志文件路径",
            "Create Timestamp": "创建时间",
            "Finish Timestamp": "完成时间",
            "Duration (sec)": "用时(秒)",
            "Error Message": "错误信息",
            "Results Count": "结果数",
            "Average Results Count per Second": "抓取速度(个/秒)",
            "Wait Duration (sec)": "等待时长(秒)",
            "Runtime Duration (sec)": "运行时长(秒)",
            "Total Duration (sec)": "总时长(秒)",
            "Run Type": "运行类型",
            Random: "随机",
            "Selected Nodes": "指定节点",
            "Search Log": "搜索日志",
            "Auto-Scroll": "自动滚动",
            "Auto-Refresh": "自动刷新",
            "Updating log...": "正在更新日志...",
            "Error Count": "错误数",
            "Log with errors": "日志错误",
            "Empty results": "空结果",
            "Navigate to Spider": "导航到爬虫",
            "Navigate to Node": "导航到节点",
            Restart: "重新运行",
            "Redirect to task detail": "跳转到任务详情页",
            "Retry (Maximum 5 Times)": "是否重试（最多 5 次）",
            "Delete Tasks": "删除任务",
            "Stop Tasks": "停止任务",
            Node: "节点",
            "Create Time": "创建时间",
            "Start Time": "开始时间",
            "Finish Time": "结束时间",
            "Update Time": "更新时间",
            Type: "类别",
            "Spider Tasks": "爬虫任务",
            "System Tasks": "系统任务",
            Time: "时间",
            "All Tags": "全部标签",
            Projects: "项目",
            "Project Name": "项目名称",
            "Project Description": "项目描述",
            Tags: "标签",
            "Enter Tags": "输入标签",
            "No Project": "无项目",
            "All Projects": "所有项目",
            "Schedule Name": "定时任务名称",
            "Schedule Description": "定时任务描述",
            Parameters: "参数",
            "Add Schedule": "添加定时任务",
            stop: "暂停",
            running: "运行",
            error: "错误",
            "Not Found Node": "节点配置错误",
            "Not Found Spider": "爬虫配置错误",
            "[minute] [hour] [day] [month] [day of week]": "[分] [时] [天] [月] [星期几]",
            "Enable/Disable": "启用/禁用",
            Cron: "Cron",
            "Cron Expression": "Cron 表达式",
            "Cron expression is invalid": "Cron 表达式不正确",
            "View Tasks": "查看任务",
            "Batch Add": "批量添加",
            Enable: "启用",
            Disable: "禁用",
            Site: "网站",
            Rank: "排名",
            Domain: "域名",
            "Main Category": "主类别",
            Category: "类别",
            Select: "请选择",
            "Select Main Category": "请选择主类别",
            "Select Category": "请选择类别",
            "Spider Count": "爬虫数",
            "Robots Protocol": "Robots 协议",
            "Home Page Response Time (sec)": "首页响应时间(秒)",
            "Home Page Response Status Code": "首页响应状态码",
            Feedback: "反馈",
            Feedbacks: "反馈",
            Wechat: "微信",
            Content: "内容",
            Rating: "评分",
            "Super Admin": "超级管理员",
            "Choose Folder": "选择文件",
            File: "文件",
            Folder: "文件夹",
            Directory: "目录",
            "Import Spider": "导入爬虫",
            "Source URL": "来源URL",
            "Source Type": "来源类别",
            Search: "搜索",
            User: "用户",
            Logout: "退出登录",
            Documentation: "文档",
            String: "字符串",
            Number: "数字",
            Boolean: "布尔值",
            "Array/List": "数组/列表",
            "Object/Dict": "对象/字典",
            Yes: "是",
            No: "否",
            OS: "操作系统",
            ARCH: "操作架构",
            "Number of CPU": "CPU数",
            Executables: "执行文件",
            "Latest Version": "最新版本",
            Version: "版本",
            Installed: "已安装",
            "Not Installed": "未安装",
            Installing: "正在安装",
            "Install All": "安装全部",
            "Other language installing": "其他语言正在安装",
            "This language is not installed yet.": "语言还未安装",
            Languages: "语言",
            Dependencies: "依赖",
            "Install on All Nodes": "安装在所有节点",
            Notification: "提示",
            "Are you sure to delete this node?": "你确定要删除该节点?",
            "Are you sure to run this spider?": "你确定要运行该爬虫?",
            "Are you sure to delete this file/directory?": "你确定要删除该文件/文件夹?",
            "Are you sure to convert this spider to customized spider?": "你确定要转化该爬虫为自定义爬虫?",
            "Are you sure to delete this task?": "您确定要删除该任务?",
            "Added spider successfully": "成功添加爬虫",
            "Converted successfully": "成功转化",
            "Converted unsuccessfully": "未成功转化",
            "Uploaded spider files successfully": "成功上传爬虫文件",
            "Node info has been saved successfully": "节点信息已成功保存",
            "A task has been scheduled successfully": "已经成功派发一个任务",
            "Are you sure to delete this spider?": "你确定要删除该爬虫?",
            "Are you sure to delete this user?": "你确定要删除该用户?",
            "Spider info has been saved successfully": "爬虫信息已成功保存",
            "Do you allow us to collect some statistics to improve Crawlab?": "您允许我们收集统计数据以更好地优化Crawlab？",
            "Saved file successfully": "成功保存文件",
            "An error happened when fetching the data": "请求数据时出错",
            "Error when logging in (Please read documentation Q&A)": "登录时出错（请查看文档 Q&A）",
            "Please enter the correct username": "请输入正确用户名",
            "Password length should be no shorter than 5": "密码长度不能小于5",
            "Two passwords must be the same": "两个密码必须要一致",
            "username already exists": "用户名已存在",
            "Deleted successfully": "成功删除",
            "Saved successfully": "成功保存",
            "Renamed successfully": "重命名保存",
            'You can click "Add" to create an empty spider and upload files later.': '您可以点击"添加"按钮创建空的爬虫，之后再上传文件。',
            'OR, you can also click "Upload" and upload a zip file containing your spider project.': '或者，您也可以点击"上传"按钮并上传一个包含爬虫项目的 zip 文件。',
            "NOTE: When uploading a zip file, please zip your spider files from the ROOT DIRECTORY.": "注意: 上传 zip 文件时，请从 根目录 下开始压缩爬虫文件。",
            English: "English",
            "Are you sure to delete the schedule task?": "确定删除定时任务?",
            " is not installed, do you want to install it?": " 还没有安装，您是否打算安装它?",
            Disclaimer: "免责声明",
            "Please search dependencies": "请搜索依赖",
            "No Data": "暂无数据",
            "No data available": "暂无数据",
            "No data available. Please check whether your spiders are missing dependencies or no spiders created.": "暂无数据。请检查您的爬虫是否缺少依赖，或者没有创建爬虫。",
            "Show installed": "查看已安装",
            "Installing dependency successful": "安装依赖成功",
            "Installing dependency failed": "安装依赖失败",
            "You have successfully installed a dependency: ": "您已成功安装依赖: ",
            "The dependency installation is unsuccessful: ": "安装依赖失败: ",
            "Uninstalling dependency successful": "卸载依赖成功",
            "Uninstalling dependency failed": "卸载依赖失败",
            "You have successfully uninstalled a dependency: ": "您已成功卸载依赖: ",
            "The dependency uninstallation is unsuccessful: ": "卸载依赖失败: ",
            "Installing language successful": "安装语言成功",
            "Installing language failed": "安装语言失败",
            "You have successfully installed a language: ": "您已成功安装语言: ",
            "The language installation is unsuccessful: ": "安装语言失败: ",
            "Enabling the schedule successful": "启用定时任务成功",
            "Disabling the schedule successful": "禁用定时任务成功",
            "Enabling the schedule unsuccessful": "启用定时任务失败",
            "Disabling the schedule unsuccessful": "禁用定时任务失败",
            "The schedule has been removed": "已删除定时任务",
            "The schedule has been added": "已添加定时任务",
            "The schedule has been saved": "已保存定时任务",
            "Email format invalid": "邮箱地址格式不正确",
            "Please select a file or click the add button on the left.": "请在左侧选择一个文件或点击添加按钮.",
            "New Directory": "新建目录",
            "Enter new directory name": "输入新目录名称",
            "New directory name": "新目录名称",
            "Enter new file name": "输入新文件名称",
            "New file name": "新文件名称",
            "Release Note": "发布记录",
            "How to Upgrade": "升级方式",
            Release: "发布",
            "Add Wechat to join discussion group": "添加微信",
            "Submitted successfully": "提交成功",
            "Sign in": "登录",
            "Sign-in": "登录",
            "Sign out": "退出登录",
            "Sign-out": "退出登录",
            "Sign up": "注册",
            "Sign-up": "注册",
            "Forgot Password": "忘记密码",
            "Has Account": "已有账号",
            "New to Crawlab": "Crawlab新用户",
            "Initial Username/Password": "初始用户名/密码",
            Username: "用户名",
            Password: "密码",
            "Confirm Password": "确认密码",
            normal: "普通用户",
            admin: "管理用户",
            Role: "角色",
            "Edit User": "更改用户",
            Users: "用户",
            Email: "邮箱",
            Optional: "可选",
            "Notification Trigger Timing": "消息通知触发时机",
            "On Task End": "当任务结束",
            "On Task Error": "当任务发生错误",
            Never: "从不",
            "DingTalk Robot Webhook": "钉钉机器人 Webhook",
            "Wechat Robot Webhook": "微信机器人 Webhook",
            "Password Settings": "密码设置",
            Notifications: "消息通知",
            "Global Variable": "全局变量",
            "Add Global Variable": "新增全局变量",
            "Are you sure to delete this global variable": "确定删除该全局变量？",
            Key: "设置",
            "Allow Sending Statistics": "允许发送统计信息",
            General: "通用",
            "Enable Tutorial": "启用教程",
            "Error Regex Pattern": "异常正则表达式",
            "By default: ": "默认: ",
            "Max Error Logs Display": "最大异常日志展示",
            "Log Errors": "日志错误",
            "No Expire": "不过期",
            "Log Expire Duration": "日志过期时间",
            Database: "数据库",
            "Data Source": "数据源",
            "Data Source Type": "数据源类别",
            Host: "主机",
            "Host address, e.g. 192.168.0.1": "主机地址，例如 192.168.0.1",
            "Port, e.g. 27017": "端口，例如 27017",
            "Auth Source (Default: admin)": "Auth Source (默认: admin)",
            "Change Password": "更改密码",
            Challenge: "挑战",
            Challenges: "挑战",
            Difficulty: "难度",
            Achieved: "已达成",
            "Not Achieved": "未达成",
            "Start Challenge": "开始挑战",
            Second: "秒",
            Seconds: "秒",
            Minute: "分",
            Minutes: "分",
            Hour: "小时",
            Hours: "小时",
            Day: "天",
            Days: "天",
            Week: "周",
            Weeks: "周",
            Month: "月",
            Months: "月",
            Year: "年",
            Years: "年",
            "Search Keyword": "搜索关键词",
            Sort: "排序",
            "Default Sort": "默认排序",
            "Most Stars": "最多 Stars",
            "Most Forks": "最多 Forks",
            "Latest Pushed": "最近提交",
            "Pushed At": "提交时间",
            "Related Documentation": "相关文档",
            "Click to view related Documentation": "点击查看相关文档",
            tagsView: {closeOthers: "关闭其他", close: "关闭", refresh: "刷新", closeAll: "关闭所有"},
            nodeList: {type: "节点类型"},
            schedules: {cron: "Cron", add_cron: "生成Cron", cron_format: "Cron 格式: [秒] [分] [小时] [日] [月] [周]"},
            Disk: "磁盘",
            "Data Size": "数据大小",
            "Storage Size": "储存大小",
            Memory: "内存",
            CPU: "CPU",
            "Index Size": "索引大小",
            "Total Allocated": "总分配内存",
            "Peak Allocated": "峰值内存",
            "Dataset Size": "数据大小",
            "Overhead Size": "额外开销",
            "Disk Usage": "磁盘使用量",
            "Memory Usage": "内存使用量",
            addNodeInstruction: "\n您不能在 Crawlab 的 Web 界面直接添加节点。\n\n添加节点的方式非常简单，您只需要在目标机器上运行一个 Crawlab 服务就可以了。\n\n具体操作，请参照 [多节点部署文档](https://docs.crawlab.cn/Installation/MultiNode.html)。\n",
            Skip: "跳过",
            Previous: "上一步",
            Next: "下一步",
            Finish: "结束",
            'Click to add a new spider.<br><br>You can also add a <strong>Customized Spider</strong> through <a href="https://docs.crawlab.cn/Usage/SDK/CLI.html" target="_blank" style="color: #409EFF">CLI Tool</a>.': '点击并添加爬虫<br><br>您也可以通过 <a href="https://docs.crawlab.cn/Usage/SDK/CLI.html" target="_blank" style="color: #409EFF">CLI 工具</a> 添加<strong>自定义爬虫</strong>',
            "You can view your created spiders here.<br>Click a table row to view <strong>spider details</strong>.": "您可以查看创建的爬虫<br>点击行来查看<strong>爬虫详情</strong>",
            "View a list of <strong>Configurable Spiders</strong>": "查看<strong>可配置爬虫</strong>列表",
            "View a list of <strong>Customized Spiders</strong>": "查看<strong>自定义爬虫</strong>列表",
            "<strong>Customized Spider</strong> is a highly customized spider, which is able to run on any programming language and any web crawler framework.": "<strong>自定义爬虫</strong>是高度自定义化的爬虫，能够运行任何编程语言和爬虫框架",
            "<strong>Configurable Spider</strong> is a spider defined by config data, aimed at streamlining spider development and improving dev efficiency.": "<strong>可配置爬虫</strong>被配置数据所定义，旨在将爬虫开发流程化以及提高爬虫开发效率",
            "Unique identifier for the spider": "爬虫的唯一识别符",
            "How the spider is displayed on Crawlab": "爬虫在 Crawlab 上的展示名称",
            "A shell command to be executed when the spider is triggered to run (only available for <strong>Customized Spider</strong>": "当爬虫被触发时执行的一行 Shell 命令（仅<strong>自定义爬虫</strong>有效）",
            "Where the results are stored in the database": "抓取结果在数据库中储存的位置",
            "Upload a zip file containing all spider files to create the spider (only available for <strong>Customized Spider</strong>)": "上传一个包含所有爬虫文件的 zip 文件，然后创建爬虫（仅<strong>自定义爬虫</strong>有效）",
            "The spider template to create from (only available for <strong>Configurable Spider</strong>)": "创建爬虫时引用的模版（仅<strong>可配置爬虫</strong>有效）",
            "Click to confirm to add the spider": "点击并确认添加爬虫",
            "You can switch to each section of the spider detail.": "您可以切换到爬虫详情的每一个部分",
            "You can switch to different spider using this selector.": "您可以通过这个选择器切换不同的爬虫",
            "You can view latest tasks for this spider and click each row to view task detail.": "您可以查看最近的爬虫任务以及点击行来查看任务详情",
            "You can edit the detail info for this spider.": "您可以编辑爬虫详情信息",
            "Here you can action on the spider, including running a task, uploading a zip file and save the spider info.": "这里您可以对爬虫进行操作，包括运行爬虫任务、上传 zip 文件以及保存爬虫信息",
            "File navigation panel.<br><br>You can right click on <br>each item to create or delete<br> a file/directory.": "文件导航栏<br><br>您可以右键点击一个元素<br>来添加或删除文件/文件夹",
            "Click to add a file or directory<br> on the root directory.": "点击并添加一个文件<br>或文件夹",
            "You can edit, save, rename<br> and delete the selected file <br>in this box.": "在这个栏位中，您可以<br>编辑、保存、重命名、<br>删除所选择的文件",
            "Here you can add environment variables that will be passed to the spider program when running a task.": "这里您可以添加环境变量，这些环境变量会被传入运行的爬虫程序中",
            "You can add, edit and delete schedules (cron jobs) for the spider.": "您可以添加、修改、删除爬虫的定时任务",
            "You can switch to each section of configurable spider.": "您可以切换到可配置爬虫的每一个部分",
            "Here is the starting URL of the spider.": "这里是爬虫的起始URL",
            "Here is the starting stage of the spider.<br><br>A <strong>Stage</strong> is basically a callback in the Scrapy spider.": "这里是爬虫的起始阶段<br><br><strong>阶段</strong>就是 Scrapy 爬虫中的回调函数",
            "You can run a spider task.<br><br>Spider will be automatically saved when clicking on this button.": "您可以运行爬虫任务<br><br>点击该按钮会自动保存爬虫",
            "Add/duplicate/delete a stage.": "添加/复制/删除阶段",
            "Add/duplicate/delete an extract field in the stage.": "添加/复制/删除该阶段下的抓取字段",
            'You can decide whether this is a list page.<br><br>Click on the CSS/XPath tag to enter the selector expression for list items.<br>For example, "<code>ul > li</code>"': '您可以决定这是否为一个列表页<br><br>点击 CSS/XPath 标签来输入列表元素的选择器表达式<br>例如 "<code>ul > li</code>"',
            'You can decide whether this is a list page with pagination.<br><br>Click on the CSS/XPath tag to enter the selector expression for the pagination.<br>For example, "<code>a.next</code>"': '您可以决定这是否为一个含分页的列表页<br><br>点击 CSS/XPath 标签来输入分页的选择器表达式<br>例如 "<code>a.next</code>"',
            "You should enter necessary information for all fields in the stage.": "您应该输入该阶段下所有字段的信息",
            "If you have multiple stages, e.g. list page + detail page, you should select the next stage in the detail link's field.": "如果您有多个阶段，例如列表页+详情页，您应该在详情页链接字段中选择下一个阶段",
            "You can view the<br> visualization of the stage<br> workflow.": "您可以查看阶段工作流的<br>可视化界面",
            "You can add the settings here, which will be loaded in the Scrapy's <code>settings.py</code> file.<br><br>JSON and Array data are supported.": "您可以在这里添加设置，它们会在 Scrapy 中的 <code>settings.py</code> 中被加载<br><br>JSON 和数组都支持",
            'You can edit the <code>Spiderfile</code> here.<br><br>For more information, please refer to the <a href="https://docs.crawlab.cn/Usage/Spider/ConfigurableSpider.html" target="_blank" style="color: #409EFF">Documentation (Chinese)</a>.': '您可以在这里编辑 <code>Spiderfile</code><br><br>更多信息, 请参考 <a href="https://docs.crawlab.cn/Usage/Spider/ConfigurableSpider.html" target="_blank" style="color: #409EFF">文档</a>.',
            "You can filter tasks from this area.": "您可以在这个区域筛选任务",
            "This is a list of spider tasks executed sorted in a time descending order.": "这是执行过的爬虫任务的列表，按时间降序排列",
            "Click the row to or the view button to view the task detail.": "点击行或查看按钮来查看任务详情",
            "Tick and select the tasks you would like to delete in batches.": "勾选您想批量删除的任务",
            "Click this button to delete selected tasks.": "点击并删除勾选的任务",
            "This is the info of the task detail.": "这是任务详情信息",
            "This is the spider info of the task.": "这是任务的爬虫信息",
            "You can click to view the spider detail for the task.": "您可以点击查看该任务的爬虫详情",
            "This is the node info of the task.": "这是任务的节点信息",
            "You can click to view the node detail for the task.": "您可以点击查看该任务的节点详情",
            "Here you can view the log<br> details for the task. The<br> log is automatically updated.": "这里您可以查看该任务<br>的日志详情，日志是<br>自动更新的",
            'Here you can view the results scraped by the spider.<br><br><strong>Note:</strong> If you find your results here are empty, please refer to the <a href="https://docs.crawlab.cn/Integration/" target="_blank" style="color: #409EFF">Documentation (Chinese)</a> about how to integrate your spider into Crawlab.': '这里您可以查看爬虫抓取下来的结果<br><br><strong>注意:</strong> 如果这里结果是空的，请参考 <a href="https://docs.crawlab.cn/Integration/" target="_blank" style="color: #409EFF">相关文档</a> 来集成您的爬虫到 Crawlab',
            "You can download your results as a CSV file by clicking this button.": "您可以点击下载结果为 CSV 文件",
            "Switch between different nodes.": "在节点间切换",
            "You can view the latest executed spider tasks.": "您可以查看最近执行过的爬虫任务",
            "This is the detailed node info.": "这是节点详情",
            "Here you can install<br> dependencies and modules<br> that are required<br> in your spiders.": "这里您可以安装您爬虫中<br>需要的依赖或模块",
            'You can search dependencies in the search box and install them by clicking the "Install" button below.': '您可以在搜索框中搜索依赖并点击下面的"安装"按钮来进行安装',
            "You should fill the form before adding the new schedule.": "在添加新定时任务前，您需要填写这个表单",
            "The name of the schedule": "定时任务名称",
            'The type of how to run the task.<br><br>Please refer to the <a href="https://docs.crawlab.cn/Usage/Spider/Run.html" target="_blank" style="color: #409EFF">Documentation (Chinese)</a> for detailed explanation for the options.<br><br>Let\'s select <strong>Selected Nodes</strong> for example.': '表示以哪种方式运行任务，<br><br>请参考 <a href="https://docs.crawlab.cn/Usage/Spider/Run.html" target="_blank" style="color: #409EFF">文档</a> 参考选项解释<br><br>让我们选择 <strong>指定节点</strong> 这个选项',
            "The spider to run": "运行的爬虫",
            '<strong>Cron</strong> expression for the schedule.<br><br>If you are not sure what a cron expression is, please refer to this <a href="https://baike.baidu.com/item/crontab/8819388" target="_blank" style="color: #409EFF">Article</a>.': '定时任务的 <strong>Cron</strong> 表达式<br><br>如果您不清楚什么是 Cron 表达式，请参考这篇 <a href="https://baike.baidu.com/item/crontab/8819388" target="_blank" style="color: #409EFF">文章（英文）</a>.',
            "You can select the correct options in the cron config box to configure the cron expression.": "您可以在 Cron 配置栏里选择正确的选项来配置 Cron 表达式",
            "The parameters which will be passed into the spider program.": "将被传入爬虫程序里的参数",
            "The description for the schedule": "定时任务的描述",
            "Once you have filled all fields, click this button to submit.": "当您填完所有字段，请点击这个按钮来提交定时任务",
            "Here you can set your general settings.": "这里您可以设置您的通用设置",
            "In this tab you can configure your notification settings.": "在这个标签中，您可以<br>配置您的消息通知配置",
            "Here you can add/edit/delete global environment variables which will be passed into your spider programs.": "这里您可以添加/修改/删除全局环境变量，它们会被传入爬虫程序中",
            "You are running on a mobile device, which is not optimized yet. Please try with a laptop or desktop.": "您正在没有优化过的移动端上浏览，我们建议您用电脑来访问",
            "Git has been synchronized successfully": "Git 已经成功同步",
            "Git has been reset successfully": "Git 已经成功重置",
            "This would delete all files of the spider. Are you sure to continue?": "重置将删除该爬虫所有文件，您希望继续吗？",
            "SSH Public Key is copied to the clipboard": "SSH 公钥已粘贴到剪切板",
            "Removed successfully": "已成功删除",
            "Are you sure to delete selected items?": "您是否确认删除所选项？",
            "Are you sure to stop selected items?": "您是否确认停止所选项？",
            "Sent signals to cancel selected tasks": "已经向所选任务发送取消任务信号",
            "Copied successfully": "已成功复制",
            "You have started the challenge.": "您已开始挑战",
            "Please enter your email": "请输入您的邮箱",
            "Please enter your Wechat account": "请输入您的微信账号",
            "Please enter your feedback content": "请输入您的反馈内容",
            "No response from the server. Please make sure your server is running correctly. You can also refer to the documentation to solve this issue.": "服务器无响应，请保证您的服务器正常运行。您也可以参考文档来解决这个问题（文档链接在下方）",
            "Are you sure to restart this task?": "确认重新运行该任务?",
            "Are you sure to delete the project?": "确认删除该项目?",
            'You have no projects created. You can create a project by clicking the "Add" button.': '您没有创建项目，请点击 "添加项目" 按钮来创建一个新项目',
            "Added API token successfully": "成功添加 API Token",
            "Deleted API token successfully": "成功删除 API Token",
            "Are you sure to add an API token?": "确认创建 API Token?",
            "Are you sure to delete this API token?": "确认删除该 API Token?",
            "Please enter Web Hook URL": "请输入 Web Hook URL",
            "Change data source failed": "更改数据源失败",
            "Changed data source successfully": "更改数据源成功",
            "Are you sure to delete this data source?": "您确定删除该数据源?",
            "Are you sure to download this spider?": "您确定要下载该爬虫?",
            "Downloaded successfully": "下载成功",
            "Unable to submit because of some errors": "有错误，无法提交",
            "Are you sure to stop these tasks": "确认停止这些任务?",
            "Are you sure to delete these tasks": "确认删除这些任务?",
            "Stopped successfully": "成功停止",
            "Are you sure to restart these tasks": "确认重新运行这些任务?",
            "Restarted successfully": "成功重新运行",
            "Are you sure to stop this task?": "确认停止这个任务?",
            "Enabled successfully": "成功启用",
            "Disabled successfully": "成功禁用",
            "Request Error": "请求错误",
            "Changed password successfully": "成功修改密码",
            "Two passwords do not match": "两次密码不匹配",
            "Star crawlab-team/crawlab on GitHub": "在 GitHub 上为 Crawlab 加星吧",
            "How to buy": "如何购买"
        };
        n["default"].use(r["a"]);
        var o = new r["a"]({
            locale: localStorage.getItem("lang") || "zh",
            messages: {en: s, zh: i},
            silentTranslationWarn: !0
        });
        t["a"] = o
    }, "18f0": function (e, t, a) {
        e.exports = a.p + "img/link.776b567c.svg"
    }, "1a97": function (e, t, a) {
    }, "1cda": function (e, t, a) {
    }, 2986: function (e, t, a) {
    }, "2a3d": function (e, t, a) {
        e.exports = a.p + "img/password.92a4e6d4.svg"
    }, "30c3": function (e, t, a) {
        e.exports = a.p + "img/example.894f4689.svg"
    }, "3a37": function (e, t, a) {
    }, 4360: function (e, t, a) {
        "use strict";
        var n = a("a593"), r = a("9f3a"), s = a("e04f"), i = a.n(s), o = {
                state: {sidebar: {opened: !+i.a.get("sidebarStatus"), withoutAnimation: !1}, device: "desktop"},
                mutations: {
                    TOGGLE_SIDEBAR: function (e) {
                        e.sidebar.opened ? i.a.set("sidebarStatus", 1) : i.a.set("sidebarStatus", 0), e.sidebar.opened = !e.sidebar.opened, e.sidebar.withoutAnimation = !1
                    }, CLOSE_SIDEBAR: function (e, t) {
                        i.a.set("sidebarStatus", 1), e.sidebar.opened = !1, e.sidebar.withoutAnimation = t
                    }, TOGGLE_DEVICE: function (e, t) {
                        e.device = t
                    }
                },
                actions: {
                    ToggleSideBar: function (e) {
                        var t = e.commit;
                        t("TOGGLE_SIDEBAR")
                    }, CloseSideBar: function (e, t) {
                        var a = e.commit, n = t.withoutAnimation;
                        a("CLOSE_SIDEBAR", n)
                    }, ToggleDevice: function (e, t) {
                        var a = e.commit;
                        a("TOGGLE_DEVICE", t)
                    }
                }
            }, c = o, u = (a("053b"), a("e18c"), a("6db4"), a("6a61"), a("cf7f")), l = a("0c6d"), d = a("5f87"), p = {
                namespaced: !0,
                state: {
                    token: Object(d["a"])(),
                    name: "",
                    avatar: "",
                    roles: [],
                    userList: [],
                    globalVariableList: [],
                    globalVariableForm: {},
                    userForm: {},
                    userInfo: void 0,
                    adminPaths: ["/users"],
                    pageNum: 1,
                    pageSize: 10,
                    totalCount: 0
                },
                getters: {
                    userInfo: function (e) {
                        if (e.userInfo) return e.userInfo;
                        var t = window.localStorage.getItem("user_info");
                        return t ? JSON.parse(t) : {}
                    }, token: function () {
                        return window.localStorage.getItem("token")
                    }
                },
                mutations: {
                    SET_TOKEN: function (e, t) {
                        e.token = t
                    }, SET_NAME: function (e, t) {
                        e.name = t
                    }, SET_AVATAR: function (e, t) {
                        e.avatar = t
                    }, SET_ROLES: function (e, t) {
                        e.roles = t
                    }, SET_USER_LIST: function (e, t) {
                        e.userList = t
                    }, SET_USER_FORM: function (e, t) {
                        e.userForm = t
                    }, SET_USER_INFO: function (e, t) {
                        e.userInfo = t
                    }, SET_PAGE_NUM: function (e, t) {
                        e.pageNum = t
                    }, SET_PAGE_SIZE: function (e, t) {
                        e.pageSize = t
                    }, SET_TOTAL_COUNT: function (e, t) {
                        e.totalCount = t
                    }, SET_GLOBAL_VARIABLE_LIST: function (e, t) {
                        e.globalVariableList = t
                    }
                },
                actions: {
                    login: function (e, t) {
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var n, r, s, i;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return n = e.commit, r = t.username.trim(), a.next = 4, l["a"].post("/login", {
                                            username: r,
                                            password: t.password
                                        });
                                    case 4:
                                        return s = a.sent, 200 === s.status && (i = s.data.data, n("SET_TOKEN", i), Object(d["c"])(i)), a.abrupt("return", s);
                                    case 7:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, getInfo: function (e) {
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.commit, e.state, t.next = 3, l["a"].get("/me");
                                    case 3:
                                        n = t.sent, n.data.data.setting.max_error_log || (n.data.data.setting.max_error_log = 1e3), a("SET_USER_INFO", n.data.data), window.localStorage.setItem("user_info", JSON.stringify(n.data.data));
                                    case 7:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, postInfo: function (e, t) {
                        e.commit;
                        return l["a"].post("/me", t)
                    }, register: function (e, t) {
                        e.dispatch, e.commit, e.state;
                        return new Promise((function (e, a) {
                            l["a"].put("/users", {username: t.username, password: t.password}).then((function () {
                                e()
                            }))["catch"]((function (e) {
                                a(e.response.data.error)
                            }))
                        }))
                    }, logout: function (e) {
                        var t = e.commit;
                        e.state;
                        return new Promise((function (e, a) {
                            window.localStorage.removeItem("token"), window.localStorage.removeItem("user_info"), t("SET_USER_INFO", void 0), t("SET_TOKEN", ""), t("SET_ROLES", []), e()
                        }))
                    }, resetToken: function (e) {
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        a = e.commit, a("SET_TOKEN", ""), a("SET_ROLES", []), Object(d["b"])();
                                    case 4:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getUserList: function (e) {
                        var t = e.commit, a = e.state;
                        return new Promise((function (e, n) {
                            l["a"].get("/users", {page_num: a.pageNum, page_size: a.pageSize}).then((function (e) {
                                t("SET_USER_LIST", e.data.data), t("SET_TOTAL_COUNT", e.data.total)
                            }))
                        }))
                    }, deleteUser: function (e, t) {
                        e.state;
                        return l["a"]["delete"]("/users/".concat(t))
                    }, editUser: function (e) {
                        var t = e.state;
                        return l["a"].post("/users/".concat(t.userForm._id), t.userForm)
                    }, addUser: function (e) {
                        e.dispatch, e.commit;
                        var t = e.state;
                        return l["a"].put("/users-add", t.userForm)
                    }, addGlobalVariable: function (e) {
                        e.commit;
                        var t = e.state;
                        return l["a"].put("/variable", t.globalVariableForm).then((function () {
                            t.globalVariableForm = {}
                        }))
                    }, getGlobalVariable: function (e) {
                        var t = e.commit;
                        e.state;
                        l["a"].get("/variables").then((function (e) {
                            t("SET_GLOBAL_VARIABLE_LIST", e.data.data)
                        }))
                    }, deleteGlobalVariable: function (e, t) {
                        e.commit, e.state;
                        return l["a"]["delete"]("/variable/".concat(t))
                    }
                }
            }, f = p,
            h = (a("dbb3"), a("b130"), a("ecb4"), a("77ad"), a("d497"), a("ea69"), a("90aa"), a("af86"), a("5748")),
            m = a("1998"), _ = a("52ef"), g = {
                state: {visitedViews: [], cachedViews: []}, mutations: {
                    ADD_VISITED_VIEW: function (e, t) {
                        e.visitedViews.some((function (e) {
                            return e.path === t.path
                        })) || e.visitedViews.push(Object.assign({}, t, {title: t.meta.title || "no-name"}))
                    }, ADD_CACHED_VIEW: function (e, t) {
                        e.cachedViews.includes(t.name) || t.meta.noCache || e.cachedViews.push(t.name)
                    }, DEL_VISITED_VIEW: function (e, t) {
                        var a, n = Object(_["a"])(e.visitedViews.entries());
                        try {
                            for (n.s(); !(a = n.n()).done;) {
                                var r = Object(m["a"])(a.value, 2), s = r[0], i = r[1];
                                if (i.path === t.path) {
                                    e.visitedViews.splice(s, 1);
                                    break
                                }
                            }
                        } catch (o) {
                            n.e(o)
                        } finally {
                            n.f()
                        }
                    }, DEL_CACHED_VIEW: function (e, t) {
                        var a, n = Object(_["a"])(e.cachedViews);
                        try {
                            for (n.s(); !(a = n.n()).done;) {
                                var r = a.value;
                                if (r === t.name) {
                                    var s = e.cachedViews.indexOf(r);
                                    e.cachedViews.splice(s, 1);
                                    break
                                }
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                    }, DEL_OTHERS_VISITED_VIEWS: function (e, t) {
                        e.visitedViews = e.visitedViews.filter((function (e) {
                            return e.meta.affix || e.path === t.path
                        }))
                    }, DEL_OTHERS_CACHED_VIEWS: function (e, t) {
                        var a, n = Object(_["a"])(e.cachedViews);
                        try {
                            for (n.s(); !(a = n.n()).done;) {
                                var r = a.value;
                                if (r === t.name) {
                                    var s = e.cachedViews.indexOf(r);
                                    e.cachedViews = e.cachedViews.slice(s, s + 1);
                                    break
                                }
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                    }, DEL_ALL_VISITED_VIEWS: function (e) {
                        var t = e.visitedViews.filter((function (e) {
                            return e.meta.affix
                        }));
                        e.visitedViews = t
                    }, DEL_ALL_CACHED_VIEWS: function (e) {
                        e.cachedViews = []
                    }, UPDATE_VISITED_VIEW: function (e, t) {
                        var a, n = Object(_["a"])(e.visitedViews);
                        try {
                            for (n.s(); !(a = n.n()).done;) {
                                var r = a.value;
                                if (r.path === t.path) {
                                    r = Object.assign(r, t);
                                    break
                                }
                            }
                        } catch (s) {
                            n.e(s)
                        } finally {
                            n.f()
                        }
                    }
                }, actions: {
                    addView: function (e, t) {
                        var a = e.dispatch;
                        a("addVisitedView", t), a("addCachedView", t)
                    }, addVisitedView: function (e, t) {
                        var a = e.commit;
                        a("ADD_VISITED_VIEW", t)
                    }, addCachedView: function (e, t) {
                        var a = e.commit;
                        a("ADD_CACHED_VIEW", t)
                    }, delView: function (e, t) {
                        var a = e.dispatch, n = e.state;
                        return new Promise((function (e) {
                            a("delVisitedView", t), a("delCachedView", t), e({
                                visitedViews: Object(h["a"])(n.visitedViews),
                                cachedViews: Object(h["a"])(n.cachedViews)
                            })
                        }))
                    }, delVisitedView: function (e, t) {
                        var a = e.commit, n = e.state;
                        return new Promise((function (e) {
                            a("DEL_VISITED_VIEW", t), e(Object(h["a"])(n.visitedViews))
                        }))
                    }, delCachedView: function (e, t) {
                        var a = e.commit, n = e.state;
                        return new Promise((function (e) {
                            a("DEL_CACHED_VIEW", t), e(Object(h["a"])(n.cachedViews))
                        }))
                    }, delOthersViews: function (e, t) {
                        var a = e.dispatch, n = e.state;
                        return new Promise((function (e) {
                            a("delOthersVisitedViews", t), a("delOthersCachedViews", t), e({
                                visitedViews: Object(h["a"])(n.visitedViews),
                                cachedViews: Object(h["a"])(n.cachedViews)
                            })
                        }))
                    }, delOthersVisitedViews: function (e, t) {
                        var a = e.commit, n = e.state;
                        return new Promise((function (e) {
                            a("DEL_OTHERS_VISITED_VIEWS", t), e(Object(h["a"])(n.visitedViews))
                        }))
                    }, delOthersCachedViews: function (e, t) {
                        var a = e.commit, n = e.state;
                        return new Promise((function (e) {
                            a("DEL_OTHERS_CACHED_VIEWS", t), e(Object(h["a"])(n.cachedViews))
                        }))
                    }, delAllViews: function (e, t) {
                        var a = e.dispatch, n = e.state;
                        return new Promise((function (e) {
                            a("delAllVisitedViews", t), a("delAllCachedViews", t), e({
                                visitedViews: Object(h["a"])(n.visitedViews),
                                cachedViews: Object(h["a"])(n.cachedViews)
                            })
                        }))
                    }, delAllVisitedViews: function (e) {
                        var t = e.commit, a = e.state;
                        return new Promise((function (e) {
                            t("DEL_ALL_VISITED_VIEWS"), e(Object(h["a"])(a.visitedViews))
                        }))
                    }, delAllCachedViews: function (e) {
                        var t = e.commit, a = e.state;
                        return new Promise((function (e) {
                            t("DEL_ALL_CACHED_VIEWS"), e(Object(h["a"])(a.cachedViews))
                        }))
                    }, updateVisitedView: function (e, t) {
                        var a = e.commit;
                        a("UPDATE_VISITED_VIEW", t)
                    }
                }
            }, S = g, E = {
                namespaced: !0,
                state: {dialogType: "", dialogVisible: !1},
                getters: {},
                mutations: {
                    SET_DIALOG_TYPE: function (e, t) {
                        e.dialogType = t
                    }, SET_DIALOG_VISIBLE: function (e, t) {
                        e.dialogVisible = t
                    }
                },
                actions: {}
            }, T = E, b = (a("2eeb"), a("08d5"), {nodeList: [], nodeForm: {}, activeSpider: {}}), v = {}, R = {
                SET_NODE_FORM: function (e, t) {
                    e.nodeForm = t
                }, SET_NODE_LIST: function (e, t) {
                    e.nodeList = t
                }, SET_ACTIVE_SPIDER: function (e, t) {
                    e.activeSpider = t
                }, SET_NODE_SYSTEM_INFO: function (e, t) {
                    for (var a = t.id, n = t.systemInfo, r = 0; r < e.nodeList.length; r++) if (e.nodeList[r]._id === a) {
                        e.nodeList[r].systemInfo = n;
                        break
                    }
                }
            }, w = {
                getNodeList: function (e) {
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a, n;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return e.state, a = e.commit, t.next = 3, l["a"].get("/nodes", {});
                                case 3:
                                    n = t.sent, a("SET_NODE_LIST", n.data.data.map((function (e) {
                                        return e.systemInfo = {os: "", arch: "", num_cpu: "", executables: []}, e
                                    })));
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, editNode: function (e) {
                    var t = e.state, a = e.dispatch;
                    l["a"].post("/nodes/".concat(t.nodeForm._id), t.nodeForm).then((function () {
                        a("getNodeList")
                    }))
                }, deleteNode: function (e, t) {
                    e.state;
                    var a = e.dispatch;
                    l["a"]["delete"]("/nodes/".concat(t)).then((function () {
                        a("getNodeList")
                    }))
                }, getNodeData: function (e, t) {
                    e.state;
                    var a = e.commit;
                    l["a"].get("/nodes/".concat(t)).then((function (e) {
                        a("SET_NODE_FORM", e.data.data)
                    }))
                }, getTaskList: function (e, t) {
                    e.state;
                    var a = e.commit;
                    return l["a"].get("/nodes/".concat(t, "/tasks")).then((function (e) {
                        e.data.data && a("task/SET_TASK_LIST", e.data.data.map((function (e) {
                            return e
                        })).sort((function (e, t) {
                            return e.create_ts < t.create_ts ? 1 : -1
                        })), {root: !0})
                    }))
                }, getNodeSystemInfo: function (e, t) {
                    e.state;
                    var a = e.commit;
                    return l["a"].get("/nodes/".concat(t, "/system")).then((function (e) {
                        a("SET_NODE_SYSTEM_INFO", {id: t, systemInfo: e.data.data})
                    }))
                }
            }, O = {namespaced: !0, state: b, getters: v, mutations: R, actions: w},
            L = (a("fe59"), a("f657"), a("9302"), a("e35a"), a("0d7a"), a("08ba"), a("f7f9")), A = {
                spiderList: [],
                spiderTotal: 0,
                allSpiderList: [],
                spiderForm: {},
                spiderScrapySettings: [],
                spiderScrapyItems: [],
                spiderScrapyPipelines: [],
                spiderScrapyErrors: {},
                activeNode: {},
                importForm: {url: "", type: "github"},
                overviewStats: {},
                statusStats: [],
                dailyStats: [],
                nodeStats: [],
                filterSite: "",
                previewCrawlData: [],
                templateList: [],
                fileTree: {},
                configListTs: void 0
            }, k = {}, D = {
                SET_SPIDER_TOTAL: function (e, t) {
                    e.spiderTotal = t
                }, SET_SPIDER_FORM: function (e, t) {
                    e.spiderForm = t
                }, SET_SPIDER_LIST: function (e, t) {
                    e.spiderList = t
                }, SET_ALL_SPIDER_LIST: function (e, t) {
                    e.allSpiderList = t
                }, SET_ACTIVE_NODE: function (e, t) {
                    e.activeNode = t
                }, SET_IMPORT_FORM: function (e, t) {
                    e.importForm = t
                }, SET_OVERVIEW_STATS: function (e, t) {
                    e.overviewStats = t
                }, SET_STATUS_STATS: function (e, t) {
                    e.statusStats = t
                }, SET_DAILY_STATS: function (e, t) {
                    e.dailyStats = t
                }, SET_NODE_STATS: function (e, t) {
                    e.nodeStats = t
                }, SET_FILTER_SITE: function (e, t) {
                    e.filterSite = t
                }, SET_PREVIEW_CRAWL_DATA: function (e, t) {
                    e.previewCrawlData = t
                }, SET_SPIDER_FORM_CONFIG_SETTINGS: function (e, t) {
                    var a = {};
                    t.forEach((function (e) {
                        a[e.name] = e.value
                    })), n["default"].set(e.spiderForm.config, "settings", a)
                }, SET_TEMPLATE_LIST: function (e, t) {
                    e.templateList = t
                }, SET_FILE_TREE: function (e, t) {
                    e.fileTree = t
                }, SET_SPIDER_SCRAPY_SETTINGS: function (e, t) {
                    e.spiderScrapySettings = t
                }, SET_SPIDER_SCRAPY_ITEMS: function (e, t) {
                    e.spiderScrapyItems = t
                }, SET_SPIDER_SCRAPY_PIPELINES: function (e, t) {
                    e.spiderScrapyPipelines = t
                }, SET_CONFIG_LIST_TS: function (e, t) {
                    e.configListTs = t
                }, SET_SPIDER_SCRAPY_ERRORS: function (e, t) {
                    for (var a in t) n["default"].set(e.spiderScrapyErrors, a, t[a])
                }
            }, C = {
                getSpiderList: function (e) {
                    e.state;
                    var t = e.commit, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return l["a"].get("/spiders", a).then((function (e) {
                        t("SET_SPIDER_LIST", e.data.data.list), t("SET_SPIDER_TOTAL", e.data.data.total)
                    }))
                }, getAllSpiderList: function (e) {
                    e.state;
                    var t = e.commit, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return a.page_num = 1, a.page_size = 99999999, l["a"].get("/spiders", a).then((function (e) {
                        t("SET_ALL_SPIDER_LIST", e.data.data.list)
                    }))
                }, editSpider: function (e) {
                    var t = e.state;
                    e.dispatch;
                    return l["a"].post("/spiders/".concat(t.spiderForm._id), t.spiderForm)
                }, deleteSpider: function (e, t) {
                    e.state, e.dispatch;
                    return l["a"]["delete"]("/spiders/".concat(t))
                }, getSpiderData: function (e, t) {
                    e.state;
                    var a = e.commit;
                    return l["a"].get("/spiders/".concat(t)).then((function (e) {
                        var t = e.data.data;
                        a("SET_SPIDER_FORM", t)
                    }))
                }, getSpiderScrapySpiders: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r, s;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return n = e.state, r = e.commit, a.next = 3, l["a"].get("/spiders/".concat(t, "/scrapy/spiders"));
                                case 3:
                                    if (s = a.sent, !s.data.error) {
                                        a.next = 7;
                                        break
                                    }
                                    return r("SET_SPIDER_SCRAPY_ERRORS", {spiders: s.data.error}), a.abrupt("return");
                                case 7:
                                    n.spiderForm.spider_names = s.data.data, r("SET_SPIDER_FORM", n.spiderForm), r("SET_SPIDER_SCRAPY_ERRORS", {spiders: ""});
                                case 10:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, getSpiderScrapySettings: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, n = e.commit, a.next = 3, l["a"].get("/spiders/".concat(t, "/scrapy/settings"));
                                case 3:
                                    if (r = a.sent, !r.data.error) {
                                        a.next = 7;
                                        break
                                    }
                                    return n("SET_SPIDER_SCRAPY_ERRORS", {settings: r.data.error}), a.abrupt("return");
                                case 7:
                                    n("SET_SPIDER_SCRAPY_SETTINGS", r.data.data.map((function (e) {
                                        var t = e.key, a = e.value, n = Object(L["a"])(a);
                                        return "object" === n && (n = Array.isArray(a) ? "array" : "object"), {
                                            key: t,
                                            value: a,
                                            type: n
                                        }
                                    }))), n("SET_SPIDER_SCRAPY_ERRORS", {settings: ""});
                                case 9:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, saveSpiderScrapySettings: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return n = e.state, a.abrupt("return", l["a"].post("/spiders/".concat(t, "/scrapy/settings"), n.spiderScrapySettings));
                                case 2:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, getSpiderScrapyItems: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r, s;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, n = e.commit, a.next = 3, l["a"].get("/spiders/".concat(t, "/scrapy/items"));
                                case 3:
                                    if (r = a.sent, !r.data.error) {
                                        a.next = 7;
                                        break
                                    }
                                    return n("SET_SPIDER_SCRAPY_ERRORS", {items: r.data.error}), a.abrupt("return");
                                case 7:
                                    s = 0, n("SET_SPIDER_SCRAPY_ITEMS", r.data.data.map((function (e) {
                                        return e.id = s++, e.label = e.name, e.level = 1, e.isEdit = !1, e.children = e.fields.map((function (e) {
                                            return {id: s++, label: e, level: 2, isEdit: !1}
                                        })), e
                                    }))), n("SET_SPIDER_SCRAPY_ERRORS", {items: ""});
                                case 10:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, saveSpiderScrapyItems: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return n = e.state, a.abrupt("return", l["a"].post("/spiders/".concat(t, "/scrapy/items"), n.spiderScrapyItems.map((function (e) {
                                        return e.name = e.label, e.fields = e.children.map((function (e) {
                                            return e.label
                                        })), e
                                    }))));
                                case 2:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, getSpiderScrapyPipelines: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, n = e.commit, a.next = 3, l["a"].get("/spiders/".concat(t, "/scrapy/pipelines"));
                                case 3:
                                    if (r = a.sent, !r.data.error) {
                                        a.next = 7;
                                        break
                                    }
                                    return n("SET_SPIDER_SCRAPY_ERRORS", {pipelines: r.data.error}), a.abrupt("return");
                                case 7:
                                    n("SET_SPIDER_SCRAPY_PIPELINES", r.data.data), n("SET_SPIDER_SCRAPY_ERRORS", {pipelines: ""});
                                case 9:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, saveSpiderScrapyPipelines: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return n = e.state, a.abrupt("return", l["a"].post("/spiders/".concat(t, "/scrapy/pipelines"), n.spiderScrapyPipelines));
                                case 2:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, getSpiderScrapySpiderFilepath: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, e.commit, n = t.id, r = t.spiderName, a.abrupt("return", l["a"].get("/spiders/".concat(n, "/scrapy/spider/filepath"), {spider_name: r}));
                                case 3:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, addSpiderScrapySpider: function (e, t) {
                    e.state;
                    var a = t.id, n = t.form;
                    return l["a"].put("/spiders/".concat(a, "/scrapy/spiders"), n)
                }, crawlSpider: function (e, t) {
                    e.state, e.dispatch;
                    var a = t.spiderId, n = t.runType, r = t.nodeIds, s = t.param;
                    return l["a"].put("/tasks", {spider_id: a, run_type: n, node_ids: r, param: s})
                }, crawlSelectedSpiders: function (e, t) {
                    e.state, e.dispatch;
                    var a = t.taskParams, n = t.runType, r = t.nodeIds;
                    return l["a"].post("/spiders-run", {task_params: a, run_type: n, node_ids: r})
                }, getTaskList: function (e, t) {
                    e.state;
                    var a = e.commit;
                    return l["a"].get("/spiders/".concat(t, "/tasks")).then((function (e) {
                        a("task/SET_TASK_LIST", e.data.data ? e.data.data.map((function (e) {
                            return e
                        })).sort((function (e, t) {
                            return e.create_ts < t.create_ts ? 1 : -1
                        })) : [], {root: !0})
                    }))
                }, getDir: function (e, t) {
                    var a = e.state, n = e.commit, r = a.spiderForm._id;
                    return l["a"].get("/spiders/".concat(r, "/dir")).then((function (e) {
                        n("")
                    }))
                }, importGithub: function (e) {
                    var t = e.state, a = t.importForm.url;
                    return l["a"].post("/spiders/import/github", {url: a})
                }, getSpiderStats: function (e) {
                    var t = e.state, a = e.commit;
                    return l["a"].get("/spiders/".concat(t.spiderForm._id, "/stats")).then((function (e) {
                        a("SET_OVERVIEW_STATS", e.data.data.overview), a("SET_DAILY_STATS", e.data.data.daily)
                    }))
                }, getPreviewCrawlData: function (e) {
                    var t = e.state, a = e.commit;
                    return l["a"].post("/spiders/".concat(t.spiderForm._id, "/preview_crawl")).then((function (e) {
                        a("SET_PREVIEW_CRAWL_DATA", e.data.items)
                    }))
                }, extractFields: function (e) {
                    var t = e.state;
                    e.commit;
                    return l["a"].post("/spiders/".concat(t.spiderForm._id, "/extract_fields"))
                }, postConfigSpiderConfig: function (e) {
                    var t = e.state;
                    return l["a"].post("/config_spiders/".concat(t.spiderForm._id, "/config"), t.spiderForm.config)
                }, saveConfigSpiderSpiderfile: function (e) {
                    var t = e.state, a = e.rootState, n = a.file.fileContent;
                    return l["a"].post("/config_spiders/".concat(t.spiderForm._id, "/spiderfile"), {content: n})
                }, addConfigSpider: function (e) {
                    var t = e.state;
                    return l["a"].put("/config_spiders", t.spiderForm)
                }, addSpider: function (e) {
                    var t = e.state;
                    return l["a"].put("/spiders", t.spiderForm)
                }, getTemplateList: function (e) {
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a, n;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return e.state, a = e.commit, t.next = 3, l["a"].get("/config_spiders_templates");
                                case 3:
                                    n = t.sent, a("SET_TEMPLATE_LIST", n.data.data);
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, getScheduleList: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r, s, i;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, n = e.commit, r = t.id, a.next = 4, l["a"].get("/spiders/".concat(r, "/schedules"));
                                case 4:
                                    s = a.sent, i = s.data.data, i && (i = i.map((function (e) {
                                        var t = e.cron.split(" ");
                                        return t.splice(0, 1), e.cron = t.join(" "), e
                                    }))), n("schedule/SET_SCHEDULE_LIST", i, {root: !0});
                                case 8:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, getFileTree: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r, s, i;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return n = e.state, r = e.commit, s = t ? t.id : n.spiderForm._id, a.next = 4, l["a"].get("/spiders/".concat(s, "/file/tree"));
                                case 4:
                                    i = a.sent, r("SET_FILE_TREE", i.data.data);
                                case 6:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, setProjects: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, n = t.projectId, r = t.spiderIds, a.next = 4, l["a"].post("/spiders-set-projects", {
                                        project_id: n,
                                        spider_ids: r
                                    });
                                case 4:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }
            }, I = {namespaced: !0, state: A, getters: k, mutations: D, actions: C}, y = {deployList: []}, N = {}, P = {
                SET_DEPLOY_LIST: function (e, t) {
                    e.deployList = t
                }
            }, M = {
                getDeployList: function (e) {
                    e.state;
                    var t = e.commit;
                    l["a"].get("/deploys").then((function (e) {
                        t("SET_DEPLOY_LIST", e.data.items.map((function (e) {
                            return e
                        })).sort((function (e, t) {
                            return e.finish_ts < t.finish_ts ? 1 : -1
                        })))
                    }))
                }
            }, x = {namespaced: !0, state: y, getters: N, mutations: P, actions: M}, U = (a("96db"), a("f1a9"), a("e793")),
            F = {
                taskList: [],
                taskListTotalCount: 0,
                taskForm: {},
                taskResultsData: [],
                taskResultsColumns: [],
                taskResultsTotalCount: 0,
                filter: {node_id: "", spider_id: "", status: "", schedule_id: "", type: "spider"},
                pageNum: 1,
                pageSize: 10,
                currentLogIndex: 0,
                logKeyword: "",
                errorLogData: [],
                isLogAutoScroll: !1,
                isLogAutoFetch: !1,
                isLogFetchLoading: !1,
                taskLog: [],
                taskLogTotal: 0,
                taskLogPage: 1,
                taskLogPageSize: 5e3,
                activeErrorLogItem: {},
                resultsPageNum: 1,
                resultsPageSize: 10,
                batchCrawlList: []
            }, j = {
                taskResultsColumns: function (e) {
                    if (!e.taskResultsData || !e.taskResultsData.length) return [];
                    var t = [], a = e.taskResultsData[0];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && t.push(n);
                    return t
                }, logData: function (e) {
                    var t = e.taskLog.map((function (t, a) {
                        return Object(U["a"])({index: a + 1, active: e.currentLogIndex === a + 1, data: t.msg}, t)
                    }));
                    return e.taskForm && "running" === e.taskForm.status && (t.push({
                        index: t.length + 1,
                        data: "###LOG_END###"
                    }), t.push({index: t.length + 1, data: ""})), t
                }, errorLogData: function (e, t) {
                    var a = t.logData.map((function (e) {
                        return e._id
                    }));
                    return e.errorLogData.map((function (e) {
                        var n = a.indexOf(e._id);
                        return e.index = t.logData[n].index, e
                    }))
                }
            }, V = {
                SET_TASK_FORM: function (e, t) {
                    e.taskForm = t
                }, SET_TASK_LIST: function (e, t) {
                    e.taskList = t
                }, SET_TASK_LOG: function (e, t) {
                    e.taskLog = t
                }, SET_TASK_LOG_TOTAL: function (e, t) {
                    e.taskLogTotal = t
                }, SET_CURRENT_LOG_INDEX: function (e, t) {
                    e.currentLogIndex = t
                }, SET_TASK_RESULTS_DATA: function (e, t) {
                    e.taskResultsData = t
                }, SET_TASK_RESULTS_COLUMNS: function (e, t) {
                    e.taskResultsColumns = t
                }, SET_PAGE_NUM: function (e, t) {
                    e.pageNum = t
                }, SET_PAGE_SIZE: function (e, t) {
                    e.pageSize = t
                }, SET_TASK_LIST_TOTAL_COUNT: function (e, t) {
                    e.taskListTotalCount = t
                }, SET_RESULTS_PAGE_NUM: function (e, t) {
                    e.resultsPageNum = t
                }, SET_RESULTS_PAGE_SIZE: function (e, t) {
                    e.resultsPageSize = t
                }, SET_TASK_RESULTS_TOTAL_COUNT: function (e, t) {
                    e.taskResultsTotalCount = t
                }, SET_LOG_KEYWORD: function (e, t) {
                    e.logKeyword = t
                }, SET_ERROR_LOG_DATA: function (e, t) {
                    e.errorLogData = t
                }, SET_TASK_LOG_PAGE: function (e, t) {
                    e.taskLogPage = t
                }, SET_TASK_LOG_PAGE_SIZE: function (e, t) {
                    e.taskLogPageSize = t
                }, SET_IS_LOG_AUTO_SCROLL: function (e, t) {
                    e.isLogAutoScroll = t
                }, SET_IS_LOG_AUTO_FETCH: function (e, t) {
                    e.isLogAutoFetch = t
                }, SET_IS_LOG_FETCH_LOADING: function (e, t) {
                    e.isLogFetchLoading = t
                }, SET_ACTIVE_ERROR_LOG_ITEM: function (e, t) {
                    e.activeErrorLogItem = t
                }, SET_BATCH_CRAWL_LIST: function (e, t) {
                    e.batchCrawlList = t
                }, SET_IS_BATCH_CRAWL_DIALOG_VISIBLE: function (e, t) {
                    e.isBatchCrawlDialogVisible = t
                }
            }, H = {
                getTaskData: function (e, t) {
                    e.state;
                    var a = e.dispatch, n = e.commit;
                    return l["a"].get("/tasks/".concat(t)).then((function (e) {
                        var t = e.data.data;
                        n("SET_TASK_FORM", t), "spider" === t.type && a("spider/getSpiderData", t.spider_id, {root: !0}), t.node_id && "000000000000000000000000" !== t.node_id && a("node/getNodeData", t.node_id, {root: !0})
                    }))
                }, getTaskList: function (e) {
                    var t = e.state, a = e.commit;
                    return l["a"].get("/tasks", {
                        page_num: t.pageNum,
                        page_size: t.pageSize,
                        node_id: t.filter.node_id || void 0,
                        spider_id: t.filter.spider_id || void 0,
                        status: t.filter.status || void 0,
                        schedule_id: t.filter.schedule_id || void 0,
                        type: t.filter.type || void 0
                    }).then((function (e) {
                        a("SET_TASK_LIST", e.data.data || []), a("SET_TASK_LIST_TOTAL_COUNT", e.data.total)
                    }))
                }, deleteTask: function (e, t) {
                    e.state;
                    var a = e.dispatch;
                    return l["a"]["delete"]("/tasks/".concat(t)).then((function () {
                        a("getTaskList")
                    }))
                }, deleteTaskMultiple: function (e, t) {
                    e.state;
                    return l["a"]["delete"]("/tasks", {ids: t})
                }, restartTask: function (e, t) {
                    e.state;
                    var a = e.dispatch;
                    return l["a"].post("/tasks/".concat(t, "/restart")).then((function () {
                        a("getTaskList")
                    }))
                }, getTaskLog: function (e, t) {
                    var a = e.state, n = e.commit, r = t.id, s = t.keyword;
                    return l["a"].get("/tasks/".concat(r, "/log"), {
                        keyword: s,
                        page_num: a.taskLogPage,
                        page_size: a.taskLogPageSize
                    }).then((function (e) {
                        n("SET_TASK_LOG", e.data.data || []), n("SET_TASK_LOG_TOTAL", e.data.total || 0), a.isLogAutoScroll && a.taskLogTotal > a.taskLogPage * a.taskLogPageSize && n("SET_TASK_LOG_PAGE", Math.ceil(a.taskLogTotal / a.taskLogPageSize))
                    }))
                }, getTaskErrorLog: function (e, t) {
                    e.state;
                    var a = e.commit;
                    return l["a"].get("/tasks/".concat(t, "/error-log"), {}).then((function (e) {
                        a("SET_ERROR_LOG_DATA", e.data.data || [])
                    }))
                }, getTaskResults: function (e, t) {
                    var a = e.state, n = e.commit;
                    return l["a"].get("/tasks/".concat(t, "/results"), {
                        page_num: a.resultsPageNum,
                        page_size: a.resultsPageSize
                    }).then((function (e) {
                        n("SET_TASK_RESULTS_DATA", e.data.data), n("SET_TASK_RESULTS_TOTAL_COUNT", e.data.total)
                    }))
                }, getTaskResultExcel: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r, s, i;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, e.commit, a.next = 3, l["a"].get("/tasks/" + t + "/results/download", {}, {responseType: "blob"});
                                case 3:
                                    n = a.sent, r = n.data, s = window.URL.createObjectURL(new Blob([r])), i = document.createElement("a"), i.href = s, i.setAttribute("download", "data.csv"), document.body.appendChild(i), i.click(), i.remove();
                                case 12:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, cancelTask: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        var n, r;
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.state, n = e.dispatch, a.next = 3, l["a"].post("/tasks/".concat(t, "/cancel"));
                                case 3:
                                    return r = a.sent, n("getTaskData", t), a.abrupt("return", r);
                                case 6:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, cancelTaskMultiple: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.dispatch, a.next = 3, l["a"].post("/tasks-cancel", {ids: t});
                                case 3:
                                    return a.abrupt("return", a.sent);
                                case 4:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }, restartTaskMultiple: function (e, t) {
                    return Object(u["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function (a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    return e.dispatch, a.next = 3, l["a"].post("/tasks-restart", {ids: t});
                                case 3:
                                    return a.abrupt("return", a.sent);
                                case 4:
                                case"end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }
            }, G = {namespaced: !0, state: F, getters: j, mutations: V, actions: H},
            B = {currentPath: "", fileList: [], fileContent: ""}, $ = {}, Y = {
                SET_CURRENT_PATH: function (e, t) {
                    e.currentPath = t
                }, SET_FILE_LIST: function (e, t) {
                    e.fileList = t
                }, SET_FILE_CONTENT: function (e, t) {
                    e.fileContent = t
                }
            }, W = {
                getFileList: function (e, t) {
                    var a = e.commit, n = e.rootState, r = t.path, s = n.spider.spiderForm._id;
                    return a("SET_CURRENT_PATH", r), l["a"].get("/spiders/".concat(s, "/dir"), {path: r}).then((function (e) {
                        e.data.data || (e.data.data = []), a("SET_FILE_LIST", e.data.data.sort((function (e, t) {
                            return e.name > t.name ? -1 : 1
                        })).sort((function (e, t) {
                            return e.is_dir > t.is_dir ? -1 : 1
                        })))
                    }))
                }, getFileContent: function (e, t) {
                    var a = e.commit, n = e.rootState, r = t.path, s = n.spider.spiderForm._id;
                    return l["a"].get("/spiders/".concat(s, "/file"), {path: r}).then((function (e) {
                        a("SET_FILE_CONTENT", e.data.data)
                    }))
                }, saveFileContent: function (e, t) {
                    var a = e.state, n = e.rootState, r = t.path, s = n.spider.spiderForm._id;
                    return l["a"].post("/spiders/".concat(s, "/file"), {path: r, content: a.fileContent})
                }, addFile: function (e, t) {
                    var a = e.rootState, n = t.path, r = a.spider.spiderForm._id;
                    return l["a"].put("/spiders/".concat(r, "/file"), {path: n})
                }, addDir: function (e, t) {
                    var a = e.rootState, n = t.path, r = a.spider.spiderForm._id;
                    return l["a"].put("/spiders/".concat(r, "/dir"), {path: n})
                }, deleteFile: function (e, t) {
                    var a = e.rootState, n = t.path, r = a.spider.spiderForm._id;
                    return l["a"]["delete"]("/spiders/".concat(r, "/file"), {path: n})
                }, renameFile: function (e, t) {
                    var a = e.rootState, n = t.path, r = t.newPath, s = a.spider.spiderForm._id;
                    return l["a"].post("/spiders/".concat(s, "/file/rename"), {path: n, new_path: r})
                }
            }, z = {namespaced: !0, state: B, getters: $, mutations: Y, actions: W},
            K = {scheduleList: [], scheduleForm: {node_ids: []}, batchScheduleList: []}, X = {}, q = {
                SET_SCHEDULE_LIST: function (e, t) {
                    e.scheduleList = t
                }, SET_SCHEDULE_FORM: function (e, t) {
                    e.scheduleForm = t
                }, SET_BATCH_SCHEDULE_LIST: function (e, t) {
                    e.batchScheduleList = t
                }
            }, J = {
                getScheduleList: function (e) {
                    e.state;
                    var t = e.commit;
                    l["a"].get("/schedules").then((function (e) {
                        e.data.data || (e.data.data = []), t("SET_SCHEDULE_LIST", e.data.data.map((function (e) {
                            var t = e.cron.split(" ");
                            return t.splice(0, 1), e.cron = t.join(" "), e
                        })))
                    }))
                }, addSchedule: function (e) {
                    var t = e.state;
                    l["a"].put("/schedules", t.scheduleForm)
                }, editSchedule: function (e, t) {
                    var a = e.state;
                    l["a"].post("/schedules/".concat(t), a.scheduleForm)
                }, removeSchedule: function (e, t) {
                    e.state;
                    l["a"]["delete"]("/schedules/".concat(t))
                }, enableSchedule: function (e, t) {
                    e.state, e.dispatch;
                    return l["a"].post("/schedules/".concat(t, "/enable"))
                }, disableSchedule: function (e, t) {
                    e.state, e.dispatch;
                    return l["a"].post("/schedules/".concat(t, "/disable"))
                }
            }, Z = {namespaced: !0, state: K, getters: X, mutations: q, actions: J},
            Q = {lang: window.localStorage.getItem("lang") || "zh"}, ee = {
                lang: function (e) {
                    return "en" === e.lang ? "English" : "zh" === e.lang ? "中文" : e.lang
                }
            }, te = {
                SET_LANG: function (e, t) {
                    e.lang = t
                }
            }, ae = {}, ne = {namespaced: !0, state: Q, getters: ee, mutations: te, actions: ae}, re = {
                siteList: [],
                mainCategoryList: [],
                categoryList: [],
                filter: {mainCategory: void 0, category: void 0},
                keyword: "",
                pageNum: 1,
                pageSize: 10,
                totalCount: 0
            }, se = {}, ie = {
                SET_KEYWORD: function (e, t) {
                    e.keyword = t
                }, SET_SITE_LIST: function (e, t) {
                    e.siteList = t
                }, SET_PAGE_NUM: function (e, t) {
                    e.pageNum = t
                }, SET_PAGE_SIZE: function (e, t) {
                    e.pageSize = t
                }, SET_TOTAL_COUNT: function (e, t) {
                    e.totalCount = t
                }, SET_MAIN_CATEGORY_LIST: function (e, t) {
                    e.mainCategoryList = t
                }, SET_CATEGORY_LIST: function (e, t) {
                    e.categoryList = t
                }
            }, oe = {
                editSite: function (e, t) {
                    e.state, e.dispatch;
                    var a = t.id, n = t.category;
                    return l["a"].post("/sites/".concat(a), {category: n})
                }, getSiteList: function (e) {
                    var t = e.state, a = e.commit;
                    return l["a"].get("/sites", {
                        page_num: t.pageNum,
                        page_size: t.pageSize,
                        keyword: t.keyword || void 0,
                        filter: {main_category: t.filter.mainCategory || void 0, category: t.filter.category || void 0}
                    }).then((function (e) {
                        a("SET_SITE_LIST", e.data.items), a("SET_TOTAL_COUNT", e.data.total_count)
                    }))
                }, getMainCategoryList: function (e) {
                    e.state;
                    var t = e.commit;
                    return l["a"].get("/sites/get/get_main_category_list").then((function (e) {
                        t("SET_MAIN_CATEGORY_LIST", e.data.items)
                    }))
                }, getCategoryList: function (e) {
                    var t = e.state, a = e.commit;
                    return l["a"].get("/sites/get/get_category_list", {main_category: t.filter.mainCategory || void 0}).then((function (e) {
                        a("SET_CATEGORY_LIST", e.data.items)
                    }))
                }
            }, ce = {namespaced: !0, state: re, getters: se, mutations: ie, actions: oe}, ue = {}, le = {
                useStats: function () {
                    return localStorage.getItem("useStats")
                }
            }, de = {}, pe = {}, fe = {state: ue, getters: le, mutations: de, actions: pe}, he = {setting: {}}, me = {},
            _e = {
                SET_SETTING: function (e, t) {
                    e.setting = t
                }
            }, ge = {
                getSetting: function (e) {
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a, n, r;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.commit, t.next = 3, l["a"].get("/setting");
                                case 3:
                                    n = t.sent, a("SET_SETTING", n.data.data), sessionStorage.setItem("pro", n.data.data.pro ? "1" : "0"), r = n.data.data.enable_tutorial, localStorage.getItem("enableTutorial") || localStorage.setItem("enableTutorial", "Y" === r ? "1" : "0");
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }, Se = {namespaced: !0, state: he, getters: me, mutations: _e, actions: ge},
            Ee = {version: "", latestRelease: {name: "", body: ""}}, Te = {}, be = {
                SET_VERSION: function (e, t) {
                    e.version = t
                }, SET_LATEST_RELEASE: function (e, t) {
                    e.latestRelease = t
                }
            }, ve = {
                getLatestRelease: function (e) {
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a, n;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.commit, t.next = 3, l["a"].get("/releases/latest");
                                case 3:
                                    n = t.sent, n.data.error || a("SET_LATEST_RELEASE", n.data.data);
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }, Re = {namespaced: !0, state: Ee, getters: Te, mutations: be, actions: ve}, we = {
                tourFinishSteps: {
                    "spider-list": 3,
                    "spider-list-add": 8,
                    "spider-detail": 9,
                    "spider-detail-config": 12,
                    "task-list": 4,
                    "task-detail": 7,
                    "node-detail": 4,
                    "schedule-list": 1,
                    "schedule-list-add": 8,
                    setting: 2
                }, tourSteps: {}
            }, Oe = {}, Le = {
                SET_TOUR_STEP: function (e, t) {
                    var a = t.tourName, n = t.step;
                    e.tourSteps[a] = n
                }
            }, Ae = {}, ke = {namespaced: !0, state: we, getters: Oe, mutations: Le, actions: Ae},
            De = {projectForm: {}, projectList: [], projectTags: []}, Ce = {}, Ie = {
                SET_PROJECT_FORM: function (e, t) {
                    e.projectForm = t
                }, SET_PROJECT_LIST: function (e, t) {
                    e.projectList = t
                }, SET_PROJECT_TAGS: function (e, t) {
                    e.projectTags = t
                }
            }, ye = {
                getProjectList: function (e, t) {
                    e.state;
                    var a = e.commit;
                    return l["a"].get("/projects", t).then((function (e) {
                        e.data.data && a("SET_PROJECT_LIST", e.data.data.map((function (e) {
                            return e.spiders || (e.spiders = []), e
                        })))
                    }))
                }, getProjectTags: function (e) {
                    e.state;
                    var t = e.commit;
                    return l["a"].get("/projects/tags").then((function (e) {
                        e.data.data && t("SET_PROJECT_TAGS", e.data.data.map((function (e) {
                            return e.tag
                        })))
                    }))
                }, addProject: function (e) {
                    var t = e.state;
                    return l["a"].put("/projects", t.projectForm)
                }, editProject: function (e, t) {
                    var a = e.state;
                    return l["a"].post("/projects/".concat(t), a.projectForm)
                }, removeProject: function (e, t) {
                    e.state;
                    return l["a"]["delete"]("/projects/".concat(t))
                }
            }, Ne = {namespaced: !0, state: De, getters: Ce, mutations: Ie, actions: ye},
            Pe = (a("d575"), a("f4e3"), {docData: []}), Me = {}, xe = {
                SET_DOC_DATA: function (e, t) {
                    e.docData = t
                }
            }, Ue = {
                getDocData: function (e) {
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a, n, r, s, i, o, c;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.commit, t.next = 3, l["a"].get("/docs");
                                case 3:
                                    for (i in n = t.sent, r = JSON.parse(n.data.data.string), s = {}, r) Object.prototype.hasOwnProperty.call(r, i) && (o = r[i], i.match(/\/$/) ? (s[i] = o, s[i].children = []) : i.match(/\.html$/) && (c = i.split("/")[0] + "/", s[c].children.push(o)));
                                    a("SET_DOC_DATA", Object.values(s).map((function (e) {
                                        return e.level = 1, e.label = e.title, e.fullUrl = "http://docs.crawlab.cn/" + e.url, e.children && (e.children = e.children.map((function (e) {
                                            return e.level = 2, e.label = e.title, e.fullUrl = "http://docs.crawlab.cn/" + e.url, e
                                        }))), e
                                    })));
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }, Fe = {namespaced: !0, state: Pe, getters: Me, mutations: xe, actions: Ue}, je = {metrics: []}, Ve = {
                mongoMetrics: function (e) {
                    return e.metrics.filter((function (e) {
                        return !!e.match(/^mongo_stats/)
                    }))
                }, redisMetrics: function (e) {
                    return e.metrics.filter((function (e) {
                        return !!e.match(/^redis_stats/)
                    }))
                }, nodeMetrics: function (e) {
                    return e.metrics.filter((function (e) {
                        return !!e.match(/^node_stats/)
                    }))
                }
            }, He = {
                SET_METRICS: function (e, t) {
                    e.metrics = t
                }
            }, Ge = {
                getMetrics: function (e) {
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a, n;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.commit, t.next = 3, l["a"].get("/monitor/prom/metrics");
                                case 3:
                                    n = t.sent, a("SET_METRICS", n.data.data);
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }, Be = {namespaced: !0, state: je, getters: Ve, mutations: He, actions: Ge}, $e = {dataSourceList: []},
            Ye = {}, We = {
                SET_DATA_SOURCE_LIST: function (e, t) {
                    e.dataSourceList = t
                }
            }, ze = {
                getDataSourceList: function (e) {
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a, n;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.commit, t.next = 3, l["a"].get("/datasources");
                                case 3:
                                    n = t.sent, a("SET_DATA_SOURCE_LIST", n.data.data);
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }, Ke = {namespaced: !0, state: $e, getters: Ye, mutations: We, actions: ze}, Xe = {
                sidebar: function (e) {
                    return e.app.sidebar
                }, device: function (e) {
                    return e.app.device
                }, token: function (e) {
                    return e.user.token
                }, avatar: function (e) {
                    return e.user.avatar
                }, name: function (e) {
                    return e.user.name
                }, roles: function (e) {
                    return e.user.roles
                }
            }, qe = Xe;
        n["default"].use(r["a"]);
        var Je = new r["a"].Store({
            modules: {
                app: c,
                user: f,
                tagsView: S,
                dialogView: T,
                node: O,
                spider: I,
                deploy: x,
                task: G,
                file: z,
                schedule: Z,
                lang: ne,
                site: ce,
                setting: Se,
                version: Re,
                tour: ke,
                project: Ne,
                doc: Fe,
                monitor: Be,
                dataSource: Ke,
                stats: fe
            }, getters: qe
        });
        t["a"] = Je
    }, 4387: function (e, t, a) {
    }, "47f1": function (e, t, a) {
        e.exports = a.p + "img/table.01f69522.svg"
    }, 4844: function (e, t, a) {
    }, "4d21": function (e, t, a) {
        "use strict";
        var n = a("1a97"), r = a.n(n);
        r.a
    }, "4df5": function (e, t, a) {
        e.exports = a.p + "img/eye.e4fe315c.svg"
    }, "51ff": function (e, t, a) {
        var n = {
            "./example.svg": "30c3",
            "./eye-open.svg": "d7ec",
            "./eye.svg": "4df5",
            "./form.svg": "eb1b",
            "./link.svg": "18f0",
            "./nested.svg": "dcf8",
            "./password.svg": "2a3d",
            "./table.svg": "47f1",
            "./tree.svg": "93cd",
            "./user.svg": "b3b5"
        };

        function r(e) {
            var t = s(e);
            return a(t)
        }

        function s(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }

        r.keys = function () {
            return Object.keys(n)
        }, r.resolve = s, e.exports = r, r.id = "51ff"
    }, 5287: function (e, t, a) {
    }, "544b": function (e, t, a) {
        "use strict";
        var n = a("6700"), r = a.n(n);
        r.a
    }, "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("a133"), a("ed0d"), a("f09c"), a("e117");
        var n = a("a593"), r = (a("9f35"), a("b705")), s = a.n(r), i = (a("3880"), a("255a")), o = a.n(i),
            c = (a("b20f"), a("d3c5"), a("c644")), u = a("118d"), l = a("69c0"), d = a("2fed"), p = a("315f"),
            f = (a("b7ea"), a("4724")), h = (a("5f8d"), a("c1a6"), function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "app"}}, [a("router-view")], 1)
            }), m = [], _ = (a("6a61"), a("cf7f")), g = a("e793"), S = a("9f3a"), E = a("5f87"), T = {
                name: "App",
                data: function () {
                    return {msgPopup: void 0}
                },
                computed: Object(g["a"])(Object(g["a"])({}, Object(S["c"])("setting", ["setting"])), {}, {
                    useStats: function () {
                        return localStorage.getItem("useStats")
                    }, uid: function () {
                        return localStorage.getItem("uid")
                    }, sid: function () {
                        return sessionStorage.getItem("sid")
                    }
                }),
                mounted: function () {
                    var e = this;
                    return Object(_["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (void 0 !== e.uid && null !== e.uid || localStorage.setItem("uid", e.$utils.encrypt.UUID()), void 0 !== e.sid && null !== e.sid || sessionStorage.setItem("sid", e.$utils.encrypt.UUID()), !Object(E["a"])()) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 5, e.$store.dispatch("user/getInfo");
                                case 5:
                                    return a = document.querySelector("#loading-placeholder"), a.remove(), t.next = 9, e.$request.put("/actions", {type: "visit"});
                                case 9:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: {}
            }, b = T, v = (a("034f"), a("9ca4")), R = Object(v["a"])(b, h, m, !1, null, null, null), w = R.exports,
            O = a("4360"), L = a("a18c"), A = (a("2eeb"), a("e18c"), a("af86"), function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("svg", e._g({
                    class: e.svgClass,
                    attrs: {"aria-hidden": "true"}
                }, e.$listeners), [a("use", {attrs: {"xlink:href": e.iconName}})])
            }), k = [], D = {
                name: "SvgIcon",
                props: {iconClass: {type: String, required: !0}, className: {type: String, default: ""}},
                computed: {
                    iconName: function () {
                        return "#icon-".concat(this.iconClass)
                    }, svgClass: function () {
                        return this.className ? "svg-icon " + this.className : "svg-icon"
                    }
                }
            }, C = D, I = (a("99a2"), Object(v["a"])(C, A, k, !1, null, "f38522a0", null)), y = I.exports;
        n["default"].component("svg-icon", y);
        var N = function (e) {
            return e.keys().map(e)
        }, P = a("51ff");
        N(P);
        var M = a("38bc"), x = a.n(M);
        a("70e7");
        L["a"].afterEach((function () {
            x.a.done()
        }));
        var U = a("0c6d"), F = a("12cb"), j = a("7b99"), V = (a("9302"), {
                UUID: function () {
                    for (var e = [], t = "0123456789abcdef", a = 0; a < 36; a++) e[a] = t.substr(Math.floor(16 * Math.random()), 1);
                    return e[14] = "4", e[8] = e[13] = e[18] = e[23] = "-", e.join("")
                }
            }), H = {
                isFinishedTour: function (e) {
                    if (!localStorage.getItem("tour")) return localStorage.setItem("tour", JSON.stringify({})), !1;
                    var t;
                    try {
                        t = JSON.parse(localStorage.getItem("tour"))
                    } catch (a) {
                        return localStorage.setItem("tour", JSON.stringify({})), !1
                    }
                    return !!t[e]
                }, startTour: function (e, t) {
                    "0" !== localStorage.getItem("enableTutorial") && (e.$tours[t].start(), e.$st.sendEv("教程", "开始", t))
                }, finishTour: function (e) {
                    var t;
                    try {
                        t = JSON.parse(localStorage.getItem("tour"))
                    } catch (r) {
                        localStorage.setItem("tour", JSON.stringify({})), t = {}
                    }
                    t[e] = 1, localStorage.setItem("tour", JSON.stringify(t));
                    var a = O["a"].state.tour.tourFinishSteps[e], n = O["a"].state.tour.tourSteps[e];
                    n === a ? j["a"].sendEv("教程", "完成", e) : j["a"].sendEv("教程", "跳过", e)
                }, nextStep: function (e, t) {
                    O["a"].commit("tour/SET_TOUR_STEP", {tourName: e, step: t + 1}), j["a"].sendEv("教程", "下一步", e)
                }, prevStep: function (e, t) {
                    O["a"].commit("tour/SET_TOUR_STEP", {tourName: e, step: t - 1}), j["a"].sendEv("教程", "上一步", e)
                }, getOptions: function (e) {
                    return {
                        labels: {
                            buttonSkip: F["a"].t("Skip"),
                            buttonPrevious: F["a"].t("Previous"),
                            buttonNext: F["a"].t("Next"),
                            buttonStop: F["a"].t("Finish")
                        }, highlight: e
                    }
                }
            }, G = (a("84c2"), a("e35a"), a("1c2e"), " :,."), B = {
                errorRegex: new RegExp("(?:[".concat(G, "]|^)((?:error|exception|traceback)s?)(?:[").concat(G, "]|$)"), "gi"),
                errorWhitelist: ["log_count/ERROR"]
            }, $ = (a("513c"), {
                importantSettingParamNames: {
                    BOT_NAME: String,
                    SPIDER_MODULES: Array,
                    NEWSPIDER_MODULE: String,
                    USER_AGENT: String,
                    ROBOTSTXT_OBEY: Boolean,
                    CONCURRENT_REQUESTS: Number,
                    DOWNLOAD_DELAY: Number,
                    CONCURRENT_REQUESTS_PER_DOMAIN: Number,
                    CONCURRENT_REQUESTS_PER_IP: Number,
                    COOKIES_ENABLED: Boolean,
                    TELNETCONSOLE_ENABLED: Boolean,
                    DEFAULT_REQUEST_HEADERS: Object,
                    SPIDER_MIDDLEWARES: Object,
                    DOWNLOADER_MIDDLEWARES: Object,
                    EXTENSIONS: Object,
                    ITEM_PIPELINES: Object,
                    AUTOTHROTTLE_ENABLED: Boolean,
                    AUTOTHROTTLE_START_DELAY: Number,
                    AUTOTHROTTLE_MAX_DELAY: Number,
                    AUTOTHROTTLE_TARGET_CONCURRENCY: Number,
                    AUTOTHROTTLE_DEBUG: Boolean,
                    HTTPCACHE_ENABLED: Boolean,
                    HTTPCACHE_EXPIRATION_SECS: Number,
                    HTTPCACHE_DIR: String,
                    HTTPCACHE_IGNORE_HTTP_CODES: Array,
                    HTTPCACHE_STORAGE: String
                },
                settingParamNames: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_ENDPOINT_URL", "AWS_USE_SSL", "AWS_VERIFY", "AWS_REGION_NAME", "BOT_NAME", "CONCURRENT_ITEMS", "CONCURRENT_REQUESTS", "CONCURRENT_REQUESTS_PER_DOMAIN", "CONCURRENT_REQUESTS_PER_IP", "DEFAULT_ITEM_CLASS", "DEFAULT_REQUEST_HEADERS", "DEPTH_LIMIT", "DEPTH_PRIORITY", "DEPTH_STATS_VERBOSE", "DNSCACHE_ENABLED", "DNSCACHE_SIZE", "DNS_TIMEOUT", "DOWNLOADER", "DOWNLOADER_HTTPCLIENTFACTORY", "DOWNLOADER_CLIENTCONTEXTFACTORY", "DOWNLOADER_CLIENT_TLS_CIPHERS", "DOWNLOADER_CLIENT_TLS_METHOD", "DOWNLOADER_CLIENT_TLS_VERBOSE_LOGGING", "DOWNLOADER_MIDDLEWARES", "DOWNLOADER_MIDDLEWARES_BASE", "DOWNLOADER_STATS", "DOWNLOAD_DELAY", "DOWNLOAD_HANDLERS", "DOWNLOAD_HANDLERS_BASE", "DOWNLOAD_TIMEOUT", "DOWNLOAD_MAXSIZE", "DOWNLOAD_WARNSIZE", "DOWNLOAD_FAIL_ON_DATALOSS", "DUPEFILTER_CLASS", "DUPEFILTER_DEBUG", "EDITOR", "EXTENSIONS", "EXTENSIONS_BASE", "FEED_TEMPDIR", "FTP_PASSIVE_MODE", "FTP_PASSWORD", "FTP_USER", "ITEM_PIPELINES", "ITEM_PIPELINES_BASE", "LOG_ENABLED", "LOG_ENCODING", "LOG_FILE", "LOG_FORMAT", "LOG_DATEFORMAT", "LOG_FORMATTER", "LOG_LEVEL", "LOG_STDOUT", "LOG_SHORT_NAMES", "LOGSTATS_INTERVAL", "MEMDEBUG_ENABLED", "MEMDEBUG_NOTIFY", "MEMUSAGE_ENABLED", "MEMUSAGE_LIMIT_MB", "MEMUSAGE_CHECK_INTERVAL_SECONDS", "MEMUSAGE_NOTIFY_MAIL", "MEMUSAGE_WARNING_MB", "NEWSPIDER_MODULE", "RANDOMIZE_DOWNLOAD_DELAY", "REACTOR_THREADPOOL_MAXSIZE", "REDIRECT_MAX_TIMES", "REDIRECT_PRIORITY_ADJUST", "RETRY_PRIORITY_ADJUST", "ROBOTSTXT_OBEY", "ROBOTSTXT_PARSER", "SCHEDULER", "SCHEDULER_DEBUG", "SCHEDULER_DISK_QUEUE", "SCHEDULER_MEMORY_QUEUE", "SCHEDULER_PRIORITY_QUEUE", "SPIDER_CONTRACTS", "SPIDER_CONTRACTS_BASE", "SPIDER_LOADER_CLASS", "SPIDER_LOADER_WARN_ONLY", "SPIDER_MIDDLEWARES", "SPIDER_MIDDLEWARES_BASE", "SPIDER_MODULES", "STATS_CLASS", "STATS_DUMP", "STATSMAILER_RCPTS", "TELNETCONSOLE_ENABLED", "TELNETCONSOLE_PORT", "TEMPLATES_DIR", "URLLENGTH_LIMIT", "USER_AGENT", "AJAXCRAWL_ENABLED", "AUTOTHROTTLE_DEBUG", "AUTOTHROTTLE_ENABLED", "AUTOTHROTTLE_MAX_DELAY", "AUTOTHROTTLE_START_DELAY", "AUTOTHROTTLE_TARGET_CONCURRENCY", "CLOSESPIDER_ERRORCOUNT", "CLOSESPIDER_ITEMCOUNT", "CLOSESPIDER_PAGECOUNT", "CLOSESPIDER_TIMEOUT", "COMMANDS_MODULE", "COMPRESSION_ENABLED", "COOKIES_DEBUG", "COOKIES_ENABLED", "FEED_EXPORTERS", "FEED_EXPORTERS_BASE", "FEED_EXPORT_ENCODING", "FEED_EXPORT_FIELDS", "FEED_EXPORT_INDENT", "FEED_FORMAT", "FEED_STORAGES", "FEED_STORAGES_BASE", "FEED_STORAGE_FTP_ACTIVE", "FEED_STORAGE_S3_ACL", "FEED_STORE_EMPTY", "FEED_URI", "FILES_EXPIRES", "FILES_RESULT_FIELD", "FILES_STORE", "FILES_STORE_GCS_ACL", "FILES_STORE_S3_ACL", "FILES_URLS_FIELD", "GCS_PROJECT_ID", "HTTPCACHE_ALWAYS_STORE", "HTTPCACHE_DBM_MODULE", "HTTPCACHE_DIR", "HTTPCACHE_ENABLED", "HTTPCACHE_EXPIRATION_SECS", "HTTPCACHE_GZIP", "HTTPCACHE_IGNORE_HTTP_CODES", "HTTPCACHE_IGNORE_MISSING", "HTTPCACHE_IGNORE_RESPONSE_CACHE_CONTROLS", "HTTPCACHE_IGNORE_SCHEMES", "HTTPCACHE_POLICY", "HTTPCACHE_STORAGE", "HTTPERROR_ALLOWED_CODES", "HTTPERROR_ALLOW_ALL", "HTTPPROXY_AUTH_ENCODING", "HTTPPROXY_ENABLED", "IMAGES_EXPIRES", "IMAGES_MIN_HEIGHT", "IMAGES_MIN_WIDTH", "IMAGES_RESULT_FIELD", "IMAGES_STORE", "IMAGES_STORE_GCS_ACL", "IMAGES_STORE_S3_ACL", "IMAGES_THUMBS", "IMAGES_URLS_FIELD", "MAIL_FROM", "MAIL_HOST", "MAIL_PASS", "MAIL_PORT", "MAIL_SSL", "MAIL_TLS", "MAIL_USER", "MEDIA_ALLOW_REDIRECTS", "METAREFRESH_ENABLED", "METAREFRESH_IGNORE_TAGS", "METAREFRESH_MAXDELAY", "REDIRECT_ENABLED", "REDIRECT_MAX_TIMES", "REFERER_ENABLED", "REFERRER_POLICY", "RETRY_ENABLED", "RETRY_HTTP_CODES", "RETRY_TIMES", "TELNETCONSOLE_HOST", "TELNETCONSOLE_PASSWORD", "TELNETCONSOLE_PORT", "TELNETCONSOLE_USERNAME", "REDIS_ITEMS_KEY", "REDIS_ITEMS_SERIALIZER", "REDIS_HOST", "REDIS_PORT", "REDIS_URL", "REDIS_PARAMS", "REDIS_START_URLS_AS_SET", "REDIS_START_URLS_KEY", "REDIS_ENCODING"]
            }), Y = {
                docs: [{path: "/projects", pattern: "^Project"}, {
                    path: "/spiders",
                    pattern: "^Spider|^SDK|^Integration|^CI/Git"
                }, {path: "/tasks", pattern: "^Task|^Architecture/Task"}, {
                    path: "/schedules",
                    pattern: "^Schedule"
                }, {path: "/nodes", pattern: "^Node|^Architecture/Node"}, {path: "/setting", pattern: "^Notification"}]
            }, W = (a("d6e1"), a("20a5"), a("f4e3"), {
                getBytesString: function (e) {
                    var t = Math.log2(e);
                    return t < 10 ? e : t < 20 ? Math.round(e / Math.pow(2, 10)) + "KB" : t < 30 ? Math.round(e / Math.pow(2, 20)) + "MB" : t < 40 ? Math.round(e / Math.pow(2, 30)) + "GB" : t < 50 ? Math.round(e / Math.pow(2, 40)) + "TB" : t < 60 ? Math.round(e / Math.pow(2, 50)) + "PB" : void 0
                }, getMetricValueString: function (e, t) {
                    return "mongo_stats_mem_usage_percent" === e || "mongo_stats_disk_used_percent" === e ? (100 * t).toFixed(2) + "%" : e.match(/bytes|(total|usage|allocated|used|size)$/) ? this.getBytesString(t) : e.match(/percent$/) ? t + "%" : t
                }
            }), z = (a("5e9f"), {
                htmlEscape: function (e) {
                    return e.replace(/[<>"&]/g, (function (e, t, a) {
                        switch (e) {
                            case"<":
                                return "&lt;";
                            case">":
                                return "&gt;";
                            case"&":
                                return "&amp;";
                            case'"':
                                return "&quot;"
                        }
                    }))
                }
            }), K = {stats: j["a"], encrypt: V, tour: H, log: B, scrapy: $, doc: Y, number: W, html: z}, X = a("4c5a"),
            q = a.n(X);
        a("57a0");
        n["default"].use(f["codemirror"]), n["default"].use(s.a, {locale: o.a}), c["c"].add(u["a"]), c["c"].add(d["a"]), c["c"].add(l["a"]), n["default"].component("font-awesome-icon", p["a"]), n["default"].component("font-awesome-layers", p["b"]), n["default"].component("font-awesome-layers-text", p["c"]), n["default"].use(q.a), n["default"].config.productionTip = !1, "0" !== localStorage.getItem("useStats") && (window._hmt = window._hmt || [], function () {
            var e = document.createElement("script");
            e.src = "https://hm.baidu.com/hm.js?c35e3a563a06caee2524902c81975add";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }()), n["default"].prototype.$request = U["a"], n["default"].prototype.$utils = K, n["default"].prototype.$st = K.stats;
        var J = new n["default"]({
            el: "#app", i18n: F["a"], router: L["a"], store: O["a"], render: function (e) {
                return e(w)
            }
        });
        t["default"] = J
    }, "57cf": function (e, t, a) {
        "use strict";
        var n = a("f7f0"), r = a.n(n);
        r.a
    }, 5997: function (e, t, a) {
        "use strict";
        var n = a("2986"), r = a.n(n);
        r.a
    }, "5f87": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return r
        })), a.d(t, "c", (function () {
            return s
        })), a.d(t, "b", (function () {
            return i
        }));
        var n = "token";

        function r() {
            return window.localStorage.getItem(n)
        }

        function s(e) {
            return window.localStorage.setItem(n, e)
        }

        function i() {
            return window.localStorage.removeItem(n)
        }
    }, "61f7": function (e, t, a) {
        "use strict";

        function n(e) {
            return !!e && !(e.length > 100)
        }

        function r(e) {
            return /^(https?:|mailto:|tel:)/.test(e)
        }

        a.d(t, "b", (function () {
            return n
        })), a.d(t, "a", (function () {
            return r
        }))
    }, 6329: function (e, t, a) {
        "use strict";
        var n = a("93a3"), r = a.n(n);
        r.a
    }, "664d": function (e, t, a) {
        "use strict";
        var n = a("7941"), r = a.n(n);
        r.a
    }, 6700: function (e, t, a) {
    }, 7941: function (e, t, a) {
    }, "7b99": function (e, t, a) {
        "use strict";
        a("6a61");
        var n = a("cf7f"), r = a("82ae"), s = a.n(r), i = function () {
            var e = Object(n["a"])(regeneratorRuntime.mark((function e(t, a, n) {
                return regeneratorRuntime.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            // return e.next = 2, s.a.get("http://httpbin.org/ip", {
                            //     params: {
                            //         uid: localStorage.getItem("uid"),
                            //         sid: sessionStorage.getItem("sid"),
                            //         ec: t,
                            //         ea: a,
                            //         el: n,
                            //         v: (sessionStorage.getItem("pro") ? "pro-" : "") + sessionStorage.getItem("v")
                            //     }
                            // });
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, a, n) {
                return e.apply(this, arguments)
            }
        }();
        t["a"] = {
            sendPv: function (e) {
                "0" !== localStorage.getItem("useStats") && (window._hmt.push(["_trackPageview", e]), i("访问页面", e, ""))
            }, sendEv: function (e, t, a, n) {
                "0" !== localStorage.getItem("useStats") && (window._hmt.push(["_trackEvent", e, t, a, n]), i(e, t, a))
            }
        }
    }, 8589: function (e, t, a) {
    }, "93a3": function (e, t, a) {
    }, "93cd": function (e, t, a) {
        e.exports = a.p + "img/tree.59ecebc1.svg"
    }, "99a2": function (e, t, a) {
        "use strict";
        var n = a("a919"), r = a.n(n);
        r.a
    }, a18c: function (e, t, a) {
        "use strict";
        a("b130"), a("e18c"), a("6a61");
        var n, r, s = a("cf7f"), i = a("ce3c"), o = a("a593"), c = a("3211"), u = a("4360"), l = a("0c6d"),
            d = a("7b99"), p = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "app-wrapper",
                    class: e.classObj
                }, ["mobile" === e.device && e.sidebar.opened ? a("div", {
                    staticClass: "drawer-bg",
                    on: {click: e.handleClickOutside}
                }) : e._e(), a("sidebar", {staticClass: "sidebar-container"}), a("div", {staticClass: "main-container"}, [a("navbar"), a("tags-view"), a("app-main")], 1), a("div", {staticClass: "documentation"}, [a("el-tooltip", {attrs: {content: e.$t("Click to view related Documentation")}}, [a("i", {
                    staticClass: "el-icon-question",
                    on: {click: e.onClickDocumentation}
                })]), a("el-drawer", {
                    attrs: {
                        title: e.$t("Related Documentation"),
                        visible: e.isShowDocumentation,
                        "before-close": e.onCloseDocumentation,
                        size: "300px"
                    }, on: {
                        "update:visible": function (t) {
                            e.isShowDocumentation = t
                        }
                    }
                }, [a("documentation")], 1)], 1)], 1)
            }, f = [], h = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "navbar"}, [a("el-dialog", {
                    attrs: {
                        visible: e.isLatestReleaseNoteVisible,
                        title: e.$t("Release") + " " + e.latestRelease.name
                    }, on: {
                        "update:visible": function (t) {
                            e.isLatestReleaseNoteVisible = t
                        }
                    }
                }, [a("el-tabs", {
                    model: {
                        value: e.activeTabName, callback: function (t) {
                            e.activeTabName = t
                        }, expression: "activeTabName"
                    }
                }, [a("el-tab-pane", {
                    attrs: {
                        label: e.$t("Release Note"),
                        name: "release-note"
                    }
                }, [a("div", {
                    staticClass: "content markdown-body",
                    domProps: {innerHTML: e._s(e.latestReleaseNoteHtml)}
                }), a("template", {slot: "footer"}, [a("el-button", {
                    attrs: {type: "primary", size: "small"},
                    on: {
                        click: function (t) {
                            e.isLatestReleaseNoteVisible = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Ok")))])], 1)], 2), a("el-tab-pane", {
                    attrs: {
                        label: e.$t("How to Upgrade"),
                        name: "how-to-upgrade"
                    }
                }, [a("div", {
                    staticClass: "content markdown-body",
                    domProps: {innerHTML: e._s(e.howToUpgradeHtml)}
                })])], 1), a("template", {slot: "footer"}, [a("el-button", {
                    attrs: {type: "primary", size: "small"},
                    on: {
                        click: function (t) {
                            e.isLatestReleaseNoteVisible = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Ok")))])], 1)], 2), a("hamburger", {
                    staticClass: "hamburger-container",
                    attrs: {"toggle-click": e.toggleSideBar, "is-active": e.sidebar.opened}
                }), a("breadcrumb", {staticClass: "breadcrumb"}), a("el-dropdown", {
                    staticClass: "avatar-container right",
                    attrs: {trigger: "click"}
                }, [a("span", {staticClass: "el-dropdown-link"}, [e._v(" " + e._s(e.username) + " "), a("i", {staticClass: "el-icon-arrow-down el-icon--right"})]), a("el-dropdown-menu", {
                    staticClass: "user-dropdown",
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [a("el-dropdown-item", [a("span", {
                    staticStyle: {display: "block"}, on: {
                        click: function () {
                            return e.$router.push("/disclaimer")
                        }
                    }
                }, [e._v(e._s(e.$t("Disclaimer")))])]), a("el-dropdown-item", [a("span", {
                    staticStyle: {display: "block"},
                    on: {
                        click: function () {
                            return e.$router.push("/feedback")
                        }
                    }
                }, [e._v(e._s(e.$t("Feedback")))])]), a("el-dropdown-item", [a("span", {
                    staticStyle: {display: "block"},
                    on: {click: e.logout}
                }, [e._v(e._s(e.$t("Logout")))])])], 1)], 1), a("el-dropdown", {
                    staticClass: "lang-list right",
                    attrs: {trigger: "click"}
                }, [a("span", {staticClass: "el-dropdown-link"}, [e._v(" " + e._s(e.$t(e.$store.getters["lang/lang"])) + " "), a("i", {staticClass: "el-icon-arrow-down el-icon--right"})]), a("el-dropdown-menu", {
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [a("el-dropdown-item", {
                    nativeOn: {
                        click: function (t) {
                            return e.setLang("zh")
                        }
                    }
                }, [a("span", [e._v("中文")])]), a("el-dropdown-item", {
                    nativeOn: {
                        click: function (t) {
                            return e.setLang("en")
                        }
                    }
                }, [a("span", [e._v("English")])])], 1)], 1), a("div", {staticClass: "documentation right"}, [a("a", {
                    attrs: {
                        href: "http://docs.crawlab.cn",
                        target: "_blank"
                    }
                }, [a("font-awesome-icon", {attrs: {icon: ["far", "question-circle"]}}), a("span", {staticStyle: {"margin-left": "5px"}}, [e._v(e._s(e.$t("Documentation")))])], 1)]), a("el-popover", {
                    staticClass: "wechat right",
                    attrs: {trigger: "click"}
                }, [a("div", {staticStyle: {"margin-bottom": "5px"}}, [a("label", [e._v(e._s(e.$t("Add Wechat to join discussion group")))])]), a("div", [a("img", {
                    staticClass: "wechat-img",
                    attrs: {src: "http://qn.chenzqi.cn/wechat.jpg"}
                })]), a("div", {
                    attrs: {slot: "reference"},
                    slot: "reference"
                }, [a("i", {staticClass: "fa fa-wechat"})])]), a("div", {staticClass: "github right"}, [a("github-button", {
                    staticStyle: {color: "white"},
                    attrs: {
                        href: "https://github.com/crawlab-team/crawlab",
                        "data-color-scheme": "no-preference: light; light: light; dark: dark;",
                        "data-size": "large",
                        "data-show-count": "true",
                        "aria-label": e.$t("Star crawlab-team/crawlab on GitHub")
                    }
                }, [e._v(" Star ")])], 1), "Y" === e.setting.is_demo ? a("div", {staticClass: "how-to-buy right"}, [a("div", {staticClass: "container"}, [a("el-badge", {attrs: {"is-dot": ""}}, [a("a", {
                    attrs: {
                        href: "https://crawlab.cn/purchase-pro",
                        target: "_blank"
                    }
                }, [a("i", {staticClass: "fa fa-shopping-cart"}), e._v(" " + e._s(e.$t("How to buy")) + " ")])])], 1)]) : e._e()], 1)
            }, m = [], _ = (a("053b"), a("513c"), a("e35a"), a("5e9f"), a("0d7a"), a("e793")), g = a("9f3a"),
            S = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-breadcrumb", {
                    staticClass: "app-breadcrumb",
                    attrs: {separator: "/"}
                }, [a("transition-group", {attrs: {name: "breadcrumb"}}, e._l(e.levelList, (function (t, n) {
                    return a("el-breadcrumb-item", {key: t.path}, ["noredirect" === t.redirect || n == e.levelList.length - 1 ? a("span", {staticClass: "no-redirect"}, [e._v(e._s(e.$t(t.meta.title)))]) : a("a", {
                        on: {
                            click: function (a) {
                                return a.preventDefault(), e.handleLink(t)
                            }
                        }
                    }, [e._v(e._s(e.$t(t.meta.title)))])])
                })), 1)], 1)
            }, E = [], T = (a("b4fb"), a("dbb3"), a("ecb4"), a("be66")), b = a.n(T), v = {
                data: function () {
                    return {levelList: null}
                }, watch: {
                    $route: function () {
                        this.getBreadcrumb()
                    }
                }, created: function () {
                    this.getBreadcrumb()
                }, methods: {
                    getBreadcrumb: function () {
                        var e = this.$route.matched.filter((function (e) {
                            return e.name
                        })), t = e[0];
                        t && "Home" !== t.name && (e = [{
                            path: "/home",
                            meta: {title: "Home"}
                        }].concat(e)), this.levelList = e.filter((function (e) {
                            return e.meta && e.meta.title && !1 !== e.meta.breadcrumb
                        }))
                    }, pathCompile: function (e) {
                        var t = this.$route.params, a = b.a.compile(e);
                        return a(t)
                    }, handleLink: function (e) {
                        var t = e.redirect;
                        t ? this.$router.push(t) : this.$router.push(this.getGoToPath(e))
                    }, getGoToPath: function (e) {
                        if (e.path) {
                            var t = e.path, a = t.indexOf(":");
                            if (-1 !== a) {
                                var n = t.indexOf("/", a), r = t.substring(a + 1, n);
                                return t = t.replace(":" + r, this.$route.params[r]), t
                            }
                        }
                        return e.redirect || e.path
                    }
                }
            }, R = v, w = (a("cfcd"), a("9ca4")), O = Object(w["a"])(R, S, E, !1, null, "cc707626", null), L = O.exports,
            A = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [a("svg", {
                    staticClass: "hamburger",
                    class: {"is-active": e.isActive},
                    attrs: {viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64"},
                    on: {click: e.toggleClick}
                }, [a("path", {attrs: {d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])
            }, k = [], D = {
                name: "Hamburger",
                props: {isActive: {type: Boolean, default: !1}, toggleClick: {type: Function, default: null}}
            }, C = D, I = (a("664d"), Object(w["a"])(C, A, k, !1, null, "1dada5ac", null)), y = I.exports, N = a("835d"),
            P = a("7346"), M = a.n(P), x = (a("0e50"), {
                components: {Breadcrumb: L, Hamburger: y, GithubButton: N["a"]},
                data: function () {
                    var e = new M.a.Converter;
                    return {
                        isLatestReleaseNoteVisible: !1,
                        converter: e,
                        activeTabName: "release-note",
                        howToUpgradeHtmlZh: "\n### Docker 部署\n```bash\n# 拉取最新镜像\ndocker pull tikazyq/crawlab:latest\n\n# 删除容器\ndocker-compose down | true\n\n# 启动容器\ndocker-compose up -d\n```\n\n### 直接部署\n\n1. 拉取最新 Github 代码\n2. 重新构建前后端应用\n3. 启动前后端应用\n",
                        howToUpgradeHtmlEn: "\n### Docker Deployment\n```bash\n# pull the latest image\ndocker pull tikazyq/crawlab:latest\n\n# delete containers\ndocker-compose down | true\n\n# start containers\ndocker-compose up -d\n```\n\n### Direct Deployment\n1. Pull the latest Github repository\n2. Build frontend and backend applications\n3. Start frontend and backend applications\n"
                    }
                },
                computed: Object(_["a"])(Object(_["a"])(Object(_["a"])(Object(_["a"])(Object(_["a"])({}, Object(g["c"])("version", ["latestRelease"])), Object(g["c"])("lang", ["lang"])), Object(g["c"])("setting", ["setting"])), Object(g["b"])(["sidebar", "avatar"])), {}, {
                    username: function () {
                        return this.$store.getters["user/userInfo"] && this.$store.getters["user/userInfo"].username ? this.$store.getters["user/userInfo"].username : this.$t("User")
                    }, isUpgradable: function () {
                        if (!this.latestRelease.name) return !1;
                        var e = sessionStorage.getItem("v"), t = this.latestRelease.name.replace("v", "");
                        if (!t || !e) return !1;
                        for (var a = e.split("."), n = t.split("."), r = 0; r < a.length; r++) {
                            var s = Number(a[r]), i = Number(n[r]);
                            if (isNaN(i) && (i = 0), s < i) return !0;
                            if (s > i) return !1
                        }
                        return !1
                    }, latestReleaseNoteHtml: function () {
                        if (!this.latestRelease.body) return "";
                        var e = this.latestRelease.body;
                        return this.converter.makeHtml(e)
                    }, howToUpgradeHtml: function () {
                        return "zh" === this.lang ? this.converter.makeHtml(this.howToUpgradeHtmlZh) : "en" === this.lang ? this.converter.makeHtml(this.howToUpgradeHtmlEn) : ""
                    }
                }),
                methods: {
                    toggleSideBar: function () {
                        this.$store.dispatch("ToggleSideBar")
                    }, logout: function () {
                        this.$store.dispatch("user/logout"), this.$store.dispatch("delAllViews"), this.$router.push("/login"), this.$st.sendEv("全局", "登出")
                    }, setLang: function (e) {
                        window.localStorage.setItem("lang", e), this.$i18n.locale = e, this.$store.commit("lang/SET_LANG", e), this.$st.sendEv("全局", "切换中英文", e)
                    }, onClickUpgrade: function () {
                        this.isLatestReleaseNoteVisible = !0, this.$st.sendEv("全局", "点击版本升级")
                    }
                }
            }), U = x, F = (a("57cf"), a("544b"), a("bf71"), Object(w["a"])(U, h, m, !1, null, "8bd87bcc", null)),
            j = F.exports, V = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-scrollbar", {attrs: {"wrap-class": "scrollbar-wrapper"}}, [a("div", {
                    staticClass: "sidebar-logo",
                    class: e.isCollapse ? "collapsed" : ""
                }, [a("span", [e._v("C")]), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isCollapse,
                        expression: "!isCollapse"
                    }]
                }, [e._v("rawlab"), a("span", {staticClass: "version"}, [e._v("v" + e._s(e.version))])]), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isCollapse,
                        expression: "!isCollapse"
                    }], staticClass: "text-pro"
                }, [e._v("Pro")])]), a("el-menu", {
                    attrs: {
                        "show-timeout": 200,
                        "default-active": e.routeLevel1,
                        collapse: e.isCollapse,
                        "background-color": e.variables.menuBg,
                        "text-color": e.variables.menuText,
                        "active-text-color": e.variables.menuActiveText,
                        mode: "vertical"
                    }
                }, e._l(e.routes, (function (e) {
                    return a("sidebar-item", {
                        key: e.path,
                        class: e.path.replace("/", ""),
                        attrs: {item: e, "base-path": e.path}
                    })
                })), 1)], 1)
            }, H = [], G = (a("90aa"), a("cf1e")), B = a.n(G), $ = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return !e.item.hidden && e.item.children ? a("div", {staticClass: "menu-wrapper"}, [!e.hasOneShowingChild(e.item.children, e.item) || e.onlyOneChild.children && !e.onlyOneChild.noShowingChildren || e.item.alwaysShow ? a("el-submenu", {attrs: {index: e.resolvePath(e.item.path)}}, [a("template", {slot: "title"}, [e.item.meta ? a("item", {
                    attrs: {
                        icon: e.item.meta.icon,
                        title: e.$t(e.item.meta.title)
                    }
                }) : e._e()], 1), e._l(e.item.children, (function (t) {
                    return [!t.hidden && t.children && t.children.length > 0 ? a("sidebar-item", {
                        key: t.path,
                        staticClass: "nest-menu",
                        attrs: {"is-nest": !0, item: t, "base-path": e.resolvePath(t.path)}
                    }) : a("app-link", {
                        key: t.name,
                        attrs: {to: e.resolvePath(t.path)}
                    }, [a("el-menu-item", {attrs: {index: e.resolvePath(t.path)}}, [t.meta ? a("item", {
                        attrs: {
                            icon: t.meta.icon,
                            title: e.$t(t.meta.title)
                        }
                    }) : e._e()], 1)], 1)]
                }))], 2) : [a("app-link", {attrs: {to: e.resolvePath(e.onlyOneChild.path)}}, [a("el-menu-item", {
                    class: {"submenu-title-noDropdown": !e.isNest},
                    attrs: {index: e.resolvePath(e.onlyOneChild.path)}
                }, [e.onlyOneChild.meta ? a("item", {
                    attrs: {
                        icon: e.onlyOneChild.meta.icon || e.item.meta.icon,
                        title: e.$t(e.onlyOneChild.meta.title)
                    }
                }) : e._e()], 1)], 1)]], 2) : e._e()
            }, Y = [], W = a("6266"), z = a.n(W), K = a("61f7"), X = {
                name: "MenuItem",
                functional: !0,
                props: {icon: {type: String, default: ""}, title: {type: String, default: ""}},
                render: function (e, t) {
                    var a = t.props, n = a.icon, r = a.title, s = [];
                    if (n) {
                        var i = {"margin-right": "5px", "z-index": 999};
                        s.push(e("span", {class: n, style: i}))
                    }
                    return r && s.push(e("span", {class: "title", slot: "title"}, [r])), s
                }
            }, q = X, J = Object(w["a"])(q, n, r, !1, null, null, null), Z = J.exports, Q = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("component", e._b({}, "component", e.linkProps(e.to), !1), [e._t("default")], 2)
            }, ee = [], te = {
                props: {to: {type: String, required: !0}}, methods: {
                    linkProps: function (e) {
                        return Object(K["a"])(e) ? {
                            is: "a",
                            href: e,
                            target: "_blank",
                            rel: "noopener"
                        } : {is: "router-link", to: e}
                    }
                }
            }, ae = te, ne = Object(w["a"])(ae, Q, ee, !1, null, null, null), re = ne.exports, se = {
                name: "SidebarItem",
                components: {Item: Z, AppLink: re},
                props: {
                    item: {type: Object, required: !0},
                    isNest: {type: Boolean, default: !1},
                    basePath: {type: String, default: ""}
                },
                data: function () {
                    return {onlyOneChild: null}
                },
                methods: {
                    hasOneShowingChild: function (e, t) {
                        var a = this, n = e.filter((function (e) {
                            return !e.hidden && (a.onlyOneChild = e, !0)
                        }));
                        return 1 === n.length || 0 === n.length && (this.onlyOneChild = Object(_["a"])(Object(_["a"])({}, t), {}, {
                            path: "",
                            noShowingChildren: !0
                        }), !0)
                    }, resolvePath: function (e) {
                        return this.isExternalLink(e) ? e : z.a.resolve(this.basePath, e)
                    }, isExternalLink: function (e) {
                        return Object(K["a"])(e)
                    }
                }
            }, ie = se, oe = (a("f145"), Object(w["a"])(ie, $, Y, !1, null, "0cd821d5", null)), ce = oe.exports, ue = {
                components: {SidebarItem: ce},
                data: function () {
                    return {}
                },
                computed: Object(_["a"])(Object(_["a"])(Object(_["a"])({}, Object(g["c"])("user", ["adminPaths"])), Object(g["b"])(["sidebar"])), {}, {
                    routeLevel1: function () {
                        var e = this.$route.path.split("/");
                        return "/".concat(e[1])
                    }, routes: function () {
                        var e = this;
                        return this.$router.options.routes.filter((function (t) {
                            var a = e.$store.getters["user/userInfo"].role;
                            return "admin" === a || !e.adminPaths.includes(t.path)
                        }))
                    }, variables: function () {
                        return B.a
                    }, isCollapse: function () {
                        return !this.sidebar.opened
                    }, version: function () {
                        return this.$store.state.version.version || window.sessionStorage.getItem("v")
                    }
                }),
                mounted: function () {
                },
                created: function () {
                    return Object(s["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            }, le = ue, de = (a("aa9f"), Object(w["a"])(le, V, H, !1, null, null, null)), pe = de.exports,
            fe = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "tags-view-container"}, [a("scroll-pane", {
                    ref: "scrollPane",
                    staticClass: "tags-view-wrapper"
                }, e._l(e.visitedViews, (function (t) {
                    return a("router-link", {
                        key: t.path,
                        ref: "tag",
                        refInFor: !0,
                        staticClass: "tags-view-item",
                        class: e.isActive(t) ? "active" : "",
                        attrs: {to: {path: t.path, query: t.query, fullPath: t.fullPath}, tag: "span"},
                        nativeOn: {
                            click: function (a) {
                                return e.clickSelectedTag(t)
                            }, mouseup: function (a) {
                                return "button" in a && 1 !== a.button ? null : e.closeSelectedTag(t)
                            }, contextmenu: function (a) {
                                return a.preventDefault(), e.openMenu(t, a)
                            }
                        }
                    }, [e._v(" " + e._s(e.$t(e.generateTitle(t.title))) + " "), t.meta.affix ? e._e() : a("span", {
                        staticClass: "el-icon-close",
                        on: {
                            click: function (a) {
                                return a.preventDefault(), a.stopPropagation(), e.closeSelectedTag(t)
                            }
                        }
                    })])
                })), 1), a("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.visible,
                        expression: "visible"
                    }], staticClass: "contextmenu", style: {left: e.left + "px", top: e.top + "px"}
                }, [a("li", {
                    on: {
                        click: function (t) {
                            return e.refreshSelectedTag(e.selectedTag)
                        }
                    }
                }, [e._v(e._s(e.$t("tagsView.refresh")))]), e.selectedTag.meta && e.selectedTag.meta.affix ? e._e() : a("li", {
                    on: {
                        click: function (t) {
                            return e.closeSelectedTag(e.selectedTag)
                        }
                    }
                }, [e._v(e._s(e.$t("tagsView.close")) + " ")]), a("li", {on: {click: e.closeOthersTags}}, [e._v(e._s(e.$t("tagsView.closeOthers")))]), a("li", {
                    on: {
                        click: function (t) {
                            return e.closeAllTags(e.selectedTag)
                        }
                    }
                }, [e._v(e._s(e.$t("tagsView.closeAll")))])])], 1)
            }, he = [], me = (a("fe59"), a("77ad"), a("d497"), a("08ba"), a("52ef")), _e = a("5748"), ge = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-scrollbar", {
                    ref: "scrollContainer",
                    staticClass: "scroll-container",
                    attrs: {vertical: !1},
                    nativeOn: {
                        wheel: function (t) {
                            return t.preventDefault(), e.handleScroll(t)
                        }
                    }
                }, [e._t("default")], 2)
            }, Se = [], Ee = (a("3466"), 4), Te = {
                name: "ScrollPane", data: function () {
                    return {left: 0}
                }, methods: {
                    handleScroll: function (e) {
                        var t = e.wheelDelta || 40 * -e.deltaY, a = this.$refs.scrollContainer.$refs.wrap;
                        a.scrollLeft = a.scrollLeft + t / 4
                    }, moveToTarget: function (e) {
                        var t = this.$refs.scrollContainer.$el, a = t.offsetWidth,
                            n = this.$refs.scrollContainer.$refs.wrap, r = this.$parent.$refs.tag, s = null, i = null;
                        if (r.length > 0 && (s = r[0], i = r[r.length - 1]), s === e) n.scrollLeft = 0; else if (i === e) n.scrollLeft = n.scrollWidth - a; else {
                            var o = r.findIndex((function (t) {
                                    return t === e
                                })), c = r[o - 1], u = r[o + 1], l = u.$el.offsetLeft + u.$el.offsetWidth + Ee,
                                d = c.$el.offsetLeft - Ee;
                            l > n.scrollLeft + a ? n.scrollLeft = l - a : d < n.scrollLeft && (n.scrollLeft = d)
                        }
                    }
                }
            }, be = Te, ve = (a("fae2"), Object(w["a"])(be, ge, Se, !1, null, "78bdfe10", null)), Re = ve.exports;

        function we(e) {
            var t = this.$te("route." + e);
            if (t) {
                var a = this.$t("route." + e);
                return a
            }
            return e
        }

        var Oe, Le = {
                components: {ScrollPane: Re}, data: function () {
                    return {visible: !1, top: 0, left: 0, selectedTag: {}, affixTags: []}
                }, computed: {
                    visitedViews: function () {
                        return this.$store.state.tagsView.visitedViews
                    }, routers: function () {
                        return this.$store.state.permission ? this.$store.state.permission.routers : []
                    }
                }, watch: {
                    $route: function () {
                        this.addTags(), this.moveToCurrentTag()
                    }, visible: function (e) {
                        e ? document.body.addEventListener("click", this.closeMenu) : document.body.removeEventListener("click", this.closeMenu)
                    }
                }, mounted: function () {
                    this.initTags(), this.addTags()
                }, methods: {
                    generateTitle: we, isActive: function (e) {
                        return e.path === this.$route.path
                    }, filterAffixTags: function (e) {
                        var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/", n = [];
                        return e.forEach((function (e) {
                            if (e.meta && e.meta.affix && n.push({
                                path: z.a.resolve(a, e.path),
                                name: e.name,
                                meta: Object(_["a"])({}, e.meta)
                            }), e.children) {
                                var r = t.filterAffixTags(e.children, e.path);
                                r.length >= 1 && (n = [].concat(Object(_e["a"])(n), Object(_e["a"])(r)))
                            }
                        })), n
                    }, initTags: function () {
                        var e, t = this.affixTags = this.filterAffixTags(this.routers), a = Object(me["a"])(t);
                        try {
                            for (a.s(); !(e = a.n()).done;) {
                                var n = e.value;
                                n.name && this.$store.dispatch("addVisitedView", n)
                            }
                        } catch (r) {
                            a.e(r)
                        } finally {
                            a.f()
                        }
                    }, addTags: function () {
                        var e = this.$route.name;
                        return e && this.$store.dispatch("addView", this.$route), !1
                    }, moveToCurrentTag: function () {
                        var e = this, t = this.$refs.tag;
                        t && this.$nextTick((function () {
                            var a, n = Object(me["a"])(t);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var r = a.value;
                                    if (r.to.path === e.$route.path) {
                                        e.$refs.scrollPane.moveToTarget(r), r.to.fullPath !== e.$route.fullPath && e.$store.dispatch("updateVisitedView", e.$route);
                                        break
                                    }
                                }
                            } catch (s) {
                                n.e(s)
                            } finally {
                                n.f()
                            }
                        }))
                    }, refreshSelectedTag: function (e) {
                        var t = this;
                        this.$store.dispatch("delCachedView", e).then((function () {
                            var a = e.fullPath;
                            console.log("fullPath", a), t.$nextTick((function () {
                                t.$router.replace({path: a})
                            }))
                        }))
                    }, clickSelectedTag: function (e) {
                        this.$st.sendEv("全局", "点击标签", e.name)
                    }, closeSelectedTag: function (e) {
                        var t = this;
                        this.$store.dispatch("delView", e).then((function (a) {
                            var n = a.visitedViews;
                            t.isActive(e) && t.toLastView(n)
                        }))
                    }, closeOthersTags: function () {
                        var e = this;
                        this.$router.push(this.selectedTag), this.$store.dispatch("delOthersViews", this.selectedTag).then((function () {
                            e.moveToCurrentTag()
                        }))
                    }, closeAllTags: function (e) {
                        var t = this;
                        this.$store.dispatch("delAllViews").then((function (a) {
                            var n = a.visitedViews;
                            t.affixTags.some((function (t) {
                                return t.path === e.path
                            })) || t.toLastView(n)
                        }))
                    }, toLastView: function (e) {
                        var t = e.slice(-1)[0];
                        t ? this.$router.push(t) : this.$router.push("/")
                    }, openMenu: function (e, t) {
                        var a = 105, n = this.$el.getBoundingClientRect().left, r = this.$el.offsetWidth, s = r - a,
                            i = t.clientX - n + 15;
                        this.left = i > s ? s : i, this.top = t.clientY, this.visible = !0, this.selectedTag = e
                    }, closeMenu: function () {
                        this.visible = !1
                    }
                }
            }, Ae = Le, ke = (a("5997"), a("6329"), Object(w["a"])(Ae, fe, he, !1, null, "637ee5d3", null)),
            De = ke.exports, Ce = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("section", {staticClass: "app-main"}, [a("transition", {
                    attrs: {
                        name: "fade-transform",
                        mode: "out-in"
                    }
                }, [a("router-view", {key: e.key})], 1)], 1)
            }, Ie = [], ye = (a("e50e"), {
                name: "AppMain", computed: {
                    key: function () {
                        return void 0 !== this.$route.name ? this.$route.name + +new Date : this.$route + +new Date
                    }
                }
            }), Ne = ye, Pe = (a("a638"), Object(w["a"])(Ne, Ce, Ie, !1, null, "d648d7e8", null)), Me = Pe.exports,
            xe = document, Ue = xe.body, Fe = 1024, je = 3, Ve = {
                watch: {
                    $route: function (e) {
                        "mobile" === this.device && this.sidebar.opened && u["a"].dispatch("CloseSideBar", {withoutAnimation: !1})
                    }
                }, beforeMount: function () {
                    window.addEventListener("resize", this.resizeHandler)
                }, mounted: function () {
                    var e = this.isMobile();
                    e && (u["a"].dispatch("ToggleDevice", "mobile"), u["a"].dispatch("CloseSideBar", {withoutAnimation: !0}))
                }, methods: {
                    isMobile: function () {
                        var e = Ue.getBoundingClientRect();
                        return e.width - je < Fe
                    }, resizeHandler: function () {
                        if (!document.hidden) {
                            var e = this.isMobile();
                            u["a"].dispatch("ToggleDevice", e ? "mobile" : "desktop"), e && u["a"].dispatch("CloseSideBar", {withoutAnimation: !0})
                        }
                    }
                }
            }, He = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-tree", {
                    ref: "documentation-tree",
                    attrs: {data: e.docData, "node-key": "fullUrl"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            var n = t.node, r = t.data;
                            return a("span", {
                                staticClass: "custom-tree-node",
                                class: [r.active ? "active" : "", "level-" + r.level]
                            }, [1 === r.level && r.children && r.children.length ? [a("span", [e._v(e._s(n.label))])] : [a("span", [a("a", {
                                staticStyle: {display: "block"},
                                attrs: {href: r.fullUrl, target: "_blank"},
                                on: {click: e.onClickDocumentationLink}
                            }, [e._v(" " + e._s(n.label) + " ")])])]], 2)
                        }
                    }])
                })
            }, Ge = [], Be = (a("f4e3"), a("1fb3"), {
                name: "Documentation",
                data: function () {
                    return {data: []}
                },
                computed: Object(_["a"])(Object(_["a"])({}, Object(g["c"])("doc", ["docData"])), {}, {
                    pathLv1: function () {
                        if ("/" === this.$route.path) return "/";
                        var e = this.$route.path.match(/(^\/\w+)/);
                        return e[1]
                    }, currentDoc: function () {
                        for (var e, t = 0; t < this.$utils.doc.docs.length; t++) {
                            var a = this.$utils.doc.docs[t];
                            if (this.pathLv1 === a.path) {
                                e = a;
                                break
                            }
                        }
                        return e
                    }
                }),
                watch: {
                    pathLv1: function () {
                        this.update()
                    }
                },
                created: function () {
                    return Object(s["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                mounted: function () {
                    this.update()
                },
                methods: {
                    isActiveNode: function (e) {
                        return !!this.currentDoc && !!e.url.match(this.currentDoc.pattern)
                    }, update: function () {
                        var e = this;
                        setTimeout((function () {
                            e.docData.forEach((function (t) {
                                var a = e.isActiveNode(t), n = e.$refs["documentation-tree"].getNode(t);
                                n.expanded = a, e.$set(t, "active", a), t.children.forEach((function (t) {
                                    var a = e.$refs["documentation-tree"].getNode(t), n = e.isActiveNode(t);
                                    !a.parent.expanded && n && (a.parent.expanded = !0), e.$set(t, "active", n)
                                }))
                            }))
                        }), 100)
                    }, getDocumentationData: function () {
                        var e = this;
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$store.dispatch("doc/getDocData");
                                    case 2:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, onClickDocumentationLink: function () {
                        this.$st.sendEv("全局", "点击右侧文档链接")
                    }
                }
            }), $e = Be, Ye = (a("4d21"), Object(w["a"])($e, He, Ge, !1, null, "7e2a5996", null)), We = Ye.exports, ze = {
                name: "Layout",
                components: {Documentation: We, Navbar: j, Sidebar: pe, TagsView: De, AppMain: Me},
                mixins: [Ve],
                data: function () {
                    return {isShowDocumentation: !1}
                },
                computed: {
                    sidebar: function () {
                        return this.$store.state.app.sidebar
                    }, device: function () {
                        return this.$store.state.app.device
                    }, classObj: function () {
                        return {
                            hideSidebar: !this.sidebar.opened,
                            openSidebar: this.sidebar.opened,
                            withoutAnimation: this.sidebar.withoutAnimation,
                            mobile: "mobile" === this.device
                        }
                    }
                },
                created: function () {
                    var e = this;
                    return Object(s["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.$store.dispatch("doc/getDocData");
                                case 2:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: {
                    handleClickOutside: function () {
                        this.$store.dispatch("CloseSideBar", {withoutAnimation: !1})
                    }, onClickDocumentation: function () {
                        this.isShowDocumentation = !0, this.$st.sendEv("全局", "打开右侧文档")
                    }, onCloseDocumentation: function () {
                        this.isShowDocumentation = !1, this.$st.sendEv("全局", "关闭右侧文档")
                    }
                }
            }, Ke = ze, Xe = (a("c606"), a("bce0"), Object(w["a"])(Ke, p, f, !1, null, "0f081b23", null)), qe = Xe.exports;
        o["default"].use(c["a"]);
        var Je = [{
            path: "/login", component: function () {
                return a.e("chunk-6561f328").then(a.bind(null, "9ed6"))
            }, hidden: !0
        }, {
            path: "/signup", component: function () {
                return a.e("chunk-6561f328").then(a.bind(null, "9ed6"))
            }, hidden: !0
        }, {
            path: "/404", component: function () {
                return a.e("chunk-4b81d396").then(a.bind(null, "8cdb"))
            }, hidden: !0
        }, {path: "/", redirect: "/home"}, {
            path: "/home", component: qe, children: [{
                path: "", component: function () {
                    return Promise.all([a.e("chunk-a389c526"), a.e("chunk-7911f015")]).then(a.bind(null, "b3d7"))
                }, meta: {title: "Home", icon: "fa fa-home"}
            }]
        }, {
            path: "/projects",
            component: qe,
            meta: {title: "Project", icon: "fa fa-gear"},
            children: [{
                path: "", name: "Project", component: function () {
                    return a.e("chunk-8019ceac").then(a.bind(null, "b345"))
                }, meta: {title: "Project", icon: "fa fa-code-fork"}
            }]
        }, {
            path: "/spiders",
            component: qe,
            meta: {title: "Spider", icon: "fa fa-bug"},
            children: [{
                path: "", name: "SpiderList", component: function () {
                    return Promise.all([a.e("chunk-0fa7a4ee"), a.e("chunk-591be4e4")]).then(a.bind(null, "a316"))
                }, meta: {title: "Spiders", icon: "fa fa-bug"}
            }, {
                path: ":id", name: "SpiderDetail", component: function () {
                    return Promise.all([a.e("chunk-a389c526"), a.e("chunk-0fa7a4ee"), a.e("chunk-6bc6af1f"), a.e("chunk-5c2cde8e"), a.e("chunk-899f1020")]).then(a.bind(null, "46fc"))
                }, meta: {title: "Spider Detail", icon: "fa fa-circle-o"}, hidden: !0
            }]
        }, {
            path: "/tasks",
            component: qe,
            meta: {title: "Task", icon: "fa fa-list"},
            children: [{
                path: "", name: "TaskList", component: function () {
                    return Promise.all([a.e("chunk-6bc6af1f"), a.e("chunk-9c7671c8")]).then(a.bind(null, "b2914"))
                }, meta: {title: "Tasks", icon: "fa fa-list"}
            }, {
                path: ":id", name: "TaskDetail", component: function () {
                    return Promise.all([a.e("chunk-0fa7a4ee"), a.e("chunk-68f5e17f")]).then(a.bind(null, "2d9d"))
                }, meta: {title: "Task Detail", icon: "fa fa-circle-o"}, hidden: !0
            }]
        }, {
            path: "/schedules",
            component: qe,
            meta: {title: "Schedules", icon: "fa fa-calendar"},
            hidden: !1,
            children: [{
                path: "", name: "ScheduleList", component: function () {
                    return Promise.all([a.e("chunk-0fa7a4ee"), a.e("chunk-6bc6af1f"), a.e("chunk-5c2cde8e")]).then(a.bind(null, "cde5"))
                }, meta: {title: "Schedules", icon: "fa fa-calendar"}
            }]
        }, {
            path: "/nodes",
            component: qe,
            meta: {title: "Node", icon: "fa fa-server"},
            children: [{
                path: "", name: "NodeList", component: function () {
                    return Promise.all([a.e("chunk-a389c526"), a.e("chunk-a9ea9f02")]).then(a.bind(null, "d4d2"))
                }, meta: {title: "Nodes", icon: "fa fa-server"}
            }, {
                path: ":id", name: "NodeDetail", component: function () {
                    return Promise.all([a.e("chunk-a389c526"), a.e("chunk-0e9e9c64")]).then(a.bind(null, "1349"))
                }, meta: {title: "Node Detail", icon: "fa fa-circle-o"}, hidden: !0
            }]
        }, {
            path: "/monitor",
            component: qe,
            meta: {title: "Monitor", icon: "fa fa-bar-chart"},
            children: [{
                path: "", name: "Monitor", component: function () {
                    return Promise.all([a.e("chunk-a389c526"), a.e("chunk-759e3300")]).then(a.bind(null, "5a2b"))
                }, meta: {title: "Monitor", icon: "fa fa-bar-chart"}
            }]
        }, {
            path: "/repos",
            component: qe,
            meta: {title: "Spider Market", icon: "fa fa-cloud"},
            children: [{
                path: "", name: "RepoList", component: function () {
                    return a.e("chunk-c737cb56").then(a.bind(null, "988e"))
                }, meta: {title: "Spider Market", icon: "fa fa-cloud"}
            }]
        }, (Oe = {
            path: "/disclaimer",
            component: qe,
            hidden: !0,
            meta: {title: "Disclaimer", icon: "fa fa-exclamation-triangle"}
        }, Object(i["a"])(Oe, "hidden", !0), Object(i["a"])(Oe, "children", [{
            path: "",
            name: "Disclaimer",
            component: function () {
                return a.e("chunk-e4ba59d8").then(a.bind(null, "bf79"))
            },
            meta: {title: "Disclaimer", icon: "fa fa-exclamation-triangle"}
        }]), Oe), {
            path: "/feedback",
            component: qe,
            meta: {title: "Feedback", icon: "fa fa-commenting-o"},
            hidden: !0,
            children: [{
                path: "", name: "Feedback", component: function () {
                    return a.e("chunk-63d8704b").then(a.bind(null, "0c4b"))
                }, meta: {title: "Feedback", icon: "fa fa-commenting"}
            }]
        }, {
            path: "/users",
            component: qe,
            meta: {title: "User", icon: "fa fa-users"},
            children: [{
                path: "", name: "UserList", component: function () {
                    return a.e("chunk-3ce00cde").then(a.bind(null, "1faf"))
                }, meta: {title: "Users", icon: "fa fa-users"}
            }]
        }, {
            path: "/setting",
            component: qe,
            meta: {title: "Setting", icon: "fa fa-gear"},
            children: [{
                path: "", name: "Setting", component: function () {
                    return a.e("chunk-4d61f4d0").then(a.bind(null, "278d"))
                }, meta: {title: "Setting", icon: "fa fa-gear"}
            }]
        }, {path: "*", redirect: "/404", hidden: !0}], Ze = new c["a"]({
            scrollBehavior: function () {
                return {y: 0}
            }, routes: Je
        });
        Ze.beforeEach((function (e, t, a) {
            e.meta && e.meta.title ? window.document.title = "Crawlab Pro - ".concat(e.meta.title) : window.document.title = "Crawlab Pro", ["/login", "/signup"].includes(e.path) || window.localStorage.getItem("token") ? a() : a("/login")
        })), Ze.afterEach(function () {
            var e = Object(s["a"])(regeneratorRuntime.mark((function e(t, a, n) {
                var r, s;
                return regeneratorRuntime.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (!t.path) {
                                e.next = 10;
                                break
                            }
                            return e.next = 3, u["a"].dispatch("setting/getSetting");
                        case 3:
                            return e.next = 5, l["a"].get("/version");
                        case 5:
                            r = e.sent, s = r.data.data, u["a"].commit("version/SET_VERSION", s), sessionStorage.setItem("v", s), d["a"].sendPv(t.path);
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, a, n) {
                return e.apply(this, arguments)
            }
        }());
        t["a"] = Ze
    }, a638: function (e, t, a) {
        "use strict";
        var n = a("4844"), r = a.n(n);
        r.a
    }, a919: function (e, t, a) {
    }, aa9f: function (e, t, a) {
        "use strict";
        var n = a("1cda"), r = a.n(n);
        r.a
    }, b20f: function (e, t, a) {
        e.exports = {
            menuText: "#bfcbd9",
            menuActiveText: "#409EFF",
            subMenuActiveText: "#f4f4f5",
            menuBg: "#304156",
            menuHover: "#263445",
            subMenuBg: "#1f2d3d",
            subMenuHover: "#001528",
            sideBarWidth: "180px"
        }
    }, b3b5: function (e, t, a) {
        e.exports = a.p + "img/user.9f469d0b.svg"
    }, bce0: function (e, t, a) {
        "use strict";
        var n = a("f595"), r = a.n(n);
        r.a
    }, bf71: function (e, t, a) {
        "use strict";
        var n = a("4387"), r = a.n(n);
        r.a
    }, c606: function (e, t, a) {
        "use strict";
        var n = a("3a37"), r = a.n(n);
        r.a
    }, cf1e: function (e, t, a) {
        e.exports = {
            menuText: "#bfcbd9",
            menuActiveText: "#409EFF",
            subMenuActiveText: "#f4f4f5",
            menuBg: "#304156",
            menuHover: "#263445",
            subMenuBg: "#1f2d3d",
            subMenuHover: "#001528",
            sideBarWidth: "180px"
        }
    }, cfcd: function (e, t, a) {
        "use strict";
        var n = a("f3df"), r = a.n(n);
        r.a
    }, d2f3: function (e, t, a) {
    }, d7ec: function (e, t, a) {
        e.exports = a.p + "img/eye-open.8ef26886.svg"
    }, dcf8: function (e, t, a) {
        e.exports = a.p + "img/nested.c948fb38.svg"
    }, eb1b: function (e, t, a) {
        e.exports = a.p + "img/form.f3ed6fee.svg"
    }, f145: function (e, t, a) {
        "use strict";
        var n = a("5287"), r = a.n(n);
        r.a
    }, f3df: function (e, t, a) {
    }, f595: function (e, t, a) {
    }, f7f0: function (e, t, a) {
    }, fae2: function (e, t, a) {
        "use strict";
        var n = a("d2f3"), r = a.n(n);
        r.a
    }
});