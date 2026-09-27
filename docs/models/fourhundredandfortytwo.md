# FourHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyTwo } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndFortyTwo = {
  decision: {
    authoritative: false,
    basis: "gmail",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: true,
    mxOutcome: "not-checked",
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
| `provider`                                                                     | [models.UserEventPayload442Provider](../models/usereventpayload442provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |