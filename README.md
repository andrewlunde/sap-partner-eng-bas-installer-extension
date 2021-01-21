The SAP Partner Engineering Business Application Studio(BAS) Installer Extension way to install Python,NOTROOT, other tools for customers using Eclipse Theia based IDE's. 

## Python 2.9.0 Install

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install Python__.  Open up the output and select the __Python Installer__ occurrence to see that it completed without issues.  Then verify that python is available by opening a new terminal and issuing the command.

```
python -V
```

<img src=https://blogs.sap.com/wp-content/uploads/2021/01/partner_eng_bas_installer_sm-1.gif width=582 height=346 />


## Post Python Install Setup

## Select Python Interpreter

Open the command palette with View -> Find Command... and search for "Python:".  Run the "Python: Select Interpreter" command and select /home/user/python_3_9_0/bin/python.

<!-- <img src=https://github.com/andrewlunde/sap-partner-eng-bas-installer-extension/releases/download/v0.0.0/020_select_python.gif width=1056 height=522> -->

## NOTROOT Install

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install NOTROOT__.  Open up the output and select the __NOTROOT Installer__ occurrence to see that it completed without issues.  


## Verify NOTROOT

NOTROOT installs a single command JSON Query(jq).  Verify that it's installed by performing a jq -V in a new terminal.

```
jq -V
```

<img src=https://blogs.sap.com/wp-content/uploads/2021/01/partner_eng_inst_notroot.gif width=582 height=346 />


# SMSI CF-plugin Install

This is a plugin for the Cloud Foundry CLI tool.  It's helpful when doing multitenant application development where the service manager is handling the lifecycle of containers that are created upon customer subscriptions.

Normally these containers are not visible to the Database Explorer since they are not created as hana/hdi-shared instances.

```
cf install-plugin -r CF-Community "service-management"
```
