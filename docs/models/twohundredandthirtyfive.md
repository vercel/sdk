# TwoHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyFive } from "@vercel/sdk/models/usereventpayload195oldenvvartype.js";

let value: TwoHundredAndThirtyFive = {
  login: "Rose.Monahan63",
  provider: "gitlab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload235Provider](../models/usereventpayload235provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |