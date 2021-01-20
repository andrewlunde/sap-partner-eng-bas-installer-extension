The SAP Partner Engineering Business Application Studio(BAS) Installer Extension way to install Python,NOTROOT, other tools for customers using Eclipse Theia based IDE's. 

## Python 2.9.0 Install

Open the command palette with View -> Find Command... and search for "BAS".  Run the "BAS: Install Python 2.9.0" command.

<!-- <img src=https://github.com/andrewlunde/sap-partner-eng-bas-installer-extension/releases/download/v0.0.0/010_inst_python.gif width=1056 height=522> -->


## Post Python Install Setup

## Select Python Interpreter

Open the command palette with View -> Find Command... and search for "Python:".  Run the "Python: Select Interpreter" command and select /home/user/python_3_9_0/bin/python.

<!-- <img src=https://github.com/andrewlunde/sap-partner-eng-bas-installer-extension/releases/download/v0.0.0/020_select_python.gif width=1056 height=522> -->

# SMSI CF-plugin Install

This is a plugin for the Cloud Foundry CLI tool.  It's helpful when doing multitenant application development where the service manager is handling the lifecycle of containers that are created upon customer subscriptions.

Normally these containers are not visible to the Database Explorer since they are not created as hana/hdi-shared instances.

```
cf install-plugin -r CF-Community "service-management"
```
