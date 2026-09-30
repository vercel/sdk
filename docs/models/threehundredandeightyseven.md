# ThreeHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightySeven } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: ThreeHundredAndEightySeven = {
  enabled: "default",
  environment: "production",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |