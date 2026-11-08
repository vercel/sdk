# TwoHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwenty } from "@vercel/sdk/models/payloadinitiator.js";

let value: TwoHundredAndTwenty = {
  login: "Patrick.Wilderman-Osinski",
  provider: "github-custom-host",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload220Provider](../models/usereventpayload220provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |