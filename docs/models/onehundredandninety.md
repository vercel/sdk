# OneHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinety } from "@vercel/sdk/models/usereventpayloadprevious.js";

let value: OneHundredAndNinety = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentsEnabled: false,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectId`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `projectName`               | *string*                    | :heavy_check_mark:          | N/A                         |
| `previewDeploymentsEnabled` | *boolean*                   | :heavy_check_mark:          | N/A                         |