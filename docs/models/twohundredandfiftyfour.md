# TwoHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFour } from "@vercel/sdk/models/factorsorigin.js";

let value: TwoHundredAndFiftyFour = {
  mode: "team",
  organizationId: "<id>",
  previousMode: "organization",
  teamId: "<id>",
  teamName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.UserEventPayloadMode](../models/usereventpayloadmode.md)                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `organizationId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousMode`                                                                   | [models.UserEventPayloadPreviousMode](../models/usereventpayloadpreviousmode.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |