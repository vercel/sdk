# Missing2

## Example Usage

```typescript
import { Missing2 } from "@vercel/sdk/models/createdeploymentop.js";

let value: Missing2 = {
  type: "header",
  key: "<key>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.CreateDeploymentMissingType](../models/createdeploymentmissingtype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `key`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `value`                                                                        | *models.CreateDeploymentMissingValue*                                          | :heavy_minus_sign:                                                             | N/A                                                                            |