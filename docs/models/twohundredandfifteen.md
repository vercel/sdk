# TwoHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifteen } from "@vercel/sdk/models/usereventpayload140newteam.js";

let value: TwoHundredAndFifteen = {
  login: "Russel_Rosenbaum4",
  provider: "bitbucket",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload215Provider](../models/usereventpayload215provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |