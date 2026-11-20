# OneHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyTwo } from "@vercel/sdk/models/usereventjobpayloaddeployhook.js";

let value: OneHundredAndEightyTwo = {
  previousRule: {
    email: "Judah_Altenwerth@yahoo.com",
  },
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `previousRule`                                                         | [models.PreviousRule](../models/previousrule.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |
| `team`                                                                 | [models.UserEventPayload182Team](../models/usereventpayload182team.md) | :heavy_check_mark:                                                     | N/A                                                                    |