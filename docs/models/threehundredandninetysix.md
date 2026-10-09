# ThreeHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetySix } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: ThreeHundredAndNinetySix = {
  enabled: "default",
  environment: "production",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |