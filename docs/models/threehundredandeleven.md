# ThreeHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEleven } from "@vercel/sdk/models/twohundredandfiftysix.js";

let value: ThreeHundredAndEleven = {
  environment: "production",
  enabled: "default-force",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `enabled`                                                    | [models.Enabled](../models/enabled.md)                       | :heavy_check_mark:                                           | N/A                                                          |