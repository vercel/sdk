# TwoHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTen } from "@vercel/sdk/models/payloaddefault.js";

let value: TwoHundredAndTen = {
  mode: "team",
  organizationId: "<id>",
  previousMode: "team",
  teamId: "<id>",
  teamName: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `mode`                                           | [models.PayloadMode](../models/payloadmode.md)   | :heavy_check_mark:                               | N/A                                              |
| `organizationId`                                 | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `previousMode`                                   | [models.PreviousMode](../models/previousmode.md) | :heavy_check_mark:                               | N/A                                              |
| `teamId`                                         | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `teamName`                                       | *string*                                         | :heavy_check_mark:                               | N/A                                              |