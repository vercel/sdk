# SeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyThree } from "@vercel/sdk/models/changedfields.js";

let value: SeventyThree = {
  appName: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `after`                              | [models.After](../models/after.md)   | :heavy_minus_sign:                   | N/A                                  |
| `appId`                              | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `appName`                            | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `before`                             | [models.Before](../models/before.md) | :heavy_minus_sign:                   | N/A                                  |
| `installationId`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `organizationId`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |