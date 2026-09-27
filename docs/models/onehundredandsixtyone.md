# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/usereventjobpayloadprovider.js";

let value: OneHundredAndSixtyOne = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "secret",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `changedFields`                              | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `key`                                        | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `organizationId`                             | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `provider`                                   | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `repository`                                 | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `visibility`                                 | [models.Visibility](../models/visibility.md) | :heavy_check_mark:                           | N/A                                          |