# FourHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyNine } from "@vercel/sdk/models/fourhundredandthirteen.js";

let value: FourHundredAndThirtyNine = {
  decision: {
    authoritative: false,
    basis: "none",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: false,
    mxOutcome: "lookup-error",
  },
  outcome: "account-matched",
  provider: "google",
  providerSubjectId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `decision`                                                                     | [models.PayloadDecision](../models/payloaddecision.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | [models.PayloadOutcome](../models/payloadoutcome.md)                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload439Provider](../models/usereventpayload439provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |