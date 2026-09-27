# TwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyNine } from "@vercel/sdk/models/userevent.js";

let value: TwentyNine = {
  privateModel: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `privateModel`                                                 | [models.PayloadPrivateModel](../models/payloadprivatemodel.md) | :heavy_check_mark:                                             | N/A                                                            |