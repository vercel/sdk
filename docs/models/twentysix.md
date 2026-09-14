# TwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySix } from "@vercel/sdk/models/userevent.js";

let value: TwentySix = {
  privateModel: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `privateModel`                                                 | [models.PayloadPrivateModel](../models/payloadprivatemodel.md) | :heavy_check_mark:                                             | N/A                                                            |