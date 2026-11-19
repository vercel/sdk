# GetDeploymentServicesSchedulesModule

Set when this build serves a Python schedule's module: the `@schedule` handlers that importing `module` registers.

## Example Usage

```typescript
import { GetDeploymentServicesSchedulesModule } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentServicesSchedulesModule = {
  module: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `module`           | *string*           | :heavy_check_mark: | N/A                |