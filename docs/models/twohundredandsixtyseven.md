# TwoHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySeven } from "@vercel/sdk/models/twohundredandsixtyseven.js";

let value: TwoHundredAndSixtySeven = {
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
| `mode`                                                                           | [models.UserEventPayload267Mode](../models/usereventpayload267mode.md)           | :heavy_check_mark:                                                               | N/A                                                                              |
| `organizationId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousMode`                                                                   | [models.UserEventPayloadPreviousMode](../models/usereventpayloadpreviousmode.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |