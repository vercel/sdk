# OneHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightySix } from "@vercel/sdk/models/redisoveragereason.js";

let value: OneHundredAndEightySix = {
  configurations: [
    {
      configurationId: "<id>",
      integrationId: "<id>",
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