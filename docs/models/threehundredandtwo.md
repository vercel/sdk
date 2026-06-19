# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndTwo = {
  environment: "production",
  enabled: "default-force",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `enabled`                                                    | [models.Enabled](../models/enabled.md)                       | :heavy_check_mark:                                           | N/A                                                          |