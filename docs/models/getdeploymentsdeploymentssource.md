# GetDeploymentsDeploymentsSource

The external platform that created the deployment (e.g. its display name).

## Example Usage

```typescript
import { GetDeploymentsDeploymentsSource } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsDeploymentsSource = {
  name: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `name`                        | *string*                      | :heavy_check_mark:            | Display name of the platform. |