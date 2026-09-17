# TwoHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFour } from "@vercel/sdk/models/payloaddefault.js";

let value: TwoHundredAndFortyFour = {
  enableExternalRewriteCaching: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `enableExternalRewriteCaching` | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `projectId`                    | *string*                       | :heavy_check_mark:             | N/A                            |
| `projectName`                  | *string*                       | :heavy_check_mark:             | N/A                            |