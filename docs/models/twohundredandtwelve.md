# TwoHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwelve } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndTwelve = {
  projectId: "<id>",
  projectName: "<value>",
  enableExternalRewriteCaching: false,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectId`                    | *string*                       | :heavy_check_mark:             | N/A                            |
| `projectName`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `enableExternalRewriteCaching` | *boolean*                      | :heavy_check_mark:             | N/A                            |