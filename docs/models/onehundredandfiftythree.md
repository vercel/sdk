# OneHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyThree } from "@vercel/sdk/models/headinfo.js";

let value: OneHundredAndFiftyThree = {
  provider: "<value>",
  organizationId: "<id>",
  repository: "<value>",
  key: "<key>",
  visibility: "config",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `provider`                                   | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `organizationId`                             | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `repository`                                 | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `key`                                        | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `visibility`                                 | [models.Visibility](../models/visibility.md) | :heavy_check_mark:                           | N/A                                          |
| `changedFields`                              | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |