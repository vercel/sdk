# OneHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNine = {
  environment: "production",
  enabled: "default-force",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `enabled`                                                    | [models.Enabled](../models/enabled.md)                       | :heavy_check_mark:                                           | N/A                                                          |