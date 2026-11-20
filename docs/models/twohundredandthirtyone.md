# TwoHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyOne } from "@vercel/sdk/models/newprojects.js";

let value: TwoHundredAndThirtyOne = {
  login: "Luigi.Dietrich",
  provider: "gitlab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `login`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload231Provider](../models/usereventpayload231provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |