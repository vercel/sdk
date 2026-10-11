# TwoHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNine } from "@vercel/sdk/models/oldenvvar.js";

let value: TwoHundredAndNine = {
  login: "Joanie_Hahn71",
  provider: "apple",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload209Provider](../models/usereventpayload209provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |