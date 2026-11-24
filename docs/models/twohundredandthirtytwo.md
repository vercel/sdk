# TwoHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyTwo } from "@vercel/sdk/models/usereventpayloadlasteditedbyprincipal.js";

let value: TwoHundredAndThirtyTwo = {
  login: "Seth_Witting53",
  provider: "saml",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload232Provider](../models/usereventpayload232provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |