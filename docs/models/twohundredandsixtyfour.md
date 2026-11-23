# TwoHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFour } from "@vercel/sdk/models/usereventpayload260next.js";

let value: TwoHundredAndSixtyFour = {
  mode: "organization",
  organizationId: "<id>",
  previousMode: "team",
  teamId: "<id>",
  teamName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.UserEventPayload264Mode](../models/usereventpayload264mode.md)           | :heavy_check_mark:                                                               | N/A                                                                              |
| `organizationId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousMode`                                                                   | [models.UserEventPayloadPreviousMode](../models/usereventpayloadpreviousmode.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |