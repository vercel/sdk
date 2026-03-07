# TwoHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyTwo } from "@vercel/sdk/models/twohundredandfourteen.js";

let value: TwoHundredAndThirtyTwo = {
  environment: "preview",
  enabled: "off-force",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `enabled`                                                    | [models.Enabled](../models/enabled.md)                       | :heavy_check_mark:                                           | N/A                                                          |