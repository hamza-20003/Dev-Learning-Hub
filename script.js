const db = {
    html: {
        bg: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070",
        items: [
            // --- Structure & Layout ---
            { name: "<div> Container", code: "<div style='background:gold; padding:20px;'>Hada Container (Box)</div>", result: "<div style='background:gold; padding:10px; border:2px solid black;'>Hada Container (Box)</div>" },
            { name: "<span> Inline Text", code: "<span>Hada ktiba</span> <span>m-lasqa</span>", result: "<span>Hada ktiba</span> <span style='color:red;'>m-lasqa</span>" },
            { name: "Class Attribute", code: "<div class='my-style'>Hada fih class</div>\n/* CSS: .my-style { color: blue; } */", result: "<div style='color: blue; font-weight: bold;'>Hada fih class (Style appliqué)</div>" },
            { name: "ID Attribute", code: "<div id='unique'>Hada ID wahed</div>", result: "<div style='background: #eee; border-left: 5px solid red; padding: 5px;'>Hada element b ID unique</div>" },
            
            // --- Text Elements ---
            { name: "<h1> to <h6> Headings", code: "<h1>Title 1</h1>\n<h3>Title 3</h3>", result: "<h1>Title 1</h1><h3>Title 3</h3>" },
            { name: "<p> Paragraph", code: "<p>Hada paragraph fih ktiba bzaf...</p>", result: "<p>Hada paragraph fih ktiba bzaf bach t-ban l-farq f l-espace.</p>" },
            { name: "<b> & <i> Style", code: "<b>Bold</b> and <i>Italic</i>", result: "<b>Bold (Ghalid)</b> and <i>Italic (M-mayel)</i>" },
            
            // --- Media & Links ---
            { name: "<a> Hyperlink", code: "<a href='https://google.com' target='_blank'>Visit Google</a>", result: "<a href='#' style='color:blue; text-decoration:underline;'>Visit Google (Link)</a>" },
            { name: "<img> Image", code: "<img src='https://via.placeholder.com/150' alt='logo'>", result: "<img src='https://via.placeholder.com/100' style='border-radius:10px;'>" },
            
            // --- Lists ---
            { name: "<ul> & <li> Unordered List", code: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>", result: "<ul><li>Item 1</li><li>Item 2</li></ul>" },
            { name: "<ol> & <li> Ordered List", code: "<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>", result: "<ol><li>First</li><li>Second</li></ol>" },
            
            // --- Forms & Inputs ---
            { name: "<input> Text", code: "<input type='text' placeholder='Enter Name'>", result: "<input type='text' placeholder='Enter Name' style='padding:8px; border-radius:5px; border:1px solid #ccc;'>" },
            { name: "<input> Password", code: "<input type='password'>", result: "<input type='password' value='12345' style='padding:8px; border-radius:5px;'>" },
            { name: "<button> Interactive", code: "<button onclick='alert(\"Click!\")'>Click Me</button>", result: "<button style='padding:10px 20px; background:#28a745; color:white; border:none; border-radius:5px; cursor:pointer;'>Click Me</button>" },
            { name: "<textarea>", code: "<textarea placeholder='Message'></textarea>", result: "<textarea placeholder='Write message...' style='width:100%; height:50px;'></textarea>" }
        ]
    },
    css: {
        bg: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070",
        items: [
            // --- 1. Box Model (L-Cadre) ---
            { name: "Width & Height", code: "width: 200px;\nheight: 100px;", result: "<div style='width:150px; height:60px; background:coral; border:2px solid black;'>200x100</div>" },
            { name: "Padding (Inside)", code: "padding: 20px;", result: "<div style='background:lightgray; border:1px solid #000; padding:20px;'><div style='background:white; border:1px dashed red;'>Content with Padding</div></div>" },
            { name: "Margin (Outside)", code: "margin: 20px;", result: "<div style='background:lightgray; border:1px solid #000;'><div style='background:white; margin:20px; border:1px dashed blue;'>Box with Margin</div></div>" },
            { name: "Border Style", code: "border: 5px solid #00ffcc;", result: "<div style='width:100px; height:50px; border:5px solid #00ffcc;'>Border</div>" },
            { name: "Border Radius", code: "border-radius: 15px;", result: "<div style='width:100px; height:60px; background:purple; border-radius:15px;'></div>" },

            // --- 2. Colors & Backgrounds ---
            { name: "Text Color", code: "color: #ff5733;", result: "<p style='color:#ff5733; font-weight:bold; font-size:20px;'>Hada Text Mlowwen</p>" },
            { name: "Background Color", code: "background-color: #2ecc71;", result: "<div style='background-color:#2ecc71; padding:10px; color:white;'>BG Color</div>" },
            { name: "Linear Gradient", code: "background: linear-gradient(to right, red, yellow);", result: "<div style='width:100%; height:50px; background: linear-gradient(to right, #ff416c, #ff4b2b); border-radius:8px;'></div>" },
            { name: "Opacity", code: "opacity: 0.5;", result: "<div style='background:blue; color:white; padding:10px; opacity:0.5;'>Nwss Chfaf (Transparent)</div>" },

            // --- 3. Text Styling ---
            { name: "Font Size", code: "font-size: 2rem;", result: "<p style='font-size:32px;'>Text Kbir</p>" },
            { name: "Font Weight", code: "font-weight: 900;", result: "<p style='font-weight:900;'>Text Ghalid Bzaf</p>" },
            { name: "Text Align", code: "text-align: center;", result: "<div style='width:100%; background:#eee;'><p style='text-align:center;'>Ana f l-west</p></div>" },
            { name: "Text Shadow", code: "text-shadow: 2px 2px 5px rgba(0,0,0,0.5);", result: "<h2 style='text-shadow: 3px 3px 6px #aaa; color:white;'>Khayal dial l-ktiba</h2>" },

            // --- 4. Layout (Flexbox & Grid) ---
            { name: "Display: Flex", code: "display: flex;\ngap: 15px;", result: "<div style='display:flex; gap:10px;'><div style='width:30px;height:30px;background:red;'></div><div style='width:30px;height:30px;background:green;'></div><div style='width:30px;height:30px;background:blue;'></div></div>" },
            { name: "Justify Content (Center)", code: "justify-content: center;", result: "<div style='display:flex; justify-content:center; background:#ddd; padding:5px;'><div style='width:40px;height:20px;background:black;'></div></div>" },
            { name: "Align Items", code: "align-items: center;", result: "<div style='display:flex; align-items:center; height:60px; background:#ddd;'><div style='width:20px;height:20px;background:orange;'></div><span style='margin-left:10px; color:black;'>Centered V</span></div>" },

            // --- 5. Effects & Transformations ---
            { name: "Box Shadow", code: "box-shadow: 10px 10px 20px grey;", result: "<div style='width:100px; height:50px; background:white; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border-radius:10px;'></div>" },
            { name: "Hover Effect", code: ".btn:hover { background: black; }", result: "<button style='padding:10px 20px; transition:0.3s; cursor:pointer;' onmouseover='this.style.background=\"black\"; this.style.color=\"white\"' onmouseout='this.style.background=\"\"; this.style.color=\"\"'>Dwwz l-far (Hover)</button>" },
            { name: "Transition", code: "transition: 0.5s ease;", result: "<p style='color:black;'>Animation dial l-waqt</p>" },
            { name: "Transform: Rotate", code: "transform: rotate(45deg);", result: "<div style='width:40px;height:40px;background:red;transform:rotate(45deg); margin:20px auto;'></div>" },

            // --- 6. Positioning ---
            { name: "Position: Absolute", code: "position: absolute;\ntop: 0; right: 0;", result: "<div style='position:relative; width:100%; height:60px; background:#eee;'><div style='position:absolute; top:5px; right:5px; background:red; color:white; padding:2px;'>Fixed</div></div>" },
            { name: "Z-index (Layers)", code: "z-index: 10;", result: "<div style='position:relative;'><div style='width:40px;height:40px;background:blue;position:absolute;z-index:1;'></div><div style='width:40px;height:40px;background:red;position:absolute;left:15px;top:10px;z-index:2;'></div></div>" }
        ]
    },
    js: {
        bg: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070",
        items: [
            // --- 1. Basics & Variables ---
            { name: "Variables (let & const)", code: "let name = 'Amine'; // T-9der tbeddel\nconst pi = 3.14; // Mat-beddelch", result: "<div style='color:black;'>Check Console (F12) bach t-chouf l-values</div>" },
            { name: "Data Types", code: "let str = 'Hello'; // String\nlet num = 2024; // Number\nlet bool = true; // Boolean", result: "<p style='color:black;'>Text, Arqam, awla True/False</p>" },

            // --- 2. Interactivity (Alerts & Prompts) ---
            { name: "Alert Popup", code: "alert('Welcome to JS!');", result: "<button onclick='alert(\"Welcome to JS!\")' style='padding:10px; background:#f7df1e; border:none; cursor:pointer; font-weight:bold;'>Jarreb Alert</button>" },
            { name: "Confirm Box", code: "confirm('Wach nta sûr?');", result: "<button onclick='confirm(\"Wach nta sûr?\")' style='padding:10px; background:#ff4d4d; color:white; border:none; cursor:pointer;'>Jarreb Confirm</button>" },

            // --- 3. DOM Manipulation (Control HTML) ---
            { name: "Change Text Content", code: "document.getElementById('myText').innerText = 'Tbeddelt!';", result: "<div><p id='js-txt' style='color:black;'>Ana f l-asl...</p><button onclick='document.getElementById(\"js-txt\").innerText=\"Tbeddelt b l-JS!\"'>Click bach t-beddelni</button></div>" },
            { name: "Change Style with JS", code: "document.body.style.backgroundColor = 'red';", result: "<button onclick='this.parentElement.style.background=\"#00ffcc\"' style='padding:10px;'>Beddel Lon dial l-Box</button>" },
            { name: "Hide/Show Element", code: "element.style.display = 'none';", result: "<div><div id='box-hide' style='width:50px;height:50px;background:red;margin-bottom:5px;'></div><button onclick='document.getElementById(\"box-hide\").style.display=\"none\"'>Ghebber l-Box</button></div>" },

            // --- 4. Logic & Loops ---
            { name: "If / Else Statement", code: "if (age >= 18) {\n  alert('Adult');\n} else {\n  alert('Minor');\n}", result: "<button onclick='let a=prompt(\"Ch7al f 3mrek?\"); alert(a>=18 ? \"Adult ✅\" : \"Minor ❌\")'>Jarreb Condition</button>" },
            { name: "For Loop", code: "for (let i=0; i<5; i++) {\n  console.log(i);\n}", result: "<button onclick='for(let i=1;i<=3;i++) alert(\"Loop num: \"+i)'>Run Loop 3 times</button>" },

            // --- 5. Functions ---
            { name: "Basic Function", code: "function sayHi(name) {\n  return 'Salam ' + name;\n}", result: "<button onclick='alert(\"Salam Smity!\")' style='padding:10px;'>Execute Function</button>" },
            { name: "Arrow Function (ES6)", code: "const add = (a, b) => a + b;", result: "<p style='color:black;'>Tariqa modern bach t-kteb l-functions</p>" },

            // --- 6. Arrays & Objects ---
            { name: "Arrays (Lists)", code: "let fruits = ['Apple', 'Banana'];\nconsole.log(fruits[0]);", result: "<p style='color:black;'>List dial l-hwayej: 🍎, 🍌</p>" },
            { name: "Objects", code: "let user = { name: 'Amine', age: 25 };", result: "<p style='color:black;'>Data m-nemma (Name: Amine, Age: 25)</p>" },

            // --- 7. Events ---
            { name: "On Click Event", code: "button.onclick = () => { ... }", result: "<button onclick='this.style.transform=\"scale(1.2)\"' style='padding:10px; transition:0.2s;'>Click bach n-kber</button>" },
            { name: "Input Change", code: "input.oninput = (e) => { ... }", result: "<div><input type='text' oninput='document.getElementById(\"mirror\").innerText = this.value' placeholder='Kteb chi haja...'><p id='mirror' style='color:blue; font-weight:bold;'></p></div>" }
        ]
    },
    php: {
        bg: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070",
        items: [
            // --- 1. Syntax Basics ---
            { name: "PHP Open Tag", code: "<?php\n  echo 'Hello World';\n?>", result: "<b style='color:black;'>Hello World</b>" },
            { name: "Variables ($)", code: "$name = 'Yassine';\necho 'Marhba ' . $name;", result: "<p style='color:black;'>Marhba Yassine</p>" },
            { name: "Comments", code: "// Hada comment f khit wahed\n/* Hada \n   comment f bzaf d khout */", result: "<p style='color:gray; font-style:italic;'>L-comments ma-k-i-banouch l-user</p>" },

            // --- 2. Data Types & Math ---
            { name: "Strings & Concatenation", code: "$a = 'Full';\n$b = 'Stack';\necho $a . ' ' . $b;", result: "<b style='color:black;'>Full Stack</b>" },
            { name: "Basic Math", code: "$x = 10;\n$y = 5;\necho $x + $y;", result: "<span style='font-size:20px; color:green;'>15</span>" },

            // --- 3. Logic & Decisions ---
            { name: "If / Else", code: "$hour = 20;\nif($hour > 18) {\n  echo 'Good Evening';\n} else {\n  echo 'Good Day';\n}", result: "<b style='color:black;'>Good Evening</b>" },
            { name: "Switch Statement", code: "$color = 'red';\nswitch($color) {\n  case 'red': echo 'Stop'; break;\n}", result: "<span style='color:red; font-weight:bold;'>Stop</span>" },

            // --- 4. Loops (Tikrar) ---
            { name: "For Loop", code: "for($i=1; $i<=3; $i++) {\n  echo 'Line ' . $i . '<br>';\n}", result: "<div style='text-align:left; color:black;'>Line 1<br>Line 2<br>Line 3</div>" },
            { name: "Foreach (Arrays)", code: "$colors = ['Red', 'Green'];\nforeach($colors as $c) {\n  echo $c . ' ';\n}", result: "<p style='color:black;'>Red Green</p>" },

            // --- 5. Functions ---
            { name: "Custom Function", code: "function dreb_f_2($n) {\n  return $n * 2;\n}\necho dreb_f_2(5);", result: "<b style='color:black;'>10</b>" },

            // --- 6. Superglobals (Forms) ---
            { name: "$_GET Method", code: "// f l-url: index.php?id=10\n$id = $_GET['id'];\necho 'ID is: ' . $id;", result: "<p style='color:black;'>ID is: 10</p>" },
            { name: "$_POST Method", code: "// Kat-ched l-data mn l-form m-khbiya\n$user = $_POST['user'];", result: "<p style='color:black;'>K-t-khdem f l-Login o l-Inscriptions</p>" },

            // --- 7. Working with Strings ---
            { name: "strlen() (Length)", code: "echo strlen('Maroc');", result: "<b style='color:black;'>5</b> (3adad l-hrouf)" },
            { name: "str_replace()", code: "echo str_replace('JS', 'PHP', 'I love JS');", result: "<p style='color:black;'>I love PHP</p>" },

            // --- 8. Date & Time ---
            { name: "Date Function", code: "echo date('Y-m-d');", result: `<b style='color:black;'>${new Date().toISOString().slice(0,10)}</b>` }
        ]
    }
};
    
    css: {
        bg: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070"
        items: [
            { name: "Button Glow", code: "box-shadow: 0 0 10px cyan;", result: "<button style='box-shadow: 0 0 15px cyan; border:none; padding:10px;'>Glow</button>" }
        ]
    }
    js: {
        bg: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070"
        items: [
            { name: "Console Log", code: "console.log('Done!');", result: "<button onclick='console.log(\"Check Console!\")'>Click & Check F12</button>" }
        ]
    }
    php: {
        bg: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070"
        items: [
            { name: "PHP Variable", code: "$user = 'Amine';", result: "<b>User: Amine</b>" }
        ]
    }
;

function openCategory(cat) {
    // 1. Beddel Background degha degha
    document.getElementById('bg-overlay').style.backgroundImage = `url('${db[cat].bg}')`;
    
    // 2. T-khfi l-menu o t-talla3 l-guide
    document.getElementById('category-menu').classList.add('hidden');
    document.getElementById('guide-section').classList.remove('hidden');
    document.getElementById('guide-title').innerText = cat.toUpperCase() + " Explorer";
    
    const list = document.getElementById('guide-list');
    list.innerHTML = "";
    
    db[cat].items.forEach(item => {
        let div = document.createElement('div');
        div.className = "code-item";
        div.innerHTML = `<strong>${item.name}</strong>`;
        div.onclick = () => showPreview(item);
        list.appendChild(div);
    });
}

let currentLanguage = ''; // Bach n-3erfo wach l-user f HTML awla PHP...

function showPreview(item) {
    document.getElementById('previewTitle').innerText = item.name;
    
    // N-7etto l-koud l-asli f l-Editor
    const editor = document.getElementById('liveEditor');
    editor.value = item.code;
    
    // N-t-l3o l-natija l-oula
    updateLivePreview();
    
    document.getElementById('previewModal').style.display = "block";
}

function updateLivePreview() {
    const code = document.getElementById('liveEditor').value;
    const resultBox = document.getElementById('previewResult');
    
    // Ila knti f HTML, CSS, awla JS, ghadi n-renderiw l-koud direct
    // Hna drna wahed l-triqa simple bach i-ban l-koud m-khlet
    resultBox.innerHTML = code;
    
    // Bach n-khlli l-Scripts (JS) li k-i-t-ktbo f l-editor i-khdmo:
    const scripts = resultBox.querySelectorAll("script");
    scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        newScript.text = oldScript.text;
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

function goBack() {
    // Rje3 l-background l-asliya
    document.getElementById('bg-overlay').style.backgroundImage = "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070')";
    document.getElementById('category-menu').classList.remove('hidden');
    document.getElementById('guide-section').classList.add('hidden');
}

function closeModal() {
    document.getElementById('previewModal').style.display = "none";
}

// Bach t-sedd l-modal ila cliquiti f l-khwa
window.onclick = function(event) {
    if (event.target == document.getElementById('previewModal')) {
        closeModal();
    }
}
function runCode() {
    const code = document.getElementById('labEditor').value;
    const frame = document.getElementById('outputFrame');
    
    // Had l-khit k-i-ched l-koud o k-i-7etto west l-iframe bach i-t-9ra
    const frameDoc = frame.contentDocument || frame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(code);
    frameDoc.close();
}

// Bach y-khdem l-koud ghi t-f-teh l-page
window.onload = () => {
    runCode();
}