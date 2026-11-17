# TwoHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyEight } from "@vercel/sdk/models/usereventpayload238prevproject.js";

let value: TwoHundredAndFiftyEight = {
  mode: "organization",
  organizationId: "<id>",
  previousMode: "organization",
  teamId: "<id>",
  teamName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.UserEventPayload258Mode](../models/usereventpayload258mode.md)           | :heavy_check_mark:                                                               | N/A                                                                              |
| `organizationId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousMode`                                                                   | [models.UserEventPayloadPreviousMode](../models/usereventpayloadpreviousmode.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |