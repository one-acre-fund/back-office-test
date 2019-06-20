Finance Automation
=================

Automation framework for 'Finance Application testing'. This project will help BOP to test their application using automation to reduce the manual time.


Getting Started
---------------

Use npm to install Protractor globally with:

```
npm install -g protractor
```

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.


Setting up a Selenium Server
----------------------------

Prior to starting the selenium server, download the necessary driver binaries with.

```
webdriver-manager update
```

Starting the Selenium Server
----------------------------

By default, the selenium server will run on `http://localhost:4444/wd/hub`.


```
webdriver-manager start
```

Other useful commands
---------------------

View different versions of server and driver files:

```
webdriver-manager status
```

Clear out the server and driver files. If `webdriver-manager start` does not work, try to clear out the saved files.

```
webdriver-manager clean
```

Running / stopping server in background process (stopping is not yet supported on standalone server 3.x.x):

```
webdriver-manager start --detach
webdriver-manager shutdown
```

Help commands
-------------

Wedriver-manager has a main help option: `webdriver-manager help`. There are also other built in help menus for each of the commands. So for example, if you would like to look up all the flag options you can set in `update`, you could run `webdriver-manager update help`.

Here are a list of all the commands with help:

```
webdriver-manager update help
webdriver-manager start help
webdriver-manager clean help
webdriver-manager status help
```

Technology/Framework Used:
--------------

```
Technology Used : Javascript, Selenium
Framework Used: Protractor
```

Run the test:
--------------

Now run the test with:

```
protractor conf.js
```

You should see a Chrome browser window open up and navigate to the finance portal page. :)


