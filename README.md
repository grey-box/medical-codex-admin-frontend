# Medical Codex Administration Frontend

This repository contains the frontend application for the Medical Codex Administration system.

## Table of Contents

- [System Requirements](#system-requirements)
- [Local Development](#local-development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Azure Setup](#azure-setup)

## System Requirements

- [Node.js](https://nodejs.org/en) (v20 LTS recommended)
- IDE (Visual Studio Code, JetBrains IDEs, etc.)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/grey-box/medical-codex-admin-frontend.git
   cd medical-codex-admin-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
    - Copy `.env.template` to `.env.local`
    - Adjust values in `.env.local` as needed

4. Start the development server:
   ```bash
   npm run dev
   ```

   The application should now be running at `http://localhost:3000`.

## Testing

### Unit Tests (Jest)

```bash
npm run test                # Run tests
npm run test:coverage       # Run tests with coverage report
```

### End-to-End Tests (Cypress)

Ensure the development server is running on port 3000 before running Cypress tests.

```bash
npm run cypress:open        # Open Cypress Test Runner
npm run cypress:headless    # Run Cypress tests in headless mode
```

### Linting and Formatting

```bash
npm run fix-format-and-lint  # Auto-format code and run linter
```

## Deployment

(Add deployment instructions here if different from Azure setup)

## Azure Setup

### Prerequisites

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

### Installation Steps (MacOS)

1. Install Azure CLI:
   ```bash
   brew update && brew install azure-cli
   ```

2. Login to Azure:
   ```bash
   az login --use-device-code
   export AZ_SUBSCRIPTION_ID="your_subscription_id"
   az account set --subscription "${AZ_SUBSCRIPTION_ID}"
   ```

3. Set up environment variables:
   ```bash
   export AZ_APPSERVICE_PLAN="MedicalCodexApp"
   export AZ_RESGRP="project_codex_dev"
   export AZ_APP_NAME="MedicalCodexFrontend"
   ```

4. Create an App Service Plan (if not existing):
   ```bash
   az appservice plan create \
   --name "${AZ_APPSERVICE_PLAN}" \
   --resource-group "${AZ_RESGRP}" \
   --sku B1 \
   --is-linux \
   --tags project=codex
   ```

5. Create a web app:
   ```bash
   az webapp create --name "${AZ_APP_NAME}" \
   --resource-group "${AZ_RESGRP}" \
   --plan "${AZ_APPSERVICE_PLAN}" \
   --runtime "NODE:20-lts"
   ```

6. Configure environment variables:
   ```bash
   az webapp config appsettings set --name "${AZ_APP_NAME}" \
   --resource-group "${AZ_RESGRP}" \
   --settings SCM_DO_BUILD_DURING_DEPLOYMENT=1 \
   REACT_APP_API_URL="https://medicalcodexbackend.azurewebsites.net"
   ```

7. Deploy the web app:
   ```bash
   az webapp up --name "${AZ_APP_NAME}" \
   --resource-group "${AZ_RESGRP}" \
   --sku B1 --runtime "NODE:20-lts"
   ```

## Contributing

This project is developed by Grey-Box. You should contact the organization and join our volunteer team before doing extensive work on this software. 

We will gladly accept small fixes as pull requests.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.

For more information about the Apache License, Version 2.0, please visit:
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)_