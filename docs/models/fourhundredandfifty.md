# FourHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifty } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndFifty = {
  enabled: false,
  environment: "production",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `enabled`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `projectId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `projectName`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |