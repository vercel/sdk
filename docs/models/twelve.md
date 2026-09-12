# Twelve

The payload of the event, if requested.

## Example Usage

```typescript
import { Twelve } from "@vercel/sdk/models/userevent.js";

let value: Twelve = {
  teamId: "<id>",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [models.UserEventPayload12Provider](../models/usereventpayload12provider.md) | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to "stripe" when absent.              |
| `providerAccount`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to `stripeAccount` when absent.       |
| `stripeAccount`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe". Equivalent to `providerAccount`.        |
| `stripeOrganisation`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe".                                         |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `actorId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Okta user id.                                                                |
| `actorType`                                                                  | [models.ActorType](../models/actortype.md)                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `actorName`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |