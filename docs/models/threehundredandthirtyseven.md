# ThreeHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySeven } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndThirtySeven = {
  environment: "production",
  enabled: "off-force",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `enabled`                                                    | [models.Enabled](../models/enabled.md)                       | :heavy_check_mark:                                           | N/A                                                          |