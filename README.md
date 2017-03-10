# ExecuteShellWithJava
ExecuteShellWithJava allows you to integrate Shell scripting to execute command from terminal automatically. (Ubuntu)

# Understand File structure, purpose and use

<h2>File Structure</h2>
<pre>
ExecuteShellWithJava
│   build.xml
│   README.md
│
├───build //the project folder hold the compiled classes, meta information, test cases, and distribution folder.
|
├───nbproject // Contains all the netbeans metadata about your project. When you go Project -> properties all the settings (and others) that you find there are stored in the nbProjects folder.
│   │   ant-deploy.xml
│   │   build-impl.xml
│   │   genfiles.properties
│   │   project.properties
│   │   project.xml
│   │
│   └───private
│           private.properties
│           private.xml
│
├───src // The source folder only contains your source code
│   ├───conf
│   │       MANIFEST.MF
│   │
│   └───java // src contains java code
│       └───myPkg // package named as a myPkg
│               FileGeneratorMain.java
│               HadoopProcessingClass.java
│               ProcessData.java
│
└───web  // Contains web pages like html,jsp,css,js,(assets ... etc.)
    │   index.html //PURPOSE : General HTML page contains two buttons. (1) Start hadoop (2) Process data
    │   script.js //Asynchronous call to start hadoop using terminal (No need to write command on a terminal, it will automatically managed by this script)
    │
    ├───META-INF // Contains meta data about the contents of the JAR or main class
    │       context.xml // contains a "Context" tag (Context Fragment) for a single Tomcat web application. This can be used to define certain behaviours for your application, JNDI resources and other settings.
    │
    └───WEB-INF // Contains resources pertaining to the Web application including a web.xml file. Also contained a deployment descriptor file, called web.xml
            web.xml // Contains welcome file, servlet and servlet mapping
</pre>


# How to run ExecuteShellWithJava
1. Open terminal in backside. (Its require)<br>
2. Run netbeans project using tomcat or glassfish server. <br>
3. You can see two buttons, Start hadoop and process data.<br>
- You will get success message if hadoop started successfully and so another button "Process data" will be visible. [<code>disabled = false</code>]<br>
4. If your mentioned path have required files, it will start uploading and process the data as per your algorithm.

<h3>Conclusion</h3>
Hence, you can integrate this project with java-hadoop, where you want to call any command from terminal. [For Bigdata, hadoop is more preferable and it gives best performance in ubuntu]

If you have any Query contact me!


