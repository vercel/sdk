# OneHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyFive } from "@vercel/sdk/models/usereventpayload171gituserid.js";

let value: OneHundredAndSeventyFive = {
  configurations: [
    {
      integrationId: "<id>",
      configurationId: "<id>",
      integrationSlug: "<value>",
    },
  ],
  ownerId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `configurations`                                       | [models.Configurations](../models/configurations.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `ownerId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |