   var db;
        //database varsion setting
        var version = 1.0;
        //database name setting
        var dbName = "tizendb";
        //database display name setting
        var dbDisplayName = "tizen_test_db";
        //database size setting
        var dbSize = 2 * 1024 * 1024;

        function selectDB() {
            if (window.openDatabase) {
                //openDatabase(name, version, displayname, estimatedsize, callback);
                db = openDatabase(dbName, version, dbDisplayName, dbSize);

                dropTable(db);
                createTable(db);
                insertData(db);

            } else {
                alert("Web SQL Database not supported in this browser");
            }
        }

        //reads and displays values from the 'places' table
        function dataView(db) {
            var html = document.getElementById("tbody01");
            var ddlHtml = document.getElementById("ddlTitle");
            html.innerHTML = "";
            ddlHtml.innerHTML = "";

            db.transaction(function (t) {
                t.executeSql("SELECT * FROM tizenTable", [],
                function (tran, r) {
                    ddlHtml.innerHTML = "<option value='all'>all</option>";
                    for (var i = 0; i < r.rows.length; i++) {
                        var id = r.rows.item(i).id;
                        var title = r.rows.item(i).title;
                        var content = r.rows.item(i).content;
                        var videoPath = r.rows.item(i).videoPath;

                        //data list rendering
                        if (html) {
                            html.innerHTML += "<tr><td>" + id + "</td><td>" + title + "</td><td>" + content + "</td><td>" + videoPath + "</td></tr>";
                        }

                        //select box rendering
                        if (ddlHtml) {
                            ddlHtml.innerHTML += "<option value=" + id + ">" + title + "</option>";
                        }
                    }
                },
                function (t, e) { alert("Error:" + e.message); }
             );
            });
        }

        function getCategoryListData(db){
        	
        	 db.transaction(function (t) {
        		t.executeSql("SELECT * FROM tizenTable", [],
        		function (tran, r) {
        			 for (var i = 0; i < r.rows.length; i++) { 
        			 
        			 }
        		 	}		 
        		 );
        		 
        	 });
        			 
        }
        // create table
        function createTable(db) {
            db.transaction(function (t) {
                t.executeSql("CREATE TABLE categories (id INTEGER PRIMARY KEY, title TEXT)", []);
                t.executeSql("CREATE TABLE subcategories  (id INTEGER PRIMARY KEY,categoryid INTEGER,data1 TEXT,data2 TEXT)", []);
                t.executeSql("CREATE TABLE contents (id INTEGER PRIMARY KEY,subcategoryid INTEGER, desc TEXT, videoPath TEXT)", []);
            });
        }

        //inserting data in table
        function insertData(db) {
            db.transaction(function (e) {
            	//Insert into categories
             	e.executeSql("INSERT INTO categories(title) VALUES (?)", ["FULL BODY"], onSuccess, onError);
             	e.executeSql("INSERT INTO categories(title) VALUES (?)", ["UPPER BODY"], onSuccess, onError);
             	e.executeSql("INSERT INTO categories(title) VALUES (?)", ["LOWER BODY"], onSuccess, onError);
            	//Insert into subcategories
                e.executeSql("INSERT INTO subcategories(categoryid, data1,data2) VALUES (?, ?, ?)", [1, "SEXY ARMS IN SEVEN DAYS","7 moves need resistance band"], onSuccess, onError);
                e.executeSql("INSERT INTO subcategories(categoryid, data1,data2) VALUES (?, ?, ?)", [1, "SEXY ARMS IN SEVEN DAYS","8 moves need resistance band"], onSuccess, onError);
                e.executeSql("INSERT INTO subcategories(categoryid, data1,data2) VALUES (?, ?, ?)", [2, "SEXY ARMS IN SEVEN DAYS","9 moves need resistance band"], onSuccess, onError);
                //Insert into subcategories
                e.executeSql("INSERT INTO contents(subcategoryid,desc,videoPath) VALUES (?, ?, ?)", [1,"During video tap, tap once to pause and perform reps;tap again to resume","vid/small.mp4"], onSuccess, onError);
                e.executeSql("INSERT INTO contents(subcategoryid,desc,videoPath) VALUES (?, ?, ?)", [1,"During video tap, tap once to pause and perform reps;tap again to resume","vid/small.mp4"], onSuccess, onError);
                e.executeSql("INSERT INTO contents(subcategoryid,desc,videoPath) VALUES (?, ?, ?)", [2,"During video tap, tap once to pause and perform reps;tap again to resume","vid/small.mp4"], onSuccess, onError);
            });
        }

        function onSuccess(e) { }
        function onError(e) { }

        // drop table
        function dropTable(db) {
            db.transaction(function (e) {
                e.executeSql("DROP TABLE categories");
                e.executeSql("DROP TABLE subcategories");
                e.executeSql("DROP TABLE contents");
                
            });
        }

        //Select the data conditions
     
        window.onload = function () {
            selectDB();
        };