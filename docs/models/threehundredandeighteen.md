# ThreeHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighteen } from "@vercel/sdk/models/twohundredandninetyseven.js";

let value: ThreeHundredAndEighteen = {
  oldPasswordProtection: "all_except_custom_domains",
  passwordProtection: null,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `oldPasswordProtection`               | *models.PayloadOldPasswordProtection* | :heavy_check_mark:                    | N/A                                   |
| `passwordChanged`                     | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `passwordProtection`                  | *models.PayloadPasswordProtection*    | :heavy_check_mark:                    | N/A                                   |
| `projectId`                           | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `projectName`                         | *string*                              | :heavy_minus_sign:                    | N/A                                   |