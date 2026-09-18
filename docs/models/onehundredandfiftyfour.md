# OneHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFour } from "@vercel/sdk/models/nextrule.js";

let value: OneHundredAndFiftyFour = {
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