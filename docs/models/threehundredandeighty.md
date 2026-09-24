# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndEighty = {
  enabled: "off",
  environment: "preview",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |