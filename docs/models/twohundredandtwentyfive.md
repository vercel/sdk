# TwoHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFive } from "@vercel/sdk/models/edgeconfig.js";

let value: TwoHundredAndTwentyFive = {
  login: "Rubie_McDermott24",
  provider: "github-custom-host",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload225Provider](../models/usereventpayload225provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |