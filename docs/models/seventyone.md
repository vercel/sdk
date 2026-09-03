# SeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyOne } from "@vercel/sdk/models/ceilingmode.js";

let value: SeventyOne = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload71Project](../models/usereventpayload71project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `versionId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |