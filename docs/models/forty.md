# Forty

The payload of the event, if requested.

## Example Usage

```typescript
import { Forty } from "@vercel/sdk/models/userevent.js";

let value: Forty = {
  privateModel: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `privateModel`                                                 | [models.PayloadPrivateModel](../models/payloadprivatemodel.md) | :heavy_check_mark:                                             | N/A                                                            |