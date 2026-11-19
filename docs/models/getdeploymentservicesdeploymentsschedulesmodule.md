# GetDeploymentServicesDeploymentsSchedulesModule

Set when this build serves a Python schedule's module: the `@schedule` handlers that importing `module` registers.

## Example Usage

```typescript
import { GetDeploymentServicesDeploymentsSchedulesModule } from "@vercel/sdk/models/getdeploymentservicesdeploymentshttpheaders.js";

let value: GetDeploymentServicesDeploymentsSchedulesModule = {
  module: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `module`           | *string*           | :heavy_check_mark: | N/A                |