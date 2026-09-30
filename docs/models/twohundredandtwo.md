# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/redisoveragereason.js";

let value: TwoHundredAndTwo = {
  login: "Halie_Koss",
  provider: "github-custom-host",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload202Provider](../models/usereventpayload202provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |