# FourHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifty } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FourHundredAndFifty = {
  enabled: "off-force",
  environment: "production",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |