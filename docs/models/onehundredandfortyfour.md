# OneHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFour } from "@vercel/sdk/models/payloadviewpreference.js";

let value: OneHundredAndFortyFour = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: true,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectId`                    | *string*                       | :heavy_check_mark:             | N/A                            |
| `projectName`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `enableExternalRewriteCaching` | *boolean*                      | :heavy_check_mark:             | N/A                            |