# FourHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwo } from "@vercel/sdk/models/usereventpayload385project.js";

let value: FourHundredAndTwo = {
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