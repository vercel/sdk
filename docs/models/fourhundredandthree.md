# FourHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThree } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: FourHundredAndThree = {
  processes: "preserve",
  projectId: "<id>",
  sandboxName: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `processes`                                | [models.Processes](../models/processes.md) | :heavy_check_mark:                         | N/A                                        |
| `projectId`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `sandboxName`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |