# TwoHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFive } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndFortyFive = {
  environment: "preview",
  enabled: "on",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `enabled`                                                    | [models.Enabled](../models/enabled.md)                       | :heavy_check_mark:                                           | N/A                                                          |