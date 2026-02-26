# GetDeploymentsOrigin

Reference back to the entity on the platform that initiated the deployment.

## Example Usage

```typescript
import { GetDeploymentsOrigin } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsOrigin = {
  type: "url",
  value: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [models.GetDeploymentsDeploymentsType](../models/getdeploymentsdeploymentstype.md) | :heavy_check_mark:                                                                 | Whether the value is an opaque identifier or a URL.                                |
| `value`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The identifier or URL pointing to the originating entity.                          |