# Has2

## Example Usage

```typescript
import { Has2 } from "@vercel/sdk/models/createdeploymentop.js";

let value: Has2 = {
  type: "header",
  key: "<key>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.CreateDeploymentHasType](../models/createdeploymenthastype.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `key`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `value`                                                                | *models.CreateDeploymentHasValue*                                      | :heavy_minus_sign:                                                     | N/A                                                                    |