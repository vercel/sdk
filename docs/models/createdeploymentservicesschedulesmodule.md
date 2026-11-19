# CreateDeploymentServicesSchedulesModule

Set when this build serves a Python schedule's module: the `@schedule` handlers that importing `module` registers.

## Example Usage

```typescript
import { CreateDeploymentServicesSchedulesModule } from "@vercel/sdk/models/createdeploymentresponsebodytarget.js";

let value: CreateDeploymentServicesSchedulesModule = {
  module: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `module`           | *string*           | :heavy_check_mark: | N/A                |