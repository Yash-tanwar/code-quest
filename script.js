document.addEventListener("DOMContentLoaded", function() {
    // Initialize CodeMirror editor
    var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        lineNumbers: true,
        mode: "text/x-c++src",
        theme: "default"
    });

    // Placeholder for running C++ code
    function runCppCode(code) {
        // Simulate a simple C++ code execution
        if (code.includes('cout << "Hello, World!";')) {
            return "Hello, World!";
        } else {
            return "Error: Please write code to print 'Hello, World!'";
        }
    }

    // Run Code button event listener
    document.getElementById("run-code").addEventListener("click", function() {
        var code = editor.getValue();
        var output = runCppCode(code);
        document.getElementById("output").textContent = output;
    });
});
