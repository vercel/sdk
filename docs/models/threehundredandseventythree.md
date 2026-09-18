# ThreeHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyThree } from "@vercel/sdk/models/payloadcountry.js";

let value: ThreeHundredAndSeventyThree = {
  enabled: "off",
  environment: "production",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | [models.Enabled](../models/enabled.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `environment`                                                                  | [models.UserEventPayloadEnvironment](../models/usereventpayloadenvironment.md) | :heavy_check_mark:                                                             | N/A                                                                            |