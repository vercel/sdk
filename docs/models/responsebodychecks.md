# ResponseBodyChecks

## Example Usage

```typescript
import { ResponseBodyChecks } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyChecks = {
  deploymentAlias: {
    state: "failed",
    startedAt: 9310.58,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                              | [models.ResponseBodyDeploymentAlias](../models/responsebodydeploymentalias.md)                 | :heavy_check_mark:                                                                             | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes. |