# medical-codex-admin-frontend

Medical codex Administration Frontend

## System Requirements

- Node: https://nodejs.org/en
- IDE (Visual Studio Code, JetBrains IDEs, etc.)

## Local Instance Instructions

1. Open your preferred IDE of choice. I am using Visual Studio Code.
2. Open a new terminal, and clone the repository using the following command (SSH not considered as that didn't seem required):

```bash
git clone https://github.com/grey-box/medical-codex-admin-frontend.git
```

3. Ensure that you are in the working directory of the repository that you just cloned.
4. Once you are in the root of the clone repository, you need to install requirements using the following command:

```bash
npm i
```

5. Ensure that the backend is running, or if the APIs are deployed, you may only need to adjust your `.env.local`. Please refer to the `.env.template` for help regarding `.env.local` creation. This is also under the assumption that you have the backend endpoints exposed from the backend, or hosted on Azure.
6. Boot up the development server using the following command. Assuming everything else is running fine, you should see `localhost:3000` exposed.:

```bash
npm run dev
```

---

## Notes

- We have implemented unit testing, end-to-end testing and linting to ensure the application's code is as stable as possible. The CI workflow that gets kicked off runs a format check, a linter, our unit tests and end-to-end tests. The linter is a bit sensitive, but it helps ensure code consistency and makes it easier for future developers to understand what changed with each commit with the diff-checker that Git/GitHub provides.
- We integrated a script to help automate the process before developers push, which will auto-format your code according to 'Prettier' standards, and then run a lint to check if any code quality issues are detected.

```bash
 `npm run fix-format-and-lint`
```

---

## Installation steps for Azure (MacOS based)

```shell
brew update && brew install azure-cli
```

## Login to Azure

```shell
az login --use-device-code
export AZ_SUBSCRIPTION_ID=""
az account set --subscription "${AZ_SUBSCRIPTION_ID}"
```

## Create an App Service Plan

Set the Service Plan variables

```shell
export AZ_APPSERVICE_PLAN="MedicalCodexApp"
export AZ_RESGRP="project_codex_dev"
export AZ_APP_NAME="MedicalCodexFrontend"
```

If you don't have already an App Service Plan, create one

```shell
az appservice plan create \
--name "${AZ_APPSERVICE_PLAN}" \
--resource-group "${AZ_RESGRP}" \
--sku B1 \
--is-linux \
--tags project=codex
```

## Create a web app

```shell
az webapp create --name "${AZ_APP_NAME}" \
--resource-group "${AZ_RESGRP}" \
--plan "${AZ_APPSERVICE_PLAN}" \
--runtime "NODE:20-lts"
```

## Configure Environment Variables

```shell
az webapp config appsettings set --name "${AZ_APP_NAME}" --resource-group "${AZ_RESGRP}" --settings SCM_DO_BUILD_DURING_DEPLOYMENT=1
```

```shell
az webapp config appsettings set --name "${AZ_APP_NAME}" --resource-group "${AZ_RESGRP}" --settings REACT_APP_API_URL="https://medicalcodexbackend.azurewebsites.net"
```

## Deploy Web App

```
az webapp up --name "${AZ_APP_NAME}" \
--resource-group "${AZ_RESGRP}" \
--sku B1 --runtime "NODE:20-lts"
```
