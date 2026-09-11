# TwoHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSix } from "@vercel/sdk/models/artifacts.js";

let value: TwoHundredAndSix = {
  organizationId: "<id>",
  teamId: "<id>",
  teamName: "<value>",
  previousMode: "organization",
  mode: "organization",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `organizationId`                                 | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `teamId`                                         | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `teamName`                                       | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `previousMode`                                   | [models.PreviousMode](../models/previousmode.md) | :heavy_check_mark:                               | N/A                                              |
| `mode`                                           | [models.PayloadMode](../models/payloadmode.md)   | :heavy_check_mark:                               | N/A                                              |