# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/resourcelimits.js";

let value: OneHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  customEnvironmentId: "<id>",
  customEnvironmentSlug: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `projectName`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `customEnvironmentId`                                  | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `customEnvironmentSlug`                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [models.PayloadNext](../models/payloadnext.md)         | :heavy_check_mark:                                     | N/A                                                    |