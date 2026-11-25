# FourHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFive } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndFiftyFive = {
  enabled: "on",
  environment: "production",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |