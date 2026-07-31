# Sixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixteen } from "@vercel/sdk/models/userevent.js";

let value: Sixteen = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `credential`                                 | [models.Credential](../models/credential.md) | :heavy_check_mark:                           | N/A                                          |