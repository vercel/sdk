# FourHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySix } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FourHundredAndFiftySix = {
  enabled: "off",
  environment: "production",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |